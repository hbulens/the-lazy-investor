using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using SignInResult = Microsoft.AspNetCore.Identity.SignInResult;

namespace TheLazyInvestor.Web
{
    [Controller]
    [Route("[controller]")]
    [AllowAnonymous]
    public class AccountController : Controller
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly AppSettings _appSettings;

        public AccountController(SignInManager<IdentityUser> signInManager, UserManager<IdentityUser> userManager, IOptions<AppSettings> appSettings)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _appSettings = appSettings.Value;
        }

        [Route("[action]")]
        public IActionResult SignInWithGoogle()
        {
            AuthenticationProperties authenticationProperties = _signInManager.ConfigureExternalAuthenticationProperties("Google", Url.Action(nameof(HandleExternalLogin)));
            return Challenge(authenticationProperties, "Google");
        }

        [Route("[action]")]
        public IActionResult SignInWithFacebook()
        {
            AuthenticationProperties authenticationProperties = _signInManager.ConfigureExternalAuthenticationProperties("Facebook", Url.Action(nameof(HandleExternalLogin)));
            return Challenge(authenticationProperties, "Facebook");
        }

        [Route("[action]")]
        public async Task<IActionResult> HandleExternalLogin()
        {
            ExternalLoginInfo info = await _signInManager.GetExternalLoginInfoAsync();
            SignInResult result = await _signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, isPersistent: false);

            if (result.Succeeded)
                return Redirect(_appSettings.AllowedOrigins.First());

            string email = info.Principal.FindFirstValue(ClaimTypes.Email);

            IdentityUser user = await _userManager.FindByEmailAsync(email);
            if (user == null)
            {
                user = new IdentityUser
                {
                    UserName = email,
                    Email = email,
                    EmailConfirmed = true
                };
                IdentityResult createResult = await _userManager.CreateAsync(user);
                if (!createResult.Succeeded)
                    throw new Exception(createResult.Errors.Select(e => e.Description).Aggregate((errors, error) => $"{errors}, {error}"));
            }

            await _userManager.AddLoginAsync(user, info);
            IEnumerable<Claim> newUserClaims = info.Principal.Claims.Append(new Claim("userId", user.Id));
            await _userManager.AddClaimsAsync(user, newUserClaims);
            await _signInManager.SignInAsync(user, isPersistent: false);
            await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);

            return Redirect(_appSettings.AllowedOrigins.First());
        }

        [Route("[action]")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return Redirect(_appSettings.AllowedOrigins.First());
        }

        [Route("[action]")]
        public IActionResult IsAuthenticated() => new ObjectResult(User.Identity.IsAuthenticated);
    }
}