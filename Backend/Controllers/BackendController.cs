﻿using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public abstract class BackendController : ControllerBase
    {
        public BackendController()
        {
        }
    }
}
