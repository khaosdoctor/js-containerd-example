/**
 * @fileoverview gRPC-Web generated client stub for containerd.services.images.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../../../../../gogoproto/gogo_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var github_com_containerd_containerd_api_types_descriptor_pb = require('../../../../../../../github.com/containerd/containerd/api/types/descriptor_pb.js')
const proto = {};
proto.containerd = {};
proto.containerd.services = {};
proto.containerd.services.images = {};
proto.containerd.services.images.v1 = require('./images_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.containerd.services.images.v1.ImagesClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.containerd.services.images.v1.ImagesPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.containerd.services.images.v1.GetImageRequest,
 *   !proto.containerd.services.images.v1.GetImageResponse>}
 */
const methodDescriptor_Images_Get = new grpc.web.MethodDescriptor(
  '/containerd.services.images.v1.Images/Get',
  grpc.web.MethodType.UNARY,
  proto.containerd.services.images.v1.GetImageRequest,
  proto.containerd.services.images.v1.GetImageResponse,
  /**
   * @param {!proto.containerd.services.images.v1.GetImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.images.v1.GetImageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.containerd.services.images.v1.GetImageRequest,
 *   !proto.containerd.services.images.v1.GetImageResponse>}
 */
const methodInfo_Images_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.containerd.services.images.v1.GetImageResponse,
  /**
   * @param {!proto.containerd.services.images.v1.GetImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.images.v1.GetImageResponse.deserializeBinary
);


/**
 * @param {!proto.containerd.services.images.v1.GetImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.containerd.services.images.v1.GetImageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.containerd.services.images.v1.GetImageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.containerd.services.images.v1.ImagesClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/containerd.services.images.v1.Images/Get',
      request,
      metadata || {},
      methodDescriptor_Images_Get,
      callback);
};


/**
 * @param {!proto.containerd.services.images.v1.GetImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.containerd.services.images.v1.GetImageResponse>}
 *     Promise that resolves to the response
 */
proto.containerd.services.images.v1.ImagesPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/containerd.services.images.v1.Images/Get',
      request,
      metadata || {},
      methodDescriptor_Images_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.containerd.services.images.v1.ListImagesRequest,
 *   !proto.containerd.services.images.v1.ListImagesResponse>}
 */
const methodDescriptor_Images_List = new grpc.web.MethodDescriptor(
  '/containerd.services.images.v1.Images/List',
  grpc.web.MethodType.UNARY,
  proto.containerd.services.images.v1.ListImagesRequest,
  proto.containerd.services.images.v1.ListImagesResponse,
  /**
   * @param {!proto.containerd.services.images.v1.ListImagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.images.v1.ListImagesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.containerd.services.images.v1.ListImagesRequest,
 *   !proto.containerd.services.images.v1.ListImagesResponse>}
 */
const methodInfo_Images_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.containerd.services.images.v1.ListImagesResponse,
  /**
   * @param {!proto.containerd.services.images.v1.ListImagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.images.v1.ListImagesResponse.deserializeBinary
);


/**
 * @param {!proto.containerd.services.images.v1.ListImagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.containerd.services.images.v1.ListImagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.containerd.services.images.v1.ListImagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.containerd.services.images.v1.ImagesClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/containerd.services.images.v1.Images/List',
      request,
      metadata || {},
      methodDescriptor_Images_List,
      callback);
};


/**
 * @param {!proto.containerd.services.images.v1.ListImagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.containerd.services.images.v1.ListImagesResponse>}
 *     Promise that resolves to the response
 */
proto.containerd.services.images.v1.ImagesPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/containerd.services.images.v1.Images/List',
      request,
      metadata || {},
      methodDescriptor_Images_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.containerd.services.images.v1.CreateImageRequest,
 *   !proto.containerd.services.images.v1.CreateImageResponse>}
 */
