# Build front-end
FROM node:18 as build

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .
RUN yarn run build

# Nginx setup with Certbot
FROM nginx:alpine as base

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Install Certbot
RUN apk add --no-cache certbot certbot-nginx

# Expose HTTP and HTTPS ports
EXPOSE 80 443

# Set up a command to renew the certificate and run Nginx
CMD sh -c "certbot certonly --nginx --non-interactive --agree-tos --email ego.ivlev@gmail.com -d sntyhzrd.fun --keep-until-expiring && nginx -g 'daemon off;'"
