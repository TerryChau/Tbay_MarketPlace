# tbay-mongodb
This repository contains the scripts run MongoDB on a local machine using a containerized version of MongoDB.

## Instructions

### Install Docker
The following instructions require that docker is installed on the local machine.  Please ensure that the following packages are available.

```
Docker           : 20+
Docker Compose   : 1.29+
Docker Engine CE : 19+
```

### Running the local Mongo set up
1. Build the docker image using `docker-compose build`
2. Start the containers using `docker-compose up`

### Mongo DB
The Mongo database is exposed at `localhost:27017`. The mongo shell can be accessed, to view / manipulate the data, by exec-ing into the container. Local folder `mongo/data` is attached to the DB container using bind mount, to map to the DB's data folder. This retains the data even when the container is removed.

### Mongo Express
Access `localhost:8081` for the Mongo Express viewer, which provides a limited UI to explore the data in the Mongo DB.

### Upload Initial Database
A this point, the database can be accessed by the Express application, however, it is suggested to import some initial data to the database.

Initial data is conveniently packaged in `entryschemas.json`.  This can be loaded into the database using the following steps:

```
docker cp entryschemas.json mongo_local:.
docker exec -it mongo_local sh
mongoimport --db tbay --collection entryschemas --file entryschemas.json
```

### Clean Up
Run `docker-compose down` to stop and remove all containers.

__NOTE__: The Mongo data should be retained at `./mongo/`.

## Running Tests

Unit tests are created using Pytest and can be run simply using the following command, from the repo root.
```
$ PYTHONPATH=src/ pytest tests/ -vv
```
