#!/usr/bin/env sh

set -e

# Create the docker image
VERSION=$(git rev-parse --short HEAD)
docker push "poornimak/kuberos:latest"
docker push "poornimak/kuberos:${VERSION}"

