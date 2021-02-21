using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{

    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
        public ActivitiesController(DataContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            var activities = await _context.Activities.ToListAsync();

            if (activities is not null)
            {
                return Ok(activities);
            }
            return NotFound(new { message = "No activities was found!" });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Activity>>> GetActivity(Guid id)
        {
            var activity = await _context.Activities.FindAsync(id);
            if (activity is not null)
            {
                return Ok(activity);
            }
            return NotFound(new { message = "Activity not found" });
        }
    }
}