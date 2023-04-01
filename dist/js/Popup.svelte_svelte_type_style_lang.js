function C() {
}
const Z = (t) => t;
function kt(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function U(t) {
  return t();
}
function L() {
  return /* @__PURE__ */ Object.create(null);
}
function v(t) {
  t.forEach(U);
}
function T(t) {
  return typeof t == "function";
}
function Ct(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let A;
function jt(t, e) {
  return A || (A = document.createElement("a")), A.href = e, t === A.href;
}
function tt(t) {
  return Object.keys(t).length === 0;
}
const J = typeof window < "u";
let et = J ? () => window.performance.now() : () => Date.now(), B = J ? (t) => requestAnimationFrame(t) : C;
const x = /* @__PURE__ */ new Set();
function K(t) {
  x.forEach((e) => {
    e.c(t) || (x.delete(e), e.f());
  }), x.size !== 0 && B(K);
}
function nt(t) {
  let e;
  return x.size === 0 && B(K), {
    promise: new Promise((n) => {
      x.add(e = { c: t, f: n });
    }),
    abort() {
      x.delete(e);
    }
  };
}
function ot(t, e) {
  t.appendChild(e);
}
function Q(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function rt(t) {
  const e = it("style");
  return st(Q(t), e), e.sheet;
}
function st(t, e) {
  return ot(t.head || t, e), e.sheet;
}
function Ft(t, e, n) {
  t.insertBefore(e, n || null);
}
function V(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function At(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function it(t) {
  return document.createElement(t);
}
function W(t) {
  return document.createTextNode(t);
}
function Nt() {
  return W(" ");
}
function Ot() {
  return W("");
}
function St(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
}
function zt(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function Dt(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function at(t) {
  return Array.from(t.childNodes);
}
function Pt(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function Mt(t, e, n, o) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, o ? "important" : "");
}
function ct(t, e, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  const c = document.createEvent("CustomEvent");
  return c.initCustomEvent(t, n, o, e), c;
}
function qt(t, e) {
  return new t(e);
}
const O = /* @__PURE__ */ new Map();
let S = 0;
function ut(t) {
  let e = 5381, n = t.length;
  for (; n--; )
    e = (e << 5) - e ^ t.charCodeAt(n);
  return e >>> 0;
}
function ft(t, e) {
  const n = { stylesheet: rt(e), rules: {} };
  return O.set(t, n), n;
}
function G(t, e, n, o, c, a, u, r = 0) {
  const i = 16.666 / o;
  let s = `{
`;
  for (let g = 0; g <= 1; g += i) {
    const y = e + (n - e) * a(g);
    s += g * 100 + `%{${u(y, 1 - y)}}
`;
  }
  const _ = s + `100% {${u(n, 1 - n)}}
}`, l = `__svelte_${ut(_)}_${r}`, h = Q(t), { stylesheet: f, rules: p } = O.get(h) || ft(h, t);
  p[l] || (p[l] = !0, f.insertRule(`@keyframes ${l} ${_}`, f.cssRules.length));
  const d = t.style.animation || "";
  return t.style.animation = `${d ? `${d}, ` : ""}${l} ${o}ms linear ${c}ms 1 both`, S += 1, l;
}
function lt(t, e) {
  const n = (t.style.animation || "").split(", "), o = n.filter(
    e ? (a) => a.indexOf(e) < 0 : (a) => a.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), c = n.length - o.length;
  c && (t.style.animation = o.join(", "), S -= c, S || dt());
}
function dt() {
  B(() => {
    S || (O.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && V(e);
    }), O.clear());
  });
}
let j;
function k(t) {
  j = t;
}
function _t() {
  if (!j)
    throw new Error("Function called outside component initialization");
  return j;
}
function Rt(t) {
  _t().$$.on_mount.push(t);
}
const w = [], H = [];
let b = [];
const I = [], pt = /* @__PURE__ */ Promise.resolve();
let R = !1;
function ht() {
  R || (R = !0, pt.then(X));
}
function z(t) {
  b.push(t);
}
const M = /* @__PURE__ */ new Set();
let $ = 0;
function X() {
  if ($ !== 0)
    return;
  const t = j;
  do {
    try {
      for (; $ < w.length; ) {
        const e = w[$];
        $++, k(e), mt(e.$$);
      }
    } catch (e) {
      throw w.length = 0, $ = 0, e;
    }
    for (k(null), w.length = 0, $ = 0; H.length; )
      H.pop()();
    for (let e = 0; e < b.length; e += 1) {
      const n = b[e];
      M.has(n) || (M.add(n), n());
    }
    b.length = 0;
  } while (w.length);
  for (; I.length; )
    I.pop()();
  R = !1, M.clear(), k(t);
}
function mt(t) {
  if (t.fragment !== null) {
    t.update(), v(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(z);
  }
}
function gt(t) {
  const e = [], n = [];
  b.forEach((o) => t.indexOf(o) === -1 ? e.push(o) : n.push(o)), n.forEach((o) => o()), b = e;
}
let E;
function yt() {
  return E || (E = Promise.resolve(), E.then(() => {
    E = null;
  })), E;
}
function q(t, e, n) {
  t.dispatchEvent(ct(`${e ? "intro" : "outro"}${n}`));
}
const N = /* @__PURE__ */ new Set();
let m;
function Tt() {
  m = {
    r: 0,
    c: [],
    p: m
    // parent group
  };
}
function Bt() {
  m.r || v(m.c), m = m.p;
}
function $t(t, e) {
  t && t.i && (N.delete(t), t.i(e));
}
function Lt(t, e, n, o) {
  if (t && t.o) {
    if (N.has(t))
      return;
    N.add(t), m.c.push(() => {
      N.delete(t), o && (n && t.d(1), o());
    }), t.o(e);
  } else
    o && o();
}
const wt = { duration: 0 };
function Gt(t, e, n, o) {
  const c = { direction: "both" };
  let a = e(t, n, c), u = o ? 0 : 1, r = null, i = null, s = null;
  function _() {
    s && lt(t, s);
  }
  function l(f, p) {
    const d = f.b - u;
    return p *= Math.abs(d), {
      a: u,
      b: f.b,
      d,
      duration: p,
      start: f.start,
      end: f.start + p,
      group: f.group
    };
  }
  function h(f) {
    const { delay: p = 0, duration: d = 300, easing: g = Z, tick: y = C, css: D } = a || wt, P = {
      start: et() + p,
      b: f
    };
    f || (P.group = m, m.r += 1), r || i ? i = P : (D && (_(), s = G(t, u, f, d, p, g, D)), f && y(0, 1), r = l(P, d), z(() => q(t, f, "start")), nt((F) => {
      if (i && F > i.start && (r = l(i, d), i = null, q(t, r.b, "start"), D && (_(), s = G(t, u, r.b, r.duration, 0, g, a.css))), r) {
        if (F >= r.end)
          y(u = r.b, 1 - u), q(t, r.b, "end"), i || (r.b ? _() : --r.group.r || v(r.group.c)), r = null;
        else if (F >= r.start) {
          const Y = F - r.start;
          u = r.a + r.d * g(Y / r.duration), y(u, 1 - u);
        }
      }
      return !!(r || i);
    }));
  }
  return {
    run(f) {
      T(a) ? yt().then(() => {
        a = a(c), h(f);
      }) : h(f);
    },
    end() {
      _(), r = i = null;
    }
  };
}
const Ht = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function It(t, e) {
  const n = {}, o = {}, c = { $$scope: 1 };
  let a = t.length;
  for (; a--; ) {
    const u = t[a], r = e[a];
    if (r) {
      for (const i in u)
        i in r || (o[i] = 1);
      for (const i in r)
        c[i] || (n[i] = r[i], c[i] = 1);
      t[a] = r;
    } else
      for (const i in u)
        c[i] = 1;
  }
  for (const u in o)
    u in n || (n[u] = void 0);
  return n;
}
function Ut(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Jt(t) {
  t && t.c();
}
function xt(t, e, n, o) {
  const { fragment: c, after_update: a } = t.$$;
  c && c.m(e, n), o || z(() => {
    const u = t.$$.on_mount.map(U).filter(T);
    t.$$.on_destroy ? t.$$.on_destroy.push(...u) : v(u), t.$$.on_mount = [];
  }), a.forEach(z);
}
function bt(t, e) {
  const n = t.$$;
  n.fragment !== null && (gt(n.after_update), v(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function vt(t, e) {
  t.$$.dirty[0] === -1 && (w.push(t), ht(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Kt(t, e, n, o, c, a, u, r = [-1]) {
  const i = j;
  k(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: C,
    not_equal: c,
    bound: L(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (i ? i.$$.context : [])),
    // everything else
    callbacks: L(),
    dirty: r,
    skip_bound: !1,
    root: e.target || i.$$.root
  };
  u && u(s.root);
  let _ = !1;
  if (s.ctx = n ? n(t, e.props || {}, (l, h, ...f) => {
    const p = f.length ? f[0] : h;
    return s.ctx && c(s.ctx[l], s.ctx[l] = p) && (!s.skip_bound && s.bound[l] && s.bound[l](p), _ && vt(t, l)), h;
  }) : [], s.update(), _ = !0, v(s.before_update), s.fragment = o ? o(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const l = at(e.target);
      s.fragment && s.fragment.l(l), l.forEach(V);
    } else
      s.fragment && s.fragment.c();
    e.intro && $t(t.$$.fragment), xt(t, e.target, e.anchor, e.customElement), X();
  }
  k(i);
}
class Qt {
  $destroy() {
    bt(this, 1), this.$destroy = C;
  }
  $on(e, n) {
    if (!T(n))
      return C;
    const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return o.push(n), () => {
      const c = o.indexOf(n);
      c !== -1 && o.splice(c, 1);
    };
  }
  $set(e) {
    this.$$set && !tt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function Et(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Vt(t, {
  delay: e = 0,
  duration: n = 400,
  easing: o = Et,
  axis: c = "x"
} = {}) {
  const a = getComputedStyle(t), u = +a.opacity, r = c === "y" ? "height" : "width", i = parseFloat(a[r]), s = c === "y" ? ["top", "bottom"] : ["left", "right"], _ = s.map((d) => `${d[0].toUpperCase()}${d.slice(1)}`), l = parseFloat(a[`padding${_[0]}`]), h = parseFloat(a[`padding${_[1]}`]), f = parseFloat(a[`margin${_[0]}`]), p = parseFloat(a[`margin${_[1]}`]);
  return {
    delay: e,
    duration: n,
    easing: o,
    css: (d) => `overflow: hidden;opacity: ${Math.min(d * 20, 1) * u};${r}: ${d * i}px;padding-${s[0]}: ${d * l}px;padding-${s[1]}: ${d * h}px;margin-${s[0]}: ${d * f}px;margin-${s[1]}: ${d * p}px;`
    // +
    // `border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;` +
    // `border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;`
  };
}
export {
  zt as A,
  H as B,
  qt as C,
  Jt as D,
  xt as E,
  It as F,
  Ut as G,
  bt as H,
  kt as I,
  Qt as S,
  Nt as a,
  Dt as b,
  ot as c,
  Ft as d,
  it as e,
  Bt as f,
  Lt as g,
  V as h,
  Kt as i,
  At as j,
  Ht as k,
  St as l,
  W as m,
  Pt as n,
  Tt as o,
  jt as p,
  z as q,
  v as r,
  Ct as s,
  $t as t,
  Gt as u,
  Ot as v,
  Vt as w,
  C as x,
  Mt as y,
  Rt as z
};
//# sourceMappingURL=Popup.svelte_svelte_type_style_lang.js.map
