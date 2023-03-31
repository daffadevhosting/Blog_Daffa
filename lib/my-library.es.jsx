import * as S from "react";
import V, { forwardRef as bi, createElement as Nr, useState as br, useEffect as gt, useRef as wi, useCallback as Ei, useLayoutEffect as _i, createContext as Oi, useContext as xi, useMemo as Kn } from "react";
import Ti from "react-dom";
var He = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, E = {}, Si = {
  get exports() {
    return E;
  },
  set exports(e) {
    E = e;
  }
}, $t = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ea;
function Ci() {
  if (ea)
    return $t;
  ea = 1;
  var e = V, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, c, u) {
    var d, l = {}, h = null, v = null;
    u !== void 0 && (h = "" + u), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (d in c)
      n.call(c, d) && !o.hasOwnProperty(d) && (l[d] = c[d]);
    if (s && s.defaultProps)
      for (d in c = s.defaultProps, c)
        l[d] === void 0 && (l[d] = c[d]);
    return { $$typeof: t, type: s, key: h, ref: v, props: l, _owner: a.current };
  }
  return $t.Fragment = r, $t.jsx = i, $t.jsxs = i, $t;
}
var Ut = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ta;
function Pi() {
  return ta || (ta = 1, process.env.NODE_ENV !== "production" && function() {
    var e = V, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), _ = Symbol.iterator, g = "@@iterator";
    function y(f) {
      if (f === null || typeof f != "object")
        return null;
      var b = _ && f[_] || f[g];
      return typeof b == "function" ? b : null;
    }
    var p = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(f) {
      {
        for (var b = arguments.length, I = new Array(b > 1 ? b - 1 : 0), M = 1; M < b; M++)
          I[M - 1] = arguments[M];
        j("error", f, I);
      }
    }
    function j(f, b, I) {
      {
        var M = p.ReactDebugCurrentFrame, ae = M.getStackAddendum();
        ae !== "" && (b += "%s", I = I.concat([ae]));
        var fe = I.map(function(Z) {
          return String(Z);
        });
        fe.unshift("Warning: " + b), Function.prototype.apply.call(console[f], console, fe);
      }
    }
    var k = !1, O = !1, ne = !1, me = !1, xe = !1, ee;
    ee = Symbol.for("react.module.reference");
    function se(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === n || f === o || xe || f === a || f === u || f === d || me || f === v || k || O || ne || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === l || f.$$typeof === i || f.$$typeof === s || f.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === ee || f.getModuleId !== void 0));
    }
    function Ae(f, b, I) {
      var M = f.displayName;
      if (M)
        return M;
      var ae = b.displayName || b.name || "";
      return ae !== "" ? I + "(" + ae + ")" : I;
    }
    function Te(f) {
      return f.displayName || "Context";
    }
    function we(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case s:
            var b = f;
            return Te(b) + ".Consumer";
          case i:
            var I = f;
            return Te(I._context) + ".Provider";
          case c:
            return Ae(f, f.render, "ForwardRef");
          case l:
            var M = f.displayName || null;
            return M !== null ? M : we(f.type) || "Memo";
          case h: {
            var ae = f, fe = ae._payload, Z = ae._init;
            try {
              return we(Z(fe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, te = 0, de, ve, Ne, Le, w, P, W;
    function F() {
    }
    F.__reactDisabledLog = !0;
    function U() {
      {
        if (te === 0) {
          de = console.log, ve = console.info, Ne = console.warn, Le = console.error, w = console.group, P = console.groupCollapsed, W = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: F,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        te++;
      }
    }
    function X() {
      {
        if (te--, te === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, f, {
              value: de
            }),
            info: K({}, f, {
              value: ve
            }),
            warn: K({}, f, {
              value: Ne
            }),
            error: K({}, f, {
              value: Le
            }),
            group: K({}, f, {
              value: w
            }),
            groupCollapsed: K({}, f, {
              value: P
            }),
            groupEnd: K({}, f, {
              value: W
            })
          });
        }
        te < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = p.ReactCurrentDispatcher, B;
    function Y(f, b, I) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (ae) {
            var M = ae.stack.trim().match(/\n( *(at )?)/);
            B = M && M[1] || "";
          }
        return `
` + B + f;
      }
    }
    var G = !1, L;
    {
      var le = typeof WeakMap == "function" ? WeakMap : Map;
      L = new le();
    }
    function R(f, b) {
      if (!f || G)
        return "";
      {
        var I = L.get(f);
        if (I !== void 0)
          return I;
      }
      var M;
      G = !0;
      var ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var fe;
      fe = q.current, q.current = null, U();
      try {
        if (b) {
          var Z = function() {
            throw Error();
          };
          if (Object.defineProperty(Z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Z, []);
            } catch (Je) {
              M = Je;
            }
            Reflect.construct(f, [], Z);
          } else {
            try {
              Z.call();
            } catch (Je) {
              M = Je;
            }
            f.call(Z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Je) {
            M = Je;
          }
          f();
        }
      } catch (Je) {
        if (Je && M && typeof Je.stack == "string") {
          for (var J = Je.stack.split(`
`), De = M.stack.split(`
`), be = J.length - 1, Ee = De.length - 1; be >= 1 && Ee >= 0 && J[be] !== De[Ee]; )
            Ee--;
          for (; be >= 1 && Ee >= 0; be--, Ee--)
            if (J[be] !== De[Ee]) {
              if (be !== 1 || Ee !== 1)
                do
                  if (be--, Ee--, Ee < 0 || J[be] !== De[Ee]) {
                    var Fe = `
` + J[be].replace(" at new ", " at ");
                    return f.displayName && Fe.includes("<anonymous>") && (Fe = Fe.replace("<anonymous>", f.displayName)), typeof f == "function" && L.set(f, Fe), Fe;
                  }
                while (be >= 1 && Ee >= 0);
              break;
            }
        }
      } finally {
        G = !1, q.current = fe, X(), Error.prepareStackTrace = ae;
      }
      var St = f ? f.displayName || f.name : "", Zn = St ? Y(St) : "";
      return typeof f == "function" && L.set(f, Zn), Zn;
    }
    function Me(f, b, I) {
      return R(f, !1);
    }
    function et(f) {
      var b = f.prototype;
      return !!(b && b.isReactComponent);
    }
    function Ve(f, b, I) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return R(f, et(f));
      if (typeof f == "string")
        return Y(f);
      switch (f) {
        case u:
          return Y("Suspense");
        case d:
          return Y("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case c:
            return Me(f.render);
          case l:
            return Ve(f.type, b, I);
          case h: {
            var M = f, ae = M._payload, fe = M._init;
            try {
              return Ve(fe(ae), b, I);
            } catch {
            }
          }
        }
      return "";
    }
    var m = Object.prototype.hasOwnProperty, C = {}, D = p.ReactDebugCurrentFrame;
    function T(f) {
      if (f) {
        var b = f._owner, I = Ve(f.type, f._source, b ? b.type : null);
        D.setExtraStackFrame(I);
      } else
        D.setExtraStackFrame(null);
    }
    function $(f, b, I, M, ae) {
      {
        var fe = Function.call.bind(m);
        for (var Z in f)
          if (fe(f, Z)) {
            var J = void 0;
            try {
              if (typeof f[Z] != "function") {
                var De = Error((M || "React class") + ": " + I + " type `" + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[Z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw De.name = "Invariant Violation", De;
              }
              J = f[Z](b, Z, M, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (be) {
              J = be;
            }
            J && !(J instanceof Error) && (T(ae), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", M || "React class", I, Z, typeof J), T(null)), J instanceof Error && !(J.message in C) && (C[J.message] = !0, T(ae), x("Failed %s type: %s", I, J.message), T(null));
          }
      }
    }
    var A = Array.isArray;
    function H(f) {
      return A(f);
    }
    function he(f) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, I = b && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return I;
      }
    }
    function Q(f) {
      try {
        return re(f), !1;
      } catch {
        return !0;
      }
    }
    function re(f) {
      return "" + f;
    }
    function ue(f) {
      if (Q(f))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", he(f)), re(f);
    }
    var N = p.ReactCurrentOwner, pe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, qe, tt, Se;
    Se = {};
    function Ce(f) {
      if (m.call(f, "ref")) {
        var b = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function $e(f) {
      if (m.call(f, "key")) {
        var b = Object.getOwnPropertyDescriptor(f, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function rt(f, b) {
      if (typeof f.ref == "string" && N.current && b && N.current.stateNode !== b) {
        var I = we(N.current.type);
        Se[I] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', we(N.current.type), f.ref), Se[I] = !0);
      }
    }
    function _t(f, b) {
      {
        var I = function() {
          qe || (qe = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        I.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: I,
          configurable: !0
        });
      }
    }
    function Be(f, b) {
      {
        var I = function() {
          tt || (tt = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        I.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var Ot = function(f, b, I, M, ae, fe, Z) {
      var J = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: b,
        ref: I,
        props: Z,
        // Record the component responsible for creating this element.
        _owner: fe
      };
      return J._store = {}, Object.defineProperty(J._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(J, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.defineProperty(J, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    };
    function Pe(f, b, I, M, ae) {
      {
        var fe, Z = {}, J = null, De = null;
        I !== void 0 && (ue(I), J = "" + I), $e(b) && (ue(b.key), J = "" + b.key), Ce(b) && (De = b.ref, rt(b, ae));
        for (fe in b)
          m.call(b, fe) && !pe.hasOwnProperty(fe) && (Z[fe] = b[fe]);
        if (f && f.defaultProps) {
          var be = f.defaultProps;
          for (fe in be)
            Z[fe] === void 0 && (Z[fe] = be[fe]);
        }
        if (J || De) {
          var Ee = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          J && _t(Z, Ee), De && Be(Z, Ee);
        }
        return Ot(f, J, De, ae, M, N.current, Z);
      }
    }
    var pt = p.ReactCurrentOwner, ze = p.ReactDebugCurrentFrame;
    function nt(f) {
      if (f) {
        var b = f._owner, I = Ve(f.type, f._source, b ? b.type : null);
        ze.setExtraStackFrame(I);
      } else
        ze.setExtraStackFrame(null);
    }
    var Mt;
    Mt = !1;
    function xt(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function Tt() {
      {
        if (pt.current) {
          var f = we(pt.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function vt(f) {
      {
        if (f !== void 0) {
          var b = f.fileName.replace(/^.*[\\\/]/, ""), I = f.lineNumber;
          return `

Check your code at ` + b + ":" + I + ".";
        }
        return "";
      }
    }
    var ge = {};
    function ye(f) {
      {
        var b = Tt();
        if (!b) {
          var I = typeof f == "string" ? f : f.displayName || f.name;
          I && (b = `

Check the top-level render call using <` + I + ">.");
        }
        return b;
      }
    }
    function Ie(f, b) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var I = ye(b);
        if (ge[I])
          return;
        ge[I] = !0;
        var M = "";
        f && f._owner && f._owner !== pt.current && (M = " It was passed a child from " + we(f._owner.type) + "."), nt(f), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, M), nt(null);
      }
    }
    function je(f, b) {
      {
        if (typeof f != "object")
          return;
        if (H(f))
          for (var I = 0; I < f.length; I++) {
            var M = f[I];
            xt(M) && Ie(M, b);
          }
        else if (xt(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var ae = y(f);
          if (typeof ae == "function" && ae !== f.entries)
            for (var fe = ae.call(f), Z; !(Z = fe.next()).done; )
              xt(Z.value) && Ie(Z.value, b);
        }
      }
    }
    function Re(f) {
      {
        var b = f.type;
        if (b == null || typeof b == "string")
          return;
        var I;
        if (typeof b == "function")
          I = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === l))
          I = b.propTypes;
        else
          return;
        if (I) {
          var M = we(b);
          $(I, f.props, "prop", M, f);
        } else if (b.PropTypes !== void 0 && !Mt) {
          Mt = !0;
          var ae = we(b);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _e(f) {
      {
        for (var b = Object.keys(f.props), I = 0; I < b.length; I++) {
          var M = b[I];
          if (M !== "children" && M !== "key") {
            nt(f), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", M), nt(null);
            break;
          }
        }
        f.ref !== null && (nt(f), x("Invalid attribute `ref` supplied to `React.Fragment`."), nt(null));
      }
    }
    function We(f, b, I, M, ae, fe) {
      {
        var Z = se(f);
        if (!Z) {
          var J = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var De = vt(ae);
          De ? J += De : J += Tt();
          var be;
          f === null ? be = "null" : H(f) ? be = "array" : f !== void 0 && f.$$typeof === t ? (be = "<" + (we(f.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : be = typeof f, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, J);
        }
        var Ee = Pe(f, b, I, ae, fe);
        if (Ee == null)
          return Ee;
        if (Z) {
          var Fe = b.children;
          if (Fe !== void 0)
            if (M)
              if (H(Fe)) {
                for (var St = 0; St < Fe.length; St++)
                  je(Fe[St], f);
                Object.freeze && Object.freeze(Fe);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(Fe, f);
        }
        return f === n ? _e(Ee) : Re(Ee), Ee;
      }
    }
    function Ye(f, b, I) {
      return We(f, b, I, !0);
    }
    function at(f, b, I) {
      return We(f, b, I, !1);
    }
    var gi = at, yi = Ye;
    Ut.Fragment = n, Ut.jsx = gi, Ut.jsxs = yi;
  }()), Ut;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ci() : e.exports = Pi();
})(Si);
var Ht = {}, Lt = Ti;
if (process.env.NODE_ENV === "production")
  Ht.createRoot = Lt.createRoot, Ht.hydrateRoot = Lt.hydrateRoot;
else {
  var er = Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ht.createRoot = function(e, t) {
    er.usingClientEntryPoint = !0;
    try {
      return Lt.createRoot(e, t);
    } finally {
      er.usingClientEntryPoint = !1;
    }
  }, Ht.hydrateRoot = function(e, t, r) {
    er.usingClientEntryPoint = !0;
    try {
      return Lt.hydrateRoot(e, t, r);
    } finally {
      er.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function zt() {
  return zt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zt.apply(this, arguments);
}
var ct;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(ct || (ct = {}));
const ra = "popstate";
function Ri(e) {
  e === void 0 && (e = {});
  function t(n, a) {
    let {
      pathname: o,
      search: i,
      hash: s
    } = n.location;
    return an(
      "",
      {
        pathname: o,
        search: i,
        hash: s
      },
      // state defaults to `null` because `window.history.state` does
      a.state && a.state.usr || null,
      a.state && a.state.key || "default"
    );
  }
  function r(n, a) {
    return typeof a == "string" ? a : Gt(a);
  }
  return ji(t, r, null, e);
}
function z(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function ft(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Ii() {
  return Math.random().toString(36).substr(2, 8);
}
function na(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function an(e, t, r, n) {
  return r === void 0 && (r = null), zt({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? At(t) : t, {
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || n || Ii()
  });
}
function Gt(e) {
  let {
    pathname: t = "/",
    search: r = "",
    hash: n = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t;
}
function At(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e);
  }
  return t;
}
function ji(e, t, r, n) {
  n === void 0 && (n = {});
  let {
    window: a = document.defaultView,
    v5Compat: o = !1
  } = n, i = a.history, s = ct.Pop, c = null, u = d();
  u == null && (u = 0, i.replaceState(zt({}, i.state, {
    idx: u
  }), ""));
  function d() {
    return (i.state || {
      idx: null
    }).idx;
  }
  function l() {
    s = ct.Pop;
    let y = d(), p = y == null ? null : y - u;
    u = y, c && c({
      action: s,
      location: g.location,
      delta: p
    });
  }
  function h(y, p) {
    s = ct.Push;
    let x = an(g.location, y, p);
    r && r(x, y), u = d() + 1;
    let j = na(x, u), k = g.createHref(x);
    try {
      i.pushState(j, "", k);
    } catch {
      a.location.assign(k);
    }
    o && c && c({
      action: s,
      location: g.location,
      delta: 1
    });
  }
  function v(y, p) {
    s = ct.Replace;
    let x = an(g.location, y, p);
    r && r(x, y), u = d();
    let j = na(x, u), k = g.createHref(x);
    i.replaceState(j, "", k), o && c && c({
      action: s,
      location: g.location,
      delta: 0
    });
  }
  function _(y) {
    let p = a.location.origin !== "null" ? a.location.origin : a.location.href, x = typeof y == "string" ? y : Gt(y);
    return z(p, "No window.location.(origin|href) available to create URL for href: " + x), new URL(x, p);
  }
  let g = {
    get action() {
      return s;
    },
    get location() {
      return e(a, i);
    },
    listen(y) {
      if (c)
        throw new Error("A history only accepts one active listener");
      return a.addEventListener(ra, l), c = y, () => {
        a.removeEventListener(ra, l), c = null;
      };
    },
    createHref(y) {
      return t(a, y);
    },
    createURL: _,
    encodeLocation(y) {
      let p = _(y);
      return {
        pathname: p.pathname,
        search: p.search,
        hash: p.hash
      };
    },
    push: h,
    replace: v,
    go(y) {
      return i.go(y);
    }
  };
  return g;
}
var aa;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(aa || (aa = {}));
function Di(e, t, r) {
  r === void 0 && (r = "/");
  let n = typeof t == "string" ? At(t) : t, a = xn(n.pathname || "/", r);
  if (a == null)
    return null;
  let o = uo(e);
  ki(o);
  let i = null;
  for (let s = 0; i == null && s < o.length; ++s)
    i = Fi(
      o[s],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      Hi(a)
    );
  return i;
}
function uo(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let a = (o, i, s) => {
    let c = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o
    };
    c.relativePath.startsWith("/") && (z(c.relativePath.startsWith(n), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), c.relativePath = c.relativePath.slice(n.length));
    let u = Ze([n, c.relativePath]), d = r.concat(c);
    o.children && o.children.length > 0 && (z(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
    ), uo(o.children, t, d, u)), !(o.path == null && !o.index) && t.push({
      path: u,
      score: qi(u, o.index),
      routesMeta: d
    });
  };
  return e.forEach((o, i) => {
    var s;
    if (o.path === "" || !((s = o.path) != null && s.includes("?")))
      a(o, i);
    else
      for (let c of co(o.path))
        a(o, i, c);
  }), t;
}
function co(e) {
  let t = e.split("/");
  if (t.length === 0)
    return [];
  let [r, ...n] = t, a = r.endsWith("?"), o = r.replace(/\?$/, "");
  if (n.length === 0)
    return a ? [o, ""] : [o];
  let i = co(n.join("/")), s = [];
  return s.push(...i.map((c) => c === "" ? o : [o, c].join("/"))), a && s.push(...i), s.map((c) => e.startsWith("/") && c === "" ? "/" : c);
}
function ki(e) {
  e.sort((t, r) => t.score !== r.score ? r.score - t.score : Wi(t.routesMeta.map((n) => n.childrenIndex), r.routesMeta.map((n) => n.childrenIndex)));
}
const Ai = /^:\w+$/, Ni = 3, Mi = 2, $i = 1, Ui = 10, Li = -2, oa = (e) => e === "*";
function qi(e, t) {
  let r = e.split("/"), n = r.length;
  return r.some(oa) && (n += Li), t && (n += Mi), r.filter((a) => !oa(a)).reduce((a, o) => a + (Ai.test(o) ? Ni : o === "" ? $i : Ui), n);
}
function Wi(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Fi(e, t) {
  let {
    routesMeta: r
  } = e, n = {}, a = "/", o = [];
  for (let i = 0; i < r.length; ++i) {
    let s = r[i], c = i === r.length - 1, u = a === "/" ? t : t.slice(a.length) || "/", d = Bi({
      path: s.relativePath,
      caseSensitive: s.caseSensitive,
      end: c
    }, u);
    if (!d)
      return null;
    Object.assign(n, d.params);
    let l = s.route;
    o.push({
      // TODO: Can this as be avoided?
      params: n,
      pathname: Ze([a, d.pathname]),
      pathnameBase: Xi(Ze([a, d.pathnameBase])),
      route: l
    }), d.pathnameBase !== "/" && (a = Ze([a, d.pathnameBase]));
  }
  return o;
}
function Bi(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, n] = Yi(e.path, e.caseSensitive, e.end), a = t.match(r);
  if (!a)
    return null;
  let o = a[0], i = o.replace(/(.)\/+$/, "$1"), s = a.slice(1);
  return {
    params: n.reduce((u, d, l) => {
      if (d === "*") {
        let h = s[l] || "";
        i = o.slice(0, o.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return u[d] = Vi(s[l] || "", d), u;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e
  };
}
function Yi(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), ft(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let n = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (i, s) => (n.push(s), "/([^\\/]+)"));
  return e.endsWith("*") ? (n.push("*"), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n];
}
function Hi(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return ft(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function Vi(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (r) {
    return ft(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + r + ").")), e;
  }
}
function xn(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function zi(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: a = ""
  } = typeof e == "string" ? At(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : Gi(r, t) : t,
    search: Qi(n),
    hash: Ji(a)
  };
}
function Gi(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
  }), r.length > 1 ? r.join("/") : "/";
}
function Mr(e, t, r, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function lo(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function fo(e, t, r, n) {
  n === void 0 && (n = !1);
  let a;
  typeof e == "string" ? a = At(e) : (a = zt({}, e), z(!a.pathname || !a.pathname.includes("?"), Mr("?", "pathname", "search", a)), z(!a.pathname || !a.pathname.includes("#"), Mr("#", "pathname", "hash", a)), z(!a.search || !a.search.includes("#"), Mr("#", "search", "hash", a)));
  let o = e === "" || a.pathname === "", i = o ? "/" : a.pathname, s;
  if (n || i == null)
    s = r;
  else {
    let l = t.length - 1;
    if (i.startsWith("..")) {
      let h = i.split("/");
      for (; h[0] === ".."; )
        h.shift(), l -= 1;
      a.pathname = h.join("/");
    }
    s = l >= 0 ? t[l] : "/";
  }
  let c = zi(a, s), u = i && i !== "/" && i.endsWith("/"), d = (o || i === ".") && r.endsWith("/");
  return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c;
}
const Ze = (e) => e.join("/").replace(/\/\/+/g, "/"), Xi = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Qi = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Ji = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Zi(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ki(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
const ho = typeof Object.is == "function" ? Object.is : Ki, {
  useState: es,
  useEffect: ts,
  useLayoutEffect: rs,
  useDebugValue: ns
} = S;
let ia = !1, sa = !1;
function as(e, t, r) {
  process.env.NODE_ENV !== "production" && (ia || "startTransition" in S && (ia = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.")));
  const n = t();
  if (process.env.NODE_ENV !== "production" && !sa) {
    const i = t();
    ho(n, i) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), sa = !0);
  }
  const [{
    inst: a
  }, o] = es({
    inst: {
      value: n,
      getSnapshot: t
    }
  });
  return rs(() => {
    a.value = n, a.getSnapshot = t, $r(a) && o({
      inst: a
    });
  }, [e, n, t]), ts(() => ($r(a) && o({
    inst: a
  }), e(() => {
    $r(a) && o({
      inst: a
    });
  })), [e]), ns(n), n;
}
function $r(e) {
  const t = e.getSnapshot, r = e.value;
  try {
    const n = t();
    return !ho(r, n);
  } catch {
    return !0;
  }
}
function os(e, t, r) {
  return t();
}
const is = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ss = !is, us = ss ? os : as;
"useSyncExternalStore" in S && ((e) => e.useSyncExternalStore)(S);
const wr = /* @__PURE__ */ S.createContext(null);
process.env.NODE_ENV !== "production" && (wr.displayName = "DataRouter");
const Er = /* @__PURE__ */ S.createContext(null);
process.env.NODE_ENV !== "production" && (Er.displayName = "DataRouterState");
const cs = /* @__PURE__ */ S.createContext(null);
process.env.NODE_ENV !== "production" && (cs.displayName = "Await");
const dt = /* @__PURE__ */ S.createContext(null);
process.env.NODE_ENV !== "production" && (dt.displayName = "Navigation");
const Xt = /* @__PURE__ */ S.createContext(null);
process.env.NODE_ENV !== "production" && (Xt.displayName = "Location");
const Ke = /* @__PURE__ */ S.createContext({
  outlet: null,
  matches: []
});
process.env.NODE_ENV !== "production" && (Ke.displayName = "Route");
const Tn = /* @__PURE__ */ S.createContext(null);
process.env.NODE_ENV !== "production" && (Tn.displayName = "RouteError");
function on() {
  return on = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, on.apply(this, arguments);
}
function ls(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t;
  Qt() || (process.env.NODE_ENV !== "production" ? z(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : z(!1));
  let {
    basename: n,
    navigator: a
  } = S.useContext(dt), {
    hash: o,
    pathname: i,
    search: s
  } = _r(e, {
    relative: r
  }), c = i;
  return n !== "/" && (c = i === "/" ? n : Ze([n, i])), a.createHref({
    pathname: c,
    search: s,
    hash: o
  });
}
function Qt() {
  return S.useContext(Xt) != null;
}
function wt() {
  return Qt() || (process.env.NODE_ENV !== "production" ? z(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : z(!1)), S.useContext(Xt).location;
}
function fs() {
  Qt() || (process.env.NODE_ENV !== "production" ? z(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : z(!1));
  let {
    basename: e,
    navigator: t
  } = S.useContext(dt), {
    matches: r
  } = S.useContext(Ke), {
    pathname: n
  } = wt(), a = JSON.stringify(lo(r).map((s) => s.pathnameBase)), o = S.useRef(!1);
  return S.useEffect(() => {
    o.current = !0;
  }), S.useCallback(function(s, c) {
    if (c === void 0 && (c = {}), process.env.NODE_ENV !== "production" && ft(o.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered."), !o.current)
      return;
    if (typeof s == "number") {
      t.go(s);
      return;
    }
    let u = fo(s, JSON.parse(a), n, c.relative === "path");
    e !== "/" && (u.pathname = u.pathname === "/" ? e : Ze([e, u.pathname])), (c.replace ? t.replace : t.push)(u, c.state, c);
  }, [e, t, a, n]);
}
function ds() {
  let {
    matches: e
  } = S.useContext(Ke), t = e[e.length - 1];
  return t ? t.params : {};
}
function _r(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    matches: n
  } = S.useContext(Ke), {
    pathname: a
  } = wt(), o = JSON.stringify(lo(n).map((i) => i.pathnameBase));
  return S.useMemo(() => fo(e, JSON.parse(o), a, r === "path"), [e, o, a, r]);
}
function hs(e, t) {
  Qt() || (process.env.NODE_ENV !== "production" ? z(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : z(!1));
  let {
    navigator: r
  } = S.useContext(dt), n = S.useContext(Er), {
    matches: a
  } = S.useContext(Ke), o = a[a.length - 1], i = o ? o.params : {}, s = o ? o.pathname : "/", c = o ? o.pathnameBase : "/", u = o && o.route;
  if (process.env.NODE_ENV !== "production") {
    let p = u && u.path || "";
    Es(s, !u || p.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + s + '" (under <Route path="' + p + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + p + '"> to <Route ') + ('path="' + (p === "/" ? "*" : p + "/*") + '">.'));
  }
  let d = wt(), l;
  if (t) {
    var h;
    let p = typeof t == "string" ? At(t) : t;
    c === "/" || (h = p.pathname) != null && h.startsWith(c) || (process.env.NODE_ENV !== "production" ? z(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + c + '" ') + ('but pathname "' + p.pathname + '" was given in the `location` prop.')) : z(!1)), l = p;
  } else
    l = d;
  let v = l.pathname || "/", _ = c === "/" ? v : v.slice(c.length) || "/", g = Di(e, {
    pathname: _
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && ft(u || g != null, 'No routes matched location "' + l.pathname + l.search + l.hash + '" '), process.env.NODE_ENV !== "production" && ft(g == null || g[g.length - 1].route.element !== void 0 || g[g.length - 1].route.Component !== void 0, 'Matched leaf route at location "' + l.pathname + l.search + l.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let y = gs(g && g.map((p) => Object.assign({}, p, {
    params: Object.assign({}, i, p.params),
    pathname: Ze([
      c,
      // Re-encode pathnames that were decoded inside matchRoutes
      r.encodeLocation ? r.encodeLocation(p.pathname).pathname : p.pathname
    ]),
    pathnameBase: p.pathnameBase === "/" ? c : Ze([
      c,
      // Re-encode pathnames that were decoded inside matchRoutes
      r.encodeLocation ? r.encodeLocation(p.pathnameBase).pathname : p.pathnameBase
    ])
  })), a, n || void 0);
  return t && y ? /* @__PURE__ */ S.createElement(Xt.Provider, {
    value: {
      location: on({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, l),
      navigationType: ct.Pop
    }
  }, y) : y;
}
function ps() {
  let e = vo(), t = Zi(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, n = "rgba(200,200,200, 0.5)", a = {
    padding: "0.5rem",
    backgroundColor: n
  }, o = {
    padding: "2px 4px",
    backgroundColor: n
  }, i = null;
  return process.env.NODE_ENV !== "production" && (i = /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ S.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ S.createElement("code", {
    style: o
  }, "ErrorBoundary"), " prop on ", /* @__PURE__ */ S.createElement("code", {
    style: o
  }, "<Route>")))), /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ S.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), r ? /* @__PURE__ */ S.createElement("pre", {
    style: a
  }, r) : null, i);
}
class vs extends S.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ? {
      error: t.error,
      location: t.location
    } : {
      error: t.error || r.error,
      location: r.location
    };
  }
  componentDidCatch(t, r) {
    console.error("React Router caught the following error during render", t, r);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ S.createElement(Ke.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ S.createElement(Tn.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function ms(e) {
  let {
    routeContext: t,
    match: r,
    children: n
  } = e, a = S.useContext(wr);
  return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ S.createElement(Ke.Provider, {
    value: t
  }, n);
}
function gs(e, t, r) {
  if (t === void 0 && (t = []), e == null)
    if (r != null && r.errors)
      e = r.matches;
    else
      return null;
  let n = e, a = r == null ? void 0 : r.errors;
  if (a != null) {
    let o = n.findIndex((i) => i.route.id && (a == null ? void 0 : a[i.route.id]));
    o >= 0 || (process.env.NODE_ENV !== "production" ? z(!1, "Could not find a matching route for the current errors: " + a) : z(!1)), n = n.slice(0, Math.min(n.length, o + 1));
  }
  return n.reduceRight((o, i, s) => {
    let c = i.route.id ? a == null ? void 0 : a[i.route.id] : null, u = null;
    r && (i.route.ErrorBoundary ? u = /* @__PURE__ */ S.createElement(i.route.ErrorBoundary, null) : i.route.errorElement ? u = i.route.errorElement : u = /* @__PURE__ */ S.createElement(ps, null));
    let d = t.concat(n.slice(0, s + 1)), l = () => {
      let h = o;
      return c ? h = u : i.route.Component ? h = /* @__PURE__ */ S.createElement(i.route.Component, null) : i.route.element && (h = i.route.element), /* @__PURE__ */ S.createElement(ms, {
        match: i,
        routeContext: {
          outlet: o,
          matches: d
        },
        children: h
      });
    };
    return r && (i.route.ErrorBoundary || i.route.errorElement || s === 0) ? /* @__PURE__ */ S.createElement(vs, {
      location: r.location,
      component: u,
      error: c,
      children: l(),
      routeContext: {
        outlet: null,
        matches: d
      }
    }) : l();
  }, null);
}
var ua;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator";
})(ua || (ua = {}));
var fr;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator";
})(fr || (fr = {}));
function po(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function ys(e) {
  let t = S.useContext(Er);
  return t || (process.env.NODE_ENV !== "production" ? z(!1, po(e)) : z(!1)), t;
}
function bs(e) {
  let t = S.useContext(Ke);
  return t || (process.env.NODE_ENV !== "production" ? z(!1, po(e)) : z(!1)), t;
}
function ws(e) {
  let t = bs(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? z(!1, e + ' can only be used on routes that contain a unique "id"') : z(!1)), r.route.id;
}
function vo() {
  var e;
  let t = S.useContext(Tn), r = ys(fr.UseRouteError), n = ws(fr.UseRouteError);
  return t || ((e = r.errors) == null ? void 0 : e[n]);
}
const ca = {};
function Es(e, t, r) {
  !t && !ca[e] && (ca[e] = !0, process.env.NODE_ENV !== "production" && ft(!1, r));
}
function jt(e) {
  process.env.NODE_ENV !== "production" ? z(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : z(!1);
}
function _s(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: a = ct.Pop,
    navigator: o,
    static: i = !1
  } = e;
  Qt() && (process.env.NODE_ENV !== "production" ? z(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : z(!1));
  let s = t.replace(/^\/*/, "/"), c = S.useMemo(() => ({
    basename: s,
    navigator: o,
    static: i
  }), [s, o, i]);
  typeof n == "string" && (n = At(n));
  let {
    pathname: u = "/",
    search: d = "",
    hash: l = "",
    state: h = null,
    key: v = "default"
  } = n, _ = S.useMemo(() => {
    let g = xn(u, s);
    return g == null ? null : {
      location: {
        pathname: g,
        search: d,
        hash: l,
        state: h,
        key: v
      },
      navigationType: a
    };
  }, [s, u, d, l, h, v, a]);
  return process.env.NODE_ENV !== "production" && ft(_ != null, '<Router basename="' + s + '"> is not able to match the URL ' + ('"' + u + d + l + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), _ == null ? null : /* @__PURE__ */ S.createElement(dt.Provider, {
    value: c
  }, /* @__PURE__ */ S.createElement(Xt.Provider, {
    children: r,
    value: _
  }));
}
function Os(e) {
  let {
    children: t,
    location: r
  } = e, n = S.useContext(wr), a = n && !t ? n.router.routes : sn(t);
  return hs(a, r);
}
var la;
(function(e) {
  e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error";
})(la || (la = {}));
new Promise(() => {
});
function sn(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return S.Children.forEach(e, (n, a) => {
    if (!/* @__PURE__ */ S.isValidElement(n))
      return;
    let o = [...t, a];
    if (n.type === S.Fragment) {
      r.push.apply(r, sn(n.props.children, o));
      return;
    }
    n.type !== jt && (process.env.NODE_ENV !== "production" ? z(!1, "[" + (typeof n.type == "string" ? n.type : n.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : z(!1)), !n.props.index || !n.props.children || (process.env.NODE_ENV !== "production" ? z(!1, "An index route cannot have child routes.") : z(!1));
    let i = {
      id: n.props.id || o.join("-"),
      caseSensitive: n.props.caseSensitive,
      element: n.props.element,
      Component: n.props.Component,
      index: n.props.index,
      path: n.props.path,
      loader: n.props.loader,
      action: n.props.action,
      errorElement: n.props.errorElement,
      ErrorBoundary: n.props.ErrorBoundary,
      hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
      shouldRevalidate: n.props.shouldRevalidate,
      handle: n.props.handle,
      lazy: n.props.lazy
    };
    n.props.children && (i.children = sn(n.props.children, o)), r.push(i);
  }), r;
}
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function yt() {
  return yt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yt.apply(this, arguments);
}
function Sn(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
const or = "get", Ur = "application/x-www-form-urlencoded";
function Or(e) {
  return e != null && typeof e.tagName == "string";
}
function xs(e) {
  return Or(e) && e.tagName.toLowerCase() === "button";
}
function Ts(e) {
  return Or(e) && e.tagName.toLowerCase() === "form";
}
function Ss(e) {
  return Or(e) && e.tagName.toLowerCase() === "input";
}
function Cs(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ps(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Cs(e);
}
function Rs(e, t, r) {
  let n, a, o, i;
  if (Ts(e)) {
    let d = r.submissionTrigger;
    n = r.method || e.getAttribute("method") || or, a = r.action || e.getAttribute("action") || t, o = r.encType || e.getAttribute("enctype") || Ur, i = new FormData(e), d && d.name && i.append(d.name, d.value);
  } else if (xs(e) || Ss(e) && (e.type === "submit" || e.type === "image")) {
    let d = e.form;
    if (d == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    n = r.method || e.getAttribute("formmethod") || d.getAttribute("method") || or, a = r.action || e.getAttribute("formaction") || d.getAttribute("action") || t, o = r.encType || e.getAttribute("formenctype") || d.getAttribute("enctype") || Ur, i = new FormData(d), e.name && i.append(e.name, e.value);
  } else {
    if (Or(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    if (n = r.method || or, a = r.action || t, o = r.encType || Ur, e instanceof FormData)
      i = e;
    else if (i = new FormData(), e instanceof URLSearchParams)
      for (let [d, l] of e)
        i.append(d, l);
    else if (e != null)
      for (let d of Object.keys(e))
        i.append(d, e[d]);
  }
  let {
    protocol: s,
    host: c
  } = window.location;
  return {
    url: new URL(a, s + "//" + c),
    method: n.toLowerCase(),
    encType: o,
    formData: i
  };
}
const Is = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], js = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"], Ds = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];
function ks(e) {
  let {
    basename: t,
    children: r,
    window: n
  } = e, a = S.useRef();
  a.current == null && (a.current = Ri({
    window: n,
    v5Compat: !0
  }));
  let o = a.current, [i, s] = S.useState({
    action: o.action,
    location: o.location
  });
  return S.useLayoutEffect(() => o.listen(s), [o]), /* @__PURE__ */ S.createElement(_s, {
    basename: t,
    children: r,
    location: i.location,
    navigationType: i.action,
    navigator: o
  });
}
process.env.NODE_ENV;
const As = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ns = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, kt = /* @__PURE__ */ S.forwardRef(function(t, r) {
  let {
    onClick: n,
    relative: a,
    reloadDocument: o,
    replace: i,
    state: s,
    target: c,
    to: u,
    preventScrollReset: d
  } = t, l = Sn(t, Is), {
    basename: h
  } = S.useContext(dt), v, _ = !1;
  if (typeof u == "string" && Ns.test(u) && (v = u, As)) {
    let x = new URL(window.location.href), j = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u), k = xn(j.pathname, h);
    j.origin === x.origin && k != null ? u = k + j.search + j.hash : _ = !0;
  }
  let g = ls(u, {
    relative: a
  }), y = Ls(u, {
    replace: i,
    state: s,
    target: c,
    preventScrollReset: d,
    relative: a
  });
  function p(x) {
    n && n(x), x.defaultPrevented || y(x);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ S.createElement("a", yt({}, l, {
      href: v || g,
      onClick: _ || o ? n : p,
      ref: r,
      target: c
    }))
  );
});
process.env.NODE_ENV !== "production" && (kt.displayName = "Link");
const ir = /* @__PURE__ */ S.forwardRef(function(t, r) {
  let {
    "aria-current": n = "page",
    caseSensitive: a = !1,
    className: o = "",
    end: i = !1,
    style: s,
    to: c,
    children: u
  } = t, d = Sn(t, js), l = _r(c, {
    relative: d.relative
  }), h = wt(), v = S.useContext(Er), {
    navigator: _
  } = S.useContext(dt), g = _.encodeLocation ? _.encodeLocation(l).pathname : l.pathname, y = h.pathname, p = v && v.navigation && v.navigation.location ? v.navigation.location.pathname : null;
  a || (y = y.toLowerCase(), p = p ? p.toLowerCase() : null, g = g.toLowerCase());
  let x = y === g || !i && y.startsWith(g) && y.charAt(g.length) === "/", j = p != null && (p === g || !i && p.startsWith(g) && p.charAt(g.length) === "/"), k = x ? n : void 0, O;
  typeof o == "function" ? O = o({
    isActive: x,
    isPending: j
  }) : O = [o, x ? "active" : null, j ? "pending" : null].filter(Boolean).join(" ");
  let ne = typeof s == "function" ? s({
    isActive: x,
    isPending: j
  }) : s;
  return /* @__PURE__ */ S.createElement(kt, yt({}, d, {
    "aria-current": k,
    className: O,
    ref: r,
    style: ne,
    to: c
  }), typeof u == "function" ? u({
    isActive: x,
    isPending: j
  }) : u);
});
process.env.NODE_ENV !== "production" && (ir.displayName = "NavLink");
const Ms = /* @__PURE__ */ S.forwardRef((e, t) => /* @__PURE__ */ S.createElement(mo, yt({}, e, {
  ref: t
})));
process.env.NODE_ENV !== "production" && (Ms.displayName = "Form");
const mo = /* @__PURE__ */ S.forwardRef((e, t) => {
  let {
    reloadDocument: r,
    replace: n,
    method: a = or,
    action: o,
    onSubmit: i,
    fetcherKey: s,
    routeId: c,
    relative: u,
    preventScrollReset: d
  } = e, l = Sn(e, Ds), h = qs(s, c), v = a.toLowerCase() === "get" ? "get" : "post", _ = go(o, {
    relative: u
  }), g = (y) => {
    if (i && i(y), y.defaultPrevented)
      return;
    y.preventDefault();
    let p = y.nativeEvent.submitter, x = (p == null ? void 0 : p.getAttribute("formmethod")) || a;
    h(p || y.currentTarget, {
      method: x,
      replace: n,
      relative: u,
      preventScrollReset: d
    });
  };
  return /* @__PURE__ */ S.createElement("form", yt({
    ref: t,
    method: v,
    action: _,
    onSubmit: r ? i : g
  }, l));
});
process.env.NODE_ENV !== "production" && (mo.displayName = "FormImpl");
process.env.NODE_ENV;
var un;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher";
})(un || (un = {}));
var fa;
(function(e) {
  e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(fa || (fa = {}));
function $s(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Us(e) {
  let t = S.useContext(wr);
  return t || (process.env.NODE_ENV !== "production" ? z(!1, $s(e)) : z(!1)), t;
}
function Ls(e, t) {
  let {
    target: r,
    replace: n,
    state: a,
    preventScrollReset: o,
    relative: i
  } = t === void 0 ? {} : t, s = fs(), c = wt(), u = _r(e, {
    relative: i
  });
  return S.useCallback((d) => {
    if (Ps(d, r)) {
      d.preventDefault();
      let l = n !== void 0 ? n : Gt(c) === Gt(u);
      s(e, {
        replace: l,
        state: a,
        preventScrollReset: o,
        relative: i
      });
    }
  }, [c, s, u, n, a, r, e, o, i]);
}
function qs(e, t) {
  let {
    router: r
  } = Us(un.UseSubmitImpl), n = go();
  return S.useCallback(function(a, o) {
    if (o === void 0 && (o = {}), typeof document > "u")
      throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
    let {
      method: i,
      encType: s,
      formData: c,
      url: u
    } = Rs(a, n, o), d = u.pathname + u.search, l = {
      replace: o.replace,
      preventScrollReset: o.preventScrollReset,
      formData: c,
      formMethod: i,
      formEncType: s
    };
    e ? (t == null && (process.env.NODE_ENV !== "production" ? z(!1, "No routeId available for useFetcher()") : z(!1)), r.fetch(e, t, d, l)) : r.navigate(d, l);
  }, [n, r, e, t]);
}
function go(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    basename: n
  } = S.useContext(dt), a = S.useContext(Ke);
  a || (process.env.NODE_ENV !== "production" ? z(!1, "useFormAction must be used inside a RouteContext") : z(!1));
  let [o] = a.matches.slice(-1), i = yt({}, _r(e || ".", {
    relative: r
  })), s = wt();
  if (e == null && (i.search = s.search, i.hash = s.hash, o.route.index)) {
    let c = new URLSearchParams(i.search);
    c.delete("index"), i.search = c.toString() ? "?" + c.toString() : "";
  }
  return (!e || e === ".") && o.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (i.pathname = i.pathname === "/" ? n : Ze([n, i.pathname])), Gt(i);
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var da = Object.getOwnPropertySymbols, Ws = Object.prototype.hasOwnProperty, Fs = Object.prototype.propertyIsEnumerable;
function Bs(e) {
  if (e == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e);
}
function Ys() {
  try {
    if (!Object.assign)
      return !1;
    var e = new String("abc");
    if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5")
      return !1;
    for (var t = {}, r = 0; r < 10; r++)
      t["_" + String.fromCharCode(r)] = r;
    var n = Object.getOwnPropertyNames(t).map(function(o) {
      return t[o];
    });
    if (n.join("") !== "0123456789")
      return !1;
    var a = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(o) {
      a[o] = o;
    }), Object.keys(Object.assign({}, a)).join("") === "abcdefghijklmnopqrst";
  } catch {
    return !1;
  }
}
var Oe = Ys() ? Object.assign : function(e, t) {
  for (var r, n = Bs(e), a, o = 1; o < arguments.length; o++) {
    r = Object(arguments[o]);
    for (var i in r)
      Ws.call(r, i) && (n[i] = r[i]);
    if (da) {
      a = da(r);
      for (var s = 0; s < a.length; s++)
        Fs.call(r, a[s]) && (n[a[s]] = r[a[s]]);
    }
  }
  return n;
}, Cn = {}, Pn = {}, Et = {}, xr = {};
Object.defineProperty(xr, "__esModule", { value: !0 });
function Hs(e) {
  return typeof e == "function";
}
xr.isFunction = Hs;
var Tr = {}, Jt = {};
Object.defineProperty(Jt, "__esModule", { value: !0 });
var Lr = !1;
Jt.config = {
  Promise: void 0,
  set useDeprecatedSynchronousErrorHandling(e) {
    if (e) {
      var t = new Error();
      console.warn(`DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: 
` + t.stack);
    } else
      Lr && console.log("RxJS: Back to a better error behavior. Thank you. <3");
    Lr = e;
  },
  get useDeprecatedSynchronousErrorHandling() {
    return Lr;
  }
};
var Sr = {};
Object.defineProperty(Sr, "__esModule", { value: !0 });
function Vs(e) {
  setTimeout(function() {
    throw e;
  }, 0);
}
Sr.hostReportError = Vs;
Object.defineProperty(Tr, "__esModule", { value: !0 });
var zs = Jt, Gs = Sr;
Tr.empty = {
  closed: !0,
  next: function(e) {
  },
  error: function(e) {
    if (zs.config.useDeprecatedSynchronousErrorHandling)
      throw e;
    Gs.hostReportError(e);
  },
  complete: function() {
  }
};
var Rn = {}, In = {};
Object.defineProperty(In, "__esModule", { value: !0 });
In.isArray = function() {
  return Array.isArray || function(e) {
    return e && typeof e.length == "number";
  };
}();
var jn = {};
Object.defineProperty(jn, "__esModule", { value: !0 });
function Xs(e) {
  return e !== null && typeof e == "object";
}
jn.isObject = Xs;
var Dn = {};
Object.defineProperty(Dn, "__esModule", { value: !0 });
var Qs = function() {
  function e(t) {
    return Error.call(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(r, n) {
      return n + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t, this;
  }
  return e.prototype = Object.create(Error.prototype), e;
}();
Dn.UnsubscriptionError = Qs;
Object.defineProperty(Rn, "__esModule", { value: !0 });
var Js = In, Zs = jn, Ks = xr, sr = Dn, eu = function() {
  function e(t) {
    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._ctorUnsubscribe = !0, this._unsubscribe = t);
  }
  return e.prototype.unsubscribe = function() {
    var t;
    if (!this.closed) {
      var r = this, n = r._parentOrParents, a = r._ctorUnsubscribe, o = r._unsubscribe, i = r._subscriptions;
      if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof e)
        n.remove(this);
      else if (n !== null)
        for (var s = 0; s < n.length; ++s) {
          var c = n[s];
          c.remove(this);
        }
      if (Ks.isFunction(o)) {
        a && (this._unsubscribe = void 0);
        try {
          o.call(this);
        } catch (l) {
          t = l instanceof sr.UnsubscriptionError ? ha(l.errors) : [l];
        }
      }
      if (Js.isArray(i))
        for (var s = -1, u = i.length; ++s < u; ) {
          var d = i[s];
          if (Zs.isObject(d))
            try {
              d.unsubscribe();
            } catch (h) {
              t = t || [], h instanceof sr.UnsubscriptionError ? t = t.concat(ha(h.errors)) : t.push(h);
            }
        }
      if (t)
        throw new sr.UnsubscriptionError(t);
    }
  }, e.prototype.add = function(t) {
    var r = t;
    if (!t)
      return e.EMPTY;
    switch (typeof t) {
      case "function":
        r = new e(t);
      case "object":
        if (r === this || r.closed || typeof r.unsubscribe != "function")
          return r;
        if (this.closed)
          return r.unsubscribe(), r;
        if (!(r instanceof e)) {
          var n = r;
          r = new e(), r._subscriptions = [n];
        }
        break;
      default:
        throw new Error("unrecognized teardown " + t + " added to Subscription.");
    }
    var a = r._parentOrParents;
    if (a === null)
      r._parentOrParents = this;
    else if (a instanceof e) {
      if (a === this)
        return r;
      r._parentOrParents = [a, this];
    } else if (a.indexOf(this) === -1)
      a.push(this);
    else
      return r;
    var o = this._subscriptions;
    return o === null ? this._subscriptions = [r] : o.push(r), r;
  }, e.prototype.remove = function(t) {
    var r = this._subscriptions;
    if (r) {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    }
  }, e.EMPTY = function(t) {
    return t.closed = !0, t;
  }(new e()), e;
}();
Rn.Subscription = eu;
function ha(e) {
  return e.reduce(function(t, r) {
    return t.concat(r instanceof sr.UnsubscriptionError ? r.errors : r);
  }, []);
}
var kn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.rxSubscriber = function() {
    return typeof Symbol == "function" ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
  }(), e.$$rxSubscriber = e.rxSubscriber;
})(kn);
var yo = He && He.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var o in a)
        a.hasOwnProperty(o) && (n[o] = a[o]);
    }, e(t, r);
  };
  return function(t, r) {
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(Et, "__esModule", { value: !0 });
var pa = xr, cn = Tr, tu = Rn, ru = kn, Ct = Jt, tr = Sr, bo = function(e) {
  yo(t, e);
  function t(r, n, a) {
    var o = e.call(this) || this;
    switch (o.syncErrorValue = null, o.syncErrorThrown = !1, o.syncErrorThrowable = !1, o.isStopped = !1, arguments.length) {
      case 0:
        o.destination = cn.empty;
        break;
      case 1:
        if (!r) {
          o.destination = cn.empty;
          break;
        }
        if (typeof r == "object") {
          r instanceof t ? (o.syncErrorThrowable = r.syncErrorThrowable, o.destination = r, r.add(o)) : (o.syncErrorThrowable = !0, o.destination = new ln(o, r));
          break;
        }
      default:
        o.syncErrorThrowable = !0, o.destination = new ln(o, r, n, a);
        break;
    }
    return o;
  }
  return t.prototype[ru.rxSubscriber] = function() {
    return this;
  }, t.create = function(r, n, a) {
    var o = new t(r, n, a);
    return o.syncErrorThrowable = !1, o;
  }, t.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, t.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this));
  }, t.prototype._next = function(r) {
    this.destination.next(r);
  }, t.prototype._error = function(r) {
    this.destination.error(r), this.unsubscribe();
  }, t.prototype._complete = function() {
    this.destination.complete(), this.unsubscribe();
  }, t.prototype._unsubscribeAndRecycle = function() {
    var r = this._parentOrParents;
    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = r, this;
  }, t;
}(tu.Subscription);
Et.Subscriber = bo;
var ln = function(e) {
  yo(t, e);
  function t(r, n, a, o) {
    var i = e.call(this) || this;
    i._parentSubscriber = r;
    var s, c = i;
    return pa.isFunction(n) ? s = n : n && (s = n.next, a = n.error, o = n.complete, n !== cn.empty && (c = Object.create(n), pa.isFunction(c.unsubscribe) && i.add(c.unsubscribe.bind(c)), c.unsubscribe = i.unsubscribe.bind(i))), i._context = c, i._next = s, i._error = a, i._complete = o, i;
  }
  return t.prototype.next = function(r) {
    if (!this.isStopped && this._next) {
      var n = this._parentSubscriber;
      !Ct.config.useDeprecatedSynchronousErrorHandling || !n.syncErrorThrowable ? this.__tryOrUnsub(this._next, r) : this.__tryOrSetError(n, this._next, r) && this.unsubscribe();
    }
  }, t.prototype.error = function(r) {
    if (!this.isStopped) {
      var n = this._parentSubscriber, a = Ct.config.useDeprecatedSynchronousErrorHandling;
      if (this._error)
        !a || !n.syncErrorThrowable ? (this.__tryOrUnsub(this._error, r), this.unsubscribe()) : (this.__tryOrSetError(n, this._error, r), this.unsubscribe());
      else if (n.syncErrorThrowable)
        a ? (n.syncErrorValue = r, n.syncErrorThrown = !0) : tr.hostReportError(r), this.unsubscribe();
      else {
        if (this.unsubscribe(), a)
          throw r;
        tr.hostReportError(r);
      }
    }
  }, t.prototype.complete = function() {
    var r = this;
    if (!this.isStopped) {
      var n = this._parentSubscriber;
      if (this._complete) {
        var a = function() {
          return r._complete.call(r._context);
        };
        !Ct.config.useDeprecatedSynchronousErrorHandling || !n.syncErrorThrowable ? (this.__tryOrUnsub(a), this.unsubscribe()) : (this.__tryOrSetError(n, a), this.unsubscribe());
      } else
        this.unsubscribe();
    }
  }, t.prototype.__tryOrUnsub = function(r, n) {
    try {
      r.call(this._context, n);
    } catch (a) {
      if (this.unsubscribe(), Ct.config.useDeprecatedSynchronousErrorHandling)
        throw a;
      tr.hostReportError(a);
    }
  }, t.prototype.__tryOrSetError = function(r, n, a) {
    if (!Ct.config.useDeprecatedSynchronousErrorHandling)
      throw new Error("bad call");
    try {
      n.call(this._context, a);
    } catch (o) {
      return Ct.config.useDeprecatedSynchronousErrorHandling ? (r.syncErrorValue = o, r.syncErrorThrown = !0, !0) : (tr.hostReportError(o), !0);
    }
    return !1;
  }, t.prototype._unsubscribe = function() {
    var r = this._parentSubscriber;
    this._context = null, this._parentSubscriber = null, r.unsubscribe();
  }, t;
}(bo);
Et.SafeSubscriber = ln;
Object.defineProperty(Pn, "__esModule", { value: !0 });
var nu = Et;
function au(e) {
  for (; e; ) {
    var t = e, r = t.closed, n = t.destination, a = t.isStopped;
    if (r || a)
      return !1;
    n && n instanceof nu.Subscriber ? e = n : e = null;
  }
  return !0;
}
Pn.canReportError = au;
var An = {};
Object.defineProperty(An, "__esModule", { value: !0 });
var qr = Et, va = kn, ou = Tr;
function iu(e, t, r) {
  if (e) {
    if (e instanceof qr.Subscriber)
      return e;
    if (e[va.rxSubscriber])
      return e[va.rxSubscriber]();
  }
  return !e && !t && !r ? new qr.Subscriber(ou.empty) : new qr.Subscriber(e, t, r);
}
An.toSubscriber = iu;
var Nn = {};
Object.defineProperty(Nn, "__esModule", { value: !0 });
Nn.observable = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var Cr = {}, Mn = {};
Object.defineProperty(Mn, "__esModule", { value: !0 });
function su(e) {
  return e;
}
Mn.identity = su;
Object.defineProperty(Cr, "__esModule", { value: !0 });
var uu = Mn;
function cu() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return wo(e);
}
Cr.pipe = cu;
function wo(e) {
  return e.length === 0 ? uu.identity : e.length === 1 ? e[0] : function(r) {
    return e.reduce(function(n, a) {
      return a(n);
    }, r);
  };
}
Cr.pipeFromArray = wo;
Object.defineProperty(Cn, "__esModule", { value: !0 });
var lu = Pn, fu = An, du = Nn, hu = Cr, ur = Jt, pu = function() {
  function e(t) {
    this._isScalar = !1, t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var r = new e();
    return r.source = this, r.operator = t, r;
  }, e.prototype.subscribe = function(t, r, n) {
    var a = this.operator, o = fu.toSubscriber(t, r, n);
    if (a ? o.add(a.call(o, this.source)) : o.add(this.source || ur.config.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), ur.config.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown))
      throw o.syncErrorValue;
    return o;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (r) {
      ur.config.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = r), lu.canReportError(t) ? t.error(r) : console.warn(r);
    }
  }, e.prototype.forEach = function(t, r) {
    var n = this;
    return r = ma(r), new r(function(a, o) {
      var i;
      i = n.subscribe(function(s) {
        try {
          t(s);
        } catch (c) {
          o(c), i && i.unsubscribe();
        }
      }, o, a);
    });
  }, e.prototype._subscribe = function(t) {
    var r = this.source;
    return r && r.subscribe(t);
  }, e.prototype[du.observable] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return t.length === 0 ? this : hu.pipeFromArray(t)(this);
  }, e.prototype.toPromise = function(t) {
    var r = this;
    return t = ma(t), new t(function(n, a) {
      var o;
      r.subscribe(function(i) {
        return o = i;
      }, function(i) {
        return a(i);
      }, function() {
        return n(o);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
Cn.Observable = pu;
function ma(e) {
  if (e || (e = ur.config.Promise || Promise), !e)
    throw new Error("no Promise impl found");
  return e;
}
var $n = {}, vu = He && He.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var o in a)
        a.hasOwnProperty(o) && (n[o] = a[o]);
    }, e(t, r);
  };
  return function(t, r) {
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty($n, "__esModule", { value: !0 });
var mu = Et;
function gu(e, t) {
  return function(n) {
    return n.lift(new yu(e, t));
  };
}
$n.filter = gu;
var yu = function() {
  function e(t, r) {
    this.predicate = t, this.thisArg = r;
  }
  return e.prototype.call = function(t, r) {
    return r.subscribe(new bu(t, this.predicate, this.thisArg));
  }, e;
}(), bu = function(e) {
  vu(t, e);
  function t(r, n, a) {
    var o = e.call(this, r) || this;
    return o.predicate = n, o.thisArg = a, o.count = 0, o;
  }
  return t.prototype._next = function(r) {
    var n;
    try {
      n = this.predicate.call(this.thisArg, r, this.count++);
    } catch (a) {
      this.destination.error(a);
      return;
    }
    n && this.destination.next(r);
  }, t;
}(mu.Subscriber), Pr = {}, wu = He && He.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var o in a)
        a.hasOwnProperty(o) && (n[o] = a[o]);
    }, e(t, r);
  };
  return function(t, r) {
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(Pr, "__esModule", { value: !0 });
var Eu = Et;
function _u(e, t) {
  return function(n) {
    if (typeof e != "function")
      throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
    return n.lift(new Eo(e, t));
  };
}
Pr.map = _u;
var Eo = function() {
  function e(t, r) {
    this.project = t, this.thisArg = r;
  }
  return e.prototype.call = function(t, r) {
    return r.subscribe(new Ou(t, this.project, this.thisArg));
  }, e;
}();
Pr.MapOperator = Eo;
var Ou = function(e) {
  wu(t, e);
  function t(r, n, a) {
    var o = e.call(this, r) || this;
    return o.project = n, o.count = 0, o.thisArg = a || o, o;
  }
  return t.prototype._next = function(r) {
    var n;
    try {
      n = this.project.call(this.thisArg, r, this.count++);
    } catch (a) {
      this.destination.error(a);
      return;
    }
    this.destination.next(n);
  }, t;
}(Eu.Subscriber), xu = Cn, Tu = xu.Observable, Su = $n, Cu = Su.filter, Pu = Pr, Ru = Pu.map, Zt = {
  Observable: Tu,
  filter: Cu,
  map: Ru
}, _o = function(t) {
  if (typeof t == "string" || Array.isArray(t))
    return {
      id: t
    };
  if (t && t.query)
    return "params" in t ? {
      query: t.query,
      params: t.params
    } : {
      query: t.query
    };
  var r = ["* Document ID (<docId>)", "* Array of document IDs", "* Object containing `query`"].join(`
`);
  throw new Error(`Unknown selection - must be one of:

`.concat(r));
}, ht = {};
(function(e) {
  function t(a) {
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
      return typeof o;
    } : function(o) {
      return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, t(a);
  }
  var r = ["image", "file"], n = ["before", "after", "replace"];
  e.dataset = function(a) {
    if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(a))
      throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters");
  }, e.projectId = function(a) {
    if (!/^[-a-z0-9]+$/i.test(a))
      throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
  }, e.validateAssetType = function(a) {
    if (r.indexOf(a) === -1)
      throw new Error("Invalid asset type: ".concat(a, ". Must be one of ").concat(r.join(", ")));
  }, e.validateObject = function(a, o) {
    if (o === null || t(o) !== "object" || Array.isArray(o))
      throw new Error("".concat(a, "() takes an object of properties"));
  }, e.requireDocumentId = function(a, o) {
    if (!o._id)
      throw new Error("".concat(a, '() requires that the document contains an ID ("_id" property)'));
    e.validateDocumentId(a, o._id);
  }, e.validateDocumentId = function(a, o) {
    if (typeof o != "string" || !/^[a-z0-9_.-]+$/i.test(o))
      throw new Error("".concat(a, '(): "').concat(o, '" is not a valid document ID'));
  }, e.validateInsert = function(a, o, i) {
    var s = "insert(at, selector, items)";
    if (n.indexOf(a) === -1) {
      var c = n.map(function(u) {
        return '"'.concat(u, '"');
      }).join(", ");
      throw new Error("".concat(s, ' takes an "at"-argument which is one of: ').concat(c));
    }
    if (typeof o != "string")
      throw new Error("".concat(s, ' takes a "selector"-argument which must be a string'));
    if (!Array.isArray(i))
      throw new Error("".concat(s, ' takes an "items"-argument which must be an array'));
  }, e.hasDataset = function(a) {
    if (!a.dataset)
      throw new Error("`dataset` must be provided to perform queries");
    return a.dataset || "";
  }, e.requestTag = function(a) {
    if (typeof a != "string" || !/^[a-z0-9._-]{1,75}$/i.test(a))
      throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
    return a;
  };
})(ht);
function Wr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var st = Oe, Iu = _o, Oo = ht, Fr = Oo.validateObject, ju = Oo.validateInsert;
function fn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  this.selection = e, this.operations = st({}, t), this.client = r;
}
st(fn.prototype, {
  clone: function() {
    return new fn(this.selection, st({}, this.operations), this.client);
  },
  set: function(t) {
    return this._assign("set", t);
  },
  diffMatchPatch: function(t) {
    return Fr("diffMatchPatch", t), this._assign("diffMatchPatch", t);
  },
  unset: function(t) {
    if (!Array.isArray(t))
      throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
    return this.operations = st({}, this.operations, {
      unset: t
    }), this;
  },
  setIfMissing: function(t) {
    return this._assign("setIfMissing", t);
  },
  replace: function(t) {
    return Fr("replace", t), this._set("set", {
      $: t
    });
  },
  inc: function(t) {
    return this._assign("inc", t);
  },
  dec: function(t) {
    return this._assign("dec", t);
  },
  insert: function(t, r, n) {
    var a;
    return ju(t, r, n), this._assign("insert", (a = {}, Wr(a, t, r), Wr(a, "items", n), a));
  },
  append: function(t, r) {
    return this.insert("after", "".concat(t, "[-1]"), r);
  },
  prepend: function(t, r) {
    return this.insert("before", "".concat(t, "[0]"), r);
  },
  splice: function(t, r, n, a) {
    var o = typeof n > "u" || n === -1, i = r < 0 ? r - 1 : r, s = o ? -1 : Math.max(0, r + n), c = i < 0 && s >= 0 ? "" : s, u = "".concat(t, "[").concat(i, ":").concat(c, "]");
    return this.insert("replace", u, a || []);
  },
  ifRevisionId: function(t) {
    return this.operations.ifRevisionID = t, this;
  },
  serialize: function() {
    return st(Iu(this.selection), this.operations);
  },
  toJSON: function() {
    return this.serialize();
  },
  commit: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.client)
      throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
    var r = typeof this.selection == "string", n = st({
      returnFirst: r,
      returnDocuments: !0
    }, t);
    return this.client.mutate({
      patch: this.serialize()
    }, n);
  },
  reset: function() {
    return this.operations = {}, this;
  },
  _set: function(t, r) {
    return this._assign(t, r, !1);
  },
  _assign: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    return Fr(t, r), this.operations = st({}, this.operations, Wr({}, t, st({}, n && this.operations[t] || {}, r))), this;
  }
});
var Un = fn;
function ga(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Br = Oe, Pt = ht, Yr = Un, Du = {
  returnDocuments: !1
};
function dn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0;
  this.trxId = r, this.operations = e, this.client = t;
}
Br(dn.prototype, {
  clone: function() {
    return new dn(this.operations.slice(0), this.client, this.trxId);
  },
  create: function(t) {
    return Pt.validateObject("create", t), this._add({
      create: t
    });
  },
  createIfNotExists: function(t) {
    var r = "createIfNotExists";
    return Pt.validateObject(r, t), Pt.requireDocumentId(r, t), this._add(ga({}, r, t));
  },
  createOrReplace: function(t) {
    var r = "createOrReplace";
    return Pt.validateObject(r, t), Pt.requireDocumentId(r, t), this._add(ga({}, r, t));
  },
  delete: function(t) {
    return Pt.validateDocumentId("delete", t), this._add({
      delete: {
        id: t
      }
    });
  },
  patch: function(t, r) {
    var n = typeof r == "function", a = t instanceof Yr;
    if (a)
      return this._add({
        patch: t.serialize()
      });
    if (n) {
      var o = r(new Yr(t, {}, this.client));
      if (!(o instanceof Yr))
        throw new Error("function passed to `patch()` must return the patch");
      return this._add({
        patch: o.serialize()
      });
    }
    return this._add({
      patch: Br({
        id: t
      }, r)
    });
  },
  transactionId: function(t) {
    return t ? (this.trxId = t, this) : this.trxId;
  },
  serialize: function() {
    return this.operations.slice();
  },
  toJSON: function() {
    return this.serialize();
  },
  commit: function(t) {
    if (!this.client)
      throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
    return this.client.mutate(this.serialize(), Br({
      transactionId: this.trxId
    }, Du, t || {}));
  },
  reset: function() {
    return this.operations = [], this;
  },
  _add: function(t) {
    return this.operations.push(t), this;
  }
});
var xo = dn, ku = ["tag"];
function Au(e, t) {
  if (e == null)
    return {};
  var r = Nu(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Nu(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Rt = encodeURIComponent, To = function(e) {
  var t = e.query, r = e.params, n = r === void 0 ? {} : r, a = e.options, o = a === void 0 ? {} : a, i = o.tag, s = Au(o, ku), c = "query=".concat(Rt(t)), u = i ? "?tag=".concat(Rt(i), "&").concat(c) : "?".concat(c), d = Object.keys(n).reduce(function(l, h) {
    return "".concat(l, "&").concat(Rt("$".concat(h)), "=").concat(Rt(JSON.stringify(n[h])));
  }, u);
  return Object.keys(s).reduce(function(l, h) {
    return o[h] ? "".concat(l, "&").concat(Rt(h), "=").concat(Rt(o[h])) : l;
  }, d);
}, dr = {}, Mu = {
  get exports() {
    return dr;
  },
  set exports(e) {
    dr = e;
  }
};
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */
(function(e, t) {
  (function(r) {
    var n = r.setTimeout, a = r.clearTimeout, o = r.XMLHttpRequest, i = r.XDomainRequest, s = r.ActiveXObject, c = r.EventSource, u = r.document, d = r.Promise, l = r.fetch, h = r.Response, v = r.TextDecoder, _ = r.TextEncoder, g = r.AbortController;
    if (typeof window < "u" && typeof u < "u" && !("readyState" in u) && u.body == null && (u.readyState = "loading", window.addEventListener("load", function(m) {
      u.readyState = "complete";
    }, !1)), o == null && s != null && (o = function() {
      return new s("Microsoft.XMLHTTP");
    }), Object.create == null && (Object.create = function(m) {
      function C() {
      }
      return C.prototype = m, new C();
    }), Date.now || (Date.now = function() {
      return (/* @__PURE__ */ new Date()).getTime();
    }), g == null) {
      var y = l;
      l = function(m, C) {
        var D = C.signal;
        return y(m, { headers: C.headers, credentials: C.credentials, cache: C.cache }).then(function(T) {
          var $ = T.body.getReader();
          return D._reader = $, D._aborted && D._reader.cancel(), {
            status: T.status,
            statusText: T.statusText,
            headers: T.headers,
            body: {
              getReader: function() {
                return $;
              }
            }
          };
        });
      }, g = function() {
        this.signal = {
          _reader: null,
          _aborted: !1
        }, this.abort = function() {
          this.signal._reader != null && this.signal._reader.cancel(), this.signal._aborted = !0;
        };
      };
    }
    function p() {
      this.bitsNeeded = 0, this.codePoint = 0;
    }
    p.prototype.decode = function(m) {
      function C(re, ue, N) {
        if (N === 1)
          return re >= 128 >> ue && re << ue <= 2047;
        if (N === 2)
          return re >= 2048 >> ue && re << ue <= 55295 || re >= 57344 >> ue && re << ue <= 65535;
        if (N === 3)
          return re >= 65536 >> ue && re << ue <= 1114111;
        throw new Error();
      }
      function D(re, ue) {
        if (re === 6 * 1)
          return ue >> 6 > 15 ? 3 : ue > 31 ? 2 : 1;
        if (re === 6 * 2)
          return ue > 15 ? 3 : 2;
        if (re === 6 * 3)
          return 3;
        throw new Error();
      }
      for (var T = 65533, $ = "", A = this.bitsNeeded, H = this.codePoint, he = 0; he < m.length; he += 1) {
        var Q = m[he];
        A !== 0 && (Q < 128 || Q > 191 || !C(H << 6 | Q & 63, A - 6, D(A, H))) && (A = 0, H = T, $ += String.fromCharCode(H)), A === 0 ? (Q >= 0 && Q <= 127 ? (A = 0, H = Q) : Q >= 192 && Q <= 223 ? (A = 6 * 1, H = Q & 31) : Q >= 224 && Q <= 239 ? (A = 6 * 2, H = Q & 15) : Q >= 240 && Q <= 247 ? (A = 6 * 3, H = Q & 7) : (A = 0, H = T), A !== 0 && !C(H, A, D(A, H)) && (A = 0, H = T)) : (A -= 6, H = H << 6 | Q & 63), A === 0 && (H <= 65535 ? $ += String.fromCharCode(H) : ($ += String.fromCharCode(55296 + (H - 65535 - 1 >> 10)), $ += String.fromCharCode(56320 + (H - 65535 - 1 & 1023))));
      }
      return this.bitsNeeded = A, this.codePoint = H, $;
    };
    var x = function() {
      try {
        return new v().decode(new _().encode("test"), { stream: !0 }) === "test";
      } catch (m) {
        console.debug("TextDecoder does not support streaming option. Using polyfill instead: " + m);
      }
      return !1;
    };
    (v == null || _ == null || !x()) && (v = p);
    var j = function() {
    };
    function k(m) {
      this.withCredentials = !1, this.readyState = 0, this.status = 0, this.statusText = "", this.responseText = "", this.onprogress = j, this.onload = j, this.onerror = j, this.onreadystatechange = j, this._contentType = "", this._xhr = m, this._sendTimeout = 0, this._abort = j;
    }
    k.prototype.open = function(m, C) {
      this._abort(!0);
      var D = this, T = this._xhr, $ = 1, A = 0;
      this._abort = function(N) {
        D._sendTimeout !== 0 && (a(D._sendTimeout), D._sendTimeout = 0), ($ === 1 || $ === 2 || $ === 3) && ($ = 4, T.onload = j, T.onerror = j, T.onabort = j, T.onprogress = j, T.onreadystatechange = j, T.abort(), A !== 0 && (a(A), A = 0), N || (D.readyState = 4, D.onabort(null), D.onreadystatechange())), $ = 0;
      };
      var H = function() {
        if ($ === 1) {
          var N = 0, pe = "", qe = void 0;
          if ("contentType" in T)
            N = 200, pe = "OK", qe = T.contentType;
          else
            try {
              N = T.status, pe = T.statusText, qe = T.getResponseHeader("Content-Type");
            } catch {
              N = 0, pe = "", qe = void 0;
            }
          N !== 0 && ($ = 2, D.readyState = 2, D.status = N, D.statusText = pe, D._contentType = qe, D.onreadystatechange());
        }
      }, he = function() {
        if (H(), $ === 2 || $ === 3) {
          $ = 3;
          var N = "";
          try {
            N = T.responseText;
          } catch {
          }
          D.readyState = 3, D.responseText = N, D.onprogress();
        }
      }, Q = function(N, pe) {
        if ((pe == null || pe.preventDefault == null) && (pe = {
          preventDefault: j
        }), he(), $ === 1 || $ === 2 || $ === 3) {
          if ($ = 4, A !== 0 && (a(A), A = 0), D.readyState = 4, N === "load")
            D.onload(pe);
          else if (N === "error")
            D.onerror(pe);
          else if (N === "abort")
            D.onabort(pe);
          else
            throw new TypeError();
          D.onreadystatechange();
        }
      }, re = function(N) {
        T != null && (T.readyState === 4 ? (!("onload" in T) || !("onerror" in T) || !("onabort" in T)) && Q(T.responseText === "" ? "error" : "load", N) : T.readyState === 3 ? "onprogress" in T || he() : T.readyState === 2 && H());
      }, ue = function() {
        A = n(function() {
          ue();
        }, 500), T.readyState === 3 && he();
      };
      "onload" in T && (T.onload = function(N) {
        Q("load", N);
      }), "onerror" in T && (T.onerror = function(N) {
        Q("error", N);
      }), "onabort" in T && (T.onabort = function(N) {
        Q("abort", N);
      }), "onprogress" in T && (T.onprogress = he), "onreadystatechange" in T && (T.onreadystatechange = function(N) {
        re(N);
      }), ("contentType" in T || !("ontimeout" in o.prototype)) && (C += (C.indexOf("?") === -1 ? "?" : "&") + "padding=true"), T.open(m, C, !0), "readyState" in T && (A = n(function() {
        ue();
      }, 0));
    }, k.prototype.abort = function() {
      this._abort(!1);
    }, k.prototype.getResponseHeader = function(m) {
      return this._contentType;
    }, k.prototype.setRequestHeader = function(m, C) {
      var D = this._xhr;
      "setRequestHeader" in D && D.setRequestHeader(m, C);
    }, k.prototype.getAllResponseHeaders = function() {
      return this._xhr.getAllResponseHeaders != null && this._xhr.getAllResponseHeaders() || "";
    }, k.prototype.send = function() {
      if ((!("ontimeout" in o.prototype) || !("sendAsBinary" in o.prototype) && !("mozAnon" in o.prototype)) && u != null && u.readyState != null && u.readyState !== "complete") {
        var m = this;
        m._sendTimeout = n(function() {
          m._sendTimeout = 0, m.send();
        }, 4);
        return;
      }
      var C = this._xhr;
      "withCredentials" in C && (C.withCredentials = this.withCredentials);
      try {
        C.send(void 0);
      } catch (D) {
        throw D;
      }
    };
    function O(m) {
      return m.replace(/[A-Z]/g, function(C) {
        return String.fromCharCode(C.charCodeAt(0) + 32);
      });
    }
    function ne(m) {
      for (var C = /* @__PURE__ */ Object.create(null), D = m.split(`\r
`), T = 0; T < D.length; T += 1) {
        var $ = D[T], A = $.split(": "), H = A.shift(), he = A.join(": ");
        C[O(H)] = he;
      }
      this._map = C;
    }
    ne.prototype.get = function(m) {
      return this._map[O(m)];
    }, o != null && o.HEADERS_RECEIVED == null && (o.HEADERS_RECEIVED = 2);
    function me() {
    }
    me.prototype.open = function(m, C, D, T, $, A, H) {
      m.open("GET", $);
      var he = 0;
      m.onprogress = function() {
        var re = m.responseText, ue = re.slice(he);
        he += ue.length, D(ue);
      }, m.onerror = function(re) {
        re.preventDefault(), T(new Error("NetworkError"));
      }, m.onload = function() {
        T(null);
      }, m.onabort = function() {
        T(null);
      }, m.onreadystatechange = function() {
        if (m.readyState === o.HEADERS_RECEIVED) {
          var re = m.status, ue = m.statusText, N = m.getResponseHeader("Content-Type"), pe = m.getAllResponseHeaders();
          C(re, ue, N, new ne(pe));
        }
      }, m.withCredentials = A;
      for (var Q in H)
        Object.prototype.hasOwnProperty.call(H, Q) && m.setRequestHeader(Q, H[Q]);
      return m.send(), m;
    };
    function xe(m) {
      this._headers = m;
    }
    xe.prototype.get = function(m) {
      return this._headers.get(m);
    };
    function ee() {
    }
    ee.prototype.open = function(m, C, D, T, $, A, H) {
      var he = null, Q = new g(), re = Q.signal, ue = new v();
      return l($, {
        headers: H,
        credentials: A ? "include" : "same-origin",
        signal: re,
        cache: "no-store"
      }).then(function(N) {
        return he = N.body.getReader(), C(N.status, N.statusText, N.headers.get("Content-Type"), new xe(N.headers)), new d(function(pe, qe) {
          var tt = function() {
            he.read().then(function(Se) {
              if (Se.done)
                pe(void 0);
              else {
                var Ce = ue.decode(Se.value, { stream: !0 });
                D(Ce), tt();
              }
            }).catch(function(Se) {
              qe(Se);
            });
          };
          tt();
        });
      }).catch(function(N) {
        if (N.name !== "AbortError")
          return N;
      }).then(function(N) {
        T(N);
      }), {
        abort: function() {
          he != null && he.cancel(), Q.abort();
        }
      };
    };
    function se() {
      this._listeners = /* @__PURE__ */ Object.create(null);
    }
    function Ae(m) {
      n(function() {
        throw m;
      }, 0);
    }
    se.prototype.dispatchEvent = function(m) {
      m.target = this;
      var C = this._listeners[m.type];
      if (C != null)
        for (var D = C.length, T = 0; T < D; T += 1) {
          var $ = C[T];
          try {
            typeof $.handleEvent == "function" ? $.handleEvent(m) : $.call(this, m);
          } catch (A) {
            Ae(A);
          }
        }
    }, se.prototype.addEventListener = function(m, C) {
      m = String(m);
      var D = this._listeners, T = D[m];
      T == null && (T = [], D[m] = T);
      for (var $ = !1, A = 0; A < T.length; A += 1)
        T[A] === C && ($ = !0);
      $ || T.push(C);
    }, se.prototype.removeEventListener = function(m, C) {
      m = String(m);
      var D = this._listeners, T = D[m];
      if (T != null) {
        for (var $ = [], A = 0; A < T.length; A += 1)
          T[A] !== C && $.push(T[A]);
        $.length === 0 ? delete D[m] : D[m] = $;
      }
    };
    function Te(m) {
      this.type = m, this.target = void 0;
    }
    function we(m, C) {
      Te.call(this, m), this.data = C.data, this.lastEventId = C.lastEventId;
    }
    we.prototype = Object.create(Te.prototype);
    function K(m, C) {
      Te.call(this, m), this.status = C.status, this.statusText = C.statusText, this.headers = C.headers;
    }
    K.prototype = Object.create(Te.prototype);
    function te(m, C) {
      Te.call(this, m), this.error = C.error;
    }
    te.prototype = Object.create(Te.prototype);
    var de = -1, ve = 0, Ne = 1, Le = 2, w = -1, P = 0, W = 1, F = 2, U = 3, X = /^text\/event\-stream(;.*)?$/i, q = 1e3, B = 18e6, Y = function(m, C) {
      var D = m == null ? C : parseInt(m, 10);
      return D !== D && (D = C), G(D);
    }, G = function(m) {
      return Math.min(Math.max(m, q), B);
    }, L = function(m, C, D) {
      try {
        typeof C == "function" && C.call(m, D);
      } catch (T) {
        Ae(T);
      }
    };
    function le(m, C) {
      se.call(this), C = C || {}, this.onopen = void 0, this.onmessage = void 0, this.onerror = void 0, this.url = void 0, this.readyState = void 0, this.withCredentials = void 0, this.headers = void 0, this._close = void 0, et(this, m, C);
    }
    function R() {
      return o != null && "withCredentials" in o.prototype || i == null ? new o() : new i();
    }
    var Me = l != null && h != null && "body" in h.prototype;
    function et(m, C, D) {
      C = String(C);
      var T = !!D.withCredentials, $ = D.lastEventIdQueryParameterName || "lastEventId", A = G(1e3), H = Y(D.heartbeatTimeout, 45e3), he = "", Q = A, re = !1, ue = 0, N = D.headers || {}, pe = D.Transport, qe = Me && pe == null ? void 0 : new k(pe != null ? new pe() : R()), tt = pe != null && typeof pe != "string" ? new pe() : qe == null ? new ee() : new me(), Se = void 0, Ce = 0, $e = de, rt = "", _t = "", Be = "", Ot = "", Pe = P, pt = 0, ze = 0, nt = function(ge, ye, Ie, je) {
        if ($e === ve)
          if (ge === 200 && Ie != null && X.test(Ie)) {
            $e = Ne, re = Date.now(), Q = A, m.readyState = Ne;
            var Re = new K("open", {
              status: ge,
              statusText: ye,
              headers: je
            });
            m.dispatchEvent(Re), L(m, m.onopen, Re);
          } else {
            var _e = "";
            ge !== 200 ? (ye && (ye = ye.replace(/\s+/g, " ")), _e = "EventSource's response has a status " + ge + " " + ye + " that is not 200. Aborting the connection.") : _e = "EventSource's response has a Content-Type specifying an unsupported type: " + (Ie == null ? "-" : Ie.replace(/\s+/g, " ")) + ". Aborting the connection.", Tt();
            var Re = new K("error", {
              status: ge,
              statusText: ye,
              headers: je
            });
            m.dispatchEvent(Re), L(m, m.onerror, Re), console.error(_e);
          }
      }, Mt = function(ge) {
        if ($e === Ne) {
          for (var ye = -1, Ie = 0; Ie < ge.length; Ie += 1) {
            var je = ge.charCodeAt(Ie);
            (je === `
`.charCodeAt(0) || je === "\r".charCodeAt(0)) && (ye = Ie);
          }
          var Re = (ye !== -1 ? Ot : "") + ge.slice(0, ye + 1);
          Ot = (ye === -1 ? Ot : "") + ge.slice(ye + 1), ge !== "" && (re = Date.now(), ue += ge.length);
          for (var _e = 0; _e < Re.length; _e += 1) {
            var je = Re.charCodeAt(_e);
            if (Pe === w && je === `
`.charCodeAt(0))
              Pe = P;
            else if (Pe === w && (Pe = P), je === "\r".charCodeAt(0) || je === `
`.charCodeAt(0)) {
              if (Pe !== P) {
                Pe === W && (ze = _e + 1);
                var We = Re.slice(pt, ze - 1), Ye = Re.slice(ze + (ze < _e && Re.charCodeAt(ze) === " ".charCodeAt(0) ? 1 : 0), _e);
                We === "data" ? (rt += `
`, rt += Ye) : We === "id" ? _t = Ye : We === "event" ? Be = Ye : We === "retry" ? (A = Y(Ye, A), Q = A) : We === "heartbeatTimeout" && (H = Y(Ye, H), Ce !== 0 && (a(Ce), Ce = n(function() {
                  vt();
                }, H)));
              }
              if (Pe === P) {
                if (rt !== "") {
                  he = _t, Be === "" && (Be = "message");
                  var at = new we(Be, {
                    data: rt.slice(1),
                    lastEventId: _t
                  });
                  if (m.dispatchEvent(at), Be === "open" ? L(m, m.onopen, at) : Be === "message" ? L(m, m.onmessage, at) : Be === "error" && L(m, m.onerror, at), $e === Le)
                    return;
                }
                rt = "", Be = "";
              }
              Pe = je === "\r".charCodeAt(0) ? w : P;
            } else
              Pe === P && (pt = _e, Pe = W), Pe === W ? je === ":".charCodeAt(0) && (ze = _e + 1, Pe = F) : Pe === F && (Pe = U);
          }
        }
      }, xt = function(ge) {
        if ($e === Ne || $e === ve) {
          $e = de, Ce !== 0 && (a(Ce), Ce = 0), Ce = n(function() {
            vt();
          }, Q), Q = G(Math.min(A * 16, Q * 2)), m.readyState = ve;
          var ye = new te("error", { error: ge });
          m.dispatchEvent(ye), L(m, m.onerror, ye), ge != null && console.error(ge);
        }
      }, Tt = function() {
        $e = Le, Se != null && (Se.abort(), Se = void 0), Ce !== 0 && (a(Ce), Ce = 0), m.readyState = Le;
      }, vt = function() {
        if (Ce = 0, $e !== de) {
          if (!re && Se != null)
            xt(new Error("No activity within " + H + " milliseconds. " + ($e === ve ? "No response received." : ue + " chars received.") + " Reconnecting.")), Se != null && (Se.abort(), Se = void 0);
          else {
            var ge = Math.max((re || Date.now()) + H - Date.now(), 1);
            re = !1, Ce = n(function() {
              vt();
            }, ge);
          }
          return;
        }
        re = !1, ue = 0, Ce = n(function() {
          vt();
        }, H), $e = ve, rt = "", Be = "", _t = he, Ot = "", pt = 0, ze = 0, Pe = P;
        var ye = C;
        if (C.slice(0, 5) !== "data:" && C.slice(0, 5) !== "blob:" && he !== "") {
          var Ie = C.indexOf("?");
          ye = Ie === -1 ? C : C.slice(0, Ie + 1) + C.slice(Ie + 1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g, function(Ye, at) {
            return at === $ ? "" : Ye;
          }), ye += (C.indexOf("?") === -1 ? "?" : "&") + $ + "=" + encodeURIComponent(he);
        }
        var je = m.withCredentials, Re = {};
        Re.Accept = "text/event-stream";
        var _e = m.headers;
        if (_e != null)
          for (var We in _e)
            Object.prototype.hasOwnProperty.call(_e, We) && (Re[We] = _e[We]);
        try {
          Se = tt.open(qe, nt, Mt, xt, ye, je, Re);
        } catch (Ye) {
          throw Tt(), Ye;
        }
      };
      m.url = C, m.readyState = ve, m.withCredentials = T, m.headers = N, m._close = Tt, vt();
    }
    le.prototype = Object.create(se.prototype), le.prototype.CONNECTING = ve, le.prototype.OPEN = Ne, le.prototype.CLOSED = Le, le.prototype.close = function() {
      this._close();
    }, le.CONNECTING = ve, le.OPEN = Ne, le.CLOSED = Le, le.prototype.withCredentials = void 0;
    var Ve = c;
    o != null && (c == null || !("withCredentials" in c.prototype)) && (Ve = le), function(m) {
      {
        var C = m(t);
        C !== void 0 && (e.exports = C);
      }
    }(function(m) {
      m.EventSourcePolyfill = le, m.NativeEventSource = c, m.EventSource = Ve;
    });
  })(typeof globalThis > "u" ? typeof window < "u" ? window : typeof self < "u" ? self : He : globalThis);
})(Mu, dr);
var $u = dr.EventSourcePolyfill, Uu = function(e, t) {
  return t.reduce(function(r, n) {
    return typeof e[n] > "u" || (r[n] = e[n]), r;
  }, {});
}, Lu = function(e, t) {
  return Object.keys(t).concat(Object.keys(e)).reduce(function(r, n) {
    return r[n] = typeof e[n] > "u" ? t[n] : e[n], r;
  }, {});
};
function ya(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ba(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ya(Object(r), !0).forEach(function(n) {
      qu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ya(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qu(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Wu = Oe, Fu = Zt, wa = Fu.Observable, Bu = $u, Yu = Uu, Hu = Lu, Vu = To, zu = 16e3 - 1200, Ea = Bu, Gu = ["includePreviousRevision", "includeResult", "visibility", "effectFormat", "tag"], Xu = {
  includeResult: !0
}, Qu = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = this.clientConfig, o = a.url, i = a.token, s = a.withCredentials, c = a.requestTagPrefix, u = n.tag && c ? [c, n.tag].join(".") : n.tag, d = ba(ba({}, Hu(n, Xu)), {}, {
    tag: u
  }), l = Yu(d, Gu), h = Vu({
    query: t,
    params: r,
    options: l,
    tag: u
  }), v = "".concat(o).concat(this.getDataUrl("listen", h));
  if (v.length > zu)
    return new wa(function(p) {
      return p.error(new Error("Query too large for listener"));
    });
  var _ = d.events ? d.events : ["mutation"], g = _.indexOf("reconnect") !== -1, y = {};
  return (i || s) && (y.withCredentials = !0), i && (y.headers = {
    Authorization: "Bearer ".concat(i)
  }), new wa(function(p) {
    var x = Ae(), j, k = !1;
    function O() {
      k || (se(), !k && x.readyState === Ea.CLOSED && (ee(), clearTimeout(j), j = setTimeout(Te, 100)));
    }
    function ne(K) {
      p.error(Ju(K));
    }
    function me(K) {
      var te = So(K);
      return te instanceof Error ? p.error(te) : p.next(te);
    }
    function xe(K) {
      k = !0, ee(), p.complete();
    }
    function ee() {
      x.removeEventListener("error", O, !1), x.removeEventListener("channelError", ne, !1), x.removeEventListener("disconnect", xe, !1), _.forEach(function(K) {
        return x.removeEventListener(K, me, !1);
      }), x.close();
    }
    function se() {
      g && p.next({
        type: "reconnect"
      });
    }
    function Ae() {
      var K = new Ea(v, y);
      return K.addEventListener("error", O, !1), K.addEventListener("channelError", ne, !1), K.addEventListener("disconnect", xe, !1), _.forEach(function(te) {
        return K.addEventListener(te, me, !1);
      }), K;
    }
    function Te() {
      x = Ae();
    }
    function we() {
      k = !0, ee();
    }
    return we;
  });
};
function So(e) {
  try {
    var t = e.data && JSON.parse(e.data) || {};
    return Wu({
      type: e.type
    }, t);
  } catch (r) {
    return r;
  }
}
function Ju(e) {
  if (e instanceof Error)
    return e;
  var t = So(e);
  return t instanceof Error ? t : new Error(Zu(t));
}
function Zu(e) {
  return e.error ? e.error.description ? e.error.description : typeof e.error == "string" ? e.error : JSON.stringify(e.error, null, 2) : e.message || "Unknown listener error";
}
function _a(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Ku = Oe, Co = Zt, qt = Co.map, Hr = Co.filter, Vr = ht, ec = _o, tc = To, Oa = xo, xa = Un, rc = Qu, nc = function(t, r) {
  var n = typeof t > "u" ? r : t;
  return t === !1 ? void 0 : n;
}, ac = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return {
    dryRun: t.dryRun,
    returnIds: !0,
    returnDocuments: nc(t.returnDocuments, !0),
    visibility: t.visibility || "sync",
    autoGenerateArrayKeys: t.autoGenerateArrayKeys,
    skipCrossDatasetReferenceValidation: t.skipCrossDatasetReferenceValidation
  };
}, zr = function(t) {
  return t.type === "response";
}, oc = function(t) {
  return t.body;
}, ic = function(t, r) {
  return t.reduce(function(n, a) {
    return n[r(a)] = a, n;
  }, /* @__PURE__ */ Object.create(null));
}, rr = function(t) {
  return t.toPromise();
}, sc = 11264, uc = {
  listen: rc,
  getDataUrl: function(t, r) {
    var n = this.clientConfig, a = Vr.hasDataset(n), o = "/".concat(t, "/").concat(a), i = r ? "".concat(o, "/").concat(r) : o;
    return "/data".concat(i).replace(/\/($|\?)/, "$1");
  },
  fetch: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = n.filterResponse === !1 ? function(i) {
      return i;
    } : function(i) {
      return i.result;
    }, o = this._dataRequest("query", {
      query: t,
      params: r
    }, n).pipe(qt(a));
    return this.isPromiseAPI() ? rr(o) : o;
  },
  getDocument: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = {
      uri: this.getDataUrl("doc", t),
      json: !0,
      tag: r.tag
    }, a = this._requestObservable(n).pipe(Hr(zr), qt(function(o) {
      return o.body.documents && o.body.documents[0];
    }));
    return this.isPromiseAPI() ? rr(a) : a;
  },
  getDocuments: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = {
      uri: this.getDataUrl("doc", t.join(",")),
      json: !0,
      tag: r.tag
    }, a = this._requestObservable(n).pipe(Hr(zr), qt(function(o) {
      var i = ic(o.body.documents || [], function(s) {
        return s._id;
      });
      return t.map(function(s) {
        return i[s] || null;
      });
    }));
    return this.isPromiseAPI() ? rr(a) : a;
  },
  create: function(t, r) {
    return this._create(t, "create", r);
  },
  createIfNotExists: function(t, r) {
    return Vr.requireDocumentId("createIfNotExists", t), this._create(t, "createIfNotExists", r);
  },
  createOrReplace: function(t, r) {
    return Vr.requireDocumentId("createOrReplace", t), this._create(t, "createOrReplace", r);
  },
  patch: function(t, r) {
    return new xa(t, r, this);
  },
  delete: function(t, r) {
    return this.dataRequest("mutate", {
      mutations: [{
        delete: ec(t)
      }]
    }, r);
  },
  mutate: function(t, r) {
    var n = t instanceof xa || t instanceof Oa ? t.serialize() : t, a = Array.isArray(n) ? n : [n], o = r && r.transactionId;
    return this.dataRequest("mutate", {
      mutations: a,
      transactionId: o
    }, r);
  },
  transaction: function(t) {
    return new Oa(t, this);
  },
  dataRequest: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = this._dataRequest(t, r, n);
    return this.isPromiseAPI() ? rr(a) : a;
  },
  _dataRequest: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = t === "mutate", o = t === "query", i = !a && tc(r), s = !a && i.length < sc, c = s ? i : "", u = n.returnFirst, d = n.timeout, l = n.token, h = n.tag, v = n.headers, _ = this.getDataUrl(t, c), g = {
      method: s ? "GET" : "POST",
      uri: _,
      json: !0,
      body: s ? void 0 : r,
      query: a && ac(n),
      timeout: d,
      headers: v,
      token: l,
      tag: h,
      canUseCdn: o
    };
    return this._requestObservable(g).pipe(Hr(zr), qt(oc), qt(function(y) {
      if (!a)
        return y;
      var p = y.results || [];
      if (n.returnDocuments)
        return u ? p[0] && p[0].document : p.map(function(k) {
          return k.document;
        });
      var x = u ? "documentId" : "documentIds", j = u ? p[0] && p[0].id : p.map(function(k) {
        return k.id;
      });
      return _a({
        transactionId: y.transactionId,
        results: p
      }, x, j);
    }));
  },
  _create: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = _a({}, r, t), o = Ku({
      returnFirst: !0,
      returnDocuments: !0
    }, n);
    return this.dataRequest("mutate", {
      mutations: [a]
    }, o);
  }
}, cc = Oe, lc = ht;
function Po(e) {
  this.request = e.request.bind(e);
}
cc(Po.prototype, {
  create: function(t, r) {
    return this._modify("PUT", t, r);
  },
  edit: function(t, r) {
    return this._modify("PATCH", t, r);
  },
  delete: function(t) {
    return this._modify("DELETE", t);
  },
  list: function() {
    return this.request({
      uri: "/datasets"
    });
  },
  _modify: function(t, r, n) {
    return lc.dataset(r), this.request({
      method: t,
      uri: "/datasets/".concat(r),
      body: n
    });
  }
});
var fc = Po, dc = Oe;
function Ro(e) {
  this.client = e;
}
dc(Ro.prototype, {
  list: function() {
    return this.client.request({
      uri: "/projects"
    });
  },
  getById: function(t) {
    return this.client.request({
      uri: "/projects/".concat(t)
    });
  }
});
var hc = Ro, pc = function(e) {
  var t = [];
  for (var r in e)
    e.hasOwnProperty(r) && t.push("".concat(encodeURIComponent(r), "=").concat(encodeURIComponent(e[r])));
  return t.length > 0 ? "?".concat(t.join("&")) : "";
};
function vc(e, t) {
  return bc(e) || yc(e, t) || gc(e, t) || mc();
}
function mc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gc(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ta(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ta(e, t);
  }
}
function Ta(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function yc(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, o = !1, i, s;
    try {
      for (r = r.call(e); !(a = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t)); a = !0)
        ;
    } catch (c) {
      o = !0, s = c;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function bc(e) {
  if (Array.isArray(e))
    return e;
}
var Io = Oe, jo = Zt, wc = jo.map, Ec = jo.filter, _c = pc, nr = ht;
function Do(e) {
  this.client = e;
}
function Oc(e, t) {
  return typeof window > "u" || !(t instanceof window.File) ? e : Io({
    filename: e.preserveFilename === !1 ? void 0 : t.name,
    contentType: t.type
  }, e);
}
Io(Do.prototype, {
  /**
   * Upload an asset
   *
   * @param  {String} assetType `image` or `file`
   * @param  {File|Blob|Buffer|ReadableStream} body File to upload
   * @param  {Object}  opts Options for the upload
   * @param  {Boolean} opts.preserveFilename Whether or not to preserve the original filename (default: true)
   * @param  {String}  opts.filename Filename for this file (optional)
   * @param  {Number}  opts.timeout  Milliseconds to wait before timing the request out (default: 0)
   * @param  {String}  opts.contentType Mime type of the file
   * @param  {Array}   opts.extract Array of metadata parts to extract from image.
   *                                 Possible values: `location`, `exif`, `image`, `palette`
   * @param  {String}  opts.label Label
   * @param  {String}  opts.title Title
   * @param  {String}  opts.description Description
   * @param  {String}  opts.creditLine The credit to person(s) and/or organization(s) required by the supplier of the image to be used when published
   * @param  {Object}  opts.source Source data (when the asset is from an external service)
   * @param  {String}  opts.source.id The (u)id of the asset within the source, i.e. 'i-f323r1E'
   *                                  Required if source is defined
   * @param  {String}  opts.source.name The name of the source, i.e. 'unsplash'
   *                                  Required if source is defined
   * @param  {String}  opts.source.url A url to where to find the asset, or get more info about it in the source
   *                                  Optional
   * @return {Promise} Resolves with the created asset document
   */
  upload: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    nr.validateAssetType(t);
    var a = n.extract || void 0;
    a && !a.length && (a = ["none"]);
    var o = nr.hasDataset(this.client.clientConfig), i = t === "image" ? "images" : "files", s = Oc(n, r), c = s.tag, u = s.label, d = s.title, l = s.description, h = s.creditLine, v = s.filename, _ = s.source, g = {
      label: u,
      title: d,
      description: l,
      filename: v,
      meta: a,
      creditLine: h
    };
    _ && (g.sourceId = _.id, g.sourceName = _.name, g.sourceUrl = _.url);
    var y = this.client._requestObservable({
      tag: c,
      method: "POST",
      timeout: s.timeout || 0,
      uri: "/assets/".concat(i, "/").concat(o),
      headers: s.contentType ? {
        "Content-Type": s.contentType
      } : {},
      query: g,
      body: r
    });
    return this.client.isPromiseAPI() ? y.pipe(Ec(function(p) {
      return p.type === "response";
    }), wc(function(p) {
      return p.body.document;
    })).toPromise() : y;
  },
  delete: function(t, r) {
    console.warn("client.assets.delete() is deprecated, please use client.delete(<document-id>)");
    var n = r || "";
    return /^(image|file)-/.test(n) ? t._id && (n = t._id) : n = "".concat(t, "-").concat(n), nr.hasDataset(this.client.clientConfig), this.client.delete(n);
  },
  getImageUrl: function(t, r) {
    var n = t._ref || t;
    if (typeof n != "string")
      throw new Error("getImageUrl() needs either an object with a _ref, or a string with an asset document ID");
    if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(n))
      throw new Error('Unsupported asset ID "'.concat(n, '". URL generation only works for auto-generated IDs.'));
    var a = n.split("-"), o = vc(a, 4), i = o[1], s = o[2], c = o[3];
    nr.hasDataset(this.client.clientConfig);
    var u = this.client.clientConfig, d = u.projectId, l = u.dataset, h = r ? _c(r) : "";
    return "https://cdn.sanity.io/images/".concat(d, "/").concat(l, "/").concat(i, "-").concat(s, ".").concat(c).concat(h);
  }
});
var xc = Do, Tc = Oe;
function ko(e) {
  this.client = e;
}
Tc(ko.prototype, {
  getById: function(t) {
    return this.client.request({
      uri: "/users/".concat(t)
    });
  }
});
var Sc = ko, Cc = Oe;
function Ao(e) {
  this.client = e;
}
Cc(Ao.prototype, {
  getLoginProviders: function() {
    return this.client.request({
      uri: "/auth/providers"
    });
  },
  logout: function() {
    return this.client.request({
      uri: "/auth/logout",
      method: "POST"
    });
  }
});
var Pc = Ao, hn = {}, Rc = {
  get exports() {
    return hn;
  },
  set exports(e) {
    hn = e;
  }
}, Ic = function() {
  var t = [];
  return {
    subscribe: r,
    publish: n
  };
  function r(a) {
    return t.push(a), function() {
      var i = t.indexOf(a);
      i > -1 && t.splice(i, 1);
    };
  }
  function n() {
    for (var a = 0; a < t.length; a++)
      t[a].apply(null, arguments);
  }
}, jc = function(e) {
  var t = function(n, a) {
    for (var o = n === "onError", i = a, s = arguments.length, c = new Array(s > 2 ? s - 2 : 0), u = 2; u < s; u++)
      c[u - 2] = arguments[u];
    for (var d = 0; d < e[n].length; d++) {
      var l = e[n][d];
      if (i = l.apply(void 0, [i].concat(c)), o && !i)
        break;
    }
    return i;
  };
  return t;
}, Dc = function(t, r) {
  if (r = r.split(":")[0], t = +t, !t)
    return !1;
  switch (r) {
    case "http":
    case "ws":
      return t !== 80;
    case "https":
    case "wss":
      return t !== 443;
    case "ftp":
      return t !== 21;
    case "gopher":
      return t !== 70;
    case "file":
      return !1;
  }
  return t !== 0;
}, Ln = {}, kc = Object.prototype.hasOwnProperty, Ac;
function Sa(e) {
  try {
    return decodeURIComponent(e.replace(/\+/g, " "));
  } catch {
    return null;
  }
}
function Ca(e) {
  try {
    return encodeURIComponent(e);
  } catch {
    return null;
  }
}
function Nc(e) {
  for (var t = /([^=?#&]+)=?([^&]*)/g, r = {}, n; n = t.exec(e); ) {
    var a = Sa(n[1]), o = Sa(n[2]);
    a === null || o === null || a in r || (r[a] = o);
  }
  return r;
}
function Mc(e, t) {
  t = t || "";
  var r = [], n, a;
  typeof t != "string" && (t = "?");
  for (a in e)
    if (kc.call(e, a)) {
      if (n = e[a], !n && (n === null || n === Ac || isNaN(n)) && (n = ""), a = Ca(a), n = Ca(n), a === null || n === null)
        continue;
      r.push(a + "=" + n);
    }
  return r.length ? t + r.join("&") : "";
}
Ln.stringify = Mc;
Ln.parse = Nc;
var No = Dc, Rr = Ln, $c = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, Mo = /[\n\r\t]/g, Uc = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, $o = /:\d+$/, Lc = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, qc = /^[a-zA-Z]:/;
function qn(e) {
  return (e || "").toString().replace($c, "");
}
var pn = [
  ["#", "hash"],
  // Extract from the back.
  ["?", "query"],
  // Extract from the back.
  function(t, r) {
    return Ge(r.protocol) ? t.replace(/\\/g, "/") : t;
  },
  ["/", "pathname"],
  // Extract from the back.
  ["@", "auth", 1],
  // Extract from the front.
  [NaN, "host", void 0, 1, 1],
  // Set left over value.
  [/:(\d*)$/, "port", void 0, 1],
  // RegExp the back.
  [NaN, "hostname", void 0, 1, 1]
  // Set left over.
], Pa = { hash: 1, query: 1 };
function Uo(e) {
  var t;
  typeof window < "u" ? t = window : typeof He < "u" ? t = He : typeof self < "u" ? t = self : t = {};
  var r = t.location || {};
  e = e || r;
  var n = {}, a = typeof e, o;
  if (e.protocol === "blob:")
    n = new Xe(unescape(e.pathname), {});
  else if (a === "string") {
    n = new Xe(e, {});
    for (o in Pa)
      delete n[o];
  } else if (a === "object") {
    for (o in e)
      o in Pa || (n[o] = e[o]);
    n.slashes === void 0 && (n.slashes = Uc.test(e.href));
  }
  return n;
}
function Ge(e) {
  return e === "file:" || e === "ftp:" || e === "http:" || e === "https:" || e === "ws:" || e === "wss:";
}
function Lo(e, t) {
  e = qn(e), e = e.replace(Mo, ""), t = t || {};
  var r = Lc.exec(e), n = r[1] ? r[1].toLowerCase() : "", a = !!r[2], o = !!r[3], i = 0, s;
  return a ? o ? (s = r[2] + r[3] + r[4], i = r[2].length + r[3].length) : (s = r[2] + r[4], i = r[2].length) : o ? (s = r[3] + r[4], i = r[3].length) : s = r[4], n === "file:" ? i >= 2 && (s = s.slice(2)) : Ge(n) ? s = r[4] : n ? a && (s = s.slice(2)) : i >= 2 && Ge(t.protocol) && (s = r[4]), {
    protocol: n,
    slashes: a || Ge(n),
    slashesCount: i,
    rest: s
  };
}
function Wc(e, t) {
  if (e === "")
    return t;
  for (var r = (t || "/").split("/").slice(0, -1).concat(e.split("/")), n = r.length, a = r[n - 1], o = !1, i = 0; n--; )
    r[n] === "." ? r.splice(n, 1) : r[n] === ".." ? (r.splice(n, 1), i++) : i && (n === 0 && (o = !0), r.splice(n, 1), i--);
  return o && r.unshift(""), (a === "." || a === "..") && r.push(""), r.join("/");
}
function Xe(e, t, r) {
  if (e = qn(e), e = e.replace(Mo, ""), !(this instanceof Xe))
    return new Xe(e, t, r);
  var n, a, o, i, s, c, u = pn.slice(), d = typeof t, l = this, h = 0;
  for (d !== "object" && d !== "string" && (r = t, t = null), r && typeof r != "function" && (r = Rr.parse), t = Uo(t), a = Lo(e || "", t), n = !a.protocol && !a.slashes, l.slashes = a.slashes || n && t.slashes, l.protocol = a.protocol || t.protocol || "", e = a.rest, (a.protocol === "file:" && (a.slashesCount !== 2 || qc.test(e)) || !a.slashes && (a.protocol || a.slashesCount < 2 || !Ge(l.protocol))) && (u[3] = [/(.*)/, "pathname"]); h < u.length; h++) {
    if (i = u[h], typeof i == "function") {
      e = i(e, l);
      continue;
    }
    o = i[0], c = i[1], o !== o ? l[c] = e : typeof o == "string" ? (s = o === "@" ? e.lastIndexOf(o) : e.indexOf(o), ~s && (typeof i[2] == "number" ? (l[c] = e.slice(0, s), e = e.slice(s + i[2])) : (l[c] = e.slice(s), e = e.slice(0, s)))) : (s = o.exec(e)) && (l[c] = s[1], e = e.slice(0, s.index)), l[c] = l[c] || n && i[3] && t[c] || "", i[4] && (l[c] = l[c].toLowerCase());
  }
  r && (l.query = r(l.query)), n && t.slashes && l.pathname.charAt(0) !== "/" && (l.pathname !== "" || t.pathname !== "") && (l.pathname = Wc(l.pathname, t.pathname)), l.pathname.charAt(0) !== "/" && Ge(l.protocol) && (l.pathname = "/" + l.pathname), No(l.port, l.protocol) || (l.host = l.hostname, l.port = ""), l.username = l.password = "", l.auth && (s = l.auth.indexOf(":"), ~s ? (l.username = l.auth.slice(0, s), l.username = encodeURIComponent(decodeURIComponent(l.username)), l.password = l.auth.slice(s + 1), l.password = encodeURIComponent(decodeURIComponent(l.password))) : l.username = encodeURIComponent(decodeURIComponent(l.auth)), l.auth = l.password ? l.username + ":" + l.password : l.username), l.origin = l.protocol !== "file:" && Ge(l.protocol) && l.host ? l.protocol + "//" + l.host : "null", l.href = l.toString();
}
function Fc(e, t, r) {
  var n = this;
  switch (e) {
    case "query":
      typeof t == "string" && t.length && (t = (r || Rr.parse)(t)), n[e] = t;
      break;
    case "port":
      n[e] = t, No(t, n.protocol) ? t && (n.host = n.hostname + ":" + t) : (n.host = n.hostname, n[e] = "");
      break;
    case "hostname":
      n[e] = t, n.port && (t += ":" + n.port), n.host = t;
      break;
    case "host":
      n[e] = t, $o.test(t) ? (t = t.split(":"), n.port = t.pop(), n.hostname = t.join(":")) : (n.hostname = t, n.port = "");
      break;
    case "protocol":
      n.protocol = t.toLowerCase(), n.slashes = !r;
      break;
    case "pathname":
    case "hash":
      if (t) {
        var a = e === "pathname" ? "/" : "#";
        n[e] = t.charAt(0) !== a ? a + t : t;
      } else
        n[e] = t;
      break;
    case "username":
    case "password":
      n[e] = encodeURIComponent(t);
      break;
    case "auth":
      var o = t.indexOf(":");
      ~o ? (n.username = t.slice(0, o), n.username = encodeURIComponent(decodeURIComponent(n.username)), n.password = t.slice(o + 1), n.password = encodeURIComponent(decodeURIComponent(n.password))) : n.username = encodeURIComponent(decodeURIComponent(t));
  }
  for (var i = 0; i < pn.length; i++) {
    var s = pn[i];
    s[4] && (n[s[1]] = n[s[1]].toLowerCase());
  }
  return n.auth = n.password ? n.username + ":" + n.password : n.username, n.origin = n.protocol !== "file:" && Ge(n.protocol) && n.host ? n.protocol + "//" + n.host : "null", n.href = n.toString(), n;
}
function Bc(e) {
  (!e || typeof e != "function") && (e = Rr.stringify);
  var t, r = this, n = r.host, a = r.protocol;
  a && a.charAt(a.length - 1) !== ":" && (a += ":");
  var o = a + (r.protocol && r.slashes || Ge(r.protocol) ? "//" : "");
  return r.username ? (o += r.username, r.password && (o += ":" + r.password), o += "@") : r.password ? (o += ":" + r.password, o += "@") : r.protocol !== "file:" && Ge(r.protocol) && !n && r.pathname !== "/" && (o += "@"), (n[n.length - 1] === ":" || $o.test(r.hostname) && !r.port) && (n += ":"), o += n + r.pathname, t = typeof r.query == "object" ? e(r.query) : r.query, t && (o += t.charAt(0) !== "?" ? "?" + t : t), r.hash && (o += r.hash), o;
}
Xe.prototype = { set: Fc, toString: Bc };
Xe.extractProtocol = Lo;
Xe.location = Uo;
Xe.trimLeft = qn;
Xe.qs = Rr;
var Yc = Xe, Gr = Oe, Hc = Yc, Vc = typeof navigator > "u" ? !1 : navigator.product === "ReactNative", zc = Object.prototype.hasOwnProperty, vn = {
  timeout: Vc ? 6e4 : 12e4
}, Gc = function(e) {
  var t = typeof e == "string" ? Gr({
    url: e
  }, vn) : Gr({}, vn, e), r = Hc(
    t.url,
    {},
    // Don't use current browser location
    !0
    // Parse query strings
  );
  return t.timeout = qo(t.timeout), t.query && (r.query = Gr({}, r.query, Qc(t.query))), t.method = t.body && !t.method ? "POST" : (t.method || "GET").toUpperCase(), t.url = r.toString(Xc), t;
};
function Xc(e) {
  var t = [];
  for (var r in e)
    zc.call(e, r) && n(r, e[r]);
  return t.length ? t.join("&") : "";
  function n(a, o) {
    Array.isArray(o) ? o.forEach(function(i) {
      return n(a, i);
    }) : t.push([a, o].map(encodeURIComponent).join("="));
  }
}
function qo(e) {
  if (e === !1 || e === 0)
    return !1;
  if (e.connect || e.socket)
    return e;
  var t = Number(e);
  return isNaN(t) ? qo(vn.timeout) : {
    connect: t,
    socket: t
  };
}
function Qc(e) {
  var t = {};
  for (var r in e)
    e[r] !== void 0 && (t[r] = e[r]);
  return t;
}
var Jc = /^https?:\/\//i, Zc = function(e) {
  if (!Jc.test(e.url))
    throw new Error('"'.concat(e.url, '" is not a valid URL'));
}, mn = {}, Kc = {
  get exports() {
    return mn;
  },
  set exports(e) {
    mn = e;
  }
}, Ra = /^(?:(?:(?:([^:\/#\?]+:)?(?:(?:\/\/)((?:((?:[^:@\/#\?]+)(?:\:(?:[^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((?:\/?(?:[^\/\?#]+\/+)*)(?:[^\?#]*)))?(\?[^#]+)?)(#.*)?/, el = {
  regex: Ra,
  parse: function(e) {
    var t = Ra.exec(e);
    return t ? {
      protocol: (t[1] || "").toLowerCase() || void 0,
      hostname: (t[5] || "").toLowerCase() || void 0,
      port: t[6] || void 0
    } : {};
  }
}, Ia = el, tl = function(e, t, r) {
  if (e === t)
    return !0;
  var n = Ia.parse(e, !1, !0), a = Ia.parse(t, !1, !0), o = n.port | 0 || (n.protocol === "https" ? 443 : 80), i = a.port | 0 || (a.protocol === "https" ? 443 : 80), s = {
    proto: n.protocol === a.protocol,
    hostname: n.hostname === a.hostname,
    port: o === i
  };
  return s.proto && s.hostname && (s.port || r);
}, Xr = function(e) {
  return e.replace(/^\s+|\s+$/g, "");
}, rl = function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
}, nl = function(e) {
  if (!e)
    return {};
  for (var t = {}, r = Xr(e).split(`
`), n = 0; n < r.length; n++) {
    var a = r[n], o = a.indexOf(":"), i = Xr(a.slice(0, o)).toLowerCase(), s = Xr(a.slice(o + 1));
    typeof t[i] > "u" ? t[i] = s : rl(t[i]) ? t[i].push(s) : t[i] = [t[i], s];
  }
  return t;
};
function Nt() {
  this.readyState = 0;
}
Nt.prototype.open = function(e, t) {
  this._method = e, this._url = t, this._resHeaders = "", this.readyState = 1, this.onreadystatechange();
};
Nt.prototype.abort = function() {
  this._controller && this._controller.abort();
};
Nt.prototype.getAllResponseHeaders = function() {
  return this._resHeaders;
};
Nt.prototype.setRequestHeader = function(e, t) {
  this._headers = this._headers || {}, this._headers[e] = t;
};
Nt.prototype.send = function(e) {
  var t = this, r = this._controller = typeof AbortController == "function" && new AbortController(), n = this.responseType !== "arraybuffer", a = {
    method: this._method,
    headers: this._headers,
    signal: r && r.signal,
    body: e
  };
  typeof window < "u" && (a.credentials = this.withCredentials ? "include" : "omit"), fetch(this._url, a).then(function(o) {
    return o.headers.forEach(function(i, s) {
      t._resHeaders += "".concat(s, ": ").concat(i, `\r
`);
    }), t.status = o.status, t.statusText = o.statusText, t.readyState = 3, n ? o.text() : o.arrayBuffer();
  }).then(function(o) {
    n ? t.responseText = o : t.response = o, t.readyState = 4, t.onreadystatechange();
  }).catch(function(o) {
    if (o.name === "AbortError") {
      t.onabort();
      return;
    }
    t.onerror(o);
  });
};
var al = Nt, ol = tl, il = nl, ja = al, sl = function() {
}, ut = typeof window > "u" ? void 0 : window, Da = ut ? "xhr" : "fetch", Ir = typeof XMLHttpRequest == "function" ? XMLHttpRequest : sl, ul = "withCredentials" in new Ir(), cl = typeof XDomainRequest > "u" ? void 0 : XDomainRequest, Wo = ul ? Ir : cl;
ut || (Ir = ja, Wo = ja);
var ll = function(e, t) {
  var r = e.options, n = e.applyMiddleware("finalizeOptions", r), a = {}, o = ut && ut.location && !ol(ut.location.href, n.url), i = e.applyMiddleware("interceptRequest", void 0, {
    adapter: Da,
    context: e
  });
  if (i) {
    var s = setTimeout(t, 0, null, i), c = function() {
      return clearTimeout(s);
    };
    return {
      abort: c
    };
  }
  var u = o ? new Wo() : new Ir(), d = ut && ut.XDomainRequest && u instanceof ut.XDomainRequest, l = n.headers, h = n.timeout, v = !1, _ = !1, g = !1;
  u.onerror = ne, u.ontimeout = ne, u.onabort = function() {
    O(!0), v = !0;
  }, u.onprogress = function() {
  };
  var y = d ? "onload" : "onreadystatechange";
  if (u[y] = function() {
    k(), !(v || u.readyState !== 4 && !d) && u.status !== 0 && xe();
  }, u.open(
    n.method,
    n.url,
    !0
    // Always async
  ), u.withCredentials = !!n.withCredentials, l && u.setRequestHeader)
    for (var p in l)
      l.hasOwnProperty(p) && u.setRequestHeader(p, l[p]);
  else if (l && d)
    throw new Error("Headers cannot be set on an XDomainRequest object");
  return n.rawBody && (u.responseType = "arraybuffer"), e.applyMiddleware("onRequest", {
    options: n,
    adapter: Da,
    request: u,
    context: e
  }), u.send(n.body || null), h && (a.connect = setTimeout(function() {
    return j("ETIMEDOUT");
  }, h.connect)), {
    abort: x
  };
  function x() {
    v = !0, u && u.abort();
  }
  function j(ee) {
    g = !0, u.abort();
    var se = new Error(ee === "ESOCKETTIMEDOUT" ? "Socket timed out on request to ".concat(n.url) : "Connection timed out on request to ".concat(n.url));
    se.code = ee, e.channels.error.publish(se);
  }
  function k() {
    h && (O(), a.socket = setTimeout(function() {
      return j("ESOCKETTIMEDOUT");
    }, h.socket));
  }
  function O(ee) {
    (ee || v || u.readyState >= 2 && a.connect) && clearTimeout(a.connect), a.socket && clearTimeout(a.socket);
  }
  function ne(ee) {
    if (!_) {
      O(!0), _ = !0, u = null;
      var se = ee || new Error("Network error while attempting to reach ".concat(n.url));
      se.isNetworkError = !0, se.request = n, t(se);
    }
  }
  function me() {
    var ee = u.status, se = u.statusText;
    if (d && ee === void 0)
      ee = 200;
    else {
      if (ee > 12e3 && ee < 12156)
        return ne();
      ee = u.status === 1223 ? 204 : u.status, se = u.status === 1223 ? "No Content" : se;
    }
    return {
      body: u.response || u.responseText,
      url: n.url,
      method: n.method,
      headers: d ? {} : il(u.getAllResponseHeaders()),
      statusCode: ee,
      statusMessage: se
    };
  }
  function xe() {
    if (!(v || _ || g)) {
      if (u.status === 0) {
        ne(new Error("Unknown XHR error"));
        return;
      }
      O(), _ = !0, t(null, me());
    }
  }
};
(function(e) {
  e.exports = ll;
})(Kc);
var fl = Ic, dl = jc, hl = Gc, pl = Zc, vl = mn, ml = ["request", "response", "progress", "error", "abort"], ka = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"], gl = function e() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : vl, n = [], a = ka.reduce(function(i, s) {
    return i[s] = i[s] || [], i;
  }, {
    processOptions: [hl],
    validateOptions: [pl]
  });
  function o(i) {
    var s = ml.reduce(function(g, y) {
      return g[y] = fl(), g;
    }, {}), c = dl(a), u = c("processOptions", i);
    c("validateOptions", u);
    var d = {
      options: u,
      channels: s,
      applyMiddleware: c
    }, l = null, h = s.request.subscribe(function(g) {
      l = r(g, function(y, p) {
        return _(y, p, g);
      });
    });
    s.abort.subscribe(function() {
      h(), l && l.abort();
    });
    var v = c("onReturn", s, d);
    return v === s && s.request.publish(d), v;
    function _(g, y, p) {
      var x = g, j = y;
      if (!x)
        try {
          j = c("onResponse", y, p);
        } catch (k) {
          j = null, x = k;
        }
      x = x && c("onError", x, p), x ? s.error.publish(x) : j && s.response.publish(j);
    }
  }
  return o.use = function(s) {
    if (!s)
      throw new Error("Tried to add middleware that resolved to falsey value");
    if (typeof s == "function")
      throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
    if (s.onReturn && a.onReturn.length > 0)
      throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
    return ka.forEach(function(c) {
      s[c] && a[c].push(s[c]);
    }), n.push(s), o;
  }, o.clone = function() {
    return e(n);
  }, t.forEach(o.use), o;
};
(function(e) {
  e.exports = gl;
})(Rc);
var gn = {}, Wt = {
  get exports() {
    return gn;
  },
  set exports(e) {
    gn = e;
  }
};
typeof globalThis < "u" ? Wt.exports = globalThis : typeof window < "u" ? Wt.exports = window : typeof He < "u" ? Wt.exports = He : typeof self < "u" ? Wt.exports = self : Wt.exports = {};
var yl = gn, Aa = Oe, bl = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.implementation || yl.Observable;
  if (!t)
    throw new Error("`Observable` is not available in global scope, and no implementation was passed");
  return {
    onReturn: function(n, a) {
      return new t(function(o) {
        return n.error.subscribe(function(i) {
          return o.error(i);
        }), n.progress.subscribe(function(i) {
          return o.next(Aa({
            type: "progress"
          }, i));
        }), n.response.subscribe(function(i) {
          o.next(Aa({
            type: "response"
          }, i)), o.complete();
        }), n.request.publish(a), function() {
          return n.abort.publish();
        };
      });
    }
  };
};
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var wl = function(t) {
  return t != null && typeof t == "object" && Array.isArray(t) === !1;
};
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var El = wl;
function Na(e) {
  return El(e) === !0 && Object.prototype.toString.call(e) === "[object Object]";
}
var _l = function(t) {
  var r, n;
  return !(Na(t) === !1 || (r = t.constructor, typeof r != "function") || (n = r.prototype, Na(n) === !1) || n.hasOwnProperty("isPrototypeOf") === !1);
};
function yn(e) {
  return yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yn(e);
}
var Ma = Oe, Ol = _l, xl = ["boolean", "string", "number"], Tl = function(t) {
  return !!t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}, Sl = function() {
  return {
    processOptions: function(t) {
      var r = t.body;
      if (!r)
        return t;
      var n = typeof r.pipe == "function", a = !n && !Tl(r) && (xl.indexOf(yn(r)) !== -1 || Array.isArray(r) || Ol(r));
      return a ? Ma({}, t, {
        body: JSON.stringify(t.body),
        headers: Ma({}, t.headers, {
          "Content-Type": "application/json"
        })
      }) : t;
    }
  };
}, Qr = Oe, Cl = function(e) {
  return {
    onResponse: function(r) {
      var n = r.headers["content-type"] || "", a = e && e.force || n.indexOf("application/json") !== -1;
      return !r.body || !n || !a ? r : Qr({}, r, {
        body: Pl(r.body)
      });
    },
    processOptions: function(r) {
      return Qr({}, r, {
        headers: Qr({
          Accept: "application/json"
        }, r.headers)
      });
    }
  };
};
function Pl(e) {
  try {
    return JSON.parse(e);
  } catch (t) {
    throw t.message = "Failed to parsed response body as JSON: ".concat(t.message), t;
  }
}
var bn = {}, Rl = {
  get exports() {
    return bn;
  },
  set exports(e) {
    bn = e;
  }
}, Il = function() {
  return {
    onRequest: function(t) {
      if (t.adapter !== "xhr")
        return;
      var r = t.request, n = t.context;
      "upload" in r && "onprogress" in r.upload && (r.upload.onprogress = a("upload")), "onprogress" in r && (r.onprogress = a("download"));
      function a(o) {
        return function(i) {
          var s = i.lengthComputable ? i.loaded / i.total * 100 : -1;
          n.channels.progress.publish({
            stage: o,
            percent: s,
            total: i.total,
            loaded: i.loaded,
            lengthComputable: i.lengthComputable
          });
        };
      }
    }
  };
};
(function(e) {
  e.exports = Il;
})(Rl);
var Wn = {}, hr = {}, jl = {
  get exports() {
    return hr;
  },
  set exports(e) {
    hr = e;
  }
};
(function(e, t) {
  var r = typeof Reflect < "u" ? Reflect.construct : void 0, n = Object.defineProperty, a = Error.captureStackTrace;
  a === void 0 && (a = function(u) {
    var d = new Error();
    n(u, "stack", {
      configurable: !0,
      get: function() {
        var h = d.stack;
        return n(this, "stack", {
          configurable: !0,
          value: h,
          writable: !0
        }), h;
      },
      set: function(h) {
        n(u, "stack", {
          configurable: !0,
          value: h,
          writable: !0
        });
      }
    });
  });
  function o(c) {
    c !== void 0 && n(this, "message", {
      configurable: !0,
      value: c,
      writable: !0
    });
    var u = this.constructor.name;
    u !== void 0 && u !== this.name && n(this, "name", {
      configurable: !0,
      value: u,
      writable: !0
    }), a(this, this.constructor);
  }
  o.prototype = Object.create(Error.prototype, {
    // See: https://github.com/JsCommunity/make-error/issues/4
    constructor: {
      configurable: !0,
      value: o,
      writable: !0
    }
  });
  var i = function() {
    function c(d, l) {
      return n(d, "name", {
        configurable: !0,
        value: l
      });
    }
    try {
      var u = function() {
      };
      if (c(u, "foo"), u.name === "foo")
        return c;
    } catch {
    }
  }();
  function s(c, u) {
    if (u == null || u === Error)
      u = o;
    else if (typeof u != "function")
      throw new TypeError("super_ should be a function");
    var d;
    if (typeof c == "string")
      d = c, c = r !== void 0 ? function() {
        return r(u, arguments, this.constructor);
      } : function() {
        u.apply(this, arguments);
      }, i !== void 0 && (i(c, d), d = void 0);
    else if (typeof c != "function")
      throw new TypeError("constructor should be either a string or a function");
    c.super_ = c.super = u;
    var l = {
      constructor: {
        configurable: !0,
        value: c,
        writable: !0
      }
    };
    return d !== void 0 && (l.name = {
      configurable: !0,
      value: d,
      writable: !0
    }), c.prototype = Object.create(u.prototype, l), c;
  }
  t = e.exports = s, t.BaseError = o;
})(jl, hr);
var Fo = hr, Bo = Oe;
function Fn(e) {
  var t = Yo(e);
  Fn.super.call(this, t.message), Bo(this, t);
}
function Bn(e) {
  var t = Yo(e);
  Bn.super.call(this, t.message), Bo(this, t);
}
function Yo(e) {
  var t = e.body, r = {
    response: e,
    statusCode: e.statusCode,
    responseBody: kl(t, e)
  };
  return t.error && t.message ? (r.message = "".concat(t.error, " - ").concat(t.message), r) : t.error && t.error.description ? (r.message = t.error.description, r.details = t.error, r) : (r.message = t.error || t.message || Dl(e), r);
}
function Dl(e) {
  var t = e.statusMessage ? " ".concat(e.statusMessage) : "";
  return "".concat(e.method, "-request to ").concat(e.url, " resulted in HTTP ").concat(e.statusCode).concat(t);
}
function kl(e, t) {
  var r = (t.headers["content-type"] || "").toLowerCase(), n = r.indexOf("application/json") !== -1;
  return n ? JSON.stringify(e, null, 2) : e;
}
Fo(Fn);
Fo(Bn);
Wn.ClientError = Fn;
Wn.ServerError = Bn;
var Al = [], Nl = hn, Ml = Oe, $l = bl, Ul = Sl, Ll = Cl, ql = bn, Wl = Zt, Fl = Wl.Observable, Ho = Wn, Vo = Ho.ClientError, zo = Ho.ServerError, Bl = {
  onResponse: function(t) {
    if (t.statusCode >= 500)
      throw new zo(t);
    if (t.statusCode >= 400)
      throw new Vo(t);
    return t;
  }
}, Yl = {
  onResponse: function(t) {
    var r = t.headers["x-sanity-warning"], n = Array.isArray(r) ? r : [r];
    return n.filter(Boolean).forEach(function(a) {
      return console.warn(a);
    }), t;
  }
}, Hl = Al, Vl = Hl.concat([Yl, Ul(), Ll(), ql(), Bl, $l({
  implementation: Fl
})]), Go = Nl(Vl);
function jr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Go;
  return t(Ml({
    maxRedirects: 0
  }, e));
}
jr.defaultRequester = Go;
jr.ClientError = Vo;
jr.ServerError = zo;
var zl = jr, $a = Oe, Gl = "X-Sanity-Project-ID", Xl = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = {}, n = t.token || e.token;
  n && (r.Authorization = "Bearer ".concat(n)), !t.useGlobalApi && !e.useProjectHostname && e.projectId && (r[Gl] = e.projectId);
  var a = !!(typeof t.withCredentials > "u" ? e.token || e.withCredentials : t.withCredentials), o = typeof t.timeout > "u" ? e.timeout : t.timeout;
  return $a({}, t, {
    headers: $a({}, r, t.headers || {}),
    timeout: typeof o > "u" ? 5 * 60 * 1e3 : o,
    proxy: t.proxy || e.proxy,
    json: !0,
    withCredentials: a
  });
}, Xo = {}, Ql = "https://docs.sanity.io/help/", Qo = function(t) {
  return Ql + t;
}, Dr = {}, Jl = function(e) {
  var t = !1, r;
  return function() {
    return t || (r = e.apply(void 0, arguments), t = !0), r;
  };
}, Yn = Qo, Zl = Jl, Hn = function(t) {
  return (
    // eslint-disable-next-line no-console
    Zl(function() {
      for (var r, n = arguments.length, a = new Array(n), o = 0; o < n; o++)
        a[o] = arguments[o];
      return (r = console).warn.apply(r, [t.join(" ")].concat(a));
    })
  );
};
Dr.printCdnWarning = Hn(["You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and", "cheaper. Think about it! For more info, see ".concat(Yn("js-client-cdn-configuration"), "."), "To hide this warning, please set the `useCdn` option to either `true` or `false` when creating", "the client."]);
Dr.printBrowserTokenWarning = Hn(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", "See ".concat(Yn("js-client-browser-token"), " for more information and how to hide this warning.")]);
Dr.printNoApiVersionSpecifiedWarning = Hn(["Using the Sanity client without specifying an API version is deprecated.", "See ".concat(Yn("js-client-api-version"))]);
(function(e) {
  var t = Oe, r = Qo, n = ht, a = Dr, o = "apicdn.sanity.io", i = {
    apiHost: "https://api.sanity.io",
    apiVersion: "1",
    useProjectHostname: !0,
    isPromiseAPI: !0
  }, s = ["localhost", "127.0.0.1", "0.0.0.0"], c = function(d) {
    return s.indexOf(d) !== -1;
  };
  e.defaultConfig = i, e.initConfig = function(u, d) {
    var l = t({}, d, u);
    l.apiVersion || a.printNoApiVersionSpecifiedWarning();
    var h = t({}, i, l), v = h.useProjectHostname;
    if (typeof Promise > "u") {
      var _ = r("js-client-promise-polyfill");
      throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(_));
    }
    if (v && !h.projectId)
      throw new Error("Configuration must contain `projectId`");
    var g = typeof window < "u" && window.location && window.location.hostname, y = g && c(window.location.hostname);
    g && y && h.token && h.ignoreBrowserTokenWarning !== !0 ? a.printBrowserTokenWarning() : typeof h.useCdn > "u" && a.printCdnWarning(), v && n.projectId(h.projectId), h.dataset && n.dataset(h.dataset), "requestTagPrefix" in h && (h.requestTagPrefix = h.requestTagPrefix ? n.requestTag(h.requestTagPrefix).replace(/\.+$/, "") : void 0), h.apiVersion = "".concat(h.apiVersion).replace(/^v/, ""), h.isDefaultApi = h.apiHost === i.apiHost, h.useCdn = !!h.useCdn && !h.withCredentials, e.validateApiVersion(h.apiVersion);
    var p = h.apiHost.split("://", 2), x = p[0], j = p[1], k = h.isDefaultApi ? o : j;
    return h.useProjectHostname ? (h.url = "".concat(x, "://").concat(h.projectId, ".").concat(j, "/v").concat(h.apiVersion), h.cdnUrl = "".concat(x, "://").concat(h.projectId, ".").concat(k, "/v").concat(h.apiVersion)) : (h.url = "".concat(h.apiHost, "/v").concat(h.apiVersion), h.cdnUrl = h.url), h;
  }, e.validateApiVersion = function(d) {
    if (!(d === "1" || d === "X")) {
      var l = new Date(d), h = /^\d{4}-\d{2}-\d{2}$/.test(d) && l instanceof Date && l.getTime() > 0;
      if (!h)
        throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
    }
  };
})(Xo);
function Ua(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ua(Object(r), !0).forEach(function(n) {
      Kl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ua(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Kl(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Dt = Oe, Vn = Zt, ef = Vn.Observable, tf = Vn.map, rf = Vn.filter, nf = Un, af = xo, of = uc, sf = fc, uf = hc, cf = xc, lf = Sc, ff = Pc, kr = zl, df = Xl, Jo = Xo, hf = Jo.defaultConfig, pf = Jo.initConfig, vf = ht, mf = function(t) {
  return t.toPromise();
};
function Ue() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : hf;
  if (!(this instanceof Ue))
    return new Ue(e);
  if (this.config(e), this.assets = new cf(this), this.datasets = new sf(this), this.projects = new uf(this), this.users = new lf(this), this.auth = new ff(this), this.clientConfig.isPromiseAPI) {
    var t = Dt({}, this.clientConfig, {
      isPromiseAPI: !1
    });
    this.observable = new Ue(t);
  }
}
Dt(Ue.prototype, of);
Dt(Ue.prototype, {
  clone: function() {
    return new Ue(this.config());
  },
  config: function(t) {
    if (typeof t > "u")
      return Dt({}, this.clientConfig);
    if (this.clientConfig && this.clientConfig.allowReconfigure === !1)
      throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
    if (this.observable) {
      var r = Dt({}, t, {
        isPromiseAPI: !1
      });
      this.observable.config(r);
    }
    return this.clientConfig = pf(t, this.clientConfig || {}), this;
  },
  withConfig: function(t) {
    return new Ue(Jr(Jr({}, this.config()), t));
  },
  getUrl: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = r ? this.clientConfig.cdnUrl : this.clientConfig.url;
    return "".concat(n, "/").concat(t.replace(/^\//, ""));
  },
  isPromiseAPI: function() {
    return this.clientConfig.isPromiseAPI;
  },
  _requestObservable: function(t) {
    var r = this, n = t.url || t.uri, a = typeof t.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(t.method || "GET") >= 0 && n.indexOf("/data/") === 0 : t.canUseCdn, o = this.clientConfig.useCdn && a, i = t.tag && this.clientConfig.requestTagPrefix ? [this.clientConfig.requestTagPrefix, t.tag].join(".") : t.tag || this.clientConfig.requestTagPrefix;
    i && (t.query = Jr({
      tag: vf.requestTag(i)
    }, t.query));
    var s = df(this.clientConfig, Dt({}, t, {
      url: this.getUrl(n, o)
    }));
    return new ef(function(c) {
      return kr(s, r.clientConfig.requester).subscribe(c);
    });
  },
  request: function(t) {
    var r = this._requestObservable(t).pipe(rf(function(n) {
      return n.type === "response";
    }), tf(function(n) {
      return n.body;
    }));
    return this.isPromiseAPI() ? mf(r) : r;
  }
});
Ue.Patch = nf;
Ue.Transaction = af;
Ue.ClientError = kr.ClientError;
Ue.ServerError = kr.ServerError;
Ue.requester = kr.defaultRequester;
var gf = Ue;
const zn = gf({
  projectId: "whopivh6",
  dataset: "production",
  apiVersion: "1982-09-12",
  useCdn: !0
});
function Vt() {
  return Vt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vt.apply(this, arguments);
}
function yf(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function bf(e) {
  var t = e === void 0 ? {} : e, r = t.src, n = t.srcSet, a = t.sizes, o = t.crossOrigin, i = t.ignorePlaceholder, s = br("idle"), c = s[0], u = s[1], d = c === "failed", l = c === "loading", h = c === "idle", v = c === "loaded";
  gt(function() {
    if (i)
      return u("loaded");
    u(r ? "loading" : "idle");
  }, [i, r]);
  var _ = wi(), g = function() {
    _.current && (_.current = null);
  }, y = Ei(function() {
    if (r) {
      g();
      var p = new window.Image();
      p.src = r, o && (p.crossOrigin = o), n && (p.srcset = n), a && (p.sizes = a), p.onload = function() {
        g(), u("loaded");
      }, p.onerror = function() {
        g(), u("failed");
      }, _.current = p;
    }
  }, [r, o, n, a]);
  return _i(function() {
    if (!i)
      return c === "loading" && y(), g;
  }, [c, y, i]), {
    status: c,
    isError: d,
    isIdle: h,
    isLoading: l,
    isLoaded: v
  };
}
var wf = ["placeholderSrc", "placeholder", "placeholderColor", "ignorePlaceholder", "onLoad", "onError", "src", "loading", "crossOrigin", "height", "width"];
function La(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string")
    return parseInt(e, 10);
}
var Zo = /* @__PURE__ */ bi(function(e, t) {
  var r = e.placeholderSrc, n = e.placeholder, a = e.placeholderColor, o = a === void 0 ? "gray" : a, i = e.ignorePlaceholder, s = i === void 0 ? !1 : i, c = e.onLoad, u = e.onError, d = e.src, l = e.loading, h = e.crossOrigin, v = e.height, _ = e.width, g = yf(e, wf), y = La(_), p = La(v), x = Vt({
    ref: t,
    width: _,
    height: v
  }, g), j = l || s, k = bf(Vt({}, e, {
    ignorePlaceholder: j
  })), O = k.isLoaded;
  if (process.env.NODE_ENV !== "production") {
    if (!d)
      throw new Error('Image is missing required "src" property. Make sure you pass "src" in props to the `react-image-placeholder` component.');
    if (!p || !y)
      throw new Error('Image with src "' + d + '" must use unitless "width" and "height" properties.');
  }
  if (!O) {
    if (r)
      return Nr("img", Object.assign({
        src: r
      }, x));
    if (n)
      return n;
    var ne = x.style, me = ne === void 0 ? {} : ne;
    return Nr("div", Object.assign({}, x, {
      style: Vt({
        height: p + "px",
        width: y + "px",
        background: o
      }, me)
    }));
  }
  return Nr("img", Object.assign({
    src: d,
    loading: l,
    crossOrigin: h,
    onLoad: c,
    onError: u
  }, x));
});
function bt(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function ke(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function cr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? cr = function(r) {
    return typeof r;
  } : cr = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, cr(e);
}
function Qe(e) {
  ke(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || cr(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Ef(e, t) {
  ke(2, arguments);
  var r = Qe(e).getTime(), n = bt(t);
  return new Date(r + n);
}
var _f = {};
function Ar() {
  return _f;
}
function Of(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function lr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? lr = function(r) {
    return typeof r;
  } : lr = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, lr(e);
}
function xf(e) {
  return ke(1, arguments), e instanceof Date || lr(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Tf(e) {
  if (ke(1, arguments), !xf(e) && typeof e != "number")
    return !1;
  var t = Qe(e);
  return !isNaN(Number(t));
}
function Sf(e, t) {
  ke(2, arguments);
  var r = bt(t);
  return Ef(e, -r);
}
var Cf = 864e5;
function Pf(e) {
  ke(1, arguments);
  var t = Qe(e), r = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var n = t.getTime(), a = r - n;
  return Math.floor(a / Cf) + 1;
}
function pr(e) {
  ke(1, arguments);
  var t = 1, r = Qe(e), n = r.getUTCDay(), a = (n < t ? 7 : 0) + n - t;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function Ko(e) {
  ke(1, arguments);
  var t = Qe(e), r = t.getUTCFullYear(), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(r + 1, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var a = pr(n), o = /* @__PURE__ */ new Date(0);
  o.setUTCFullYear(r, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var i = pr(o);
  return t.getTime() >= a.getTime() ? r + 1 : t.getTime() >= i.getTime() ? r : r - 1;
}
function Rf(e) {
  ke(1, arguments);
  var t = Ko(e), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(t, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var n = pr(r);
  return n;
}
var If = 6048e5;
function jf(e) {
  ke(1, arguments);
  var t = Qe(e), r = pr(t).getTime() - Rf(t).getTime();
  return Math.round(r / If) + 1;
}
function vr(e, t) {
  var r, n, a, o, i, s, c, u;
  ke(1, arguments);
  var d = Ar(), l = bt((r = (n = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && a !== void 0 ? a : d.weekStartsOn) !== null && n !== void 0 ? n : (c = d.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(l >= 0 && l <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = Qe(e), v = h.getUTCDay(), _ = (v < l ? 7 : 0) + v - l;
  return h.setUTCDate(h.getUTCDate() - _), h.setUTCHours(0, 0, 0, 0), h;
}
function ei(e, t) {
  var r, n, a, o, i, s, c, u;
  ke(1, arguments);
  var d = Qe(e), l = d.getUTCFullYear(), h = Ar(), v = bt((r = (n = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && a !== void 0 ? a : h.firstWeekContainsDate) !== null && n !== void 0 ? n : (c = h.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(v >= 1 && v <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var _ = /* @__PURE__ */ new Date(0);
  _.setUTCFullYear(l + 1, 0, v), _.setUTCHours(0, 0, 0, 0);
  var g = vr(_, t), y = /* @__PURE__ */ new Date(0);
  y.setUTCFullYear(l, 0, v), y.setUTCHours(0, 0, 0, 0);
  var p = vr(y, t);
  return d.getTime() >= g.getTime() ? l + 1 : d.getTime() >= p.getTime() ? l : l - 1;
}
function Df(e, t) {
  var r, n, a, o, i, s, c, u;
  ke(1, arguments);
  var d = Ar(), l = bt((r = (n = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && a !== void 0 ? a : d.firstWeekContainsDate) !== null && n !== void 0 ? n : (c = d.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), h = ei(e, t), v = /* @__PURE__ */ new Date(0);
  v.setUTCFullYear(h, 0, l), v.setUTCHours(0, 0, 0, 0);
  var _ = vr(v, t);
  return _;
}
var kf = 6048e5;
function Af(e, t) {
  ke(1, arguments);
  var r = Qe(e), n = vr(r, t).getTime() - Df(r, t).getTime();
  return Math.round(n / kf) + 1;
}
function ce(e, t) {
  for (var r = e < 0 ? "-" : "", n = Math.abs(e).toString(); n.length < t; )
    n = "0" + n;
  return r + n;
}
var Nf = {
  // Year
  y: function(t, r) {
    var n = t.getUTCFullYear(), a = n > 0 ? n : 1 - n;
    return ce(r === "yy" ? a % 100 : a, r.length);
  },
  // Month
  M: function(t, r) {
    var n = t.getUTCMonth();
    return r === "M" ? String(n + 1) : ce(n + 1, 2);
  },
  // Day of the month
  d: function(t, r) {
    return ce(t.getUTCDate(), r.length);
  },
  // AM or PM
  a: function(t, r) {
    var n = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(t, r) {
    return ce(t.getUTCHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H: function(t, r) {
    return ce(t.getUTCHours(), r.length);
  },
  // Minute
  m: function(t, r) {
    return ce(t.getUTCMinutes(), r.length);
  },
  // Second
  s: function(t, r) {
    return ce(t.getUTCSeconds(), r.length);
  },
  // Fraction of second
  S: function(t, r) {
    var n = r.length, a = t.getUTCMilliseconds(), o = Math.floor(a * Math.pow(10, n - 3));
    return ce(o, r.length);
  }
};
const ot = Nf;
var It = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Mf = {
  // Era
  G: function(t, r, n) {
    var a = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(a, {
          width: "abbreviated"
        });
      case "GGGGG":
        return n.era(a, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return n.era(a, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, r, n) {
    if (r === "yo") {
      var a = t.getUTCFullYear(), o = a > 0 ? a : 1 - a;
      return n.ordinalNumber(o, {
        unit: "year"
      });
    }
    return ot.y(t, r);
  },
  // Local week-numbering year
  Y: function(t, r, n, a) {
    var o = ei(t, a), i = o > 0 ? o : 1 - o;
    if (r === "YY") {
      var s = i % 100;
      return ce(s, 2);
    }
    return r === "Yo" ? n.ordinalNumber(i, {
      unit: "year"
    }) : ce(i, r.length);
  },
  // ISO week-numbering year
  R: function(t, r) {
    var n = Ko(t);
    return ce(n, r.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, r) {
    var n = t.getUTCFullYear();
    return ce(n, r.length);
  },
  // Quarter
  Q: function(t, r, n) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(a);
      case "QQ":
        return ce(a, 2);
      case "Qo":
        return n.ordinalNumber(a, {
          unit: "quarter"
        });
      case "QQQ":
        return n.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, r, n) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (r) {
      case "q":
        return String(a);
      case "qq":
        return ce(a, 2);
      case "qo":
        return n.ordinalNumber(a, {
          unit: "quarter"
        });
      case "qqq":
        return n.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, r, n) {
    var a = t.getUTCMonth();
    switch (r) {
      case "M":
      case "MM":
        return ot.M(t, r);
      case "Mo":
        return n.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "MMM":
        return n.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(a, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, r, n) {
    var a = t.getUTCMonth();
    switch (r) {
      case "L":
        return String(a + 1);
      case "LL":
        return ce(a + 1, 2);
      case "Lo":
        return n.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "LLL":
        return n.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(a, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, r, n, a) {
    var o = Af(t, a);
    return r === "wo" ? n.ordinalNumber(o, {
      unit: "week"
    }) : ce(o, r.length);
  },
  // ISO week of year
  I: function(t, r, n) {
    var a = jf(t);
    return r === "Io" ? n.ordinalNumber(a, {
      unit: "week"
    }) : ce(a, r.length);
  },
  // Day of the month
  d: function(t, r, n) {
    return r === "do" ? n.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : ot.d(t, r);
  },
  // Day of year
  D: function(t, r, n) {
    var a = Pf(t);
    return r === "Do" ? n.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : ce(a, r.length);
  },
  // Day of week
  E: function(t, r, n) {
    var a = t.getUTCDay();
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, r, n, a) {
    var o = t.getUTCDay(), i = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "e":
        return String(i);
      case "ee":
        return ce(i, 2);
      case "eo":
        return n.ordinalNumber(i, {
          unit: "day"
        });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, r, n, a) {
    var o = t.getUTCDay(), i = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "c":
        return String(i);
      case "cc":
        return ce(i, r.length);
      case "co":
        return n.ordinalNumber(i, {
          unit: "day"
        });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, r, n) {
    var a = t.getUTCDay(), o = a === 0 ? 7 : a;
    switch (r) {
      case "i":
        return String(o);
      case "ii":
        return ce(o, r.length);
      case "io":
        return n.ordinalNumber(o, {
          unit: "day"
        });
      case "iii":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, r, n) {
    var a = t.getUTCHours(), o = a / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, r, n) {
    var a = t.getUTCHours(), o;
    switch (a === 12 ? o = It.noon : a === 0 ? o = It.midnight : o = a / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, r, n) {
    var a = t.getUTCHours(), o;
    switch (a >= 17 ? o = It.evening : a >= 12 ? o = It.afternoon : a >= 4 ? o = It.morning : o = It.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, r, n) {
    if (r === "ho") {
      var a = t.getUTCHours() % 12;
      return a === 0 && (a = 12), n.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return ot.h(t, r);
  },
  // Hour [0-23]
  H: function(t, r, n) {
    return r === "Ho" ? n.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : ot.H(t, r);
  },
  // Hour [0-11]
  K: function(t, r, n) {
    var a = t.getUTCHours() % 12;
    return r === "Ko" ? n.ordinalNumber(a, {
      unit: "hour"
    }) : ce(a, r.length);
  },
  // Hour [1-24]
  k: function(t, r, n) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), r === "ko" ? n.ordinalNumber(a, {
      unit: "hour"
    }) : ce(a, r.length);
  },
  // Minute
  m: function(t, r, n) {
    return r === "mo" ? n.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : ot.m(t, r);
  },
  // Second
  s: function(t, r, n) {
    return r === "so" ? n.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : ot.s(t, r);
  },
  // Fraction of second
  S: function(t, r) {
    return ot.S(t, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, r, n, a) {
    var o = a._originalDate || t, i = o.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (r) {
      case "X":
        return Wa(i);
      case "XXXX":
      case "XX":
        return mt(i);
      case "XXXXX":
      case "XXX":
      default:
        return mt(i, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, r, n, a) {
    var o = a._originalDate || t, i = o.getTimezoneOffset();
    switch (r) {
      case "x":
        return Wa(i);
      case "xxxx":
      case "xx":
        return mt(i);
      case "xxxxx":
      case "xxx":
      default:
        return mt(i, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, r, n, a) {
    var o = a._originalDate || t, i = o.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + qa(i, ":");
      case "OOOO":
      default:
        return "GMT" + mt(i, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, r, n, a) {
    var o = a._originalDate || t, i = o.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + qa(i, ":");
      case "zzzz":
      default:
        return "GMT" + mt(i, ":");
    }
  },
  // Seconds timestamp
  t: function(t, r, n, a) {
    var o = a._originalDate || t, i = Math.floor(o.getTime() / 1e3);
    return ce(i, r.length);
  },
  // Milliseconds timestamp
  T: function(t, r, n, a) {
    var o = a._originalDate || t, i = o.getTime();
    return ce(i, r.length);
  }
};
function qa(e, t) {
  var r = e > 0 ? "-" : "+", n = Math.abs(e), a = Math.floor(n / 60), o = n % 60;
  if (o === 0)
    return r + String(a);
  var i = t || "";
  return r + String(a) + i + ce(o, 2);
}
function Wa(e, t) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + ce(Math.abs(e) / 60, 2);
  }
  return mt(e, t);
}
function mt(e, t) {
  var r = t || "", n = e > 0 ? "-" : "+", a = Math.abs(e), o = ce(Math.floor(a / 60), 2), i = ce(a % 60, 2);
  return n + o + r + i;
}
const $f = Mf;
var Fa = function(t, r) {
  switch (t) {
    case "P":
      return r.date({
        width: "short"
      });
    case "PP":
      return r.date({
        width: "medium"
      });
    case "PPP":
      return r.date({
        width: "long"
      });
    case "PPPP":
    default:
      return r.date({
        width: "full"
      });
  }
}, ti = function(t, r) {
  switch (t) {
    case "p":
      return r.time({
        width: "short"
      });
    case "pp":
      return r.time({
        width: "medium"
      });
    case "ppp":
      return r.time({
        width: "long"
      });
    case "pppp":
    default:
      return r.time({
        width: "full"
      });
  }
}, Uf = function(t, r) {
  var n = t.match(/(P+)(p+)?/) || [], a = n[1], o = n[2];
  if (!o)
    return Fa(t, r);
  var i;
  switch (a) {
    case "P":
      i = r.dateTime({
        width: "short"
      });
      break;
    case "PP":
      i = r.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      i = r.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      i = r.dateTime({
        width: "full"
      });
      break;
  }
  return i.replace("{{date}}", Fa(a, r)).replace("{{time}}", ti(o, r));
}, Lf = {
  p: ti,
  P: Uf
};
const qf = Lf;
var Wf = ["D", "DD"], Ff = ["YY", "YYYY"];
function Bf(e) {
  return Wf.indexOf(e) !== -1;
}
function Yf(e) {
  return Ff.indexOf(e) !== -1;
}
function Ba(e, t, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Hf = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Vf = function(t, r, n) {
  var a, o = Hf[t];
  return typeof o == "string" ? a = o : r === 1 ? a = o.one : a = o.other.replace("{{count}}", r.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + a : a + " ago" : a;
};
const zf = Vf;
function Zr(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.width ? String(t.width) : e.defaultWidth, n = e.formats[r] || e.formats[e.defaultWidth];
    return n;
  };
}
var Gf = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Xf = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Qf = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Jf = {
  date: Zr({
    formats: Gf,
    defaultWidth: "full"
  }),
  time: Zr({
    formats: Xf,
    defaultWidth: "full"
  }),
  dateTime: Zr({
    formats: Qf,
    defaultWidth: "full"
  })
};
const Zf = Jf;
var Kf = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ed = function(t, r, n, a) {
  return Kf[t];
};
const td = ed;
function Ft(e) {
  return function(t, r) {
    var n = r != null && r.context ? String(r.context) : "standalone", a;
    if (n === "formatting" && e.formattingValues) {
      var o = e.defaultFormattingWidth || e.defaultWidth, i = r != null && r.width ? String(r.width) : o;
      a = e.formattingValues[i] || e.formattingValues[o];
    } else {
      var s = e.defaultWidth, c = r != null && r.width ? String(r.width) : e.defaultWidth;
      a = e.values[c] || e.values[s];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[u];
  };
}
var rd = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, nd = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ad = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, od = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, id = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, sd = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, ud = function(t, r) {
  var n = Number(t), a = n % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, cd = {
  ordinalNumber: ud,
  era: Ft({
    values: rd,
    defaultWidth: "wide"
  }),
  quarter: Ft({
    values: nd,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Ft({
    values: ad,
    defaultWidth: "wide"
  }),
  day: Ft({
    values: od,
    defaultWidth: "wide"
  }),
  dayPeriod: Ft({
    values: id,
    defaultWidth: "wide",
    formattingValues: sd,
    defaultFormattingWidth: "wide"
  })
};
const ld = cd;
function Bt(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.width, a = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    var i = o[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? dd(s, function(l) {
      return l.test(i);
    }) : fd(s, function(l) {
      return l.test(i);
    }), u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = r.valueCallback ? r.valueCallback(u) : u;
    var d = t.slice(i.length);
    return {
      value: u,
      rest: d
    };
  };
}
function fd(e, t) {
  for (var r in e)
    if (e.hasOwnProperty(r) && t(e[r]))
      return r;
}
function dd(e, t) {
  for (var r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function hd(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.match(e.matchPattern);
    if (!n)
      return null;
    var a = n[0], o = t.match(e.parsePattern);
    if (!o)
      return null;
    var i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = r.valueCallback ? r.valueCallback(i) : i;
    var s = t.slice(a.length);
    return {
      value: i,
      rest: s
    };
  };
}
var pd = /^(\d+)(th|st|nd|rd)?/i, vd = /\d+/i, md = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, gd = {
  any: [/^b/i, /^(a|c)/i]
}, yd = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, bd = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, wd = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ed = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, _d = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Od = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, xd = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Td = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Sd = {
  ordinalNumber: hd({
    matchPattern: pd,
    parsePattern: vd,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Bt({
    matchPatterns: md,
    defaultMatchWidth: "wide",
    parsePatterns: gd,
    defaultParseWidth: "any"
  }),
  quarter: Bt({
    matchPatterns: yd,
    defaultMatchWidth: "wide",
    parsePatterns: bd,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Bt({
    matchPatterns: wd,
    defaultMatchWidth: "wide",
    parsePatterns: Ed,
    defaultParseWidth: "any"
  }),
  day: Bt({
    matchPatterns: _d,
    defaultMatchWidth: "wide",
    parsePatterns: Od,
    defaultParseWidth: "any"
  }),
  dayPeriod: Bt({
    matchPatterns: xd,
    defaultMatchWidth: "any",
    parsePatterns: Td,
    defaultParseWidth: "any"
  })
};
const Cd = Sd;
var Pd = {
  code: "en-US",
  formatDistance: zf,
  formatLong: Zf,
  formatRelative: td,
  localize: ld,
  match: Cd,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Rd = Pd;
var Id = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, jd = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Dd = /^'([^]*?)'?$/, kd = /''/g, Ad = /[a-zA-Z]/;
function Nd(e, t, r) {
  var n, a, o, i, s, c, u, d, l, h, v, _, g, y, p, x, j, k;
  ke(2, arguments);
  var O = String(t), ne = Ar(), me = (n = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : ne.locale) !== null && n !== void 0 ? n : Rd, xe = bt((o = (i = (s = (c = r == null ? void 0 : r.firstWeekContainsDate) !== null && c !== void 0 ? c : r == null || (u = r.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && s !== void 0 ? s : ne.firstWeekContainsDate) !== null && i !== void 0 ? i : (l = ne.locale) === null || l === void 0 || (h = l.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(xe >= 1 && xe <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var ee = bt((v = (_ = (g = (y = r == null ? void 0 : r.weekStartsOn) !== null && y !== void 0 ? y : r == null || (p = r.locale) === null || p === void 0 || (x = p.options) === null || x === void 0 ? void 0 : x.weekStartsOn) !== null && g !== void 0 ? g : ne.weekStartsOn) !== null && _ !== void 0 ? _ : (j = ne.locale) === null || j === void 0 || (k = j.options) === null || k === void 0 ? void 0 : k.weekStartsOn) !== null && v !== void 0 ? v : 0);
  if (!(ee >= 0 && ee <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!me.localize)
    throw new RangeError("locale must contain localize property");
  if (!me.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var se = Qe(e);
  if (!Tf(se))
    throw new RangeError("Invalid time value");
  var Ae = Of(se), Te = Sf(se, Ae), we = {
    firstWeekContainsDate: xe,
    weekStartsOn: ee,
    locale: me,
    _originalDate: se
  }, K = O.match(jd).map(function(te) {
    var de = te[0];
    if (de === "p" || de === "P") {
      var ve = qf[de];
      return ve(te, me.formatLong);
    }
    return te;
  }).join("").match(Id).map(function(te) {
    if (te === "''")
      return "'";
    var de = te[0];
    if (de === "'")
      return Md(te);
    var ve = $f[de];
    if (ve)
      return !(r != null && r.useAdditionalWeekYearTokens) && Yf(te) && Ba(te, t, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && Bf(te) && Ba(te, t, String(e)), ve(Te, te, me.localize, we);
    if (de.match(Ad))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + de + "`");
    return te;
  }).join("");
  return K;
}
function Md(e) {
  var t = e.match(Dd);
  return t ? t[1].replace(kd, "'") : e;
}
const ri = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDUuMiAoNDM1MTQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlBsYWNlaG9sZGVyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IlBsYWNlaG9sZGVyIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNEQURBREEiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjYuNjUzMTcyNywxNC45MTkzOTE4IEwxNzIuNDg3MzA3LDE0LjkxOTM5MTggQzE3OC45ODI3OTMsMTQuOTE5MzkxOCAxODQuMjIxMDg4LDIwLjE1NzY4NjkgMTg0LjIyMTA4OCwyNi42NTMxNzI3IEwxODQuMjIxMDg4LDEwNC4zODk0NzEgTDE1MC40ODY0NjgsNjEuODU0NTE1NCBDMTQ2LjUwNTM2Myw1Ni42MTYyMjA0IDEzOC41NDMxNTUsNTYuNjE2MjIwNCAxMzQuNTYyMDUxLDYxLjg1NDUxNTQgTDg1LjMyMjA3NzIsMTI0LjA4NTQ2MSBMNjQuNzg3OTYwNiwxMDEuNjY1NTU4IEM2MC41OTczMjQ2LDk3LjA1NTg1ODEgNTMuMjYzNzExNSw5Ny4wNTU4NTgxIDQ5LjA3MzA3NTUsMTAxLjY2NTU1OCBMMTQuOTE5MzkxOCwxMzguNzUyNjg3IEwxNC45MTkzOTE4LDI2LjY1MzE3MjcgQzE0LjkxOTM5MTgsMjAuMTU3Njg2OSAyMC4xNTc2ODY5LDE0LjkxOTM5MTggMjYuNjUzMTcyNywxNC45MTkzOTE4IFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjREFEQURBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGN4PSI1MS4zNzc5MjUzIiBjeT0iNTEuMzc3OTI1MyIgcj0iMTYuNzYyNTQ0MSI+PC9jaXJjbGU+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
function $d() {
  const [e, t] = br([]);
  return gt(() => {
    zn.fetch(
      `*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
        "name": author -> name,
      } | order(publishedAt desc)`
    ).then((r) => {
      t(r.slice(0, 3));
    }).catch(console.error);
  }, []), e ? (gt(() => {
    document.title = "Daffa Blog";
  }, []), /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsx("section", { className: "homePage section_grid", children: e.map((r) => /* @__PURE__ */ E.jsx("div", { className: "card_grid", children: /* @__PURE__ */ E.jsxs("article", { className: "box", children: [
    /* @__PURE__ */ E.jsxs("div", { className: "card_img", children: [
      r.mainImage && /* @__PURE__ */ E.jsx(
        Zo,
        {
          src: r.mainImage.asset.url,
          alt: r.mainImage.alt,
          loading: "lazy",
          height: 300,
          width: 300,
          placeholderSrc: ri
        }
      ),
      /* @__PURE__ */ E.jsx("span", { className: "title", children: r.title }),
      /* @__PURE__ */ E.jsxs("p", { className: "author", children: [
        "By ",
        r.name
      ] })
    ] }),
    /* @__PURE__ */ E.jsx("div", { className: "contentBox", children: /* @__PURE__ */ E.jsxs("div", { children: [
      /* @__PURE__ */ E.jsx("h2", { children: r.title }),
      /* @__PURE__ */ E.jsx("p", { className: "contentText", children: `${r.body[0].children[0].text.substring(0, 100)}...` }),
      /* @__PURE__ */ E.jsx(kt, { className: "button", to: `/blog/${r.slug.current}`, children: "Baca" }, r.slug.current)
    ] }) })
  ] }) }, r.slug.current)) }) })) : /* @__PURE__ */ E.jsx("div", { children: "Loading..." });
}
var ni = {}, Gn = {}, wn = {}, Ya = {
  get exports() {
    return wn;
  },
  set exports(e) {
    wn = e;
  }
}, mr = {}, Ud = {
  get exports() {
    return mr;
  },
  set exports(e) {
    mr = e;
  }
}, oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ha;
function Ld() {
  if (Ha)
    return oe;
  Ha = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function j(O) {
    if (typeof O == "object" && O !== null) {
      var ne = O.$$typeof;
      switch (ne) {
        case t:
          switch (O = O.type, O) {
            case c:
            case u:
            case n:
            case o:
            case a:
            case l:
              return O;
            default:
              switch (O = O && O.$$typeof, O) {
                case s:
                case d:
                case _:
                case v:
                case i:
                  return O;
                default:
                  return ne;
              }
          }
        case r:
          return ne;
      }
    }
  }
  function k(O) {
    return j(O) === u;
  }
  return oe.AsyncMode = c, oe.ConcurrentMode = u, oe.ContextConsumer = s, oe.ContextProvider = i, oe.Element = t, oe.ForwardRef = d, oe.Fragment = n, oe.Lazy = _, oe.Memo = v, oe.Portal = r, oe.Profiler = o, oe.StrictMode = a, oe.Suspense = l, oe.isAsyncMode = function(O) {
    return k(O) || j(O) === c;
  }, oe.isConcurrentMode = k, oe.isContextConsumer = function(O) {
    return j(O) === s;
  }, oe.isContextProvider = function(O) {
    return j(O) === i;
  }, oe.isElement = function(O) {
    return typeof O == "object" && O !== null && O.$$typeof === t;
  }, oe.isForwardRef = function(O) {
    return j(O) === d;
  }, oe.isFragment = function(O) {
    return j(O) === n;
  }, oe.isLazy = function(O) {
    return j(O) === _;
  }, oe.isMemo = function(O) {
    return j(O) === v;
  }, oe.isPortal = function(O) {
    return j(O) === r;
  }, oe.isProfiler = function(O) {
    return j(O) === o;
  }, oe.isStrictMode = function(O) {
    return j(O) === a;
  }, oe.isSuspense = function(O) {
    return j(O) === l;
  }, oe.isValidElementType = function(O) {
    return typeof O == "string" || typeof O == "function" || O === n || O === u || O === o || O === a || O === l || O === h || typeof O == "object" && O !== null && (O.$$typeof === _ || O.$$typeof === v || O.$$typeof === i || O.$$typeof === s || O.$$typeof === d || O.$$typeof === y || O.$$typeof === p || O.$$typeof === x || O.$$typeof === g);
  }, oe.typeOf = j, oe;
}
var ie = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Va;
function qd() {
  return Va || (Va = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function j(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === u || R === o || R === a || R === l || R === h || typeof R == "object" && R !== null && (R.$$typeof === _ || R.$$typeof === v || R.$$typeof === i || R.$$typeof === s || R.$$typeof === d || R.$$typeof === y || R.$$typeof === p || R.$$typeof === x || R.$$typeof === g);
    }
    function k(R) {
      if (typeof R == "object" && R !== null) {
        var Me = R.$$typeof;
        switch (Me) {
          case t:
            var et = R.type;
            switch (et) {
              case c:
              case u:
              case n:
              case o:
              case a:
              case l:
                return et;
              default:
                var Ve = et && et.$$typeof;
                switch (Ve) {
                  case s:
                  case d:
                  case _:
                  case v:
                  case i:
                    return Ve;
                  default:
                    return Me;
                }
            }
          case r:
            return Me;
        }
      }
    }
    var O = c, ne = u, me = s, xe = i, ee = t, se = d, Ae = n, Te = _, we = v, K = r, te = o, de = a, ve = l, Ne = !1;
    function Le(R) {
      return Ne || (Ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(R) || k(R) === c;
    }
    function w(R) {
      return k(R) === u;
    }
    function P(R) {
      return k(R) === s;
    }
    function W(R) {
      return k(R) === i;
    }
    function F(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function U(R) {
      return k(R) === d;
    }
    function X(R) {
      return k(R) === n;
    }
    function q(R) {
      return k(R) === _;
    }
    function B(R) {
      return k(R) === v;
    }
    function Y(R) {
      return k(R) === r;
    }
    function G(R) {
      return k(R) === o;
    }
    function L(R) {
      return k(R) === a;
    }
    function le(R) {
      return k(R) === l;
    }
    ie.AsyncMode = O, ie.ConcurrentMode = ne, ie.ContextConsumer = me, ie.ContextProvider = xe, ie.Element = ee, ie.ForwardRef = se, ie.Fragment = Ae, ie.Lazy = Te, ie.Memo = we, ie.Portal = K, ie.Profiler = te, ie.StrictMode = de, ie.Suspense = ve, ie.isAsyncMode = Le, ie.isConcurrentMode = w, ie.isContextConsumer = P, ie.isContextProvider = W, ie.isElement = F, ie.isForwardRef = U, ie.isFragment = X, ie.isLazy = q, ie.isMemo = B, ie.isPortal = Y, ie.isProfiler = G, ie.isStrictMode = L, ie.isSuspense = le, ie.isValidElementType = j, ie.typeOf = k;
  }()), ie;
}
var za;
function ai() {
  return za || (za = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Ld() : e.exports = qd();
  }(Ud)), mr;
}
var Kr, Ga;
function Xn() {
  if (Ga)
    return Kr;
  Ga = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Kr = e, Kr;
}
var en, Xa;
function oi() {
  return Xa || (Xa = 1, en = Function.call.bind(Object.prototype.hasOwnProperty)), en;
}
var tn, Qa;
function Wd() {
  if (Qa)
    return tn;
  Qa = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Xn(), r = {}, n = oi();
    e = function(o) {
      var i = "Warning: " + o;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function a(o, i, s, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in o)
        if (n(o, d)) {
          var l;
          try {
            if (typeof o[d] != "function") {
              var h = Error(
                (c || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            l = o[d](i, d, c, s, null, t);
          } catch (_) {
            l = _;
          }
          if (l && !(l instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), l instanceof Error && !(l.message in r)) {
            r[l.message] = !0;
            var v = u ? u() : "";
            e(
              "Failed " + s + " type: " + l.message + (v ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, tn = a, tn;
}
var rn, Ja;
function Fd() {
  if (Ja)
    return rn;
  Ja = 1;
  var e = ai(), t = Oe, r = Xn(), n = oi(), a = Wd(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return rn = function(s, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function l(w) {
      var P = w && (u && w[u] || w[d]);
      if (typeof P == "function")
        return P;
    }
    var h = "<<anonymous>>", v = {
      array: p("array"),
      bigint: p("bigint"),
      bool: p("boolean"),
      func: p("function"),
      number: p("number"),
      object: p("object"),
      string: p("string"),
      symbol: p("symbol"),
      any: x(),
      arrayOf: j,
      element: k(),
      elementType: O(),
      instanceOf: ne,
      node: se(),
      objectOf: xe,
      oneOf: me,
      oneOfType: ee,
      shape: Te,
      exact: we
    };
    function _(w, P) {
      return w === P ? w !== 0 || 1 / w === 1 / P : w !== w && P !== P;
    }
    function g(w, P) {
      this.message = w, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function y(w) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, W = 0;
      function F(X, q, B, Y, G, L, le) {
        if (Y = Y || h, L = L || B, le !== r) {
          if (c) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Me = Y + ":" + B;
            !P[Me] && // Avoid spamming the console because they are often not actionable except for lib authors
            W < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + L + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[Me] = !0, W++);
          }
        }
        return q[B] == null ? X ? q[B] === null ? new g("The " + G + " `" + L + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new g("The " + G + " `" + L + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : w(q, B, Y, G, L);
      }
      var U = F.bind(null, !1);
      return U.isRequired = F.bind(null, !0), U;
    }
    function p(w) {
      function P(W, F, U, X, q, B) {
        var Y = W[F], G = de(Y);
        if (G !== w) {
          var L = ve(Y);
          return new g(
            "Invalid " + X + " `" + q + "` of type " + ("`" + L + "` supplied to `" + U + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return y(P);
    }
    function x() {
      return y(i);
    }
    function j(w) {
      function P(W, F, U, X, q) {
        if (typeof w != "function")
          return new g("Property `" + q + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var B = W[F];
        if (!Array.isArray(B)) {
          var Y = de(B);
          return new g("Invalid " + X + " `" + q + "` of type " + ("`" + Y + "` supplied to `" + U + "`, expected an array."));
        }
        for (var G = 0; G < B.length; G++) {
          var L = w(B, G, U, X, q + "[" + G + "]", r);
          if (L instanceof Error)
            return L;
        }
        return null;
      }
      return y(P);
    }
    function k() {
      function w(P, W, F, U, X) {
        var q = P[W];
        if (!s(q)) {
          var B = de(q);
          return new g("Invalid " + U + " `" + X + "` of type " + ("`" + B + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(w);
    }
    function O() {
      function w(P, W, F, U, X) {
        var q = P[W];
        if (!e.isValidElementType(q)) {
          var B = de(q);
          return new g("Invalid " + U + " `" + X + "` of type " + ("`" + B + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(w);
    }
    function ne(w) {
      function P(W, F, U, X, q) {
        if (!(W[F] instanceof w)) {
          var B = w.name || h, Y = Le(W[F]);
          return new g("Invalid " + X + " `" + q + "` of type " + ("`" + Y + "` supplied to `" + U + "`, expected ") + ("instance of `" + B + "`."));
        }
        return null;
      }
      return y(P);
    }
    function me(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), i;
      function P(W, F, U, X, q) {
        for (var B = W[F], Y = 0; Y < w.length; Y++)
          if (_(B, w[Y]))
            return null;
        var G = JSON.stringify(w, function(le, R) {
          var Me = ve(R);
          return Me === "symbol" ? String(R) : R;
        });
        return new g("Invalid " + X + " `" + q + "` of value `" + String(B) + "` " + ("supplied to `" + U + "`, expected one of " + G + "."));
      }
      return y(P);
    }
    function xe(w) {
      function P(W, F, U, X, q) {
        if (typeof w != "function")
          return new g("Property `" + q + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var B = W[F], Y = de(B);
        if (Y !== "object")
          return new g("Invalid " + X + " `" + q + "` of type " + ("`" + Y + "` supplied to `" + U + "`, expected an object."));
        for (var G in B)
          if (n(B, G)) {
            var L = w(B, G, U, X, q + "." + G, r);
            if (L instanceof Error)
              return L;
          }
        return null;
      }
      return y(P);
    }
    function ee(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var P = 0; P < w.length; P++) {
        var W = w[P];
        if (typeof W != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ne(W) + " at index " + P + "."
          ), i;
      }
      function F(U, X, q, B, Y) {
        for (var G = [], L = 0; L < w.length; L++) {
          var le = w[L], R = le(U, X, q, B, Y, r);
          if (R == null)
            return null;
          R.data && n(R.data, "expectedType") && G.push(R.data.expectedType);
        }
        var Me = G.length > 0 ? ", expected one of type [" + G.join(", ") + "]" : "";
        return new g("Invalid " + B + " `" + Y + "` supplied to " + ("`" + q + "`" + Me + "."));
      }
      return y(F);
    }
    function se() {
      function w(P, W, F, U, X) {
        return K(P[W]) ? null : new g("Invalid " + U + " `" + X + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return y(w);
    }
    function Ae(w, P, W, F, U) {
      return new g(
        (w || "React class") + ": " + P + " type `" + W + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function Te(w) {
      function P(W, F, U, X, q) {
        var B = W[F], Y = de(B);
        if (Y !== "object")
          return new g("Invalid " + X + " `" + q + "` of type `" + Y + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var G in w) {
          var L = w[G];
          if (typeof L != "function")
            return Ae(U, X, q, G, ve(L));
          var le = L(B, G, U, X, q + "." + G, r);
          if (le)
            return le;
        }
        return null;
      }
      return y(P);
    }
    function we(w) {
      function P(W, F, U, X, q) {
        var B = W[F], Y = de(B);
        if (Y !== "object")
          return new g("Invalid " + X + " `" + q + "` of type `" + Y + "` " + ("supplied to `" + U + "`, expected `object`."));
        var G = t({}, W[F], w);
        for (var L in G) {
          var le = w[L];
          if (n(w, L) && typeof le != "function")
            return Ae(U, X, q, L, ve(le));
          if (!le)
            return new g(
              "Invalid " + X + " `" + q + "` key `" + L + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(W[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var R = le(B, L, U, X, q + "." + L, r);
          if (R)
            return R;
        }
        return null;
      }
      return y(P);
    }
    function K(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every(K);
          if (w === null || s(w))
            return !0;
          var P = l(w);
          if (P) {
            var W = P.call(w), F;
            if (P !== w.entries) {
              for (; !(F = W.next()).done; )
                if (!K(F.value))
                  return !1;
            } else
              for (; !(F = W.next()).done; ) {
                var U = F.value;
                if (U && !K(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(w, P) {
      return w === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function de(w) {
      var P = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : te(P, w) ? "symbol" : P;
    }
    function ve(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var P = de(w);
      if (P === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function Ne(w) {
      var P = ve(w);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function Le(w) {
      return !w.constructor || !w.constructor.name ? h : w.constructor.name;
    }
    return v.checkPropTypes = a, v.resetWarningCache = a.resetWarningCache, v.PropTypes = v, v;
  }, rn;
}
var nn, Za;
function Bd() {
  if (Za)
    return nn;
  Za = 1;
  var e = Xn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, nn = function() {
    function n(i, s, c, u, d, l) {
      if (l !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var o = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, nn;
}
if (process.env.NODE_ENV !== "production") {
  var Yd = ai(), Hd = !0;
  Ya.exports = Fd()(Yd.isElement, Hd);
} else
  Ya.exports = Bd()();
Object.defineProperty(Gn, "__esModule", {
  value: !0
});
var Vd = function() {
  function e(t, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }
  return function(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
  };
}(), zd = V, Ka = ii(zd), Gd = wn, it = ii(Gd);
function ii(e) {
  return e && e.__esModule ? e : { default: e };
}
function Xd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qd(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Jd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var Qn = function(e) {
  Jd(t, e);
  function t() {
    return Xd(this, t), Qd(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
  }
  return Vd(t, [{
    key: "componentDidMount",
    value: function() {
      window && (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, {
    key: "render",
    value: function() {
      return Ka.default.createElement("ins", {
        className: this.props.className + " adsbygoogle",
        style: this.props.style,
        "data-ad-client": this.props.client,
        "data-ad-slot": this.props.slot,
        "data-ad-layout": this.props.layout,
        "data-ad-layout-key": this.props.layoutKey,
        "data-ad-format": this.props.format,
        "data-full-width-responsive": this.props.responsive
      });
    }
  }]), t;
}(Ka.default.Component);
Gn.default = Qn;
Qn.propTypes = {
  className: it.default.string,
  style: it.default.object,
  // eslint-disable-line
  client: it.default.string.isRequired,
  slot: it.default.string.isRequired,
  layout: it.default.string,
  layoutKey: it.default.string,
  format: it.default.string,
  responsive: it.default.string
};
Qn.defaultProps = {
  className: "",
  style: { display: "block" },
  format: "auto",
  layout: "",
  layoutKey: "",
  responsive: "false"
};
var Jn = {};
Object.defineProperty(Jn, "__esModule", {
  value: !0
});
var Zd = function() {
  function e(t, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }
  return function(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
  };
}(), Kd = V, eo = eh(Kd);
function eh(e) {
  return e && e.__esModule ? e : { default: e };
}
function th(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rh(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function nh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var ah = function(e) {
  nh(t, e);
  function t() {
    return th(this, t), rh(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
  }
  return Zd(t, [{
    key: "render",
    value: function() {
      return eo.default.createElement(
        "div",
        { className: "adsbybaidu" },
        "TODO"
      );
    }
  }]), t;
}(eo.default.Component);
Jn.default = ah;
Object.defineProperty(ni, "__esModule", {
  value: !0
});
var oh = Gn, ih = si(oh), sh = Jn, uh = si(sh);
function si(e) {
  return e && e.__esModule ? e : { default: e };
}
var ch = {
  Google: ih.default,
  Baidu: uh.default
}, lh = ni.default = ch;
const fh = () => /* @__PURE__ */ E.jsx(
  lh.Google,
  {
    client: "ca-pub-1171588080744378",
    slot: "8699873320",
    className: "iklanGoogle",
    style: { maxWidth: 300, height: 300 },
    format: ""
  }
);
function dh() {
  const [e, t] = br([]);
  return gt(() => {
    zn.fetch(
      `*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
        "name": author -> name,
      } | order(publishedAt desc)`
    ).then((r) => {
      t(r);
    }).catch(console.error);
  }, []), /* @__PURE__ */ E.jsx(E.Fragment, { children: /* @__PURE__ */ E.jsxs("div", { id: "Blog", className: "max-w-7xl px-5 mx-auto mt-20 mb-10", children: [
    /* @__PURE__ */ E.jsx("h1", { className: "text-4xl lg:text-6xl mb-6 capitalize", children: "All Blog Posts" }),
    /* @__PURE__ */ E.jsxs("section", { className: "grid_post", children: [
      e.map((r) => /* @__PURE__ */ E.jsx("div", { children: /* @__PURE__ */ E.jsxs("article", { className: "postCard", children: [
        /* @__PURE__ */ E.jsxs("div", { className: "postCard_img", children: [
          r.mainImage && /* @__PURE__ */ E.jsx(
            "img",
            {
              src: r.mainImage.asset.url,
              alt: r.mainImage.alt,
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ E.jsx("h2", { className: "titleBox", children: r.title })
        ] }),
        /* @__PURE__ */ E.jsx("div", { className: "textBox", children: /* @__PURE__ */ E.jsxs("div", { className: "textContent", children: [
          /* @__PURE__ */ E.jsx("h2", { className: "text-xl my-2", children: r.title }),
          /* @__PURE__ */ E.jsx("p", { className: "text-sm leading-relaxed", children: `${r.body[0].children[0].text.substring(0, 100)}...` }),
          /* @__PURE__ */ E.jsx(kt, { className: "button", to: `/blog/${r.slug.current}`, children: " Baca " }, r.slug.current)
        ] }) })
      ] }) }, r.slug.current)),
      /* @__PURE__ */ E.jsx("div", { className: "iklanGoogle", children: /* @__PURE__ */ E.jsx(fh, {}) })
    ] }),
    /* @__PURE__ */ E.jsx("div", { className: "max-w-7xl mx-auto px-5 mb-20 flex items-end justify-end", children: /* @__PURE__ */ E.jsx(
      kt,
      {
        to: "/",
        className: "bg-white dark:bg-slate-800 dark:hover:bg-slate-700 py-2 px-8 rounded shadow text-slate-800 dark:text-slate-400 tracking-wide hover:opacity-75 transition-all duration-200",
        children: "Back to Homepage"
      }
    ) })
  ] }) });
}
function to(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ro(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? to(Object(r), !0).forEach(function(n) {
      hh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : to(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hh(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gr(e) {
  return e._type === "span" && "text" in e && typeof e.text == "string" && (e.marks === void 0 || Array.isArray(e.marks) && e.marks.every((t) => typeof t == "string"));
}
function ui(e) {
  return typeof e._type == "string" && e._type[0] !== "@" && (!("markDefs" in e) || Array.isArray(e.markDefs) && e.markDefs.every((t) => typeof t._key == "string")) && "children" in e && Array.isArray(e.children) && e.children.every((t) => typeof t == "object" && "_type" in t);
}
function ci(e) {
  return ui(e) && "listItem" in e && typeof e.listItem == "string" && (e.level === void 0 || typeof e.level == "number");
}
function li(e) {
  return e._type === "@list";
}
function fi(e) {
  return e._type === "@span";
}
function di(e) {
  return e._type === "@text";
}
const no = ["strong", "em", "code", "underline", "strike-through"];
function ph(e, t, r) {
  if (!gr(e) || !e.marks)
    return [];
  if (!e.marks.length)
    return [];
  const n = e.marks.slice(), a = {};
  return n.forEach((o) => {
    a[o] = 1;
    for (let i = t + 1; i < r.length; i++) {
      const s = r[i];
      if (!(s && gr(s) && Array.isArray(s.marks) && s.marks.indexOf(o) !== -1))
        break;
      a[o]++;
    }
  }), n.sort((o, i) => function(s, c, u) {
    const d = s[c], l = s[u];
    if (d !== l)
      return l - d;
    const h = no.indexOf(c), v = no.indexOf(u);
    return h !== v ? h - v : c.localeCompare(u);
  }(a, o, i));
}
function vh(e) {
  var t;
  const { children: r, markDefs: n = [] } = e;
  if (!r || !r.length)
    return [];
  const a = r.map(ph), o = { _type: "@span", children: [], markType: "<unknown>" };
  let i = [o];
  for (let s = 0; s < r.length; s++) {
    const c = r[s];
    if (!c)
      continue;
    const u = a[s] || [];
    let d = 1;
    if (i.length > 1)
      for (; d < i.length; d++) {
        const h = ((t = i[d]) == null ? void 0 : t.markKey) || "", v = u.indexOf(h);
        if (v === -1)
          break;
        u.splice(v, 1);
      }
    i = i.slice(0, d);
    let l = i[i.length - 1];
    if (l) {
      for (const h of u) {
        const v = n.find((y) => y._key === h), _ = v ? v._type : h, g = { _type: "@span", _key: c._key, children: [], markDef: v, markType: _, markKey: h };
        l.children.push(g), i.push(g), l = g;
      }
      if (gr(c)) {
        const h = c.text.split(`
`);
        for (let v = h.length; v-- > 1; )
          h.splice(v, 0, `
`);
        l.children = l.children.concat(h.map((v) => ({ _type: "@text", text: v })));
      } else
        l.children = l.children.concat(c);
    }
  }
  return o.children;
}
function mh(e, t) {
  const r = [];
  let n;
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    if (o)
      if (ci(o))
        if (n)
          if (gh(o, n))
            n.children.push(o);
          else if ((o.level || 1) > n.level) {
            const i = ar(o, a, t);
            if (t === "html") {
              const s = n.children[n.children.length - 1], c = ro(ro({}, s), {}, { children: [...s.children, i] });
              n.children[n.children.length - 1] = c;
            } else
              n.children.push(i);
            n = i;
          } else if ((o.level || 1) < n.level) {
            const i = r[r.length - 1], s = i && En(i, o);
            if (s) {
              n = s, n.children.push(o);
              continue;
            }
            n = ar(o, a, t), r.push(n);
          } else if (o.listItem === n.listItem)
            console.warn("Unknown state encountered for block", o), r.push(o);
          else {
            const i = r[r.length - 1], s = i && En(i, { level: o.level || 1 });
            if (s && s.listItem === o.listItem) {
              n = s, n.children.push(o);
              continue;
            }
            n = ar(o, a, t), r.push(n);
          }
        else
          n = ar(o, a, t), r.push(n);
      else
        r.push(o), n = void 0;
  }
  return r;
}
function gh(e, t) {
  return (e.level || 1) === t.level && e.listItem === t.listItem;
}
function ar(e, t, r) {
  return { _type: "@list", _key: "".concat(e._key || "".concat(t), "-parent"), mode: r, level: e.level || 1, listItem: e.listItem, children: [e] };
}
function En(e, t) {
  const r = t.level || 1, n = t.listItem || "normal", a = typeof t.listItem == "string";
  if (li(e) && (e.level || 1) === r && a && (e.listItem || "normal") === n)
    return e;
  if (!("children" in e))
    return;
  const o = e.children[e.children.length - 1];
  return o && !gr(o) ? En(o, t) : void 0;
}
function hi(e) {
  let t = "";
  return e.children.forEach((r) => {
    di(r) ? t += r.text : fi(r) && (t += hi(r));
  }), t;
}
const yh = "html";
var bh = Object.defineProperty, wh = Object.defineProperties, Eh = Object.getOwnPropertyDescriptors, yr = Object.getOwnPropertySymbols, pi = Object.prototype.hasOwnProperty, vi = Object.prototype.propertyIsEnumerable, ao = (e, t, r) => t in e ? bh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, lt = (e, t) => {
  for (var r in t || (t = {}))
    pi.call(t, r) && ao(e, r, t[r]);
  if (yr)
    for (var r of yr(t))
      vi.call(t, r) && ao(e, r, t[r]);
  return e;
}, _n = (e, t) => wh(e, Eh(t)), On = (e, t) => {
  var r = {};
  for (var n in e)
    pi.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && yr)
    for (var n of yr(e))
      t.indexOf(n) < 0 && vi.call(e, n) && (r[n] = e[n]);
  return r;
};
function _h(e, t) {
  const r = t, n = On(r, ["block", "list", "listItem", "marks", "types"]);
  return lt(_n(lt({}, e), {
    block: Yt(e, t, "block"),
    list: Yt(e, t, "list"),
    listItem: Yt(e, t, "listItem"),
    marks: Yt(e, t, "marks"),
    types: Yt(e, t, "types")
  }), n);
}
function Yt(e, t, r) {
  const n = t[r], a = e[r];
  return typeof n == "function" || n && typeof a == "function" ? n : n ? lt(lt({}, a), n) : a;
}
const Oh = ({ children: e, value: t }) => /* @__PURE__ */ V.createElement("a", {
  href: t == null ? void 0 : t.href
}, e), xh = { textDecoration: "underline" }, Th = {
  em: ({ children: e }) => /* @__PURE__ */ V.createElement("em", null, e),
  strong: ({ children: e }) => /* @__PURE__ */ V.createElement("strong", null, e),
  code: ({ children: e }) => /* @__PURE__ */ V.createElement("code", null, e),
  underline: ({ children: e }) => /* @__PURE__ */ V.createElement("span", {
    style: xh
  }, e),
  "strike-through": ({ children: e }) => /* @__PURE__ */ V.createElement("del", null, e),
  link: Oh
}, Sh = {
  number: ({ children: e }) => /* @__PURE__ */ V.createElement("ol", null, e),
  bullet: ({ children: e }) => /* @__PURE__ */ V.createElement("ul", null, e)
}, Ch = ({ children: e }) => /* @__PURE__ */ V.createElement("li", null, e), Kt = (e, t) => `Unknown ${e}, specify a component for it in the \`components.${t}\` prop`, mi = (e) => Kt(`block type "${e}"`, "types"), Ph = (e) => Kt(`mark type "${e}"`, "marks"), Rh = (e) => Kt(`block style "${e}"`, "block"), Ih = (e) => Kt(`list style "${e}"`, "list"), jh = (e) => Kt(`list item style "${e}"`, "listItem");
function Dh(e) {
  console.warn(e);
}
const oo = { display: "none" }, kh = ({
  value: e,
  isInline: t
}) => {
  const r = mi(e._type);
  return t ? /* @__PURE__ */ V.createElement("span", {
    style: oo
  }, r) : /* @__PURE__ */ V.createElement("div", {
    style: oo
  }, r);
}, Ah = ({
  markType: e,
  children: t
}) => /* @__PURE__ */ V.createElement("span", {
  className: `unknown__pt__mark__${e}`
}, t), Nh = ({
  children: e
}) => /* @__PURE__ */ V.createElement("p", null, e), Mh = ({ children: e }) => /* @__PURE__ */ V.createElement("ul", null, e), $h = ({
  children: e
}) => /* @__PURE__ */ V.createElement("li", null, e), Uh = () => /* @__PURE__ */ V.createElement("br", null), Lh = {
  normal: ({ children: e }) => /* @__PURE__ */ V.createElement("p", null, e),
  blockquote: ({ children: e }) => /* @__PURE__ */ V.createElement("blockquote", null, e),
  h1: ({ children: e }) => /* @__PURE__ */ V.createElement("h1", null, e),
  h2: ({ children: e }) => /* @__PURE__ */ V.createElement("h2", null, e),
  h3: ({ children: e }) => /* @__PURE__ */ V.createElement("h3", null, e),
  h4: ({ children: e }) => /* @__PURE__ */ V.createElement("h4", null, e),
  h5: ({ children: e }) => /* @__PURE__ */ V.createElement("h5", null, e),
  h6: ({ children: e }) => /* @__PURE__ */ V.createElement("h6", null, e)
}, qh = {
  types: {},
  block: Lh,
  marks: Th,
  list: Sh,
  listItem: Ch,
  hardBreak: Uh,
  unknownType: kh,
  unknownMark: Ah,
  unknownList: Mh,
  unknownListItem: $h,
  unknownBlockStyle: Nh
}, io = Oi(qh);
function Wh({
  value: e,
  components: t,
  listNestingMode: r,
  onMissingComponent: n = Dh
}) {
  const a = n || Bh, o = Array.isArray(e) ? e : [e], i = mh(o, r || yh), s = xi(io), c = Kn(() => t ? _h(s, t) : s, [s, t]), u = Kn(() => Fh(c, a), [c, a]), d = i.map((l, h) => u({ node: l, index: h, isInline: !1, renderNode: u }));
  return t ? /* @__PURE__ */ V.createElement(io.Provider, {
    value: c
  }, d) : /* @__PURE__ */ V.createElement(V.Fragment, null, d);
}
const Fh = (e, t) => {
  function r(u) {
    const { node: d, index: l, isInline: h } = u, v = d._key || `node-${l}`;
    return li(d) ? a(d, l, v) : ci(d) ? n(d, l, v) : fi(d) ? o(d, l, v) : ui(d) ? i(d, l, v, h) : di(d) ? s(d, v) : c(d, l, v, h);
  }
  function n(u, d, l) {
    const h = so({ node: u, index: d, isInline: !1, renderNode: r }), v = e.listItem, g = (typeof v == "function" ? v : v[u.listItem]) || e.unknownListItem;
    if (g === e.unknownListItem) {
      const p = u.listItem || "bullet";
      t(jh(p), {
        type: p,
        nodeType: "listItemStyle"
      });
    }
    let y = h.children;
    if (u.style && u.style !== "normal") {
      const p = u, x = On(p, ["listItem"]);
      y = r({ node: x, index: d, isInline: !1, renderNode: r });
    }
    return /* @__PURE__ */ V.createElement(g, {
      key: l,
      value: u,
      index: d,
      isInline: !1,
      renderNode: r
    }, y);
  }
  function a(u, d, l) {
    const h = u.children.map((y, p) => r({
      node: y._key ? y : _n(lt({}, y), { _key: `li-${d}-${p}` }),
      index: d,
      isInline: !1,
      renderNode: r
    })), v = e.list, g = (typeof v == "function" ? v : v[u.listItem]) || e.unknownList;
    if (g === e.unknownList) {
      const y = u.listItem || "bullet";
      t(Ih(y), { nodeType: "listStyle", type: y });
    }
    return /* @__PURE__ */ V.createElement(g, {
      key: l,
      value: u,
      index: d,
      isInline: !1,
      renderNode: r
    }, h);
  }
  function o(u, d, l) {
    const { markDef: h, markType: v, markKey: _ } = u, g = e.marks[v] || e.unknownMark, y = u.children.map((p, x) => r({ node: p, index: x, isInline: !0, renderNode: r }));
    return g === e.unknownMark && t(Ph(v), { nodeType: "mark", type: v }), /* @__PURE__ */ V.createElement(g, {
      key: l,
      text: hi(u),
      value: h,
      markType: v,
      markKey: _,
      renderNode: r
    }, y);
  }
  function i(u, d, l, h) {
    const v = so({ node: u, index: d, isInline: h, renderNode: r }), _ = On(v, ["_key"]), g = _.node.style || "normal", p = (typeof e.block == "function" ? e.block : e.block[g]) || e.unknownBlockStyle;
    return p === e.unknownBlockStyle && t(Rh(g), {
      nodeType: "blockStyle",
      type: g
    }), /* @__PURE__ */ V.createElement(p, _n(lt({
      key: l
    }, _), {
      value: _.node,
      renderNode: r
    }));
  }
  function s(u, d) {
    if (u.text === `
`) {
      const l = e.hardBreak;
      return l ? /* @__PURE__ */ V.createElement(l, {
        key: d
      }) : `
`;
    }
    return u.text;
  }
  function c(u, d, l, h) {
    const v = e.types[u._type], _ = {
      value: u,
      isInline: h,
      index: d,
      renderNode: r
    };
    if (v)
      return /* @__PURE__ */ V.createElement(v, lt({
        key: l
      }, _));
    t(mi(u._type), { nodeType: "block", type: u._type });
    const g = e.unknownType;
    return /* @__PURE__ */ V.createElement(g, lt({
      key: l
    }, _));
  }
  return r;
};
function so(e) {
  const { node: t, index: r, isInline: n, renderNode: a } = e, i = vh(t).map((s, c) => a({ node: s, isInline: !0, index: c, renderNode: a }));
  return {
    _key: t._key || `block-${r}`,
    children: i,
    index: r,
    isInline: n,
    node: t
  };
}
function Bh() {
}
function Yh() {
  const [e, t] = br([]), { slug: r } = ds();
  return gt(() => {
    zn.fetch(
      `*[slug.current == "${r}"] {
        title,
        slug,
        body,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
        "name": author -> name,
      }`
    ).then((n) => {
      t(n[0]);
    }).catch(console.error);
  }, [r]), gt(() => {
    document.title = `Membaca | ${e.title}`;
  }, [e.title]), /* @__PURE__ */ E.jsx(E.Fragment, { children: e && /* @__PURE__ */ E.jsxs("section", { className: "blog_post", children: [
    e.mainImage && /* @__PURE__ */ E.jsx(
      Zo,
      {
        src: e.mainImage.asset.url,
        alt: e.mainImage.alt,
        height: 200,
        width: 200,
        className: "img_post",
        placeholderSrc: ri
      }
    ),
    /* @__PURE__ */ E.jsxs("div", { className: "post_body", children: [
      /* @__PURE__ */ E.jsx("h1", { className: "text-4xl my-8 xl:text-6xl", children: e.title }),
      /* @__PURE__ */ E.jsxs("p", { className: "font-bold text-sm mb-8", children: [
        "By ",
        e.name,
        " ",
        e.publishedAt && /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
          "·",
          " ",
          Nd(new Date(e.publishedAt), "dd MMMM yyyy")
        ] })
      ] }),
      /* @__PURE__ */ E.jsx(Wh, { value: e.body })
    ] })
  ] }) });
}
function Hh() {
  return /* @__PURE__ */ E.jsx(E.Fragment, {});
}
function Vh() {
  const e = vo();
  return console.error(e), /* @__PURE__ */ E.jsxs("div", { id: "error-page", children: [
    /* @__PURE__ */ E.jsx("h1", { children: "Oops!" }),
    /* @__PURE__ */ E.jsx("p", { children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ E.jsx("p", { children: /* @__PURE__ */ E.jsx("i", { children: e.statusText || e.message }) })
  ] });
}
const zh = () => /* @__PURE__ */ E.jsx("nav", { className: "nav nav--left js-nav", children: /* @__PURE__ */ E.jsxs("ul", { children: [
  /* @__PURE__ */ E.jsx("li", { children: /* @__PURE__ */ E.jsx(
    ir,
    {
      to: "/",
      style: (e) => ({
        color: e ? "#fff" : "#fcd933"
      }),
      children: /* @__PURE__ */ E.jsx("span", { children: "HeadLine" })
    }
  ) }),
  /* @__PURE__ */ E.jsx("li", { children: /* @__PURE__ */ E.jsx(
    ir,
    {
      to: "/blog",
      style: (e) => ({
        color: e ? "#fff" : "#fcd933"
      }),
      children: /* @__PURE__ */ E.jsx("span", { children: "Blog Posts" })
    }
  ) }),
  /* @__PURE__ */ E.jsx("li", { children: /* @__PURE__ */ E.jsx(
    ir,
    {
      to: "nftDrop",
      style: (e) => ({
        color: e ? "#fff" : "#fcd933"
      }),
      children: /* @__PURE__ */ E.jsx("span", { children: "MarketPleace" })
    }
  ) })
] }) }), Gh = () => /* @__PURE__ */ E.jsxs("footer", { className: "footer", children: [
  /* @__PURE__ */ E.jsx("div", { className: "leftSection", children: /* @__PURE__ */ E.jsx("span", { className: "copyright", children: "Copyright ©️ 2023" }) }),
  /* @__PURE__ */ E.jsx("div", { className: "rightSection", children: /* @__PURE__ */ E.jsx("ul", { className: "flex_ul", children: /* @__PURE__ */ E.jsx("li", { children: /* @__PURE__ */ E.jsx(kt, { to: "https://github.com/daffadevhosting", target: "_blank", children: /* @__PURE__ */ E.jsx("span", { children: "Github" }) }) }) }) })
] });
function Xh() {
  const { pathname: e } = wt();
  gt(() => {
    window.scrollTo(0, 0);
  }, [e]);
}
function Qh() {
  return /* @__PURE__ */ E.jsxs(ks, { children: [
    /* @__PURE__ */ E.jsx(zh, {}),
    /* @__PURE__ */ E.jsx(Xh, {}),
    /* @__PURE__ */ E.jsx("div", { className: "container", children: /* @__PURE__ */ E.jsxs(Os, { children: [
      /* @__PURE__ */ E.jsx(jt, { exact: !0, path: "/", element: /* @__PURE__ */ E.jsx($d, {}) }),
      /* @__PURE__ */ E.jsx(jt, { exact: !0, path: "/blog", element: /* @__PURE__ */ E.jsx(dh, {}) }),
      /* @__PURE__ */ E.jsx(jt, { exact: !0, path: "/blog/:slug", element: /* @__PURE__ */ E.jsx(Yh, {}) }),
      /* @__PURE__ */ E.jsx(jt, { exact: !0, path: "/nftDrop", element: /* @__PURE__ */ E.jsx(Hh, {}) }),
      /* @__PURE__ */ E.jsx(jt, { exact: !0, path: "*", element: /* @__PURE__ */ E.jsx(Vh, {}) })
    ] }) }),
    /* @__PURE__ */ E.jsx(Gh, {})
  ] });
}
Ht.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ E.jsx(V.StrictMode, { children: /* @__PURE__ */ E.jsx(Qh, {}) })
);
