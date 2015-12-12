"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileResponse = exports.JsonResponse = exports.HTMLResponse = exports.FlameResponse = undefined;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require("babel-runtime/helpers/get");

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlameResponse = exports.FlameResponse = (function () {
  function FlameResponse(req, res) {
    (0, _classCallCheck3.default)(this, FlameResponse);

    this.req = req;
    this.res = res;
  }

  (0, _createClass3.default)(FlameResponse, [{
    key: "send",
    value: function send(msg) {
      if (msg) this.res.end(msg);else this.res.end(msg);
    }
  }, {
    key: "status",
    value: function status(number) {
      this.res.statusCode = number;
    }
  }, {
    key: "setHeader",
    value: function setHeader(key, value) {
      this.res.setHeader(key, value);
    }
  }, {
    key: "removeHeader",
    value: function removeHeader(key) {
      this.res.removeHeader(key);
    }
  }]);
  return FlameResponse;
})();

var HTMLResponse = exports.HTMLResponse = (function (_FlameResponse) {
  (0, _inherits3.default)(HTMLResponse, _FlameResponse);

  function HTMLResponse(req, res) {
    (0, _classCallCheck3.default)(this, HTMLResponse);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(HTMLResponse).call(this, req, res));

    _this.setHeader("content-type", "text/html");
    return _this;
  }

  (0, _createClass3.default)(HTMLResponse, [{
    key: "send",
    value: function send(msg) {
      if (msg) (0, _get3.default)((0, _getPrototypeOf2.default)(HTMLResponse.prototype), "send", this).call(this, msg);else (0, _get3.default)((0, _getPrototypeOf2.default)(HTMLResponse.prototype), "send", this).call(this);
    }
  }]);
  return HTMLResponse;
})(FlameResponse);

var JsonResponse = exports.JsonResponse = (function (_FlameResponse2) {
  (0, _inherits3.default)(JsonResponse, _FlameResponse2);

  function JsonResponse(req, res) {
    (0, _classCallCheck3.default)(this, JsonResponse);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(JsonResponse).call(this, req, res));

    _this2.setHeader("content-type", "application/json");
    return _this2;
  }

  (0, _createClass3.default)(JsonResponse, [{
    key: "send",
    value: function send(msg) {
      if (msg) (0, _get3.default)((0, _getPrototypeOf2.default)(JsonResponse.prototype), "send", this).call(this, (0, _stringify2.default)(msg));else (0, _get3.default)((0, _getPrototypeOf2.default)(JsonResponse.prototype), "send", this).call(this);
    }
  }]);
  return JsonResponse;
})(FlameResponse);

var FileResponse = exports.FileResponse = (function (_FlameResponse3) {
  (0, _inherits3.default)(FileResponse, _FlameResponse3);

  function FileResponse(req, res) {
    (0, _classCallCheck3.default)(this, FileResponse);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FileResponse).call(this, req, res));

    _this3.setHeader("content-type", "application/octet-stream");
    return _this3;
  }

  (0, _createClass3.default)(FileResponse, [{
    key: "send",
    value: function send(filename) {
      var lookup = require("mime-loopup");
      var mimedb = require("mime-db");
      lookup = new lookup(mimedb);
      var val = lookup.lookup(filename);
      if (val) {
        this.setHeader("content-type", val);
      }
      var fs = require("fs");
      var stream = fs.createReadStream(filename);
      res.pipe(stream);
    }
  }]);
  return FileResponse;
})(FlameResponse);