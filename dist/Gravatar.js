"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var lib_1 = require("./lib");
var Gravatar = /** @class */ (function (_super) {
    __extends(Gravatar, _super);
    function Gravatar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gravatar.prototype.buildComponentProps = function () {
        var componentProps = __assign({}, this.props, { src: lib_1.getGravatarUrl(this.props.email, this.props.options) });
        delete componentProps.email;
        delete componentProps.options;
        delete componentProps.component;
        return componentProps;
    };
    Gravatar.prototype.render = function () {
        return this.props.component(this.buildComponentProps());
    };
    Gravatar.defaultProps = {
        component: function (props) {
            return (React.createElement("img", __assign({}, props)));
        },
    };
    return Gravatar;
}(React.PureComponent));
exports.default = Gravatar;
