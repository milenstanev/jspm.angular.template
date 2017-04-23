FROM node:latest
WORKDIR /usr/local/app
#=== local tools ===#
RUN apt-get update
RUN apt-get install nano
RUN npm i -g jspm gulp
