OHG CDMi Redesign
=======================

# BackEnd

## Features
- [Docker engine 18+](https://docs.docker.com/engine/installation/)
- [Docker Compose 1.20+](https://docs.docker.com/compose/install/)
- **tar**
- **wget**
 
## Local Set Up

Get into the root folder and copy the environment file:

`cp default.env .env`

Update this new .env file as required.

## ENV Variables description

`COMPOSE_PROJECT_NAME` : _This name will be used to name all the cointainers in docker, this prevents conflicts with other projects_

`LOCAL_PORT` _Will be used to access to the site, use the value added in this variable after the_ `PROJECT_BASE_URL` _in order to access to your local environment_

`DB_PORT` This value is used to connect to db, you don't need to replace this instead is used in a internal network.

`NGINX_PORT` This value is used in order to acces to nginx, you don't need to replace this instead is used in a internal network.

`PHP_PORT` Fast cgi port please use a port that you is not in use in other projects.
REVERSE_PROXY_PORT Port used to reverse proxy in order to allow you pretty urls in the project. Please use a port that you is not in use in other projects

`RESOURCES` Path of the project

`DATABASE_NAME` Database name.

`DATABASE_USER` Database user.

`DATABASE_PASSWORD` Database password.

`PMA_BASE_URL` URL of the phpmyadmin

`PROXY_BASE_URL` URL of the proxy. you can access to the proxy in order to check if everything is working as expected.

`PROJECT_BASE_URL` Local URL website

`NGINX_CONF_DIR` You don't need to replace this variable

`NGINX_LOG_DIR` You don't need to replace this variable

## Run the starter script:

`sudo sh project-docker-start-scratch.sh`