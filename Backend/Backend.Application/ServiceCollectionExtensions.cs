using Backend.Application.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace Backend.Application
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection ScopeServices(this IServiceCollection services)
        {
            // Define a interface base para os serviços
            var serviceInterface = typeof(IService);

            // Obtém todos os assemblies carregados
            var assemblies = AppDomain.CurrentDomain.GetAssemblies();

            // Filtra todas as classes concretas que implementam a interface IService
            var typesToRegister = assemblies.SelectMany(assembly => assembly.GetTypes())
                                              .Where(type => type.IsClass &&
                                                             !type.IsAbstract &&
                                                             serviceInterface.IsAssignableFrom(type))
                                              .ToList();

            foreach (var type in typesToRegister)
            {
                // Procura todas as interfaces implementadas que herdem de IService, exceto a própria IService
                var implementedInterfaces = type.GetInterfaces()
                                                .Where(i => serviceInterface.IsAssignableFrom(i) && i != serviceInterface)
                                                .ToList();

                if (implementedInterfaces.Any())
                {
                    // Registra cada interface com a implementação
                    foreach (var iface in implementedInterfaces)
                    {
                        services.AddScoped(iface, type);
                    }
                }
                else
                {
                    // Se não houver interface específica, registra o próprio tipo
                    services.AddScoped(type);
                }
            }

            return services;
        }
    }
}
