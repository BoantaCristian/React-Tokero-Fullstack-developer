using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BallanceAPI.Models;
using BallanceAPI.Models.DbModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BallanceAPI.Controllers
{
    [Route("api/[controller]")] //route of the controller: serverHost/controllerName
    [ApiController]
    public class BallanceController : ControllerBase //controller type class: inherits properties and methods from the base controller class
    {
        private readonly ApplicationContext _context; //declare in a local variable 

        public BallanceController(ApplicationContext context) //call in the parameter the context services which mainly consist of methods to manipulate the data retrieved or pushed to database
        {
            _context = context; //inject in local variable context services
        }

        [HttpGet] //http get method that handles requests
        [Route("GetDeposits")] //route of the method: serverHost/controllerName/methodName
        public IEnumerable<Deposit> GetDeposits()
        {
            return _context.Deposits; //returns an through an interface enumerable objects of the type Deposit which is the model class for Deposits table
        }

        [HttpGet]
        [Route("GetWithdrawals")]
        public IEnumerable<Withdrawal> GetWithdrawals()
        {
            return _context.Withdrawals;
        }

        [HttpGet]
        [Route("GetTradeOrders")]
        public async Task<IActionResult> GetTradeOrders() //IActionResult returns a http status: Ok:200, Unauthorized: 401, Not Found: 404, etc. and it can also have in its body an object
        {
            try
            {
                var result = await _context.TradeOrders.Include(i => i.TradeOrdersTypes).Select(s => new { s.Id, s.Amount, s.TradeOrdersTypes.Name}).ToListAsync(); //get all the trade orders along with their types, select the desired columns and return a list of objects
                //linq version
                //var linq = (from tradeOrders in _context.TradeOrders
                //           join tradeOrderTypes in _context.TradeOrdersTypes on tradeOrders.TradeOrdersTypes.Id equals tradeOrderTypes.Id
                //           select new
                //           {
                //               tradeOrders.Id,
                //               tradeOrders.Amount,
                //               tradeOrderTypes.Name
                //           });

                if (result != null)
                {
                    return Ok(result); // return ok status with the trade orders object
                }
                else
                    return BadRequest(new { message = "No trade orders found!" });
            }
            catch (Exception e)
            {
                return BadRequest(e);
                throw e;
            }
        }//I know this function is more complicated than it should be
    }
}