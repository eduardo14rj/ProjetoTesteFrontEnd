using Backend.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{

    public class ClienteController : BackendController
    {
        public AppDbContext context { get; set; }
        public ClienteController(AppDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> List()
        {
            var clientes = await context.Clientes.ToListAsync();
            return Ok(clientes);
        }
    }
}
