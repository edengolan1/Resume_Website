using System.ComponentModel.DataAnnotations;

namespace Resume.Models
{
    public class Education
    {
        [Key]
        [Required]
        public long EducationId { get; set; }
        [StringLength(45)]
        public string? NameSchool { get; set; }
        [StringLength(50)]
        public string? EducationTitle { get; set; }
        public DateTime EducationStartDate { get; set; }
        public DateTime EducationEndDate { get; set; }
        [StringLength(1000)]
        public string? EducationDescription { get; set; }
    }
}
