<?php

namespace app\middlewares;

use Pexess\Auth\JWT;
use Pexess\Helpers\StatusCodes;
use Pexess\Http\Request;
use Pexess\Http\Response;
use Pexess\Validator\Validator;

class AuthMiddleware implements \Pexess\Middlewares\Middleware
{
    public function handler(Request $req, Response $res, $next)
    {
        $token = explode(" ", $req->headers()["authorization"])[1] ?? "";
        $payload = JWT::verify($token, $_ENV["JWT_SECRET_KEY"]);

        if (!$payload) {
            $res->status(StatusCodes::UNAUTHORIZED)->json([
                "success" => false,
                "message" => "Please provide a valid token"
            ]);
        }

        $errors = Validator::validate(["id" => $payload["userId"]], [
            "id" => "required|exist:users"
        ]);
        if ($errors) $res->status(StatusCodes::NOT_FOUND)->json([
            "success" => false,
            "message" => "No user found with that id"
        ]);
        $req->user_id = $payload["userId"];
        $next($req, $res);
    }
}