# node-typescript-template
Basic setup for a new dockerized node typescript project

### Background
As I am learning some basics of node and TypeScript development, this is a starting point for a basic project. 

Since I use JetBrains development tools, the .gitignore includes their recommended contents.

This is based on https://dev.to/chandrapantachhetri/docker-postgres-node-typescript-setup-47db, but I removed the Postgres parts as I won't always want a database for some of my simple projects.

### Versions
These versions are not neccessarily required, but are the version that I was using when I created this repository:
- Node >= 18.8.0
- docker compose >= 2.29.7

### Usage
Install Docker desktop application.
After checking out this repo, switch to above version(s).

`nvm use 18`

Run locally:

`npm run dev`

Run in docker container:

`docker compose up`
