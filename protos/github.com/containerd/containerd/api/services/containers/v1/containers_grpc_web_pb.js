/**
 * @fileoverview gRPC-Web generated client stub for containerd.services.containers.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../../../../../gogoproto/gogo_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.containerd = {};
proto.containerd.services = {};
proto.containerd.services.containers = {};
proto.containerd.services.containers.v1 = require('./containers_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.containerd.services.containers.v1.ContainersClient =
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
proto.containerd.services.containers.v1.ContainersPromiseClient =
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
 *   !proto.containerd.services.containers.v1.GetContainerRequest,
 *   !proto.containerd.services.containers.v1.GetContainerResponse>}
 */
const methodDescriptor_Containers_Get = new grpc.web.MethodDescriptor(
  '/containerd.services.containers.v1.Containers/Get',
  grpc.web.MethodType.UNARY,
  proto.containerd.services.containers.v1.GetContainerRequest,
  proto.containerd.services.containers.v1.GetContainerResponse,
  /**
   * @param {!proto.containerd.services.containers.v1.GetContainerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.containers.v1.GetContainerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.containerd.services.containers.v1.GetContainerRequest,
 *   !proto.containerd.services.containers.v1.GetContainerResponse>}
 */
const methodInfo_Containers_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.containerd.services.containers.v1.GetContainerResponse,
  /**
   * @param {!proto.containerd.services.containers.v1.GetContainerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.containers.v1.GetContainerResponse.deserializeBinary
);


/**
 * @param {!proto.containerd.services.containers.v1.GetContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.containerd.services.containers.v1.GetContainerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.containerd.services.containers.v1.GetContainerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.containerd.services.containers.v1.ContainersClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/containerd.services.containers.v1.Containers/Get',
      request,
      metadata || {},
      methodDescriptor_Containers_Get,
      callback);
};


/**
 * @param {!proto.containerd.services.containers.v1.GetContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.containerd.services.containers.v1.GetContainerResponse>}
 *     Promise that resolves to the response
 */
proto.containerd.services.containers.v1.ContainersPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/containerd.services.containers.v1.Containers/Get',
      request,
      metadata || {},
      methodDescriptor_Containers_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.containerd.services.containers.v1.ListContainersRequest,
 *   !proto.containerd.services.containers.v1.ListContainersResponse>}
 */
const methodDescriptor_Containers_List = new grpc.web.MethodDescriptor(
  '/containerd.services.containers.v1.Containers/List',
  grpc.web.MethodType.UNARY,
  proto.containerd.services.containers.v1.ListContainersRequest,
  proto.containerd.services.containers.v1.ListContainersResponse,
  /**
   * @param {!proto.containerd.services.containers.v1.ListContainersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.containers.v1.ListContainersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.containerd.services.containers.v1.ListContainersRequest,
 *   !proto.containerd.services.containers.v1.ListContainersResponse>}
 */
const methodInfo_Containers_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.containerd.services.containers.v1.ListContainersResponse,
  /**
   * @param {!proto.containerd.services.containers.v1.ListContainersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.containers.v1.ListContainersResponse.deserializeBinary
);


/**
 * @param {!proto.containerd.services.containers.v1.ListContainersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.containerd.services.containers.v1.ListContainersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.containerd.services.containers.v1.ListContainersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.containerd.services.containers.v1.ContainersClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/containerd.services.containers.v1.Containers/List',
      request,
      metadata || {},
      methodDescriptor_Containers_List,
      callback);
};


/**
 * @param {!proto.containerd.services.containers.v1.ListContainersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.containerd.services.containers.v1.ListContainersResponse>}
 *     Promise that resolves to the response
 */
proto.containerd.services.containers.v1.ContainersPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/containerd.services.containers.v1.Containers/List',
      request,
      metadata || {},
      methodDescriptor_Containers_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.containerd.services.containers.v1.ListContainersRequest,
 *   !proto.containerd.services.containers.v1.ListContainerMessage>}
 */
const methodDescriptor_Containers_ListStream = new grpc.web.MethodDescriptor(
  '/containerd.services.containers.v1.Containers/ListStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.containerd.services.containers.v1.ListContainersRequest,
  proto.containerd.services.containers.v1.ListContainerMessage,
  /**
   * @param {!proto.containerd.services.containers.v1.ListContainersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.containers.v1.ListContainerMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.containerd.services.containers.v1.ListContainersRequest,
 *   !proto.containerd.services.containers.v1.ListContainerMessage>}
 */
const methodInfo_Containers_ListStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.containerd.services.containers.v1.ListContainerMessage,
  /**
   * @param {!proto.containerd.services.containers.v1.ListContainersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.containers.v1.ListContainerMessage.deserializeBinary
);


/**
 * @param {!proto.containerd.services.containers.v1.ListContainersRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.containerd.services.containers.v1.ListContainerMessage>}
 *     The XHR Node Readable Stream
 */
proto.containerd.services.containers.v1.ContainersClient.prototype.listStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/containerd.services.containers.v1.Containers/ListStream',
      request,
      metadata || {},
      methodDescriptor_Containers_ListStream);
};


