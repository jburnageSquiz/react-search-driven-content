"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const require$$1 = require("stream");
const require$$0 = require("util");
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$2 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q$2 = Symbol.for("react.strict_mode"), r$2 = Symbol.for("react.profiler"), t$2 = Symbol.for("react.provider"), u$2 = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w$2 = Symbol.for("react.suspense"), x$2 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$2 = Symbol.iterator;
function A$2(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = z$2 && a[z$2] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C = Object.assign, D$1 = {};
function E$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F$2() {
}
F$2.prototype = E$1.prototype;
function G$2(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
var H$2 = G$2.prototype = new F$2();
H$2.constructor = G$2;
C(H$2, E$1.prototype);
H$2.isPureReactComponent = true;
var I$2 = Array.isArray, J$2 = Object.prototype.hasOwnProperty, K$2 = { current: null }, L$2 = { key: true, ref: true, __self: true, __source: true };
function M$2(a, b, e) {
  var d, c = {}, k2 = null, h = null;
  if (null != b)
    for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
      J$2.call(b, d) && !L$2.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g)
    c.children = e;
  else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++)
      f[m] = arguments[m + 2];
    c.children = f;
  }
  if (a && a.defaultProps)
    for (d in g = a.defaultProps, g)
      void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$2, type: a, key: k2, ref: h, props: c, _owner: K$2.current };
}
function N$2(a, b) {
  return { $$typeof: l$2, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$2(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$2;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$2 = /\/+/g;
function Q$2(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R$2(a, b, e, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h = false;
  if (null === a)
    h = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$2:
          case n$1:
            h = true;
        }
    }
  if (h)
    return h = a, c = c(h), a = "" === d ? "." + Q$2(h, 0) : d, I$2(c) ? (e = "", null != a && (e = a.replace(P$2, "$&/") + "/"), R$2(c, b, e, "", function(a2) {
      return a2;
    })) : null != c && (O$2(c) && (c = N$2(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$2, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I$2(a))
    for (var g = 0; g < a.length; g++) {
      k2 = a[g];
      var f = d + Q$2(k2, g);
      h += R$2(k2, b, e, f, c);
    }
  else if (f = A$2(a), "function" === typeof f)
    for (a = f.call(a), g = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f = d + Q$2(k2, g++), h += R$2(k2, b, e, f, c);
  else if ("object" === k2)
    throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S$2(a, b, e) {
  if (null == a)
    return a;
  var d = [], c = 0;
  R$2(a, d, "", "", function(a2) {
    return b.call(e, a2, c++);
  });
  return d;
}
function T$2(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
var U$2 = { current: null }, V$2 = { transition: null }, W$2 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$2, ReactCurrentOwner: K$2 };
react_production_min.Children = { map: S$2, forEach: function(a, b, e) {
  S$2(a, function() {
    b.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b = 0;
  S$2(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S$2(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$2(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p;
react_production_min.Profiler = r$2;
react_production_min.PureComponent = G$2;
react_production_min.StrictMode = q$2;
react_production_min.Suspense = w$2;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
react_production_min.cloneElement = function(a, b, e) {
  if (null === a || void 0 === a)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h = K$2.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f in b)
      J$2.call(b, f) && !L$2.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (1 === f)
    d.children = e;
  else if (1 < f) {
    g = Array(f);
    for (var m = 0; m < f; m++)
      g[m] = arguments[m + 2];
    d.children = g;
  }
  return { $$typeof: l$2, type: a.type, key: c, ref: k2, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u$2, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t$2, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function(a) {
  var b = M$2.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$1, render: a };
};
react_production_min.isValidElement = O$2;
react_production_min.lazy = function(a) {
  return { $$typeof: y$1, _payload: { _status: -1, _result: a }, _init: T$2 };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x$2, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V$2.transition;
  V$2.transition = {};
  try {
    a();
  } finally {
    V$2.transition = b;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a, b) {
  return U$2.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U$2.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$2.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U$2.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U$2.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e) {
  return U$2.current.useImperativeHandle(a, b, e);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U$2.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U$2.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U$2.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e) {
  return U$2.current.useReducer(a, b, e);
};
react_production_min.useRef = function(a) {
  return U$2.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$2.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e) {
  return U$2.current.useSyncExternalStore(a, b, e);
};
react_production_min.useTransition = function() {
  return U$2.current.useTransition();
};
react_production_min.version = "18.2.0";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
var reactDomServerLegacy_node_production_min = {};
/**
 * @license React
 * react-dom-server-legacy.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ea$1 = reactExports, fa$1 = require$$1, n = Object.prototype.hasOwnProperty, ha$1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia$1 = {}, ja$1 = {};
function ka$1(a) {
  if (n.call(ja$1, a))
    return true;
  if (n.call(ia$1, a))
    return false;
  if (ha$1.test(a))
    return ja$1[a] = true;
  ia$1[a] = true;
  return false;
}
function q$1(a, b, c, d, f, e, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = f;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = e;
  this.removeEmptyString = g;
}
var r$1 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  r$1[a] = new q$1(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  r$1[b] = new q$1(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  r$1[a] = new q$1(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  r$1[a] = new q$1(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  r$1[a] = new q$1(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  r$1[a] = new q$1(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  r$1[a] = new q$1(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  r$1[a] = new q$1(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  r$1[a] = new q$1(a, 5, false, a.toLowerCase(), null, false, false);
});
var la$1 = /[\-:]([a-z])/g;
function ma$1(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    la$1,
    ma$1
  );
  r$1[b] = new q$1(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(la$1, ma$1);
  r$1[b] = new q$1(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(la$1, ma$1);
  r$1[b] = new q$1(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  r$1[a] = new q$1(a, 1, false, a.toLowerCase(), null, false, false);
});
r$1.xlinkHref = new q$1("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  r$1[a] = new q$1(a, 1, false, a.toLowerCase(), null, true, true);
});
var t$1 = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, na = ["Webkit", "ms", "Moz", "O"];
Object.keys(t$1).forEach(function(a) {
  na.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    t$1[b] = t$1[a];
  });
});
var oa = /["'&<>]/;
function u$1(a) {
  if ("boolean" === typeof a || "number" === typeof a)
    return "" + a;
  a = "" + a;
  var b = oa.exec(a);
  if (b) {
    var c = "", d, f = 0;
    for (d = b.index; d < a.length; d++) {
      switch (a.charCodeAt(d)) {
        case 34:
          b = "&quot;";
          break;
        case 38:
          b = "&amp;";
          break;
        case 39:
          b = "&#x27;";
          break;
        case 60:
          b = "&lt;";
          break;
        case 62:
          b = "&gt;";
          break;
        default:
          continue;
      }
      f !== d && (c += a.substring(f, d));
      f = d + 1;
      c += b;
    }
    a = f !== d ? c + a.substring(f, d) : c;
  }
  return a;
}
var pa$1 = /([A-Z])/g, qa$1 = /^ms-/, ra$1 = Array.isArray;
function v(a, b) {
  return { insertionMode: a, selectedValue: b };
}
function sa$1(a, b, c) {
  switch (b) {
    case "select":
      return v(1, null != c.value ? c.value : c.defaultValue);
    case "svg":
      return v(2, null);
    case "math":
      return v(3, null);
    case "foreignObject":
      return v(1, null);
    case "table":
      return v(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return v(5, null);
    case "colgroup":
      return v(7, null);
    case "tr":
      return v(6, null);
  }
  return 4 <= a.insertionMode || 0 === a.insertionMode ? v(1, null) : a;
}
var ta$1 = /* @__PURE__ */ new Map();
function ua$1(a, b, c) {
  if ("object" !== typeof c)
    throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
  b = true;
  for (var d in c)
    if (n.call(c, d)) {
      var f = c[d];
      if (null != f && "boolean" !== typeof f && "" !== f) {
        if (0 === d.indexOf("--")) {
          var e = u$1(d);
          f = u$1(("" + f).trim());
        } else {
          e = d;
          var g = ta$1.get(e);
          void 0 !== g ? e = g : (g = u$1(e.replace(pa$1, "-$1").toLowerCase().replace(qa$1, "-ms-")), ta$1.set(e, g), e = g);
          f = "number" === typeof f ? 0 === f || n.call(
            t$1,
            d
          ) ? "" + f : f + "px" : u$1(("" + f).trim());
        }
        b ? (b = false, a.push(' style="', e, ":", f)) : a.push(";", e, ":", f);
      }
    }
  b || a.push('"');
}
function w$1(a, b, c, d) {
  switch (c) {
    case "style":
      ua$1(a, b, d);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) {
    if (b = r$1.hasOwnProperty(c) ? r$1[c] : null, null !== b) {
      switch (typeof d) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!b.acceptsBooleans)
            return;
      }
      c = b.attributeName;
      switch (b.type) {
        case 3:
          d && a.push(" ", c, '=""');
          break;
        case 4:
          true === d ? a.push(" ", c, '=""') : false !== d && a.push(" ", c, '="', u$1(d), '"');
          break;
        case 5:
          isNaN(d) || a.push(" ", c, '="', u$1(d), '"');
          break;
        case 6:
          !isNaN(d) && 1 <= d && a.push(" ", c, '="', u$1(d), '"');
          break;
        default:
          b.sanitizeURL && (d = "" + d), a.push(" ", c, '="', u$1(d), '"');
      }
    } else if (ka$1(c)) {
      switch (typeof d) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b)
            return;
      }
      a.push(" ", c, '="', u$1(d), '"');
    }
  }
}
function x$1(a, b, c) {
  if (null != b) {
    if (null != c)
      throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
    if ("object" !== typeof b || !("__html" in b))
      throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
    b = b.__html;
    null !== b && void 0 !== b && a.push("" + b);
  }
}
function va$1(a) {
  var b = "";
  ea$1.Children.forEach(a, function(a2) {
    null != a2 && (b += a2);
  });
  return b;
}
function wa$1(a, b, c, d) {
  a.push(z$1(c));
  var f = c = null, e;
  for (e in b)
    if (n.call(b, e)) {
      var g = b[e];
      if (null != g)
        switch (e) {
          case "children":
            c = g;
            break;
          case "dangerouslySetInnerHTML":
            f = g;
            break;
          default:
            w$1(a, d, e, g);
        }
    }
  a.push(">");
  x$1(a, f, c);
  return "string" === typeof c ? (a.push(u$1(c)), null) : c;
}
var xa$1 = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ya$1 = /* @__PURE__ */ new Map();
function z$1(a) {
  var b = ya$1.get(a);
  if (void 0 === b) {
    if (!xa$1.test(a))
      throw Error("Invalid tag: " + a);
    b = "<" + a;
    ya$1.set(a, b);
  }
  return b;
}
function za$1(a, b, c, d, f) {
  switch (b) {
    case "select":
      a.push(z$1("select"));
      var e = null, g = null;
      for (l2 in c)
        if (n.call(c, l2)) {
          var h = c[l2];
          if (null != h)
            switch (l2) {
              case "children":
                e = h;
                break;
              case "dangerouslySetInnerHTML":
                g = h;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                w$1(a, d, l2, h);
            }
        }
      a.push(">");
      x$1(a, g, e);
      return e;
    case "option":
      g = f.selectedValue;
      a.push(z$1("option"));
      var k2 = h = null, m = null;
      var l2 = null;
      for (e in c)
        if (n.call(c, e)) {
          var p2 = c[e];
          if (null != p2)
            switch (e) {
              case "children":
                h = p2;
                break;
              case "selected":
                m = p2;
                break;
              case "dangerouslySetInnerHTML":
                l2 = p2;
                break;
              case "value":
                k2 = p2;
              default:
                w$1(a, d, e, p2);
            }
        }
      if (null != g)
        if (c = null !== k2 ? "" + k2 : va$1(h), ra$1(g))
          for (d = 0; d < g.length; d++) {
            if ("" + g[d] === c) {
              a.push(' selected=""');
              break;
            }
          }
        else
          "" + g === c && a.push(' selected=""');
      else
        m && a.push(' selected=""');
      a.push(">");
      x$1(a, l2, h);
      return h;
    case "textarea":
      a.push(z$1("textarea"));
      l2 = g = e = null;
      for (h in c)
        if (n.call(c, h) && (k2 = c[h], null != k2))
          switch (h) {
            case "children":
              l2 = k2;
              break;
            case "value":
              e = k2;
              break;
            case "defaultValue":
              g = k2;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              w$1(a, d, h, k2);
          }
      null === e && null !== g && (e = g);
      a.push(">");
      if (null != l2) {
        if (null != e)
          throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (ra$1(l2) && 1 < l2.length)
          throw Error("<textarea> can only have at most one child.");
        e = "" + l2;
      }
      "string" === typeof e && "\n" === e[0] && a.push("\n");
      null !== e && a.push(u$1("" + e));
      return null;
    case "input":
      a.push(z$1("input"));
      k2 = l2 = h = e = null;
      for (g in c)
        if (n.call(c, g) && (m = c[g], null != m))
          switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              k2 = m;
              break;
            case "defaultValue":
              h = m;
              break;
            case "checked":
              l2 = m;
              break;
            case "value":
              e = m;
              break;
            default:
              w$1(a, d, g, m);
          }
      null !== l2 ? w$1(a, d, "checked", l2) : null !== k2 && w$1(a, d, "checked", k2);
      null !== e ? w$1(a, d, "value", e) : null !== h && w$1(a, d, "value", h);
      a.push("/>");
      return null;
    case "menuitem":
      a.push(z$1("menuitem"));
      for (var B2 in c)
        if (n.call(c, B2) && (e = c[B2], null != e))
          switch (B2) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              w$1(
                a,
                d,
                B2,
                e
              );
          }
      a.push(">");
      return null;
    case "title":
      a.push(z$1("title"));
      e = null;
      for (p2 in c)
        if (n.call(c, p2) && (g = c[p2], null != g))
          switch (p2) {
            case "children":
              e = g;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              w$1(a, d, p2, g);
          }
      a.push(">");
      return e;
    case "listing":
    case "pre":
      a.push(z$1(b));
      g = e = null;
      for (k2 in c)
        if (n.call(c, k2) && (h = c[k2], null != h))
          switch (k2) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            default:
              w$1(a, d, k2, h);
          }
      a.push(">");
      if (null != g) {
        if (null != e)
          throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if ("object" !== typeof g || !("__html" in g))
          throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        c = g.__html;
        null !== c && void 0 !== c && ("string" === typeof c && 0 < c.length && "\n" === c[0] ? a.push("\n", c) : a.push("" + c));
      }
      "string" === typeof e && "\n" === e[0] && a.push("\n");
      return e;
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "img":
    case "keygen":
    case "link":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
      a.push(z$1(b));
      for (var C2 in c)
        if (n.call(c, C2) && (e = c[C2], null != e))
          switch (C2) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              w$1(a, d, C2, e);
          }
      a.push("/>");
      return null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return wa$1(a, c, b, d);
    case "html":
      return 0 === f.insertionMode && a.push("<!DOCTYPE html>"), wa$1(a, c, b, d);
    default:
      if (-1 === b.indexOf("-") && "string" !== typeof c.is)
        return wa$1(a, c, b, d);
      a.push(z$1(b));
      g = e = null;
      for (m in c)
        if (n.call(c, m) && (h = c[m], null != h))
          switch (m) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            case "style":
              ua$1(a, d, h);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ka$1(m) && "function" !== typeof h && "symbol" !== typeof h && a.push(" ", m, '="', u$1(h), '"');
          }
      a.push(">");
      x$1(a, g, e);
      return e;
  }
}
function Aa$1(a, b, c) {
  a.push('<!--$?--><template id="');
  if (null === c)
    throw Error("An ID must have been assigned before we can complete the boundary.");
  a.push(c);
  return a.push('"></template>');
}
function Ba$1(a, b, c, d) {
  switch (c.insertionMode) {
    case 0:
    case 1:
      return a.push('<div hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
    case 2:
      return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
    case 3:
      return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
    case 4:
      return a.push('<table hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
    case 5:
      return a.push('<table hidden><tbody id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
    case 6:
      return a.push('<table hidden><tr id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
    case 7:
      return a.push('<table hidden><colgroup id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
    default:
      throw Error("Unknown insertion mode. This is a bug in React.");
  }
}
function Ca$1(a, b) {
  switch (b.insertionMode) {
    case 0:
    case 1:
      return a.push("</div>");
    case 2:
      return a.push("</svg>");
    case 3:
      return a.push("</math>");
    case 4:
      return a.push("</table>");
    case 5:
      return a.push("</tbody></table>");
    case 6:
      return a.push("</tr></table>");
    case 7:
      return a.push("</colgroup></table>");
    default:
      throw Error("Unknown insertion mode. This is a bug in React.");
  }
}
var Da$1 = /[<\u2028\u2029]/g;
function Ea$1(a) {
  return JSON.stringify(a).replace(Da$1, function(a2) {
    switch (a2) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function Fa$1(a, b) {
  b = void 0 === b ? "" : b;
  return { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: b + "P:", segmentPrefix: b + "S:", boundaryPrefix: b + "B:", idPrefix: b, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false, generateStaticMarkup: a };
}
function Ga$1() {
  return { insertionMode: 1, selectedValue: null };
}
function Ha$1(a, b, c, d) {
  if (c.generateStaticMarkup)
    return a.push(u$1(b)), false;
  "" === b ? a = d : (d && a.push("<!-- -->"), a.push(u$1(b)), a = true);
  return a;
}
var A$1 = Object.assign, Ia$1 = Symbol.for("react.element"), Ja$1 = Symbol.for("react.portal"), Ka$1 = Symbol.for("react.fragment"), La$1 = Symbol.for("react.strict_mode"), Ma$1 = Symbol.for("react.profiler"), Na$1 = Symbol.for("react.provider"), Oa$1 = Symbol.for("react.context"), Pa$1 = Symbol.for("react.forward_ref"), Qa$1 = Symbol.for("react.suspense"), Ra$1 = Symbol.for("react.suspense_list"), Sa$1 = Symbol.for("react.memo"), Ta$1 = Symbol.for("react.lazy"), Ua$1 = Symbol.for("react.scope"), Va$1 = Symbol.for("react.debug_trace_mode"), Wa$1 = Symbol.for("react.legacy_hidden"), Xa$1 = Symbol.for("react.default_value"), Ya$1 = Symbol.iterator;
function Za$1(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case Ka$1:
      return "Fragment";
    case Ja$1:
      return "Portal";
    case Ma$1:
      return "Profiler";
    case La$1:
      return "StrictMode";
    case Qa$1:
      return "Suspense";
    case Ra$1:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Oa$1:
        return (a.displayName || "Context") + ".Consumer";
      case Na$1:
        return (a._context.displayName || "Context") + ".Provider";
      case Pa$1:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Sa$1:
        return b = a.displayName || null, null !== b ? b : Za$1(a.type) || "Memo";
      case Ta$1:
        b = a._payload;
        a = a._init;
        try {
          return Za$1(a(b));
        } catch (c) {
        }
    }
  return null;
}
var $a$1 = {};
function ab$1(a, b) {
  a = a.contextTypes;
  if (!a)
    return $a$1;
  var c = {}, d;
  for (d in a)
    c[d] = b[d];
  return c;
}
var D = null;
function E(a, b) {
  if (a !== b) {
    a.context._currentValue2 = a.parentValue;
    a = a.parent;
    var c = b.parent;
    if (null === a) {
      if (null !== c)
        throw Error("The stacks must reach the root at the same time. This is a bug in React.");
    } else {
      if (null === c)
        throw Error("The stacks must reach the root at the same time. This is a bug in React.");
      E(a, c);
    }
    b.context._currentValue2 = b.value;
  }
}
function bb$1(a) {
  a.context._currentValue2 = a.parentValue;
  a = a.parent;
  null !== a && bb$1(a);
}
function cb$1(a) {
  var b = a.parent;
  null !== b && cb$1(b);
  a.context._currentValue2 = a.value;
}
function db$1(a, b) {
  a.context._currentValue2 = a.parentValue;
  a = a.parent;
  if (null === a)
    throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
  a.depth === b.depth ? E(a, b) : db$1(a, b);
}
function eb$1(a, b) {
  var c = b.parent;
  if (null === c)
    throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
  a.depth === c.depth ? E(a, c) : eb$1(a, c);
  b.context._currentValue2 = b.value;
}
function F$1(a) {
  var b = D;
  b !== a && (null === b ? cb$1(a) : null === a ? bb$1(b) : b.depth === a.depth ? E(b, a) : b.depth > a.depth ? db$1(b, a) : eb$1(b, a), D = a);
}
var fb$1 = { isMounted: function() {
  return false;
}, enqueueSetState: function(a, b) {
  a = a._reactInternals;
  null !== a.queue && a.queue.push(b);
}, enqueueReplaceState: function(a, b) {
  a = a._reactInternals;
  a.replace = true;
  a.queue = [b];
}, enqueueForceUpdate: function() {
} };
function gb$1(a, b, c, d) {
  var f = void 0 !== a.state ? a.state : null;
  a.updater = fb$1;
  a.props = c;
  a.state = f;
  var e = { queue: [], replace: false };
  a._reactInternals = e;
  var g = b.contextType;
  a.context = "object" === typeof g && null !== g ? g._currentValue2 : d;
  g = b.getDerivedStateFromProps;
  "function" === typeof g && (g = g(c, f), f = null === g || void 0 === g ? f : A$1({}, f, g), a.state = f);
  if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount))
    if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && fb$1.enqueueReplaceState(a, a.state, null), null !== e.queue && 0 < e.queue.length)
      if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && 1 === b.length)
        a.state = b[0];
      else {
        e = g ? b[0] : a.state;
        f = true;
        for (g = g ? 1 : 0; g < b.length; g++) {
          var h = b[g];
          h = "function" === typeof h ? h.call(a, e, c, d) : h;
          null != h && (f ? (f = false, e = A$1({}, e, h)) : A$1(e, h));
        }
        a.state = e;
      }
    else
      e.queue = null;
}
var hb$1 = { id: 1, overflow: "" };
function ib$1(a, b, c) {
  var d = a.id;
  a = a.overflow;
  var f = 32 - G$1(d) - 1;
  d &= ~(1 << f);
  c += 1;
  var e = 32 - G$1(b) + f;
  if (30 < e) {
    var g = f - f % 5;
    e = (d & (1 << g) - 1).toString(32);
    d >>= g;
    f -= g;
    return { id: 1 << 32 - G$1(b) + f | c << f | d, overflow: e + a };
  }
  return { id: 1 << e | c << f | d, overflow: a };
}
var G$1 = Math.clz32 ? Math.clz32 : jb$1, kb$1 = Math.log, lb$1 = Math.LN2;
function jb$1(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (kb$1(a) / lb$1 | 0) | 0;
}
function mb$1(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var nb$1 = "function" === typeof Object.is ? Object.is : mb$1, H$1 = null, ob$1 = null, I$1 = null, J$1 = null, K$1 = false, L$1 = false, M$1 = 0, N$1 = null, O$1 = 0;
function P$1() {
  if (null === H$1)
    throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
  return H$1;
}
function rb$1() {
  if (0 < O$1)
    throw Error("Rendered more hooks than during the previous render");
  return { memoizedState: null, queue: null, next: null };
}
function sb$1() {
  null === J$1 ? null === I$1 ? (K$1 = false, I$1 = J$1 = rb$1()) : (K$1 = true, J$1 = I$1) : null === J$1.next ? (K$1 = false, J$1 = J$1.next = rb$1()) : (K$1 = true, J$1 = J$1.next);
  return J$1;
}
function tb$1() {
  ob$1 = H$1 = null;
  L$1 = false;
  I$1 = null;
  O$1 = 0;
  J$1 = N$1 = null;
}
function ub$1(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function vb$1(a, b, c) {
  H$1 = P$1();
  J$1 = sb$1();
  if (K$1) {
    var d = J$1.queue;
    b = d.dispatch;
    if (null !== N$1 && (c = N$1.get(d), void 0 !== c)) {
      N$1.delete(d);
      d = J$1.memoizedState;
      do
        d = a(d, c.action), c = c.next;
      while (null !== c);
      J$1.memoizedState = d;
      return [d, b];
    }
    return [J$1.memoizedState, b];
  }
  a = a === ub$1 ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
  J$1.memoizedState = a;
  a = J$1.queue = { last: null, dispatch: null };
  a = a.dispatch = wb$1.bind(null, H$1, a);
  return [J$1.memoizedState, a];
}
function xb$1(a, b) {
  H$1 = P$1();
  J$1 = sb$1();
  b = void 0 === b ? null : b;
  if (null !== J$1) {
    var c = J$1.memoizedState;
    if (null !== c && null !== b) {
      var d = c[1];
      a:
        if (null === d)
          d = false;
        else {
          for (var f = 0; f < d.length && f < b.length; f++)
            if (!nb$1(b[f], d[f])) {
              d = false;
              break a;
            }
          d = true;
        }
      if (d)
        return c[0];
    }
  }
  a = a();
  J$1.memoizedState = [a, b];
  return a;
}
function wb$1(a, b, c) {
  if (25 <= O$1)
    throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
  if (a === H$1)
    if (L$1 = true, a = { action: c, next: null }, null === N$1 && (N$1 = /* @__PURE__ */ new Map()), c = N$1.get(b), void 0 === c)
      N$1.set(b, a);
    else {
      for (b = c; null !== b.next; )
        b = b.next;
      b.next = a;
    }
}
function yb$1() {
  throw Error("startTransition cannot be called during server rendering.");
}
function Q$1() {
}
var zb$1 = { readContext: function(a) {
  return a._currentValue2;
}, useContext: function(a) {
  P$1();
  return a._currentValue2;
}, useMemo: xb$1, useReducer: vb$1, useRef: function(a) {
  H$1 = P$1();
  J$1 = sb$1();
  var b = J$1.memoizedState;
  return null === b ? (a = { current: a }, J$1.memoizedState = a) : b;
}, useState: function(a) {
  return vb$1(ub$1, a);
}, useInsertionEffect: Q$1, useLayoutEffect: function() {
}, useCallback: function(a, b) {
  return xb$1(function() {
    return a;
  }, b);
}, useImperativeHandle: Q$1, useEffect: Q$1, useDebugValue: Q$1, useDeferredValue: function(a) {
  P$1();
  return a;
}, useTransition: function() {
  P$1();
  return [false, yb$1];
}, useId: function() {
  var a = ob$1.treeContext;
  var b = a.overflow;
  a = a.id;
  a = (a & ~(1 << 32 - G$1(a) - 1)).toString(32) + b;
  var c = R$1;
  if (null === c)
    throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
  b = M$1++;
  a = ":" + c.idPrefix + "R" + a;
  0 < b && (a += "H" + b.toString(32));
  return a + ":";
}, useMutableSource: function(a, b) {
  P$1();
  return b(a._source);
}, useSyncExternalStore: function(a, b, c) {
  if (void 0 === c)
    throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
  return c();
} }, R$1 = null, Ab$1 = ea$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function Bb$1(a) {
  console.error(a);
  return null;
}
function S$1() {
}
function Cb$1(a, b, c, d, f, e, g, h, k2) {
  var m = [], l2 = /* @__PURE__ */ new Set();
  b = { destination: null, responseState: b, progressiveChunkSize: void 0 === d ? 12800 : d, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: l2, pingedTasks: m, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: void 0 === f ? Bb$1 : f, onAllReady: void 0 === e ? S$1 : e, onShellReady: void 0 === g ? S$1 : g, onShellError: void 0 === h ? S$1 : h, onFatalError: void 0 === k2 ? S$1 : k2 };
  c = T$1(b, 0, null, c, false, false);
  c.parentFlushed = true;
  a = Db$1(b, a, null, c, l2, $a$1, null, hb$1);
  m.push(a);
  return b;
}
function Db$1(a, b, c, d, f, e, g, h) {
  a.allPendingTasks++;
  null === c ? a.pendingRootTasks++ : c.pendingTasks++;
  var k2 = { node: b, ping: function() {
    var b2 = a.pingedTasks;
    b2.push(k2);
    1 === b2.length && Eb(a);
  }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
  f.add(k2);
  return k2;
}
function T$1(a, b, c, d, f, e) {
  return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c, lastPushedText: f, textEmbedded: e };
}
function U$1(a, b) {
  a = a.onError(b);
  if (null != a && "string" !== typeof a)
    throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
  return a;
}
function V$1(a, b) {
  var c = a.onShellError;
  c(b);
  c = a.onFatalError;
  c(b);
  null !== a.destination ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
}
function Fb$1(a, b, c, d, f) {
  H$1 = {};
  ob$1 = b;
  M$1 = 0;
  for (a = c(d, f); L$1; )
    L$1 = false, M$1 = 0, O$1 += 1, J$1 = null, a = c(d, f);
  tb$1();
  return a;
}
function Gb$1(a, b, c, d) {
  var f = c.render(), e = d.childContextTypes;
  if (null !== e && void 0 !== e) {
    var g = b.legacyContext;
    if ("function" !== typeof c.getChildContext)
      d = g;
    else {
      c = c.getChildContext();
      for (var h in c)
        if (!(h in e))
          throw Error((Za$1(d) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
      d = A$1({}, g, c);
    }
    b.legacyContext = d;
    W$1(a, b, f);
    b.legacyContext = g;
  } else
    W$1(a, b, f);
}
function Hb$1(a, b) {
  if (a && a.defaultProps) {
    b = A$1({}, b);
    a = a.defaultProps;
    for (var c in a)
      void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
function Ib$1(a, b, c, d, f) {
  if ("function" === typeof c)
    if (c.prototype && c.prototype.isReactComponent) {
      f = ab$1(c, b.legacyContext);
      var e = c.contextType;
      e = new c(d, "object" === typeof e && null !== e ? e._currentValue2 : f);
      gb$1(e, c, d, f);
      Gb$1(a, b, e, c);
    } else {
      e = ab$1(c, b.legacyContext);
      f = Fb$1(a, b, c, d, e);
      var g = 0 !== M$1;
      if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof)
        gb$1(f, c, d, e), Gb$1(a, b, f, c);
      else if (g) {
        d = b.treeContext;
        b.treeContext = ib$1(d, 1, 0);
        try {
          W$1(a, b, f);
        } finally {
          b.treeContext = d;
        }
      } else
        W$1(a, b, f);
    }
  else if ("string" === typeof c) {
    f = b.blockedSegment;
    e = za$1(f.chunks, c, d, a.responseState, f.formatContext);
    f.lastPushedText = false;
    g = f.formatContext;
    f.formatContext = sa$1(g, c, d);
    Jb$1(a, b, e);
    f.formatContext = g;
    switch (c) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        f.chunks.push("</", c, ">");
    }
    f.lastPushedText = false;
  } else {
    switch (c) {
      case Wa$1:
      case Va$1:
      case La$1:
      case Ma$1:
      case Ka$1:
        W$1(a, b, d.children);
        return;
      case Ra$1:
        W$1(a, b, d.children);
        return;
      case Ua$1:
        throw Error("ReactDOMServer does not yet support scope components.");
      case Qa$1:
        a: {
          c = b.blockedBoundary;
          f = b.blockedSegment;
          e = d.fallback;
          d = d.children;
          g = /* @__PURE__ */ new Set();
          var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, k2 = T$1(a, f.chunks.length, h, f.formatContext, false, false);
          f.children.push(k2);
          f.lastPushedText = false;
          var m = T$1(a, 0, null, f.formatContext, false, false);
          m.parentFlushed = true;
          b.blockedBoundary = h;
          b.blockedSegment = m;
          try {
            if (Jb$1(a, b, d), a.responseState.generateStaticMarkup || m.lastPushedText && m.textEmbedded && m.chunks.push("<!-- -->"), m.status = 1, X$1(h, m), 0 === h.pendingTasks)
              break a;
          } catch (l2) {
            m.status = 4, h.forceClientRender = true, h.errorDigest = U$1(a, l2);
          } finally {
            b.blockedBoundary = c, b.blockedSegment = f;
          }
          b = Db$1(a, e, c, k2, g, b.legacyContext, b.context, b.treeContext);
          a.pingedTasks.push(b);
        }
        return;
    }
    if ("object" === typeof c && null !== c)
      switch (c.$$typeof) {
        case Pa$1:
          d = Fb$1(a, b, c.render, d, f);
          if (0 !== M$1) {
            c = b.treeContext;
            b.treeContext = ib$1(c, 1, 0);
            try {
              W$1(a, b, d);
            } finally {
              b.treeContext = c;
            }
          } else
            W$1(a, b, d);
          return;
        case Sa$1:
          c = c.type;
          d = Hb$1(c, d);
          Ib$1(a, b, c, d, f);
          return;
        case Na$1:
          f = d.children;
          c = c._context;
          d = d.value;
          e = c._currentValue2;
          c._currentValue2 = d;
          g = D;
          D = d = { parent: g, depth: null === g ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
          b.context = d;
          W$1(a, b, f);
          a = D;
          if (null === a)
            throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
          d = a.parentValue;
          a.context._currentValue2 = d === Xa$1 ? a.context._defaultValue : d;
          a = D = a.parent;
          b.context = a;
          return;
        case Oa$1:
          d = d.children;
          d = d(c._currentValue2);
          W$1(a, b, d);
          return;
        case Ta$1:
          f = c._init;
          c = f(c._payload);
          d = Hb$1(c, d);
          Ib$1(a, b, c, d, void 0);
          return;
      }
    throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == c ? c : typeof c) + "."));
  }
}
function W$1(a, b, c) {
  b.node = c;
  if ("object" === typeof c && null !== c) {
    switch (c.$$typeof) {
      case Ia$1:
        Ib$1(a, b, c.type, c.props, c.ref);
        return;
      case Ja$1:
        throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
      case Ta$1:
        var d = c._init;
        c = d(c._payload);
        W$1(a, b, c);
        return;
    }
    if (ra$1(c)) {
      Kb$1(a, b, c);
      return;
    }
    null === c || "object" !== typeof c ? d = null : (d = Ya$1 && c[Ya$1] || c["@@iterator"], d = "function" === typeof d ? d : null);
    if (d && (d = d.call(c))) {
      c = d.next();
      if (!c.done) {
        var f = [];
        do
          f.push(c.value), c = d.next();
        while (!c.done);
        Kb$1(a, b, f);
      }
      return;
    }
    a = Object.prototype.toString.call(c);
    throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(c).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
  }
  "string" === typeof c ? (d = b.blockedSegment, d.lastPushedText = Ha$1(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : "number" === typeof c && (d = b.blockedSegment, d.lastPushedText = Ha$1(
    b.blockedSegment.chunks,
    "" + c,
    a.responseState,
    d.lastPushedText
  ));
}
function Kb$1(a, b, c) {
  for (var d = c.length, f = 0; f < d; f++) {
    var e = b.treeContext;
    b.treeContext = ib$1(e, d, f);
    try {
      Jb$1(a, b, c[f]);
    } finally {
      b.treeContext = e;
    }
  }
}
function Jb$1(a, b, c) {
  var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
  try {
    return W$1(a, b, c);
  } catch (k2) {
    if (tb$1(), "object" === typeof k2 && null !== k2 && "function" === typeof k2.then) {
      c = k2;
      var g = b.blockedSegment, h = T$1(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
      g.children.push(h);
      g.lastPushedText = false;
      a = Db$1(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
      c.then(a, a);
      b.blockedSegment.formatContext = d;
      b.legacyContext = f;
      b.context = e;
      F$1(e);
    } else
      throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, F$1(e), k2;
  }
}
function Lb$1(a) {
  var b = a.blockedBoundary;
  a = a.blockedSegment;
  a.status = 3;
  Mb$1(this, b, a);
}
function Nb$1(a, b, c) {
  var d = a.blockedBoundary;
  a.blockedSegment.status = 3;
  null === d ? (b.allPendingTasks--, 2 !== b.status && (b.status = 2, null !== b.destination && b.destination.push(null))) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, d.errorDigest = b.onError(void 0 === c ? Error("The render was aborted by the server without a reason.") : c), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
    return Nb$1(a2, b, c);
  }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (a = b.onAllReady, a()));
}
function X$1(a, b) {
  if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
    var c = b.children[0];
    c.id = b.id;
    c.parentFlushed = true;
    1 === c.status && X$1(a, c);
  } else
    a.completedSegments.push(b);
}
function Mb$1(a, b, c) {
  if (null === b) {
    if (c.parentFlushed) {
      if (null !== a.completedRootSegment)
        throw Error("There can only be one root segment. This is a bug in React.");
      a.completedRootSegment = c;
    }
    a.pendingRootTasks--;
    0 === a.pendingRootTasks && (a.onShellError = S$1, b = a.onShellReady, b());
  } else
    b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && X$1(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(Lb$1, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (X$1(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
  a.allPendingTasks--;
  0 === a.allPendingTasks && (a = a.onAllReady, a());
}
function Eb(a) {
  if (2 !== a.status) {
    var b = D, c = Ab$1.current;
    Ab$1.current = zb$1;
    var d = R$1;
    R$1 = a.responseState;
    try {
      var f = a.pingedTasks, e;
      for (e = 0; e < f.length; e++) {
        var g = f[e];
        var h = a, k2 = g.blockedSegment;
        if (0 === k2.status) {
          F$1(g.context);
          try {
            W$1(h, g, g.node), h.responseState.generateStaticMarkup || k2.lastPushedText && k2.textEmbedded && k2.chunks.push("<!-- -->"), g.abortSet.delete(g), k2.status = 1, Mb$1(h, g.blockedBoundary, k2);
          } catch (y2) {
            if (tb$1(), "object" === typeof y2 && null !== y2 && "function" === typeof y2.then) {
              var m = g.ping;
              y2.then(m, m);
            } else {
              g.abortSet.delete(g);
              k2.status = 4;
              var l2 = g.blockedBoundary, p2 = y2, B2 = U$1(h, p2);
              null === l2 ? V$1(h, p2) : (l2.pendingTasks--, l2.forceClientRender || (l2.forceClientRender = true, l2.errorDigest = B2, l2.parentFlushed && h.clientRenderedBoundaries.push(l2)));
              h.allPendingTasks--;
              if (0 === h.allPendingTasks) {
                var C2 = h.onAllReady;
                C2();
              }
            }
          } finally {
          }
        }
      }
      f.splice(0, e);
      null !== a.destination && Ob$1(a, a.destination);
    } catch (y2) {
      U$1(a, y2), V$1(a, y2);
    } finally {
      R$1 = d, Ab$1.current = c, c === zb$1 && F$1(b);
    }
  }
}
function Y$1(a, b, c) {
  c.parentFlushed = true;
  switch (c.status) {
    case 0:
      var d = c.id = a.nextSegmentId++;
      c.lastPushedText = false;
      c.textEmbedded = false;
      a = a.responseState;
      b.push('<template id="');
      b.push(a.placeholderPrefix);
      a = d.toString(16);
      b.push(a);
      return b.push('"></template>');
    case 1:
      c.status = 2;
      var f = true;
      d = c.chunks;
      var e = 0;
      c = c.children;
      for (var g = 0; g < c.length; g++) {
        for (f = c[g]; e < f.index; e++)
          b.push(d[e]);
        f = Z$1(a, b, f);
      }
      for (; e < d.length - 1; e++)
        b.push(d[e]);
      e < d.length && (f = b.push(d[e]));
      return f;
    default:
      throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
  }
}
function Z$1(a, b, c) {
  var d = c.boundary;
  if (null === d)
    return Y$1(a, b, c);
  d.parentFlushed = true;
  if (d.forceClientRender)
    return a.responseState.generateStaticMarkup || (d = d.errorDigest, b.push("<!--$!-->"), b.push("<template"), d && (b.push(' data-dgst="'), d = u$1(d), b.push(d), b.push('"')), b.push("></template>")), Y$1(a, b, c), a = a.responseState.generateStaticMarkup ? true : b.push("<!--/$-->"), a;
  if (0 < d.pendingTasks) {
    d.rootSegmentID = a.nextSegmentId++;
    0 < d.completedSegments.length && a.partialBoundaries.push(d);
    var f = a.responseState;
    var e = f.nextSuspenseID++;
    f = f.boundaryPrefix + e.toString(16);
    d = d.id = f;
    Aa$1(b, a.responseState, d);
    Y$1(a, b, c);
    return b.push("<!--/$-->");
  }
  if (d.byteSize > a.progressiveChunkSize)
    return d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), Aa$1(b, a.responseState, d.id), Y$1(a, b, c), b.push("<!--/$-->");
  a.responseState.generateStaticMarkup || b.push("<!--$-->");
  c = d.completedSegments;
  if (1 !== c.length)
    throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
  Z$1(a, b, c[0]);
  a = a.responseState.generateStaticMarkup ? true : b.push("<!--/$-->");
  return a;
}
function Pb$1(a, b, c) {
  Ba$1(b, a.responseState, c.formatContext, c.id);
  Z$1(a, b, c);
  return Ca$1(b, c.formatContext);
}
function Qb$1(a, b, c) {
  for (var d = c.completedSegments, f = 0; f < d.length; f++)
    Rb$1(a, b, c, d[f]);
  d.length = 0;
  a = a.responseState;
  d = c.id;
  c = c.rootSegmentID;
  b.push(a.startInlineScript);
  a.sentCompleteBoundaryFunction ? b.push('$RC("') : (a.sentCompleteBoundaryFunction = true, b.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));
  if (null === d)
    throw Error("An ID must have been assigned before we can complete the boundary.");
  c = c.toString(16);
  b.push(d);
  b.push('","');
  b.push(a.segmentPrefix);
  b.push(c);
  return b.push('")<\/script>');
}
function Rb$1(a, b, c, d) {
  if (2 === d.status)
    return true;
  var f = d.id;
  if (-1 === f) {
    if (-1 === (d.id = c.rootSegmentID))
      throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
    return Pb$1(a, b, d);
  }
  Pb$1(a, b, d);
  a = a.responseState;
  b.push(a.startInlineScript);
  a.sentCompleteSegmentFunction ? b.push('$RS("') : (a.sentCompleteSegmentFunction = true, b.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));
  b.push(a.segmentPrefix);
  f = f.toString(16);
  b.push(f);
  b.push('","');
  b.push(a.placeholderPrefix);
  b.push(f);
  return b.push('")<\/script>');
}
function Ob$1(a, b) {
  try {
    var c = a.completedRootSegment;
    if (null !== c && 0 === a.pendingRootTasks) {
      Z$1(a, b, c);
      a.completedRootSegment = null;
      var d = a.responseState.bootstrapChunks;
      for (c = 0; c < d.length - 1; c++)
        b.push(d[c]);
      c < d.length && b.push(d[c]);
    }
    var f = a.clientRenderedBoundaries, e;
    for (e = 0; e < f.length; e++) {
      var g = f[e];
      d = b;
      var h = a.responseState, k2 = g.id, m = g.errorDigest, l2 = g.errorMessage, p2 = g.errorComponentStack;
      d.push(h.startInlineScript);
      h.sentClientRenderFunction ? d.push('$RX("') : (h.sentClientRenderFunction = true, d.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'));
      if (null === k2)
        throw Error("An ID must have been assigned before we can complete the boundary.");
      d.push(k2);
      d.push('"');
      if (m || l2 || p2) {
        d.push(",");
        var B2 = Ea$1(m || "");
        d.push(B2);
      }
      if (l2 || p2) {
        d.push(",");
        var C2 = Ea$1(l2 || "");
        d.push(C2);
      }
      if (p2) {
        d.push(",");
        var y2 = Ea$1(p2);
        d.push(y2);
      }
      if (!d.push(")<\/script>")) {
        a.destination = null;
        e++;
        f.splice(0, e);
        return;
      }
    }
    f.splice(0, e);
    var aa2 = a.completedBoundaries;
    for (e = 0; e < aa2.length; e++)
      if (!Qb$1(a, b, aa2[e])) {
        a.destination = null;
        e++;
        aa2.splice(0, e);
        return;
      }
    aa2.splice(0, e);
    var ba2 = a.partialBoundaries;
    for (e = 0; e < ba2.length; e++) {
      var pb2 = ba2[e];
      a: {
        f = a;
        g = b;
        var ca2 = pb2.completedSegments;
        for (h = 0; h < ca2.length; h++)
          if (!Rb$1(f, g, pb2, ca2[h])) {
            h++;
            ca2.splice(0, h);
            var qb2 = false;
            break a;
          }
        ca2.splice(0, h);
        qb2 = true;
      }
      if (!qb2) {
        a.destination = null;
        e++;
        ba2.splice(0, e);
        return;
      }
    }
    ba2.splice(0, e);
    var da2 = a.completedBoundaries;
    for (e = 0; e < da2.length; e++)
      if (!Qb$1(a, b, da2[e])) {
        a.destination = null;
        e++;
        da2.splice(0, e);
        return;
      }
    da2.splice(0, e);
  } finally {
    0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b.push(null);
  }
}
function Sb$1(a, b) {
  if (1 === a.status)
    a.status = 2, b.destroy(a.fatalError);
  else if (2 !== a.status && null === a.destination) {
    a.destination = b;
    try {
      Ob$1(a, b);
    } catch (c) {
      U$1(a, c), V$1(a, c);
    }
  }
}
function Tb$1(a, b) {
  try {
    var c = a.abortableTasks;
    c.forEach(function(c2) {
      return Nb$1(c2, a, b);
    });
    c.clear();
    null !== a.destination && Ob$1(a, a.destination);
  } catch (d) {
    U$1(a, d), V$1(a, d);
  }
}
function Ub$1() {
}
function Vb$1(a, b, c, d) {
  var f = false, e = null, g = "", h = false;
  a = Cb$1(a, Fa$1(c, b ? b.identifierPrefix : void 0), Ga$1(), Infinity, Ub$1, void 0, function() {
    h = true;
  }, void 0, void 0);
  Eb(a);
  Tb$1(a, d);
  Sb$1(a, { push: function(a2) {
    null !== a2 && (g += a2);
    return true;
  }, destroy: function(a2) {
    f = true;
    e = a2;
  } });
  if (f)
    throw e;
  if (!h)
    throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
  return g;
}
function Wb$1(a, b) {
  a.prototype = Object.create(b.prototype);
  a.prototype.constructor = a;
  a.__proto__ = b;
}
var Xb$1 = function(a) {
  function b() {
    var b2 = a.call(this, {}) || this;
    b2.request = null;
    b2.startedFlowing = false;
    return b2;
  }
  Wb$1(b, a);
  var c = b.prototype;
  c._destroy = function(a2, b2) {
    Tb$1(this.request);
    b2(a2);
  };
  c._read = function() {
    this.startedFlowing && Sb$1(this.request, this);
  };
  return b;
}(fa$1.Readable);
function Yb$1() {
}
function Zb$1(a, b) {
  var c = new Xb$1(), d = Cb$1(a, Fa$1(false, b ? b.identifierPrefix : void 0), Ga$1(), Infinity, Yb$1, function() {
    c.startedFlowing = true;
    Sb$1(d, c);
  }, void 0, void 0);
  c.request = d;
  Eb(d);
  return c;
}
reactDomServerLegacy_node_production_min.renderToNodeStream = function(a, b) {
  return Zb$1(a, b);
};
reactDomServerLegacy_node_production_min.renderToStaticMarkup = function(a, b) {
  return Vb$1(a, b, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
};
reactDomServerLegacy_node_production_min.renderToStaticNodeStream = function(a, b) {
  return Zb$1(a, b);
};
reactDomServerLegacy_node_production_min.renderToString = function(a, b) {
  return Vb$1(a, b, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
};
reactDomServerLegacy_node_production_min.version = "18.2.0";
var reactDomServer_node_production_min = {};
/**
 * @license React
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = require$$0, ba = reactExports, k = null, l$1 = 0, q = true;
function r(a, b) {
  if ("string" === typeof b) {
    if (0 !== b.length)
      if (2048 < 3 * b.length)
        0 < l$1 && (t(a, k.subarray(0, l$1)), k = new Uint8Array(2048), l$1 = 0), t(a, u.encode(b));
      else {
        var c = k;
        0 < l$1 && (c = k.subarray(l$1));
        c = u.encodeInto(b, c);
        var d = c.read;
        l$1 += c.written;
        d < b.length && (t(a, k), k = new Uint8Array(2048), l$1 = u.encodeInto(b.slice(d), k).written);
        2048 === l$1 && (t(a, k), k = new Uint8Array(2048), l$1 = 0);
      }
  } else
    0 !== b.byteLength && (2048 < b.byteLength ? (0 < l$1 && (t(a, k.subarray(0, l$1)), k = new Uint8Array(2048), l$1 = 0), t(a, b)) : (c = k.length - l$1, c < b.byteLength && (0 === c ? t(
      a,
      k
    ) : (k.set(b.subarray(0, c), l$1), l$1 += c, t(a, k), b = b.subarray(c)), k = new Uint8Array(2048), l$1 = 0), k.set(b, l$1), l$1 += b.byteLength, 2048 === l$1 && (t(a, k), k = new Uint8Array(2048), l$1 = 0)));
}
function t(a, b) {
  a = a.write(b);
  q = q && a;
}
function w(a, b) {
  r(a, b);
  return q;
}
function ca(a) {
  k && 0 < l$1 && a.write(k.subarray(0, l$1));
  k = null;
  l$1 = 0;
  q = true;
}
var u = new aa.TextEncoder();
function x(a) {
  return u.encode(a);
}
var y = Object.prototype.hasOwnProperty, da = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ea = {}, fa = {};
function ha(a) {
  if (y.call(fa, a))
    return true;
  if (y.call(ea, a))
    return false;
  if (da.test(a))
    return fa[a] = true;
  ea[a] = true;
  return false;
}
function z(a, b, c, d, f, e, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = f;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = e;
  this.removeEmptyString = g;
}
var A = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  A[a] = new z(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  A[b] = new z(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  A[a] = new z(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  A[a] = new z(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  A[a] = new z(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  A[a] = new z(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  A[a] = new z(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  A[a] = new z(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  A[a] = new z(a, 5, false, a.toLowerCase(), null, false, false);
});
var ia = /[\-:]([a-z])/g;
function ja(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    ia,
    ja
  );
  A[b] = new z(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ia, ja);
  A[b] = new z(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ia, ja);
  A[b] = new z(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  A[a] = new z(a, 1, false, a.toLowerCase(), null, false, false);
});
A.xlinkHref = new z("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  A[a] = new z(a, 1, false, a.toLowerCase(), null, true, true);
});
var B = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, ka = ["Webkit", "ms", "Moz", "O"];
Object.keys(B).forEach(function(a) {
  ka.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    B[b] = B[a];
  });
});
var la = /["'&<>]/;
function F(a) {
  if ("boolean" === typeof a || "number" === typeof a)
    return "" + a;
  a = "" + a;
  var b = la.exec(a);
  if (b) {
    var c = "", d, f = 0;
    for (d = b.index; d < a.length; d++) {
      switch (a.charCodeAt(d)) {
        case 34:
          b = "&quot;";
          break;
        case 38:
          b = "&amp;";
          break;
        case 39:
          b = "&#x27;";
          break;
        case 60:
          b = "&lt;";
          break;
        case 62:
          b = "&gt;";
          break;
        default:
          continue;
      }
      f !== d && (c += a.substring(f, d));
      f = d + 1;
      c += b;
    }
    a = f !== d ? c + a.substring(f, d) : c;
  }
  return a;
}
var ma = /([A-Z])/g, pa = /^ms-/, qa = Array.isArray, ra = x("<script>"), sa = x("<\/script>"), ta = x('<script src="'), ua = x('<script type="module" src="'), va = x('" async=""><\/script>'), wa = /(<\/|<)(s)(cript)/gi;
function xa(a, b, c, d) {
  return "" + b + ("s" === c ? "\\u0073" : "\\u0053") + d;
}
function G(a, b) {
  return { insertionMode: a, selectedValue: b };
}
function ya(a, b, c) {
  switch (b) {
    case "select":
      return G(1, null != c.value ? c.value : c.defaultValue);
    case "svg":
      return G(2, null);
    case "math":
      return G(3, null);
    case "foreignObject":
      return G(1, null);
    case "table":
      return G(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return G(5, null);
    case "colgroup":
      return G(7, null);
    case "tr":
      return G(6, null);
  }
  return 4 <= a.insertionMode || 0 === a.insertionMode ? G(1, null) : a;
}
var za = x("<!-- -->");
function Aa(a, b, c, d) {
  if ("" === b)
    return d;
  d && a.push(za);
  a.push(F(b));
  return true;
}
var Ba = /* @__PURE__ */ new Map(), Ca = x(' style="'), Da = x(":"), Ea = x(";");
function Fa(a, b, c) {
  if ("object" !== typeof c)
    throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
  b = true;
  for (var d in c)
    if (y.call(c, d)) {
      var f = c[d];
      if (null != f && "boolean" !== typeof f && "" !== f) {
        if (0 === d.indexOf("--")) {
          var e = F(d);
          f = F(("" + f).trim());
        } else {
          e = d;
          var g = Ba.get(e);
          void 0 !== g ? e = g : (g = x(F(e.replace(ma, "-$1").toLowerCase().replace(pa, "-ms-"))), Ba.set(e, g), e = g);
          f = "number" === typeof f ? 0 === f || y.call(
            B,
            d
          ) ? "" + f : f + "px" : F(("" + f).trim());
        }
        b ? (b = false, a.push(Ca, e, Da, f)) : a.push(Ea, e, Da, f);
      }
    }
  b || a.push(H);
}
var I = x(" "), J = x('="'), H = x('"'), Ga = x('=""');
function K(a, b, c, d) {
  switch (c) {
    case "style":
      Fa(a, b, d);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) {
    if (b = A.hasOwnProperty(c) ? A[c] : null, null !== b) {
      switch (typeof d) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!b.acceptsBooleans)
            return;
      }
      c = b.attributeName;
      switch (b.type) {
        case 3:
          d && a.push(I, c, Ga);
          break;
        case 4:
          true === d ? a.push(I, c, Ga) : false !== d && a.push(I, c, J, F(d), H);
          break;
        case 5:
          isNaN(d) || a.push(I, c, J, F(d), H);
          break;
        case 6:
          !isNaN(d) && 1 <= d && a.push(I, c, J, F(d), H);
          break;
        default:
          b.sanitizeURL && (d = "" + d), a.push(I, c, J, F(d), H);
      }
    } else if (ha(c)) {
      switch (typeof d) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b)
            return;
      }
      a.push(I, c, J, F(d), H);
    }
  }
}
var L = x(">"), Ha = x("/>");
function M(a, b, c) {
  if (null != b) {
    if (null != c)
      throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
    if ("object" !== typeof b || !("__html" in b))
      throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
    b = b.__html;
    null !== b && void 0 !== b && a.push("" + b);
  }
}
function Ia(a) {
  var b = "";
  ba.Children.forEach(a, function(a2) {
    null != a2 && (b += a2);
  });
  return b;
}
var Ja = x(' selected=""');
function Ka(a, b, c, d) {
  a.push(N(c));
  var f = c = null, e;
  for (e in b)
    if (y.call(b, e)) {
      var g = b[e];
      if (null != g)
        switch (e) {
          case "children":
            c = g;
            break;
          case "dangerouslySetInnerHTML":
            f = g;
            break;
          default:
            K(a, d, e, g);
        }
    }
  a.push(L);
  M(a, f, c);
  return "string" === typeof c ? (a.push(F(c)), null) : c;
}
var La = x("\n"), Ma = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Na = /* @__PURE__ */ new Map();
function N(a) {
  var b = Na.get(a);
  if (void 0 === b) {
    if (!Ma.test(a))
      throw Error("Invalid tag: " + a);
    b = x("<" + a);
    Na.set(a, b);
  }
  return b;
}
var Oa = x("<!DOCTYPE html>");
function Pa(a, b, c, d, f) {
  switch (b) {
    case "select":
      a.push(N("select"));
      var e = null, g = null;
      for (p2 in c)
        if (y.call(c, p2)) {
          var h = c[p2];
          if (null != h)
            switch (p2) {
              case "children":
                e = h;
                break;
              case "dangerouslySetInnerHTML":
                g = h;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                K(a, d, p2, h);
            }
        }
      a.push(L);
      M(a, g, e);
      return e;
    case "option":
      g = f.selectedValue;
      a.push(N("option"));
      var m = h = null, n2 = null;
      var p2 = null;
      for (e in c)
        if (y.call(c, e)) {
          var v2 = c[e];
          if (null != v2)
            switch (e) {
              case "children":
                h = v2;
                break;
              case "selected":
                n2 = v2;
                break;
              case "dangerouslySetInnerHTML":
                p2 = v2;
                break;
              case "value":
                m = v2;
              default:
                K(a, d, e, v2);
            }
        }
      if (null != g)
        if (c = null !== m ? "" + m : Ia(h), qa(g))
          for (d = 0; d < g.length; d++) {
            if ("" + g[d] === c) {
              a.push(Ja);
              break;
            }
          }
        else
          "" + g === c && a.push(Ja);
      else
        n2 && a.push(Ja);
      a.push(L);
      M(a, p2, h);
      return h;
    case "textarea":
      a.push(N("textarea"));
      p2 = g = e = null;
      for (h in c)
        if (y.call(c, h) && (m = c[h], null != m))
          switch (h) {
            case "children":
              p2 = m;
              break;
            case "value":
              e = m;
              break;
            case "defaultValue":
              g = m;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              K(a, d, h, m);
          }
      null === e && null !== g && (e = g);
      a.push(L);
      if (null != p2) {
        if (null != e)
          throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (qa(p2) && 1 < p2.length)
          throw Error("<textarea> can only have at most one child.");
        e = "" + p2;
      }
      "string" === typeof e && "\n" === e[0] && a.push(La);
      null !== e && a.push(F("" + e));
      return null;
    case "input":
      a.push(N("input"));
      m = p2 = h = e = null;
      for (g in c)
        if (y.call(c, g) && (n2 = c[g], null != n2))
          switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              m = n2;
              break;
            case "defaultValue":
              h = n2;
              break;
            case "checked":
              p2 = n2;
              break;
            case "value":
              e = n2;
              break;
            default:
              K(a, d, g, n2);
          }
      null !== p2 ? K(a, d, "checked", p2) : null !== m && K(a, d, "checked", m);
      null !== e ? K(a, d, "value", e) : null !== h && K(a, d, "value", h);
      a.push(Ha);
      return null;
    case "menuitem":
      a.push(N("menuitem"));
      for (var C2 in c)
        if (y.call(c, C2) && (e = c[C2], null != e))
          switch (C2) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              K(a, d, C2, e);
          }
      a.push(L);
      return null;
    case "title":
      a.push(N("title"));
      e = null;
      for (v2 in c)
        if (y.call(c, v2) && (g = c[v2], null != g))
          switch (v2) {
            case "children":
              e = g;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              K(a, d, v2, g);
          }
      a.push(L);
      return e;
    case "listing":
    case "pre":
      a.push(N(b));
      g = e = null;
      for (m in c)
        if (y.call(c, m) && (h = c[m], null != h))
          switch (m) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            default:
              K(a, d, m, h);
          }
      a.push(L);
      if (null != g) {
        if (null != e)
          throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if ("object" !== typeof g || !("__html" in g))
          throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        c = g.__html;
        null !== c && void 0 !== c && ("string" === typeof c && 0 < c.length && "\n" === c[0] ? a.push(La, c) : a.push("" + c));
      }
      "string" === typeof e && "\n" === e[0] && a.push(La);
      return e;
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "img":
    case "keygen":
    case "link":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
      a.push(N(b));
      for (var D2 in c)
        if (y.call(c, D2) && (e = c[D2], null != e))
          switch (D2) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              K(a, d, D2, e);
          }
      a.push(Ha);
      return null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return Ka(a, c, b, d);
    case "html":
      return 0 === f.insertionMode && a.push(Oa), Ka(
        a,
        c,
        b,
        d
      );
    default:
      if (-1 === b.indexOf("-") && "string" !== typeof c.is)
        return Ka(a, c, b, d);
      a.push(N(b));
      g = e = null;
      for (n2 in c)
        if (y.call(c, n2) && (h = c[n2], null != h))
          switch (n2) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            case "style":
              Fa(a, d, h);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ha(n2) && "function" !== typeof h && "symbol" !== typeof h && a.push(I, n2, J, F(h), H);
          }
      a.push(L);
      M(a, g, e);
      return e;
  }
}
var Qa = x("</"), Ra = x(">"), Sa = x('<template id="'), Ta = x('"></template>'), Ua = x("<!--$-->"), Va = x('<!--$?--><template id="'), Wa = x('"></template>'), Xa = x("<!--$!-->"), Ya = x("<!--/$-->"), Za = x("<template"), $a = x('"'), ab = x(' data-dgst="');
x(' data-msg="');
x(' data-stck="');
var bb = x("></template>");
function cb(a, b, c) {
  r(a, Va);
  if (null === c)
    throw Error("An ID must have been assigned before we can complete the boundary.");
  r(a, c);
  return w(a, Wa);
}
var db = x('<div hidden id="'), eb = x('">'), fb = x("</div>"), gb = x('<svg aria-hidden="true" style="display:none" id="'), hb = x('">'), ib = x("</svg>"), jb = x('<math aria-hidden="true" style="display:none" id="'), kb = x('">'), lb = x("</math>"), mb = x('<table hidden id="'), nb = x('">'), ob = x("</table>"), pb = x('<table hidden><tbody id="'), qb = x('">'), rb = x("</tbody></table>"), sb = x('<table hidden><tr id="'), tb = x('">'), ub = x("</tr></table>"), vb = x('<table hidden><colgroup id="'), wb = x('">'), xb = x("</colgroup></table>");
function yb(a, b, c, d) {
  switch (c.insertionMode) {
    case 0:
    case 1:
      return r(a, db), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, eb);
    case 2:
      return r(a, gb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, hb);
    case 3:
      return r(a, jb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, kb);
    case 4:
      return r(a, mb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, nb);
    case 5:
      return r(a, pb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, qb);
    case 6:
      return r(a, sb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, tb);
    case 7:
      return r(a, vb), r(
        a,
        b.segmentPrefix
      ), r(a, d.toString(16)), w(a, wb);
    default:
      throw Error("Unknown insertion mode. This is a bug in React.");
  }
}
function zb(a, b) {
  switch (b.insertionMode) {
    case 0:
    case 1:
      return w(a, fb);
    case 2:
      return w(a, ib);
    case 3:
      return w(a, lb);
    case 4:
      return w(a, ob);
    case 5:
      return w(a, rb);
    case 6:
      return w(a, ub);
    case 7:
      return w(a, xb);
    default:
      throw Error("Unknown insertion mode. This is a bug in React.");
  }
}
var Ab = x('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Bb = x('$RS("'), Cb = x('","'), Db = x('")<\/script>'), Fb = x('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Gb = x('$RC("'), Hb = x('","'), Ib = x('")<\/script>'), Jb = x('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Kb = x('$RX("'), Lb = x('"'), Mb = x(")<\/script>"), Nb = x(","), Ob = /[<\u2028\u2029]/g;
function Pb(a) {
  return JSON.stringify(a).replace(Ob, function(a2) {
    switch (a2) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
var O = Object.assign, Qb = Symbol.for("react.element"), Rb = Symbol.for("react.portal"), Sb = Symbol.for("react.fragment"), Tb = Symbol.for("react.strict_mode"), Ub = Symbol.for("react.profiler"), Vb = Symbol.for("react.provider"), Wb = Symbol.for("react.context"), Xb = Symbol.for("react.forward_ref"), Yb = Symbol.for("react.suspense"), Zb = Symbol.for("react.suspense_list"), $b = Symbol.for("react.memo"), ac = Symbol.for("react.lazy"), bc = Symbol.for("react.scope"), cc = Symbol.for("react.debug_trace_mode"), dc = Symbol.for("react.legacy_hidden"), ec = Symbol.for("react.default_value"), fc = Symbol.iterator;
function gc(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case Sb:
      return "Fragment";
    case Rb:
      return "Portal";
    case Ub:
      return "Profiler";
    case Tb:
      return "StrictMode";
    case Yb:
      return "Suspense";
    case Zb:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Wb:
        return (a.displayName || "Context") + ".Consumer";
      case Vb:
        return (a._context.displayName || "Context") + ".Provider";
      case Xb:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case $b:
        return b = a.displayName || null, null !== b ? b : gc(a.type) || "Memo";
      case ac:
        b = a._payload;
        a = a._init;
        try {
          return gc(a(b));
        } catch (c) {
        }
    }
  return null;
}
var hc = {};
function ic(a, b) {
  a = a.contextTypes;
  if (!a)
    return hc;
  var c = {}, d;
  for (d in a)
    c[d] = b[d];
  return c;
}
var P = null;
function Q(a, b) {
  if (a !== b) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    var c = b.parent;
    if (null === a) {
      if (null !== c)
        throw Error("The stacks must reach the root at the same time. This is a bug in React.");
    } else {
      if (null === c)
        throw Error("The stacks must reach the root at the same time. This is a bug in React.");
      Q(a, c);
    }
    b.context._currentValue = b.value;
  }
}
function jc(a) {
  a.context._currentValue = a.parentValue;
  a = a.parent;
  null !== a && jc(a);
}
function kc(a) {
  var b = a.parent;
  null !== b && kc(b);
  a.context._currentValue = a.value;
}
function lc(a, b) {
  a.context._currentValue = a.parentValue;
  a = a.parent;
  if (null === a)
    throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
  a.depth === b.depth ? Q(a, b) : lc(a, b);
}
function mc(a, b) {
  var c = b.parent;
  if (null === c)
    throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
  a.depth === c.depth ? Q(a, c) : mc(a, c);
  b.context._currentValue = b.value;
}
function nc(a) {
  var b = P;
  b !== a && (null === b ? kc(a) : null === a ? jc(b) : b.depth === a.depth ? Q(b, a) : b.depth > a.depth ? lc(b, a) : mc(b, a), P = a);
}
var oc = { isMounted: function() {
  return false;
}, enqueueSetState: function(a, b) {
  a = a._reactInternals;
  null !== a.queue && a.queue.push(b);
}, enqueueReplaceState: function(a, b) {
  a = a._reactInternals;
  a.replace = true;
  a.queue = [b];
}, enqueueForceUpdate: function() {
} };
function pc(a, b, c, d) {
  var f = void 0 !== a.state ? a.state : null;
  a.updater = oc;
  a.props = c;
  a.state = f;
  var e = { queue: [], replace: false };
  a._reactInternals = e;
  var g = b.contextType;
  a.context = "object" === typeof g && null !== g ? g._currentValue : d;
  g = b.getDerivedStateFromProps;
  "function" === typeof g && (g = g(c, f), f = null === g || void 0 === g ? f : O({}, f, g), a.state = f);
  if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount))
    if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && oc.enqueueReplaceState(a, a.state, null), null !== e.queue && 0 < e.queue.length)
      if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && 1 === b.length)
        a.state = b[0];
      else {
        e = g ? b[0] : a.state;
        f = true;
        for (g = g ? 1 : 0; g < b.length; g++) {
          var h = b[g];
          h = "function" === typeof h ? h.call(a, e, c, d) : h;
          null != h && (f ? (f = false, e = O({}, e, h)) : O(e, h));
        }
        a.state = e;
      }
    else
      e.queue = null;
}
var qc = { id: 1, overflow: "" };
function rc(a, b, c) {
  var d = a.id;
  a = a.overflow;
  var f = 32 - sc(d) - 1;
  d &= ~(1 << f);
  c += 1;
  var e = 32 - sc(b) + f;
  if (30 < e) {
    var g = f - f % 5;
    e = (d & (1 << g) - 1).toString(32);
    d >>= g;
    f -= g;
    return { id: 1 << 32 - sc(b) + f | c << f | d, overflow: e + a };
  }
  return { id: 1 << e | c << f | d, overflow: a };
}
var sc = Math.clz32 ? Math.clz32 : tc, uc = Math.log, vc = Math.LN2;
function tc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (uc(a) / vc | 0) | 0;
}
function wc(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var xc = "function" === typeof Object.is ? Object.is : wc, R = null, yc = null, zc = null, S = null, T = false, Ac = false, U = 0, V = null, Bc = 0;
function W() {
  if (null === R)
    throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
  return R;
}
function Cc() {
  if (0 < Bc)
    throw Error("Rendered more hooks than during the previous render");
  return { memoizedState: null, queue: null, next: null };
}
function Dc() {
  null === S ? null === zc ? (T = false, zc = S = Cc()) : (T = true, S = zc) : null === S.next ? (T = false, S = S.next = Cc()) : (T = true, S = S.next);
  return S;
}
function Ec() {
  yc = R = null;
  Ac = false;
  zc = null;
  Bc = 0;
  S = V = null;
}
function Fc(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function Gc(a, b, c) {
  R = W();
  S = Dc();
  if (T) {
    var d = S.queue;
    b = d.dispatch;
    if (null !== V && (c = V.get(d), void 0 !== c)) {
      V.delete(d);
      d = S.memoizedState;
      do
        d = a(d, c.action), c = c.next;
      while (null !== c);
      S.memoizedState = d;
      return [d, b];
    }
    return [S.memoizedState, b];
  }
  a = a === Fc ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
  S.memoizedState = a;
  a = S.queue = { last: null, dispatch: null };
  a = a.dispatch = Hc.bind(null, R, a);
  return [S.memoizedState, a];
}
function Ic(a, b) {
  R = W();
  S = Dc();
  b = void 0 === b ? null : b;
  if (null !== S) {
    var c = S.memoizedState;
    if (null !== c && null !== b) {
      var d = c[1];
      a:
        if (null === d)
          d = false;
        else {
          for (var f = 0; f < d.length && f < b.length; f++)
            if (!xc(b[f], d[f])) {
              d = false;
              break a;
            }
          d = true;
        }
      if (d)
        return c[0];
    }
  }
  a = a();
  S.memoizedState = [a, b];
  return a;
}
function Hc(a, b, c) {
  if (25 <= Bc)
    throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
  if (a === R)
    if (Ac = true, a = { action: c, next: null }, null === V && (V = /* @__PURE__ */ new Map()), c = V.get(b), void 0 === c)
      V.set(b, a);
    else {
      for (b = c; null !== b.next; )
        b = b.next;
      b.next = a;
    }
}
function Jc() {
  throw Error("startTransition cannot be called during server rendering.");
}
function Kc() {
}
var Mc = { readContext: function(a) {
  return a._currentValue;
}, useContext: function(a) {
  W();
  return a._currentValue;
}, useMemo: Ic, useReducer: Gc, useRef: function(a) {
  R = W();
  S = Dc();
  var b = S.memoizedState;
  return null === b ? (a = { current: a }, S.memoizedState = a) : b;
}, useState: function(a) {
  return Gc(Fc, a);
}, useInsertionEffect: Kc, useLayoutEffect: function() {
}, useCallback: function(a, b) {
  return Ic(function() {
    return a;
  }, b);
}, useImperativeHandle: Kc, useEffect: Kc, useDebugValue: Kc, useDeferredValue: function(a) {
  W();
  return a;
}, useTransition: function() {
  W();
  return [false, Jc];
}, useId: function() {
  var a = yc.treeContext;
  var b = a.overflow;
  a = a.id;
  a = (a & ~(1 << 32 - sc(a) - 1)).toString(32) + b;
  var c = Lc;
  if (null === c)
    throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
  b = U++;
  a = ":" + c.idPrefix + "R" + a;
  0 < b && (a += "H" + b.toString(32));
  return a + ":";
}, useMutableSource: function(a, b) {
  W();
  return b(a._source);
}, useSyncExternalStore: function(a, b, c) {
  if (void 0 === c)
    throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
  return c();
} }, Lc = null, Nc = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function Oc(a) {
  console.error(a);
  return null;
}
function X() {
}
function Pc(a, b) {
  var c = a.pingedTasks;
  c.push(b);
  1 === c.length && setImmediate(function() {
    return Qc(a);
  });
}
function Rc(a, b, c, d, f, e, g, h) {
  a.allPendingTasks++;
  null === c ? a.pendingRootTasks++ : c.pendingTasks++;
  var m = { node: b, ping: function() {
    return Pc(a, m);
  }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
  f.add(m);
  return m;
}
function Sc(a, b, c, d, f, e) {
  return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c, lastPushedText: f, textEmbedded: e };
}
function Y(a, b) {
  a = a.onError(b);
  if (null != a && "string" !== typeof a)
    throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
  return a;
}
function Tc(a, b) {
  var c = a.onShellError;
  c(b);
  c = a.onFatalError;
  c(b);
  null !== a.destination ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
}
function Uc(a, b, c, d, f) {
  R = {};
  yc = b;
  U = 0;
  for (a = c(d, f); Ac; )
    Ac = false, U = 0, Bc += 1, S = null, a = c(d, f);
  Ec();
  return a;
}
function Vc(a, b, c, d) {
  var f = c.render(), e = d.childContextTypes;
  if (null !== e && void 0 !== e) {
    var g = b.legacyContext;
    if ("function" !== typeof c.getChildContext)
      d = g;
    else {
      c = c.getChildContext();
      for (var h in c)
        if (!(h in e))
          throw Error((gc(d) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
      d = O({}, g, c);
    }
    b.legacyContext = d;
    Z(a, b, f);
    b.legacyContext = g;
  } else
    Z(a, b, f);
}
function Wc(a, b) {
  if (a && a.defaultProps) {
    b = O({}, b);
    a = a.defaultProps;
    for (var c in a)
      void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
function Xc(a, b, c, d, f) {
  if ("function" === typeof c)
    if (c.prototype && c.prototype.isReactComponent) {
      f = ic(c, b.legacyContext);
      var e = c.contextType;
      e = new c(d, "object" === typeof e && null !== e ? e._currentValue : f);
      pc(e, c, d, f);
      Vc(a, b, e, c);
    } else {
      e = ic(c, b.legacyContext);
      f = Uc(a, b, c, d, e);
      var g = 0 !== U;
      if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof)
        pc(f, c, d, e), Vc(a, b, f, c);
      else if (g) {
        d = b.treeContext;
        b.treeContext = rc(d, 1, 0);
        try {
          Z(a, b, f);
        } finally {
          b.treeContext = d;
        }
      } else
        Z(a, b, f);
    }
  else if ("string" === typeof c) {
    f = b.blockedSegment;
    e = Pa(f.chunks, c, d, a.responseState, f.formatContext);
    f.lastPushedText = false;
    g = f.formatContext;
    f.formatContext = ya(g, c, d);
    Yc(a, b, e);
    f.formatContext = g;
    switch (c) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        f.chunks.push(Qa, c, Ra);
    }
    f.lastPushedText = false;
  } else {
    switch (c) {
      case dc:
      case cc:
      case Tb:
      case Ub:
      case Sb:
        Z(a, b, d.children);
        return;
      case Zb:
        Z(
          a,
          b,
          d.children
        );
        return;
      case bc:
        throw Error("ReactDOMServer does not yet support scope components.");
      case Yb:
        a: {
          c = b.blockedBoundary;
          f = b.blockedSegment;
          e = d.fallback;
          d = d.children;
          g = /* @__PURE__ */ new Set();
          var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, m = Sc(a, f.chunks.length, h, f.formatContext, false, false);
          f.children.push(m);
          f.lastPushedText = false;
          var n2 = Sc(a, 0, null, f.formatContext, false, false);
          n2.parentFlushed = true;
          b.blockedBoundary = h;
          b.blockedSegment = n2;
          try {
            if (Yc(a, b, d), n2.lastPushedText && n2.textEmbedded && n2.chunks.push(za), n2.status = 1, Zc(h, n2), 0 === h.pendingTasks)
              break a;
          } catch (p2) {
            n2.status = 4, h.forceClientRender = true, h.errorDigest = Y(a, p2);
          } finally {
            b.blockedBoundary = c, b.blockedSegment = f;
          }
          b = Rc(a, e, c, m, g, b.legacyContext, b.context, b.treeContext);
          a.pingedTasks.push(b);
        }
        return;
    }
    if ("object" === typeof c && null !== c)
      switch (c.$$typeof) {
        case Xb:
          d = Uc(a, b, c.render, d, f);
          if (0 !== U) {
            c = b.treeContext;
            b.treeContext = rc(c, 1, 0);
            try {
              Z(a, b, d);
            } finally {
              b.treeContext = c;
            }
          } else
            Z(
              a,
              b,
              d
            );
          return;
        case $b:
          c = c.type;
          d = Wc(c, d);
          Xc(a, b, c, d, f);
          return;
        case Vb:
          f = d.children;
          c = c._context;
          d = d.value;
          e = c._currentValue;
          c._currentValue = d;
          g = P;
          P = d = { parent: g, depth: null === g ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
          b.context = d;
          Z(a, b, f);
          a = P;
          if (null === a)
            throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
          d = a.parentValue;
          a.context._currentValue = d === ec ? a.context._defaultValue : d;
          a = P = a.parent;
          b.context = a;
          return;
        case Wb:
          d = d.children;
          d = d(c._currentValue);
          Z(a, b, d);
          return;
        case ac:
          f = c._init;
          c = f(c._payload);
          d = Wc(c, d);
          Xc(a, b, c, d, void 0);
          return;
      }
    throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == c ? c : typeof c) + "."));
  }
}
function Z(a, b, c) {
  b.node = c;
  if ("object" === typeof c && null !== c) {
    switch (c.$$typeof) {
      case Qb:
        Xc(a, b, c.type, c.props, c.ref);
        return;
      case Rb:
        throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
      case ac:
        var d = c._init;
        c = d(c._payload);
        Z(a, b, c);
        return;
    }
    if (qa(c)) {
      $c(a, b, c);
      return;
    }
    null === c || "object" !== typeof c ? d = null : (d = fc && c[fc] || c["@@iterator"], d = "function" === typeof d ? d : null);
    if (d && (d = d.call(c))) {
      c = d.next();
      if (!c.done) {
        var f = [];
        do
          f.push(c.value), c = d.next();
        while (!c.done);
        $c(a, b, f);
      }
      return;
    }
    a = Object.prototype.toString.call(c);
    throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(c).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
  }
  "string" === typeof c ? (d = b.blockedSegment, d.lastPushedText = Aa(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : "number" === typeof c && (d = b.blockedSegment, d.lastPushedText = Aa(
    b.blockedSegment.chunks,
    "" + c,
    a.responseState,
    d.lastPushedText
  ));
}
function $c(a, b, c) {
  for (var d = c.length, f = 0; f < d; f++) {
    var e = b.treeContext;
    b.treeContext = rc(e, d, f);
    try {
      Yc(a, b, c[f]);
    } finally {
      b.treeContext = e;
    }
  }
}
function Yc(a, b, c) {
  var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
  try {
    return Z(a, b, c);
  } catch (m) {
    if (Ec(), "object" === typeof m && null !== m && "function" === typeof m.then) {
      c = m;
      var g = b.blockedSegment, h = Sc(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
      g.children.push(h);
      g.lastPushedText = false;
      a = Rc(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
      c.then(a, a);
      b.blockedSegment.formatContext = d;
      b.legacyContext = f;
      b.context = e;
      nc(e);
    } else
      throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, nc(e), m;
  }
}
function ad(a) {
  var b = a.blockedBoundary;
  a = a.blockedSegment;
  a.status = 3;
  bd(this, b, a);
}
function cd(a, b, c) {
  var d = a.blockedBoundary;
  a.blockedSegment.status = 3;
  null === d ? (b.allPendingTasks--, 2 !== b.status && (b.status = 2, null !== b.destination && b.destination.end())) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, d.errorDigest = b.onError(void 0 === c ? Error("The render was aborted by the server without a reason.") : c), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
    return cd(a2, b, c);
  }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (a = b.onAllReady, a()));
}
function Zc(a, b) {
  if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
    var c = b.children[0];
    c.id = b.id;
    c.parentFlushed = true;
    1 === c.status && Zc(a, c);
  } else
    a.completedSegments.push(b);
}
function bd(a, b, c) {
  if (null === b) {
    if (c.parentFlushed) {
      if (null !== a.completedRootSegment)
        throw Error("There can only be one root segment. This is a bug in React.");
      a.completedRootSegment = c;
    }
    a.pendingRootTasks--;
    0 === a.pendingRootTasks && (a.onShellError = X, b = a.onShellReady, b());
  } else
    b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && Zc(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(ad, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (Zc(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
  a.allPendingTasks--;
  0 === a.allPendingTasks && (a = a.onAllReady, a());
}
function Qc(a) {
  if (2 !== a.status) {
    var b = P, c = Nc.current;
    Nc.current = Mc;
    var d = Lc;
    Lc = a.responseState;
    try {
      var f = a.pingedTasks, e;
      for (e = 0; e < f.length; e++) {
        var g = f[e];
        var h = a, m = g.blockedSegment;
        if (0 === m.status) {
          nc(g.context);
          try {
            Z(h, g, g.node), m.lastPushedText && m.textEmbedded && m.chunks.push(za), g.abortSet.delete(g), m.status = 1, bd(h, g.blockedBoundary, m);
          } catch (E2) {
            if (Ec(), "object" === typeof E2 && null !== E2 && "function" === typeof E2.then) {
              var n2 = g.ping;
              E2.then(n2, n2);
            } else {
              g.abortSet.delete(g);
              m.status = 4;
              var p2 = g.blockedBoundary, v2 = E2, C2 = Y(h, v2);
              null === p2 ? Tc(h, v2) : (p2.pendingTasks--, p2.forceClientRender || (p2.forceClientRender = true, p2.errorDigest = C2, p2.parentFlushed && h.clientRenderedBoundaries.push(p2)));
              h.allPendingTasks--;
              if (0 === h.allPendingTasks) {
                var D2 = h.onAllReady;
                D2();
              }
            }
          } finally {
          }
        }
      }
      f.splice(0, e);
      null !== a.destination && dd(a, a.destination);
    } catch (E2) {
      Y(a, E2), Tc(a, E2);
    } finally {
      Lc = d, Nc.current = c, c === Mc && nc(b);
    }
  }
}
function ed(a, b, c) {
  c.parentFlushed = true;
  switch (c.status) {
    case 0:
      var d = c.id = a.nextSegmentId++;
      c.lastPushedText = false;
      c.textEmbedded = false;
      a = a.responseState;
      r(b, Sa);
      r(b, a.placeholderPrefix);
      a = d.toString(16);
      r(b, a);
      return w(b, Ta);
    case 1:
      c.status = 2;
      var f = true;
      d = c.chunks;
      var e = 0;
      c = c.children;
      for (var g = 0; g < c.length; g++) {
        for (f = c[g]; e < f.index; e++)
          r(b, d[e]);
        f = fd(a, b, f);
      }
      for (; e < d.length - 1; e++)
        r(b, d[e]);
      e < d.length && (f = w(b, d[e]));
      return f;
    default:
      throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
  }
}
function fd(a, b, c) {
  var d = c.boundary;
  if (null === d)
    return ed(a, b, c);
  d.parentFlushed = true;
  if (d.forceClientRender)
    d = d.errorDigest, w(b, Xa), r(b, Za), d && (r(b, ab), r(b, F(d)), r(b, $a)), w(b, bb), ed(a, b, c);
  else if (0 < d.pendingTasks) {
    d.rootSegmentID = a.nextSegmentId++;
    0 < d.completedSegments.length && a.partialBoundaries.push(d);
    var f = a.responseState;
    var e = f.nextSuspenseID++;
    f = x(f.boundaryPrefix + e.toString(16));
    d = d.id = f;
    cb(b, a.responseState, d);
    ed(a, b, c);
  } else if (d.byteSize > a.progressiveChunkSize)
    d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), cb(b, a.responseState, d.id), ed(a, b, c);
  else {
    w(b, Ua);
    c = d.completedSegments;
    if (1 !== c.length)
      throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
    fd(a, b, c[0]);
  }
  return w(b, Ya);
}
function gd(a, b, c) {
  yb(b, a.responseState, c.formatContext, c.id);
  fd(a, b, c);
  return zb(b, c.formatContext);
}
function hd(a, b, c) {
  for (var d = c.completedSegments, f = 0; f < d.length; f++)
    id(a, b, c, d[f]);
  d.length = 0;
  a = a.responseState;
  d = c.id;
  c = c.rootSegmentID;
  r(b, a.startInlineScript);
  a.sentCompleteBoundaryFunction ? r(b, Gb) : (a.sentCompleteBoundaryFunction = true, r(b, Fb));
  if (null === d)
    throw Error("An ID must have been assigned before we can complete the boundary.");
  c = c.toString(16);
  r(b, d);
  r(b, Hb);
  r(b, a.segmentPrefix);
  r(b, c);
  return w(b, Ib);
}
function id(a, b, c, d) {
  if (2 === d.status)
    return true;
  var f = d.id;
  if (-1 === f) {
    if (-1 === (d.id = c.rootSegmentID))
      throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
    return gd(a, b, d);
  }
  gd(a, b, d);
  a = a.responseState;
  r(b, a.startInlineScript);
  a.sentCompleteSegmentFunction ? r(b, Bb) : (a.sentCompleteSegmentFunction = true, r(b, Ab));
  r(b, a.segmentPrefix);
  f = f.toString(16);
  r(b, f);
  r(b, Cb);
  r(b, a.placeholderPrefix);
  r(b, f);
  return w(b, Db);
}
function dd(a, b) {
  k = new Uint8Array(2048);
  l$1 = 0;
  q = true;
  try {
    var c = a.completedRootSegment;
    if (null !== c && 0 === a.pendingRootTasks) {
      fd(a, b, c);
      a.completedRootSegment = null;
      var d = a.responseState.bootstrapChunks;
      for (c = 0; c < d.length - 1; c++)
        r(b, d[c]);
      c < d.length && w(b, d[c]);
    }
    var f = a.clientRenderedBoundaries, e;
    for (e = 0; e < f.length; e++) {
      var g = f[e];
      d = b;
      var h = a.responseState, m = g.id, n2 = g.errorDigest, p2 = g.errorMessage, v2 = g.errorComponentStack;
      r(d, h.startInlineScript);
      h.sentClientRenderFunction ? r(d, Kb) : (h.sentClientRenderFunction = true, r(d, Jb));
      if (null === m)
        throw Error("An ID must have been assigned before we can complete the boundary.");
      r(d, m);
      r(d, Lb);
      if (n2 || p2 || v2)
        r(d, Nb), r(d, Pb(n2 || ""));
      if (p2 || v2)
        r(d, Nb), r(d, Pb(p2 || ""));
      v2 && (r(d, Nb), r(d, Pb(v2)));
      if (!w(d, Mb)) {
        a.destination = null;
        e++;
        f.splice(0, e);
        return;
      }
    }
    f.splice(0, e);
    var C2 = a.completedBoundaries;
    for (e = 0; e < C2.length; e++)
      if (!hd(a, b, C2[e])) {
        a.destination = null;
        e++;
        C2.splice(0, e);
        return;
      }
    C2.splice(0, e);
    ca(b);
    k = new Uint8Array(2048);
    l$1 = 0;
    q = true;
    var D2 = a.partialBoundaries;
    for (e = 0; e < D2.length; e++) {
      var E2 = D2[e];
      a: {
        f = a;
        g = b;
        var na2 = E2.completedSegments;
        for (h = 0; h < na2.length; h++)
          if (!id(f, g, E2, na2[h])) {
            h++;
            na2.splice(0, h);
            var Eb2 = false;
            break a;
          }
        na2.splice(0, h);
        Eb2 = true;
      }
      if (!Eb2) {
        a.destination = null;
        e++;
        D2.splice(0, e);
        return;
      }
    }
    D2.splice(0, e);
    var oa2 = a.completedBoundaries;
    for (e = 0; e < oa2.length; e++)
      if (!hd(a, b, oa2[e])) {
        a.destination = null;
        e++;
        oa2.splice(0, e);
        return;
      }
    oa2.splice(0, e);
  } finally {
    ca(b), "function" === typeof b.flush && b.flush(), 0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b.end();
  }
}
function jd(a) {
  setImmediate(function() {
    return Qc(a);
  });
}
function kd(a, b) {
  if (1 === a.status)
    a.status = 2, b.destroy(a.fatalError);
  else if (2 !== a.status && null === a.destination) {
    a.destination = b;
    try {
      dd(a, b);
    } catch (c) {
      Y(a, c), Tc(a, c);
    }
  }
}
function ld(a, b) {
  try {
    var c = a.abortableTasks;
    c.forEach(function(c2) {
      return cd(c2, a, b);
    });
    c.clear();
    null !== a.destination && dd(a, a.destination);
  } catch (d) {
    Y(a, d), Tc(a, d);
  }
}
function md(a, b) {
  return function() {
    return kd(b, a);
  };
}
function nd(a, b) {
  return function() {
    return ld(a, b);
  };
}
function od(a, b) {
  var c = b ? b.identifierPrefix : void 0, d = b ? b.nonce : void 0, f = b ? b.bootstrapScriptContent : void 0, e = b ? b.bootstrapScripts : void 0;
  var g = b ? b.bootstrapModules : void 0;
  c = void 0 === c ? "" : c;
  d = void 0 === d ? ra : x('<script nonce="' + F(d) + '">');
  var h = [];
  void 0 !== f && h.push(d, ("" + f).replace(wa, xa), sa);
  if (void 0 !== e)
    for (f = 0; f < e.length; f++)
      h.push(ta, F(e[f]), va);
  if (void 0 !== g)
    for (e = 0; e < g.length; e++)
      h.push(ua, F(g[e]), va);
  g = {
    bootstrapChunks: h,
    startInlineScript: d,
    placeholderPrefix: x(c + "P:"),
    segmentPrefix: x(c + "S:"),
    boundaryPrefix: c + "B:",
    idPrefix: c,
    nextSuspenseID: 0,
    sentCompleteSegmentFunction: false,
    sentCompleteBoundaryFunction: false,
    sentClientRenderFunction: false
  };
  e = b ? b.namespaceURI : void 0;
  e = G("http://www.w3.org/2000/svg" === e ? 2 : "http://www.w3.org/1998/Math/MathML" === e ? 3 : 0, null);
  f = b ? b.progressiveChunkSize : void 0;
  d = b ? b.onError : void 0;
  h = b ? b.onAllReady : void 0;
  var m = b ? b.onShellReady : void 0, n2 = b ? b.onShellError : void 0;
  b = [];
  c = /* @__PURE__ */ new Set();
  g = {
    destination: null,
    responseState: g,
    progressiveChunkSize: void 0 === f ? 12800 : f,
    status: 0,
    fatalError: null,
    nextSegmentId: 0,
    allPendingTasks: 0,
    pendingRootTasks: 0,
    completedRootSegment: null,
    abortableTasks: c,
    pingedTasks: b,
    clientRenderedBoundaries: [],
    completedBoundaries: [],
    partialBoundaries: [],
    onError: void 0 === d ? Oc : d,
    onAllReady: void 0 === h ? X : h,
    onShellReady: void 0 === m ? X : m,
    onShellError: void 0 === n2 ? X : n2,
    onFatalError: X
  };
  e = Sc(g, 0, null, e, false, false);
  e.parentFlushed = true;
  a = Rc(g, a, null, e, c, hc, null, qc);
  b.push(a);
  return g;
}
reactDomServer_node_production_min.renderToPipeableStream = function(a, b) {
  var c = od(a, b), d = false;
  jd(c);
  return { pipe: function(a2) {
    if (d)
      throw Error("React currently only supports piping to one writable stream.");
    d = true;
    kd(c, a2);
    a2.on("drain", md(a2, c));
    a2.on("error", nd(c, Error("The destination stream errored while writing data.")));
    a2.on("close", nd(c, Error("The destination stream closed early.")));
    return a2;
  }, abort: function(a2) {
    ld(c, a2);
  } };
};
reactDomServer_node_production_min.version = "18.2.0";
var l, s;
{
  l = reactDomServerLegacy_node_production_min;
  s = reactDomServer_node_production_min;
}
l.version;
var renderToString = l.renderToString;
l.renderToStaticMarkup;
l.renderToNodeStream;
l.renderToStaticNodeStream;
s.renderToPipeableStream;
const index = "";
let dataFacets = [];
let subFacets = [];
let facetItems = [];
let first8Items = [];
let defaultPATH = "";
function messageBanner(data) {
  console.log(defaultPATH);
  let componentTitle = "";
  let componentImageURL = "";
  let componentContent = "";
  let componentSearchFacet = "";
  let componentSearchUrl = "";
  let componentSearchCollection = "";
  let componentSearchProfile = "";
  let componentSearchQuery = "";
  let componentHeadingDisplay = false;
  if (data.props) {
    componentTitle = data.props.componentTitle;
    componentImageURL = JSON.parse(data.props.componentImageURL);
    componentContent = data.props.componentContent;
    componentSearchFacet = data.props.componentSearchFacet;
    componentSearchUrl = data.props.componentSearchUrl;
    componentSearchCollection = data.props.componentSearchCollection;
    componentSearchProfile = data.props.componentSearchProfile;
    componentSearchQuery = data.props.componentSearchQuery;
    componentHeadingDisplay = data.props.componentHeadingDisplay;
  }
  defaultPATH = componentSearchUrl + componentSearchCollection + "&profile=" + componentSearchProfile + "&query=" + componentSearchQuery;
  console.log("Search URL", defaultPATH);
  let FbBaseUrl = componentSearchUrl.replace("/s/search.json", "");
  console.log("Search Base URL", FbBaseUrl);
  const [fbData, setData] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [imageErrors, setImageErrors] = reactExports.useState({});
  const [latestContent2, setLatestContent] = reactExports.useState([]);
  const [internalFacets, setInternalFacets] = reactExports.useState([]);
  const [activeButton, setActiveButton] = reactExports.useState(null);
  const isFirstLoad = reactExports.useRef(true);
  const placeholderImage = "https://placehold.co/500x370/ecf0f1/FFFFFF.png?text=oops";
  reactExports.useEffect(() => {
    fetchData(defaultPATH);
  }, []);
  const fetchData = (url) => {
    setIsLoading(true);
    fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }).then((fbData2) => {
      setData(fbData2);
      setIsLoading(false);
      dataFacets = fbData2.response.facets;
      console.log("FB Facets", dataFacets);
      subFacets = dataFacets.find((item) => item.name === componentSearchFacet);
      console.log("Facet by component value", subFacets);
      facetItems = subFacets.allValues;
      console.log("All Facet Items", facetItems);
      first8Items = facetItems.slice(0, 8);
      console.log("First 8 Facet Items", first8Items);
      if (isFirstLoad.current) {
        setInternalFacets(first8Items);
        isFirstLoad.current = false;
      }
      setLatestContent(fbData2.response.resultPacket.results);
      console.log("Latest Contents", fbData2.response.resultPacket.results);
    }).catch((error) => {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    });
  };
  const facetRefresh = (event, index2) => {
    const url = event.target.getAttribute("data-refresh");
    if (activeButton === index2) {
      fetchData(defaultPATH);
      setActiveButton(null);
    } else {
      fetchData(url);
      setActiveButton(index2);
    }
  };
  const handleImageError = (index2) => {
    setImageErrors((prevState) => ({
      ...prevState,
      [index2]: true
    }));
  };
  return /* @__PURE__ */ React.createElement("div", null, isLoading ? /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", { className: "loader" })) : /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "component-section bg-section banner-events",
      style: componentImageURL !== null ? { backgroundImage: `url(${componentImageURL.imageVariations.original.url})` } : {}
    },
    /* @__PURE__ */ React.createElement("div", { className: "banner-events--frame" }, /* @__PURE__ */ React.createElement("div", { className: "banner-events--wrapper" }, /* @__PURE__ */ React.createElement("h2", { className: "banner-events--title" }, componentTitle), /* @__PURE__ */ React.createElement("div", { className: "banner-events--text", dangerouslySetInnerHTML: { __html: componentContent } }), /* @__PURE__ */ React.createElement("div", { className: "banner-events--item-container" }, componentHeadingDisplay === "true" && /* @__PURE__ */ React.createElement("h3", { className: "item-title" }, "Find more results by category"), /* @__PURE__ */ React.createElement("ul", { className: "event-tags" }, internalFacets.map((item, index2) => /* @__PURE__ */ React.createElement("li", { key: index2 }, /* @__PURE__ */ React.createElement(
      "button",
      {
        "data-refresh": componentSearchUrl + item.toggleUrl,
        onClick: (e) => facetRefresh(e, index2),
        className: activeButton === index2 ? "active" : ""
      },
      item.label
    )))), componentHeadingDisplay === "true" && /* @__PURE__ */ React.createElement("h3", { className: "item-title" }, " Latest ", "", " Results "), /* @__PURE__ */ React.createElement("ul", { className: "event-listing" }, latestContent2.slice(0, 6).map((item, index2) => /* @__PURE__ */ React.createElement("li", { key: index2, className: "event-listing--item" }, /* @__PURE__ */ React.createElement("a", { href: FbBaseUrl + item.clickTrackingUrl }, /* @__PURE__ */ React.createElement("div", { className: "image-container" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: !imageErrors[index2] && item.listMetadata.image ? item.listMetadata.image : placeholderImage,
        alt: "Alt Text",
        onError: () => handleImageError(index2)
      }
    )), /* @__PURE__ */ React.createElement("h3", null, item.listMetadata.t)), /* @__PURE__ */ React.createElement("p", null, item.listMetadata.description)))))))
  ));
}
async function main({ componentTitle, componentImageURL, componentContent, componentSearchFacet, componentSearchUrl, componentSearchCollection, componentSearchProfile, componentSearchQuery, componentHeadingDisplay }, env) {
  return renderToString(/* @__PURE__ */ React.createElement(
    "div",
    {
      id: "banner-message-component",
      "data-componentTitle": componentTitle,
      "data-componentImageURL": JSON.stringify(componentImageURL),
      "data-componentContent": componentContent,
      "data-componentSearchFacet": componentSearchFacet,
      "data-componentSearchUrl": componentSearchUrl,
      "data-componentSearchCollection": componentSearchCollection,
      "data-componentSearchProfile": componentSearchProfile,
      "data-componentSearchQuery": componentSearchQuery,
      "data-componentHeadingDisplay": componentHeadingDisplay
    },
    /* @__PURE__ */ React.createElement(messageBanner, null)
  ));
}
exports.default = main;
