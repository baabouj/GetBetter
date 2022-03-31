<?php

$router = \Pexess\Pexess::Router();

$router->route("/signup")
    ->post([\app\controllers\UserController::class, "signup"])
    ->apply(\app\middlewares\SignUpMiddleware::class);

$router->route("/login")
    ->post([\app\controllers\UserController::class, "login"])
    ->apply(\app\middlewares\LoginMiddleware::class);

return $router;