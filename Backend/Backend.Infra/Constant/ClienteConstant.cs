using Backend.Domain.Entities;

namespace Backend.Infra.Constant
{
    public static class ClienteConstant
    {
        public static List<Cliente> Clientes { get; set; } = new List<Cliente>
        {
            new Cliente { Id= 1, Nome = "João", Email = "Joao202@gmail.com", Ativo = true, Telefone = "21982042971" }
        };
    }
}
