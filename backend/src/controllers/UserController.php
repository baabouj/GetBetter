<?php

namespace app\controllers;

use app\models\UserModel;
use Pexess\Auth\JWT;
use Pexess\Helpers\Hash;
use Pexess\Helpers\StatusCodes;
use Pexess\Http\Request;
use Pexess\Http\Response;
use Pexess\Models\Model;

class UserController
{
    protected Model $model;

    public function __construct()
    {
        $this->model = new UserModel();
    }

    public function signup(Request $req, Response $res)
    {
        $body = $req->body();
        $id = bin2hex(random_bytes(8));

        $this->model->create([
            "data" => [
                "id" => $id,
                "name" => $body["name"],
                "email" => $body["email"],
                "password" => Hash::hash($body["password"]),
            ]
        ]);

        $token = JWT::generate(["userId"=>$id],$_ENV["JWT_SECRET_KEY"]);

        $res->status(StatusCodes::CREATED)->json(
            [
                "success" => true,
                "data" => [
                    "name" => $body["name"],
                    "token" => $token,
                ]
            ]
        );
    }

    public function login(Request $req, Response $res)
    {
        $body = $req->body();
        $user = $this->model->findUnique([
            "where" => [
                "email" => $body["email"]
            ]
        ]);

        $is_correct_password = Hash::compare($body["password"], $user["password"]);

        if ($is_correct_password) {

            $token = JWT::generate(["userId"=>$user["id"]],$_ENV["JWT_SECRET_KEY"]);

            $res->status(StatusCodes::OK)->json([
                "success" => true,
                "data" => [
                    "name" => $user["name"],
                    "token" => $token,
                ]
            ]);
        }

        $res->status(StatusCodes::BAD_REQUEST)->json([
            "success" => false,
            "errors" => [
                "password" => "Invalid password"
            ]
        ]);
    }

}