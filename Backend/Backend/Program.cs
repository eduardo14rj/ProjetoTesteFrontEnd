using Backend.Application;
using Backend.Infra;
using Backend.Infra.Context;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", policyBuilder =>
    {
        policyBuilder
           .SetIsOriginAllowed(origin =>
           {
               // Verifica se a origem é válida e se o host é "localhost"
               if (Uri.TryCreate(origin, UriKind.Absolute, out var uri))
                   return uri.Host.Equals("localhost", StringComparison.OrdinalIgnoreCase);
               return false;
           })
           .AllowAnyHeader()
           .AllowAnyMethod()
           .AllowCredentials();
    });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("BancoEmMemoria"));

builder.Services.ScopeRepositories();
builder.Services.ScopeServices();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    dbContext.Database.EnsureCreated();
}


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("CorsPolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
