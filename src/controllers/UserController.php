<?php

namespace app\controllers;

use app\models\UserModel;
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

        $this->model->create([
            "data" => [
                "name" => $body["name"],
                "email" => $body["email"],
                "password" => Hash::hash($body["password"]),
            ]
        ]);

        $res->status(StatusCodes::CREATED)->json(
            [
                "success" => true,
                "message" => "User created successfully"
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

        if ($is_correct_password) $res->status(StatusCodes::OK)->json([
            "success" => true,
            "message" => "User logged in"
        ]);

        $res->status(StatusCodes::BAD_REQUEST)->json([
            "success" => false,
            "errors" => [
                "password" => "Invalid password"
            ]
        ]);
    }

}