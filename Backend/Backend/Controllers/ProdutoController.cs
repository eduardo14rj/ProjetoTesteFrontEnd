using Backend.Application.DTOs;
using Backend.Application.Services;
using Backend.Domain.Interfaces;
using Backend.Infra.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    public class ProdutoController : BackendController
    {
        ProdutoService ProdutoService;
        public ProdutoController(ProdutoService produtoService)
        {
            ProdutoService = produtoService;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create(CreateProductDTO_Req data)
        {
            await ProdutoService.CreateAsync(data);
            return Ok();
        }

        [HttpGet("Read")]
        public async Task<IActionResult> List([FromQuery] int pageOffset, [FromQuery] int pageSize, [FromQuery] string? search)
        {
            var produtos = await ProdutoService.ListAsync(pageOffset, pageSize, search ?? string.Empty);
            return Ok(produtos);
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update(UpdateProductDTO_Req data)
        {
            await ProdutoService.UpdateAsync(data);
            return Ok();
        }

        [HttpDelete("Delete")]
        public async Task<IActionResult> Remove(RemoveProductDTO_Req data)
        {
            await ProdutoService.RemoveAsync(data.Id);
            return Ok();
        }
    }
}