const methodDescriptor_Images_Create = new grpc.web.MethodDescriptor(
  '/containerd.services.images.v1.Images/Create',
  grpc.web.MethodType.UNARY,
  proto.containerd.services.images.v1.CreateImageRequest,
  proto.containerd.services.images.v1.CreateImageResponse,
  /**
   * @param {!proto.containerd.services.images.v1.CreateImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.images.v1.CreateImageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.containerd.services.images.v1.CreateImageRequest,
 *   !proto.containerd.services.images.v1.CreateImageResponse>}
 */
const methodInfo_Images_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.containerd.services.images.v1.CreateImageResponse,
  /**
   * @param {!proto.containerd.services.images.v1.CreateImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.images.v1.CreateImageResponse.deserializeBinary
);


/**
 * @param {!proto.containerd.services.images.v1.CreateImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.containerd.services.images.v1.CreateImageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.containerd.services.images.v1.CreateImageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.containerd.services.images.v1.ImagesClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/containerd.services.images.v1.Images/Create',
      request,
      metadata || {},
      methodDescriptor_Images_Create,
      callback);
};


/**
 * @param {!proto.containerd.services.images.v1.CreateImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.containerd.services.images.v1.CreateImageResponse>}
 *     Promise that resolves to the response
 */
proto.containerd.services.images.v1.ImagesPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/containerd.services.images.v1.Images/Create',
      request,
      metadata || {},
      methodDescriptor_Images_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.containerd.services.images.v1.UpdateImageRequest,
 *   !proto.containerd.services.images.v1.UpdateImageResponse>}
 */
const methodDescriptor_Images_Update = new grpc.web.MethodDescriptor(
  '/containerd.services.images.v1.Images/Update',
  grpc.web.MethodType.UNARY,
  proto.containerd.services.images.v1.UpdateImageRequest,
  proto.containerd.services.images.v1.UpdateImageResponse,
  /**
   * @param {!proto.containerd.services.images.v1.UpdateImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.images.v1.UpdateImageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.containerd.services.images.v1.UpdateImageRequest,
 *   !proto.containerd.services.images.v1.UpdateImageResponse>}
 */
const methodInfo_Images_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.containerd.services.images.v1.UpdateImageResponse,
  /**
   * @param {!proto.containerd.services.images.v1.UpdateImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.images.v1.UpdateImageResponse.deserializeBinary
);


/**
 * @param {!proto.containerd.services.images.v1.UpdateImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.containerd.services.images.v1.UpdateImageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.containerd.services.images.v1.UpdateImageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.containerd.services.images.v1.ImagesClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/containerd.services.images.v1.Images/Update',
      request,
      metadata || {},
      methodDescriptor_Images_Update,
      callback);
};


/**
 * @param {!proto.containerd.services.images.v1.UpdateImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.containerd.services.images.v1.UpdateImageResponse>}
 *     Promise that resolves to the response
 */
proto.containerd.services.images.v1.ImagesPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/containerd.services.images.v1.Images/Update',
      request,
      metadata || {},
      methodDescriptor_Images_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.containerd.services.images.v1.DeleteImageRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Images_Delete = new grpc.web.MethodDescriptor(
  '/containerd.services.images.v1.Images/Delete',
  grpc.web.MethodType.UNARY,
  proto.containerd.services.images.v1.DeleteImageRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.containerd.services.images.v1.DeleteImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.containerd.services.images.v1.DeleteImageRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Images_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.containerd.services.images.v1.DeleteImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.containerd.services.images.v1.DeleteImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.containerd.services.images.v1.ImagesClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/containerd.services.images.v1.Images/Delete',
      request,
      metadata || {},
      methodDescriptor_Images_Delete,
      callback);
};


/**
 * @param {!proto.containerd.services.images.v1.DeleteImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.containerd.services.images.v1.ImagesPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/containerd.services.images.v1.Images/Delete',
      request,
      metadata || {},
      methodDescriptor_Images_Delete);
};


module.exports = proto.containerd.services.images.v1;

