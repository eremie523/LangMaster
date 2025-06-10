# Multi-stage build combining PHP-FPM and Nginx
FROM php:8.3-rc-fpm-alpine3.20

# Install system dependencies
RUN apk update && apk add --no-cache \
    git \
    curl \
    bash \
    unzip \
    zip \
    nginx \
    supervisor \
    libpq-dev

# Install Composer
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mysqli opcache pgsql pdo_pgsql \
    && docker-php-ext-enable pgsql pdo_pgsql

WORKDIR /var/www/html/

# Copy composer files first for better layer caching
COPY ../composer.json ./

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Copy application code
COPY ../public ./public
COPY ../src ./src

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Copy Nginx configuration
COPY ./SingleContainerBuild/conf/nginx/default.conf /etc/nginx/http.d/default.conf

# Create supervisor configuration
RUN mkdir -p /etc/supervisor/conf.d
COPY <<EOF /etc/supervisor/conf.d/supervisord.conf
[supervisord]
nodaemon=true
user=root
logfile=/var/log/supervisor/supervisord.log
pidfile=/var/run/supervisord.pid

[program:php-fpm]
command=php-fpm -F
autostart=true
autorestart=true
redirect_stderr=true
stdout_logfile=/var/log/supervisor/php-fpm.log

[program:nginx]
command=nginx -g "daemon off;"
autostart=true
autorestart=true
redirect_stderr=true
stdout_logfile=/var/log/supervisor/nginx.log
EOF

# Create necessary directories
RUN mkdir -p /var/log/supervisor \
    && mkdir -p /run/nginx \
    && mkdir -p /var/log/nginx \
    && mkdir -p /var/cache/nginx \
    && mkdir -p /var/lib/nginx

# Expose port 8000 (matching your nginx config)
EXPOSE 8000

# Start supervisor to manage both services
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]