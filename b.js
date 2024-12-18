(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver(r => {
    for (const s of r)
      if (s.type === "childList")
        for (const t of s.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && n(t)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function i(r) {
    const s = {};
    return r.integrity && (s.integrity = r.integrity), r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
  }

  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = i(r);
    fetch(r.href, s)
  }
})();

function G() {}

function Ft(l) {
  return l()
}

function dt() {
  return Object.create(null)
}

function ke(l) {
  l.forEach(Ft)
}

function ae(l) {
  return typeof l == "function"
}

function se(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function"
}

function ol(l) {
  return Object.keys(l).length === 0
}

function o(l, e) {
  l.appendChild(e)
}

function C(l, e, i) {
  l.insertBefore(e, i || null)
}

function O(l) {
  l.parentNode && l.parentNode.removeChild(l)
}

function ge(l, e) {
  for (let i = 0; i < l.length; i += 1) l[i] && l[i].d(e)
}

function m(l) {
  return document.createElement(l)
}

function q(l) {
  return document.createTextNode(l)
}

function H() {
  return q(" ")
}

function ye() {
  return q("")
}

function W(l, e, i, n) {
  return l.addEventListener(e, i, n), () => l.removeEventListener(e, i, n)
}

function d(l, e, i) {
  i == null ? l.removeAttribute(e) : l.getAttribute(e) !== i && l.setAttribute(e, i)
}

function al(l) {
  return Array.from(l.childNodes)
}

function Z(l, e) {
  e = "" + e, l.data !== e && (l.data = e)
}

function Y(l, e, i) {
  l.classList[i ? "add" : "remove"](e)
}
let ze;

function Ae(l) {
  ze = l
}

function ul() {
  if (!ze) throw new Error("Function called outside component initialization");
  return ze
}

function we(l) {
  ul().$$.after_update.push(l)
}
const Ce = [],
  $ = [];
let Ee = [];
const Je = [],
  dl = Promise.resolve();
let Fe = !1;

function ml() {
  Fe || (Fe = !0, dl.then(Yt))
}

function Ye(l) {
  Ee.push(l)
}

function le(l) {
  Je.push(l)
}
const Be = new Set;
let Oe = 0;

function Yt() {
  if (Oe !== 0) return;
  const l = ze;
  do {
    try {
      for (; Oe < Ce.length;) {
        const e = Ce[Oe];
        Oe++, Ae(e), _l(e.$$)
      }
    } catch (e) {
      throw Ce.length = 0, Oe = 0, e
    }
    for (Ae(null), Ce.length = 0, Oe = 0; $.length;) $.pop()();
    for (let e = 0; e < Ee.length; e += 1) {
      const i = Ee[e];
      Be.has(i) || (Be.add(i), i())
    }
    Ee.length = 0
  } while (Ce.length);
  for (; Je.length;) Je.pop()();
  Fe = !1, Be.clear(), Ae(l)
}

function _l(l) {
  if (l.fragment !== null) {
    l.update(), ke(l.before_update);
    const e = l.dirty;
    l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, e), l.after_update.forEach(Ye)
  }
}

function gl(l) {
  const e = [],
    i = [];
  Ee.forEach(n => l.indexOf(n) === -1 ? e.push(n) : i.push(n)), i.forEach(n => n()), Ee = e
}
const De = new Set;
let Se;

function be() {
  Se = {
    r: 0,
    c: [],
    p: Se
  }
}

function ve() {
  Se.r || ke(Se.c), Se = Se.p
}

function J(l, e) {
  l && l.i && (De.delete(l), l.i(e))
}

function X(l, e, i, n) {
  if (l && l.o) {
    if (De.has(l)) return;
    De.add(l), Se.c.push(() => {
      De.delete(l), n && (i && l.d(1), n())
    }), l.o(e)
  } else n && n()
}

function ne(l, e, i) {
  const n = l.$$.props[e];
  n !== void 0 && (l.$$.bound[n] = i, i(l.$$.ctx[n]))
}

function ue(l) {
  l && l.c()
}

function ie(l, e, i, n) {
  const {
    fragment: r,
    after_update: s
  } = l.$$;
  r && r.m(e, i), n || Ye(() => {
    const t = l.$$.on_mount.map(Ft).filter(ae);
    l.$$.on_destroy ? l.$$.on_destroy.push(...t) : ke(t), l.$$.on_mount = []
  }), s.forEach(Ye)
}

function re(l, e) {
  const i = l.$$;
  i.fragment !== null && (gl(i.after_update), ke(i.on_destroy), i.fragment && i.fragment.d(e), i.on_destroy = i.fragment = null, i.ctx = [])
}

function pl(l, e) {
  l.$$.dirty[0] === -1 && (Ce.push(l), ml(), l.$$.dirty.fill(0)), l.$$.dirty[e / 31 | 0] |= 1 << e % 31
}

