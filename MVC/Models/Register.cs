using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Mvc.Models
{
    public class Register
    {
        [Required(ErrorMessage = "Cant be empty")]
        [Display(Name = "Name")]
        public string Rname { get; set; }
        [Required(ErrorMessage = "Cant be empty")]
        [Display(Name = "Address")]
        [DataType(DataType.MultilineText)]
        public string Raddress { get; set; }
        public Course courselist { get; set; }
        public string Gender { get; set; }
        
        [Required(ErrorMessage = "Cant be empty")]
        [Display(Name = "Email")]
        [DataType(DataType.EmailAddress)]

        
        public string Remail { get; set; }
        [Required(ErrorMessage = "Cant be empty")]
        [Display(Name = "Username")]
        public string Rusername { get; set; }
        [Required(ErrorMessage = "Cant be empty")]
        [Display(Name = "Password")]
        [DataType(DataType.Password)]
        public string Rpassword { get; set; }
        [Required(ErrorMessage = "Cant be empty")]
        [Display(Name = "Confirm Password")]
        [DataType(DataType.Password)]
        public string Rconfirm { get; set; }
    }

    public enum Course
    {
        BCA,
        MCA,
        BCOM,
        MBA
    }

}