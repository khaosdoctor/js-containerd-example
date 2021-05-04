#!/bin/bash

pwd | grep 'scripts' || cd scripts || return

protoc \
  --proto_path=../protos \
  --js_out=import_style=commonjs:../protos \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:../protos \
  ../protos/github.com/containerd/containerd/api/services/namespaces/v1/*.proto \
  ../protos/github.com/containerd/containerd/api/services/containers/v1/*.proto \
  ../protos/github.com/containerd/containerd/api/services/images/v1/*.proto \
  ../protos/github.com/containerd/containerd/api/types/*.proto \
  ../protos/gogoproto/gogo.proto
