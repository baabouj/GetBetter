<?php

namespace app\controllers;

use app\models\AppointmentsModel;
use Pexess\Http\Request;
use Pexess\Http\Response;
use Pexess\Models\Model;

class AppointmentsController
{
    protected Model $model;

    public function __construct()
    {
        $this->model = new AppointmentsModel();
    }

    public function schedule(Request $req, Response $res)
    {
        $body = $req->body();
        $this->model->create([
            "data" => [
                "id" => bin2hex(random_bytes(8)),
                "date" => $body["date"],
                "user_id" => $req->user_id
            ]
        ]);
        $res->json([
            "success" => true,
            "message" => "Appointment scheduled successfully"
        ]);
    }

    public function cancel(Request $req, Response $res)
    {
        $this->model->delete([
            "where"=>[
                "id"=>$req->body()["id"],
                "user_id"=>$req->user_id
            ]
        ]);
        $res->json([
            "success" => true,
            "message" => "Appointment canceled!"
        ]);
    }

    public function getAppointmentsByDay(Request $req, Response $res)
    {
        $res->json([
            "success" => true,
            "data" => $this->model->findMany([
                "select" => ["date"],
                "where" => [
                    "date" => [
                        "startsWith" => $req->query()["day"]
                    ]
                ]
            ])
        ]);
    }

    public function getUserAppointments(Request $req, Response $res)
    {
        $res->json([
            "success" => true,
            "data" => $this->model->findMany([
                "select" => ["id,date"],
                "where" => [
                    "user_id" => $req->user_id
                ]
            ])
        ]);
    }

    public function scheduled(Request $req, Response $res)
    {
        $res->json([
            "success" => true,
            "data" => $this->model->findMany([
                "select" => ["date"]
            ])
        ]);
    }

}