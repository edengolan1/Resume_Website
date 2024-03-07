using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Resume.Models;

namespace Resume.Data
{
    public class ResumeContext : DbContext
    {
        public ResumeContext (DbContextOptions<ResumeContext> options)
            : base(options)
        {
        }

        public DbSet<Resume.Models.Skills> Skills { get; set; } = default!;
        public DbSet<Resume.Models.Languages> Languages { get; set; } = default!;
        public DbSet<Resume.Models.UserDetails> UserDetails { get; set; } = default!;
        public DbSet<Resume.Models.Education> Education { get; set; } = default!;
        public DbSet<Resume.Models.WorkExperience> WorkExperience { get; set; } = default!;
    }
}
