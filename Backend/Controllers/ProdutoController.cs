using Backend.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    public class ProdutoController : BackendController
    {
        AppDbContext context { get; set; }
        public ProdutoController(AppDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> List()
        {
            var produtos = await context.Produtos.ToListAsync();
            return Ok(produtos);
        }
    }
}
