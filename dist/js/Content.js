import { S as Me, i as Se, s as Ce, e as h, b as u, y as se, d as S, t as x, o as me, g as te, f as pe, h as C, z as je, a as D, c as g, l as Z, A as Ke, q as be, u as he, w as _e, j as ve, r as Le, m as j, n as ge, B as ce, p as ke, x as fe, v as Ve, C as Ne, D as ze, E as He, F as Qe, G as Ze, H as De, I as $e } from "./svelteTransition.js";
import { g as et, b as tt, A as ye, c as nt, d as lt, e as ot, f as we, h as st, i as rt } from "./ankiConnectUtil.js";
import { EXTENSION_ALIAS as Je, REPLACEMENT_STRING as Ee, DEFAULT_OPTIONS as Ae } from "./const.js";
function Re(n, e, t) {
  const a = n.slice();
  return a[44] = e[t][0], a[45] = e[t][1], a[46] = e, a[47] = t, a;
}
function Ie(n, e, t) {
  const a = n.slice();
  return a[48] = e[t], a;
}
function Oe(n, e, t) {
  const a = n.slice();
  return a[51] = e[t], a;
}
function Pe(n) {
  let e, t, a, o, r, i, s, b, l, c, d, m, F, w, N, W, X, T, M, z, H, k, P, re, K, ie, ae, v, Y, Q, B, A, V, ne, ue, L = (
    /*messageType*/
    n[12] && Ue(n)
  ), R = (
    /*contentToSave*/
    n[0] != null && Be(n)
  ), $ = (
    /*cardDecks*/
    n[9]
  ), O = [];
  for (let _ = 0; _ < $.length; _ += 1)
    O[_] = Xe(Oe(n, $, _));
  let G = (
    /*cardModels*/
    n[10]
  ), E = [];
  for (let _ = 0; _ < G.length; _ += 1)
    E[_] = Ye(Ie(n, G, _));
  let le = Object.entries(
    /*cardModelFieldsData*/
    n[11]
  ), U = [];
  for (let _ = 0; _ < le.length; _ += 1)
    U[_] = We(Re(n, le, _));
  return {
    c() {
      e = h("div"), t = h("div"), t.innerHTML = `<div class="grid grid-rows-2 grid-cols-4 mx-auto w-max justify-center gap-x-1 gap-y-1 my-auto svelte-1rgu7yb"><div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem] svelte-1rgu7yb"></div> 
                <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem] svelte-1rgu7yb"></div> 
                <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem] svelte-1rgu7yb"></div> 
                <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem] svelte-1rgu7yb"></div> 
                <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem] svelte-1rgu7yb"></div> 
                <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem] svelte-1rgu7yb"></div> 
                <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem] svelte-1rgu7yb"></div> 
                <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem] svelte-1rgu7yb"></div></div>`, a = D(), o = h("div"), r = h("h1"), r.textContent = "Add2Anki", i = D(), L && L.c(), s = D(), R && R.c(), b = D(), l = h("form"), c = h("div"), d = h("div"), m = h("label"), m.textContent = "Card Deck", F = D(), w = h("div"), N = h("select");
      for (let _ = 0; _ < O.length; _ += 1)
        O[_].c();
      W = D(), X = h("select"), T = D(), M = h("div"), z = h("label"), z.textContent = "Card Model", H = D(), k = h("div"), P = h("select");
      for (let _ = 0; _ < E.length; _ += 1)
        E[_].c();
      re = D(), K = h("select"), ie = D();
      for (let _ = 0; _ < U.length; _ += 1)
        U[_].c();
      ae = D(), v = h("div"), v.textContent = " ", Y = D(), Q = h("button"), Q.textContent = "Add that thing!", u(t, "draggable", ""), u(t, "class", "w-full h-min py-1.5 rounded-[0.3rem] box-border flex cursor-move hover:bg-zinc-500-trs transition-colors duration-100  svelte-1rgu7yb"), u(r, "class", "text-blue-gradient font-bold text-xl mx-auto mb-5 svelte-1rgu7yb"), u(m, "for", "deckName"), u(m, "class", "block mb-0.5 label-on-focus svelte-1rgu7yb"), u(N, "name", "deckName"), u(N, "id", "deckName"), u(N, "class", "w-full rounded-[0.3rem] bg-zinc-500-trs border border-zinc-600 truncate outline-none hover:border-zinc-400 focus:border-blue-400 transition-colors duration-100 svelte-1rgu7yb"), X.disabled = !0, u(X, "class", "absolute w-full h-full top-0 left-0 bg-transparent border border-transparent text-zinc-500 pointer-events-none svelte-1rgu7yb"), u(w, "class", "relative svelte-1rgu7yb"), u(d, "class", "pr-2 svelte-1rgu7yb"), u(z, "for", "modelName"), u(z, "class", "block mb-0.5 svelte-1rgu7yb"), u(P, "name", "modelName"), u(P, "id", "modelName"), u(P, "class", "w-full rounded-[0.3rem] bg-zinc-500-trs border border-zinc-600 truncate outline-none hover:border-zinc-400 focus:border-blue-400 transition-colors duration-100 svelte-1rgu7yb"), K.disabled = !0, u(K, "class", "absolute w-full h-full top-0 left-0 bg-transparent border border-transparent text-zinc-500 pointer-events-none svelte-1rgu7yb"), u(k, "class", "relative svelte-1rgu7yb"), u(M, "class", "pl-2 svelte-1rgu7yb"), u(c, "class", "w-full grid grid-cols-2 mb-3 svelte-1rgu7yb"), u(v, "class", "opacity-0 block mb-0.5 svelte-1rgu7yb"), u(Q, "type", "submit"), u(Q, "class", "w-full rounded-[0.3rem] bg-zinc-500-trs border border-zinc-600 text-sm py-1 appearance-none outline-none hover:border-blue-400 hover:text-blue-400 focus:border-blue-400 focus:text-blue-400 shadow-none focus:shadow-inner shadow-blue-400 transition-colors duration-100 svelte-1rgu7yb"), u(l, "action", ""), u(l, "class", "text-zinc-300 text-sm svelte-1rgu7yb"), u(l, "id", "leForm"), u(o, "class", "p-5 flex flex-col max-h-xs overflow-auto bg-transparent svelte-1rgu7yb"), u(e, "class", B = "bg-zinc-800-trs w-[20rem] max-w-[20rem] rounded-[0.3rem] blur-bg relative border " + /*isPopupBeingDragged*/
      (n[3] ? "shadow-xl" : (
        /*highlightWarnClose*/
        n[13] || /*highlightSubmitSuccessful*/
        n[14] ? "shadow-sm" : "shadow-none"
      )) + " " + /*highlightWarnClose*/
      (n[13] ? "shadow-red-400 border-red-400" : (
        /*highlightSubmitSuccessful*/
        n[14] ? "shadow-green-400 border-green-400" : "border-transparent shadow-black/10"
      )) + " duration-100 svelte-1rgu7yb"), se(e, "transition-property", "box-shadow, border-color");
    },
    m(_, q) {
      S(_, e, q), g(e, t), g(e, a), g(e, o), g(o, r), g(o, i), L && L.m(o, null), g(o, s), R && R.m(o, null), g(o, b), g(o, l), g(l, c), g(c, d), g(d, m), g(d, F), g(d, w), g(w, N);
      for (let p = 0; p < O.length; p += 1)
        O[p] && O[p].m(N, null);
      n[28](N), g(w, W), g(w, X), g(c, T), g(c, M), g(M, z), g(M, H), g(M, k), g(k, P);
      for (let p = 0; p < E.length; p += 1)
        E[p] && E[p].m(P, null);
      n[29](P), g(k, re), g(k, K), g(l, ie);
      for (let p = 0; p < U.length; p += 1)
        U[p] && U[p].m(l, null);
      g(l, ae), g(l, v), g(l, Y), g(l, Q), V = !0, ne || (ue = [
        Z(
          t,
          "mousedown",
          /*handleDragMouseDown*/
          n[17]
        ),
        Z(
          t,
          "mouseup",
          /*handleDragMouseUp*/
          n[18]
        ),
        Z(
          N,
          "change",
          /*handleDeckSelectionChange*/
          n[19]
        ),
        Z(
          P,
          "change",
          /*handleModelSelectChange*/
          n[20]
        ),
        Z(l, "submit", Ke(
          /*handleSubmit*/
          n[16]
        ))
      ], ne = !0);
    },
    p(_, q) {
      if (n = _, /*messageType*/
      n[12] ? L ? (L.p(n, q), q[0] & /*messageType*/
      4096 && x(L, 1)) : (L = Ue(n), L.c(), x(L, 1), L.m(o, s)) : L && (me(), te(L, 1, 1, () => {
        L = null;
      }), pe()), /*contentToSave*/
      n[0] != null ? R ? R.p(n, q) : (R = Be(n), R.c(), R.m(o, b)) : R && (R.d(1), R = null), q[0] & /*cardDecks, selectedDeck*/
      576) {
        $ = /*cardDecks*/
        n[9];
        let p;
        for (p = 0; p < $.length; p += 1) {
          const f = Oe(n, $, p);
          O[p] ? O[p].p(f, q) : (O[p] = Xe(f), O[p].c(), O[p].m(N, null));
        }
        for (; p < O.length; p += 1)
          O[p].d(1);
        O.length = $.length;
      }
      if (q[0] & /*cardModels, selectedModel*/
      1280) {
        G = /*cardModels*/
        n[10];
        let p;
        for (p = 0; p < G.length; p += 1) {
          const f = Ie(n, G, p);
          E[p] ? E[p].p(f, q) : (E[p] = Ye(f), E[p].c(), E[p].m(P, null));
        }
        for (; p < E.length; p += 1)
          E[p].d(1);
        E.length = G.length;
      }
      if (q[0] & /*cardModelFieldsData, handleFieldInput*/
      2099200) {
        le = Object.entries(
          /*cardModelFieldsData*/
          n[11]
        );
        let p;
        for (p = 0; p < le.length; p += 1) {
          const f = Re(n, le, p);
          U[p] ? U[p].p(f, q) : (U[p] = We(f), U[p].c(), U[p].m(l, ae));
        }
        for (; p < U.length; p += 1)
          U[p].d(1);
        U.length = le.length;
      }
      (!V || q[0] & /*isPopupBeingDragged, highlightWarnClose, highlightSubmitSuccessful*/
      24584 && B !== (B = "bg-zinc-800-trs w-[20rem] max-w-[20rem] rounded-[0.3rem] blur-bg relative border " + /*isPopupBeingDragged*/
      (n[3] ? "shadow-xl" : (
        /*highlightWarnClose*/
        n[13] || /*highlightSubmitSuccessful*/
        n[14] ? "shadow-sm" : "shadow-none"
      )) + " " + /*highlightWarnClose*/
      (n[13] ? "shadow-red-400 border-red-400" : (
        /*highlightSubmitSuccessful*/
        n[14] ? "shadow-green-400 border-green-400" : "border-transparent shadow-black/10"
      )) + " duration-100 svelte-1rgu7yb")) && u(e, "class", B);
    },
    i(_) {
      V || (x(L), be(() => {
        V && (A || (A = he(
          e,
          _e,
          {
            axis: "y",
            duration: Te
          },
          !0
        )), A.run(1));
      }), V = !0);
    },
    o(_) {
      te(L), A || (A = he(
        e,
        _e,
        {
          axis: "y",
          duration: Te
        },
        !1
      )), A.run(0), V = !1;
    },
    d(_) {
      _ && C(e), L && L.d(), R && R.d(), ve(O, _), n[28](null), ve(E, _), n[29](null), ve(U, _), _ && A && A.end(), ne = !1, Le(ue);
    }
  };
}
function Ue(n) {
  let e, t, a, o, r, i;
  function s(d, m) {
    if (
      /*messageType*/
      d[12] == "connection"
    )
      return ct;
    if (
      /*messageType*/
      d[12] == "response"
    )
      return ut;
    if (
      /*messageType*/
      d[12] == "unknown"
    )
      return at;
    if (
      /*messageType*/
      d[12] == "success"
    )
      return it;
  }
  let b = s(n), l = b && b(n), c = (
    /*messageType*/
    n[12] == "connection" && Fe(n)
  );
  return {
    c() {
      e = h("div"), t = h("div"), l && l.c(), a = D(), c && c.c(), u(t, "class", "svelte-1rgu7yb"), u(e, "class", o = "rounded-[0.3rem] border " + /*messageType*/
      (n[12] == "success" ? "border-green-400" : "border-red-400") + " text-zinc-300 px-2 py-1 mb-3 flex flex-col h-max text-xs hyphens-auto svelte-1rgu7yb"), se(e, "transition", "border-color 500ms, height 500ms");
    },
    m(d, m) {
      S(d, e, m), g(e, t), l && l.m(t, null), g(e, a), c && c.m(e, null), i = !0;
    },
    p(d, m) {
      b !== (b = s(d)) && (l && l.d(1), l = b && b(d), l && (l.c(), l.m(t, null))), /*messageType*/
      d[12] == "connection" ? c ? c.p(d, m) : (c = Fe(d), c.c(), c.m(e, null)) : c && (c.d(1), c = null), (!i || m[0] & /*messageType*/
      4096 && o !== (o = "rounded-[0.3rem] border " + /*messageType*/
      (d[12] == "success" ? "border-green-400" : "border-red-400") + " text-zinc-300 px-2 py-1 mb-3 flex flex-col h-max text-xs hyphens-auto svelte-1rgu7yb")) && u(e, "class", o);
    },
    i(d) {
      i || (be(() => {
        i && (r || (r = he(e, _e, { axis: "y", duration: 500 }, !0)), r.run(1));
      }), i = !0);
    },
    o(d) {
      r || (r = he(e, _e, { axis: "y", duration: 500 }, !1)), r.run(0), i = !1;
    },
    d(d) {
      d && C(e), l && l.d(), c && c.d(), d && r && r.end();
    }
  };
}
function it(n) {
  let e;
  return {
    c() {
      e = j("Successfully reconnected with Anki!");
    },
    m(t, a) {
      S(t, e, a);
    },
    d(t) {
      t && C(e);
    }
  };
}
function at(n) {
  let e;
  return {
    c() {
      e = j("There has been an uknown error. ¯\\_(ツ)_/¯");
    },
    m(t, a) {
      S(t, e, a);
    },
    d(t) {
      t && C(e);
    }
  };
}
function ut(n) {
  let e;
  return {
    c() {
      e = j("There has been a response error. AnkiConnect is running but did not respond properly.");
    },
    m(t, a) {
      S(t, e, a);
    },
    d(t) {
      t && C(e);
    }
  };
}
function ct(n) {
  let e, t, a;
  return {
    c() {
      e = j("There has been a connection error. Make sure that Anki is open, and that "), t = h("a"), t.textContent = "AnkiConnect", a = j(" is installed & running."), u(t, "class", "text-blue-400 underline svelte-1rgu7yb"), u(t, "href", "https://ankiweb.net/shared/info/2055492159"), u(t, "target", "_blank");
    },
    m(o, r) {
      S(o, e, r), S(o, t, r), S(o, a, r);
    },
    d(o) {
      o && C(e), o && C(t), o && C(a);
    }
  };
}
function Fe(n) {
  let e, t, a, o;
  return {
    c() {
      e = h("div"), t = j("retrying in "), a = j(
        /*secsUntilRetry*/
        n[15]
      ), o = j(" second(s) . . ."), u(e, "class", "block text-[0.5rem] text-zinc-400 svelte-1rgu7yb");
    },
    m(r, i) {
      S(r, e, i), g(e, t), g(e, a), g(e, o);
    },
    p(r, i) {
      i[0] & /*secsUntilRetry*/
      32768 && ge(
        a,
        /*secsUntilRetry*/
        r[15]
      );
    },
    d(r) {
      r && C(e);
    }
  };
}
function Be(n) {
  let e, t, a, o, r, i, s, b;
  return {
    c() {
      e = h("div"), t = h("span"), t.textContent = "$replace$", a = D(), o = h("span"), o.textContent = " → ", r = D(), i = h("span"), u(t, "class", "replaceable svelte-1rgu7yb"), u(o, "class", "svelte-1rgu7yb"), u(i, "contenteditable", ""), u(i, "class", "break-all text-zinc-300 rounded hover:bg-zinc-500-trs border-transparent hover:border-zinc-400 outline-none focus:border-blue-400 transition-colors duration-100 border px-1 svelte-1rgu7yb"), /*contentToSave*/
      n[0] === void 0 && be(() => (
        /*span2_input_handler*/
        n[26].call(i)
      )), u(e, "class", "text-xs text-zinc-400 mb-3 mx-auto flex items-center svelte-1rgu7yb");
    },
    m(l, c) {
      S(l, e, c), g(e, t), g(e, a), g(e, o), g(e, r), g(e, i), /*contentToSave*/
      n[0] !== void 0 && (i.innerHTML = /*contentToSave*/
      n[0]), s || (b = [
        Z(
          i,
          "input",
          /*span2_input_handler*/
          n[26]
        ),
        Z(
          i,
          "input",
          /*input_handler*/
          n[27]
        )
      ], s = !0);
    },
    p(l, c) {
      c[0] & /*contentToSave*/
      1 && /*contentToSave*/
      l[0] !== i.innerHTML && (i.innerHTML = /*contentToSave*/
      l[0]);
    },
    d(l) {
      l && C(e), s = !1, Le(b);
    }
  };
}
function Xe(n) {
  let e, t = (
    /*deckName*/
    n[51] + ""
  ), a, o, r;
  return {
    c() {
      e = h("option"), a = j(t), e.__value = o = /*deckName*/
      n[51], e.value = e.__value, u(e, "class", "bg-zinc-800 svelte-1rgu7yb"), e.selected = r = /*deckName*/
      n[51] == /*selectedDeck*/
      n[6] || null;
    },
    m(i, s) {
      S(i, e, s), g(e, a);
    },
    p(i, s) {
      s[0] & /*cardDecks*/
      512 && t !== (t = /*deckName*/
      i[51] + "") && ge(a, t), s[0] & /*cardDecks*/
      512 && o !== (o = /*deckName*/
      i[51]) && (e.__value = o, e.value = e.__value), s[0] & /*cardDecks, selectedDeck*/
      576 && r !== (r = /*deckName*/
      i[51] == /*selectedDeck*/
      i[6] || null) && (e.selected = r);
    },
    d(i) {
      i && C(e);
    }
  };
}
function Ye(n) {
  let e, t = (
    /*modelName*/
    n[48] + ""
  ), a, o, r;
  return {
    c() {
      e = h("option"), a = j(t), e.__value = o = /*modelName*/
      n[48], e.value = e.__value, u(e, "class", "bg-zinc-800 svelte-1rgu7yb"), e.selected = r = /*modelName*/
      n[48] == /*selectedModel*/
      n[8] || null;
    },
    m(i, s) {
      S(i, e, s), g(e, a);
    },
    p(i, s) {
      s[0] & /*cardModels*/
      1024 && t !== (t = /*modelName*/
      i[48] + "") && ge(a, t), s[0] & /*cardModels*/
      1024 && o !== (o = /*modelName*/
      i[48]) && (e.__value = o, e.value = e.__value), s[0] & /*cardModels, selectedModel*/
      1280 && r !== (r = /*modelName*/
      i[48] == /*selectedModel*/
      i[8] || null) && (e.selected = r);
    },
    d(i) {
      i && C(e);
    }
  };
}
function qe(n) {
  let e;
  return {
    c() {
      e = j("This field will stay saved");
    },
    m(t, a) {
      S(t, e, a);
    },
    d(t) {
      t && C(e);
    }
  };
}
function We(n) {
  let e, t, a = (
    /*fieldTitle*/
    n[44] + ""
  ), o, r, i, s, b, l, c, d, m, F, w, N, W, X, T = (
    /*fieldDetails*/
    n[45].shouldSave && qe()
  );
  function M() {
    n[30].call(
      c,
      /*each_value*/
      n[46],
      /*each_index*/
      n[47]
    );
  }
  function z() {
    n[31].call(
      m,
      /*each_value*/
      n[46],
      /*each_index*/
      n[47]
    );
  }
  return {
    c() {
      e = h("div"), t = h("label"), o = j(a), i = D(), s = h("small"), T && T.c(), b = D(), l = h("div"), c = h("div"), d = D(), m = h("div"), u(t, "for", r = /*fieldTitle*/
      n[44]), u(t, "class", "mr-2 svelte-1rgu7yb"), u(s, "class", "text-[0.6rem] text-zinc-400 svelte-1rgu7yb"), u(e, "class", "flex align-middle mb-0.5 items-center svelte-1rgu7yb"), u(c, "contenteditable", "true"), u(c, "class", "absolute size-inherit break-all top-0 left-0 pointer-events-none overflow-clip px-1 border border-transparent hyphens-auto svelte-1rgu7yb"), /*fieldDetails*/
      n[45].displayHTML === void 0 && be(M), u(m, "contenteditable", "true"), u(m, "data-fieldname", F = /*fieldTitle*/
      n[44]), u(m, "class", "break-all relative top-0 left-0 webkit-text-transparent px-1 border hover:border-zinc-400 border-zinc-600 rounded-[0.3rem] appearance-none outline-none focus:border-blue-400 transition-colors duration-100 svelte-1rgu7yb"), /*fieldDetails*/
      n[45].value === void 0 && be(z), u(l, "class", "relative w-full rounded bg-zinc-500-trs mb-3 svelte-1rgu7yb"), u(l, "data-fieldname", w = /*fieldTitle*/
      n[44]), u(l, "id", N = /*fieldTitle*/
      n[44]);
    },
    m(H, k) {
      S(H, e, k), g(e, t), g(t, o), g(e, i), g(e, s), T && T.m(s, null), S(H, b, k), S(H, l, k), g(l, c), /*fieldDetails*/
      n[45].displayHTML !== void 0 && (c.innerHTML = /*fieldDetails*/
      n[45].displayHTML), g(l, d), g(l, m), /*fieldDetails*/
      n[45].value !== void 0 && (m.innerHTML = /*fieldDetails*/
      n[45].value), W || (X = [
        Z(c, "input", M),
        Z(m, "input", z),
        Z(
          m,
          "input",
          /*handleFieldInput*/
          n[21]
        )
      ], W = !0);
    },
    p(H, k) {
      n = H, k[0] & /*cardModelFieldsData*/
      2048 && a !== (a = /*fieldTitle*/
      n[44] + "") && ge(o, a), k[0] & /*cardModelFieldsData*/
      2048 && r !== (r = /*fieldTitle*/
      n[44]) && u(t, "for", r), /*fieldDetails*/
      n[45].shouldSave ? T || (T = qe(), T.c(), T.m(s, null)) : T && (T.d(1), T = null), k[0] & /*cardModelFieldsData*/
      2048 && /*fieldDetails*/
      n[45].displayHTML !== c.innerHTML && (c.innerHTML = /*fieldDetails*/
      n[45].displayHTML), k[0] & /*cardModelFieldsData*/
      2048 && F !== (F = /*fieldTitle*/
      n[44]) && u(m, "data-fieldname", F), k[0] & /*cardModelFieldsData*/
      2048 && /*fieldDetails*/
      n[45].value !== m.innerHTML && (m.innerHTML = /*fieldDetails*/
      n[45].value), k[0] & /*cardModelFieldsData*/
      2048 && w !== (w = /*fieldTitle*/
      n[44]) && u(l, "data-fieldname", w), k[0] & /*cardModelFieldsData*/
      2048 && N !== (N = /*fieldTitle*/
      n[44]) && u(l, "id", N);
    },
    d(H) {
      H && C(e), T && T.d(), H && C(b), H && C(l), W = !1, Le(X);
    }
  };
}
function dt(n) {
  let e, t, a, o = (
    /*isPopupEnabled*/
    n[4] && Pe(n)
  );
  return {
    c() {
      e = h("dialog"), o && o.c(), e.open = !0, u(e, "class", t = /*options*/
      (n[1].shouldPopupBePinned.value ? "fixed" : "absolute") + " p-0 m-0 bg-transparent popup svelte-1rgu7yb"), se(
        e,
        "--UIScale",
        /*options*/
        n[1].UIScale.value
      );
    },
    m(r, i) {
      S(r, e, i), o && o.m(e, null), n[32](e), a = !0;
    },
    p(r, i) {
      /*isPopupEnabled*/
      r[4] ? o ? (o.p(r, i), i[0] & /*isPopupEnabled*/
      16 && x(o, 1)) : (o = Pe(r), o.c(), x(o, 1), o.m(e, null)) : o && (me(), te(o, 1, 1, () => {
        o = null;
      }), pe()), (!a || i[0] & /*options*/
      2 && t !== (t = /*options*/
      (r[1].shouldPopupBePinned.value ? "fixed" : "absolute") + " p-0 m-0 bg-transparent popup svelte-1rgu7yb")) && u(e, "class", t), (!a || i[0] & /*options*/
      2) && se(
        e,
        "--UIScale",
        /*options*/
        r[1].UIScale.value
      );
    },
    i(r) {
      a || (x(o), a = !0);
    },
    o(r) {
      te(o), a = !1;
    },
    d(r) {
      r && C(e), o && o.d(), n[32](null);
    }
  };
}
const Te = 300;
function ft(n, e) {
  chrome.storage.sync.set({
    selectedDeck: n,
    selectedModel: e
  });
}
function bt(n) {
  Object.keys(n).reduce(
    (e, t) => (n[t].shouldSave && e[t], e),
    {}
  ), console.log("saving fields:", n), chrome.storage.sync.set({ savedFields: n });
}
function mt(n, e, t) {
  let { staticHoverNode: a } = e, { parentDocument: o = document } = e, { options: r } = e, { contentToSave: i = void 0 } = e, { initialX: s = 0 } = e, { initialY: b = 0 } = e;
  console.log("initialY", b);
  let l, c = !1, d = !1, m, F, w, N, W, X = [], T = [], M = {}, z = "", H = !1, k = !1, P = !1;
  je(() => {
    t(2, l.style.left = s + "px", l), t(2, l.style.top = b + "px", l), t(4, d = !0), re(), o.addEventListener("mouseup", V);
  });
  async function re(f = !0) {
    try {
      const y = await et(), I = await tt();
      if (y && I)
        t(9, X = y), t(10, T = I), H = !0, T.length > 1 && R(T[0]), f ? t(12, z = "") : (t(12, z = "success"), setTimeout(
          () => {
            t(12, z = "");
          },
          5e3
        )), t(6, F = (await chrome.storage.sync.get("selectedDeck")).selectedDeck), t(8, N = (await chrome.storage.sync.get("selectedModel")).selectedModel), W = (await chrome.storage.sync.get("savedFields")).savedFields || {};
      else
        throw new ye();
    } catch (y) {
      ie(y, () => re(!1));
    }
  }
  let K = 0;
  function ie(f, y) {
    switch (console.error(f), f.constructor) {
      case nt:
        t(12, z = "connection");
        break;
      case ye:
        t(12, z = "response");
        break;
      default:
        t(12, z = "unknown");
        break;
    }
    if (y) {
      t(15, K = 5);
      let I = setInterval(
        () => {
          t(15, K -= 1), K == 0 && (y(), clearInterval(I));
        },
        1e3
      );
    }
  }
  async function ae(f) {
    const y = new FormData(f.target), I = Object.keys(M).reduce((ee, de) => (ee[de] = M[de].value, ee), {}), J = Object.keys(I).reduce((ee, de) => (ee[de] = I[de].replaceAll("$replace$", i), ee), {});
    H = !1;
    let oe;
    try {
      oe = await st(y.get("deckName"), y.get("modelName"), J);
    } catch {
      t(12, z = "response"), setTimeout(
        () => {
          t(12, z = "");
        },
        5e3
      );
    }
    oe ? (t(14, P = !0), setTimeout(
      () => {
        t(14, P = !1);
      },
      5e3
    ), ft(y.get("deckName"), y.get("modelName")), bt(I)) : ie(new ye()), H = !0;
  }
  let v, Y;
  function Q(f) {
    const y = l.getBoundingClientRect();
    v = -f.clientX + y.left, Y = -f.clientY + y.top, o.addEventListener("mousemove", A), o.addEventListener("mouseup", B), t(3, c = !0), t(13, k = !1), t(14, P = !1);
  }
  function B(f) {
    t(3, c = !1), o.removeEventListener("mousemove", A), o.removeEventListener("mouseup", B);
  }
  function A(f) {
    f.preventDefault(), t(2, l.style.left = (r.shouldPopupBePinned.value ? f.clientX : f.pageX) + v + "px", l), t(2, l.style.top = (r.shouldPopupBePinned.value ? f.clientY : f.pageY) + Y + "px", l);
  }
  function V(f) {
    f.target.id != Je + "-root" ? k ? ne() : t(13, k = !0) : t(13, k = !1);
  }
  function ne() {
    t(4, d = !1), o.removeEventListener("mouseup", V), setTimeout(
      () => {
        l.parentNode.removeChild(l);
      },
      Te
    );
  }
  async function ue(f) {
    t(6, F = f.target.value);
  }
  async function L(f) {
    t(8, N = f.target.value), R(f.target.value);
  }
  async function R(f) {
    const y = await lt(f);
    ot(Object.keys(W).sort(), y.slice().sort()) ? t(11, M = y.reduce(
      (I, J) => {
        const oe = W[J];
        return I[J] = {
          value: oe || "",
          shouldSave: !!oe,
          displayHTML: $(oe)
        }, I;
      },
      {}
    )) : t(11, M = y.reduce(
      (I, J) => (I[J] = {
        value: "",
        shouldSave: !1,
        displayHTML: ""
      }, I),
      {}
    ));
  }
  function $(f) {
    const y = we(f), I = f.indexOf(Ee);
    let J;
    return I != -1 && (J = y.replaceAll("$replace$", '<span class="replaceable">$replace$</span>')), J;
  }
  function O(f) {
    const y = f.target.dataset.fieldname, I = f.target.innerText, J = we(I), oe = I.indexOf(Ee);
    let ee;
    oe != -1 ? (ee = J.replaceAll("$replace$", '<span class="replaceable">$replace$</span>'), t(11, M[y].shouldSave = !0, M)) : (ee = J, t(11, M[y].shouldSave = !1, M)), t(11, M[y].displayHTML = ee, M);
  }
  function G() {
    i = this.innerHTML, t(0, i);
  }
  const E = (f) => {
    let y = f.target.innerHTML;
    y = we(y);
  };
  function le(f) {
    ce[f ? "unshift" : "push"](() => {
      w = f, t(7, w), t(9, X);
    });
  }
  function U(f) {
    ce[f ? "unshift" : "push"](() => {
      m = f, t(5, m), t(10, T);
    });
  }
  function _(f, y) {
    f[y][1].displayHTML = this.innerHTML, t(11, M);
  }
  function q(f, y) {
    f[y][1].value = this.innerHTML, t(11, M);
  }
  function p(f) {
    ce[f ? "unshift" : "push"](() => {
      l = f, t(2, l);
    });
  }
  return n.$$set = (f) => {
    "staticHoverNode" in f && t(22, a = f.staticHoverNode), "parentDocument" in f && t(23, o = f.parentDocument), "options" in f && t(1, r = f.options), "contentToSave" in f && t(0, i = f.contentToSave), "initialX" in f && t(24, s = f.initialX), "initialY" in f && t(25, b = f.initialY);
  }, [
    i,
    r,
    l,
    c,
    d,
    m,
    F,
    w,
    N,
    X,
    T,
    M,
    z,
    k,
    P,
    K,
    ae,
    Q,
    B,
    ue,
    L,
    O,
    a,
    o,
    s,
    b,
    G,
    E,
    le,
    U,
    _,
    q,
    p
  ];
}
class pt extends Me {
  constructor(e) {
    super(), Se(
      this,
      e,
      mt,
      dt,
      Ce,
      {
        staticHoverNode: 22,
        parentDocument: 23,
        options: 1,
        contentToSave: 0,
        initialX: 24,
        initialY: 25
      },
      null,
      [-1, -1]
    );
  }
}
function gt(n) {
  let e, t, a, o, r;
  return {
    c() {
      e = h("div"), t = h("img"), ke(t.src, a = chrome.runtime.getURL("icons/anki.png")) || u(t, "src", a), u(t, "alt", "Save 2 Anki"), u(t, "class", "icon svelte-14zaszm"), u(e, "class", "panel svelte-14zaszm");
    },
    m(i, s) {
      S(i, e, s), g(e, t), n[7](e), o || (r = Z(
        e,
        "click",
        /*handleClickAnki*/
        n[1]
      ), o = !0);
    },
    p: fe,
    i: fe,
    o: fe,
    d(i) {
      i && C(e), n[7](null), o = !1, r();
    }
  };
}
function vt(n, e, t) {
  let { staticHoverNode: a } = e, { parentDocument: o } = e, { selectionText: r } = e, { hideToolbar: i } = e, { options: s } = e, b;
  function l() {
    const m = b.getBoundingClientRect();
    new pt({
      target: a,
      props: {
        parentDocument: o,
        staticHoverNode: a,
        initialX: m.left + (s.shouldPopupBePinned.value ? 0 : document.documentElement.scrollLeft || document.body.scrollLeft),
        initialY: m.top + (s.shouldPopupBePinned.value ? 0 : document.documentElement.scrollTop || document.body.scrollTop),
        contentToSave: r,
        options: s
      }
    });
  }
  function c() {
    l(), i();
  }
  function d(m) {
    ce[m ? "unshift" : "push"](() => {
      b = m, t(0, b);
    });
  }
  return n.$$set = (m) => {
    "staticHoverNode" in m && t(2, a = m.staticHoverNode), "parentDocument" in m && t(3, o = m.parentDocument), "selectionText" in m && t(4, r = m.selectionText), "hideToolbar" in m && t(5, i = m.hideToolbar), "options" in m && t(6, s = m.options);
  }, [
    b,
    c,
    a,
    o,
    r,
    i,
    s,
    d
  ];
}
class ht extends Me {
  constructor(e) {
    super(), Se(this, e, vt, gt, Ce, {
      staticHoverNode: 2,
      parentDocument: 3,
      selectionText: 4,
      hideToolbar: 5,
      options: 6
    });
  }
}
function Ge(n, e, t) {
  const a = n.slice();
  return a[32] = e[t], a;
}
function _t(n) {
  let e, t, a, o, r, i, s = (
    /*entry*/
    n[32].wordForGender + ""
  ), b, l, c;
  return {
    c() {
      e = h("div"), t = h("img"), r = D(), i = h("div"), b = j(s), l = D(), ke(t.src, a = /*entry*/
      n[32].flagURL) || u(t, "src", a), u(t, "class", "block mr-1 rounded-[3px] svelte-18agb2n"), u(t, "alt", o = /*entry*/
      n[32].countryCode + " flag"), u(i, "class", "opacity-90 svelte-18agb2n"), u(e, "class", c = "blurry-bg " + /*entry*/
      n[32].gender + "-entry flex pointer-events-none px-1 w-full items-center text-center text-sm font-bold svelte-18agb2n");
    },
    m(d, m) {
      S(d, e, m), g(e, t), g(e, r), g(e, i), g(i, b), g(e, l);
    },
    p(d, m) {
      m[0] & /*hoverContent*/
      32 && !ke(t.src, a = /*entry*/
      d[32].flagURL) && u(t, "src", a), m[0] & /*hoverContent*/
      32 && o !== (o = /*entry*/
      d[32].countryCode + " flag") && u(t, "alt", o), m[0] & /*hoverContent*/
      32 && s !== (s = /*entry*/
      d[32].wordForGender + "") && ge(b, s), m[0] & /*hoverContent*/
      32 && c !== (c = "blurry-bg " + /*entry*/
      d[32].gender + "-entry flex pointer-events-none px-1 w-full items-center text-center text-sm font-bold svelte-18agb2n") && u(e, "class", c);
    },
    i: fe,
    o: fe,
    d(d) {
      d && C(e);
    }
  };
}
function yt(n) {
  let e, t, a;
  const o = [
    /*entry*/
    n[32].props
  ];
  var r = (
    /*entry*/
    n[32].component
  );
  function i(s) {
    let b = {};
    for (let l = 0; l < o.length; l += 1)
      b = $e(b, o[l]);
    return { props: b };
  }
  return r && (e = Ne(r, i())), {
    c() {
      e && ze(e.$$.fragment), t = Ve();
    },
    m(s, b) {
      e && He(e, s, b), S(s, t, b), a = !0;
    },
    p(s, b) {
      const l = b[0] & /*hoverContent*/
      32 ? Qe(o, [Ze(
        /*entry*/
        s[32].props
      )]) : {};
      if (b[0] & /*hoverContent*/
      32 && r !== (r = /*entry*/
      s[32].component)) {
        if (e) {
          me();
          const c = e;
          te(c.$$.fragment, 1, 0, () => {
            De(c, 1);
          }), pe();
        }
        r ? (e = Ne(r, i()), ze(e.$$.fragment), x(e.$$.fragment, 1), He(e, t.parentNode, t)) : e = null;
      } else
        r && e.$set(l);
    },
    i(s) {
      a || (e && x(e.$$.fragment, s), a = !0);
    },
    o(s) {
      e && te(e.$$.fragment, s), a = !1;
    },
    d(s) {
      s && C(t), e && De(e, s);
    }
  };
}
function xe(n) {
  let e, t, a, o;
  const r = [yt, _t], i = [];
  function s(b, l) {
    return (
      /*entry*/
      b[32].isSvelteComponent ? 0 : 1
    );
  }
  return e = s(n), t = i[e] = r[e](n), {
    c() {
      t.c(), a = Ve();
    },
    m(b, l) {
      i[e].m(b, l), S(b, a, l), o = !0;
    },
    p(b, l) {
      let c = e;
      e = s(b), e === c ? i[e].p(b, l) : (me(), te(i[c], 1, 1, () => {
        i[c] = null;
      }), pe(), t = i[e], t ? t.p(b, l) : (t = i[e] = r[e](b), t.c()), x(t, 1), t.m(a.parentNode, a));
    },
    i(b) {
      o || (x(t), o = !0);
    },
    o(b) {
      te(t), o = !1;
    },
    d(b) {
      i[e].d(b), b && C(a);
    }
  };
}
function wt(n) {
  let e, t, a, o, r, i = (
    /*hoverContent*/
    n[5]
  ), s = [];
  for (let l = 0; l < i.length; l += 1)
    s[l] = xe(Ge(n, i, l));
  const b = (l) => te(s[l], 1, 1, () => {
    s[l] = null;
  });
  return {
    c() {
      e = h("div"), t = h("div");
      for (let l = 0; l < s.length; l += 1)
        s[l].c();
      a = D(), o = h("div"), u(t, "id", "hover-content"), u(t, "class", " svelte-18agb2n"), u(e, "id", "hover"), u(e, "class", "select-none absolute truncate text-white rounded z-[999] svelte-18agb2n"), se(
        e,
        "--UIScale",
        /*options*/
        n[4].UIScale.value
      ), se(
        e,
        "pointer-events",
        /*isMakingSelection*/
        n[2] ? "all" : "none"
      ), u(o, "id", "static-hover"), u(o, "class", "absolute left-0 top-0 svelte-18agb2n");
    },
    m(l, c) {
      S(l, e, c), g(e, t);
      for (let d = 0; d < s.length; d += 1)
        s[d] && s[d].m(t, null);
      n[9](t), n[10](e), S(l, a, c), S(l, o, c), n[11](o), r = !0;
    },
    p(l, c) {
      if (c[0] & /*hoverContent*/
      32) {
        i = /*hoverContent*/
        l[5];
        let d;
        for (d = 0; d < i.length; d += 1) {
          const m = Ge(l, i, d);
          s[d] ? (s[d].p(m, c), x(s[d], 1)) : (s[d] = xe(m), s[d].c(), x(s[d], 1), s[d].m(t, null));
        }
        for (me(), d = i.length; d < s.length; d += 1)
          b(d);
        pe();
      }
      (!r || c[0] & /*options*/
      16) && se(
        e,
        "--UIScale",
        /*options*/
        l[4].UIScale.value
      ), (!r || c[0] & /*isMakingSelection*/
      4) && se(
        e,
        "pointer-events",
        /*isMakingSelection*/
        l[2] ? "all" : "none"
      );
    },
    i(l) {
      if (!r) {
        for (let c = 0; c < i.length; c += 1)
          x(s[c]);
        r = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let c = 0; c < s.length; c += 1)
        te(s[c]);
      r = !1;
    },
    d(l) {
      l && C(e), ve(s, l), n[9](null), n[10](null), l && C(a), l && C(o), n[11](null);
    }
  };
}
function kt(n, e, t) {
  let { rootNode: a } = e, { shadowRootNode: o } = e, { parentDocument: r = document } = e, i = !1, s, b, l = 0, c = 0, d = !1, m, F, w = Ae;
  chrome.storage.sync.get("options").then((v) => {
    t(4, w = v.options || Ae);
  });
  let N = [];
  je(() => {
    r.readyState === "complete" ? X() : r.addEventListener("DOMContentLoaded", X());
  });
  function W() {
    t(0, s.style.left = l + "px", s), t(0, s.style.top = c + "px", s), window.requestAnimationFrame(W);
  }
  function X() {
    rt(), chrome.runtime.sendMessage({ type: "isExtensionOn" }, (v) => {
      console.log("checking: isExtensionOn?", v.isExtensionOn), v.isExtensionOn && !i && T();
    }), setTimeout(
      () => {
        W();
      },
      50
    );
  }
  chrome.runtime.onMessage.addListener(function(v, Y, Q) {
    switch (console.log("receiving request:", v.type), v.type) {
      case "enableExtension":
        i || T();
        break;
      case "disableExtension":
        M();
        break;
      case "updateOptions":
        t(4, w = v.data);
        break;
    }
  });
  function T() {
    i = !0, r.addEventListener("mousemove", P), r.addEventListener("selectionchange", k), r.body.appendChild(a);
  }
  function M() {
    i = !1, r.removeEventListener("mousemove", P), r.removeEventListener("selectionchange", k);
    let v = r.getElementById(`${Je}-root`);
    v && v.remove();
  }
  function z(v) {
    t(5, N = v), t(0, s.style.opacity = 1, s);
  }
  function H() {
    d || (m = "", t(0, s.style.opacity = 0, s));
  }
  function k(v) {
    let Y = r.getSelection();
    if (Y.isCollapsed)
      t(2, d = !1), H();
    else {
      let Q = Y.getRangeAt(0), B = Y.getRangeAt(0).toString().trim(), A = Q.getBoundingClientRect();
      t(2, d = !0), l = A.x + A.width / 2 - s.offsetWidth / 2, c = A.y + r.documentElement.scrollTop - (s.offsetHeight + w.distanceToMouse.value) * w.UIScale.value, z([
        {
          isSvelteComponent: !0,
          component: ht,
          props: {
            staticHoverNode: F,
            parentDocument: r,
            selectionText: B,
            hideToolbar: () => {
              t(2, d = !1), H();
            },
            options: w
          }
        }
      ]);
    }
  }
  function P(v) {
    if (v.pageX, v.pageY, !s || d)
      return;
    const Y = r.caretRangeFromPoint(v.clientX, v.clientY);
    if (!Y)
      return;
    const B = Y.startContainer.nodeValue;
    if (!B)
      H();
    else {
      const A = Y.startOffset, V = B.slice(0, A), ne = B.slice(A);
      if (V && ne) {
        const ue = V.search(/[^\p{L}\p{M}0-9-](?![\s\S]*[^\p{L}\p{M}0-9-])/u), L = ne.search(/[^\p{L}\p{M}0-9-]/u), R = ue === -1 ? 0 : ue + 1, $ = L === -1 ? B.length : A + L, G = B.slice(R, $).toLowerCase();
        if (G !== m) {
          if (!G)
            return;
          m = G, chrome.runtime.sendMessage({ word: G, type: "getGender" }, (E) => {
            E.data.length > 0 ? z(E.data) : H();
          });
        }
      }
    }
    re(v);
  }
  function re(v) {
    d || (l = Math.min(window.innerWidth - s.offsetWidth * w.UIScale.value - 10, v.pageX + w.distanceToMouse.value * w.UIScale.value), c = Math.max(v.pageY - s.offsetHeight - w.distanceToMouse.value * w.UIScale.value, 10));
  }
  function K(v) {
    ce[v ? "unshift" : "push"](() => {
      b = v, t(1, b);
    });
  }
  function ie(v) {
    ce[v ? "unshift" : "push"](() => {
      s = v, t(0, s);
    });
  }
  function ae(v) {
    ce[v ? "unshift" : "push"](() => {
      F = v, t(3, F);
    });
  }
  return n.$$set = (v) => {
    "rootNode" in v && t(6, a = v.rootNode), "shadowRootNode" in v && t(7, o = v.shadowRootNode), "parentDocument" in v && t(8, r = v.parentDocument);
  }, [
    s,
    b,
    d,
    F,
    w,
    N,
    a,
    o,
    r,
    K,
    ie,
    ae
  ];
}
class Ct extends Me {
  constructor(e) {
    super(), Se(
      this,
      e,
      kt,
      wt,
      Ce,
      {
        rootNode: 6,
        shadowRootNode: 7,
        parentDocument: 8
      },
      null,
      [-1, -1]
    );
  }
}
export {
  Ct as default
};
//# sourceMappingURL=Content.js.map
