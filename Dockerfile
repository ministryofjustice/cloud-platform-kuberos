FROM node:22-alpine as node
ADD frontend/ .
RUN npm install && npm run build

FROM golang:1.22-alpine as golang
RUN apk --no-cache add git
WORKDIR /go/src/github.com/ministryofjustice/cloud-platform-kuberos/
ENV CGO_ENABLED=0

ADD . .
COPY --from=node dist/ dist/frontend
COPY --from=node index.html dist/frontend/

RUN go install github.com/rakyll/statik

RUN cd statik && go generate && cd ..
RUN go build -o /kuberos ./cmd/kuberos

FROM alpine:3.20
MAINTAINER Nic Cope <n+docker@rk0n.org>

RUN apk --no-cache add ca-certificates curl
COPY --from=golang /kuberos /