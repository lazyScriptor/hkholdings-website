FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
 
COPY . .
RUN npm run build

FROM nginx:alpine

# Copy your custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files to Nginx's web directory
COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"] 