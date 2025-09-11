# Stage 1: Install dependencies with Composer
FROM composer:2 as vendor

WORKDIR /app
# ADD the 'trial_backend/' prefix to these paths
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

# Install required PHP extensions for Laravel
RUN docker-php-ext-install pdo pdo_mysql pdo_pgsql

WORKDIR /var/www
# ADD the 'trial_backend/' prefix here too
COPY trial_backend/. .
COPY --from=vendor /app/vendor/ ./vendor/

# Set correct permissions
RUN chown -R www-data:www-data /var/w../ww/storage /var/www/bootstrap/cache
RUN chmod -R 775 /var/www/storage /var/www/bootstrap/cache

# Expose port 8000 for the Laravel server
EXPOSE 8000

# The command to start the application
CMD php artisan serve --host=0.0.0.0 --port=8000