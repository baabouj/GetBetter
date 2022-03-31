<?php

namespace app\middlewares;

use Pexess\Http\Request;
use Pexess\Http\Response;

class SignUpMiddleware implements \Pexess\Middlewares\Middleware
{

    public function handler(Request $req, Response $res, $next)
    {
        $res->send("Signup middleware");
        $next($req,$res);
    }
}