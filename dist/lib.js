"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var querystring_1 = require("querystring");
var md5_1 = __importDefault(require("md5"));
exports.getGravatarUrl = function (email, options) {
    if (options === void 0) { options = {}; }
    var query = __assign({}, options);
    if (options.defaultUrl) {
        query.default = options.defaultUrl;
    }
    var emailHash = md5_1.default(email);
    return "https://www.gravatar.com/avatar/" + emailHash + "?" + querystring_1.stringify(query);
};
