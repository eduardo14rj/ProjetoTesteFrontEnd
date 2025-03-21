using Backend.Application.DTOs;
using Backend.Infra.Context;
using Backend.Infra.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{

    public class ClienteController : BackendController
    {
        public ClienteController()
        {
        }

        [HttpGet]
        public async Task<IActionResult> List([FromQuery] int? pageOffset = 0)
        {
            return Ok();
        }
    }
}
