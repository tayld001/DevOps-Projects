DevOps Project

This project is to show how multi services work inside a Docker Compose file.
The docker compose file lets the developer put multiple services inside one file 
in order to complete the app that the developer is trying to run. The file also 
takes care of the networking aspect and the developer won't have to insert a command.

Services
- *web* - Node.js app serving on port 3000
- *db* - PostgreSQL database for persistent storage
- *redis* - Redis cache, stores responses for 30 seconds

Useful commands
docker compose up           - start stack (no rebuild)
docker compose up --build   - start stack with rebuild
docker compose down         - stop containers, keep volumes
docker compose down -v      - stop containers, delete volumes

Once all the files are built then the  docker compose up --build command can run. Instead 
of running each command one by one, this command ensures that each file that has been 
created can run successfully.

The two services that were used were Node.js and Postgres. Node.js served as the web app
in which it allows the developer to run JavaScript on a server or local machine. Postgres 
is a database that securely stores, manages, and retrieves data for applications.

There were many mistakes along the way that I encountered: debugging my docker-compose file 
because I was missing healthchecks in my file and it caused the file to crash along with 
small JavaScript typos. Those small errors can cause a large problem if it isn't caught.

What I learned Day 1:
I learned to properly add healthchecks.
I learned to configure a docker compose file.
I learned to add environments to a file.

Before I started Day 2:
I ran some commands to ensure everything was fine.Docker Compose ps shows my list 
of containers that are running which areproject-db-1 and project-web-1.
Docker volume ls shows the named volumes that Docker is managing which is project_db_data.
When I ran the command to see where project_db_data is stored it is on my local 
filesystem. The network that docker compose created was a bridge. Docker
Compose creates a bridge network for my stack and connects all services to it

Day 2
- Added Redis as a caching layer.
- First request hits Postgres, the requests served from Redis cache for a couple 
  seconds.
- docker compose down keeps the named volumes intact
- docker compose down -v wiped all the volumes and the data is permanently deleted
- depends_on in the docker-compose file can wait for multiple services simultaneously

What I learned Day 2:
I learned that Redis is an in-memory cache that stores frequently accessed data
so the app doesn't hit the database on every request.
I learned that named volumes must be declared at the top-level volumes block in
docker-compose.yml, not just under the service that uses them. If not, then 
Docker won't create the volume.
