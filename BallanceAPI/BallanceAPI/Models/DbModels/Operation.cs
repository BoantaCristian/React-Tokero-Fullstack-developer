using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BallanceAPI.Models.DbModels
{
    public class Operation
    {
        [Key] //data annotation to mark a property as primary key
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public virtual ICollection<Deposit> Deposits { get; set; }
        public virtual ICollection<Withdrawal> Withdrawals { get; set; }
        public virtual ICollection<TradeOrder> TradeOrders { get; set; }  //create reference of the PK of this table
        public virtual OperationType OperationTypes { get; set; } //create reference of the FK of the OperaationType table
    }
}
