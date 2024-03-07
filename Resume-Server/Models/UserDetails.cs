using System.ComponentModel.DataAnnotations;

namespace Resume.Models
{
    public class UserDetails
    {
        [Key]
        [Required]
        public long UserId { get; set; }
        [StringLength(25)]
        public string? UserFullName { get; set; }
        [StringLength(35)]
        public string? UserJob { get; set; }
        [StringLength(25)]
        public string? UserAddress { get; set; }
        [StringLength(45)]
        public string? UserEmail { get; set; }
        [StringLength(10)]
        public string? UserPhone { get; set; }
        [StringLength(800)]
        public string? UserPhotoPath { get; set; }
    }
}
