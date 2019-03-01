using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace MvcDatabase.Models
{
    public class Customer
    {
        public int CustomerId { get; set; }


        [Required(ErrorMessage = "Cant be empty")]
        [Display(Name = "Name")]
        public string Cname { get; set; }
        [Required(ErrorMessage = "Cant be empty")]
        [Display(Name = "Address")]
        [DataType(DataType.MultilineText)]
        public string Caddress { get; set; }
        [Required(ErrorMessage = "Cant be empty")]
        [Display(Name = "Email")]
        [DataType(DataType.EmailAddress)]
        public string Cemail { get; set; }
        [Required(ErrorMessage = "Cant be empty")]
        [Display(Name = "Username")]
        public string Cusername { get; set; }
        [Required(ErrorMessage = "Cant be empty")]
        [Display(Name = "Password")]
        [DataType(DataType.Password)]
        public string Cpassword { get; set; }
    }
}