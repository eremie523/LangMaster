<?php

namespace LangLearn;

define('LANGLEARN_VERSION', '1.0.0');
define('LANGLEARN_NAME', 'LangLearn');
define('EMAIL_REGEX', "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/");
define('PASSWORD_REGEX', "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=\\[\\]{};:\\'\"\\\\|,.<>\\/?]).{8,}$/");
define('PERMITTED_LANGUAGES', ['en', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'zh', 'ja']);
define('PROFICIENCY_LEVELS', ['beginner', 'intermediate', 'advanced']);
