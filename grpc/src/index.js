const protoLoader = require('@grpc/proto-loader')
const grpc = require('@grpc/grpc-js')
const path = require('path')
const fs = require('fs');

(async () => {
  const options = {
    includeDirs: [
      path.resolve(__dirname, '../protos')
    ],
    keepCase: true
  }
  const imageDefinition = await protoLoader.load(path.resolve(__dirname, '../protos/github.com/containerd/containerd/api/services/images/v1/images.proto'), options)
  const imageObject = grpc.loadPackageDefinition(imageDefinition)
  const imageClient = new imageObject.containerd.services.images.v1.Images('unix:/run/containerd/containerd.sock', grpc.credentials.createInsecure())

  const namespace = new grpc.Metadata()
  namespace.add('containerd-namespace', 'jsctr')

  const payload = {
    image: {
      name: 'docker.io/khaosdoctor/go-vote-api:latest',
      target: {
        size: 2201697,
        digest: 'sha256:51dd0ec4b871707363699fcc75b7d7538cfa8f53cc83c8c82ef57acbc9a57fc9',
        media_type: 'application/vnd.docker.distribution.manifest.v2+json'
      },
      created_at: new Date,
      updated_at: new Date
    }
  }

  imageClient.Create(payload, namespace, (err, result) => {
    if (err) throw err
    console.log(result)
  })

  imageClient.List({ filters: [] }, namespace, (err, images) => {
    if (err) throw err
    console.log(images)
  })

  const contentDefinition = await protoLoader.load(path.resolve(__dirname, '../protos/github.com/containerd/containerd/api/services/content/v1/content.proto'), options)
  const contentObject = grpc.loadPackageDefinition(contentDefinition)
  const contentClient = new contentObject.containerd.services.content.v1.Content('unix:/run/containerd/containerd.sock', grpc.credentials.createInsecure())

  const contentStream = contentClient.List({ filters: [] }, namespace)
  if (!fs.statSync(path.resolve(__dirname, './outputs'))) fs.mkdirSync(path.resolve(__dirname, './outputs'))
  contentStream.on('data', (content, err) => {
    if (err) throw err
    fs.writeFileSync(path.resolve(__dirname, './outputs/content.json'), JSON.stringify(content, null, 2))
  })
})()
