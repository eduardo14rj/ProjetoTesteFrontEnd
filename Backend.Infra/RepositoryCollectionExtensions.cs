using Backend.Domain.Interfaces;
using Backend.Domain.Interfaces.Generics;
using Backend.Infra.Repositories;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace Backend.Infra
{
    public static class RepositoryCollectionExtensions
    {
        // Método auxiliar para verificar se a interface implementa (direta ou indiretamente) IRepositoryBase<>
        private static bool ImplementsRepositoryBase(Type interfaceType)
        {
            if (interfaceType.IsGenericType && interfaceType.GetGenericTypeDefinition() == typeof(IRepositoryBase<>))
                return true;

            return interfaceType.GetInterfaces()
                .Any(x => x.IsGenericType && x.GetGenericTypeDefinition() == typeof(IRepositoryBase<>));
        }

        public static IServiceCollection ScopeRepositories(this IServiceCollection services)
        {
            // Use explicitamente o assembly onde estão os repositórios (por exemplo, ProdutoRepository)
            var repositoryAssembly = typeof(ProdutoRepository).Assembly;

            var repositoryTypes = repositoryAssembly.GetTypes()
                .Where(t => t.IsClass && !t.IsAbstract &&
                            t.GetInterfaces().Any(i => ImplementsRepositoryBase(i)))
                .ToList();

            foreach (var impl in repositoryTypes)
            {
                // Seleciona todas as interfaces implementadas que se baseiam em IRepositoryBase<>
                var interfaces = impl.GetInterfaces()
                                     .Where(i => ImplementsRepositoryBase(i));

                foreach (var repoInterface in interfaces)
                {
                    services.AddScoped(repoInterface, impl);
                }
            }

            return services;
        }
    }
}
