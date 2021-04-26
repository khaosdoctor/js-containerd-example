/**
 * @fileoverview gRPC-Web generated client stub for containerd.services.namespaces.v1
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
const proto = {};
proto.containerd = {};
proto.containerd.services = {};
proto.containerd.services.namespaces = {};
proto.containerd.services.namespaces.v1 = require('./namespace_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.containerd.services.namespaces.v1.NamespacesClient =
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
proto.containerd.services.namespaces.v1.NamespacesPromiseClient =
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
 *   !proto.containerd.services.namespaces.v1.GetNamespaceRequest,
 *   !proto.containerd.services.namespaces.v1.GetNamespaceResponse>}
 */
const methodDescriptor_Namespaces_Get = new grpc.web.MethodDescriptor(
  '/containerd.services.namespaces.v1.Namespaces/Get',
  grpc.web.MethodType.UNARY,
  proto.containerd.services.namespaces.v1.GetNamespaceRequest,
  proto.containerd.services.namespaces.v1.GetNamespaceResponse,
  /**
   * @param {!proto.containerd.services.namespaces.v1.GetNamespaceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.namespaces.v1.GetNamespaceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.containerd.services.namespaces.v1.GetNamespaceRequest,
 *   !proto.containerd.services.namespaces.v1.GetNamespaceResponse>}
 */
const methodInfo_Namespaces_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.containerd.services.namespaces.v1.GetNamespaceResponse,
  /**
   * @param {!proto.containerd.services.namespaces.v1.GetNamespaceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.namespaces.v1.GetNamespaceResponse.deserializeBinary
);


/**
 * @param {!proto.containerd.services.namespaces.v1.GetNamespaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.containerd.services.namespaces.v1.GetNamespaceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.containerd.services.namespaces.v1.GetNamespaceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.containerd.services.namespaces.v1.NamespacesClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/containerd.services.namespaces.v1.Namespaces/Get',
      request,
      metadata || {},
      methodDescriptor_Namespaces_Get,
      callback);
};


/**
 * @param {!proto.containerd.services.namespaces.v1.GetNamespaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.containerd.services.namespaces.v1.GetNamespaceResponse>}
 *     Promise that resolves to the response
 */
proto.containerd.services.namespaces.v1.NamespacesPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/containerd.services.namespaces.v1.Namespaces/Get',
      request,
      metadata || {},
      methodDescriptor_Namespaces_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.containerd.services.namespaces.v1.ListNamespacesRequest,
 *   !proto.containerd.services.namespaces.v1.ListNamespacesResponse>}
 */
const methodDescriptor_Namespaces_List = new grpc.web.MethodDescriptor(
  '/containerd.services.namespaces.v1.Namespaces/List',
  grpc.web.MethodType.UNARY,
  proto.containerd.services.namespaces.v1.ListNamespacesRequest,
  proto.containerd.services.namespaces.v1.ListNamespacesResponse,
  /**
   * @param {!proto.containerd.services.namespaces.v1.ListNamespacesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.namespaces.v1.ListNamespacesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.containerd.services.namespaces.v1.ListNamespacesRequest,
 *   !proto.containerd.services.namespaces.v1.ListNamespacesResponse>}
 */
const methodInfo_Namespaces_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.containerd.services.namespaces.v1.ListNamespacesResponse,
  /**
   * @param {!proto.containerd.services.namespaces.v1.ListNamespacesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.namespaces.v1.ListNamespacesResponse.deserializeBinary
);


/**
 * @param {!proto.containerd.services.namespaces.v1.ListNamespacesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.containerd.services.namespaces.v1.ListNamespacesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.containerd.services.namespaces.v1.ListNamespacesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.containerd.services.namespaces.v1.NamespacesClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/containerd.services.namespaces.v1.Namespaces/List',
      request,
      metadata || {},
      methodDescriptor_Namespaces_List,
      callback);
};


/**
 * @param {!proto.containerd.services.namespaces.v1.ListNamespacesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.containerd.services.namespaces.v1.ListNamespacesResponse>}
 *     Promise that resolves to the response
 */
proto.containerd.services.namespaces.v1.NamespacesPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/containerd.services.namespaces.v1.Namespaces/List',
      request,
      metadata || {},
      methodDescriptor_Namespaces_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.containerd.services.namespaces.v1.CreateNamespaceRequest,
 *   !proto.containerd.services.namespaces.v1.CreateNamespaceResponse>}
 */
