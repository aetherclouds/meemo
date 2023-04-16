import { S as ae, i as ce, s as ue, e as m, a as S, b as c, c as p, d as E, l as I, t as T, f as B, g as q, h as A, j as U, r as ne, k as fe, m as P, n as de, o as D, p as ie, q as se, u as R, v as re, w as j, x as pe } from "../svelteTransition.js";
import { O as V, D as F, A as M } from "../const.js";
const { document: H } = fe;
function J(i, e, n) {
  const l = i.slice();
  return l[13] = e[n], l[14] = e, l[15] = n, l;
}
function K(i, e, n) {
  const l = i.slice();
  return l[16] = e[n], l;
}
function Q(i, e, n) {
  const l = i.slice();
  return l[19] = e[n], l;
}
function ge(i) {
  let e, n, l;
  function t() {
    i[9].call(
      e,
      /*option*/
      i[13]
    );
  }
  return {
    c() {
      e = m("input"), c(e, "type", "checkbox"), e.required = !0, c(e, "class", "outline-none border-zinc-900 bg-transparent my-auto ml-auto border-[1.5px] rounded w-6 h-6 ring-0 ring-offset-0 hover:ring-[1.5px] focus:ring-offset-1 focus:ring-[1.5px] ring-zinc-400 duration-100 svelte-d79c03");
    },
    m(s, o) {
      E(s, e, o), e.checked = /*options*/
      i[0][
        /*option*/
        i[13]
      ].value, n || (l = I(e, "change", t), n = !0);
    },
    p(s, o) {
      i = s, o & /*options, OPTION_ORDER*/
      1 && (e.checked = /*options*/
      i[0][
        /*option*/
        i[13]
      ].value);
    },
    d(s) {
      s && A(e), n = !1, l();
    }
  };
}
function he(i) {
  let e, n, l, t, s;
  function o(...v) {
    return (
      /*change_handler*/
      i[8](
        /*option*/
        i[13],
        ...v
      )
    );
  }
  return {
    c() {
      e = m("input"), c(e, "type", "number"), e.required = !0, c(e, "class", "appearance-none outline-none border-zinc-900 bg-transparent my-auto ml-auto min-w-8 w-0 max-w-max border-[1.5px] rounded placeholder-zinc-500 font-medium text-xl text-zinc-900 text-center py-0.5 ring-0 ring-offset-0 hover:ring-[1.5px] focus:ring-offset-1 focus:ring-[1.5px] ring-zinc-400 ring-offset-zinc-50 transition-input-field duration-100 svelte-d79c03"), c(e, "style", n = `width: calc(${/*options*/
      i[0][
        /*option*/
        i[13]
      ].value.toString().length}ch + 1rem);`), e.value = l = /*options*/
      i[0][
        /*option*/
        i[13]
      ].value;
    },
    m(v, r) {
      E(v, e, r), t || (s = [
        I(e, "input", _e),
        I(e, "change", o)
      ], t = !0);
    },
    p(v, r) {
      i = v, r & /*options*/
      1 && n !== (n = `width: calc(${/*options*/
      i[0][
        /*option*/
        i[13]
      ].value.toString().length}ch + 1rem);`) && c(e, "style", n), r & /*options*/
      1 && l !== (l = /*options*/
      i[0][
        /*option*/
        i[13]
      ].value) && e.value !== l && (e.value = l);
    },
    d(v) {
      v && A(e), t = !1, ne(s);
    }
  };
}
function W(i) {
  let e, n, l, t = (
    /*options*/
    i[0].selectedLanguages.value.length < /*availableLanguages*/
    i[1].length && X(i)
  ), s = M, o = [];
  for (let r = 0; r < s.length; r += 1)
    o[r] = ee(K(i, s, r));
  const v = (r) => q(o[r], 1, 1, () => {
    o[r] = null;
  });
  return {
    c() {
      e = m("div"), t && t.c(), n = S();
      for (let r = 0; r < o.length; r += 1)
        o[r].c();
      c(e, "class", "mt-3 flex svelte-d79c03");
    },
    m(r, f) {
      E(r, e, f), t && t.m(e, null), p(e, n);
      for (let d = 0; d < o.length; d += 1)
        o[d] && o[d].m(e, null);
      l = !0;
    },
    p(r, f) {
      if (/*options*/
      r[0].selectedLanguages.value.length < /*availableLanguages*/
      r[1].length ? t ? (t.p(r, f), f & /*options, availableLanguages*/
      3 && T(t, 1)) : (t = X(r), t.c(), T(t, 1), t.m(e, n)) : t && (D(), q(t, 1, 1, () => {
        t = null;
      }), B()), f & /*handleRemoveLanguage, AVAILABLE_LANGUAGES, options, OPTION_ORDER*/
      33) {
        s = M;
        let d;
        for (d = 0; d < s.length; d += 1) {
          const b = K(r, s, d);
          o[d] ? (o[d].p(b, f), T(o[d], 1)) : (o[d] = ee(b), o[d].c(), T(o[d], 1), o[d].m(e, null));
        }
        for (D(), d = s.length; d < o.length; d += 1)
          v(d);
        B();
      }
    },
    i(r) {
      if (!l) {
        T(t);
        for (let f = 0; f < s.length; f += 1)
          T(o[f]);
        l = !0;
      }
    },
    o(r) {
      q(t), o = o.filter(Boolean);
      for (let f = 0; f < o.length; f += 1)
        q(o[f]);
      l = !1;
    },
    d(r) {
      r && A(e), t && t.d(), U(o, r);
    }
  };
}
function X(i) {
  let e, n, l, t, s, o, v, r, f, d, b, x, O, z, w, h = M, g = [];
  for (let a = 0; a < h.length; a += 1)
    g[a] = Z(Q(i, h, a));
  return {
    c() {
      e = m("div"), n = m("img"), t = S(), s = m("p"), s.textContent = "de", o = S(), v = m("div"), r = m("select"), f = m("option");
      for (let a = 0; a < g.length; a += 1)
        g[a].c();
      d = S(), b = m("div"), b.innerHTML = '<span class="m-auto pointer-events-none svelte-d79c03">+</span>', ie(n.src, l = "../data/flags/PT.svg") || c(n, "src", l), c(n, "class", "h-4.5 block mr-1 invisible svelte-d79c03"), c(s, "class", "invisible svelte-d79c03"), f.hidden = !0, f.disabled = !0, f.selected = !0, f.__value = "", f.value = f.__value, c(f, "class", "svelte-d79c03"), c(r, "name", "yep"), c(r, "id", ""), c(r, "class", "absolute h-full w-full left-0 top-0 opacity-0 svelte-d79c03"), c(b, "class", "h-full w-full relative flex pointer-events-none brounded svelte-d79c03"), c(v, "class", "absolute h-full w-full left-0 top-0  svelte-d79c03"), c(e, "class", "focus-within:ring-offset-1 focus-within:ring-[1.5px] border-[1.5px] rounded border-zinc-900 relative max-w-full p-0.5 flex font-medium text-xl cursor-pointer ring-0 hover:ring-[1.5px] ring-zinc-400 transition-ring duration-100 svelte-d79c03");
    },
    m(a, _) {
      E(a, e, _), p(e, n), p(e, t), p(e, s), p(e, o), p(e, v), p(v, r), p(r, f);
      for (let u = 0; u < g.length; u += 1)
        g[u] && g[u].m(r, null);
      p(v, d), p(v, b), O = !0, z || (w = I(
        r,
        "change",
        /*change_handler_1*/
        i[10]
      ), z = !0);
    },
    p(a, _) {
      if (_ & /*AVAILABLE_LANGUAGES, options*/
      1) {
        h = M;
        let u;
        for (u = 0; u < h.length; u += 1) {
          const C = Q(a, h, u);
          g[u] ? g[u].p(C, _) : (g[u] = Z(C), g[u].c(), g[u].m(r, null));
        }
        for (; u < g.length; u += 1)
          g[u].d(1);
        g.length = h.length;
      }
    },
    i(a) {
      O || (se(() => {
        O && (x || (x = R(e, j, { axis: "x", duration: 200 }, !0)), x.run(1));
      }), O = !0);
    },
    o(a) {
      x || (x = R(e, j, { axis: "x", duration: 200 }, !1)), x.run(0), O = !1;
    },
    d(a) {
      a && A(e), U(g, a), a && x && x.end(), z = !1, w();
    }
  };
}
function Y(i) {
  let e, n = (
    /*languageCode*/
    i[19] + ""
  ), l;
  return {
    c() {
      e = m("option"), l = P(n), e.__value = /*languageCode*/
      i[19], e.value = e.__value, c(e, "class", "svelte-d79c03");
    },
    m(t, s) {
      E(t, e, s), p(e, l);
    },
    p: pe,
    d(t) {
      t && A(e);
    }
  };
}
function Z(i) {
  let e = !/*options*/
  i[0].selectedLanguages.value.includes(
    /*languageCode*/
    i[19]
  ), n, l = e && Y(i);
  return {
    c() {
      l && l.c(), n = re();
    },
    m(t, s) {
      l && l.m(t, s), E(t, n, s);
    },
    p(t, s) {
      s & /*options*/
      1 && (e = !/*options*/
      t[0].selectedLanguages.value.includes(
        /*languageCode*/
        t[19]
      )), e ? l ? l.p(t, s) : (l = Y(t), l.c(), l.m(n.parentNode, n)) : l && (l.d(1), l = null);
    },
    d(t) {
      l && l.d(t), t && A(n);
    }
  };
}
function $(i) {
  let e, n, l, t, s, o = (
    /*language*/
    i[16] + ""
  ), v, r, f, d, b, x;
  function O() {
    return (
      /*click_handler_2*/
      i[11](
        /*language*/
        i[16]
      )
    );
  }
  return {
    c() {
      e = m("button"), n = m("img"), t = S(), s = m("p"), v = P(o), r = S(), ie(n.src, l = "../data/flags/" + /*language*/
      i[16].toUpperCase() + ".svg") || c(n, "src", l), c(n, "class", "rounded w-full h-4.5 block mr-0.5 svelte-d79c03"), c(s, "class", "align-middle my-auto lowercase svelte-d79c03"), c(e, "class", "border-[1.5px] relative overflow-hidden max-w-full rounded border-zinc-900 p-0.5 flex font-medium text-xl text-center ml-1 language-box cursor-pointer hover:ring-[1.5px] ring-red-400 ring-opacity-50 transition-ring duration-100 svelte-d79c03");
    },
    m(z, w) {
      E(z, e, w), p(e, n), p(e, t), p(e, s), p(s, v), p(e, r), d = !0, b || (x = I(e, "click", O), b = !0);
    },
    p(z, w) {
      i = z;
    },
    i(z) {
      d || (se(() => {
        d && (f || (f = R(e, j, { axis: "x", duration: 200 }, !0)), f.run(1));
      }), d = !0);
    },
    o(z) {
      f || (f = R(e, j, { axis: "x", duration: 200 }, !1)), f.run(0), d = !1;
    },
    d(z) {
      z && A(e), z && f && f.end(), b = !1, x();
    }
  };
}
function ee(i) {
  let e = (
    /*options*/
    i[0][
      /*option*/
      i[13]
    ].value.includes(
      /*language*/
      i[16]
    )
  ), n, l, t = e && $(i);
  return {
    c() {
      t && t.c(), n = re();
    },
    m(s, o) {
      t && t.m(s, o), E(s, n, o), l = !0;
    },
    p(s, o) {
      o & /*options*/
      1 && (e = /*options*/
      s[0][
        /*option*/
        s[13]
      ].value.includes(
        /*language*/
        s[16]
      )), e ? t ? (t.p(s, o), o & /*options*/
      1 && T(t, 1)) : (t = $(s), t.c(), T(t, 1), t.m(n.parentNode, n)) : t && (D(), q(t, 1, 1, () => {
        t = null;
      }), B());
    },
    i(s) {
      l || (T(t), l = !0);
    },
    o(s) {
      q(t), l = !1;
    },
    d(s) {
      t && t.d(s), s && A(n);
    }
  };
}
function le(i) {
  let e, n, l, t, s = (
    /*option*/
    i[13] + ""
  ), o, v, r, f = (
    /*options*/
    i[0][
      /*option*/
      i[13]
    ].description + ""
  ), d, b, x, O, z, w;
  function h(u, C) {
    if (
      /*options*/
      u[0][
        /*option*/
        u[13]
      ].type == "float"
    )
      return he;
    if (
      /*options*/
      u[0][
        /*option*/
        u[13]
      ].type == "bool"
    )
      return ge;
  }
  let g = h(i), a = g && g(i), _ = (
    /*options*/
    i[0][
      /*option*/
      i[13]
    ].type == "languageSelection" && W(i)
  );
  return {
    c() {
      e = m("div"), n = m("div"), l = m("div"), t = m("h2"), o = P(s), v = S(), r = m("h3"), d = P(f), b = S(), a && a.c(), x = S(), _ && _.c(), O = S(), c(t, "class", "text-xl font-medium text-zinc-900 svelte-d79c03"), c(r, "class", "text-xs text-zinc-500 pr-2 svelte-d79c03"), c(l, "class", "my-auto svelte-d79c03"), c(n, "class", "w-full flex svelte-d79c03"), c(e, "class", z = "px-4 py-3 border-zinc-900 " + /*i*/
      (i[15] + 1 < Object.keys(
        /*options*/
        i[0]
      ).length ? "border-b-[1.5px]" : "") + " svelte-d79c03");
    },
    m(u, C) {
      E(u, e, C), p(e, n), p(n, l), p(l, t), p(t, o), p(l, v), p(l, r), p(r, d), p(n, b), a && a.m(n, null), p(e, x), _ && _.m(e, null), p(e, O), w = !0;
    },
    p(u, C) {
      (!w || C & /*options*/
      1) && f !== (f = /*options*/
      u[0][
        /*option*/
        u[13]
      ].description + "") && de(d, f), g === (g = h(u)) && a ? a.p(u, C) : (a && a.d(1), a = g && g(u), a && (a.c(), a.m(n, null))), /*options*/
      u[0][
        /*option*/
        u[13]
      ].type == "languageSelection" ? _ ? (_.p(u, C), C & /*options*/
      1 && T(_, 1)) : (_ = W(u), _.c(), T(_, 1), _.m(e, O)) : _ && (D(), q(_, 1, 1, () => {
        _ = null;
      }), B()), (!w || C & /*options*/
      1 && z !== (z = "px-4 py-3 border-zinc-900 " + /*i*/
      (u[15] + 1 < Object.keys(
        /*options*/
        u[0]
      ).length ? "border-b-[1.5px]" : "") + " svelte-d79c03")) && c(e, "class", z);
    },
    i(u) {
      w || (T(_), w = !0);
    },
    o(u) {
      q(_), w = !1;
    },
    d(u) {
      u && A(e), a && a.d(), _ && _.d();
    }
  };
}
function ve(i) {
  let e, n, l, t, s, o, v, r, f, d, b, x, O, z, w, h, g, a, _, u, C = V, k = [];
  for (let y = 0; y < C.length; y += 1)
    k[y] = le(J(i, C, y));
  const oe = (y) => q(k[y], 1, 1, () => {
    k[y] = null;
  });
  return {
    c() {
      e = m("link"), n = m("link"), l = m("link"), t = S(), s = m("main"), o = m("div"), v = m("div"), r = m("h1"), r.textContent = "OPTIONS", f = S(), d = m("div"), b = m("button"), b.innerHTML = '<img src="../icons/save.svg" class="h-full svelte-d79c03" alt="save icon"/>', x = S(), O = m("button"), O.innerHTML = '<img src="../icons/reset.svg" class="h-full svelte-d79c03" alt="reset icon"/>', z = S(), w = m("div");
      for (let y = 0; y < k.length; y += 1)
        k[y].c();
      h = S(), g = m("div"), c(e, "rel", "preconnect"), c(e, "href", "https://fonts.googleapis.com"), c(e, "class", "svelte-d79c03"), c(n, "rel", "preconnect"), c(n, "href", "https://fonts.gstatic.com"), c(n, "crossorigin", ""), c(n, "class", "svelte-d79c03"), c(l, "href", "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"), c(l, "rel", "stylesheet"), c(l, "class", "svelte-d79c03"), c(r, "class", "font-extrabold text-3xl px-4 text-center text-zinc-900 svelte-d79c03"), c(b, "class", "bg-green-400 bg-opacity-50 border-zinc-900 border-[1.5px] rounded-l py-1 px-1 h-full cursor-pointer ring-0 hover:ring-[1.5px] ring-zinc-400 transition-ring duration-100 z-[2] svelte-d79c03"), c(O, "class", "bg-zinc-50 border-zinc-900 border-[1.5px] border-l-0 rounded-r py-1 px-1 h-full cursor-pointer ring-0 hover:ring-[1.5px] ring-zinc-400 transition-ring duration-100 z-[2] hover:[z-1] svelte-d79c03"), c(d, "class", "right-6 absolute h-full py-1 flex svelte-d79c03"), c(v, "class", "flex w-full my-2 relative svelte-d79c03"), c(g, "class", "absolute w-full h-full left-0 top-0 rounded bg-zinc-500 -z-[1] translate-x-1.5 translate-y-1.5 transform-gpu svelte-d79c03"), c(w, "class", "bg-zinc-50 border-zinc-900 border-[1.5px] rounded relative svelte-d79c03"), c(o, "class", "w-md mx-6 mb-6 svelte-d79c03"), c(s, "class", "h-full svelte-d79c03");
    },
    m(y, N) {
      p(H.head, e), p(H.head, n), p(H.head, l), E(y, t, N), E(y, s, N), p(s, o), p(o, v), p(v, r), p(v, f), p(v, d), p(d, b), p(d, x), p(d, O), p(o, z), p(o, w);
      for (let L = 0; L < k.length; L += 1)
        k[L] && k[L].m(w, null);
      p(w, h), p(w, g), a = !0, _ || (u = [
        I(
          b,
          "click",
          /*click_handler*/
          i[6]
        ),
        I(
          O,
          "click",
          /*click_handler_1*/
          i[7]
        )
      ], _ = !0);
    },
    p(y, [N]) {
      if (N & /*Object, options, AVAILABLE_LANGUAGES, handleRemoveLanguage, OPTION_ORDER, handleAddLanguage, availableLanguages, handleFloatInput*/
      59) {
        C = V;
        let L;
        for (L = 0; L < C.length; L += 1) {
          const G = J(y, C, L);
          k[L] ? (k[L].p(G, N), T(k[L], 1)) : (k[L] = le(G), k[L].c(), T(k[L], 1), k[L].m(w, h));
        }
        for (D(), L = C.length; L < k.length; L += 1)
          oe(L);
        B();
      }
    },
    i(y) {
      if (!a) {
        for (let N = 0; N < C.length; N += 1)
          T(k[N]);
        a = !0;
      }
    },
    o(y) {
      k = k.filter(Boolean);
      for (let N = 0; N < k.length; N += 1)
        q(k[N]);
      a = !1;
    },
    d(y) {
      A(e), A(n), A(l), y && A(t), y && A(s), U(k, y), _ = !1, ne(u);
    }
  };
}
function te(i) {
  const n = { save: "34d399", reset: "f87171" }[i];
  let l = document.createElement("div");
  l.style.cssText = `--fancy-outline-color: #${n};`, l.classList.add("fancy-outline"), document.body.appendChild(l), setTimeout(
    () => {
      document.body.removeChild(l);
    },
    2e3
  );
}
const _e = (i) => {
  i.target.style.width = `calc(${i.target.value.length}ch + 1rem)`;
};
function me(i, e, n) {
  let l = F, t = M;
  chrome.storage.sync.get("options").then((h) => {
    n(0, l = h.options || F);
  });
  function s() {
    n(0, l);
  }
  function o(h) {
    h && n(0, l = structuredClone(h)), chrome.storage.sync.set({ options: l }), chrome.runtime.sendMessage({ type: "updateOptions", data: l });
  }
  function v(h) {
    const g = h.value;
    h.value = "";
    let a = l.selectedLanguages.value;
    a.indexOf(g) === -1 && (a.push(g), n(0, l.selectedLanguages.value = a, l), n(1, t), s());
  }
  function r(h, g, a) {
    let _ = h.value;
    switch (a) {
      case "number": {
        let u = parseFloat(_);
        _ = u || 1;
      }
    }
    n(0, l[g].value = _, l), s();
  }
  function f(h) {
    let g = l.selectedLanguages.value;
    const a = g.indexOf(h);
    a != -1 && (g[a] = void 0, g.splice(a, 1), n(0, l.selectedLanguages.value = g, l), n(1, t), s());
  }
  const d = () => {
    o(), te("save");
  }, b = () => {
    n(0, l = structuredClone(F)), te("reset");
  }, x = (h, g) => {
    r(g.target, h, "number");
  };
  function O(h) {
    l[h].value = this.checked, n(0, l);
  }
  return [
    l,
    t,
    o,
    v,
    r,
    f,
    d,
    b,
    x,
    O,
    (h) => {
      v(h.target);
    },
    (h) => f(h)
  ];
}
class be extends ae {
  constructor(e) {
    super(), ce(this, e, me, ve, ue, {});
  }
}
var ze = new be({
  target: document.body
});
export {
  ze as default
};
