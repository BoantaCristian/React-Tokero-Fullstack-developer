using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BallanceAPI.Models.DbModels
{
    public class Withdrawal
    {
        [Key]
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public string ToAddress { get; set; }
        public bool WasApprovedByUser2FA { get; set; }
        public virtual Operation Operations { get; set; }
    }
}
