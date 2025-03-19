namespace Backend.Context.Entities
{
    public class Produto : Entity
    {
        public string Nome { get; set; } = default!;
        public decimal Preco { get; set; }
    }
}
