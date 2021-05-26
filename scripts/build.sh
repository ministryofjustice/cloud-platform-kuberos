#!/usr/bin/env bash

set -ex

DIST="dist"
VENDOR="vendor"

export GOOS="linux"
export GOARCH="amd64"
export CGO_ENABLED=0

rm -rf "${DIST}"
rm -rf "${VENDOR}"
mkdir -p "${DIST}/frontend"

pushd frontend
npm install
npm run build
popd

cp frontend/index.html "${DIST}/frontend/"
cp frontend/dist/* "${DIST}/frontend/"

# Build the binary
go build -o "${DIST}/kuberos" ./cmd/kuberos

# Create the docker image
VERSION=$(git rev-parse --short HEAD)
docker build --tag "ministryofjustice/cloud-platform-kuberos:latest" .
docker build --tag "ministryofjustice/cloud-platform-kuberos:${VERSION}" .
