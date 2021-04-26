const { ListImagesRequest, ListImagesResponse } = require('../protos/github.com/containerd/containerd/api/services/images/v1/images_pb.js')
const { ImagesClient } = require('../protos/github.com/containerd/containerd/api/services/images/v1/images_grpc_web_pb.js')
var client = new ImagesClient('http://crimson-typhoon.hyperv.local:9097')
var request = new ListImagesRequest()
request.setFiltersList([])
// We need to set containerd-namespace header namespace we are inquiring so containerd will understand and execute the RPC properly
client.list(request, { "containerd-namespace": "examplectr" }, (err, response) => {
  if (err != null) {
    console.log("Error:" + err.message)
  } else {
    var imageDiv = document.getElementById("containerd_image_list")
    imageDiv.innerHTML = "Container Images List in examplectr namespace<ul>"
    imageList = response.getImagesList()
    for (var i = 0; i < imageList.length; i++) {
      //console.log("Image:"+imageList[i].getName());
      imageDiv.innerHTML += "<li>" + imageList[i].getName() + "</li>"
    }
    imageDiv.innerHTML += "</ul>"
  }
})
