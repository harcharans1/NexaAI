
using Microsoft.AspNetCore.Mvc;

namespace NexaAI.WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        {
            status = "Healthy",
            application = "NexaAI API",
            timestamp = DateTime.UtcNow
        });
    }
}
