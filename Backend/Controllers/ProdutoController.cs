using Backend.Infra.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    public class ProdutoController : BackendController
    {
        ClienteRepository repository;
        public ProdutoController(ClienteRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> List()
        {
            var produtos = await repository.GetAllAsync();
            return Ok(produtos);
        }
    }
}
