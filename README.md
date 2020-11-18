# TODO App

## Project setup

1. clone the repo `git clone https://github.com/sonamk15/Todo-App.git`.
2. `cd Todo-App` 
3. install dependencies `npm install`

## DB setup

1. install postgress: -
  `sudo apt-get update && sudo apt install postgresql postgresql-contrib`

2. open postgres server `sudo -u postgres psql`
3. create database `create database todo_app`
4. set postgres password `ALTER USER postgres WITH PASSWORD 'myPassword'`
5. change default owner role `ALTER DATABASE todo_app OWNER TO postgres`

## environment variable
1. create `.env` file at root folder 
2. refer `sample.env` file.

## Migration

1. install knex globally `npm install -g knex`
2. run `knex migrate:latest`

## Project Start

Run `npm start`

# Happy Programming