FROM node:alpine
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev vim
ENV NODE_ROOT /app
# Install all the packages
RUN npm install -g @angular/cli
RUN yarn install
# Uncomment this if you went with Option #2 in Step #2 (Windows Only)
# RUN npm rebuild node-sass --force
# The default port from ng serve (4200)
# and 49153 for Webpack Hot Module Reload
EXPOSE 4200 49153