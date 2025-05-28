FROM php:8.3-fpm-alpine3.20 as php-fpm
WORKDIR /var/www/html
RUN apk update && apk add --no-cache \
    curl \
    unzip \
    git \
    zip

ENV COMPOSER_ALLOW_SUPERUSER=1

RUN curl -s https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN composer about

# These services are needed by pecl to install xdebug
RUN apk update && apk add --no-cache \
    build-base \
    gcc \
    linux-headers \
    autoconf 

RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

RUN docker-php-ext-install pdo_mysql mysqli opcache

# COPY ../server ./


FROM node:current-slim as react-client-dev
WORKDIR /app
COPY ./client/ ./
CMD [ "npm", "run", "dev" ]