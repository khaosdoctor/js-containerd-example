#!/bin/bash

bash ./ctr-create-ns.sh
sudo ctr -namespace jsctr image pull docker.io/envoyproxy/envoy:v1.18-latest
