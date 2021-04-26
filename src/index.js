const protoLoader = require('@grpc/proto-loader')
const grpc = require('@grpc/grpc-js')
const path = require('path');

(async () => {
  const options = {
    includeDirs: [
      path.resolve(__dirname, '../protos')
    ],
    keepCase: true
  }
  const imageDefinition = await protoLoader.load(path.resolve(__dirname, '../protos/github.com/containerd/containerd/api/services/images/v1/images.proto'), options)
  const imageObject = grpc.loadPackageDefinition(imageDefinition)
  const imageClient = new imageObject.containerd.services.images.v1.Images('172.30.234.100:9097', grpc.credentials.createInsecure())

  imageClient.List({ filters: [] }, { "containerd-namespace": "jsctr" }, (err, images) => {
    if (err) throw err
    console.log(images)
  })
})()
