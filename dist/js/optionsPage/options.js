import { S as oe, i as ue, s as ce, e as y, a as T, b as u, c as p, d as N, l as E, t as C, f as B, g as j, h as S, j as G, r as ne, k as fe, m as F, n as V, o as I, p as se, q as ie, u as H, v as ae, w as P, x as de } from "../svelteTransition.js";
import { DEFAULT_OPTIONS as U, AVAILABLE_LANGUAGES as M } from "../const.js";
const { document: D } = fe;
function J(s, e, n) {
  const l = s.slice();
  return l[13] = e[n][0], l[14] = e[n][1], l[15] = e, l[16] = n, l;
}
function K(s, e, n) {
  const l = s.slice();
  return l[17] = e[n], l;
}
function Q(s, e, n) {
  const l = s.slice();
  return l[20] = e[n], l;
}
function pe(s) {
  let e, n, l;
  function t() {
    s[9].call(
      e,
      /*each_value*/
      s[15],
      /*i*/
      s[16]
    );
  }
  return {
    c() {
      e = y("input"), u(e, "type", "checkbox"), e.required = !0, u(e, "class", "outline-none border-zinc-900 bg-transparent my-auto ml-auto border-[1.5px] rounded w-6 h-6 ring-0 ring-offset-0 hover:ring-[1.5px] focus:ring-offset-1 focus:ring-[1.5px] ring-zinc-400 duration-100 svelte-1yqyasn");
    },
    m(i, r) {
      N(i, e, r), e.checked = /*optionDetails*/
      s[14].value, n || (l = E(e, "change", t), n = !0);
    },
    p(i, r) {
      s = i, r & /*Object, options*/
      1 && (e.checked = /*optionDetails*/
      s[14].value);
    },
    d(i) {
      i && S(e), n = !1, l();
    }
  };
}
function ge(s) {
  let e, n, l, t, i;
  function r(...v) {
    return (
      /*change_handler*/
      s[8](
        /*optionTitle*/
        s[13],
        ...v
      )
    );
  }
  return {
    c() {
      e = y("input"), u(e, "type", "number"), e.required = !0, u(e, "class", "appearance-none outline-none border-zinc-900 bg-transparent my-auto ml-auto min-w-8 w-0 max-w-max border-[1.5px] rounded placeholder-zinc-500 font-medium text-xl text-zinc-900 text-center py-0.5 ring-0 ring-offset-0 hover:ring-[1.5px] focus:ring-offset-1 focus:ring-[1.5px] ring-zinc-400 transition-input-field duration-100 svelte-1yqyasn"), u(e, "style", n = `width: calc(${/*optionDetails*/
      s[14].value.toString().length}ch + 1rem);`), e.value = l = /*optionDetails*/
      s[14].value;
    },
    m(v, a) {
      N(v, e, a), t || (i = [
        E(e, "input", ve),
        E(e, "change", r)
      ], t = !0);
    },
    p(v, a) {
      s = v, a & /*options*/
      1 && n !== (n = `width: calc(${/*optionDetails*/
      s[14].value.toString().length}ch + 1rem);`) && u(e, "style", n), a & /*options*/
      1 && l !== (l = /*optionDetails*/
      s[14].value) && e.value !== l && (e.value = l);
    },
    d(v) {
      v && S(e), t = !1, ne(i);
    }
  };
}
function W(s) {
  let e, n, l, t = (
    /*options*/
    s[0].selectedLanguages.value.length < /*availableLanguages*/
    s[1].length && X(s)
  ), i = M, r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = ee(K(s, i, a));
  const v = (a) => j(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      e = y("div"), t && t.c(), n = T();
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      u(e, "class", "mt-3 flex svelte-1yqyasn");
    },
    m(a, c) {
      N(a, e, c), t && t.m(e, null), p(e, n);
      for (let d = 0; d < r.length; d += 1)
        r[d] && r[d].m(e, null);
      l = !0;
    },
    p(a, c) {
      if (/*options*/
      a[0].selectedLanguages.value.length < /*availableLanguages*/
      a[1].length ? t ? (t.p(a, c), c & /*options, availableLanguages*/
      3 && C(t, 1)) : (t = X(a), t.c(), C(t, 1), t.m(e, n)) : t && (I(), j(t, 1, 1, () => {
        t = null;
      }), B()), c & /*handleRemoveLanguage, AVAILABLE_LANGUAGES, Object, options*/
      33) {
        i = M;
        let d;
        for (d = 0; d < i.length; d += 1) {
          const b = K(a, i, d);
          r[d] ? (r[d].p(b, c), C(r[d], 1)) : (r[d] = ee(b), r[d].c(), C(r[d], 1), r[d].m(e, null));
        }
        for (I(), d = i.length; d < r.length; d += 1)
          v(d);
        B();
      }
    },
    i(a) {
      if (!l) {
        C(t);
        for (let c = 0; c < i.length; c += 1)
          C(r[c]);
        l = !0;
      }
    },
    o(a) {
      j(t), r = r.filter(Boolean);
      for (let c = 0; c < r.length; c += 1)
        j(r[c]);
      l = !1;
    },
    d(a) {
      a && S(e), t && t.d(), G(r, a);
    }
  };
}
function X(s) {
  let e, n, l, t, i, r, v, a, c, d, b, L, O, x, k, h = M, g = [];
  for (let o = 0; o < h.length; o += 1)
    g[o] = Z(Q(s, h, o));
  return {
    c() {
      e = y("div"), n = y("img"), t = T(), i = y("p"), i.textContent = "de", r = T(), v = y("div"), a = y("select"), c = y("option");
      for (let o = 0; o < g.length; o += 1)
        g[o].c();
      d = T(), b = y("div"), b.innerHTML = '<span class="m-auto pointer-events-none svelte-1yqyasn">+</span>', se(n.src, l = "../data/flags/PT.svg") || u(n, "src", l), u(n, "class", "h-4.5 block mr-1 invisible svelte-1yqyasn"), u(i, "class", "invisible svelte-1yqyasn"), c.hidden = !0, c.disabled = !0, c.selected = !0, c.__value = "", c.value = c.__value, u(c, "class", "svelte-1yqyasn"), u(a, "name", "yep"), u(a, "id", ""), u(a, "class", "absolute h-full w-full left-0 top-0 opacity-0 svelte-1yqyasn"), u(b, "class", "h-full w-full relative flex pointer-events-none brounded svelte-1yqyasn"), u(v, "class", "absolute h-full w-full left-0 top-0  svelte-1yqyasn"), u(e, "class", "focus-within:ring-offset-1 focus-within:ring-[1.5px] border-[1.5px] rounded border-zinc-900 relative max-w-full p-0.5 flex font-medium text-xl cursor-pointer ring-0 hover:ring-[1.5px] ring-zinc-400 transition-ring duration-100 svelte-1yqyasn");
    },
    m(o, _) {
      N(o, e, _), p(e, n), p(e, t), p(e, i), p(e, r), p(e, v), p(v, a), p(a, c);
      for (let f = 0; f < g.length; f += 1)
        g[f] && g[f].m(a, null);
      p(v, d), p(v, b), O = !0, x || (k = E(
        a,
        "change",
        /*change_handler_1*/
        s[10]
      ), x = !0);
    },
    p(o, _) {
      if (_ & /*AVAILABLE_LANGUAGES, options*/
      1) {
        h = M;
        let f;
        for (f = 0; f < h.length; f += 1) {
          const w = Q(o, h, f);
          g[f] ? g[f].p(w, _) : (g[f] = Z(w), g[f].c(), g[f].m(a, null));
        }
        for (; f < g.length; f += 1)
          g[f].d(1);
        g.length = h.length;
      }
    },
    i(o) {
      O || (ie(() => {
        O && (L || (L = H(e, P, { axis: "x", duration: 200 }, !0)), L.run(1));
      }), O = !0);
    },
    o(o) {
      L || (L = H(e, P, { axis: "x", duration: 200 }, !1)), L.run(0), O = !1;
    },
    d(o) {
      o && S(e), G(g, o), o && L && L.end(), x = !1, k();
    }
  };
}
function Y(s) {
  let e, n = (
    /*languageCode*/
    s[20] + ""
  ), l;
  return {
    c() {
      e = y("option"), l = F(n), e.__value = /*languageCode*/
      s[20], e.value = e.__value, u(e, "class", "svelte-1yqyasn");
    },
    m(t, i) {
      N(t, e, i), p(e, l);
    },
    p: de,
    d(t) {
      t && S(e);
    }
  };
}
function Z(s) {
  let e = !/*options*/
  s[0].selectedLanguages.value.includes(
    /*languageCode*/
    s[20]
  ), n, l = e && Y(s);
  return {
    c() {
      l && l.c(), n = ae();
    },
    m(t, i) {
      l && l.m(t, i), N(t, n, i);
    },
    p(t, i) {
      i & /*options*/
      1 && (e = !/*options*/
      t[0].selectedLanguages.value.includes(
        /*languageCode*/
        t[20]
      )), e ? l ? l.p(t, i) : (l = Y(t), l.c(), l.m(n.parentNode, n)) : l && (l.d(1), l = null);
    },
    d(t) {
      l && l.d(t), t && S(n);
    }
  };
}
function $(s) {
  let e, n, l, t, i, r = (
    /*language*/
    s[17] + ""
  ), v, a, c, d, b, L;
  function O() {
    return (
      /*click_handler_2*/
      s[11](
        /*language*/
        s[17]
      )
    );
  }
  return {
    c() {
      e = y("button"), n = y("img"), t = T(), i = y("p"), v = F(r), a = T(), se(n.src, l = "../data/flags/" + /*language*/
      s[17].toUpperCase() + ".svg") || u(n, "src", l), u(n, "class", "rounded w-full h-4.5 block mr-0.5 svelte-1yqyasn"), u(i, "class", "align-middle my-auto lowercase svelte-1yqyasn"), u(e, "class", "border-[1.5px] relative overflow-hidden max-w-full rounded border-zinc-900 p-0.5 flex font-medium text-xl text-center ml-1 language-box cursor-pointer hover:ring-[1.5px] ring-red-400 ring-opacity-50 transition-ring duration-100 svelte-1yqyasn");
    },
    m(x, k) {
      N(x, e, k), p(e, n), p(e, t), p(e, i), p(i, v), p(e, a), d = !0, b || (L = E(e, "click", O), b = !0);
    },
    p(x, k) {
      s = x;
    },
    i(x) {
      d || (ie(() => {
        d && (c || (c = H(e, P, { axis: "x", duration: 200 }, !0)), c.run(1));
      }), d = !0);
    },
    o(x) {
      c || (c = H(e, P, { axis: "x", duration: 200 }, !1)), c.run(0), d = !1;
    },
    d(x) {
      x && S(e), x && c && c.end(), b = !1, L();
    }
  };
}
function ee(s) {
  let e = (
    /*optionDetails*/
    s[14].value.includes(
      /*language*/
      s[17]
    )
  ), n, l, t = e && $(s);
  return {
    c() {
      t && t.c(), n = ae();
    },
    m(i, r) {
      t && t.m(i, r), N(i, n, r), l = !0;
    },
    p(i, r) {
      r & /*options*/
      1 && (e = /*optionDetails*/
      i[14].value.includes(
        /*language*/
        i[17]
      )), e ? t ? (t.p(i, r), r & /*options*/
      1 && C(t, 1)) : (t = $(i), t.c(), C(t, 1), t.m(n.parentNode, n)) : t && (I(), j(t, 1, 1, () => {
        t = null;
      }), B());
    },
    i(i) {
      l || (C(t), l = !0);
    },
    o(i) {
      j(t), l = !1;
    },
    d(i) {
      t && t.d(i), i && S(n);
    }
  };
}
function le(s) {
  let e, n, l, t, i = (
    /*optionTitle*/
    s[13] + ""
  ), r, v, a, c = (
    /*optionDetails*/
    s[14].description + ""
  ), d, b, L, O, x, k;
  function h(f, w) {
    if (
      /*optionDetails*/
      f[14].type == "float"
    )
      return ge;
    if (
      /*optionDetails*/
      f[14].type == "bool"
    )
      return pe;
  }
  let g = h(s), o = g && g(s), _ = (
    /*optionDetails*/
    s[14].type == "languageSelection" && W(s)
  );
  return {
    c() {
      e = y("div"), n = y("div"), l = y("div"), t = y("h2"), r = F(i), v = T(), a = y("h3"), d = F(c), b = T(), o && o.c(), L = T(), _ && _.c(), O = T(), u(t, "class", "text-xl font-medium text-zinc-900 svelte-1yqyasn"), u(a, "class", "text-xs text-zinc-500 pr-2 svelte-1yqyasn"), u(l, "class", "my-auto svelte-1yqyasn"), u(n, "class", "w-full flex svelte-1yqyasn"), u(e, "class", x = "px-4 py-3 border-zinc-900 " + /*i*/
      (s[16] + 1 < Object.keys(
        /*options*/
        s[0]
      ).length ? "border-b-[1.5px]" : "") + " svelte-1yqyasn");
    },
    m(f, w) {
      N(f, e, w), p(e, n), p(n, l), p(l, t), p(t, r), p(l, v), p(l, a), p(a, d), p(n, b), o && o.m(n, null), p(e, L), _ && _.m(e, null), p(e, O), k = !0;
    },
    p(f, w) {
      (!k || w & /*options*/
      1) && i !== (i = /*optionTitle*/
      f[13] + "") && V(r, i), (!k || w & /*options*/
      1) && c !== (c = /*optionDetails*/
      f[14].description + "") && V(d, c), g === (g = h(f)) && o ? o.p(f, w) : (o && o.d(1), o = g && g(f), o && (o.c(), o.m(n, null))), /*optionDetails*/
      f[14].type == "languageSelection" ? _ ? (_.p(f, w), w & /*options*/
      1 && C(_, 1)) : (_ = W(f), _.c(), C(_, 1), _.m(e, O)) : _ && (I(), j(_, 1, 1, () => {
        _ = null;
      }), B()), (!k || w & /*options*/
      1 && x !== (x = "px-4 py-3 border-zinc-900 " + /*i*/
      (f[16] + 1 < Object.keys(
        /*options*/
        f[0]
      ).length ? "border-b-[1.5px]" : "") + " svelte-1yqyasn")) && u(e, "class", x);
    },
    i(f) {
      k || (C(_), k = !0);
    },
    o(f) {
      j(_), k = !1;
    },
    d(f) {
      f && S(e), o && o.d(), _ && _.d();
    }
  };
}
function he(s) {
  let e, n, l, t, i, r, v, a, c, d, b, L, O, x, k, h, g, o, _, f, w = Object.entries(
    /*options*/
    s[0]
  ), q = [];
  for (let m = 0; m < w.length; m += 1)
    q[m] = le(J(s, w, m));
  const re = (m) => j(q[m], 1, 1, () => {
    q[m] = null;
  });
  return {
    c() {
      e = y("link"), n = y("link"), l = y("link"), t = T(), i = y("main"), r = y("div"), v = y("div"), a = y("h1"), a.textContent = "OPTIONS", c = T(), d = y("div"), b = y("button"), b.innerHTML = '<img src="../icons/save.svg" class="h-full svelte-1yqyasn" alt="save icon"/>', L = T(), O = y("button"), O.innerHTML = '<img src="../icons/reset.svg" class="h-full svelte-1yqyasn" alt="reset icon"/>', x = T(), k = y("div");
      for (let m = 0; m < q.length; m += 1)
        q[m].c();
      h = T(), g = y("div"), u(e, "rel", "preconnect"), u(e, "href", "https://fonts.googleapis.com"), u(e, "class", "svelte-1yqyasn"), u(n, "rel", "preconnect"), u(n, "href", "https://fonts.gstatic.com"), u(n, "crossorigin", ""), u(n, "class", "svelte-1yqyasn"), u(l, "href", "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"), u(l, "rel", "stylesheet"), u(l, "class", "svelte-1yqyasn"), u(a, "class", "font-extrabold text-3xl px-4 text-center text-zinc-900 svelte-1yqyasn"), u(b, "class", "bg-green-400 bg-opacity-50 border-zinc-900 border-[1.5px] rounded-l py-1 px-1 h-full cursor-pointer ring-0 hover:ring-[1.5px] ring-zinc-400 transition-ring duration-100 z-[2] svelte-1yqyasn"), u(O, "class", "bg-zinc-50 border-zinc-900 border-[1.5px] border-l-0 rounded-r py-1 px-1 h-full cursor-pointer ring-0 hover:ring-[1.5px] ring-zinc-400 transition-ring duration-100 z-[2] hover:[z-1] svelte-1yqyasn"), u(d, "class", "right-6 absolute h-full py-1 flex svelte-1yqyasn"), u(v, "class", "flex w-full my-2 relative svelte-1yqyasn"), u(g, "class", "absolute w-full h-full left-0 top-0 rounded bg-zinc-500 -z-[1] translate-x-1.5 translate-y-1.5 transform-gpu svelte-1yqyasn"), u(k, "class", "bg-zinc-50 border-zinc-900 border-[1.5px] rounded relative svelte-1yqyasn"), u(r, "class", "w-md mx-6 mb-6 svelte-1yqyasn"), u(i, "class", "h-full svelte-1yqyasn");
    },
    m(m, A) {
      p(D.head, e), p(D.head, n), p(D.head, l), N(m, t, A), N(m, i, A), p(i, r), p(r, v), p(v, a), p(v, c), p(v, d), p(d, b), p(d, L), p(d, O), p(r, x), p(r, k);
      for (let z = 0; z < q.length; z += 1)
        q[z] && q[z].m(k, null);
      p(k, h), p(k, g), o = !0, _ || (f = [
        E(
          b,
          "click",
          /*click_handler*/
          s[6]
        ),
        E(
          O,
          "click",
          /*click_handler_1*/
          s[7]
        )
      ], _ = !0);
    },
    p(m, [A]) {
      if (A & /*Object, options, AVAILABLE_LANGUAGES, handleRemoveLanguage, handleAddLanguage, availableLanguages, handleFloatInput*/
      59) {
        w = Object.entries(
          /*options*/
          m[0]
        );
        let z;
        for (z = 0; z < w.length; z += 1) {
          const R = J(m, w, z);
          q[z] ? (q[z].p(R, A), C(q[z], 1)) : (q[z] = le(R), q[z].c(), C(q[z], 1), q[z].m(k, h));
        }
        for (I(), z = w.length; z < q.length; z += 1)
          re(z);
        B();
      }
    },
    i(m) {
      if (!o) {
        for (let A = 0; A < w.length; A += 1)
          C(q[A]);
        o = !0;
      }
    },
    o(m) {
      q = q.filter(Boolean);
      for (let A = 0; A < q.length; A += 1)
        j(q[A]);
      o = !1;
    },
    d(m) {
      S(e), S(n), S(l), m && S(t), m && S(i), G(q, m), _ = !1, ne(f);
    }
  };
}
function te(s) {
  const n = { save: "34d399", reset: "f87171" }[s];
  let l = document.createElement("div");
  l.style.cssText = `--fancy-outline-color: #${n};`, l.classList.add("fancy-outline"), document.body.appendChild(l), setTimeout(
    () => {
      document.body.removeChild(l);
    },
    2e3
  );
}
const ve = (s) => {
  s.target.style.width = `calc(${s.target.value.length}ch + 1rem)`;
};
function _e(s, e, n) {
  let l = U, t = M;
  chrome.storage.sync.get("options").then((h) => {
    n(0, l = h.options || U);
  });
  function i() {
    n(0, l);
  }
  function r(h) {
    h && n(0, l = structuredClone(h)), chrome.storage.sync.set({ options: l }), chrome.runtime.sendMessage({ type: "updateOptions", data: l });
  }
  function v(h) {
    const g = h.value;
    h.value = "";
    let o = l.selectedLanguages.value;
    o.indexOf(g) === -1 && (o.push(g), n(0, l.selectedLanguages.value = o, l), n(1, t), i());
  }
  function a(h, g, o) {
    let _ = h.value;
    switch (o) {
      case "number": {
        let f = parseFloat(_);
        _ = f || 1;
      }
    }
    n(0, l[g].value = _, l), i();
  }
  function c(h) {
    let g = l.selectedLanguages.value;
    const o = g.indexOf(h);
    o != -1 && (g[o] = void 0, g.splice(o, 1), n(0, l.selectedLanguages.value = g, l), n(1, t), i());
  }
  const d = () => {
    r(), te("save");
  }, b = () => {
    n(0, l = structuredClone(U)), te("reset");
  }, L = (h, g) => {
    a(g.target, h, "number");
  };
  function O(h, g) {
    h[g][1].value = this.checked, n(0, l);
  }
  return [
    l,
    t,
    r,
    v,
    a,
    c,
    d,
    b,
    L,
    O,
    (h) => {
      v(h.target);
    },
    (h) => c(h)
  ];
}
class ye extends oe {
  constructor(e) {
    super(), ue(this, e, _e, he, ce, {});
  }
}
var ke = new ye({
  target: document.body
});
export {
  ke as default
};
//# sourceMappingURL=options.js.map
