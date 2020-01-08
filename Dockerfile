FROM node:9-alpine as node
ADD frontend/ .
RUN npm install && npm run build

FROM golang:1.12-alpine3.9 as golang
RUN apk --no-cache add git
WORKDIR /go/src/github.com/negz/kuberos/
ENV CGO_ENABLED=0

ADD . .
COPY --from=node dist/ dist/frontend
COPY --from=node index.html dist/frontend/

RUN go get -u github.com/Masterminds/glide && \
  go get -u github.com/rakyll/statik && \
  glide install

RUN cd statik && go generate && cd ..
RUN go build -o /kuberos ./cmd/kuberos

FROM alpine:3.9
MAINTAINER Nic Cope <n+docker@rk0n.org>

RUN apk --no-cache add ca-certificates curl
COPY --from=golang /kuberos /
