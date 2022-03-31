<?php

$router = \Pexess\Pexess::Router();

$router->route("/signup")->post([\app\controllers\UserController::class,"signup"]);

$router->post("/login",[\app\controllers\UserController::class,"login"]);

return $router;