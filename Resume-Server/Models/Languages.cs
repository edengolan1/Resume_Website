using System.ComponentModel.DataAnnotations;

namespace Resume.Models
{
    public class Languages
    {
        [Key]
        [Required]
        public long LanguagesId { get; set; }
        [StringLength(15)]
        public string? LanguagesName { get; set; }
        public short LanguagesPrecent { get; set; }
    }
}
