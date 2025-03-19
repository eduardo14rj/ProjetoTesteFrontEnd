using Backend.Context.Entities;

namespace Backend.Context.Constant
{
    public static class ClienteConstant
    {
        public static List<Cliente> Clientes { get; set; } = new List<Cliente>
        {
            new Cliente { Id= 1, Nome = "João", Email = "Joao202@gmail.com", Ativo = true, Telefone = "5521948772938" }
        };
    }
}
