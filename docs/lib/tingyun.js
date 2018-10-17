!
function(n, t) {
	var e = "tingyun_stream";
	"function" == typeof define ? define(e, [], function() {
		return t(n)
	}) : "undefined" != typeof module && module.exports ? module.exports = definition(n) : n[e] = t(n)
}(window, function(n, t) {
	function e(n) {
		return n ? L ? L.stringify(n) : "_e_" : ""
	}
	function r(n) {
		return new Error(n)
	}
	function i(n, t) {
		return function() {
			n.apply(t, arguments)
		}
	}
	function a(n) {
		var t = !1;
		return function() {
			t || (t = !0, n.apply(this, arguments))
		}
	}
	function o() {
		return +new Date
	}
	function u(t) {
		return 0 === t ? t : t && !n.isNaN(t) ? 1e3 * t : 0
	}
	function s(n) {
		return n && "length" in n && "number" == typeof n.length && "function" != typeof n
	}
	function c(n, t) {
		var e, r = 0;
		if (n) if (s(n)) for (e = n.length; e > r && !t(n[r], r, n[r]); r++);
		else for (r in n) if (t(n[r], r, n[r])) break;
		return n
	}
	function d(n) {
		return O ? O(n) : n
	}
	function f(n, t) {
		return n = n || {}, c(t, function(t, e) {
			n[e] = t
		}), n
	}
	function l(n) {
		var t = C;
		if (n = f(H, n)) {
			t += "?";
			var e = [];
			c(n, function(n, t) {
				e.push(d(t) + "=" + d(n))
			}), t += e.join("&")
		}
		return t
	}
	function p(n, t, i, o, u) {
		var s = function(n, t) {
				return "post err."
			};
		if ("function" == typeof i && (u = o, o = i, i = null), u = !! u, o = a(o), t = e(t), B) {
			var d = N.sendBeacon(n, t);
			return o(d ? null : r(s("beacon", n))), d
		}
		var f;
		return P ? (f = new P, f.open("POST", n, !u), f.onload = function() {
			o(null, f.responseText)
		}, f.onerror = function(n) {
			o(n)
		}, f.send(t), !0) : R ? (f = new R, f.overrideMimeType && f.overrideMimeType("text/html"), f.onreadystatechange = function() {
			4 == f.readyState && 200 == f.status && o(null, f.responseText)
		}, f.onerror = function(t) {
			o(t || r(s("xhr", n)))
		}, f.open("POST", n, !u), c(i, function(n, t) {
			f.setRequestHeader(t, n)
		}), f.send(t), !0) : !1
	}
	function h(n) {
		return V(n) ? n : [n]
	}
	function m(n, t, e, r) {
		c(h(t), function(t) {
			n.addEventListener(t, e, r)
		})
	}
	function v(n, t, e) {
		c(h(t), function(t) {
			n.removeEventListener(t, e)
		})
	}
	function y() {
		this._callbacks = {}
	}
	function g() {
		this.handlers = {}
	}
	function b(n, t) {
		if (!n) throw r("media element required.");
		var e = this;
		e.id = b.guid++, e.el = n, e.auto = n.autoplay, e.reload = t, e.sent = !1, e.ref = x.URL + "#" + (n.id || e.id), e.handlers = new g, e.immediate = !1, e.timeStamp = {}, e.state = null, e.data = {
			rb: 0,
			df: 0,
			dc: 0,
			err: []
		}, e.duration = null, e.standard = !1, e.ifs = null, e.lw = 0, e.fw = null, e.tbt = 0, e.btm = 0
	}
	function w(n, t) {
		c(t.prototype, function(t, e) {
			n.prototype[e] = t
		})
	}
	function k(n, t) {
		var e = this;
		y.call(e), e.target = n, e.el = n.el, e.status = "playing", e.previous = e.el.currentTime || 0, c(t, function(n, t) {
			e.on(t, i(n, e))
		})
	}
	function T() {
		var n = ["video", "audio"];
		c(n, function(n) {
			c(x.getElementsByTagName(n), function(n) {
				var t = new b(n);
				t.watch(), z.push(t)
			})
		}), v(x, "DOMContentLoaded", T)
	}
	var _ = n.ty_rum = n.ty_rum || {};
	if (_.start = o(), _._Media) return _.loaded = !0, _;
	var S = ty_rum.server = {
		beacon: 'beacon.tingyun.com',
		key: 'y876Pcd-Q_U'
	};
	if (!S.key || !S.beacon) return _.invalid = !0, _;
	var x = n.document,
		D = function(n) {
			var t = n.createElement("video"),
				e = t.canPlayType;
			return e ? !! t.canPlayType("video/mp4") : !1
		}(x);
	if (!D) return _.mediaSupport = !1, _;
	var M = Object.prototype.toString,
		O = n.encodeURIComponent,
		L = n.JSON,
		N = n.navigator,
		E = [].slice,
		P = n.XDomainRequest,
		R = n.XMLHttpRequest,
		I = n.performance && n.performance.timing,
		A = function(n) {
			var t = new RegExp("^http(s)?", "i"),
				e = t.exec(n);
			return e ? e[0] : e
		}(x.URL),
		q = (A ? A : "http") + "://",
		C = q + S.beacon + "/st",
		U = 100,
		j = .35,
		B = A && N && N.sendBeacon,
		H = {
			av: "v1.0.1",
			v: "1.3.2",
			key: S.key,
			_r: o()
		},
		V = Array.isArray ? Array.isArray : function(n) {
			return "[object Array]" === M.call(n)
		};
	new RegExp("[a-z]+:\\/{2,3}(.*):(\\d+):(\\d+)");
	n.onerror = function(n, t, e, r, i) {
		(_.errors = _.errors || []).push(E.call(arguments, 0))
	}, y.prototype = {
		on: function(n, t) {
			this._callbacks[n] = this._callbacks[n] || [], this._callbacks[n].push(t)
		},
		emit: function(n) {
			if (n) for (var t = this._callbacks[n] || [], e = E.call(arguments, 1), r = 0, i = t.length; i > r; r++) t[r].apply(this, e);
			return this
		}
	};
	var X = "loadstart progress suspend stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking ended durationchange play".split(/\s+/);
	g.prototype = {
		add: function(n, t) {
			return (this.handlers[n] = this.handlers[n] || []).push(t), this
		},
		get: function(n) {
			return this.handlers[n]
		}
	}, b.guid = 0, b.prototype = {
		once: function(n, t) {
			var e = this,
				r = function() {
					var i = t.apply(this, arguments);
					return e.unbind(n, r), i
				};
			return e.bind(n, r)
		},
		bind: function(n, t) {
			var e = this;
			return m(e.el, n, t), e
		},
		unbind: function(n, t) {
			var e = this;
			return v(e.el, n, t), e
		},
		watch: function() {
			function n(n) {
				n.finish(), J(n)
			}
			function t(n) {
				if (n.ifs) {
					var t = o(),
						e = t - n.ifs;
					n.data.df = n.data.df + e, e > 1.35 * U && n.btm++, n.ifs = null
				}
			}
			function e() {
				var t = l.el;
				l.data.err.push({
					ct: t.currentTime,
					cr: t.currentSrc,
					ns: t.networkState,
					du: l.ref,
					ec: t.error && t.error.code
				}), n(l)
			}
			function r() {
				l.el.seeking ? (l.standard = !0, l.data.dc++, l.ifs = o()) : (l.standard = !1, l.el.ended || l.finish())
			}
			function a() {
				l.state.reset(), l.ifs || (l.ifs = o())
			}
			function u() {
				l.standard || t(l)
			}
			function s() {
				l.state && (l.standard ? t(l) : !l.interval && l.immediate && (l.state.reset(), l.setDeamon()))
			}
			function d() {
				l.standard || l.data.dc++
			}
			function f() {
				var t = l.el;
				t.loop && t.currentTime && t.duration && t.currentTime > t.duration - j && n(l)
			}
			var l = this;
			return c(X, function(n) {
				l.once(n, i(l.enter, l))
			}), l.handlers.add("error", e).add("pause", r).add("seeking", a).add("seeked", u).add("playing", s).add("seeking", d).add("timeupdate", f), l.once("ended", function() {
				n(l)
			}).bind("error", e).bind("pause", r).bind("seeking", a).bind("seeked", u).bind("playing", s).bind("timeupdate", f).bind("seeking", d).once("emptied", function() {
				n(l), z.push(new b(l.el, !0).watch())
			}), this
		},
		enter: function(n) {
			var t = this,
				e = t.timeStamp,
				r = t.data,
				i = o(),
				s = n.type,
				c = "loadstart";
			if (e[s] = i, e[c] || s === c || (e[c] = i), "durationchange" !== s || t.duration || (t.duration = u(t.el.duration)), "playing" === s) {
				var d = a(function(n) {
					t.fw = n
				});
				t.state = new k(t, {
					playing: function() {
						r.rb = r.rb + (o() - t.lw)
					},
					waiting: function() {
						var n = o();
						d(n), t.lw = n
					},
					end: function() {
						"waiting" === this.state && this.emit("playing")
					}
				}), t.setDeamon()
			}
			return t
		},
		setDeamon: function() {
			var n = this,
				t = n.state;
			return n.immediate ? n.interval = setInterval(function() {
				t.check()
			}, U) : setTimeout(function() {
				t.check(), n.interval = setInterval(function() {
					t.check()
				}, U), n.immediate = !0
			}, 1.7 * U), n
		},
		finish: function() {
			this.fw || (this.fw = o());
			var n = this.interval;
			return n && (this.state && this.state.emit("end"), clearInterval(n), this.interval = null), this
		},
		getPerformance: function() {
			function t(n) {
				var t = 0,
					e = n.played;
				return c(e, function(n, r) {
					var i = e.end(r);
					i > t && (t = i)
				}), t
			}
			function e(t) {
				return c(t, function(e, r) {
					null == e ? t[r] = 0 : "number" == typeof e && (n.isNaN(e) ? t[r] = 0 : t[r] = Math.max(e, 0))
				}), t
			}
			function r(n) {
				if (i.reload) return n;
				var t = I && I.navigationStart || _.start;
				return o.loadstart - t + n
			}
			var i = this,
				a = i.el,
				o = i.timeStamp;
			a.ended || (i.state && i.state.emit("end"), i.finish());
			var s = o.canplay - (i.auto ? o.loadstart : o.durationchange),
				d = u(a.duration),
				l = d > i.duration ? d : i.duration,
				p = {
					ls: o.loadstart,
					lm: o.loadedmetadata - o.loadstart,
					fb: s,
					fp: Math.min(i.fw - o.playing, l),
					mp: u(t(a)),
					pm: r(s),
					du: l,
					bc: i.tbt - i.btm,
					dbc: i.btm,
					ms: a.currentSrc,
					ref: i.ref
				};
			return f(p, i.data), e(p), p
		}
	}, k.prototype = {
		check: function() {
			var n = this,
				t = n.el.currentTime,
				e = u(t - n.previous) >= .75 * U ? "playing" : "waiting";
			e != n.status && ("waiting" === e && n.target.tbt++, n.emit(e)), n.status = e, n.previous = t
		},
		reset: function() {
			var n = this;
			n.status = "playing", n.previous = n.el.currentTime
		}
	}, w(k, y);
	var z = _.mediaList = [];
	m(x, "DOMContentLoaded", T);
	var J = function(n, t, e) {
			function r(e) {
				return function() {
					c(a, function(n) {
						n.sent = !0, c(n.handlers, function(t, e) {
							V(t) ? c(t, function(t) {
								n.unbind(e, t)
							}) : n.unbind(e, t)
						})
					}), t ? n = [] : c(z, function(t, e) {
						t === n && z.splice(e, 1)
					})
				}
			}
			var i = [],
				a = h(n);
			c(a, function(n) {
				n.sent || !n.timeStamp.play && !n.data.err.length || i.push(n.getPerformance())
			}), i.length && p(l(), {
				data: i
			}, r("POST"), e)
		},
		K = a(function() {
			J(z, !0, !0)
		});
	return m(n, ["beforeunload", "pagehide", "unload"], K), m(x, "DOMNodeInserted", function(n) {
    var t = n.target;
		if (t && "AUDIO" == t.nodeName || "VIDEO" == t.nodeName) {
			var e = new b(t);
			e.watch(), z.push(e)
		}
	}), _._Media = b, _
});