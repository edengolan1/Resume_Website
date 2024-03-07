using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Resume.Data;
using Resume.Models;

namespace Resume.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkExperiencesController : ControllerBase
    {
        private readonly ResumeContext _context;

        public WorkExperiencesController(ResumeContext context)
        {
            _context = context;
        }

        // GET: api/WorkExperiences
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WorkExperience>>> GetWorkExperience()
        {
            return await _context.WorkExperience.ToListAsync();
        }

        // GET: api/WorkExperiences/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WorkExperience>> GetWorkExperience(long id)
        {
            var workExperience = await _context.WorkExperience.FindAsync(id);

            if (workExperience == null)
            {
                return NotFound();
            }

            return workExperience;
        }

        // PUT: api/WorkExperiences/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkExperience(long id, WorkExperience workExperience)
        {
            if (id != workExperience.WorkExperienceId)
            {
                return BadRequest();
            }

            _context.Entry(workExperience).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkExperienceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/WorkExperiences
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<WorkExperience>> PostWorkExperience(WorkExperience workExperience)
        {
            _context.WorkExperience.Add(workExperience);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkExperience", new { id = workExperience.WorkExperienceId }, workExperience);
        }

        // DELETE: api/WorkExperiences/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorkExperience(long id)
        {
            var workExperience = await _context.WorkExperience.FindAsync(id);
            if (workExperience == null)
            {
                return NotFound();
            }

            _context.WorkExperience.Remove(workExperience);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WorkExperienceExists(long id)
        {
            return _context.WorkExperience.Any(e => e.WorkExperienceId == id);
        }
    }
}
