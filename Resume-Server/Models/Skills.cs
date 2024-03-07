using System.ComponentModel.DataAnnotations;

namespace Resume.Models
{
    public class Skills
    {
        [Key]
        [Required]
        public long SkillId { get; set; }
        [StringLength(20)]
        public string? SkillName { get; set; }
        public short SkillPrecent { get; set; }
    }
}