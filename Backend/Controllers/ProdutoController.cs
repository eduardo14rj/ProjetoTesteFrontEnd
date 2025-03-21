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

        [HttpGet]
        public async Task<IActionResult> List([FromQuery] int pageOffset)
        {
            var produtos = await ProdutoService.ListAsync(pageOffset);
            return Ok(produtos);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create(CreateProductDTO_Req data)
        {
            await ProdutoService.CreateUpdateAsync(data);
            return Ok();
        }
    }
}
