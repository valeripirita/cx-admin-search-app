#!/bin/bash
docker build -t gamesys-ps-private-docker-build.artifactory.gamesys.co.uk/cx-admin-search-app-harness:latest .
docker rm -f cx-admin-search-app-harness
docker run -p 8082:8080 -d --name cx-admin-search-app-harness gamesys-ps-private-docker-build.artifactory.gamesys.co.uk/cx-admin-search-app-harness
