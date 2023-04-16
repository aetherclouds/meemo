function C() {
}
const Z = (t) => t;
function kt(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function J(t) {
  return t();
}
function L() {
  return /* @__PURE__ */ Object.create(null);
}
function v(t) {
  t.forEach(J);
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
const U = typeof window < "u";
let et = U ? () => window.performance.now() : () => Date.now(), B = U ? (t) => requestAnimationFrame(t) : C;
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
  const e = st("style");
  return it(Q(t), e), e.sheet;
}
function it(t, e) {
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
function st(t) {
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
function Mt(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function Pt(t, e) {
  t.value = e ?? "";
}
function qt(t, e, n, o) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, o ? "important" : "");
}
function ct(t, e, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  const c = document.createEvent("CustomEvent");
  return c.initCustomEvent(t, n, o, e), c;
}
function Rt(t, e) {
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
  const s = 16.666 / o;
  let i = `{
`;
  for (let g = 0; g <= 1; g += s) {
    const y = e + (n - e) * a(g);
    i += g * 100 + `%{${u(y, 1 - y)}}
`;
  }
  const _ = i + `100% {${u(n, 1 - n)}}
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
function Tt(t) {
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
const P = /* @__PURE__ */ new Set();
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
      P.has(n) || (P.add(n), n());
    }
    b.length = 0;
  } while (w.length);
  for (; I.length; )
    I.pop()();
  R = !1, P.clear(), k(t);
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
function Bt() {
  m = {
    r: 0,
    c: [],
    p: m
    // parent group
  };
}
function Lt() {
  m.r || v(m.c), m = m.p;
}
function $t(t, e) {
  t && t.i && (N.delete(t), t.i(e));
}
function Gt(t, e, n, o) {
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
function Ht(t, e, n, o) {
  const c = { direction: "both" };
  let a = e(t, n, c), u = o ? 0 : 1, r = null, s = null, i = null;
  function _() {
    i && lt(t, i);
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
    const { delay: p = 0, duration: d = 300, easing: g = Z, tick: y = C, css: D } = a || wt, M = {
      start: et() + p,
      b: f
    };
    f || (M.group = m, m.r += 1), r || s ? s = M : (D && (_(), i = G(t, u, f, d, p, g, D)), f && y(0, 1), r = l(M, d), z(() => q(t, f, "start")), nt((F) => {
      if (s && F > s.start && (r = l(s, d), s = null, q(t, r.b, "start"), D && (_(), i = G(t, u, r.b, r.duration, 0, g, a.css))), r) {
        if (F >= r.end)
          y(u = r.b, 1 - u), q(t, r.b, "end"), s || (r.b ? _() : --r.group.r || v(r.group.c)), r = null;
        else if (F >= r.start) {
          const Y = F - r.start;
          u = r.a + r.d * g(Y / r.duration), y(u, 1 - u);
        }
      }
      return !!(r || s);
    }));
  }
  return {
    run(f) {
      T(a) ? yt().then(() => {
        a = a(c), h(f);
      }) : h(f);
    },
    end() {
      _(), r = s = null;
    }
  };
}
const It = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function Jt(t, e) {
  const n = {}, o = {}, c = { $$scope: 1 };
  let a = t.length;
  for (; a--; ) {
    const u = t[a], r = e[a];
    if (r) {
      for (const s in u)
        s in r || (o[s] = 1);
      for (const s in r)
        c[s] || (n[s] = r[s], c[s] = 1);
      t[a] = r;
    } else
      for (const s in u)
        c[s] = 1;
  }
  for (const u in o)
    u in n || (n[u] = void 0);
  return n;
}
function Ut(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Kt(t) {
  t && t.c();
}
function xt(t, e, n, o) {
  const { fragment: c, after_update: a } = t.$$;
  c && c.m(e, n), o || z(() => {
    const u = t.$$.on_mount.map(J).filter(T);
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
function Qt(t, e, n, o, c, a, u, r = [-1]) {
  const s = j;
  k(t);
  const i = t.$$ = {
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
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: L(),
    dirty: r,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  u && u(i.root);
  let _ = !1;
  if (i.ctx = n ? n(t, e.props || {}, (l, h, ...f) => {
    const p = f.length ? f[0] : h;
    return i.ctx && c(i.ctx[l], i.ctx[l] = p) && (!i.skip_bound && i.bound[l] && i.bound[l](p), _ && vt(t, l)), h;
  }) : [], i.update(), _ = !0, v(i.before_update), i.fragment = o ? o(i.ctx) : !1, e.target) {
    if (e.hydrate) {
      const l = at(e.target);
      i.fragment && i.fragment.l(l), l.forEach(V);
    } else
      i.fragment && i.fragment.c();
    e.intro && $t(t.$$.fragment), xt(t, e.target, e.anchor, e.customElement), X();
  }
  k(s);
}
class Vt {
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
function Wt(t, {
  delay: e = 0,
  duration: n = 400,
  easing: o = Et,
  axis: c = "x"
} = {}) {
  const a = getComputedStyle(t), u = +a.opacity, r = c === "y" ? "height" : "width", s = parseFloat(a[r]), i = c === "y" ? ["top", "bottom"] : ["left", "right"], _ = i.map((d) => `${d[0].toUpperCase()}${d.slice(1)}`), l = parseFloat(a[`padding${_[0]}`]), h = parseFloat(a[`padding${_[1]}`]), f = parseFloat(a[`margin${_[0]}`]), p = parseFloat(a[`margin${_[1]}`]);
  return {
    delay: e,
    duration: n,
    easing: o,
    css: (d) => `overflow: hidden;opacity: ${Math.min(d * 20, 1) * u};${r}: ${d * s}px;padding-${i[0]}: ${d * l}px;padding-${i[1]}: ${d * h}px;margin-${i[0]}: ${d * f}px;margin-${i[1]}: ${d * p}px;`
    // +
    // `border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;` +
    // `border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;`
  };
}
export {
  zt as A,
  Pt as B,
  H as C,
  Rt as D,
  Kt as E,
  xt as F,
  Jt as G,
  Ut as H,
  bt as I,
  kt as J,
  Vt as S,
  Nt as a,
  Dt as b,
  ot as c,
  Ft as d,
  st as e,
  Lt as f,
  Gt as g,
  V as h,
  Qt as i,
  At as j,
  It as k,
  St as l,
  W as m,
  Mt as n,
  Bt as o,
  jt as p,
  z as q,
  v as r,
  Ct as s,
  $t as t,
  Ht as u,
  Ot as v,
  Wt as w,
  C as x,
  qt as y,
  Tt as z
};
