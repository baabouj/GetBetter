<?php

define("ROOT_DIR", dirname(__DIR__));

require_once ROOT_DIR . "/vendor/autoload.php";

// Loading env variables
$dotenv = Dotenv\Dotenv::createImmutable(ROOT_DIR);
$dotenv->load();

// import the app.php that contains the main code
require_once ROOT_DIR . "/src/app.php";

$app->cors([
    "origin" => "http://localhost:3000",
    "headers" => ["Authorization"],
    "methods" => ["GET", "POST", "DELETE"]
]);

// initializing the app
$app->init();