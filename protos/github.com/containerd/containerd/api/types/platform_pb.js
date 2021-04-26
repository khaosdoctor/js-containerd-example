// source: github.com/containerd/containerd/api/types/platform.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var gogoproto_gogo_pb = require('../../../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.containerd.types.Platform', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.containerd.types.Platform = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.containerd.types.Platform, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.containerd.types.Platform.displayName = 'proto.containerd.types.Platform';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.containerd.types.Platform.prototype.toObject = function(opt_includeInstance) {
  return proto.containerd.types.Platform.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.containerd.types.Platform} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.containerd.types.Platform.toObject = function(includeInstance, msg) {
  var f, obj = {
    os: jspb.Message.getFieldWithDefault(msg, 1, ""),
    architecture: jspb.Message.getFieldWithDefault(msg, 2, ""),
    variant: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.containerd.types.Platform}
 */
proto.containerd.types.Platform.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.containerd.types.Platform;
  return proto.containerd.types.Platform.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.containerd.types.Platform} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.containerd.types.Platform}
 */
proto.containerd.types.Platform.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOs(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setArchitecture(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariant(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.containerd.types.Platform.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.containerd.types.Platform.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.containerd.types.Platform} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.containerd.types.Platform.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOs();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getArchitecture();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVariant();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string os = 1;
 * @return {string}
 */
proto.containerd.types.Platform.prototype.getOs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.containerd.types.Platform} returns this
 */
proto.containerd.types.Platform.prototype.setOs = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string architecture = 2;
 * @return {string}
 */
proto.containerd.types.Platform.prototype.getArchitecture = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.containerd.types.Platform} returns this
 */
proto.containerd.types.Platform.prototype.setArchitecture = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string variant = 3;
 * @return {string}
 */
proto.containerd.types.Platform.prototype.getVariant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.containerd.types.Platform} returns this
 */
proto.containerd.types.Platform.prototype.setVariant = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.containerd.types);
