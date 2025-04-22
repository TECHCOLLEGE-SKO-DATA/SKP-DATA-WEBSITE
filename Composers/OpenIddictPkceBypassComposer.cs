using Microsoft.Extensions.DependencyInjection;
using OpenIddict.Server;
using Umbraco.Cms.Core.Composing;

public class OpenIddictPkceBypassComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.Services.Configure<OpenIddictServerOptions>(options =>
        {
            options.RequireProofKeyForCodeExchange = false;
        });
    }
}
