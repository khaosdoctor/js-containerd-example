#!/bin/bash

containerName="grpc-envoy"

sudo ctr -namespace jsctr container create \
  --net-host \
  --mount type=bind,src=/var/run/containerd/containerd.sock,dst=/var/run/containerd/containerd,options=rbind:ro \
  --mount type=bind,src=../config/envoy.yaml,dst=/etc/envoy/envoy.yaml,options=rbind:ro \
  docker.io/envoyproxy/envoy:v1.18-latest \
  $containerName

sudo ctr -namespace jsctr task start $containerName
