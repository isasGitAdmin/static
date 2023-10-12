/*! JsRender v0.9.80 (Beta): http://jsviews.com/#jsrender */
/*! **VERSION FOR WEB** (For NODE.JS see http://jsviews.com/download/jsrender-node.js) */
! function(e, t) {
	var n = t.jCsi;
	"object" == typeof exports ? module.exports = n ? e(t, n) : function(n) {
		if (n && !n.fn) throw "Provide jCsi or null";
		return e(t, n)
	} : "function" == typeof define && define.amd ? define(function() {
		return e(t)
	}) : e(t, !1)
}(function(e, t) {
	"use strict";

	function n(e, t) {
		return function() {
			var n, r = this,
				i = r.base;
			return r.base = e, n = t.apply(r, arguments), r.base = i, n
		}
	}

	function r(e, t) {
		return ee(t) && (t = n(e ? e._d ? e : n(s, e) : s, t), t._d = 1), t
	}

	function i(e, t) {
		for (var n in t.props) Ve.test(n) && (e[n] = r(e[n], t.props[n]))
	}

	function o(e) {
		return e
	}

	function s() {
		return ""
	}

	function a(e) {
		try {
			throw console.log("JsRender dbg breakpoint: " + e), "dbg breakpoint"
		} catch (t) {}
		return this.base ? this.baseApply(arguments) : e
	}

	function d(e) {
		this.name = (t.link ? "JsViews" : "JsRender") + " Error", this.message = e || this.name
	}

	function u(e, t) {
		for (var n in t) e[n] = t[n];
		return e
	}

	function l(e, t, n) {
		return e ? te(e) ? l.apply(X, e) : (ae.delimiters = [e, t, ge = n ? n.charAt(0) : ge], le = e.charAt(0), pe = e.charAt(1), ce = t.charAt(0), fe = t.charAt(1), e = "\\" + le + "(\\" + ge + ")?\\" + pe, t = "\\" + ce + "\\" + fe, G = "(?:(\\w+(?=[\\/\\s\\" + ce + "]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\" + ce + "]|\\" + ce + "(?!\\" + fe + "))*?)", se.rTag = "(?:" + G + ")", G = new RegExp("(?:" + e + G + "(\\/)?|\\" + le + "(\\" + ge + ")?\\" + pe + "(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))" + t, "g"), se.rTmpl = new RegExp("<.*>|([^\\\\]|^)[{}]|" + e + ".*" + t), ue) : ae.delimiters
	}

	function p(e, t) {
		t || e === !0 || (t = e, e = void 0);
		var n, r, i, o, s = this,
			a = !t || "root" === t;
		if (e) {
			if (o = t && s.type === t && s, !o)
				if (n = s.views, s._.useKey) {
					for (r in n)
						if (o = t ? n[r].get(e, t) : n[r]) break
				} else
					for (r = 0, i = n.length; !o && i > r; r++) o = t ? n[r].get(e, t) : n[r]
		} else if (a)
			for (; s.parent;) o = s, s = s.parent;
		else
			for (; s && !o;) o = s.type === t ? s : void 0, s = s.parent;
		return o
	}

	function c() {
		var e = this.get("item");
		return e ? e.index : void 0
	}

	function f() {
		return this.index
	}

	function g(t, n) {
		var r, i, o = this,
			s = o.ctx;
		if (s && (s = s[t]), void 0 === s && (s = ie[t]), s && s._cp) {
			if (n) return i = se._ceo(s[1].deps), i.unshift(s[0].data), i._cp = !0, i;
			s = X.getCtx(s)
		}
		return s && ee(s) && !s._wrp && (r = function() {
			return s.apply(this && this !== e ? this : o, arguments)
		}, r._wrp = o, u(r, s)), r || s
	}

	function v(e) {
		return e && (e.fn ? e : this.getRsc("templates", e) || ne(e))
	}

	function h(e, t, n, r) {
		var o, s, a = "number" == typeof n && t.tmpl.bnds[n - 1],
			d = t.linkCtx;
		return void 0 !== r ? n = r = {
			props: {},
			args: [r]
		} : a && (n = a(t.data, t, se)), s = n.args[0], (e || a) && (o = d && d.tag, o || (o = u(new se._tg, {
			_: {
				inline: !d,
				bnd: a,
				unlinked: !0
			},
			tagName: ":",
			cvt: e,
			flow: !0,
			tagCtx: n
		}), d && (d.tag = o, o.linkCtx = d), n.ctx = L(n.ctx, (d ? d.view : t).ctx)), o._er = r && s, i(o, n), n.view = t, o.ctx = n.ctx || o.ctx || {}, n.ctx = void 0, s = o.cvtArgs("true" !== e && e)[0], s = a && t._.onRender ? t._.onRender(s, t, o) : s), void 0 != s ? s : ""
	}

	function m(e) {
		var t = this,
			n = t.tagCtx,
			r = n.view,
			i = n.args;
		return e = e || t.convert, e = e && ("" + e === e ? r.getRsc("converters", e) || S("Unknown converter: '" + e + "'") : e), i = i.length || n.index ? e ? i.slice() : i : [r.data], e && (e.depends && (t.depends = se.getDeps(t.depends, t, e.depends, e)), i[0] = e.apply(t, i)), i
	}

	function w(e, t) {
		for (var n, r, i = this; void 0 === n && i;) r = i.tmpl && i.tmpl[e], n = r && r[t], i = i.parent;
		return n || X[e][t]
	}

	function x(e, t, n, r, o, s) {
		t = t || W;
		var a, d, u, l, p, c, f, g, v, h, m, w, x, _, b, y, k, j, C, T = "",
			A = t.linkCtx || 0,
			V = t.ctx,
			R = n || t.tmpl,
			M = "number" == typeof r && t.tmpl.bnds[r - 1];
		for ("tag" === e._is ? (a = e, e = a.tagName, r = a.tagCtxs, u = a.template) : (d = t.getRsc("tags", e) || S("Unknown tag: {{" + e + "}} "), u = d.template), void 0 !== s ? (T += s, r = s = [{
				props: {},
				args: []
			}]) : M && (r = M(t.data, t, se)), g = r.length, f = 0; g > f; f++) h = r[f], (!A || !A.tag || f && !A.tag._.inline || a._er) && ((w = R.tmpls && h.tmpl) && (w = h.content = R.tmpls[w - 1]), h.index = f, h.tmpl = w, h.render = N, h.view = t, h.ctx = L(h.ctx, V)), (n = h.props.tmpl) && (h.tmpl = t.getTmpl(n)), a || (a = new d._ctr, x = !!a.init, a.parent = c = V && V.tag, a.tagCtxs = r, C = a.dataMap, A && (a._.inline = !1, A.tag = a, a.linkCtx = A), (a._.bnd = M || A.fn) ? a._.arrVws = {} : a.dataBoundOnly && S("{^{" + e + "}} tag must be data-bound")), r = a.tagCtxs, C = a.dataMap, h.tag = a, C && r && (h.map = r[f].map), a.flow || (m = h.ctx = h.ctx || {}, l = a.parents = m.parentTags = V && L(m.parentTags, V.parentTags) || {}, c && (l[c.tagName] = c), l[a.tagName] = m.tag = a);
		if (!(a._er = s)) {
			for (i(a, r[0]), a.rendering = {}, f = 0; g > f; f++) h = a.tagCtx = r[f], k = h.props, y = a.cvtArgs(), (_ = k.dataMap || C) && (y.length || k.dataMap) && (b = h.map, b && b.src === y[0] && !o || (b && b.src && b.unmap(), b = h.map = _.map(y[0], k, void 0, !a._.bnd)), y = [b.tgt]), a.ctx = h.ctx, f || (x && (j = a.template, a.init(h, A, a.ctx), x = void 0), A && (A.attr = a.attr = A.attr || a.attr), p = a.attr, a._.noVws = p && p !== Ne), v = void 0, a.render && (v = a.render.apply(a, y)), y.length || (y = [t]), void 0 === v && (v = h.render(y[0], !0) || (o ? void 0 : "")), T = T ? T + (v || "") : v;
			a.rendering = void 0
		}
		return a.tagCtx = r[0], a.ctx = a.tagCtx.ctx, a._.noVws && a._.inline && (T = "text" === p ? re.html(T) : ""), M && t._.onRender ? t._.onRender(T, t, a) : T
	}

	function _(e, t, n, r, i, o, s, a) {
		var d, u, l, p = this,
			f = "array" === t;
		p.content = a, p.views = f ? [] : {}, p.parent = n, p.type = t || "top", p.data = r, p.tmpl = i, l = p._ = {
			key: 0,
			useKey: f ? 0 : 1,
			id: "" + Me++,
			onRender: s,
			bnds: {}
		}, p.linked = !!s, n ? (d = n.views, u = n._, u.useKey ? (d[l.key = "_" + u.useKey++] = p, p.index = Ie, p.getIndex = c) : d.length === (l.key = p.index = o) ? d.push(p) : d.splice(o, 0, p), p.ctx = e || n.ctx) : p.ctx = e
	}

	function b(e) {
		var t, n, r;
		for (t in Ke) n = t + "s", e[n] && (r = e[n], e[n] = {}, X[n](r, e))
	}

	function y(e, t, n) {
		function i() {
			var t = this;
			t._ = {
				inline: !0,
				unlinked: !0
			}, t.tagName = e
		}
		var o, s, a, d = new se._tg;
		if (ee(t) ? t = {
				depends: t.depends,
				render: t
			} : "" + t === t && (t = {
				template: t
			}), s = t.baseTag) {
			t.flow = !!t.flow, t.baseTag = s = "" + s === s ? n && n.tags[s] || oe[s] : s, d = u(d, s);
			for (a in t) d[a] = r(s[a], t[a])
		} else d = u(d, t);
		return void 0 !== (o = d.template) && (d.template = "" + o === o ? ne[o] || ne(o) : o), d.init !== !1 && ((i.prototype = d).constructor = d._ctr = i), n && (d._parentTmpl = n), d
	}

	function k(e) {
		return this.base.apply(this, e)
	}

	function j(e, n, r, i) {
		function o(n) {
			var o, a;
			if ("" + n === n || n.nodeType > 0 && (s = n)) {
				if (!s)
					if (/^\.\/[^\\:*?"<>]*$/.test(n))(a = ne[e = e || n]) ? n = a : s = document.getElementById(n);
					else if (t.fn && !se.rTmpl.test(n)) try {
					s = t(document).find(n)[0]
				} catch (d) {}
				s && (i ? n = s.innerHTML : (o = s.getAttribute(Fe), o ? o !== Se ? (n = ne[o], delete ne[o]) : t.fn && (n = t.data(s)[Se]) : (e = e || (t.fn ? Se : n), n = j(e, s.innerHTML, r, i)), n.tmplName = e = e || o, e !== Se && (ne[e] = n), s.setAttribute(Fe, e), t.fn && t.data(s, Se, n))), s = void 0
			} else n.fn || (n = void 0);
			return n
		}
		var s, a, d = n = n || "";
		return 0 === i && (i = void 0, d = o(d)), i = i || (n.markup ? n : {}), i.tmplName = e, r && (i._parentTmpl = r), !d && n.markup && (d = o(n.markup)) && d.fn && (d = d.markup), void 0 !== d ? (d.fn || n.fn ? d.fn && (a = d) : (n = V(d, i), U(d.replace(ye, "\\$&"), n)), a || (a = u(function() {
			return a.render.apply(a, arguments)
		}, n), b(a)), e && !r && e !== Se && (Ue[e] = a), a) : void 0
	}

	function C(e, n) {
		return t.isFunction(e) ? e.call(n) : e
	}

	function T(e) {
		var t, n = [],
			r = e.length;
		for (t = 0; r > t; t++) n.push(e[t].unmap());
		return n
	}

	function A(e, n) {
		function r(e) {
			l.apply(this, e)
		}

		function i() {
			return new r(arguments)
		}

		function o(e, t) {
			var n, r, i, o, s, a = c.length;
			for (n = 0; a > n; n++) o = c[n], r = void 0, o + "" !== o && (r = o, o = r.getter), void 0 === (s = e[o]) && r && void 0 !== (i = r.defaultVal) && (s = C(i, e)), t(s, r && p[r.type], o)
		}

		function s(t) {
			t = t + "" === t ? JSON.parse(t) : t;
			var n, r, i, s = t,
				u = [];
			if (te(t)) {
				for (t = t || [], r = t.length, n = 0; r > n; n++) u.push(this.map(t[n]));
				return u._is = e, u.unmap = d, u.merge = a, u
			}
			if (t) {
				o(t, function(e, t) {
					t && (e = t.map(e)), u.push(e)
				}), s = this.apply(this, u);
				for (i in t) i === Y || _[i] || (s[i] = t[i])
			}
			return s
		}

		function a(e) {
			e = e + "" === e ? JSON.parse(e) : e;
			var t, n, r, s, a, d, u, l, p, c, f = this;
			if (te(f)) {
				for (l = {}, c = [], r = e.length, s = f.length, t = 0; r > t; t++) {
					for (p = e[t], u = !1, n = 0; s > n && !u; n++) l[n] || (d = f[n], g && (l[n] = u = g + "" === g ? p[g] && (_[g] ? d[g]() : d[g]) === p[g] : g(d, p)));
					u ? (d.merge(p), c.push(d)) : c.push(i.map(p))
				}
				return void(x ? x(f).refresh(c, !0) : f.splice.apply(f, [0, f.length].concat(c)))
			}
			o(e, function(e, t, n) {
				t ? f[n]().merge(e) : f[n](e)
			});
			for (a in e) a === Y || _[a] || (f[a] = e[a])
		}

		function d() {
			var e, n, r, i, o, s, a = this;
			if (te(a)) return T(a);
			for (e = {}, i = c.length, r = 0; i > r; r++) n = c[r], o = void 0, n + "" !== n && (o = n, n = o.getter), s = a[n](), e[n] = o && s && p[o.type] ? te(s) ? T(s) : s.unmap() : s;
			for (n in a) "_is" === n || _[n] || n === Y || "_" === n.charAt(0) && _[n.slice(1)] || t.isFunction(a[n]) || (e[n] = a[n]);
			return e
		}
		var u, l, p = this,
			c = n.getters,
			f = n.extend,
			g = n.id,
			v = t.extend({
				_is: e || "unnamed",
				unmap: d,
				merge: a
			}, f),
			h = "",
			m = "",
			w = c ? c.length : 0,
			x = t.observable,
			_ = {};
		for (r.prototype = v, u = 0; w > u; u++) ! function(e) {
			e = e.getter || e, _[e] = u + 1;
			var t = "_" + e;
			h += (h ? "," : "") + e, m += "this." + t + " = " + e + ";\n", v[e] = v[e] || function(n) {
				return arguments.length ? void(x ? x(this).setProperty(e, n) : this[t] = n) : this[t]
			}, x && (v[e].set = v[e].set || function(e) {
				this[t] = e
			})
		}(c[u]);
		return l = new Function(h, m.slice(0, -1)), l.prototype = v, v.constructor = l, i.map = s, i.getters = c, i.extend = f, i.id = g, i
	}

	function V(e, n) {
		var r, i = de._wm || {},
			o = u({
				tmpls: [],
				links: {},
				bnds: [],
				_is: "template",
				render: N
			}, n);
		return o.markup = e, n.htmlTag || (r = Ce.exec(e), o.htmlTag = r ? r[1].toLowerCase() : ""), r = i[o.htmlTag], r && r !== i.div && (o.markup = t.trim(o.markup)), o
	}

	function R(e, t) {
		function n(i, o, s) {
			var a, d, u, l;
			if (i && typeof i === Ee && !i.nodeType && !i.markup && !i.getTgt && !("viewModel" === e && i.getters || i.extend)) {
				for (u in i) n(u, i[u], o);
				return o || X
			}
			return void 0 === o && (o = i, i = void 0), i && "" + i !== i && (s = o, o = i, i = void 0), l = s ? "viewModel" === e ? s : s[r] = s[r] || {} : n, d = t.compile, null === o ? i && delete l[i] : (o = d ? d.call(l, i, o, s, 0) : o, i && (l[i] = o)), d && o && (o._is = e), o && (a = se.onStore[e]) && a(i, o, d), o
		}
		var r = e + "s";
		X[r] = n
	}

	function M(e) {
		ue[e] = function(t) {
			return arguments.length ? (ae[e] = t, ue) : ae[e]
		}
	}

	function $(e) {
		function t(t, n) {
			this.tgt = e.getTgt(t, n)
		}
		return ee(e) && (e = {
			getTgt: e
		}), e.baseMap && (e = u(u({}, e.baseMap), e)), e.map = function(e, n) {
			return new t(e, n)
		}, e
	}

	function N(e, t, n, r, i, o) {
		var s, a, d, u, l, p, c, f, g = r,
			v = "";
		if (t === !0 ? (n = t, t = void 0) : typeof t !== Ee && (t = void 0), (d = this.tag) ? (l = this, g = g || l.view, u = g.getTmpl(d.template || l.tmpl), arguments.length || (e = g)) : u = this, u) {
			if (!g && e && "view" === e._is && (g = e), g && e === g && (e = g.data), p = !g, he = he || p, g || ((t = t || {}).root = e), !he || de.useViews || u.useViews || g && g !== W) v = E(u, e, t, n, g, i, o, d);
			else {
				if (g ? (c = g.data, f = g.index, g.index = Ie) : (g = W, g.data = e, g.ctx = t), te(e) && !n)
					for (s = 0, a = e.length; a > s; s++) g.index = s, g.data = e[s], v += u.fn(e[s], g, se);
				else g.data = e, v += u.fn(e, g, se);
				g.data = c, g.index = f
			}
			p && (he = void 0)
		}
		return v
	}

	function E(e, t, n, r, i, o, s, a) {
		function d(e) {
			b = u({}, n), b[x] = e
		}
		var l, p, c, f, g, v, h, m, w, x, b, y, k = "";
		if (a && (w = a.tagName, y = a.tagCtx, n = n ? L(n, a.ctx) : a.ctx, e === i.content ? h = e !== i.ctx._wrp ? i.ctx._wrp : void 0 : e !== y.content ? e === a.template ? (h = y.tmpl, n._wrp = y.content) : h = y.content || i.content : h = i.content, y.props.link === !1 && (n = n || {}, n.link = !1), (x = y.props.itemVar) && ("~" !== x.charAt(0) && I("Use itemVar='~myItem'"), x = x.slice(1))), i && (s = s || i._.onRender, n = L(n, i.ctx)), o === !0 && (v = !0, o = 0), s && (n && n.link === !1 || a && a._.noVws) && (s = void 0), m = s, s === !0 && (m = void 0, s = i._.onRender), n = e.helpers ? L(e.helpers, n) : n, b = n, te(t) && !r)
			for (c = v ? i : void 0 !== o && i || new _(n, "array", i, t, e, o, s), i && i._.useKey && (c._.bnd = !a || a._.bnd && a), x && (c.it = x), x = c.it, l = 0, p = t.length; p > l; l++) x && d(t[l]), f = new _(b, "item", c, t[l], e, (o || 0) + l, s, h), g = e.fn(t[l], f, se), k += c._.onRender ? c._.onRender(g, f) : g;
		else x && d(t), c = v ? i : new _(b, w || "data", i, t, e, o, s, h), a && !a.flow && (c.tag = a), k += e.fn(t, c, se);
		return m ? m(k, c) : k
	}

	function F(e, t, n) {
		var r = void 0 !== n ? ee(n) ? n.call(t.data, e, t) : n || "" : "{Error: " + e.message + "}";
		return ae.onError && void 0 !== (n = ae.onError.call(t.data, e, n && r, t)) && (r = n), t && !t.linkCtx ? re.html(r) : r
	}

	function S(e) {
		throw new se.Err(e)
	}

	function I(e) {
		S("Syntax error\n" + e)
	}

	function U(e, t, n, r, i) {
		function o(t) {
			t -= v, t && m.push(e.substr(v, t).replace(_e, "\\n"))
		}

		function s(t, n) {
			t && (t += "}}", I((n ? "{{" + n + "}} block has {{/" + t + " without {{" + t : "Unmatched or missing {{/" + t) + ", in template:\n" + e))
		}

		function a(a, d, u, c, g, x, _, b, y, k, j, C) {
			(_ && d || y && !u || b && ":" === b.slice(-1) || k) && I(a), x && (g = ":", c = Ne), y = y || n && !i;
			var T = (d || n) && [
					[]
				],
				A = "",
				V = "",
				R = "",
				M = "",
				$ = "",
				N = "",
				E = "",
				F = "",
				S = !y && !g;
			u = u || (b = b || "#data", g), o(C), v = C + a.length, _ ? f && m.push(["*", "\n" + b.replace(/^:/, "ret+= ").replace(be, "$1") + ";\n"]) : u ? ("else" === u && (je.test(b) && I('for "{{else if expr}}" use "{{else expr}}"'), T = w[7] && [
				[]
			], w[8] = e.substring(w[8], C), w = h.pop(), m = w[2], S = !0), b && O(b.replace(_e, " "), T, t).replace(ke, function(e, t, n, r, i, o, s, a) {
				return r = "'" + i + "':", s ? (V += o + ",", M += "'" + a + "',") : n ? (R += r + "j._cp(" + o + ',"' + a + '",view),', N += r + "'" + a + "',") : t ? E += o : ("trigger" === i && (F += o), A += r + o + ",", $ += r + "'" + a + "',", p = p || Ve.test(i)), ""
			}).slice(0, -1), T && T[0] && T.pop(), l = [u, c || !!r || p || "", S && [], J(M || (":" === u ? "'#data'," : ""), $, N), J(V || (":" === u ? "data," : ""), A, R), E, F, T || 0], m.push(l), S && (h.push(w), w = l, w[8] = v)) : j && (s(j !== w[0] && "else" !== w[0] && j, w[0]), w[8] = e.substring(w[8], C), w = h.pop()), s(!w && j), m = w[2]
		}
		var d, u, l, p, c, f = ae.allowCode || t && t.allowCode || ue.allowCode === !0,
			g = [],
			v = 0,
			h = [],
			m = g,
			w = [, , g];
		if (f && t._is && (t.allowCode = f), n && (void 0 !== r && (e = e.slice(0, -r.length - 2) + fe), e = le + e + fe), s(h[0] && h[0][2].pop()[0]), e.replace(G, a), o(e.length), (v = g[g.length - 1]) && s("" + v !== v && +v[8] === v[8] && v[0]), n) {
			for (u = B(g, e, n), c = [], d = g.length; d--;) c.unshift(g[d][7]);
			q(u, c)
		} else u = B(g, t);
		return u
	}

	function q(e, t) {
		var n, r, i = 0,
			o = t.length;
		for (e.deps = []; o > i; i++) {
			r = t[i];
			for (n in r) "_jsvto" !== n && r[n].length && (e.deps = e.deps.concat(r[n]))
		}
		e.paths = r
	}

	function J(e, t, n) {
		return [e.slice(0, -1), t.slice(0, -1), n.slice(0, -1)]
	}

	function K(e, t) {
		return "\n	" + (t ? t + ":{" : "") + "args:[" + e[0] + "]" + (e[1] || !t ? ",\n	props:{" + e[1] + "}" : "") + (e[2] ? ",\n	ctx:{" + e[2] + "}" : "")
	}

	function O(e, t, n) {
		function r(r, m, w, x, _, b, y, k, j, C, T, A, V, R, M, $, N, E, F, S) {
			function q(e, n, r, s, a, d, p, c) {
				var f = "." === r;
				if (r && (_ = _.slice(n.length), /^\.?constructor$/.test(c || _) && I(e), f || (e = (s ? 'view.hlp("' + s + '")' : a ? "view" : "data") + (c ? (d ? "." + d : s ? "" : a ? "" : "." + r) + (p || "") : (c = s ? "" : a ? d || "" : r, "")), e += c ? "." + c : "", e = n + ("view.data" === e.slice(0, 9) ? e.slice(5) : e)), u)) {
					if (O = "linkTo" === i ? o = t._jsvto = t._jsvto || [] : l.bd, B = f && O[O.length - 1]) {
						if (B._jsv) {
							for (; B.sb;) B = B.sb;
							B.bnd && (_ = "^" + _.slice(1)), B.sb = _, B.bnd = B.bnd || "^" === _.charAt(0)
						}
					} else O.push(_);
					h[g] = F + (f ? 1 : 0)
				}
				return e
			}
			x && !k && (_ = x + _), b = b || "", w = w || m || A, _ = _ || j, C = C || N || "";
			var J, K, O, B, L, Q = ")";
			if ("[" === C && (C = "[j._sq(", Q = ")]"), !y || d || a) {
				if (u && $ && !d && !a && (!i || s || o) && (J = h[g - 1], S.length - 1 > F - (J || 0))) {
					if (J = S.slice(J, F + r.length), K !== !0)
						if (O = o || p[g - 1].bd, B = O[O.length - 1], B && B.prm) {
							for (; B.sb && B.sb.prm;) B = B.sb;
							L = B.sb = {
								path: B.sb,
								bnd: B.bnd
							}
						} else O.push(L = {
							path: O.pop()
						});
					$ = pe + ":" + J + " onerror=''" + ce, K = f[$], K || (f[$] = !0, f[$] = K = U($, n, !0)), K !== !0 && L && (L._jsv = K, L.prm = l.bd, L.bnd = L.bnd || L.path && L.path.indexOf("^") >= 0)
				}
				return d ? (d = !V, d ? r : A + '"') : a ? (a = !R, a ? r : A + '"') : (w ? (h[g] = F++, l = p[++g] = {
					bd: []
				}, w) : "") + (E ? g ? "" : (c = S.slice(c, F), (i ? (i = s = o = !1, "\b") : "\b,") + c + (c = F + r.length, u && t.push(l.bd = []), "\b")) : k ? (g && I(e), u && t.pop(), i = _, s = x, c = F + r.length, x && (u = l.bd = t[i] = []), _ + ":") : _ ? _.split("^").join(".").replace(we, q) + (C ? (l = p[++g] = {
					bd: []
				}, v[g] = Q, C) : b) : b ? b : M ? (M = v[g] || M, v[g] = !1, l = p[--g], M + (C ? (l = p[++g], v[g] = Q, C) : "")) : T ? (v[g] || I(e), ",") : m ? "" : (d = V, a = R, '"'))
			}
			I(e)
		}
		var i, o, s, a, d, u = t && t[0],
			l = {
				bd: u
			},
			p = {
				0: l
			},
			c = 0,
			f = (n ? n.links : u && (u.links = u.links || {})) || W.tmpl.links,
			g = 0,
			v = {},
			h = {},
			m = (e + (n ? " " : "")).replace(xe, r);
		return !g && m || I(e)
	}

	function B(e, t, n) {
		var r, i, o, s, a, d, u, l, p, c, f, g, v, h, m, w, x, _, b, y, k, j, C, T, A, R, M, $, N, E, F = 0,
			S = de.useViews || t.useViews || t.tags || t.templates || t.helpers || t.converters,
			U = "",
			J = {},
			O = e.length;
		for ("" + t === t ? (_ = n ? 'data-link="' + t.replace(_e, " ").slice(1, -1) + '"' : t, t = 0) : (_ = t.tmplName || "unnamed", t.allowCode && (J.allowCode = !0), t.debug && (J.debug = !0), f = t.bnds, x = t.tmpls), r = 0; O > r; r++)
			if (i = e[r], "" + i === i) U += '\n+"' + i + '"';
			else if (o = i[0], "*" === o) U += ";\n" + i[1] + "\nret=ret";
		else {
			if (s = i[1], k = !n && i[2], a = K(i[3], "params") + "}," + K(v = i[4]), $ = i[5], E = i[6], j = i[8] && i[8].replace(be, "$1"), (A = "else" === o) ? g && g.push(i[7]) : (F = 0, f && (g = i[7]) && (g = [g], F = f.push(1))), S = S || v[1] || v[2] || g || /view.(?!index)/.test(v[0]), (R = ":" === o) ? s && (o = s === Ne ? ">" : s + o) : (k && (b = V(j, J), b.tmplName = _ + "/" + o, b.useViews = b.useViews || S, B(k, b), S = b.useViews, x.push(b)), A || (y = o, S = S || o && (!oe[o] || !oe[o].flow), T = U, U = ""), C = e[r + 1], C = C && "else" === C[0]), N = $ ? ";\ntry{\nret+=" : "\n+", h = "", m = "", R && (g || E || s && s !== Ne)) {
				if (M = new Function("data,view,j,u", " // " + _ + " " + F + " " + o + "\nreturn {" + a + "};"), M._er = $, M._tag = o, n) return M;
				q(M, g), w = 'c("' + s + '",view,', c = !0, h = w + F + ",", m = ")"
			}
			if (U += R ? (n ? ($ ? "try{\n" : "") + "return " : N) + (c ? (c = void 0, S = p = !0, w + (g ? (f[F - 1] = M, F) : "{" + a + "}") + ")") : ">" === o ? (u = !0, "h(" + v[0] + ")") : (l = !0, "((v=" + v[0] + ")!=null?v:" + (n ? "null)" : '"")'))) : (d = !0, "\n{view:view,tmpl:" + (k ? x.length : "0") + "," + a + "},"), y && !C) {
				if (U = "[" + U.slice(0, -1) + "]", w = 't("' + y + '",view,this,', n || g) {
					if (U = new Function("data,view,j,u", " // " + _ + " " + F + " " + y + "\nreturn " + U + ";"), U._er = $, U._tag = y, g && q(f[F - 1] = U, g), n) return U;
					h = w + F + ",undefined,", m = ")"
				}
				U = T + N + w + (F || U) + ")", g = 0, y = 0
			}
			$ && (S = !0, U += ";\n}catch(e){ret" + (n ? "urn " : "+=") + h + "j._err(e,view," + $ + ")" + m + ";}" + (n ? "" : "ret=ret"))
		}
		U = "// " + _ + "\nvar v" + (d ? ",t=j._tag" : "") + (p ? ",c=j._cnvt" : "") + (u ? ",h=j._html" : "") + (n ? ";\n" : ',ret=""\n') + (J.debug ? "debugger;" : "") + U + (n ? "\n" : ";\nreturn ret;"), ae.debugMode !== !1 && (U = "try {\n" + U + "\n}catch(e){\nreturn j._err(e, view);\n}");
		try {
			U = new Function("data,view,j,u", U)
		} catch (L) {
			I("Compiled template code:\n\n" + U + '\n: "' + L.message + '"')
		}
		return t && (t.fn = U, t.useViews = !!S), U
	}

	function L(e, t) {
		return e && e !== t ? t ? u(u({}, t), e) : e : t && u({}, t)
	}

	function Q(e) {
		return $e[e] || ($e[e] = "&#" + e.charCodeAt(0) + ";")
	}

	function H(e) {
		var t, n, r = [];
		if (typeof e === Ee)
			for (t in e) n = e[t], t === Y || ee(n) || r.push({
				key: t,
				prop: n
			});
		return r
	}

	function P(e, n, r) {
		var i = this.jcsi && (this[0] || S('Unknown template: "' + this.selector + '"')),
			o = i.getAttribute(Fe);
		return N.call(o ? t.data(i)[Se] : ne(i), e, n, r)
	}

	function D(e) {
		return void 0 != e ? Ae.test(e) && ("" + e).replace(Re, Q) || e : ""
	}
	var Z = t === !1;
	t = t && t.fn ? t : e.jCsi;
	var z, G, W, X, Y, ee, te, ne, re, ie, oe, se, ae, de, ue, le, pe, ce, fe, ge, ve, he, me = "v0.9.80",
		we = /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
		xe = /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
		_e = /[ \t]*(\r\n|\n|\r)/g,
		be = /\\(['"])/g,
		ye = /['"\\]/g,
		ke = /(?:\x08|^)(onerror:)?(?:(~?)(([\w$_\.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,
		je = /^if\s/,
		Ce = /<(\w+)[>\s]/,
		Te = /[\x00`><"'&=]/g,
		Ae = /[\x00`><\"'&=]/,
		Ve = /^on[A-Z]|^convert(Back)?$/,
		Re = Te,
		Me = 0,
		$e = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"\x00": "&#0;",
			"'": "&#39;",
			'"': "&#34;",
			"`": "&#96;",
			"=": "&#61;"
		},
		Ne = "html",
		Ee = "object",
		Fe = "data-jsv-tmpl",
		Se = "jsvTmpl",
		Ie = "For #index in nested block use #getIndex().",
		Ue = {},
		qe = e.jsrender,
		Je = qe && t && !t.render,
		Ke = {
			template: {
				compile: j
			},
			tag: {
				compile: y
			},
			viewModel: {
				compile: A
			},
			helper: {},
			converter: {}
		};
	if (X = {
			jsviews: me,
			sub: {
				View: _,
				Err: d,
				tmplFn: U,
				parse: O,
				extend: u,
				extendCtx: L,
				syntaxErr: I,
				onStore: {},
				addSetting: M,
				settings: {
					allowCode: !1
				},
				advSet: s,
				_ths: i,
				_tg: function() {},
				_cnvt: h,
				_tag: x,
				_er: S,
				_err: F,
				_html: D,
				_cp: o,
				_sq: function(e) {
					return "constructor" === e && I(""), e
				}
			},
			settings: {
				delimiters: l,
				advanced: function(e) {
					return e ? (u(de, e), se.advSet(), ue) : de
				}
			},
			getCtx: o,
			map: $
		}, (d.prototype = new Error).constructor = d, c.depends = function() {
			return [this.get("item"), "index"]
		}, f.depends = "index", _.prototype = {
			get: p,
			getIndex: f,
			getRsc: w,
			getTmpl: v,
			hlp: g,
			_is: "view"
		}, se = X.sub, ue = X.settings, !(qe || t && t.render)) {
		for (z in Ke) R(z, Ke[z]);
		re = X.converters, ie = X.helpers, oe = X.tags, se._tg.prototype = {
			baseApply: k,
			cvtArgs: m
		}, W = se.topView = new _, t ? (t.fn.render = P, Y = t.expando, t.observable && (u(se, t.views.sub), X.map = t.views.map)) : (t = {}, Z && (e.jsrender = t), t.renderFile = t.__express = t.compile = function() {
			throw "Node.js: use npm jsrender, or jsrender-node.js"
		}, t.isFunction = function(e) {
			return "function" == typeof e
		}, t.isArray = Array.isArray || function(e) {
			return "[object Array]" === {}.toString.call(e)
		}, se._jq = function(e) {
			e !== t && (u(e, t), t = e, t.fn.render = P, delete t.jsrender, Y = t.expando)
		}, t.jsrender = me), ae = se.settings, ae.allowCode = !1, ee = t.isFunction, t.render = Ue, t.views = X, t.templates = ne = X.templates;
		for (ve in ae) M(ve);
		(ue.debugMode = function(e) {
			return void 0 === e ? ae.debugMode : (ae.debugMode = e, ae.onError = e + "" === e ? new Function("", "return '" + e + "';") : ee(e) ? e : void 0, ue)
		})(!1), de = ae.advanced = {
			useViews: !1,
			_jsv: !1
		}, oe({
			"if": {
				render: function(e) {
					var t = this,
						n = t.tagCtx,
						r = t.rendering.done || !e && (arguments.length || !n.index) ? "" : (t.rendering.done = !0, t.selected = n.index, n.render(n.view, !0));
					return r
				},
				flow: !0
			},
			"for": {
				render: function(e) {
					var t, n = !arguments.length,
						r = this,
						i = r.tagCtx,
						o = "",
						s = 0;
					return r.rendering.done || (t = n ? i.view.data : e, void 0 !== t && (o += i.render(t, n), s += te(t) ? t.length : 1), (r.rendering.done = s) && (r.selected = i.index)), o
				},
				flow: !0
			},
			props: {
				baseTag: "for",
				dataMap: $(H),
				flow: !0
			},
			include: {
				flow: !0
			},
			"*": {
				render: o,
				flow: !0
			},
			":*": {
				render: o,
				flow: !0
			},
			dbg: ie.dbg = re.dbg = a
		}), re({
			html: D,
			attr: D,
			url: function(e) {
				return void 0 != e ? encodeURI("" + e) : null === e ? e : ""
			}
		})
	}
	return ae = se.settings, te = t.isArray, ue.delimiters("{{", "}}", "^"), Je && qe.views.sub._jq(t), t || qe
}, window);
//# sourceMappingURL=jsrender.min.js.map