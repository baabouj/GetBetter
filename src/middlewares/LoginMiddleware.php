<?php

namespace app\middlewares;

use Pexess\Helpers\StatusCodes;
use Pexess\Http\Request;
use Pexess\Http\Response;

class LoginMiddleware implements \Pexess\Middlewares\Middleware
{

    public function handler(Request $req, Response $res, $next)
    {
        $errors = $req->validate([
            "email" => "required|email|exist:users",
            "password" => "required|min:6"
        ]);
        if ($errors) $res->status(StatusCodes::BAD_REQUEST)->json([
            "success" => false,
            "errors" => $errors
        ]);
        $next($req, $res);
    }
}