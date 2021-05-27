#!/usr/bin/env bash

set -ex

OIDC_CLIENT_ID=XXXXX
OIDC_CLIENT_SECRET=XXXXX

CFG=$(mktemp -d /tmp/kuberos.XXXX)
echo $OIDC_CLIENT_SECRET >$CFG/secret
cat <<EOF >$CFG/template
apiVersion: v1
kind: Config
clusters:
- name: <cp-XXXX>.cloud-platform.service.justice.gov.uk
  cluster:
    certificate-authority-data: 
    server: https://XXXX.gr7.eu-west-2.eks.amazonaws.com
EOF

VERSION=$(git rev-parse --short HEAD)
NAME=kuberos

docker kill ${NAME} || true
docker rm ${NAME} || true

docker run -d \
	--name ${NAME} \
	-p 10003:10003 \
	-v $CFG:/cfg \
	"ministryofjustice/cloud-platform-kuberos:${VERSION}" /kuberos \
	https://justice-cloud-platform.eu.auth0.com/ \
	$OIDC_CLIENT_ID \
	/cfg/secret \
	/cfg/template
