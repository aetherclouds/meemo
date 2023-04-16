import { S as Le, i as Ce, s as Ne, e as _, b as d, y as ne, d as C, t as W, o as pe, g as ee, f as he, h as N, z as je, a as D, m as q, c as g, l as Z, A as Ze, q as ke, u as _e, w as be, j as ve, r as ze, n as ge, B as xe, C as de, p as Me, x as me, v as Je, D as Ee, E as De, F as He, G as $e, H as et, I as Ie, J as tt } from "./svelteTransition.js";
import { E as we, e as ye, R as ce, D as Re, g as lt } from "./const.js";
import { g as nt, b as ot, A as Te, c as st, d as it, e as rt } from "./ankiConnectUtil.js";
function Ae(l, e, t) {
  const s = l.slice();
  return s[44] = e[t][0], s[45] = e[t][1], s[46] = e, s[47] = t, s;
}
function Oe(l, e, t) {
  const s = l.slice();
  return s[48] = e[t], s;
}
function Pe(l, e, t) {
  const s = l.slice();
  return s[51] = e[t], s;
}
function Ue(l) {
  let e, t, s, n, o, i, a, f, u, r, h, p, H, M, S, k, F, X, T, w, K, A, y, x, G, oe, ae, te, ue, V, v, B, j, O, P, se, ie, z = (
    /*messageType*/
    l[12] && Fe(l)
  ), I = (
    /*contentToSave*/
    l[0] != null && Xe(l)
  ), $ = (
    /*cardDecks*/
    l[9]
  ), R = [];
  for (let b = 0; b < $.length; b += 1)
    R[b] = Ye(Pe(l, $, b));
  let le = (
    /*cardModels*/
    l[10]
  ), E = [];
  for (let b = 0; b < le.length; b += 1)
    E[b] = qe(Oe(l, le, b));
  let J = Object.entries(
    /*cardModelFieldsData*/
    l[11]
  ), U = [];
  for (let b = 0; b < J.length; b += 1)
    U[b] = Ge(Ae(l, J, b));
  return {
    c() {
      e = _("div"), t = _("div"), t.innerHTML = `<div class="grid grid-rows-2 grid-cols-4 mx-auto w-max justify-center gap-x-1 gap-y-1 my-auto svelte-mdhxpg"><div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem] svelte-mdhxpg"></div> 
                <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem] svelte-mdhxpg"></div> 
                <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem] svelte-mdhxpg"></div> 
                <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem] svelte-mdhxpg"></div> 
                <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem] svelte-mdhxpg"></div> 
                <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem] svelte-mdhxpg"></div> 
                <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem] svelte-mdhxpg"></div> 
                <div class="bg-zinc-500 rounded-full aspect-square w-[0.16rem] h-[0.16rem] svelte-mdhxpg"></div></div>`, s = D(), n = _("div"), o = _("h1"), o.textContent = "Add2Anki", i = D(), z && z.c(), a = D(), I && I.c(), f = D(), u = _("form"), r = _("div"), h = _("div"), p = _("label"), p.textContent = "Card Deck", H = D(), M = _("div"), S = _("select");
      for (let b = 0; b < R.length; b += 1)
        R[b].c();
      k = D(), F = _("select"), X = D(), T = _("div"), w = _("label"), w.textContent = "Card Model", K = D(), A = _("div"), y = _("select");
      for (let b = 0; b < E.length; b += 1)
        E[b].c();
      x = D(), G = _("select"), oe = D();
      for (let b = 0; b < U.length; b += 1)
        U[b].c();
      ae = D(), te = _("div"), te.textContent = " ", ue = D(), V = _("button"), v = q("Add that thing!"), d(t, "draggable", ""), d(t, "class", "w-full h-min py-1.5 rounded-[0.3rem] box-border flex cursor-move hover:bg-zinc-500/20 transition-colors duration-100  svelte-mdhxpg"), d(o, "class", "text-blue-gradient font-bold text-xl mx-auto mb-5 svelte-mdhxpg"), d(p, "for", "deckName"), d(p, "class", "block mb-0.5 label-on-focus svelte-mdhxpg"), d(S, "name", "deckName"), d(S, "id", "deckName"), d(S, "class", "w-full rounded-[0.3rem] bg-zinc-500/20 border border-zinc-600 truncate outline-none hover:border-zinc-400 focus:border-blue-400 transition-colors duration-100 svelte-mdhxpg"), F.disabled = !0, d(F, "class", "absolute w-full h-full top-0 left-0 bg-transparent border border-transparent text-zinc-500 pointer-events-none svelte-mdhxpg"), d(M, "class", "relative svelte-mdhxpg"), d(h, "class", "pr-2 svelte-mdhxpg"), d(w, "for", "modelName"), d(w, "class", "block mb-0.5 svelte-mdhxpg"), d(y, "name", "modelName"), d(y, "id", "modelName"), d(y, "class", "w-full rounded-[0.3rem] bg-zinc-500/20 border border-zinc-600 truncate outline-none hover:border-zinc-400 focus:border-blue-400 transition-colors duration-100 svelte-mdhxpg"), G.disabled = !0, d(G, "class", "absolute w-full h-full top-0 left-0 bg-transparent border border-transparent text-zinc-500 pointer-events-none svelte-mdhxpg"), d(A, "class", "relative svelte-mdhxpg"), d(T, "class", "pl-2 svelte-mdhxpg"), d(r, "class", "w-full grid grid-cols-2 mb-3 svelte-mdhxpg"), d(te, "class", "opacity-0 block mb-0.5 svelte-mdhxpg"), d(V, "type", "submit"), d(V, "class", "w-full rounded-[0.3rem] bg-zinc-500/20 border border-zinc-600 text-sm py-1 appearance-none outline-none enabled:hover:border-blue-400 enabled:hover:text-blue-400 focus:border-blue-400 focus:text-blue-400 shadow-none focus:shadow-inner disabled:opacity-80 disabled-border-zinc-600 transition-colors duration-100 svelte-mdhxpg"), V.disabled = B = !/*canSubmit*/
      l[13] || void 0, d(u, "action", ""), d(u, "class", "text-zinc-300 text-sm svelte-mdhxpg"), d(u, "id", "leForm"), d(n, "class", "p-5 flex flex-col max-h-xs overflow-auto bg-transparent svelte-mdhxpg"), d(e, "class", j = "bg-zinc-800/90 w-[20rem] max-w-[20rem] rounded-[0.3rem] blur-bg relative border " + /*isPopupBeingDragged*/
      (l[3] ? "shadow-xl shadow-black/10" : "shadow-sm ") + " " + /*messageType*/
      (l[12] ? (
        /*messageType*/
        l[12] != "success" && !/*highlightSubmitSuccessful*/
        l[15] ? "border-red-400" : "border-green-400"
      ) : (
        /*highlightSubmitSuccessful*/
        l[15] ? "border-green-400" : "border-transparent"
      )) + " " + /*highlightWarnClose*/
      (l[14] ? " ring-1 ring-blue-400 " : "") + " duration-100 svelte-mdhxpg"), ne(e, "transition-property", "box-shadow, border-color");
    },
    m(b, m) {
      C(b, e, m), g(e, t), g(e, s), g(e, n), g(n, o), g(n, i), z && z.m(n, null), g(n, a), I && I.m(n, null), g(n, f), g(n, u), g(u, r), g(r, h), g(h, p), g(h, H), g(h, M), g(M, S);
      for (let c = 0; c < R.length; c += 1)
        R[c] && R[c].m(S, null);
      l[29](S), g(M, k), g(M, F), g(r, X), g(r, T), g(T, w), g(T, K), g(T, A), g(A, y);
      for (let c = 0; c < E.length; c += 1)
        E[c] && E[c].m(y, null);
      l[30](y), g(A, x), g(A, G), g(u, oe);
      for (let c = 0; c < U.length; c += 1)
        U[c] && U[c].m(u, null);
      g(u, ae), g(u, te), g(u, ue), g(u, V), g(V, v), P = !0, se || (ie = [
        Z(
          t,
          "mousedown",
          /*handleDragMouseDown*/
          l[18]
        ),
        Z(
          t,
          "mouseup",
          /*handleDragMouseUp*/
          l[19]
        ),
        Z(
          S,
          "change",
          /*handleDeckSelectionChange*/
          l[20]
        ),
        Z(
          y,
          "change",
          /*handleModelSelectChange*/
          l[21]
        ),
        Z(u, "submit", Ze(
          /*handleSubmit*/
          l[17]
        ))
      ], se = !0);
    },
    p(b, m) {
      if (l = b, /*messageType*/
      l[12] ? z ? (z.p(l, m), m[0] & /*messageType*/
      4096 && W(z, 1)) : (z = Fe(l), z.c(), W(z, 1), z.m(n, a)) : z && (pe(), ee(z, 1, 1, () => {
        z = null;
      }), he()), /*contentToSave*/
      l[0] != null ? I ? I.p(l, m) : (I = Xe(l), I.c(), I.m(n, f)) : I && (I.d(1), I = null), m[0] & /*cardDecks, selectedDeck*/
      576) {
        $ = /*cardDecks*/
        l[9];
        let c;
        for (c = 0; c < $.length; c += 1) {
          const L = Pe(l, $, c);
          R[c] ? R[c].p(L, m) : (R[c] = Ye(L), R[c].c(), R[c].m(S, null));
        }
        for (; c < R.length; c += 1)
          R[c].d(1);
        R.length = $.length;
      }
      if (m[0] & /*cardModels, selectedModel*/
      1280) {
        le = /*cardModels*/
        l[10];
        let c;
        for (c = 0; c < le.length; c += 1) {
          const L = Oe(l, le, c);
          E[c] ? E[c].p(L, m) : (E[c] = qe(L), E[c].c(), E[c].m(y, null));
        }
        for (; c < E.length; c += 1)
          E[c].d(1);
        E.length = le.length;
      }
      if (m[0] & /*cardModelFieldsData, handleFieldInput*/
      4196352) {
        J = Object.entries(
          /*cardModelFieldsData*/
          l[11]
        );
        let c;
        for (c = 0; c < J.length; c += 1) {
          const L = Ae(l, J, c);
          U[c] ? U[c].p(L, m) : (U[c] = Ge(L), U[c].c(), U[c].m(u, ae));
        }
        for (; c < U.length; c += 1)
          U[c].d(1);
        U.length = J.length;
      }
      (!P || m[0] & /*canSubmit*/
      8192 && B !== (B = !/*canSubmit*/
      l[13] || void 0)) && (V.disabled = B), (!P || m[0] & /*isPopupBeingDragged, messageType, highlightSubmitSuccessful, highlightWarnClose*/
      53256 && j !== (j = "bg-zinc-800/90 w-[20rem] max-w-[20rem] rounded-[0.3rem] blur-bg relative border " + /*isPopupBeingDragged*/
      (l[3] ? "shadow-xl shadow-black/10" : "shadow-sm ") + " " + /*messageType*/
      (l[12] ? (
        /*messageType*/
        l[12] != "success" && !/*highlightSubmitSuccessful*/
        l[15] ? "border-red-400" : "border-green-400"
      ) : (
        /*highlightSubmitSuccessful*/
        l[15] ? "border-green-400" : "border-transparent"
      )) + " " + /*highlightWarnClose*/
      (l[14] ? " ring-1 ring-blue-400 " : "") + " duration-100 svelte-mdhxpg")) && d(e, "class", j);
    },
    i(b) {
      P || (W(z), ke(() => {
        P && (O || (O = _e(
          e,
          be,
          {
            axis: "y",
            duration: (
              /*options*/
              l[1].useMotion.value ? Se : 0
            )
          },
          !0
        )), O.run(1));
      }), P = !0);
    },
    o(b) {
      ee(z), O || (O = _e(
        e,
        be,
        {
          axis: "y",
          duration: (
            /*options*/
            l[1].useMotion.value ? Se : 0
          )
        },
        !1
      )), O.run(0), P = !1;
    },
    d(b) {
      b && N(e), z && z.d(), I && I.d(), ve(R, b), l[29](null), ve(E, b), l[30](null), ve(U, b), b && O && O.end(), se = !1, ze(ie);
    }
  };
}
function Fe(l) {
  let e, t, s, n, o, i;
  function a(h, p) {
    if (
      /*messageType*/
      h[12] == "connection"
    )
      return dt;
    if (
      /*messageType*/
      h[12] == "response"
    )
      return ct;
    if (
      /*messageType*/
      h[12] == "unknown"
    )
      return ut;
    if (
      /*messageType*/
      h[12] == "success"
    )
      return at;
  }
  let f = a(l), u = f && f(l), r = (
    /*messageType*/
    l[12] == "connection" && Be(l)
  );
  return {
    c() {
      e = _("div"), t = _("div"), u && u.c(), s = D(), r && r.c(), d(t, "class", "svelte-mdhxpg"), d(e, "class", n = "rounded-[0.3rem] border " + /*messageType*/
      (l[12] == "success" ? "border-green-400" : "border-red-400") + " text-zinc-300 px-2 py-1 mb-3 flex flex-col h-max text-xs hyphens-auto svelte-mdhxpg"), ne(e, "transition", "border-color 500ms, height 500ms");
    },
    m(h, p) {
      C(h, e, p), g(e, t), u && u.m(t, null), g(e, s), r && r.m(e, null), i = !0;
    },
    p(h, p) {
      l = h, f !== (f = a(l)) && (u && u.d(1), u = f && f(l), u && (u.c(), u.m(t, null))), /*messageType*/
      l[12] == "connection" ? r ? r.p(l, p) : (r = Be(l), r.c(), r.m(e, null)) : r && (r.d(1), r = null), (!i || p[0] & /*messageType*/
      4096 && n !== (n = "rounded-[0.3rem] border " + /*messageType*/
      (l[12] == "success" ? "border-green-400" : "border-red-400") + " text-zinc-300 px-2 py-1 mb-3 flex flex-col h-max text-xs hyphens-auto svelte-mdhxpg")) && d(e, "class", n);
    },
    i(h) {
      i || (ke(() => {
        i && (o || (o = _e(
          e,
          be,
          {
            axis: "y",
            duration: (
              /*options*/
              l[1].useMotion.value ? 500 : 0
            )
          },
          !0
        )), o.run(1));
      }), i = !0);
    },
    o(h) {
      o || (o = _e(
        e,
        be,
        {
          axis: "y",
          duration: (
            /*options*/
            l[1].useMotion.value ? 500 : 0
          )
        },
        !1
      )), o.run(0), i = !1;
    },
    d(h) {
      h && N(e), u && u.d(), r && r.d(), h && o && o.end();
    }
  };
}
function at(l) {
  let e;
  return {
    c() {
      e = q("Successfully reconnected with Anki!");
    },
    m(t, s) {
      C(t, e, s);
    },
    d(t) {
      t && N(e);
    }
  };
}
function ut(l) {
  let e;
  return {
    c() {
      e = q("There has been an uknown error. ¯\\_(ツ)_/¯");
    },
    m(t, s) {
      C(t, e, s);
    },
    d(t) {
      t && N(e);
    }
  };
}
function ct(l) {
  let e;
  return {
    c() {
      e = q("There has been a response error. AnkiConnect is running but did not respond properly.");
    },
    m(t, s) {
      C(t, e, s);
    },
    d(t) {
      t && N(e);
    }
  };
}
function dt(l) {
  let e, t, s;
  return {
    c() {
      e = q("There has been a connection error. Make sure that Anki is open, and that "), t = _("a"), t.textContent = "AnkiConnect", s = q(" is installed & running."), d(t, "class", "text-blue-400 underline svelte-mdhxpg"), d(t, "href", "https://ankiweb.net/shared/info/2055492159"), d(t, "target", "_blank");
    },
    m(n, o) {
      C(n, e, o), C(n, t, o), C(n, s, o);
    },
    d(n) {
      n && N(e), n && N(t), n && N(s);
    }
  };
}
function Be(l) {
  let e, t, s, n;
  return {
    c() {
      e = _("div"), t = q("retrying in "), s = q(
        /*secsUntilRetry*/
        l[16]
      ), n = q(" second(s) . . ."), d(e, "class", "block text-[0.5rem] text-zinc-400 svelte-mdhxpg");
    },
    m(o, i) {
      C(o, e, i), g(e, t), g(e, s), g(e, n);
    },
    p(o, i) {
      i[0] & /*secsUntilRetry*/
      65536 && ge(
        s,
        /*secsUntilRetry*/
        o[16]
      );
    },
    d(o) {
      o && N(e);
    }
  };
}
function Xe(l) {
  let e, t, s, n, o, i, a, f;
  return {
    c() {
      e = _("div"), t = _("span"), t.textContent = `${ce}`, s = D(), n = _("span"), n.textContent = " → ", o = D(), i = _("span"), d(t, "class", "replaceable svelte-mdhxpg"), d(n, "class", "svelte-mdhxpg"), d(i, "contenteditable", ""), d(i, "class", "break-all text-zinc-300 rounded hover:bg-zinc-500/20 border-transparent hover:border-zinc-400 outline-none focus:border-blue-400 focus:bg-zinc-500/20 transition-colors duration-100 border px-1 svelte-mdhxpg"), ne(i, "min-width", "10px"), /*contentToSave*/
      l[0] === void 0 && ke(() => (
        /*span2_input_handler*/
        l[27].call(i)
      )), d(e, "class", "text-xs text-zinc-400 mb-3 mx-auto flex items-center svelte-mdhxpg");
    },
    m(u, r) {
      C(u, e, r), g(e, t), g(e, s), g(e, n), g(e, o), g(e, i), /*contentToSave*/
      l[0] !== void 0 && (i.innerHTML = /*contentToSave*/
      l[0]), a || (f = [
        Z(
          i,
          "input",
          /*span2_input_handler*/
          l[27]
        ),
        Z(
          i,
          "input",
          /*input_handler*/
          l[28]
        )
      ], a = !0);
    },
    p(u, r) {
      r[0] & /*contentToSave*/
      1 && /*contentToSave*/
      u[0] !== i.innerHTML && (i.innerHTML = /*contentToSave*/
      u[0]);
    },
    d(u) {
      u && N(e), a = !1, ze(f);
    }
  };
}
function Ye(l) {
  let e, t = (
    /*deckName*/
    l[51] + ""
  ), s, n, o;
  return {
    c() {
      e = _("option"), s = q(t), e.__value = n = /*deckName*/
      l[51], e.value = e.__value, d(e, "class", "bg-zinc-800 svelte-mdhxpg"), e.selected = o = /*deckName*/
      l[51] == /*selectedDeck*/
      l[6] || null;
    },
    m(i, a) {
      C(i, e, a), g(e, s);
    },
    p(i, a) {
      a[0] & /*cardDecks*/
      512 && t !== (t = /*deckName*/
      i[51] + "") && ge(s, t), a[0] & /*cardDecks*/
      512 && n !== (n = /*deckName*/
      i[51]) && (e.__value = n, e.value = e.__value), a[0] & /*cardDecks, selectedDeck*/
      576 && o !== (o = /*deckName*/
      i[51] == /*selectedDeck*/
      i[6] || null) && (e.selected = o);
    },
    d(i) {
      i && N(e);
    }
  };
}
function qe(l) {
  let e, t = (
    /*modelName*/
    l[48] + ""
  ), s, n, o;
  return {
    c() {
      e = _("option"), s = q(t), e.__value = n = /*modelName*/
      l[48], e.value = e.__value, d(e, "class", "bg-zinc-800 svelte-mdhxpg"), e.selected = o = /*modelName*/
      l[48] == /*selectedModel*/
      l[8] || null;
    },
    m(i, a) {
      C(i, e, a), g(e, s);
    },
    p(i, a) {
      a[0] & /*cardModels*/
      1024 && t !== (t = /*modelName*/
      i[48] + "") && ge(s, t), a[0] & /*cardModels*/
      1024 && n !== (n = /*modelName*/
      i[48]) && (e.__value = n, e.value = e.__value), a[0] & /*cardModels, selectedModel*/
      1280 && o !== (o = /*modelName*/
      i[48] == /*selectedModel*/
      i[8] || null) && (e.selected = o);
    },
    d(i) {
      i && N(e);
    }
  };
}
function We(l) {
  let e;
  return {
    c() {
      e = q("This field will stay saved");
    },
    m(t, s) {
      C(t, e, s);
    },
    d(t) {
      t && N(e);
    }
  };
}
function Ge(l) {
  let e, t, s = (
    /*fieldTitle*/
    l[44] + ""
  ), n, o, i, a, f, u, r, h, p, H, M, S, k, F, X, T, w = (
    /*fieldDetails*/
    l[45].shouldSave && We()
  );
  function K() {
    l[31].call(
      r,
      /*each_value*/
      l[46],
      /*each_index*/
      l[47]
    );
  }
  function A() {
    l[32].call(
      M,
      /*each_value*/
      l[46],
      /*each_index*/
      l[47]
    );
  }
  return {
    c() {
      e = _("div"), t = _("label"), n = q(s), i = D(), a = _("small"), w && w.c(), f = D(), u = _("div"), r = _("textarea"), H = D(), M = _("div"), d(t, "for", o = "field-" + /*fieldTitle*/
      l[44]), d(t, "class", "mr-2 svelte-mdhxpg"), d(a, "class", "text-[0.6rem] text-zinc-400 svelte-mdhxpg"), d(e, "class", "flex align-middle mb-0.5 items-center svelte-mdhxpg"), d(r, "rows", "1"), d(r, "id", h = "field-" + /*fieldTitle*/
      l[44]), d(r, "data-fieldname", p = /*fieldTitle*/
      l[44]), d(r, "class", "peer bg-transparent w-full overflow-hidden resize-none break-all relative top-0 left-0 webkit-text-transparent px-1 border border-transparent appearance-none outline-none rounded-[0.3rem] svelte-mdhxpg"), d(M, "id", S = "field-display-" + /*fieldTitle*/
      l[44]), d(M, "contenteditable", "true"), d(M, "class", "absolute size-inherit break-all top-0 left-0 bg-zinc-500/20 pointer-events-none overflow-clip px-1 border border-transparent hyphens-auto peer-hover:border-zinc-400 border-zinc-600 rounded-[0.3rem] peer-focus:border-blue-400 transition-colors duration-100 svelte-mdhxpg"), /*fieldDetails*/
      l[45].displayHTML === void 0 && ke(A), d(u, "class", "relative w-full rounded mb-3 svelte-mdhxpg"), d(u, "data-fieldname", k = /*fieldTitle*/
      l[44]), d(u, "id", F = /*fieldTitle*/
      l[44]);
    },
    m(y, x) {
      C(y, e, x), g(e, t), g(t, n), g(e, i), g(e, a), w && w.m(a, null), C(y, f, x), C(y, u, x), g(u, r), xe(
        r,
        /*fieldDetails*/
        l[45].value
      ), g(u, H), g(u, M), /*fieldDetails*/
      l[45].displayHTML !== void 0 && (M.innerHTML = /*fieldDetails*/
      l[45].displayHTML), X || (T = [
        Z(
          r,
          "input",
          /*handleFieldInput*/
          l[22]
        ),
        Z(r, "input", K),
        Z(M, "input", A)
      ], X = !0);
    },
    p(y, x) {
      l = y, x[0] & /*cardModelFieldsData*/
      2048 && s !== (s = /*fieldTitle*/
      l[44] + "") && ge(n, s), x[0] & /*cardModelFieldsData*/
      2048 && o !== (o = "field-" + /*fieldTitle*/
      l[44]) && d(t, "for", o), /*fieldDetails*/
      l[45].shouldSave ? w || (w = We(), w.c(), w.m(a, null)) : w && (w.d(1), w = null), x[0] & /*cardModelFieldsData*/
      2048 && h !== (h = "field-" + /*fieldTitle*/
      l[44]) && d(r, "id", h), x[0] & /*cardModelFieldsData*/
      2048 && p !== (p = /*fieldTitle*/
      l[44]) && d(r, "data-fieldname", p), x[0] & /*cardModelFieldsData*/
      2048 && xe(
        r,
        /*fieldDetails*/
        l[45].value
      ), x[0] & /*cardModelFieldsData*/
      2048 && S !== (S = "field-display-" + /*fieldTitle*/
      l[44]) && d(M, "id", S), x[0] & /*cardModelFieldsData*/
      2048 && /*fieldDetails*/
      l[45].displayHTML !== M.innerHTML && (M.innerHTML = /*fieldDetails*/
      l[45].displayHTML), x[0] & /*cardModelFieldsData*/
      2048 && k !== (k = /*fieldTitle*/
      l[44]) && d(u, "data-fieldname", k), x[0] & /*cardModelFieldsData*/
      2048 && F !== (F = /*fieldTitle*/
      l[44]) && d(u, "id", F);
    },
    d(y) {
      y && N(e), w && w.d(), y && N(f), y && N(u), X = !1, ze(T);
    }
  };
}
function ft(l) {
  let e, t, s, n = (
    /*isPopupEnabled*/
    l[4] && Ue(l)
  );
  return {
    c() {
      e = _("dialog"), n && n.c(), e.open = !0, d(e, "class", t = /*options*/
      (l[1].shouldPopupBePinned.value ? "fixed" : "absolute") + " p-0 m-0 bg-transparent popup svelte-mdhxpg"), ne(
        e,
        "--UIScale",
        /*options*/
        l[1].UIScale.value
      );
    },
    m(o, i) {
      C(o, e, i), n && n.m(e, null), l[33](e), s = !0;
    },
    p(o, i) {
      /*isPopupEnabled*/
      o[4] ? n ? (n.p(o, i), i[0] & /*isPopupEnabled*/
      16 && W(n, 1)) : (n = Ue(o), n.c(), W(n, 1), n.m(e, null)) : n && (pe(), ee(n, 1, 1, () => {
        n = null;
      }), he()), (!s || i[0] & /*options*/
      2 && t !== (t = /*options*/
      (o[1].shouldPopupBePinned.value ? "fixed" : "absolute") + " p-0 m-0 bg-transparent popup svelte-mdhxpg")) && d(e, "class", t), (!s || i[0] & /*options*/
      2) && ne(
        e,
        "--UIScale",
        /*options*/
        o[1].UIScale.value
      );
    },
    i(o) {
      s || (W(n), s = !0);
    },
    o(o) {
      ee(n), s = !1;
    },
    d(o) {
      o && N(e), n && n.d(), l[33](null);
    }
  };
}
const Se = 300;
function mt(l, e) {
  chrome.storage.sync.set({
    selectedDeck: l,
    selectedModel: e
  });
}
function pt(l) {
  let e = Object.keys(l).reduce(
    (t, s) => (l[s].shouldSave && (t[s] = l[s].value), t),
    {}
  );
  Object.keys(e).length <= 0 ? chrome.storage.sync.remove("savedFields") : chrome.storage.sync.set({ savedFields: e }), console.log("saving", e);
}
function ht(l, e, t) {
  let { staticHoverNode: s } = e, { parentDocument: n = document } = e, { options: o } = e, { contentToSave: i = void 0 } = e, { initialX: a = 0 } = e, { initialY: f = 0 } = e, u, r = !1, h = !1, p, H, M, S, k, F = [], X = [], T = {}, w = "", K = !1, A = !1, y = !1;
  je(() => {
    t(2, u.style.left = a + "px", u), t(2, u.style.top = f + "px", u), t(4, h = !0), x(), n.addEventListener("mouseup", j);
  });
  async function x(m = !0) {
    try {
      const c = await nt(), L = await ot();
      if (c && L)
        t(9, F = c), t(10, X = L), t(13, K = !0), X.length > 1 && ie(X[0]), m ? t(12, w = "") : (t(12, w = "success"), setTimeout(
          () => {
            t(12, w = "");
          },
          5e3
        )), t(6, H = (await chrome.storage.sync.get("selectedDeck")).selectedDeck), t(8, S = (await chrome.storage.sync.get("selectedModel")).selectedModel), k = (await chrome.storage.sync.get("savedFields")).savedFields || {}, console.log("syncFied", k);
      else
        throw new Te();
    } catch (c) {
      oe(c, () => x(!1));
    }
  }
  let G = 0;
  function oe(m, c) {
    switch (console.error(we + " :", m), m.constructor) {
      case st:
        t(12, w = "connection");
        break;
      case Te:
        t(12, w = "response");
        break;
      default:
        t(12, w = "unknown");
        break;
    }
    if (c) {
      t(16, G = 5);
      let L = setInterval(
        () => {
          t(16, G -= 1), G == 0 && h && (c(), clearInterval(L));
        },
        1e3
      );
    }
  }
  async function ae(m) {
    const c = new FormData(m.target), L = Object.keys(T).reduce((Q, re) => (Q[re] = T[re].value, Q), {}), Y = Object.keys(L).reduce((Q, re) => (Q[re] = L[re].replaceAll("$replace$", i), Q), {});
    t(13, K = !1);
    let fe;
    try {
      fe = await rt(c.get("deckName"), c.get("modelName"), Y);
    } catch {
      t(12, w = "response"), setTimeout(
        () => {
          t(12, w = "");
        },
        5e3
      );
    }
    fe ? (console.log("callback:", fe), t(15, y = !0), setTimeout(
      () => {
        t(15, y = !1);
      },
      5e3
    ), mt(c.get("deckName"), c.get("modelName")), console.log("fieldData", T), pt(T)) : oe(new Te()), t(13, K = !0);
  }
  let te, ue;
  function V(m) {
    const c = u.getBoundingClientRect();
    te = -m.clientX + c.left, ue = -m.clientY + c.top, n.addEventListener("mousemove", B), n.addEventListener("mouseup", v), t(3, r = !0), t(14, A = !1), t(15, y = !1);
  }
  function v(m) {
    t(3, r = !1), n.removeEventListener("mousemove", B), n.removeEventListener("mouseup", v);
  }
  function B(m) {
    m.preventDefault(), t(2, u.style.left = (o.shouldPopupBePinned.value ? m.clientX : m.pageX) + te + "px", u), t(2, u.style.top = (o.shouldPopupBePinned.value ? m.clientY : m.pageY) + ue + "px", u);
  }
  function j(m) {
    console.log("click", m), m.target.id != we + "-root" ? A ? O() : t(14, A = !0) : t(14, A = !1);
  }
  function O() {
    t(4, h = !1), n.removeEventListener("mouseup", j), setTimeout(
      () => {
        u.parentNode.removeChild(u);
      },
      Se
    );
  }
  async function P(m) {
    t(6, H = m.target.value);
  }
  async function se(m) {
    t(8, S = m.target.value), ie(m.target.value);
  }
  async function ie(m) {
    const c = await it(m);
    t(11, T = c.reduce(
      (L, Y) => k[Y] ? (L[Y] = {
        value: k[Y],
        shouldSave: !0,
        displayHTML: z(k[Y])
      }, L) : (L[Y] = {
        value: "",
        shouldSave: !1,
        displayHTML: ""
      }, L),
      {}
    ));
  }
  function z(m) {
    const c = ye(m), L = m.indexOf(ce);
    let Y;
    return L != -1 && (Y = c.replaceAll(ce, `<span class="replaceable">${ce}</span>`)), Y;
  }
  function I(m) {
    const c = m.target.dataset.fieldname, L = m.target.value, Y = ye(L);
    t(11, T[c].value = Y, T);
    const fe = Y.indexOf(ce);
    let Q;
    fe != -1 ? (Q = Y.replaceAll(ce, `<span class="replaceable">${ce}</span>`), t(11, T[c].shouldSave = !0, T)) : (Q = Y, t(11, T[c].shouldSave = !1, T)), m.target.nextElementSibling.innerHTML = Q, t(11, T[c].displayHTML = Q, T);
    const re = m.target.nextElementSibling.getBoundingClientRect();
    m.target.style.height = re.height / o.UIScale.value + "px", m.target.style.width = re.width / o.UIScale.value + "px";
  }
  function $() {
    i = this.innerHTML, t(0, i);
  }
  const R = (m) => {
    let c = m.target.innerHTML;
    c = ye(c);
  };
  function le(m) {
    de[m ? "unshift" : "push"](() => {
      M = m, t(7, M), t(9, F);
    });
  }
  function E(m) {
    de[m ? "unshift" : "push"](() => {
      p = m, t(5, p), t(10, X);
    });
  }
  function J(m, c) {
    m[c][1].value = this.value, t(11, T);
  }
  function U(m, c) {
    m[c][1].displayHTML = this.innerHTML, t(11, T);
  }
  function b(m) {
    de[m ? "unshift" : "push"](() => {
      u = m, t(2, u);
    });
  }
  return l.$$set = (m) => {
    "staticHoverNode" in m && t(23, s = m.staticHoverNode), "parentDocument" in m && t(24, n = m.parentDocument), "options" in m && t(1, o = m.options), "contentToSave" in m && t(0, i = m.contentToSave), "initialX" in m && t(25, a = m.initialX), "initialY" in m && t(26, f = m.initialY);
  }, [
    i,
    o,
    u,
    r,
    h,
    p,
    H,
    M,
    S,
    F,
    X,
    T,
    w,
    K,
    A,
    y,
    G,
    ae,
    V,
    v,
    P,
    se,
    I,
    s,
    n,
    a,
    f,
    $,
    R,
    le,
    E,
    J,
    U,
    b
  ];
}
class Qe extends Le {
  constructor(e) {
    super(), Ce(
      this,
      e,
      ht,
      ft,
      Ne,
      {
        staticHoverNode: 23,
        parentDocument: 24,
        options: 1,
        contentToSave: 0,
        initialX: 25,
        initialY: 26
      },
      null,
      [-1, -1]
    );
  }
}
function gt(l) {
  let e, t, s, n, o;
  return {
    c() {
      e = _("div"), t = _("img"), Me(t.src, s = chrome.runtime.getURL("contents/icons/anki.png")) || d(t, "src", s), d(t, "alt", "Save 2 Anki"), d(t, "class", "icon svelte-14zaszm"), d(e, "class", "panel svelte-14zaszm");
    },
    m(i, a) {
      C(i, e, a), g(e, t), l[7](e), n || (o = Z(
        e,
        "click",
        /*handleClickAnki*/
        l[1]
      ), n = !0);
    },
    p: me,
    i: me,
    o: me,
    d(i) {
      i && N(e), l[7](null), n = !1, o();
    }
  };
}
function vt(l, e, t) {
  let { staticHoverNode: s } = e, { parentDocument: n } = e, { selectionText: o } = e, { hideToolbar: i } = e, { options: a } = e, f;
  function u() {
    const p = f.getBoundingClientRect();
    new Qe({
      target: s,
      props: {
        parentDocument: n,
        staticHoverNode: s,
        initialX: p.left + (a.shouldPopupBePinned.value ? 0 : document.documentElement.scrollLeft || document.body.scrollLeft),
        initialY: p.top + (a.shouldPopupBePinned.value ? 0 : document.documentElement.scrollTop || document.body.scrollTop),
        contentToSave: o,
        options: a
      }
    });
  }
  function r() {
    u(), i();
  }
  function h(p) {
    de[p ? "unshift" : "push"](() => {
      f = p, t(0, f);
    });
  }
  return l.$$set = (p) => {
    "staticHoverNode" in p && t(2, s = p.staticHoverNode), "parentDocument" in p && t(3, n = p.parentDocument), "selectionText" in p && t(4, o = p.selectionText), "hideToolbar" in p && t(5, i = p.hideToolbar), "options" in p && t(6, a = p.options);
  }, [
    f,
    r,
    s,
    n,
    o,
    i,
    a,
    h
  ];
}
class _t extends Le {
  constructor(e) {
    super(), Ce(this, e, vt, gt, Ne, {
      staticHoverNode: 2,
      parentDocument: 3,
      selectionText: 4,
      hideToolbar: 5,
      options: 6
    });
  }
}
function Ke(l, e, t) {
  const s = l.slice();
  return s[30] = e[t], s;
}
function bt(l) {
  let e, t, s, n, o, i, a = (
    /*entry*/
    l[30].wordForGender + ""
  ), f, u, r;
  return {
    c() {
      e = _("div"), t = _("img"), o = D(), i = _("div"), f = q(a), u = D(), Me(t.src, s = /*entry*/
      l[30].flagURL) || d(t, "src", s), d(t, "class", "block mr-1 rounded-[3px] svelte-wlg48u"), d(t, "alt", n = /*entry*/
      l[30].countryCode + " flag"), d(i, "class", "opacity-90 svelte-wlg48u"), d(e, "class", r = "blurry-bg " + /*entry*/
      l[30].gender + "-entry flex pointer-events-none px-1 w-full items-center text-center text-sm font-bold svelte-wlg48u");
    },
    m(h, p) {
      C(h, e, p), g(e, t), g(e, o), g(e, i), g(i, f), g(e, u);
    },
    p(h, p) {
      p[0] & /*hoverContent*/
      32 && !Me(t.src, s = /*entry*/
      h[30].flagURL) && d(t, "src", s), p[0] & /*hoverContent*/
      32 && n !== (n = /*entry*/
      h[30].countryCode + " flag") && d(t, "alt", n), p[0] & /*hoverContent*/
      32 && a !== (a = /*entry*/
      h[30].wordForGender + "") && ge(f, a), p[0] & /*hoverContent*/
      32 && r !== (r = "blurry-bg " + /*entry*/
      h[30].gender + "-entry flex pointer-events-none px-1 w-full items-center text-center text-sm font-bold svelte-wlg48u") && d(e, "class", r);
    },
    i: me,
    o: me,
    d(h) {
      h && N(e);
    }
  };
}
function wt(l) {
  let e, t, s;
  const n = [
    /*entry*/
    l[30].props
  ];
  var o = (
    /*entry*/
    l[30].component
  );
  function i(a) {
    let f = {};
    for (let u = 0; u < n.length; u += 1)
      f = tt(f, n[u]);
    return { props: f };
  }
  return o && (e = Ee(o, i())), {
    c() {
      e && De(e.$$.fragment), t = Je();
    },
    m(a, f) {
      e && He(e, a, f), C(a, t, f), s = !0;
    },
    p(a, f) {
      const u = f[0] & /*hoverContent*/
      32 ? $e(n, [et(
        /*entry*/
        a[30].props
      )]) : {};
      if (f[0] & /*hoverContent*/
      32 && o !== (o = /*entry*/
      a[30].component)) {
        if (e) {
          pe();
          const r = e;
          ee(r.$$.fragment, 1, 0, () => {
            Ie(r, 1);
          }), he();
        }
        o ? (e = Ee(o, i()), De(e.$$.fragment), W(e.$$.fragment, 1), He(e, t.parentNode, t)) : e = null;
      } else
        o && e.$set(u);
    },
    i(a) {
      s || (e && W(e.$$.fragment, a), s = !0);
    },
    o(a) {
      e && ee(e.$$.fragment, a), s = !1;
    },
    d(a) {
      a && N(t), e && Ie(e, a);
    }
  };
}
function Ve(l) {
  let e, t, s, n;
  const o = [wt, bt], i = [];
  function a(f, u) {
    return (
      /*entry*/
      f[30].isSvelteComponent ? 0 : 1
    );
  }
  return e = a(l), t = i[e] = o[e](l), {
    c() {
      t.c(), s = Je();
    },
    m(f, u) {
      i[e].m(f, u), C(f, s, u), n = !0;
    },
    p(f, u) {
      let r = e;
      e = a(f), e === r ? i[e].p(f, u) : (pe(), ee(i[r], 1, 1, () => {
        i[r] = null;
      }), he(), t = i[e], t ? t.p(f, u) : (t = i[e] = o[e](f), t.c()), W(t, 1), t.m(s.parentNode, s));
    },
    i(f) {
      n || (W(t), n = !0);
    },
    o(f) {
      ee(t), n = !1;
    },
    d(f) {
      i[e].d(f), f && N(s);
    }
  };
}
function kt(l) {
  let e, t, s, n, o, i, a = (
    /*hoverContent*/
    l[5]
  ), f = [];
  for (let r = 0; r < a.length; r += 1)
    f[r] = Ve(Ke(l, a, r));
  const u = (r) => ee(f[r], 1, 1, () => {
    f[r] = null;
  });
  return {
    c() {
      e = _("div"), t = _("div");
      for (let r = 0; r < f.length; r += 1)
        f[r].c();
      n = D(), o = _("div"), d(t, "id", "hover-content"), d(t, "class", " svelte-wlg48u"), d(e, "id", "hover"), d(e, "class", s = "select-none absolute truncate text-white rounded z-[9999] " + /*options*/
      (l[4].useMotion.value ? "use-motion" : "") + " svelte-wlg48u"), ne(
        e,
        "--UIScale",
        /*options*/
        l[4].UIScale.value
      ), ne(
        e,
        "pointer-events",
        /*isMakingSelection*/
        l[2] ? "all" : "none"
      ), d(o, "id", "static-hover"), d(o, "class", "absolute left-0 top-0 z-[99999] svelte-wlg48u");
    },
    m(r, h) {
      C(r, e, h), g(e, t);
      for (let p = 0; p < f.length; p += 1)
        f[p] && f[p].m(t, null);
      l[9](t), l[10](e), C(r, n, h), C(r, o, h), l[11](o), i = !0;
    },
    p(r, h) {
      if (h[0] & /*hoverContent*/
      32) {
        a = /*hoverContent*/
        r[5];
        let p;
        for (p = 0; p < a.length; p += 1) {
          const H = Ke(r, a, p);
          f[p] ? (f[p].p(H, h), W(f[p], 1)) : (f[p] = Ve(H), f[p].c(), W(f[p], 1), f[p].m(t, null));
        }
        for (pe(), p = a.length; p < f.length; p += 1)
          u(p);
        he();
      }
      (!i || h[0] & /*options*/
      16 && s !== (s = "select-none absolute truncate text-white rounded z-[9999] " + /*options*/
      (r[4].useMotion.value ? "use-motion" : "") + " svelte-wlg48u")) && d(e, "class", s), (!i || h[0] & /*options*/
      16) && ne(
        e,
        "--UIScale",
        /*options*/
        r[4].UIScale.value
      ), (!i || h[0] & /*isMakingSelection*/
      4) && ne(
        e,
        "pointer-events",
        /*isMakingSelection*/
        r[2] ? "all" : "none"
      );
    },
    i(r) {
      if (!i) {
        for (let h = 0; h < a.length; h += 1)
          W(f[h]);
        i = !0;
      }
    },
    o(r) {
      f = f.filter(Boolean);
      for (let h = 0; h < f.length; h += 1)
        ee(f[h]);
      i = !1;
    },
    d(r) {
      r && N(e), ve(f, r), l[9](null), l[10](null), r && N(n), r && N(o), l[11](null);
    }
  };
}
function yt(l, e, t) {
  let { rootNode: s } = e, { shadowRootNode: n } = e, { parentDocument: o = document } = e, i = !1, a, f, u = 0, r = 0, h = 0, p = 0, H = !1, M, S, k = Re;
  chrome.storage.sync.get("options").then((v) => {
    t(4, k = v.options || Re);
  });
  let F = [];
  je(() => {
    T();
  });
  function X() {
    t(0, a.style.left = u + "px", a), t(0, a.style.top = r + "px", a), window.requestAnimationFrame(X);
  }
  function T() {
    lt(), chrome.runtime.sendMessage({ type: "isExtensionOn" }, (v) => {
      console.log(we, ": checking: isExtensionOn?", v.isExtensionOn), v.isExtensionOn && !i && w();
    }), setTimeout(
      () => {
        X();
      },
      50
    );
  }
  chrome.runtime.onMessage.addListener(function(v, B, j) {
    switch (v.type) {
      case "enableExtension":
        i || w();
        break;
      case "disableExtension":
        K();
        break;
      case "updateOptions":
        t(4, k = v.data);
        break;
    }
  });
  function w() {
    i = !0, o.addEventListener("mousemove", G), o.addEventListener("selectionchange", x), o.addEventListener("keydown", oe), o.body.appendChild(s);
  }
  function K() {
    i = !1, o.removeEventListener("mousemove", G), o.removeEventListener("selectionchange", x), o.removeEventListener("keydown", oe);
    let v = o.getElementById(`${we}-root`);
    v && v.remove();
  }
  function A(v) {
    t(5, F = v), t(0, a.style.opacity = 1, a);
  }
  function y() {
    H || (M = "", t(0, a.style.opacity = 0, a));
  }
  function x(v) {
    let B = o.getSelection();
    if (B.isCollapsed)
      t(2, H = !1), y();
    else {
      let j = B.getRangeAt(0), O = B.getRangeAt(0).toString().trim(), P = j.getBoundingClientRect();
      t(2, H = !0), u = P.x + P.width / 2 - a.offsetWidth / 2, r = P.y + o.documentElement.scrollTop - (a.offsetHeight + k.distanceToMouse.value) * k.UIScale.value, A([
        {
          isSvelteComponent: !0,
          component: _t,
          props: {
            staticHoverNode: S,
            parentDocument: o,
            selectionText: O,
            hideToolbar: () => {
              t(2, H = !1), y();
            },
            options: k
          }
        }
      ]);
    }
  }
  function G(v) {
    if (h = v.pageX, p = v.pageY, !a || H)
      return;
    const B = o.caretRangeFromPoint(v.clientX, v.clientY);
    if (!B)
      return;
    const O = B.startContainer.nodeValue;
    if (!O)
      y();
    else {
      const P = B.startOffset, se = O.slice(0, P), ie = O.slice(P);
      if (se && ie) {
        const z = se.search(/[^\p{L}\p{M}0-9-](?![\s\S]*[^\p{L}\p{M}0-9-])/u), I = ie.search(/[^\p{L}\p{M}0-9-]/u), $ = z === -1 ? 0 : z + 1, R = I === -1 ? O.length : P + I, E = O.slice($, R).toLowerCase();
        if (E !== M) {
          if (!E)
            return;
          M = E, chrome.runtime.sendMessage({ word: E, type: "getGender" }, (J) => {
            J.data.length > 0 ? A(J.data) : y();
          });
        }
      }
    }
    ae(v);
  }
  function oe(v) {
    v.stopImmediatePropagation(), document.activeElement.tagName !== "INPUT" && (v.key === "a" || v.key === "A") && v.altKey && !v.metaKey && !v.shiftKey && new Qe({
      target: S,
      props: {
        parentDocument: o,
        staticHoverNode: S,
        initialX: h - (k.shouldPopupBePinned.value ? document.documentElement.scrollLeft || document.body.scrollLeft : 0),
        initialY: p - (k.shouldPopupBePinned.value ? document.documentElement.scrollTop || document.body.scrollTop : 0),
        options: k,
        contentToSave: ""
      }
    });
  }
  function ae(v) {
    H || (u = Math.min(window.innerWidth - a.offsetWidth * k.UIScale.value - 10, v.pageX + k.distanceToMouse.value * k.UIScale.value), r = Math.max(v.pageY - a.offsetHeight - k.distanceToMouse.value * k.UIScale.value, 10));
  }
  console.log("LOADED OPTIONS", k);
  function te(v) {
    de[v ? "unshift" : "push"](() => {
      f = v, t(1, f);
    });
  }
  function ue(v) {
    de[v ? "unshift" : "push"](() => {
      a = v, t(0, a);
    });
  }
  function V(v) {
    de[v ? "unshift" : "push"](() => {
      S = v, t(3, S);
    });
  }
  return l.$$set = (v) => {
    "rootNode" in v && t(6, s = v.rootNode), "shadowRootNode" in v && t(7, n = v.shadowRootNode), "parentDocument" in v && t(8, o = v.parentDocument);
  }, [
    a,
    f,
    H,
    S,
    k,
    F,
    s,
    n,
    o,
    te,
    ue,
    V
  ];
}
class Lt extends Le {
  constructor(e) {
    super(), Ce(
      this,
      e,
      yt,
      kt,
      Ne,
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
  Lt as default
};
