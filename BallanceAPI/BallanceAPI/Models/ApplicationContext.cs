using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BallanceAPI.Models
{
    public class ApplicationContext : DbContext  //mark this class as a context class in order inherit all the functions needed to declare db models for database
    {
        public ApplicationContext(DbContextOptions options) : base(options) //inject in the constructor the library from the base class of Database Context
        {

        }
    }
}
