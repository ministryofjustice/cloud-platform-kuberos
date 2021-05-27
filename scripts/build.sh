#!/usr/bin/env bash

# Create the docker image
VERSION=$(git rev-parse --short HEAD)
docker build --tag "ministryofjustice/cloud-platform-kuberos:latest" .
docker build --tag "ministryofjustice/cloud-platform-kuberos:${VERSION}" .
