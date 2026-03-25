This project is to show how multi services work inside a Docker Compose file.
The docker compose file lets the developer put multiple services inside one file 
in order to complete the app that the developer is trying to run. The file also 
takes care of the networking aspect and the developer won't have to insert a command.

Once all the files are built then the  docker compose up --build command can run. Instead 
of running each command one by one, this command ensures that each file that has been 
created can run successfully.

The two services that were used were Node.js and Postgres. Node.js served as the web app
in which it allows the developer to run JavaScript on a server or local machine. Postgres 
is a database that securely stores, manages, and retrieves data for applications.

There were many mistakes along the way that I encountered: debugging my docker-compose file 
because I was missing healthchecks in my file and it caused the file to crash along with 
small JavaScript typos. Those small errors can cause a large problem if it isn't caught.

Things that I learned:
I learned to properly add healthchecks.
I learned to configure a docker compose file.
I learned to add environments to a file.
