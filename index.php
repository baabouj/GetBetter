<?php

require_once "vendor/autoload.php";

// Loading env variables
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// import the app.php that contains the main code
require_once "src/app.php";

// initializing the app
$app->init();