/**
 * @param {!proto.containerd.services.containers.v1.ListContainersRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.containerd.services.containers.v1.ListContainerMessage>}
 *     The XHR Node Readable Stream
 */
proto.containerd.services.containers.v1.ContainersPromiseClient.prototype.listStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/containerd.services.containers.v1.Containers/ListStream',
      request,
      metadata || {},
      methodDescriptor_Containers_ListStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.containerd.services.containers.v1.CreateContainerRequest,
 *   !proto.containerd.services.containers.v1.CreateContainerResponse>}
 */
const methodDescriptor_Containers_Create = new grpc.web.MethodDescriptor(
  '/containerd.services.containers.v1.Containers/Create',
  grpc.web.MethodType.UNARY,
  proto.containerd.services.containers.v1.CreateContainerRequest,
  proto.containerd.services.containers.v1.CreateContainerResponse,
  /**
   * @param {!proto.containerd.services.containers.v1.CreateContainerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.containers.v1.CreateContainerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.containerd.services.containers.v1.CreateContainerRequest,
 *   !proto.containerd.services.containers.v1.CreateContainerResponse>}
 */
const methodInfo_Containers_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.containerd.services.containers.v1.CreateContainerResponse,
  /**
   * @param {!proto.containerd.services.containers.v1.CreateContainerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.containers.v1.CreateContainerResponse.deserializeBinary
);


/**
 * @param {!proto.containerd.services.containers.v1.CreateContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.containerd.services.containers.v1.CreateContainerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.containerd.services.containers.v1.CreateContainerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.containerd.services.containers.v1.ContainersClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/containerd.services.containers.v1.Containers/Create',
      request,
      metadata || {},
      methodDescriptor_Containers_Create,
      callback);
};


/**
 * @param {!proto.containerd.services.containers.v1.CreateContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.containerd.services.containers.v1.CreateContainerResponse>}
 *     Promise that resolves to the response
 */
proto.containerd.services.containers.v1.ContainersPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/containerd.services.containers.v1.Containers/Create',
      request,
      metadata || {},
      methodDescriptor_Containers_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.containerd.services.containers.v1.UpdateContainerRequest,
 *   !proto.containerd.services.containers.v1.UpdateContainerResponse>}
 */
const methodDescriptor_Containers_Update = new grpc.web.MethodDescriptor(
  '/containerd.services.containers.v1.Containers/Update',
  grpc.web.MethodType.UNARY,
  proto.containerd.services.containers.v1.UpdateContainerRequest,
  proto.containerd.services.containers.v1.UpdateContainerResponse,
  /**
   * @param {!proto.containerd.services.containers.v1.UpdateContainerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.containers.v1.UpdateContainerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.containerd.services.containers.v1.UpdateContainerRequest,
 *   !proto.containerd.services.containers.v1.UpdateContainerResponse>}
 */
const methodInfo_Containers_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.containerd.services.containers.v1.UpdateContainerResponse,
  /**
   * @param {!proto.containerd.services.containers.v1.UpdateContainerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.containers.v1.UpdateContainerResponse.deserializeBinary
);


/**
 * @param {!proto.containerd.services.containers.v1.UpdateContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.containerd.services.containers.v1.UpdateContainerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.containerd.services.containers.v1.UpdateContainerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.containerd.services.containers.v1.ContainersClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/containerd.services.containers.v1.Containers/Update',
      request,
      metadata || {},
      methodDescriptor_Containers_Update,
      callback);
};


/**
 * @param {!proto.containerd.services.containers.v1.UpdateContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.containerd.services.containers.v1.UpdateContainerResponse>}
 *     Promise that resolves to the response
 */
proto.containerd.services.containers.v1.ContainersPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/containerd.services.containers.v1.Containers/Update',
      request,
      metadata || {},
      methodDescriptor_Containers_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.containerd.services.containers.v1.DeleteContainerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Containers_Delete = new grpc.web.MethodDescriptor(
  '/containerd.services.containers.v1.Containers/Delete',
  grpc.web.MethodType.UNARY,
  proto.containerd.services.containers.v1.DeleteContainerRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.containerd.services.containers.v1.DeleteContainerRequest} request
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
 *   !proto.containerd.services.containers.v1.DeleteContainerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Containers_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.containerd.services.containers.v1.DeleteContainerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.containerd.services.containers.v1.DeleteContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.containerd.services.containers.v1.ContainersClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/containerd.services.containers.v1.Containers/Delete',
      request,
      metadata || {},
      methodDescriptor_Containers_Delete,
      callback);
};


/**
 * @param {!proto.containerd.services.containers.v1.DeleteContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.containerd.services.containers.v1.ContainersPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/containerd.services.containers.v1.Containers/Delete',
      request,
      metadata || {},
      methodDescriptor_Containers_Delete);
};


module.exports = proto.containerd.services.containers.v1;

