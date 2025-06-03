<?php

declare(strict_types=1);

use LangLearn\AppFactory;
use LangLearn\Dependencies\Router;

require_once "../vendor/autoload.php";

AppFactory::create(new Router())->run();
