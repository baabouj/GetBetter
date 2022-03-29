<?php

$app = \Pexess\Pexess::Application();

$app->get("/",function (\Pexess\Http\Request $req,\Pexess\Http\Response $res){
    $res->status(200)->send("Hello, World!");
});