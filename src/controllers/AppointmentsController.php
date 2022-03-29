<?php

namespace app\controllers;

use app\models\AppointmentsModel;
use Pexess\Models\Model;

class AppointmentsController
{
    protected Model $model;

    public function __construct()
    {
        $this->model = new AppointmentsModel();
    }

}