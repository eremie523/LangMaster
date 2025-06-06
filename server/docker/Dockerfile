# Use official PHP image with Apache
FROM php:8.3-rc-fpm-alpine3.20 as php-server

RUN apk update && apk add --no-cache \
    git \
    curl \
    bash \
    unzip \
    zip

# Latest release
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer

WORKDIR /var/www/html/

COPY ./composer.json ./

RUN composer install

RUN composer update

# # These services are needed by pecl to install xdebug
# RUN apk update && apk add --no-cache \
#     build-base \
#     gcc \
#     linux-headers \
#     autoconf \

# RUN pecl install xdebug \
#     && docker-php-ext-enable xdebug

RUN docker-php-ext-install pdo_mysql mysqli opcache

RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

RUN apk update && apk add --no-cache libpq-dev php-pgsql \
    && docker-php-ext-install pgsql pdo_pgsql \
    && docker-php-ext-enable pgsql pdo_pgsql


# Copy the rest of the application code
COPY ./public ./public
COPY ./src ./src

EXPOSE 80

