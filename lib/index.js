"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (e) {
  var n = {};

  function t(r) {
    if (n[r]) return n[r].exports;
    var o = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
  }

  return t.m = e, t.c = n, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: r
    });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, t.t = function (e, n) {
    if (1 & n && (e = t(e)), 8 & n) return e;
    if (4 & n && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (t.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) {
      t.d(r, o, function (n) {
        return e[n];
      }.bind(null, o));
    }
    return r;
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return t.d(n, "a", n), n;
  }, t.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, t.p = "", t(t.s = 2);
}([function (e, n) {
  e.exports = require("react");
}, function (e, n) {
  e.exports = require("styled-components");
}, function (e, n, t) {
  "use strict";

  t.r(n), t.d(n, "UIButton", function () {
    return p;
  });
  var r,
      o = t(0),
      u = t.n(o),
      i = t(1),
      c = ["children", "title"];

  function l(e, n) {
    if (null == e) return {};

    var t,
        r,
        o = function (e, n) {
      if (null == e) return {};
      var t,
          r,
          o = {},
          u = Object.keys(e);

      for (r = 0; r < u.length; r++) {
        t = u[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
      }

      return o;
    }(e, n);

    if (Object.getOwnPropertySymbols) {
      var u = Object.getOwnPropertySymbols(e);

      for (r = 0; r < u.length; r++) {
        t = u[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
      }
    }

    return o;
  }

  var f,
      a,
      d = t.n(i)()(function (e) {
    var n = e.children,
        t = e.title,
        r = void 0 === t ? "" : t,
        o = l(e, c);
    return u.a.createElement("button", o, r || n);
  }).withConfig({
    displayName: "Button__StyledButton",
    componentId: "sc-1h812vn-0"
  })(r || (f = ["\n    border-radius: 5px;\n    background-color: '#a1cdf1';\n    color: #fff;\n    padding: 10px 15px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    margin: 15px;\n"], a || (a = f.slice(0)), r = Object.freeze(Object.defineProperties(f, {
    raw: {
      value: Object.freeze(a)
    }
  })))),
      p = function p(e) {
    return u.a.createElement(d, e);
  };
}]);