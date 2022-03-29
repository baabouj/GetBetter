<?php

namespace app\controllers;

use app\models\UserModel;
use Pexess\Models\Model;

class UserController
{
    protected Model $model;

    public function __construct()
    {
        $this->model = new UserModel();
    }

}