function ce(l, e, i, n, r, s, t, c = [-1]) {
  const f = ze;
  Ae(l);
  const h = l.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: G,
    not_equal: r,
    bound: dt(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    callbacks: dt(),
    dirty: c,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  t && t(h.root);
  let x = !1;
  if (h.ctx = i ? i(l, e.props || {}, (T, p, ...g) => {
      const u = g.length ? g[0] : p;
      return h.ctx && r(h.ctx[T], h.ctx[T] = u) && (!h.skip_bound && h.bound[T] && h.bound[T](u), x && pl(l, T)), p
    }) : [], h.update(), x = !0, ke(h.before_update), h.fragment = n ? n(h.ctx) : !1, e.target) {
    if (e.hydrate) {
      const T = al(e.target);
      h.fragment && h.fragment.l(T), T.forEach(O)
    } else h.fragment && h.fragment.c();
    e.intro && J(l.$$.fragment), ie(l, e.target, e.anchor, e.customElement), Yt()
  }
  Ae(f)
}
class fe {
  $destroy() {
    re(this, 1), this.$destroy = G
  }
  $on(e, i) {
    if (!ae(i)) return G;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(i), () => {
      const r = n.indexOf(i);
      r !== -1 && n.splice(r, 1)
    }
  }
  $set(e) {
    this.$$set && !ol(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
  }
}

function mt(l) {
  let e, i, n, r, s, t;
  return {
    c() {
      e = m("p"), i = q(l[1]), n = H(), r = m("p"), s = q(l[2]), t = q("蝗�"), d(e, "id", "stopwatch"), d(e, "class", "text-center text-lg font-black w-32 p-1 m-2 nm-flat-gray-200 dark:nm-flat-gray-700 rounded"), d(r, "id", "trials_display"), d(r, "class", "text-center text-lg font-black w-32 p-1 m-2 nm-flat-gray-200 dark:nm-flat-gray-700 rounded")
    },
    m(c, f) {
      C(c, e, f), o(e, i), C(c, n, f), C(c, r, f), o(r, s), o(r, t)
    },
    p(c, f) {
      f & 2 && Z(i, c[1]), f & 4 && Z(s, c[2])
    },
    d(c) {
      c && O(e), c && O(n), c && O(r)
    }
  }
}

function hl(l) {
  let e, i, n, r, s, t, c, f, h, x = l[3] && mt(l);
  return {
    c() {
      e = m("div"), x && x.c(), i = H(), n = m("button"), n.innerHTML = '<svg class="m-auto fill-red-500 hover:fill-red-700" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"></path></svg>', r = H(), s = m("input"), t = H(), c = m("label"), c.innerHTML = '<svg class="m-auto fill-blue-500 hover:fill-blue-700" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"></path></svg>', d(n, "class", "text-center text-lg font-black w-32 p-2.5 m-2 nm-flat-gray-200 dark:nm-flat-gray-700 rounded"), d(s, "type", "radio"), d(s, "id", "shuffle"), d(s, "class", "hidden peer"), s.checked = l[0], d(c, "for", "shuffle"), d(c, "class", "inline-flex text-center text-lg font-black w-32 p-2.5 m-2 nm-flat-gray-200 dark:nm-flat-gray-700 rounded cursor-pointer peer-checked:nm-inset-gray-200 dark:peer-checked:nm-inset-gray-700 peer-checked:pointer-events-none"), d(e, "id", "display"), d(e, "class", "flex justify-evenly m-auto mb-2 svelte-1841o78")
    },
    m(T, p) {
      C(T, e, p), x && x.m(e, null), o(e, i), o(e, n), o(e, r), o(e, s), o(e, t), o(e, c), f || (h = [W(n, "click", function() {
        ae(l[5]) && l[5].apply(this, arguments)
      }), W(s, "click", function() {
        ae(l[4]) && l[4].apply(this, arguments)
      })], f = !0)
    },
    p(T, [p]) {
      l = T, l[3] ? x ? x.p(l, p) : (x = mt(l), x.c(), x.m(e, i)) : x && (x.d(1), x = null), p & 1 && (s.checked = l[0])
    },
    i: G,
    o: G,
    d(T) {
      T && O(e), x && x.d(), f = !1, ke(h)
    }
  }
}

function bl(l, e, i) {
  let {
    game: n,
    time: r,
    trials: s,
    display: t
  } = e, {
    shuffle: c,
    reset: f
  } = e;
  return l.$$set = h => {
    "game" in h && i(0, n = h.game), "time" in h && i(1, r = h.time), "trials" in h && i(2, s = h.trials), "display" in h && i(3, t = h.display), "shuffle" in h && i(4, c = h.shuffle), "reset" in h && i(5, f = h.reset)
  }, [n, r, s, t, c, f]
}
class vl extends fe {
  constructor(e) {
    super(), ce(this, e, bl, hl, se, {
      game: 0,
      time: 1,
      trials: 2,
      display: 3,
      shuffle: 4,
      reset: 5
    })
  }
}

function _t(l, e, i) {
  const n = l.slice();
  return n[9] = e[i], n[11] = i, n
}

function gt(l, e, i) {
  const n = l.slice();
  return n[9] = e[i], n[11] = i, n
}

function kl(l) {
  let e, i, n, r, s, t, c, f, h, x, T, p, g, u, y, F, U, D, j = l[6](l[2]) + "",
    b, A, K, I = l[3],
    z = [];
  for (let S = 0; S < I.length; S += 1) z[S] = pt(_t(l, I, S));
  return {
    c() {
      e = m("div"), i = m("div"), n = m("div"), r = m("p"), s = q(l[4]), t = q("x"), c = q(l[4]), f = q(" 莉頑律縺ｮ繝ｩ繝ｳ繧ｭ繝ｳ繧ｰ"), h = H(), x = m("p"), x.textContent = "(縺頑仂12譎ゅ↓繝ｪ繧ｻ繝�ヨ縺輔ｌ縺ｾ縺�)", T = H(), p = m("button"), p.textContent = "100菴阪∪縺ｧ縺ｮ繝ｩ繝ｳ繧ｭ繝ｳ繧ｰ繧定ｦ九ｋ", g = H(), u = m("div");
      for (let S = 0; S < z.length; S += 1) z[S].c();
      y = H(), F = m("div"), F.textContent = "閾ｪ蟾ｱ繝吶せ繝�", U = H(), D = m("div"), b = q(j), d(x, "class", "text-xs sm:leading-6"), d(n, "class", "sm:flex text-sm sm:text-base text-center font-semibold"), d(p, "class", "text-xs sm:text-base text-center font-black ml-4 p-0.5 nm-flat-gray-200 dark:nm-flat-gray-700 rounded mx-1 text-blue-700 dark:text-white"), d(i, "class", "flex justify-center p-1 mb-2 sm:mb-0.5"), d(u, "class", "flex justify-evenly text-sm md:text-base font-semibold"), d(e, "class", "m-auto w-12/12 p-1 mt-4 md:mt-8 nm-inset-gray-200 dark:nm-inset-gray-700 rounded")
    },
    m(S, L) {
      C(S, e, L), o(e, i), o(i, n), o(n, r), o(r, s), o(r, t), o(r, c), o(r, f), o(n, h), o(n, x), o(i, T), o(i, p), o(e, g), o(e, u);
      for (let P = 0; P < z.length; P += 1) z[P] && z[P].m(u, null);
      o(u, y), o(u, F), o(u, U), o(u, D), o(D, b), A || (K = W(p, "click", l[8]), A = !0)
    },
    p(S, L) {
      if (L & 16 && Z(s, S[4]), L & 16 && Z(c, S[4]), L & 104) {
        I = S[3];
        let P;
        for (P = 0; P < I.length; P += 1) {
          const M = _t(S, I, P);
          z[P] ? z[P].p(M, L) : (z[P] = pt(M), z[P].c(), z[P].m(u, y))
        }
        for (; P < z.length; P += 1) z[P].d(1);
        z.length = I.length
      }
      L & 4 && j !== (j = S[6](S[2]) + "") && Z(b, j)
    },
    d(S) {
      S && O(e), ge(z, S), A = !1, K()
    }
  }
}

function yl(l) {
  let e, i, n, r, s, t, c, f, h, x, T, p, g = l[6](l[2]) + "",
    u, y, F, U = l[3],
    D = [];
  for (let j = 0; j < U.length; j += 1) D[j] = ht(gt(l, U, j));
  return {
    c() {
      e = m("div"), i = m("div"), n = m("div"), r = m("div"), r.textContent = "繧ｯ繝ｪ繧｢��ｼ�", s = H(), t = m("button"), t.textContent = "100菴阪∪縺ｧ縺ｮ繝ｩ繝ｳ繧ｭ繝ｳ繧ｰ繧定ｦ九ｋ", c = H(), f = m("div");
      for (let j = 0; j < D.length; j += 1) D[j].c();
      h = H(), x = m("div"), x.textContent = "閾ｪ蟾ｱ繝吶せ繝�", T = H(), p = m("div"), u = q(g), d(r, "class", "text-xs sm:text-base font-semibold"), d(t, "class", "text-xs sm:text-base text-center font-black ml-4 p-0.5 nm-flat-gray-200 dark:nm-flat-gray-700 rounded mx-1 text-blue-700 dark:text-white"), d(n, "class", "flex justify-center p-1"), d(i, "class", "flex justify-evenly"), d(f, "class", "flex justify-evenly text-xs md:text-base font-semibold"), d(e, "class", "m-auto text-lg font-black w-12/12 p-1 mt-4 nm-flat-gray-200 dark:nm-flat-gray-700 rounded")
    },
    m(j, b) {
      C(j, e, b), o(e, i), o(i, n), o(n, r), o(n, s), o(n, t), o(e, c), o(e, f);
      for (let A = 0; A < D.length; A += 1) D[A] && D[A].m(f, null);
      o(f, h), o(f, x), o(f, T), o(f, p), o(p, u), y || (F = W(t, "click", l[7]), y = !0)
    },
    p(j, b) {
      if (b & 72) {
        U = j[3];
        let A;
        for (A = 0; A < U.length; A += 1) {
          const K = gt(j, U, A);
          D[A] ? D[A].p(K, b) : (D[A] = ht(K), D[A].c(), D[A].m(f, h))
        }
        for (; A < D.length; A += 1) D[A].d(1);
        D.length = U.length
      }
      b & 4 && g !== (g = j[6](j[2]) + "") && Z(u, g)
    },
    d(j) {
      j && O(e), ge(D, j), y = !1, F()
    }
  }
}

function pt(l) {
  let e, i = l[11] + 1 + "",
    n, r, s = l[6](l[9].time) + "",
    t, c;
  return {
    c() {
      e = m("div"), n = q(i), r = q("菴� "), t = q(s), c = H(), Y(e, "text-red-500", l[9].name === l[5])
    },
    m(f, h) {
      C(f, e, h), o(e, n), o(e, r), o(e, t), o(e, c)
    },
    p(f, h) {
      h & 8 && s !== (s = f[6](f[9].time) + "") && Z(t, s), h & 40 && Y(e, "text-red-500", f[9].name === f[5])
    },
    d(f) {
      f && O(e)
    }
  }
}

function ht(l) {
  let e, i = l[11] + 1 + "",
    n, r, s = l[6](l[9].time) + "",
    t;
  return {
    c() {
      e = m("div"), n = q(i), r = q("菴� "), t = q(s), d(e, "class", "")
    },
    m(c, f) {
      C(c, e, f), o(e, n), o(e, r), o(e, t)
    },
    p(c, f) {
      f & 8 && s !== (s = c[6](c[9].time) + "") && Z(t, s)
    },
    d(c) {
      c && O(e)
    }
  }
}

function wl(l) {
  let e;

  function i(s, t) {
    return s[1] ? yl : kl
  }
  let n = i(l),
    r = n(l);
  return {
    c() {
      r.c(), e = ye()
    },
    m(s, t) {
      r.m(s, t), C(s, e, t)
    },
    p(s, [t]) {
      n === (n = i(s)) && r ? r.p(s, t) : (r.d(1), r = n(s), r && (r.c(), r.m(e.parentNode, e)))
    },
    i: G,
    o: G,
    d(s) {
      r.d(s), s && O(e)
    }
  }
}

function Tl(l, e, i) {
  let {
    clear: n,
    bestTime: r,
    top3: s,
    cell: t,
    top100: c,
    id: f
  } = e;
  const h = p => {
      if (p === "--:--") return "--:--";
      p.indexOf("00:00:0") === 0 ? p = p.slice(7) : p.indexOf("00:00:") === 0 ? p = p.slice(6) : p.indexOf("00:0") === 0 ? p = p.slice(4) : p.indexOf("00:") === 0 ? p = p.slice(3) : p.indexOf("0") === 0 && (p = p.slice(1));
      const g = p.length,
        u = p.slice(0, g - 2),
        y = p.slice(-1);
      return p = u + "." + y, p
    },
    x = () => i(0, c = !0),
    T = () => i(0, c = !0);
  return l.$$set = p => {
    "clear" in p && i(1, n = p.clear), "bestTime" in p && i(2, r = p.bestTime), "top3" in p && i(3, s = p.top3), "cell" in p && i(4, t = p.cell), "top100" in p && i(0, c = p.top100), "id" in p && i(5, f = p.id)
  }, [c, n, r, s, t, f, h, x, T]
}
class Sl extends fe {
  constructor(e) {
    super(), ce(this, e, Tl, wl, se, {
      clear: 1,
      bestTime: 2,
      top3: 3,
      cell: 4,
      top100: 0,
      id: 5
    })
  }
}

function Ol(l) {
  let e, i, n, r, s, t, c, f, h, x, T, p, g, u, y, F, U, D, j, b, A;
  return {
    c() {
      e = m("div"), i = m("div"), n = m("label"), r = m("input"), s = H(), t = m("div"), c = H(), f = m("span"), f.textContent = "繧ｿ繧､繝�繝ｻ謫堺ｽ懷屓謨ｰ", h = H(), x = m("div"), x.innerHTML = '<p class="text-center text-sm">繧ｪ繝輔↓縺吶ｋ縺ｨ繧ｿ繧､繝�繝ｻ謫堺ｽ懷屓謨ｰ繧帝撼陦ｨ遉ｺ縺ｫ縺励∪縺吶�</p>', T = H(), p = m("div"), g = m("button"), g.textContent = "閾ｪ蟾ｱ繝吶せ繝亥炎髯､", u = H(), y = m("p"), F = q(l[3]), U = q("x"), D = q(l[3]), j = q("縺ｮ閾ｪ蟾ｱ繝吶せ繝郁ｨ倬鹸繧貞炎髯､縺励∪縺吶�"), d(r, "type", "checkbox"), r.__value = "", r.value = r.__value, d(r, "class", "sr-only peer"), d(t, "class", "w-11 h-6 nm-inset-gray-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:nm-inset-blue-600 after:nm-convex-white-xs"), d(f, "class", "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"), d(n, "class", "relative inline-flex items-center cursor-pointer"), d(i, "class", "flex justify-evenly p-0.5"), d(g, "class", "text-center block m-auto text-xs font-medium p-1 nm-flat-gray-200 dark:nm-flat-gray-700 rounded cursor-pointer hover:text-blue-700"), d(y, "class", "text-center text-sm mt-1"), d(p, "class", "mt-2"), d(e, "class", "mt-2"), Y(e, "pointer-events-none", l[1])
    },
    m(K, I) {
      C(K, e, I), o(e, i), o(i, n), o(n, r), r.checked = l[0], o(n, s), o(n, t), o(n, c), o(n, f), o(e, h), o(e, x), o(e, T), o(e, p), o(p, g), o(p, u), o(p, y), o(y, F), o(y, U), o(y, D), o(y, j), b || (A = [W(r, "change", l[4]), W(g, "click", function() {
        ae(l[2]) && l[2].apply(this, arguments)
      })], b = !0)
    },
    p(K, [I]) {
      l = K, I & 1 && (r.checked = l[0]), I & 8 && Z(F, l[3]), I & 8 && Z(D, l[3]), I & 2 && Y(e, "pointer-events-none", l[1])
    },
    i: G,
    o: G,
    d(K) {
      K && O(e), b = !1, ke(A)
    }
  }
}

function Cl(l, e, i) {
  let {
    display: n,
    game: r,
    storageClear: s,
    cell: t
  } = e;

  function c() {
    n = this.checked, i(0, n)
  }
  return l.$$set = f => {
    "display" in f && i(0, n = f.display), "game" in f && i(1, r = f.game), "storageClear" in f && i(2, s = f.storageClear), "cell" in f && i(3, t = f.cell)
  }, [n, r, s, t, c]
}
class El extends fe {
  constructor(e) {
    super(), ce(this, e, Cl, Ol, se, {
      display: 0,
      game: 1,
      storageClear: 2,
      cell: 3
    })
  }
}

function xl(l) {
  let e, i, n, r, s, t, c, f, h, x, T, p, g, u, y, F, U, D, j, b, A, K, I, z, S, L;
  return {
    c() {
      e = m("div"), i = m("div"), n = m("button"), n.textContent = "3x3", r = H(), s = m("div"), t = m("button"), t.textContent = "4x4", c = H(), f = m("div"), h = m("button"), h.textContent = "5x5", x = H(), T = m("div"), p = m("button"), p.textContent = "6x6", g = H(), u = m("div"), y = m("button"), y.textContent = "7x7", F = H(), U = m("div"), D = m("button"), D.textContent = "8x8", j = H(), b = m("div"), A = m("button"), A.textContent = "9x9", K = H(), I = m("div"), z = m("button"), z.textContent = "10x10", n.value = "3", d(n, "class", "text-center text-lg font-black w-16 lg:w-15 p-1 m-2 nm-flat-gray-200 dark:nm-flat-gray-700 rounded cursor-pointer"), Y(n, "text-blue-700", l[1] === 3), t.value = "4", d(t, "class", "text-center text-lg font-black w-16 lg:w-15 p-1 m-2 nm-flat-gray-200 dark:nm-flat-gray-700 rounded cursor-pointer"), Y(t, "text-blue-700", l[1] === 4), h.value = "5", d(h, "class", "text-center text-lg font-black w-16 lg:w-15 p-1 m-2 nm-flat-gray-200 dark:nm-flat-gray-700 rounded cursor-pointer"), Y(h, "text-blue-700", l[1] === 5), p.value = "6", d(p, "class", "text-center text-lg font-black w-16 lg:w-15 p-1 m-2 nm-flat-gray-200 dark:nm-flat-gray-700 rounded cursor-pointer"), Y(p, "text-blue-700", l[1] === 6), y.value = "7", d(y, "class", "text-center text-lg font-black w-16 lg:w-15 p-1 m-2 nm-flat-gray-200 dark:nm-flat-gray-700 rounded cursor-pointer"), Y(y, "text-blue-700", l[1] === 7), D.value = "8", d(D, "class", "text-center text-lg font-black w-16 lg:w-15 p-1 m-2 nm-flat-gray-200 dark:nm-flat-gray-700 rounded cursor-pointer"), Y(D, "text-blue-700", l[1] === 8), A.value = "9", d(A, "class", "text-center text-lg font-black w-16 lg:w-15 p-1 m-2 nm-flat-gray-200 dark:nm-flat-gray-700 rounded cursor-pointer"), Y(A, "text-blue-700", l[1] === 9), z.value = "10", d(z, "class", "text-center text-lg font-black w-16 lg:w-15 p-1 m-2 nm-flat-gray-200 dark:nm-flat-gray-700 rounded cursor-pointer"), Y(z, "text-blue-700", l[1] === 10), d(e, "id", "selectBtns"), d(e, "class", "flex justify-center flex-wrap p-1")
    },
    m(P, M) {
      C(P, e, M), o(e, i), o(i, n), o(e, r), o(e, s), o(s, t), o(e, c), o(e, f), o(f, h), o(e, x), o(e, T), o(T, p), o(e, g), o(e, u), o(u, y), o(e, F), o(e, U), o(U, D), o(e, j), o(e, b), o(b, A), o(e, K), o(e, I), o(I, z), S || (L = [W(n, "click", function() {
        ae(l[0]) && l[0].apply(this, arguments)
      }), W(t, "click", function() {
        ae(l[0]) && l[0].apply(this, arguments)
      }), W(h, "click", function() {
        ae(l[0]) && l[0].apply(this, arguments)
      }), W(p, "click", function() {
        ae(l[0]) && l[0].apply(this, arguments)
      }), W(y, "click", function() {
        ae(l[0]) && l[0].apply(this, arguments)
      }), W(D, "click", function() {
        ae(l[0]) && l[0].apply(this, arguments)
      }), W(A, "click", function() {
        ae(l[0]) && l[0].apply(this, arguments)
      }), W(z, "click", function() {
        ae(l[0]) && l[0].apply(this, arguments)
      })], S = !0)
    },
    p(P, [M]) {
      l = P, M & 2 && Y(n, "text-blue-700", l[1] === 3), M & 2 && Y(t, "text-blue-700", l[1] === 4), M & 2 && Y(h, "text-blue-700", l[1] === 5), M & 2 && Y(p, "text-blue-700", l[1] === 6), M & 2 && Y(y, "text-blue-700", l[1] === 7), M & 2 && Y(D, "text-blue-700", l[1] === 8), M & 2 && Y(A, "text-blue-700", l[1] === 9), M & 2 && Y(z, "text-blue-700", l[1] === 10)
    },
    i: G,
    o: G,
    d(P) {
      P && O(e), S = !1, ke(L)
    }
  }
}

function Ll(l, e, i) {
  let {
    onChange: n,
    cell: r
  } = e;
  return l.$$set = s => {
    "onChange" in s && i(0, n = s.onChange), "cell" in s && i(1, r = s.cell)
  }, [n, r]
}
class Nl extends fe {
  constructor(e) {
    super(), ce(this, e, Ll, xl, se, {
      onChange: 0,
      cell: 1
    })
  }
}

function bt(l, e, i) {
  const n = l.slice();
  return n[11] = e[i], n[13] = i, n
}

function Pl(l) {
  let e, i, n, r;
  return {
    c() {
      e = q(l[1]), i = q("x"), n = q(l[1]), r = q(" 譏ｨ譌･縺ｮTOP100繝ｩ繝ｳ繧ｭ繝ｳ繧ｰ")
    },
    m(s, t) {
      C(s, e, t), C(s, i, t), C(s, n, t), C(s, r, t)
    },
    p(s, t) {
      t & 2 && Z(e, s[1]), t & 2 && Z(n, s[1])
    },
    d(s) {
      s && O(e), s && O(i), s && O(n), s && O(r)
    }
  }
}

function jl(l) {
  let e, i, n, r;
  return {
    c() {
      e = q(l[1]), i = q("x"), n = q(l[1]), r = q(" 莉頑律縺ｮTOP100繝ｩ繝ｳ繧ｭ繝ｳ繧ｰ")
    },
    m(s, t) {
      C(s, e, t), C(s, i, t), C(s, n, t), C(s, r, t)
    },
    p(s, t) {
      t & 2 && Z(e, s[1]), t & 2 && Z(n, s[1])
    },
    d(s) {
      s && O(e), s && O(i), s && O(n), s && O(r)
    }
  }
}

function Al(l) {
  let e;
  return {
    c() {
      e = q("莉頑律縺ｮTOP100繧定ｦ九ｋ")
    },
    m(i, n) {
      C(i, e, n)
    },
    d(i) {
      i && O(e)
    }
  }
}

function zl(l) {
  let e;
  return {
    c() {
      e = q("譏ｨ譌･縺ｮTOP100繧定ｦ九ｋ")
    },
    m(i, n) {
      C(i, e, n)
    },
    d(i) {
      i && O(e)
    }
  }
}

function vt(l) {
  let e, i, n = l[13] + 1 + "",
    r, s, t, c, f = l[6](l[11].time) + "",
    h, x, T, p = l[11].trials + "",
    g, u;
  return {
    c() {
      e = m("div"), i = m("span"), r = q(n), s = q("菴�"), t = H(), c = m("span"), h = q(f), x = H(), T = m("span"), g = q(p), u = H(), d(i, "class", "block"), d(c, "class", "block"), d(T, "class", "block"), d(e, "class", "w-1/3 sm:w-1/4 rounded flex justify-evenly font-semibold text-xs sm:text-sm p-0.5"), Y(e, "text-red-500", l[11].name === l[2])
    },
    m(y, F) {
      C(y, e, F), o(e, i), o(i, r), o(i, s), o(e, t), o(e, c), o(c, h), o(e, x), o(e, T), o(T, g), o(e, u)
    },
    p(y, F) {
      F & 16 && f !== (f = y[6](y[11].time) + "") && Z(h, f), F & 16 && p !== (p = y[11].trials + "") && Z(g, p), F & 20 && Y(e, "text-red-500", y[11].name === y[2])
    },
    d(y) {
      y && O(e)
    }
  }
}

function Ml(l) {
  let e, i, n, r, s, t, c, f, h, x, T, p, g, u, y, F, U;

  function D(L, P) {
    return L[3] ? jl : Pl
  }
  let j = D(l),
    b = j(l);

  function A(L, P) {
    return L[3] ? zl : Al
  }
  let K = A(l),
    I = K(l),
    z = l[4],
    S = [];
  for (let L = 0; L < z.length; L += 1) S[L] = vt(bt(l, z, L));
  return {
    c() {
      e = m("div"), i = m("div"), n = m("div"), r = m("p"), b.c(), s = H(), t = m("p"), t.textContent = "(縺頑仂12譎ゅ↓繝ｪ繧ｻ繝�ヨ縺輔ｌ縺ｾ縺�)", c = H(), f = m("div"), h = m("button"), I.c(), x = H(), T = m("button"), T.textContent = "髢峨§繧�", p = H(), g = m("div"), g.innerHTML = `<p class="text-sm p-1">繝ｩ繝ｳ繧ｭ繝ｳ繧ｰ縺ｯ繧ｿ繧､繝�鬆�↓荳ｦ繧薙〒縺�∪縺吶ゅち繧､繝�縺悟酔縺伜�ｴ蜷医�謫堺ｽ懷屓謨ｰ縺悟ｰ代↑縺�⊇縺�′荳贋ｽ阪→縺ｪ繧翫∪縺吶�
      <span class="text-red-500 font-black">襍､濶ｲ縺ｧ陦ｨ遉ｺ縺輔ｌ縺ｦ縺�ｋ繧ゅ�縺ｯ縺ゅ↑縺溘�謌千ｸｾ縺ｧ縺吶�</span></p>`, u = H(), y = m("div");
      for (let L = 0; L < S.length; L += 1) S[L].c();
      d(t, "class", "text-xs"), d(n, "class", "text-sm sm:text-base text-center font-semibold"), d(h, "class", "mb-2 sm:mb-0 text-center font-black w-40 sm:w-44 p-0.5 nm-flat-gray-200 dark:nm-flat-gray-700 rounded mx-1 text-blue-700 dark:text-white"), d(T, "class", "text-center font-black w-40 sm:w-44 p-0.5 nm-flat-gray-200 dark:nm-flat-gray-700 rounded mx-1 text-blue-700 dark:text-white"), d(f, "class", "sm:flex w-44 sm:w-auto"), d(i, "class", "flex justify-between mb-4 sm:mb-8"), d(g, "class", "my-4"), d(y, "class", "flex flex-wrap justify-between"), d(e, "id", "board"), d(e, "class", "nm-flat-gray-200 dark:nm-flat-gray-700 p-1.5 sm:p-3 rounded svelte-b2fvz8")
    },
    m(L, P) {
      C(L, e, P), o(e, i), o(i, n), o(n, r), b.m(r, null), o(n, s), o(n, t), o(i, c), o(i, f), o(f, h), I.m(h, null), o(f, x), o(f, T), o(e, p), o(e, g), o(e, u), o(e, y);
      for (let M = 0; M < S.length; M += 1) S[M] && S[M].m(y, null);
      F || (U = [W(h, "click", l[5]), W(T, "click", l[7])], F = !0)
    },
    p(L, [P]) {
      if (j === (j = D(L)) && b ? b.p(L, P) : (b.d(1), b = j(L), b && (b.c(), b.m(r, null))), K !== (K = A(L)) && (I.d(1), I = K(L), I && (I.c(), I.m(h, null))), P & 84) {
        z = L[4];
        let M;
        for (M = 0; M < z.length; M += 1) {
          const v = bt(L, z, M);
          S[M] ? S[M].p(v, P) : (S[M] = vt(v), S[M].c(), S[M].m(y, null))
        }
        for (; M < S.length; M += 1) S[M].d(1);
        S.length = z.length
      }
    },
    i: G,
    o: G,
    d(L) {
      L && O(e), b.d(), I.d(), ge(S, L), F = !1, ke(U)
    }
  }
}
const Hl = "https://app.bubudoufu.com/api/sliding-puzzle",
  Il = "https://app.bubudoufu.com/api/sliding-puzzle/yesterday";

function Dl(l, e, i) {
  let {
    cell: n,
    id: r,
    top100: s
  } = e, t = "https://app.bubudoufu.com/api/sliding-puzzle", c = !0, f = [];
  const h = () => {
    i(4, f = []), fetch(t).then(u => u.json()).then(u => {
      u.sort(T), u.forEach(y => {
        y.cell === n && f.length < 100 && i(4, f = [...f, y])
      })
    })
  };
  h();
  const x = () => {
      i(3, c = !c), c ? (t = Hl, h()) : (t = Il, h())
    },
    T = (u, y) => u.time < y.time ? -1 : 1,
    p = u => {
      u.indexOf("00:00:0") === 0 ? u = u.slice(7) : u.indexOf("00:00:") === 0 ? u = u.slice(6) : u.indexOf("00:0") === 0 ? u = u.slice(4) : u.indexOf("00:") === 0 ? u = u.slice(3) : u.indexOf("0") === 0 && (u = u.slice(1));
      const y = u.length,
        F = u.slice(0, y - 2),
        U = u.slice(-1);
      return u = F + "." + U, u
    },
    g = () => i(0, s = !1);
  return l.$$set = u => {
    "cell" in u && i(1, n = u.cell), "id" in u && i(2, r = u.id), "top100" in u && i(0, s = u.top100)
  }, [s, n, r, c, f, x, p, g]
}
class Vl extends fe {
  constructor(e) {
    super(), ce(this, e, Dl, Ml, se, {
      cell: 1,
      id: 2,
      top100: 0
    })
  }
}

function kt(l, e, i) {
  const n = l.slice();
  return n[3] = e[i], n
}

function Ul(l) {
  let e, i = l[3] + "",
    n, r;
  return {
    c() {
      e = m("div"), n = q(i), r = H(), d(e, "class", "tile cursor-pointer m-2 w-[calc(33.333%-16px)] h-[calc(33.333%-16px)] nm-flat-gray-200-xs dark:nm-flat-gray-700-xs rounded-lg animate-fade-in svelte-10bn66r"), Y(e, "bg-color", l[1])
    },
    m(s, t) {
      C(s, e, t), o(e, n), o(e, r)
    },
    p(s, t) {
      t & 1 && i !== (i = s[3] + "") && Z(n, i), t & 2 && Y(e, "bg-color", s[1])
    },
    d(s) {
      s && O(e)
    }
  }
}

function ql(l) {
  let e;
  return {
    c() {
      e = m("div"), d(e, "class", "m-2 w-[calc(33.333%-16px)] h-[calc(33.333%-16px)] nm-flat-gray-200-xs dark:nm-flat-gray-700-xs rounded-lg animate-fade-out svelte-10bn66r")
    },
    m(i, n) {
      C(i, e, n)
    },
    p: G,
    d(i) {
      i && O(e)
    }
  }
}

function yt(l) {
  let e;

  function i(s, t) {
    return s[3] === 0 ? ql : Ul
  }
  let n = i(l),
    r = n(l);
  return {
    c() {
      r.c(), e = ye()
    },
    m(s, t) {
      r.m(s, t), C(s, e, t)
    },
    p(s, t) {
      n === (n = i(s)) && r ? r.p(s, t) : (r.d(1), r = n(s), r && (r.c(), r.m(e.parentNode, e)))
    },
    d(s) {
      r.d(s), s && O(e)
    }
  }
}

function Rl(l) {
  let e, i = l[0],
    n = [];
  for (let r = 0; r < i.length; r += 1) n[r] = yt(kt(l, i, r));
  return {
    c() {
      e = m("div");
      for (let r = 0; r < n.length; r += 1) n[r].c();
      d(e, "id", "board"), d(e, "class", "flex flex-wrap svelte-10bn66r")
    },
    m(r, s) {
      C(r, e, s);
      for (let t = 0; t < n.length; t += 1) n[t] && n[t].m(e, null)
    },
    p(r, [s]) {
      if (s & 3) {
        i = r[0];
        let t;
        for (t = 0; t < i.length; t += 1) {
          const c = kt(r, i, t);
          n[t] ? n[t].p(c, s) : (n[t] = yt(c), n[t].c(), n[t].m(e, null))
        }
        for (; t < n.length; t += 1) n[t].d(1);
        n.length = i.length
      }
    },
    i: G,
    o: G,
    d(r) {
      r && O(e), ge(n, r)
    }
  }
}

function Bl(l, e, i) {
  let {
    tiles: n,
    clear: r
  } = e, {
    click_handler: s
  } = e;
  return we(() => {
    document.querySelectorAll(".tile").forEach(c => {
      c.addEventListener("click", s)
    })
  }), l.$$set = t => {
    "tiles" in t && i(0, n = t.tiles), "clear" in t && i(1, r = t.clear), "click_handler" in t && i(2, s = t.click_handler)
  }, [n, r, s]
}
class Jl extends fe {
  constructor(e) {
    super(), ce(this, e, Bl, Rl, se, {
      tiles: 0,
      clear: 1,
      click_handler: 2
    })
  }
}

function wt(l, e, i) {
  const n = l.slice();
  return n[3] = e[i], n
}

function Fl(l) {
  let e, i = l[3] + "",
    n, r;
  return {
    c() {
      e = m("div"), n = q(i), r = H(), d(e, "class", "tile cursor-pointer m-1.5 w-[calc(25%-12px)] h-[calc(25%-12px)] nm-flat-gray-200-xs dark:nm-flat-gray-700-xs rounded-lg animate-fade-in svelte-16pzomb"), Y(e, "bg-color", l[1])
    },
    m(s, t) {
      C(s, e, t), o(e, n), o(e, r)
    },
    p(s, t) {
      t & 1 && i !== (i = s[3] + "") && Z(n, i), t & 2 && Y(e, "bg-color", s[1])
    },
    d(s) {
      s && O(e)
    }
  }
}

function Yl(l) {
  let e;
  return {
    c() {
      e = m("div"), d(e, "class", "m-1.5 w-[calc(25%-12px)] h-[calc(25%-12px)] nm-flat-gray-200-xs dark:nm-flat-gray-700-xs rounded-lg animate-fade-out svelte-16pzomb")
    },
    m(i, n) {
      C(i, e, n)
    },
    p: G,
    d(i) {
      i && O(e)
    }
  }
}

function Tt(l) {
  let e;

  function i(s, t) {
    return s[3] === 0 ? Yl : Fl
  }
  let n = i(l),
    r = n(l);
  return {
    c() {
      r.c(), e = ye()
    },
    m(s, t) {
      r.m(s, t), C(s, e, t)
    },
    p(s, t) {
      n === (n = i(s)) && r ? r.p(s, t) : (r.d(1), r = n(s), r && (r.c(), r.m(e.parentNode, e)))
    },
    d(s) {
      r.d(s), s && O(e)
    }
  }
}

function Gl(l) {
  let e, i = l[0],
    n = [];
  for (let r = 0; r < i.length; r += 1) n[r] = Tt(wt(l, i, r));
  return {
    c() {
      e = m("div");
      for (let r = 0; r < n.length; r += 1) n[r].c();
      d(e, "id", "board"), d(e, "class", "flex flex-wrap svelte-16pzomb")
    },
    m(r, s) {
      C(r, e, s);
      for (let t = 0; t < n.length; t += 1) n[t] && n[t].m(e, null)
    },
    p(r, [s]) {
      if (s & 3) {
        i = r[0];
        let t;
        for (t = 0; t < i.length; t += 1) {
          const c = wt(r, i, t);
          n[t] ? n[t].p(c, s) : (n[t] = Tt(c), n[t].c(), n[t].m(e, null))
        }
        for (; t < n.length; t += 1) n[t].d(1);
        n.length = i.length
      }
    },
    i: G,
    o: G,
    d(r) {
      r && O(e), ge(n, r)
    }
  }
}

function Kl(l, e, i) {
  let {
    tiles: n,
    clear: r
  } = e, {
    click_handler: s
  } = e;
  return we(() => {
    document.querySelectorAll(".tile").forEach(c => {
      c.addEventListener("click", s)
    })
  }), l.$$set = t => {
    "tiles" in t && i(0, n = t.tiles), "clear" in t && i(1, r = t.clear), "click_handler" in t && i(2, s = t.click_handler)
  }, [n, r, s]
}
class Ql extends fe {
  constructor(e) {
    super(), ce(this, e, Kl, Gl, se, {
      tiles: 0,
      clear: 1,
      click_handler: 2
    })
  }
}

function St(l, e, i) {
  const n = l.slice();
  return n[3] = e[i], n
}

function Xl(l) {
  let e, i = l[3] + "",
    n, r;
  return {
    c() {
      e = m("div"), n = q(i), r = H(), d(e, "class", "tile cursor-pointer m-1.5 w-[calc(20%-12px)] h-[calc(20%-12px)] nm-flat-gray-200-xs dark:nm-flat-gray-700-xs rounded-lg animate-fade-in svelte-1ef6qqc"), Y(e, "bg-color", l[1])
    },
    m(s, t) {
      C(s, e, t), o(e, n), o(e, r)
    },
    p(s, t) {
      t & 1 && i !== (i = s[3] + "") && Z(n, i), t & 2 && Y(e, "bg-color", s[1])
    },
    d(s) {
      s && O(e)
    }
  }
}

function Zl(l) {
  let e;
  return {
    c() {
      e = m("div"), d(e, "class", "m-1.5 w-[calc(20%-12px)] h-[calc(20%-12px)] nm-flat-gray-200-xs dark:nm-flat-gray-700-xs rounded-lg animate-fade-out svelte-1ef6qqc")
    },
    m(i, n) {
      C(i, e, n)
    },
    p: G,
    d(i) {
      i && O(e)
    }
  }
}

function Ot(l) {
  let e;

  function i(s, t) {
    return s[3] === 0 ? Zl : Xl
  }
  let n = i(l),
    r = n(l);
  return {
    c() {
      r.c(), e = ye()
    },
    m(s, t) {
      r.m(s, t), C(s, e, t)
    },
    p(s, t) {
      n === (n = i(s)) && r ? r.p(s, t) : (r.d(1), r = n(s), r && (r.c(), r.m(e.parentNode, e)))
    },
    d(s) {
      r.d(s), s && O(e)
    }
  }
}

function Wl(l) {
  let e, i = l[0],
    n = [];
  for (let r = 0; r < i.length; r += 1) n[r] = Ot(St(l, i, r));
  return {
    c() {
      e = m("div");
      for (let r = 0; r < n.length; r += 1) n[r].c();
      d(e, "id", "board"), d(e, "class", "flex flex-wrap svelte-1ef6qqc")
    },
    m(r, s) {
      C(r, e, s);
      for (let t = 0; t < n.length; t += 1) n[t] && n[t].m(e, null)
    },
    p(r, [s]) {
      if (s & 3) {
        i = r[0];
        let t;
        for (t = 0; t < i.length; t += 1) {
          const c = St(r, i, t);
          n[t] ? n[t].p(c, s) : (n[t] = Ot(c), n[t].c(), n[t].m(e, null))
        }
        for (; t < n.length; t += 1) n[t].d(1);
        n.length = i.length
      }
    },
    i: G,
    o: G,
    d(r) {
      r && O(e), ge(n, r)
    }
  }
}

function $l(l, e, i) {
  let {
    tiles: n,
    clear: r
  } = e, {
    click_handler: s
  } = e;
  return we(() => {
    document.querySelectorAll(".tile").forEach(c => {
      c.addEventListener("click", s)
    })
  }), l.$$set = t => {
    "tiles" in t && i(0, n = t.tiles), "clear" in t && i(1, r = t.clear), "click_handler" in t && i(2, s = t.click_handler)
  }, [n, r, s]
}
class en extends fe {
  constructor(e) {
    super(), ce(this, e, $l, Wl, se, {
      tiles: 0,
      clear: 1,
      click_handler: 2
    })
  }
}

function Ct(l, e, i) {
  const n = l.slice();
  return n[3] = e[i], n
}

function tn(l) {
  let e, i = l[3] + "",
    n, r;
  return {
    c() {
      e = m("div"), n = q(i), r = H(), d(e, "class", "tile cursor-pointer m-1.5 w-[calc(16.666%-12px)] h-[calc(16.666%-12px)] nm-flat-gray-200-xs dark:nm-flat-gray-700-xs rounded-lg animate-fade-in svelte-146mv4e"), Y(e, "bg-color", l[1])
    },
    m(s, t) {
      C(s, e, t), o(e, n), o(e, r)
    },
    p(s, t) {
      t & 1 && i !== (i = s[3] + "") && Z(n, i), t & 2 && Y(e, "bg-color", s[1])
    },
    d(s) {
      s && O(e)
    }
  }
}

function ln(l) {
  let e;
  return {
    c() {
      e = m("div"), d(e, "class", "m-1.5 w-[calc(16.666%-12px)] h-[calc(16.666%-12px)] nm-flat-gray-200-xs dark:nm-flat-gray-700-xs rounded-lg animate-fade-out svelte-146mv4e")
    },
    m(i, n) {
      C(i, e, n)
    },
    p: G,
    d(i) {
      i && O(e)
    }
  }
}

function Et(l) {
  let e;

  function i(s, t) {
    return s[3] === 0 ? ln : tn
  }
  let n = i(l),
    r = n(l);
  return {
    c() {
      r.c(), e = ye()
    },
    m(s, t) {
      r.m(s, t), C(s, e, t)
    },
    p(s, t) {
      n === (n = i(s)) && r ? r.p(s, t) : (r.d(1), r = n(s), r && (r.c(), r.m(e.parentNode, e)))
    },
    d(s) {
      r.d(s), s && O(e)
    }
  }
}

function nn(l) {
  let e, i = l[0],
    n = [];
  for (let r = 0; r < i.length; r += 1) n[r] = Et(Ct(l, i, r));
  return {
    c() {
      e = m("div");
      for (let r = 0; r < n.length; r += 1) n[r].c();
      d(e, "id", "board"), d(e, "class", "flex flex-wrap svelte-146mv4e")
    },
    m(r, s) {
      C(r, e, s);
      for (let t = 0; t < n.length; t += 1) n[t] && n[t].m(e, null)
    },
    p(r, [s]) {
      if (s & 3) {
        i = r[0];
        let t;
        for (t = 0; t < i.length; t += 1) {
          const c = Ct(r, i, t);
          n[t] ? n[t].p(c, s) : (n[t] = Et(c), n[t].c(), n[t].m(e, null))
        }
        for (; t < n.length; t += 1) n[t].d(1);
        n.length = i.length
      }
    },
    i: G,
    o: G,
    d(r) {
      r && O(e), ge(n, r)
    }
  }
}

function rn(l, e, i) {
  let {
    tiles: n,
    clear: r
  } = e, {
    click_handler: s
  } = e;
  return we(() => {
    document.querySelectorAll(".tile").forEach(c => {
      c.addEventListener("click", s)
    })
  }), l.$$set = t => {
    "tiles" in t && i(0, n = t.tiles), "clear" in t && i(1, r = t.clear), "click_handler" in t && i(2, s = t.click_handler)
  }, [n, r, s]
}
class sn extends fe {
  constructor(e) {
    super(), ce(this, e, rn, nn, se, {
      tiles: 0,
      clear: 1,
      click_handler: 2
    })
  }
}

function xt(l, e, i) {
  const n = l.slice();
  return n[3] = e[i], n
}

function cn(l) {
  let e, i = l[3] + "",
    n, r;
  return {
    c() {
      e = m("div"), n = q(i), r = H(), d(e, "class", "tile cursor-pointer m-1 w-[calc(14.285%-8px)] h-[calc(14.285%-8px)] nm-flat-gray-200-xs dark:nm-flat-gray-700-xs rounded-lg animate-fade-in svelte-11jam5t"), Y(e, "bg-color", l[1])
    },
    m(s, t) {
      C(s, e, t), o(e, n), o(e, r)
    },
    p(s, t) {
      t & 1 && i !== (i = s[3] + "") && Z(n, i), t & 2 && Y(e, "bg-color", s[1])
    },
    d(s) {
      s && O(e)
    }
  }
}

function fn(l) {
  let e;
  return {
    c() {
      e = m("div"), d(e, "class", "m-1 w-[calc(14.285%-8px)] h-[calc(14.285%-8px)] nm-flat-gray-200-xs dark:nm-flat-gray-700-xs rounded-lg animate-fade-out svelte-11jam5t")
    },
    m(i, n) {
      C(i, e, n)
    },
    p: G,
    d(i) {
      i && O(e)
    }
  }
}

function Lt(l) {
  let e;

  function i(s, t) {
    return s[3] === 0 ? fn : cn
  }
  let n = i(l),
    r = n(l);
  return {
    c() {
      r.c(), e = ye()
    },
    m(s, t) {
      r.m(s, t), C(s, e, t)
    },
    p(s, t) {
      n === (n = i(s)) && r ? r.p(s, t) : (r.d(1), r = n(s), r && (r.c(), r.m(e.parentNode, e)))
    },
    d(s) {
      r.d(s), s && O(e)
    }
  }
}

function on(l) {
  let e, i = l[0],
    n = [];
  for (let r = 0; r < i.length; r += 1) n[r] = Lt(xt(l, i, r));
  return {
    c() {
      e = m("div");
      for (let r = 0; r < n.length; r += 1) n[r].c();
      d(e, "id", "board"), d(e, "class", "flex flex-wrap svelte-11jam5t")
    },
    m(r, s) {
      C(r, e, s);
      for (let t = 0; t < n.length; t += 1) n[t] && n[t].m(e, null)
    },
    p(r, [s]) {
      if (s & 3) {
        i = r[0];
        let t;
        for (t = 0; t < i.length; t += 1) {
          const c = xt(r, i, t);
          n[t] ? n[t].p(c, s) : (n[t] = Lt(c), n[t].c(), n[t].m(e, null))
        }
        for (; t < n.length; t += 1) n[t].d(1);
        n.length = i.length
      }
    },
    i: G,
    o: G,
    d(r) {
      r && O(e), ge(n, r)
    }
  }
}

function an(l, e, i) {
  let {
    tiles: n,
    clear: r
  } = e, {
    click_handler: s
  } = e;
  return we(() => {
    document.querySelectorAll(".tile").forEach(c => {
      c.addEventListener("click", s)
    })
  }), l.$$set = t => {
    "tiles" in t && i(0, n = t.tiles), "clear" in t && i(1, r = t.clear), "click_handler" in t && i(2, s = t.click_handler)
  }, [n, r, s]
}
class un extends fe {
  constructor(e) {
    super(), ce(this, e, an, on, se, {
      tiles: 0,
      clear: 1,
      click_handler: 2
    })
  }
}

function Nt(l, e, i) {
  const n = l.slice();
  return n[3] = e[i], n
}

function dn(l) {
  let e, i = l[3] + "",
    n, r;
  return {
    c() {
      e = m("div"), n = q(i), r = H(), d(e, "class", "tile cursor-pointer m-1 w-[calc(12.5%-8px)] h-[calc(12.5%-8px)] nm-flat-gray-200-xs dark:nm-flat-gray-700-xs rounded-full animate-fade-in svelte-nx1v0q"), Y(e, "bg-color", l[1])
    },
    m(s, t) {
      C(s, e, t), o(e, n), o(e, r)
    },
    p(s, t) {
      t & 1 && i !== (i = s[3] + "") && Z(n, i), t & 2 && Y(e, "bg-color", s[1])
    },
    d(s) {
      s && O(e)
    }
  }
}

function mn(l) {
  let e;
  return {
    c() {
      e = m("div"), d(e, "class", "m-1 w-[calc(12.5%-8px)] h-[calc(12.5%-8px)] nm-flat-gray-200-xs dark:nm-flat-gray-700-xs rounded-full animate-fade-out svelte-nx1v0q")
    },
    m(i, n) {
      C(i, e, n)
    },
    p: G,
    d(i) {
      i && O(e)
    }
  }
}

function Pt(l) {
  let e;

  function i(s, t) {
    return s[3] === 0 ? mn : dn
  }
  let n = i(l),
    r = n(l);
  return {
    c() {
      r.c(), e = ye()
    },
    m(s, t) {
      r.m(s, t), C(s, e, t)
    },
    p(s, t) {
      n === (n = i(s)) && r ? r.p(s, t) : (r.d(1), r = n(s), r && (r.c(), r.m(e.parentNode, e)))
    },
    d(s) {
      r.d(s), s && O(e)
    }
  }
}

function _n(l) {
  let e, i = l[0],
    n = [];
  for (let r = 0; r < i.length; r += 1) n[r] = Pt(Nt(l, i, r));
  return {
    c() {
      e = m("div");
      for (let r = 0; r < n.length; r += 1) n[r].c();
      d(e, "id", "board"), d(e, "class", "flex flex-wrap svelte-nx1v0q")
    },
    m(r, s) {
      C(r, e, s);
      for (let t = 0; t < n.length; t += 1) n[t] && n[t].m(e, null)
    },
    p(r, [s]) {
      if (s & 3) {
        i = r[0];
        let t;
        for (t = 0; t < i.length; t += 1) {
          const c = Nt(r, i, t);
          n[t] ? n[t].p(c, s) : (n[t] = Pt(c), n[t].c(), n[t].m(e, null))
        }
        for (; t < n.length; t += 1) n[t].d(1);
        n.length = i.length
      }
    },
    i: G,
    o: G,
    d(r) {
      r && O(e), ge(n, r)
    }
  }
}

function gn(l, e, i) {
  let {
    tiles: n,
    clear: r
  } = e, {
    click_handler: s
  } = e;
  return we(() => {
    document.querySelectorAll(".tile").forEach(c => {
      c.addEventListener("click", s)
    })
  }), l.$$set = t => {
    "tiles" in t && i(0, n = t.tiles), "clear" in t && i(1, r = t.clear), "click_handler" in t && i(2, s = t.click_handler)
  }, [n, r, s]
}
class pn extends fe {
  constructor(e) {
    super(), ce(this, e, gn, _n, se, {
      tiles: 0,
      clear: 1,
      click_handler: 2
    })
  }
}

function jt(l, e, i) {
  const n = l.slice();
  return n[3] = e[i], n
}

function hn(l) {
  let e, i = l[3] + "",
    n, r;
  return {
    c() {
      e = m("div"), n = q(i), r = H(), d(e, "class", "tile cursor-pointer m-1 w-[calc(11.111%-8px)] h-[calc(11.111%-8px)] nm-flat-gray-200-xs dark:nm-flat-gray-700-xs rounded-full animate-fade-in svelte-1umnxmg"), Y(e, "bg-color", l[1])
    },
    m(s, t) {
      C(s, e, t), o(e, n), o(e, r)
    },
    p(s, t) {
      t & 1 && i !== (i = s[3] + "") && Z(n, i), t & 2 && Y(e, "bg-color", s[1])
    },
    d(s) {
      s && O(e)
    }
  }
}

function bn(l) {
  let e;
  return {
    c() {
      e = m("div"), d(e, "class", "m-1 w-[calc(11.111%-8px)] h-[calc(11.111%-8px)] nm-flat-gray-200-xs dark:nm-flat-gray-700-xs rounded-full animate-fade-out svelte-1umnxmg")
    },
    m(i, n) {
      C(i, e, n)
    },
    p: G,
    d(i) {
      i && O(e)
    }
  }
}

function At(l) {
  let e;

  function i(s, t) {
    return s[3] === 0 ? bn : hn
  }
  let n = i(l),
    r = n(l);
  return {
    c() {
      r.c(), e = ye()
    },
    m(s, t) {
      r.m(s, t), C(s, e, t)
    },
    p(s, t) {
      n === (n = i(s)) && r ? r.p(s, t) : (r.d(1), r = n(s), r && (r.c(), r.m(e.parentNode, e)))
    },
    d(s) {
      r.d(s), s && O(e)
    }
  }
}

function vn(l) {
  let e, i = l[0],
    n = [];
  for (let r = 0; r < i.length; r += 1) n[r] = At(jt(l, i, r));
  return {
    c() {
      e = m("div");
      for (let r = 0; r < n.length; r += 1) n[r].c();
      d(e, "id", "board"), d(e, "class", "flex flex-wrap svelte-1umnxmg")
    },
    m(r, s) {
      C(r, e, s);
      for (let t = 0; t < n.length; t += 1) n[t] && n[t].m(e, null)
    },
    p(r, [s]) {
      if (s & 3) {
        i = r[0];
        let t;
        for (t = 0; t < i.length; t += 1) {
          const c = jt(r, i, t);
          n[t] ? n[t].p(c, s) : (n[t] = At(c), n[t].c(), n[t].m(e, null))
        }
        for (; t < n.length; t += 1) n[t].d(1);
        n.length = i.length
      }
    },
    i: G,
    o: G,
    d(r) {
      r && O(e), ge(n, r)
    }
  }
}

function kn(l, e, i) {
  let {
    tiles: n,
    clear: r
  } = e, {
    click_handler: s
  } = e;
  return we(() => {
    document.querySelectorAll(".tile").forEach(c => {
      c.addEventListener("click", s)
    })
  }), l.$$set = t => {
    "tiles" in t && i(0, n = t.tiles), "clear" in t && i(1, r = t.clear), "click_handler" in t && i(2, s = t.click_handler)
  }, [n, r, s]
}
class yn extends fe {
  constructor(e) {
    super(), ce(this, e, kn, vn, se, {
      tiles: 0,
      clear: 1,
      click_handler: 2
    })
  }
}

function zt(l, e, i) {
  const n = l.slice();
  return n[3] = e[i], n
}

function wn(l) {
  let e, i = l[3] + "",
    n, r;
  return {
    c() {
      e = m("div"), n = q(i), r = H(), d(e, "class", "tile cursor-pointer m-1 w-[calc(10%-8px)] h-[calc(10%-8px)] nm-flat-gray-200-xs dark:nm-flat-gray-700-xs rounded-full animate-fade-in svelte-1tnkk3"), Y(e, "bg-color", l[1])
    },
    m(s, t) {
      C(s, e, t), o(e, n), o(e, r)
    },
    p(s, t) {
      t & 1 && i !== (i = s[3] + "") && Z(n, i), t & 2 && Y(e, "bg-color", s[1])
    },
    d(s) {
      s && O(e)
    }
  }
}

function Tn(l) {
  let e;
  return {
    c() {
      e = m("div"), d(e, "class", "m-1 w-[calc(10%-8px)] h-[calc(10%-8px)] nm-flat-gray-200-xs dark:nm-flat-gray-700-xs rounded-full animate-fade-out svelte-1tnkk3")
    },
    m(i, n) {
      C(i, e, n)
    },
    p: G,
    d(i) {
      i && O(e)
    }
  }
}

function Mt(l) {
  let e;

  function i(s, t) {
    return s[3] === 0 ? Tn : wn
  }
  let n = i(l),
    r = n(l);
  return {
    c() {
      r.c(), e = ye()
    },
    m(s, t) {
      r.m(s, t), C(s, e, t)
    },
    p(s, t) {
      n === (n = i(s)) && r ? r.p(s, t) : (r.d(1), r = n(s), r && (r.c(), r.m(e.parentNode, e)))
    },
    d(s) {
      r.d(s), s && O(e)
    }
  }
}

function Sn(l) {
  let e, i = l[0],
    n = [];
  for (let r = 0; r < i.length; r += 1) n[r] = Mt(zt(l, i, r));
  return {
    c() {
      e = m("div");
      for (let r = 0; r < n.length; r += 1) n[r].c();
      d(e, "id", "board"), d(e, "class", "flex flex-wrap svelte-1tnkk3")
    },
    m(r, s) {
      C(r, e, s);
      for (let t = 0; t < n.length; t += 1) n[t] && n[t].m(e, null)
    },
    p(r, [s]) {
      if (s & 3) {
        i = r[0];
        let t;
        for (t = 0; t < i.length; t += 1) {
          const c = zt(r, i, t);
          n[t] ? n[t].p(c, s) : (n[t] = Mt(c), n[t].c(), n[t].m(e, null))
        }
        for (; t < n.length; t += 1) n[t].d(1);
        n.length = i.length
      }
    },
    i: G,
    o: G,
    d(r) {
      r && O(e), ge(n, r)
    }
  }
}

function On(l, e, i) {
  let {
    tiles: n,
    clear: r
  } = e, {
    click_handler: s
  } = e;
  return we(() => {
    document.querySelectorAll(".tile").forEach(c => {
      c.addEventListener("click", s)
    })
  }), l.$$set = t => {
    "tiles" in t && i(0, n = t.tiles), "clear" in t && i(1, r = t.clear), "click_handler" in t && i(2, s = t.click_handler)
  }, [n, r, s]
}
class Cn extends fe {
  constructor(e) {
    super(), ce(this, e, On, Sn, se, {
      tiles: 0,
      clear: 1,
      click_handler: 2
    })
  }
}
var En = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function xn(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l
}
var Ge = {
  exports: {}
};
(function(l, e) {
  (function(i, n) {
    n(e)
  })(En, function(i) {
    function n(v, w) {
      var E = Object.keys(v);
      if (Object.getOwnPropertySymbols) {
        var R = Object.getOwnPropertySymbols(v);
        w && (R = R.filter(function(a) {
          return Object.getOwnPropertyDescriptor(v, a).enumerable
        })), E.push.apply(E, R)
      }
      return E
    }

    function r(v) {
      for (var w = 1; w < arguments.length; w++) {
        var E = arguments[w] != null ? arguments[w] : {};
        w % 2 ? n(Object(E), !0).forEach(function(R) {
          t(v, R, E[R])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(E)) : n(Object(E)).forEach(function(R) {
          Object.defineProperty(v, R, Object.getOwnPropertyDescriptor(E, R))
        })
      }
      return v
    }

    function s(v) {
      "@babel/helpers - typeof";
      return s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
        return typeof w
      } : function(w) {
        return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w
      }, s(v)
    }

    function t(v, w, E) {
      return w in v ? Object.defineProperty(v, w, {
        value: E,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : v[w] = E, v
    }

    function c(v, w, E) {
      var R, a = "";
      if (v = typeof v == "number" ? String(v) : v, v.length > w) return v;
      for (R = 0; R < w; R = R + 1) a += String(E);
      return (a + v).slice(-a.length)
    }

    function f() {
      this.reset()
    }
    f.prototype.toString = function() {
      var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["hours", "minutes", "seconds"],
        w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ":",
        E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 2;
      v = v || ["hours", "minutes", "seconds"], w = w || ":", E = E || 2;
      var R = [],
        a;
      for (a = 0; a < v.length; a = a + 1) this[v[a]] !== void 0 && (v[a] === "secondTenths" ? R.push(this[v[a]]) : R.push(c(this[v[a]], E, "0")));
      return R.join(w)
    }, f.prototype.reset = function() {
      this.secondTenths = 0, this.seconds = 0, this.minutes = 0, this.hours = 0, this.days = 0
    };

    function h() {
      this.events = {}
    }
    h.prototype.on = function(v, w) {
      var E = this;
      return Array.isArray(this.events[v]) || (this.events[v] = []), this.events[v].push(w),
        function() {
          return E.removeListener(v, w)
        }
    }, h.prototype.removeListener = function(v, w) {
      if (Array.isArray(this.events[v])) {
        var E = this.events[v].indexOf(w);
        E > -1 && this.events[v].splice(E, 1)
      }
    }, h.prototype.removeAllListeners = function(v) {
      v ? Array.isArray(this.events[v]) && (this.events[v] = []) : this.events = {}
    }, h.prototype.emit = function(v) {
      for (var w = this, E = arguments.length, R = new Array(E > 1 ? E - 1 : 0), a = 1; a < E; a++) R[a - 1] = arguments[a];
      Array.isArray(this.events[v]) && this.events[v].forEach(function(N) {
        return N.apply(w, R)
      })
    };
    var x = 10,
      T = 60,
      p = 60,
      g = 24,
      u = 0,
      y = 1,
      F = 2,
      U = 3,
      D = 4,
      j = "secondTenths",
      b = "seconds",
      A = "minutes",
      K = "hours",
      I = "days",
      z = [j, b, A, K, I],
      S = {
        secondTenths: 100,
        seconds: 1e3,
        minutes: 6e4,
        hours: 36e5,
        days: 864e5
      },
      L = {
        secondTenths: x,
        seconds: T,
        minutes: p,
        hours: g
      };

    function P(v, w) {
      return (v % w + w) % w
    }

    function M() {
      var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        w = new f,
        E = new f,
        R, a = new h,
        N = !1,
        de = !1,
        ee, he, xe, Me = {},
        Le, me, _e, Ne, Te, He, oe = {
          detail: {
            timer: this
          }
        };
      et(v);

      function Ve(_, V) {
        var Q = L[_];
        E[_] = V, _ === I ? w[_] = Math.abs(V) : V >= 0 ? w[_] = P(V, Q) : w[_] = P(Q - P(V, Q), Q)
      }

      function Ue(_) {
        return Pe(_, I)
      }

      function qe(_) {
        return Pe(_, K)
      }

      function k(_) {
        return Pe(_, A)
      }

      function B(_) {
        return Pe(_, b)
      }

      function te(_) {
        return Pe(_, j)
      }

      function Pe(_, V) {
        var Q = E[V];
        return Ve(V, je(_, S[V])), E[V] !== Q
      }

      function Ke() {
        Qe(), Xt()
      }

      function Qe() {
        clearInterval(R), R = void 0, N = !1, de = !1
      }

      function Xe(_) {
        ct() ? (Te = Ze(), me = Re(Le.target)) : et(_), Gt()
      }

      function Gt() {
        var _ = S[ee];
        $e(Ie(Date.now())) || (R = setInterval(Kt, _), N = !0, de = !1)
      }

      function Ze() {
        return Ie(Date.now()) - E.secondTenths * S[j] * he
      }

      function Kt() {
        var _ = Ie(Date.now()),
          V = We();
        Qt(V), xe(oe.detail.timer), $e(_) && (nt(), pe("targetAchieved", oe))
      }

      function We() {
        var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ie(Date.now()),
          V = he > 0 ? _ - Te : Te - _,
          Q = {};
        return Q[j] = te(V), Q[b] = B(V), Q[A] = k(V), Q[K] = qe(V), Q[I] = Ue(V), Q
      }

      function Ie(_) {
        return Math.floor(_ / S[ee]) * S[ee]
      }

      function Qt(_) {
        _[j] && pe("secondTenthsUpdated", oe), _[b] && pe("secondsUpdated", oe), _[A] && pe("minutesUpdated", oe), _[K] && pe("hoursUpdated", oe), _[I] && pe("daysUpdated", oe)
      }

      function $e(_) {
        return me instanceof Array && _ >= He
      }

      function Xt() {
        w.reset(), E.reset()
      }

      function et(_) {
        _ = _ || {}, ee = Zt(_.precision), xe = typeof _.callback == "function" ? _.callback : function() {}, Ne = _.countdown === !0, he = Ne === !0 ? -1 : 1, s(_.startValues) === "object" ? $t(_.startValues) : _e = null, Te = Ze(), We(), s(_.target) === "object" ? me = Re(_.target) : Ne ? (_.target = {
          seconds: 0
        }, me = Re(_.target)) : me = null, Me = {
          precision: ee,
          callback: xe,
          countdown: s(_) === "object" && _.countdown === !0,
          target: me,
          startValues: _e
        }, Le = _
      }

      function Zt(_) {
        if (_ = typeof _ == "string" ? _ : b, !Wt(_)) throw new Error("Error in precision parameter: ".concat(_, " is not a valid value"));
        return _
      }

      function Wt(_) {
        return z.indexOf(_) >= 0
      }

      function tt(_) {
        var V;
        if (s(_) === "object")
          if (_ instanceof Array) {
            if (_.length !== 5) throw new Error("Array size not valid");
            V = _
          } else {
            for (var Q in _)
              if (z.indexOf(Q) < 0) throw new Error("Error in startValues or target parameter: ".concat(Q, " is not a valid input value"));
            V = [_.secondTenths || 0, _.seconds || 0, _.minutes || 0, _.hours || 0, _.days || 0]
          } V = V.map(function(fl) {
          return parseInt(fl, 10)
        });
        var ft = V[u],
          ot = V[y] + je(ft, x),
          at = V[F] + je(ot, T),
          ut = V[U] + je(at, p),
          cl = V[D] + je(ut, g);
        return V[u] = ft % x, V[y] = ot % T, V[F] = at % p, V[U] = ut % g, V[D] = cl, V
      }

      function je(_, V) {
        var Q = _ / V;
        return Q < 0 ? Math.ceil(Q) : Math.floor(Q)
      }

      function Re(_) {
        if (_) {
          me = tt(_);
          var V = lt(me);
          return He = Te + V.secondTenths * S[j] * he, me
        }
      }

      function $t(_) {
        _e = tt(_), w.secondTenths = _e[u], w.seconds = _e[y], w.minutes = _e[F], w.hours = _e[U], w.days = _e[D], E = lt(_e, E)
      }

      function lt(_, V) {
        var Q = V || {};
        return Q.days = _[D], Q.hours = Q.days * g + _[U], Q.minutes = Q.hours * p + _[F], Q.seconds = Q.minutes * T + _[y], Q.secondTenths = Q.seconds * x + _[[u]], Q
      }

      function nt() {
        Ke(), pe("stopped", oe)
      }

      function el() {
        Ke(), Xe(Le), pe("reset", oe)
      }

      function tl() {
        var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _ = r(r({}, v), _), !st() && (Xe(_), pe("started", oe))
      }

      function ll() {
        Qe(), de = !0, pe("paused", oe)
      }

      function it(_, V) {
        a.on(_, V)
      }

      function rt(_, V) {
        a.removeListener(_, V)
      }

      function nl(_) {
        a.removeAllListeners(_)
      }

      function pe(_, V) {
        a.emit(_, V)
      }

      function st() {
        return N
      }

      function ct() {
        return de
      }

      function il() {
        return w
      }

      function rl() {
        return E
      }

      function sl() {
        return Me
      }
      typeof this < "u" && (this.start = tl, this.pause = ll, this.stop = nt, this.reset = el, this.isRunning = st, this.isPaused = ct, this.getTimeValues = il, this.getTotalTimeValues = rl, this.getConfig = sl, this.addEventListener = it, this.on = it, this.removeEventListener = rt, this.removeAllEventListeners = nl, this.off = rt)
    }
    i.Timer = M, i.default = M, Object.defineProperty(i, "__esModule", {
      value: !0
    })
  })
})(Ge, Ge.exports);
var Ln = Ge.exports;
const Nn = xn(Ln);

function Pn(l) {
  let e, i, n, r, s, t, c, f, h, x, T, p, g, u, y, F, U, D;

  function j(a) {
    l[22](a)
  }

  function b(a) {
    l[23](a)
  }

  function A(a) {
    l[24](a)
  }
  let K = {
    game: l[1],
    shuffle: l[13],
    reset: l[14]
  };
  l[8] !== void 0 && (K.time = l[8]), l[9] !== void 0 && (K.trials = l[9]), l[0] !== void 0 && (K.display = l[0]), e = new vl({
    props: K
  }), $.push(() => ne(e, "time", j)), $.push(() => ne(e, "trials", b)), $.push(() => ne(e, "display", A));
  let I = l[6] === 3 && Ht(l),
    z = l[6] === 4 && It(l),
    S = l[6] === 5 && Dt(l),
    L = l[6] === 6 && Vt(l),
    P = l[6] === 7 && Ut(l),
    M = l[6] === 8 && qt(l),
    v = l[6] === 9 && Rt(l),
    w = l[6] === 10 && Bt(l);

  function E(a) {
    l[33](a)
  }
  let R = {
    bestTime: l[7],
    clear: l[2],
    top3: l[4],
    cell: l[6],
    id: l[5]
  };
  return l[3] !== void 0 && (R.top100 = l[3]), u = new Sl({
    props: R
  }), $.push(() => ne(u, "top100", E)), U = new Nl({
    props: {
      onChange: l[15],
      cell: l[6]
    }
  }), {
    c() {
      ue(e.$$.fragment), s = H(), I && I.c(), t = H(), z && z.c(), c = H(), S && S.c(), f = H(), L && L.c(), h = H(), P && P.c(), x = H(), M && M.c(), T = H(), v && v.c(), p = H(), w && w.c(), g = H(), ue(u.$$.fragment), F = H(), ue(U.$$.fragment)
    },
    m(a, N) {
      ie(e, a, N), C(a, s, N), I && I.m(a, N), C(a, t, N), z && z.m(a, N), C(a, c, N), S && S.m(a, N), C(a, f, N), L && L.m(a, N), C(a, h, N), P && P.m(a, N), C(a, x, N), M && M.m(a, N), C(a, T, N), v && v.m(a, N), C(a, p, N), w && w.m(a, N), C(a, g, N), ie(u, a, N), C(a, F, N), ie(U, a, N), D = !0
    },
    p(a, N) {
      const de = {};
      N[0] & 2 && (de.game = a[1]), !i && N[0] & 256 && (i = !0, de.time = a[8], le(() => i = !1)), !n && N[0] & 512 && (n = !0, de.trials = a[9], le(() => n = !1)), !r && N[0] & 1 && (r = !0, de.display = a[0], le(() => r = !1)), e.$set(de), a[6] === 3 ? I ? (I.p(a, N), N[0] & 64 && J(I, 1)) : (I = Ht(a), I.c(), J(I, 1), I.m(t.parentNode, t)) : I && (be(), X(I, 1, 1, () => {
        I = null
      }), ve()), a[6] === 4 ? z ? (z.p(a, N), N[0] & 64 && J(z, 1)) : (z = It(a), z.c(), J(z, 1), z.m(c.parentNode, c)) : z && (be(), X(z, 1, 1, () => {
        z = null
      }), ve()), a[6] === 5 ? S ? (S.p(a, N), N[0] & 64 && J(S, 1)) : (S = Dt(a), S.c(), J(S, 1), S.m(f.parentNode, f)) : S && (be(), X(S, 1, 1, () => {
        S = null
      }), ve()), a[6] === 6 ? L ? (L.p(a, N), N[0] & 64 && J(L, 1)) : (L = Vt(a), L.c(), J(L, 1), L.m(h.parentNode, h)) : L && (be(), X(L, 1, 1, () => {
        L = null
      }), ve()), a[6] === 7 ? P ? (P.p(a, N), N[0] & 64 && J(P, 1)) : (P = Ut(a), P.c(), J(P, 1), P.m(x.parentNode, x)) : P && (be(), X(P, 1, 1, () => {
        P = null
      }), ve()), a[6] === 8 ? M ? (M.p(a, N), N[0] & 64 && J(M, 1)) : (M = qt(a), M.c(), J(M, 1), M.m(T.parentNode, T)) : M && (be(), X(M, 1, 1, () => {
        M = null
      }), ve()), a[6] === 9 ? v ? (v.p(a, N), N[0] & 64 && J(v, 1)) : (v = Rt(a), v.c(), J(v, 1), v.m(p.parentNode, p)) : v && (be(), X(v, 1, 1, () => {
        v = null
      }), ve()), a[6] === 10 ? w ? (w.p(a, N), N[0] & 64 && J(w, 1)) : (w = Bt(a), w.c(), J(w, 1), w.m(g.parentNode, g)) : w && (be(), X(w, 1, 1, () => {
        w = null
      }), ve());
      const ee = {};
      N[0] & 128 && (ee.bestTime = a[7]), N[0] & 4 && (ee.clear = a[2]), N[0] & 16 && (ee.top3 = a[4]), N[0] & 64 && (ee.cell = a[6]), N[0] & 32 && (ee.id = a[5]), !y && N[0] & 8 && (y = !0, ee.top100 = a[3], le(() => y = !1)), u.$set(ee);
      const he = {};
      N[0] & 64 && (he.cell = a[6]), U.$set(he)
    },
    i(a) {
      D || (J(e.$$.fragment, a), J(I), J(z), J(S), J(L), J(P), J(M), J(v), J(w), J(u.$$.fragment, a), J(U.$$.fragment, a), D = !0)
    },
    o(a) {
      X(e.$$.fragment, a), X(I), X(z), X(S), X(L), X(P), X(M), X(v), X(w), X(u.$$.fragment, a), X(U.$$.fragment, a), D = !1
    },
    d(a) {
      re(e, a), a && O(s), I && I.d(a), a && O(t), z && z.d(a), a && O(c), S && S.d(a), a && O(f), L && L.d(a), a && O(h), P && P.d(a), a && O(x), M && M.d(a), a && O(T), v && v.d(a), a && O(p), w && w.d(a), a && O(g), re(u, a), a && O(F), re(U, a)
    }
  }
}

function jn(l) {
  let e, i, n;

  function r(t) {
    l[21](t)
  }
  let s = {
    cell: l[6],
    id: l[5]
  };
  return l[3] !== void 0 && (s.top100 = l[3]), e = new Vl({
    props: s
  }), $.push(() => ne(e, "top100", r)), {
    c() {
      ue(e.$$.fragment)
    },
    m(t, c) {
      ie(e, t, c), n = !0
    },
    p(t, c) {
      const f = {};
      c[0] & 64 && (f.cell = t[6]), c[0] & 32 && (f.id = t[5]), !i && c[0] & 8 && (i = !0, f.top100 = t[3], le(() => i = !1)), e.$set(f)
    },
    i(t) {
      n || (J(e.$$.fragment, t), n = !0)
    },
    o(t) {
      X(e.$$.fragment, t), n = !1
    },
    d(t) {
      re(e, t)
    }
  }
}

function Ht(l) {
  let e, i, n;

  function r(t) {
    l[25](t)
  }
  let s = {
    clear: l[2],
    click_handler: l[12]
  };
  return l[10] !== void 0 && (s.tiles = l[10]), e = new Jl({
    props: s
  }), $.push(() => ne(e, "tiles", r)), {
    c() {
      ue(e.$$.fragment)
    },
    m(t, c) {
      ie(e, t, c), n = !0
    },
    p(t, c) {
      const f = {};
      c[0] & 4 && (f.clear = t[2]), !i && c[0] & 1024 && (i = !0, f.tiles = t[10], le(() => i = !1)), e.$set(f)
    },
    i(t) {
      n || (J(e.$$.fragment, t), n = !0)
    },
    o(t) {
      X(e.$$.fragment, t), n = !1
    },
    d(t) {
      re(e, t)
    }
  }
}

function It(l) {
  let e, i, n;

  function r(t) {
    l[26](t)
  }
  let s = {
    clear: l[2],
    click_handler: l[12]
  };
  return l[10] !== void 0 && (s.tiles = l[10]), e = new Ql({
    props: s
  }), $.push(() => ne(e, "tiles", r)), {
    c() {
      ue(e.$$.fragment)
    },
    m(t, c) {
      ie(e, t, c), n = !0
    },
    p(t, c) {
      const f = {};
      c[0] & 4 && (f.clear = t[2]), !i && c[0] & 1024 && (i = !0, f.tiles = t[10], le(() => i = !1)), e.$set(f)
    },
    i(t) {
      n || (J(e.$$.fragment, t), n = !0)
    },
    o(t) {
      X(e.$$.fragment, t), n = !1
    },
    d(t) {
      re(e, t)
    }
  }
}

function Dt(l) {
  let e, i, n;

  function r(t) {
    l[27](t)
  }
  let s = {
    clear: l[2],
    click_handler: l[12]
  };
  return l[10] !== void 0 && (s.tiles = l[10]), e = new en({
    props: s
  }), $.push(() => ne(e, "tiles", r)), {
    c() {
      ue(e.$$.fragment)
    },
    m(t, c) {
      ie(e, t, c), n = !0
    },
    p(t, c) {
      const f = {};
      c[0] & 4 && (f.clear = t[2]), !i && c[0] & 1024 && (i = !0, f.tiles = t[10], le(() => i = !1)), e.$set(f)
    },
    i(t) {
      n || (J(e.$$.fragment, t), n = !0)
    },
    o(t) {
      X(e.$$.fragment, t), n = !1
    },
    d(t) {
      re(e, t)
    }
  }
}

function Vt(l) {
  let e, i, n;

  function r(t) {
    l[28](t)
  }
  let s = {
    clear: l[2],
    click_handler: l[12]
  };
  return l[10] !== void 0 && (s.tiles = l[10]), e = new sn({
    props: s
  }), $.push(() => ne(e, "tiles", r)), {
    c() {
      ue(e.$$.fragment)
    },
    m(t, c) {
      ie(e, t, c), n = !0
    },
    p(t, c) {
      const f = {};
      c[0] & 4 && (f.clear = t[2]), !i && c[0] & 1024 && (i = !0, f.tiles = t[10], le(() => i = !1)), e.$set(f)
    },
    i(t) {
      n || (J(e.$$.fragment, t), n = !0)
    },
    o(t) {
      X(e.$$.fragment, t), n = !1
    },
    d(t) {
      re(e, t)
    }
  }
}

function Ut(l) {
  let e, i, n;

  function r(t) {
    l[29](t)
  }
  let s = {
    clear: l[2],
    click_handler: l[12]
  };
  return l[10] !== void 0 && (s.tiles = l[10]), e = new un({
    props: s
  }), $.push(() => ne(e, "tiles", r)), {
    c() {
      ue(e.$$.fragment)
    },
    m(t, c) {
      ie(e, t, c), n = !0
    },
    p(t, c) {
      const f = {};
      c[0] & 4 && (f.clear = t[2]), !i && c[0] & 1024 && (i = !0, f.tiles = t[10], le(() => i = !1)), e.$set(f)
    },
    i(t) {
      n || (J(e.$$.fragment, t), n = !0)
    },
    o(t) {
      X(e.$$.fragment, t), n = !1
    },
    d(t) {
      re(e, t)
    }
  }
}

function qt(l) {
  let e, i, n;

  function r(t) {
    l[30](t)
  }
  let s = {
    clear: l[2],
    click_handler: l[12]
  };
  return l[10] !== void 0 && (s.tiles = l[10]), e = new pn({
    props: s
  }), $.push(() => ne(e, "tiles", r)), {
    c() {
      ue(e.$$.fragment)
    },
    m(t, c) {
      ie(e, t, c), n = !0
    },
    p(t, c) {
      const f = {};
      c[0] & 4 && (f.clear = t[2]), !i && c[0] & 1024 && (i = !0, f.tiles = t[10], le(() => i = !1)), e.$set(f)
    },
    i(t) {
      n || (J(e.$$.fragment, t), n = !0)
    },
    o(t) {
      X(e.$$.fragment, t), n = !1
    },
    d(t) {
      re(e, t)
    }
  }
}

function Rt(l) {
  let e, i, n;

  function r(t) {
    l[31](t)
  }
  let s = {
    clear: l[2],
    click_handler: l[12]
  };
  return l[10] !== void 0 && (s.tiles = l[10]), e = new yn({
    props: s
  }), $.push(() => ne(e, "tiles", r)), {
    c() {
      ue(e.$$.fragment)
    },
    m(t, c) {
      ie(e, t, c), n = !0
    },
    p(t, c) {
      const f = {};
      c[0] & 4 && (f.clear = t[2]), !i && c[0] & 1024 && (i = !0, f.tiles = t[10], le(() => i = !1)), e.$set(f)
    },
    i(t) {
      n || (J(e.$$.fragment, t), n = !0)
    },
    o(t) {
      X(e.$$.fragment, t), n = !1
    },
    d(t) {
      re(e, t)
    }
  }
}

function Bt(l) {
  let e, i, n;

  function r(t) {
    l[32](t)
  }
  let s = {
    clear: l[2],
    click_handler: l[12]
  };
  return l[10] !== void 0 && (s.tiles = l[10]), e = new Cn({
    props: s
  }), $.push(() => ne(e, "tiles", r)), {
    c() {
      ue(e.$$.fragment)
    },
    m(t, c) {
      ie(e, t, c), n = !0
    },
    p(t, c) {
      const f = {};
      c[0] & 4 && (f.clear = t[2]), !i && c[0] & 1024 && (i = !0, f.tiles = t[10], le(() => i = !1)), e.$set(f)
    },
    i(t) {
      n || (J(e.$$.fragment, t), n = !0)
    },
    o(t) {
      X(e.$$.fragment, t), n = !1
    },
    d(t) {
      re(e, t)
    }
  }
}

function An(l) {
  let e, i, n, r, s, t, c, f, h, x, T, p, g, u, y, F, U, D, j, b, A, K, I, z;

  function S(E) {
    l[19](E)
  }

  function L(E) {
    l[20](E)
  }
  let P = {
    storageClear: l[11],
    cell: l[6]
  };
  l[0] !== void 0 && (P.display = l[0]), l[1] !== void 0 && (P.game = l[1]), g = new El({
    props: P
  }), $.push(() => ne(g, "display", S)), $.push(() => ne(g, "game", L));
  const M = [jn, Pn],
    v = [];

  function w(E, R) {
    return E[3] ? 0 : 1
  }
  return b = w(l), A = v[b] = M[b](l), {
    c() {
      e = m("h1"), e.textContent = "繧ｹ繝ｩ繧､繝峨ヱ繧ｺ繝ｫ", i = H(), n = m("div"), r = m("div"), s = m("div"), t = m("div"), t.innerHTML = `<p class="font-semibold">逶ｮ讓�</p> 
        <p class="">繧ｷ繝｣繝�ヵ繝ｫ縺輔ｌ縺溘ヴ繝ｼ繧ｹ繧貞�譛滄�鄂ｮ縺ｫ謌ｻ縺吶�</p>`, c = H(), f = m("div"), f.innerHTML = `<p class="font-semibold">謫堺ｽ懈婿豕�</p> 
        
        <div class="flex justify-center p-1"><span class="nm-flat-gray-200 dark:nm-flat-gray-700 rounded p-1 m-1 w-8"><svg class="m-auto fill-blue-500 hover:fill-blue-700" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"></path></svg></span> 
          <p class="p-1 font-semibold">繧ｷ繝｣繝�ヵ繝ｫ繝懊ち繝ｳ</p></div> 
        <p class="p-1 text-center">繝斐�繧ｹ縺後す繝｣繝�ヵ繝ｫ縺輔ｌ繧ｲ繝ｼ繝�縺碁幕蟋九＆繧後∪縺吶�</p> 
        <div class="flex justify-center p-1"><span class="nm-flat-gray-200 dark:nm-flat-gray-700 rounded p-1 m-1 w-8"><svg class="m-auto fill-red-500 hover:fill-red-700" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"></path></svg></span> 
          <p class="p-1 font-semibold">繧ｷ繝｣繝�ヵ繝ｫ繝ｻ繝ｪ繧ｻ繝�ヨ繝懊ち繝ｳ</p></div> 
        <p class="p-1 text-center">繧ｲ繝ｼ繝�荳ｭ縺ｫ繝懊ち繝ｳ繧呈款縺吶→繧ｿ繧､繝�繝ｻ謫堺ｽ懷屓謨ｰ縺後Μ繧ｻ繝�ヨ縺輔ｌ譁ｰ縺励＞繧ｲ繝ｼ繝�縺碁幕蟋九＆繧後∪縺吶�</p> 
        
        <div class="flex justify-center p-1"><div class="text-center font-black w-10 p-0.5 nm-flat-gray-200 dark:nm-flat-gray-700 rounded mx-1">3X3</div> 
          <p class="p-0.5 font-semibold">繝斐�繧ｹ驕ｸ謚槭�繧ｿ繝ｳ</p></div> 
        <p class="p-1 text-center">繝斐�繧ｹ縺ｮ謨ｰ繧貞､峨∴繧九％縺ｨ縺悟�譚･縺ｾ縺吶�</p>`, h = H(), x = m("div"), T = m("p"), T.textContent = "險ｭ螳�", p = H(), ue(g.$$.fragment), F = H(), U = m("button"), U.textContent = "縺昴�莉悶�謨ｰ蟄ｦ繧ｲ繝ｼ繝�繝ｻ繝代ぜ繝ｫ", D = H(), j = m("div"), A.c(), d(e, "class", "text-xl lg:text-4xl font-black m-2 lg:m-1"), d(t, "class", "nm-flat-gray-200 dark:nm-flat-gray-700 rounded p-1.5 md:p-2"), d(f, "class", "nm-flat-gray-200 dark:nm-flat-gray-700 rounded p-1.5 md:p-2 mt-2 md:mt-4"), d(T, "class", "font-semibold"), d(x, "class", "nm-flat-gray-200 dark:nm-flat-gray-700 rounded p-1.5 md:p-2 my-2"), d(U, "class", "m-auto block font-semibold w-48 p-1 my-4 nm-flat-gray-200 dark:nm-flat-gray-700 rounded"), d(s, "id", "rules"), d(s, "class", "md:mt-4 p-1"), d(r, "class", "text-sm md:text-base"), d(j, "id", "main"), d(j, "class", "col-span-2 m-auto"), d(n, "id", "container"), d(n, "class", "flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-4")
    },
    m(E, R) {
      C(E, e, R), C(E, i, R), C(E, n, R), o(n, r), o(r, s), o(s, t), o(s, c), o(s, f), o(s, h), o(s, x), o(x, T), o(x, p), ie(g, x, null), o(s, F), o(s, U), o(n, D), o(n, j), v[b].m(j, null), K = !0, I || (z = W(U, "click", l[16]), I = !0)
    },
    p(E, R) {
      const a = {};
      R[0] & 64 && (a.cell = E[6]), !u && R[0] & 1 && (u = !0, a.display = E[0], le(() => u = !1)), !y && R[0] & 2 && (y = !0, a.game = E[1], le(() => y = !1)), g.$set(a);
      let N = b;
      b = w(E), b === N ? v[b].p(E, R) : (be(), X(v[N], 1, 1, () => {
        v[N] = null
      }), ve(), A = v[b], A ? A.p(E, R) : (A = v[b] = M[b](E), A.c()), J(A, 1), A.m(j, null))
    },
    i(E) {
      K || (J(g.$$.fragment, E), J(A), K = !0)
    },
    o(E) {
      X(g.$$.fragment, E), X(A), K = !1
    },
    d(E) {
      E && O(e), E && O(i), E && O(n), re(g), v[b].d(), I = !1, z()
    }
  }
}
const Jt = "https://app.bubudoufu.com/api/sliding-puzzle";

function zn(l) {
  return new Promise(e => {
    setTimeout(e, l * 1e3)
  })
}

function Mn(l, e, i) {
  const n = new Nn({
    precision: "secondTenths"
  });
  let r = !1,
    s = !1,
    t = !0,
    c = !0,
    f = !1,
    h = [],
    x, T = "";
  const p = new URLSearchParams(window.location.search);
  let g = Number(p.get("cell"));
  (g < 3 || g > 10) && (g = 3);
  let u, y = "";
  if (localStorage.hasOwnProperty("sliding-puzzle")) u = JSON.parse(localStorage.getItem("sliding-puzzle")), t = u.setting.display, c = u.setting.ranking, x = u.id;
  else {
    u = {
      id: new Date().getTime().toString() + Math.floor(Math.random() * 10).toString(),
      setting: {
        display: t,
        ranking: c
      },
      best: {
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: ""
      }
    };
    let B = JSON.stringify(u);
    localStorage.setItem("sliding-puzzle", B)
  }
  const F = () => {
      if (confirm(`${g}x${g}縺ｮ閾ｪ蟾ｱ繝吶せ繝医ｒ蜑企勁縺励∪縺吶Ａ)){i(7,y="--:--"),localStorage.removeItem("sliding-puzzle"),i(18,u.best[g]="",u);let B=JSON.stringify(u);localStorage.setItem("sliding-puzzle",B)}};y=u.best[g]===""?"--:--":u.best[g],y.length===7&&(y="00:"+y,u.best[g]=y),y.length===5&&y!="--:--"&&(y="00:"+y+":0",u.best[g]=y);let U=0,D="00:00",j=0,b=[...Array(g*g)].map((k,B)=>B+1),A=[...Array(g*g)].map((k,B)=>B+1);A[b.length-1]=0,b[b.length-1]=0,n.addEventListener("secondTenthsUpdated",()=>{n.getTimeValues().toString(["hours"])==="00"?i(8,D=n.getTimeValues().toString(["minutes","seconds"])):i(8,D=n.getTimeValues().toString(["hours","minutes","seconds"]))}),(()=>{fetch(Jt).then(k=>k.json()).then(k=>{k.sort(I),k.forEach(B=>{B.cell===g&&h.length<3&&i(4,h=[...h,B])})})})();const I=(k,B)=>k.time<B.time?-1:1,z=()=>{fetch(Jt,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({time:T,trials:j,cell:g,name:u.id,ranking:1})})},S=k=>{if(k<=g*(g-1)&&b[k+g]===0||k>=g&&b[k-g]===0||k%g!=g-1&&b[k+1]===0||k%g!=0&&b[k-1]===0)return!0},L=k=>{const B=b.indexOf(0);U=B;const te=b[k];i(10,b[k]=b[B],b),i(10,b[B]=te,b)},P=k=>{if(!r)return;const B=b.indexOf(Number(k.target.textContent));if(S(B)&&(i(9,j++,j),L(B)),M(A,b)){if(i(2,s=!0),n.getTimeValues().toString(["hours"])==="00"?(i(8,D=n.getTimeValues().toString(["minutes","seconds","secondTenths"])),T=n.getTimeValues().toString(["hours","minutes","seconds","secondTenths"])):(i(8,D=n.getTimeValues().toString(["hours","minutes","seconds"])),T=n.getTimeValues().toString(["hours","minutes","seconds","secondTenths"])),z(),i(1,r=!1),n.stop(),T.length===5&&(T="00:"+T+":0"),u.best[g]===""){i(18,u.best[g]=T,u),i(7,y=T);let te=JSON.stringify(u);localStorage.setItem("sliding-puzzle",te)}else if(T<u.best[g]){i(18,u.best[g]=T,u),i(7,y=T);let te=JSON.stringify(u);localStorage.setItem("sliding-puzzle",te)}}},M=(k,B)=>JSON.stringify(k)===JSON.stringify(B),v=k=>{let B=[];return k<=g*(g-1)&&b[k+g]&&B.push(k+g),k>=g&&b[k-g]&&B.push(k-g),k%g!=g-1&&b[k+1]&&B.push(k+1),k%g!=0&&b[k-1]&&B.push(k-1),B},w=()=>{const k=b.indexOf(0),B=v(k),te=B[Math.floor(Math.floor(Math.random()*B.length))];U===te?w():L(te)},E=async()=>{i(9,j=0),i(2,s=!1);let k=1,B=145;g>5&&(B=435);for(let te=0;te<B;te++)w(),await zn(k),k>.1&&(k=k-.1);i(1,r=!0),n.start()},R=()=>{i(2,s=!1),n.reset(),i(9,j=0),i(10,b=[...Array(g*g)].map((B,te)=>te+1)),i(10,b[b.length-1]=0,b);let k=145;g>5&&(k=435);for(let B=0;B<k;B++)w();i(1,r=!0),n.start()},a=k=>{const B=k.target.value;location.href=`
          https: //bubudoufu.com/webapp/sliding-puzzle/?cell=${B}`},N=()=>{location.href="https://bubudoufu.com/math-games/"};function de(k){t=k,i(0,t)}function ee(k){r=k,i(1,r)}function he(k){f=k,i(3,f)}function xe(k){D=k,i(8,D)}function Me(k){j=k,i(9,j)}function Le(k){t=k,i(0,t)}function me(k){b=k,i(10,b)}function _e(k){b=k,i(10,b)}function Ne(k){b=k,i(10,b)}function Te(k){b=k,i(10,b)}function He(k){b=k,i(10,b)}function oe(k){b=k,i(10,b)}function Ve(k){b=k,i(10,b)}function Ue(k){b=k,i(10,b)}function qe(k){f=k,i(3,f)}return l.$$.update=()=>{if(l.$$.dirty[0]&393217){i(18,u.setting.display=t,u),i(18,u.setting.ranking=c,u);let k=JSON.stringify(u);localStorage.setItem("sliding-puzzle",k)}},[t,r,s,f,h,x,g,y,D,j,b,F,P,E,R,a,N,c,u,de,ee,he,xe,Me,Le,me,_e,Ne,Te,He,oe,Ve,Ue,qe]}class Hn extends fe{constructor(e){super(),ce(this,e,Mn,An,se,{},null,[-1,-1])}}new Hn({target:document.getElementById("app")});
