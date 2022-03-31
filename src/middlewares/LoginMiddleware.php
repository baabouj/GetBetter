<?php

namespace app\middlewares;

use Pexess\Http\Request;
use Pexess\Http\Response;

class LoginMiddleware implements \Pexess\Middlewares\Middleware
{

    public function handler(Request $req, Response $res, $next)
    {
        $res->send("Login middleware");
        $next($req,$res);
    }
}