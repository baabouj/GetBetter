<?php

$app = \Pexess\Pexess::Application();

$app->group("/auth", require_once "src/routes/auth.php");