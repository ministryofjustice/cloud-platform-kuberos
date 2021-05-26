#!/usr/bin/env sh

set -e

# Create the docker image
VERSION=$(git rev-parse --short HEAD)
docker push "ministryofjustice/cloud-platform-kuberos:latest"
docker push "ministryofjustice/cloud-platform-kuberos:${VERSION}"

