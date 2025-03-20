using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Infra
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection ScopeRepositories(this IServiceCollection services)
        {
            var scopedInterface = typeof(IScopedRepositoryDependency);
            var assemblies = AppDomain.CurrentDomain.GetAssemblies();
            var typesToRegister = assemblies.SelectMany(assembly => assembly.GetTypes())
                                              .Where(type => type.IsClass &&
                                                             !type.IsAbstract &&
                                                             scopedInterface.IsAssignableFrom(type));

            foreach (var type in typesToRegister)
            {
                services.AddScoped(type);
            }

            return services;
        }
    }
}
