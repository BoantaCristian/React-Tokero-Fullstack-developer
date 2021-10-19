using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BallanceAPI.Models.DbModels
{
    public class Deposit
    {
        [Key]
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public string FromAddress { get; set; }
        public virtual Operation Operations { get; set; }
    }
}