const methodDescriptor_Namespaces_Create = new grpc.web.MethodDescriptor(
  '/containerd.services.namespaces.v1.Namespaces/Create',
  grpc.web.MethodType.UNARY,
  proto.containerd.services.namespaces.v1.CreateNamespaceRequest,
  proto.containerd.services.namespaces.v1.CreateNamespaceResponse,
  /**
   * @param {!proto.containerd.services.namespaces.v1.CreateNamespaceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.namespaces.v1.CreateNamespaceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.containerd.services.namespaces.v1.CreateNamespaceRequest,
 *   !proto.containerd.services.namespaces.v1.CreateNamespaceResponse>}
 */
const methodInfo_Namespaces_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.containerd.services.namespaces.v1.CreateNamespaceResponse,
  /**
   * @param {!proto.containerd.services.namespaces.v1.CreateNamespaceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.namespaces.v1.CreateNamespaceResponse.deserializeBinary
);


/**
 * @param {!proto.containerd.services.namespaces.v1.CreateNamespaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.containerd.services.namespaces.v1.CreateNamespaceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.containerd.services.namespaces.v1.CreateNamespaceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.containerd.services.namespaces.v1.NamespacesClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/containerd.services.namespaces.v1.Namespaces/Create',
      request,
      metadata || {},
      methodDescriptor_Namespaces_Create,
      callback);
};


/**
 * @param {!proto.containerd.services.namespaces.v1.CreateNamespaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.containerd.services.namespaces.v1.CreateNamespaceResponse>}
 *     Promise that resolves to the response
 */
proto.containerd.services.namespaces.v1.NamespacesPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/containerd.services.namespaces.v1.Namespaces/Create',
      request,
      metadata || {},
      methodDescriptor_Namespaces_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.containerd.services.namespaces.v1.UpdateNamespaceRequest,
 *   !proto.containerd.services.namespaces.v1.UpdateNamespaceResponse>}
 */
const methodDescriptor_Namespaces_Update = new grpc.web.MethodDescriptor(
  '/containerd.services.namespaces.v1.Namespaces/Update',
  grpc.web.MethodType.UNARY,
  proto.containerd.services.namespaces.v1.UpdateNamespaceRequest,
  proto.containerd.services.namespaces.v1.UpdateNamespaceResponse,
  /**
   * @param {!proto.containerd.services.namespaces.v1.UpdateNamespaceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.namespaces.v1.UpdateNamespaceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.containerd.services.namespaces.v1.UpdateNamespaceRequest,
 *   !proto.containerd.services.namespaces.v1.UpdateNamespaceResponse>}
 */
const methodInfo_Namespaces_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.containerd.services.namespaces.v1.UpdateNamespaceResponse,
  /**
   * @param {!proto.containerd.services.namespaces.v1.UpdateNamespaceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.containerd.services.namespaces.v1.UpdateNamespaceResponse.deserializeBinary
);


/**
 * @param {!proto.containerd.services.namespaces.v1.UpdateNamespaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.containerd.services.namespaces.v1.UpdateNamespaceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.containerd.services.namespaces.v1.UpdateNamespaceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.containerd.services.namespaces.v1.NamespacesClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/containerd.services.namespaces.v1.Namespaces/Update',
      request,
      metadata || {},
      methodDescriptor_Namespaces_Update,
      callback);
};


/**
 * @param {!proto.containerd.services.namespaces.v1.UpdateNamespaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.containerd.services.namespaces.v1.UpdateNamespaceResponse>}
 *     Promise that resolves to the response
 */
proto.containerd.services.namespaces.v1.NamespacesPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/containerd.services.namespaces.v1.Namespaces/Update',
      request,
      metadata || {},
      methodDescriptor_Namespaces_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.containerd.services.namespaces.v1.DeleteNamespaceRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Namespaces_Delete = new grpc.web.MethodDescriptor(
  '/containerd.services.namespaces.v1.Namespaces/Delete',
  grpc.web.MethodType.UNARY,
  proto.containerd.services.namespaces.v1.DeleteNamespaceRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.containerd.services.namespaces.v1.DeleteNamespaceRequest} request
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
 *   !proto.containerd.services.namespaces.v1.DeleteNamespaceRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Namespaces_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.containerd.services.namespaces.v1.DeleteNamespaceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.containerd.services.namespaces.v1.DeleteNamespaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.containerd.services.namespaces.v1.NamespacesClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/containerd.services.namespaces.v1.Namespaces/Delete',
      request,
      metadata || {},
      methodDescriptor_Namespaces_Delete,
      callback);
};


/**
 * @param {!proto.containerd.services.namespaces.v1.DeleteNamespaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.containerd.services.namespaces.v1.NamespacesPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/containerd.services.namespaces.v1.Namespaces/Delete',
      request,
      metadata || {},
      methodDescriptor_Namespaces_Delete);
};


module.exports = proto.containerd.services.namespaces.v1;

