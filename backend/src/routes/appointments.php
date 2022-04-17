<?php

$router = \Pexess\Pexess::Router();

$router->get("/", [\app\controllers\AppointmentsController::class, "getAppointmentsByDay"]);

$router->route("/schedule")
    ->post([\app\controllers\AppointmentsController::class, "schedule"])
    ->apply(\app\middlewares\AuthMiddleware::class, \app\middlewares\ScheduleAppointmentMiddleware::class);

$router->route("/cancel")
    ->delete([\app\controllers\AppointmentsController::class, "cancel"])
    ->apply(\app\middlewares\AuthMiddleware::class, \app\middlewares\CancelAppointmentMiddleware::class);


return $router;