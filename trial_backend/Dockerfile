# Stage 1: Install dependencies with Composer
FROM composer:2 as vendor

WORKDIR /app
# Correctly copy files from your 'trial_backend' subfolder
COPY trial_backend/database/ database/
COPY trial_backend/composer.json composer.json
COPY trial_backend/composer.lock composer.lock

RUN composer install \
    --ignore-platform-reqs \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --prefer-dist

# Stage 2: Build the final application image
FROM php:8.2-fpm-alpine

# Install required system libraries for MySQL
RUN apk add --no-cache mariadb-dev

# Install the PHP extension ONLY for MySQL
RUN docker-php-ext-install pdo pdo_mysql

WORKDIR /var/www
# Correctly copy your entire project from the 'trial_backend' subfolder
COPY trial_backend/. .
COPY --from=vendor /app/vendor/ ./vendor/

# Set correct permissions
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache
RUN chmod -R 775 /var/www/storage /var/www/bootstrap/cache

# Expose port 8000 for the Laravel server
EXPOSE 8000

# The command to start the application
CMD php artisan serve --host=0.0.0.0 --port=$PORT