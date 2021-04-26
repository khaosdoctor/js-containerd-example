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
  const imageClient = new imageObject.containerd.services.images.v1.Images(`unix:${process.env.CONTAINERD_SOCKET_PATH || '/run/containerd/containerd.sock'}`, grpc.credentials.createInsecure())

  const metadata = new grpc.Metadata()
  metadata.add('containerd-namespace', process.env.CONTAINERD_NAMESPACE || 'jsctr')

  imageClient.List({ filters: [] }, metadata, (err, images) => {
    if (err) throw err
    console.log(images)
  })
})()
