using System.ComponentModel.DataAnnotations;

namespace Resume.Models
{
    public class WorkExperience
    {
        [Key]
        [Required]
        public long WorkExperienceId { get; set; }
        [StringLength(50)]
        public string? JobTitle { get; set; }
        public DateTime JobStartDate { get; set; }
        public DateTime JobEndDate { get; set; }
        [StringLength(500)]
        public string? JobSummary { get; set; }
    }
}
