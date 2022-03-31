<?php

use Pexess\Helpers\StatusCodes;
use Pexess\Http\Request;
use Pexess\Http\Response;

$app = \Pexess\Pexess::Application();

$app->group("/auth", require_once "src/routes/auth.php");


// Error Handling

$app->handle(StatusCodes::NOT_FOUND, function (Request $req, Response $res) {
    $res->json([
        "success" => false,
        "message" => "Not Found"
    ]);
});

$app->handle(StatusCodes::METHOD_NOT_ALLOWED, function (Request $req, Response $res) {
    $res->json([
        "success" => false,
        "message" => "Method Not Allowed"
    ]);
});