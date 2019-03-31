FROM node:11.12.0-alpine as builder
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . .
RUN npm run ng build -- --prod --output-path=dist

FROM nginx:1.14.1-alpine
COPY ./.nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
RUN chown nginx:nginx /usr/share/nginx/html/
COPY --from=builder /app/dist /usr/share/nginx/html