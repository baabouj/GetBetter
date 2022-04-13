<?php

namespace app\middlewares;

use Pexess\Helpers\StatusCodes;
use Pexess\Http\Request;
use Pexess\Http\Response;
use Pexess\Middlewares\Middleware;

class CancelAppointmentMiddleware implements Middleware
{

    public function handler(Request $req, Response $res, $next)
    {
        $errors = $req->validate([
            "id" => "required|exist:appointments"
        ]);
        if ($errors) $res->status(StatusCodes::BAD_REQUEST)->json([
            "success" => false,
            "errors" => $errors
        ]);
        $next($req, $res);
    }
}