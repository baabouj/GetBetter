<?php

namespace app\models;

use Pexess\Models\Model;

class UserModel extends Model
{

    protected function table(): string
    {
        return "users";
    }
}