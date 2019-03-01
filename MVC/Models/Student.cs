using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Mvc.Models
{
    public class Student
    {
        [Required(ErrorMessage="Cant be empty")]
        [Display(Name="Student Name")]
       // [RegularExpression()]
        public string Sname { get; set; }
        [Required(ErrorMessage = "Cant be empty")]
        [Display(Name = "Student Address")]
        [DataType(DataType.MultilineText)]
        public string Saddress { get; set; }
        [Required(ErrorMessage = "Cant be empty")]
        [Display(Name = "Student Email")]
        [DataType(DataType.EmailAddress)]
        public string Semail { get; set; }
        public Gender genderlist { get; set; }
    }
    public enum Gender
    {
        Male,
        Female
    }
}