<?php

namespace app\middlewares;

use Pexess\Helpers\StatusCodes;
use Pexess\Http\Request;
use Pexess\Http\Response;

class SignUpMiddleware implements \Pexess\Middlewares\Middleware
{

    public function handler(Request $req, Response $res, $next)
    {
        $errors = $req->validate([
            "name" => "required",
            "email" => "required|email|unique:users",
            "password" => "required|min:6"
        ]);
        if ($errors) $res->status(StatusCodes::BAD_REQUEST)->json([
            "success" => false,
            "errors" => $errors
        ]);
        $next($req, $res);
    }
}