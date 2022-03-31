<?php

namespace app\controllers;

use app\models\UserModel;
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
        $res->send("Sign Up");
    }

    public function login(Request $req, Response $res)
    {
        $res->send("Log In");
    }

}