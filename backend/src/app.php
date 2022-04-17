<?php

use Pexess\Helpers\StatusCodes;
use Pexess\Http\Request;
use Pexess\Http\Response;

$app = \Pexess\Pexess::Application();

$app->group("/auth", require_once ROOT_DIR . "/src/routes/auth.php");

$app->group("/appointments", require_once ROOT_DIR . "/src/routes/appointments.php");

$app->route("/user/appointments")->get([\app\controllers\AppointmentsController::class, "getUserAppointments"])->apply(\app\middlewares\AuthMiddleware::class);

// Error Handling
$app->handle(StatusCodes::NOT_FOUND, function (Request $req, Response $res) {
    $res->json([
        "success" => false,
        "message" => "Not Found"
    ]);
});

$app->handle(StatusCodes::METHOD_NOT_ALLOWED, function (Request $req, Response $res) {
    // return 200 OK status if the method is options to allow browser to check CORS
    if ($req->method() == "options") $res->status(200);
    $res->json([
        "success" => false,
        "message" => "Method Not Allowed"
    ]);
});