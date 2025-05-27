FROM php:8.3-fpm-alpine3.20 as php-fpm
WORKDIR /var/www/html
RUN apk update && apk add --no-cache \
    curl \
    unzip \
    git

RUN curl -s https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN composer about

# COPY ../server ./