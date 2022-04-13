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
        $token = JWT::verify($req->body()["token"] ?? "", $_ENV["JWT_SECRET_KEY"]);
        if (!$token) {
            $res->status(StatusCodes::UNAUTHORIZED)->json([
                "success" => false,
                "message" => "Please provide a valid token"
            ]);
        }
        $errors = Validator::validate(["id" => $token["userId"]], [
            "id" => "required|exist:users"
        ]);
        if ($errors) $res->status(StatusCodes::NOT_FOUND)->json([
            "success" => false,
            "message" => "No user found with that id"
        ]);
        $req->user_id = $token["userId"];
        $next($req, $res);
    }
}