# CX Admin search app

Contents
========

* [Usage](#usage)
* [Troubleshoot](#troubleshoot)


## Usage
---

To start the cx admin search app using Docker, simply run `$ docker compose up`.

To start the cx admin search app bdd tests using Docker, simply run `$ docker compose -f docker-compose-bdd-tests.yml up`.

## Troubleshoot
---

### Problem: npm ERR! code E401
#### Solution: Try to remove `cx-admin-search-app-ui/ui/package-lock.json` file along with node_modules
### Generic problems with running docker compose
#### Solution: Try to run `docker compose down`
#### Solution: Try to run `docker compose down && docker compose build --no-cache && docker compose -f docker-compose-bdd-tests.yml up`