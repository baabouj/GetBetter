<?php

namespace app\middlewares;

use Pexess\Helpers\StatusCodes;
use Pexess\Http\Request;
use Pexess\Http\Response;

class ScheduleAppointmentMiddleware implements \Pexess\Middlewares\Middleware
{

    public function handler(Request $req, Response $res, $next)
    {
        $errors = $req->validate([
            "date" => "required|unique:appointments"
        ]);
        if ($errors) $res->status(StatusCodes::BAD_REQUEST)->json([
            "success" => false,
            "errors" => $errors
        ]);
        $next($req, $res);
    }
}