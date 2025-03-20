using Backend.Infra;
using Backend.Infra.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{

    public class ClienteController : BackendController
    {
        ProdutoRepository repository;
        public ClienteController(AppDbContext context, ProdutoRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> List()
        {
            var clientes = await repository.GetAllAsync();
            return Ok(clientes);
        }
    }
}
