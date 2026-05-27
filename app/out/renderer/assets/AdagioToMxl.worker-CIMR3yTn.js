(function() {
	var Mt = Object.defineProperty, Ge = Object.getOwnPropertyDescriptor, Ve = Object.getOwnPropertyNames, fe = Object.prototype.hasOwnProperty, Tt = (U, F) => () => (U && (F = U(U = 0)), F), ft = (U, F) => () => (F || U((F = { exports: {} }).exports, F), F.exports), St = (U, F) => {
		let T = {};
		for (var N in U) Mt(T, N, {
			get: U[N],
			enumerable: !0
		});
		return F || Mt(T, Symbol.toStringTag, { value: "Module" }), T;
	}, $e = (U, F, T, N) => {
		if (F && typeof F == "object" || typeof F == "function") for (var A = Ve(F), i = 0, s = A.length, t; i < s; i++) t = A[i], !fe.call(U, t) && t !== T && Mt(U, t, {
			get: ((m) => F[m]).bind(null, t),
			enumerable: !(N = Ge(F, t)) || N.enumerable
		});
		return U;
	}, At = (U) => fe.call(U, "module.exports") ? U["module.exports"] : $e(Mt({}, "__esModule", { value: !0 }), U), Ye = ft(((U) => {
		U.byteLength = m, U.toByteArray = g, U.fromByteArray = u;
		for (var F = [], T = [], N = typeof Uint8Array < "u" ? Uint8Array : Array, A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, s = A.length; i < s; ++i) F[i] = A[i], T[A.charCodeAt(i)] = i;
		T[45] = 62, T[95] = 63;
		function t(o) {
			var n = o.length;
			if (n % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
			var f = o.indexOf("=");
			f === -1 && (f = n);
			var l = f === n ? 0 : 4 - f % 4;
			return [f, l];
		}
		function m(o) {
			var n = t(o), f = n[0], l = n[1];
			return (f + l) * 3 / 4 - l;
		}
		function _(o, n, f) {
			return (n + f) * 3 / 4 - f;
		}
		function g(o) {
			var n, f = t(o), l = f[0], e = f[1], d = new N(_(o, l, e)), r = 0, c = e > 0 ? l - 4 : l, w;
			for (w = 0; w < c; w += 4) n = T[o.charCodeAt(w)] << 18 | T[o.charCodeAt(w + 1)] << 12 | T[o.charCodeAt(w + 2)] << 6 | T[o.charCodeAt(w + 3)], d[r++] = n >> 16 & 255, d[r++] = n >> 8 & 255, d[r++] = n & 255;
			return e === 2 && (n = T[o.charCodeAt(w)] << 2 | T[o.charCodeAt(w + 1)] >> 4, d[r++] = n & 255), e === 1 && (n = T[o.charCodeAt(w)] << 10 | T[o.charCodeAt(w + 1)] << 4 | T[o.charCodeAt(w + 2)] >> 2, d[r++] = n >> 8 & 255, d[r++] = n & 255), d;
		}
		function a(o) {
			return F[o >> 18 & 63] + F[o >> 12 & 63] + F[o >> 6 & 63] + F[o & 63];
		}
		function p(o, n, f) {
			for (var l, e = [], d = n; d < f; d += 3) l = (o[d] << 16 & 16711680) + (o[d + 1] << 8 & 65280) + (o[d + 2] & 255), e.push(a(l));
			return e.join("");
		}
		function u(o) {
			for (var n, f = o.length, l = f % 3, e = [], d = 16383, r = 0, c = f - l; r < c; r += d) e.push(p(o, r, r + d > c ? c : r + d));
			return l === 1 ? (n = o[f - 1], e.push(F[n >> 2] + F[n << 4 & 63] + "==")) : l === 2 && (n = (o[f - 2] << 8) + o[f - 1], e.push(F[n >> 10] + F[n >> 4 & 63] + F[n << 2 & 63] + "=")), e.join("");
		}
	})), He = ft(((U) => {
		U.read = function(F, T, N, A, i) {
			var s, t, m = i * 8 - A - 1, _ = (1 << m) - 1, g = _ >> 1, a = -7, p = N ? i - 1 : 0, u = N ? -1 : 1, o = F[T + p];
			for (p += u, s = o & (1 << -a) - 1, o >>= -a, a += m; a > 0; s = s * 256 + F[T + p], p += u, a -= 8);
			for (t = s & (1 << -a) - 1, s >>= -a, a += A; a > 0; t = t * 256 + F[T + p], p += u, a -= 8);
			if (s === 0) s = 1 - g;
			else {
				if (s === _) return t ? NaN : (o ? -1 : 1) * Infinity;
				t = t + Math.pow(2, A), s = s - g;
			}
			return (o ? -1 : 1) * t * Math.pow(2, s - A);
		}, U.write = function(F, T, N, A, i, s) {
			var t, m, _, g = s * 8 - i - 1, a = (1 << g) - 1, p = a >> 1, u = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, o = A ? 0 : s - 1, n = A ? 1 : -1, f = T < 0 || T === 0 && 1 / T < 0 ? 1 : 0;
			for (T = Math.abs(T), isNaN(T) || T === Infinity ? (m = isNaN(T) ? 1 : 0, t = a) : (t = Math.floor(Math.log(T) / Math.LN2), T * (_ = Math.pow(2, -t)) < 1 && (t--, _ *= 2), t + p >= 1 ? T += u / _ : T += u * Math.pow(2, 1 - p), T * _ >= 2 && (t++, _ /= 2), t + p >= a ? (m = 0, t = a) : t + p >= 1 ? (m = (T * _ - 1) * Math.pow(2, i), t = t + p) : (m = T * Math.pow(2, p - 1) * Math.pow(2, i), t = 0)); i >= 8; F[N + o] = m & 255, o += n, m /= 256, i -= 8);
			for (t = t << i | m, g += i; g > 0; F[N + o] = t & 255, o += n, t /= 256, g -= 8);
			F[N + o - n] |= f * 128;
		};
	}));
	var Dt = ft(((U) => {
		const F = Ye(), T = He(), N = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
		U.Buffer = t, U.SlowBuffer = e, U.INSPECT_MAX_BYTES = 50;
		const A = 2147483647;
		U.kMaxLength = A, t.TYPED_ARRAY_SUPPORT = i(), !t.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
		function i() {
			try {
				const O = new Uint8Array(1), h = { foo: function() {
					return 42;
				} };
				return Object.setPrototypeOf(h, Uint8Array.prototype), Object.setPrototypeOf(O, h), O.foo() === 42;
			} catch {
				return !1;
			}
		}
		Object.defineProperty(t.prototype, "parent", {
			enumerable: !0,
			get: function() {
				if (t.isBuffer(this)) return this.buffer;
			}
		}), Object.defineProperty(t.prototype, "offset", {
			enumerable: !0,
			get: function() {
				if (t.isBuffer(this)) return this.byteOffset;
			}
		});
		function s(O) {
			if (O > A) throw new RangeError("The value \"" + O + "\" is invalid for option \"size\"");
			const h = new Uint8Array(O);
			return Object.setPrototypeOf(h, t.prototype), h;
		}
		function t(O, h, v) {
			if (typeof O == "number") {
				if (typeof h == "string") throw new TypeError("The \"string\" argument must be of type string. Received type number");
				return a(O);
			}
			return m(O, h, v);
		}
		t.poolSize = 8192;
		function m(O, h, v) {
			if (typeof O == "string") return p(O, h);
			if (ArrayBuffer.isView(O)) return o(O);
			if (O == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof O);
			if (H(O, ArrayBuffer) || O && H(O.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (H(O, SharedArrayBuffer) || O && H(O.buffer, SharedArrayBuffer))) return n(O, h, v);
			if (typeof O == "number") throw new TypeError("The \"value\" argument must not be of type number. Received type number");
			const P = O.valueOf && O.valueOf();
			if (P != null && P !== O) return t.from(P, h, v);
			const G = f(O);
			if (G) return G;
			if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof O[Symbol.toPrimitive] == "function") return t.from(O[Symbol.toPrimitive]("string"), h, v);
			throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof O);
		}
		t.from = function(O, h, v) {
			return m(O, h, v);
		}, Object.setPrototypeOf(t.prototype, Uint8Array.prototype), Object.setPrototypeOf(t, Uint8Array);
		function _(O) {
			if (typeof O != "number") throw new TypeError("\"size\" argument must be of type number");
			if (O < 0) throw new RangeError("The value \"" + O + "\" is invalid for option \"size\"");
		}
		function g(O, h, v) {
			return _(O), O <= 0 ? s(O) : h !== void 0 ? typeof v == "string" ? s(O).fill(h, v) : s(O).fill(h) : s(O);
		}
		t.alloc = function(O, h, v) {
			return g(O, h, v);
		};
		function a(O) {
			return _(O), s(O < 0 ? 0 : l(O) | 0);
		}
		t.allocUnsafe = function(O) {
			return a(O);
		}, t.allocUnsafeSlow = function(O) {
			return a(O);
		};
		function p(O, h) {
			if ((typeof h != "string" || h === "") && (h = "utf8"), !t.isEncoding(h)) throw new TypeError("Unknown encoding: " + h);
			const v = d(O, h) | 0;
			let P = s(v);
			const G = P.write(O, h);
			return G !== v && (P = P.slice(0, G)), P;
		}
		function u(O) {
			const h = O.length < 0 ? 0 : l(O.length) | 0, v = s(h);
			for (let P = 0; P < h; P += 1) v[P] = O[P] & 255;
			return v;
		}
		function o(O) {
			if (H(O, Uint8Array)) {
				const h = new Uint8Array(O);
				return n(h.buffer, h.byteOffset, h.byteLength);
			}
			return u(O);
		}
		function n(O, h, v) {
			if (h < 0 || O.byteLength < h) throw new RangeError("\"offset\" is outside of buffer bounds");
			if (O.byteLength < h + (v || 0)) throw new RangeError("\"length\" is outside of buffer bounds");
			let P;
			return h === void 0 && v === void 0 ? P = new Uint8Array(O) : v === void 0 ? P = new Uint8Array(O, h) : P = new Uint8Array(O, h, v), Object.setPrototypeOf(P, t.prototype), P;
		}
		function f(O) {
			if (t.isBuffer(O)) {
				const h = l(O.length) | 0, v = s(h);
				return v.length === 0 || O.copy(v, 0, 0, h), v;
			}
			if (O.length !== void 0) return typeof O.length != "number" || ct(O.length) ? s(0) : u(O);
			if (O.type === "Buffer" && Array.isArray(O.data)) return u(O.data);
		}
		function l(O) {
			if (O >= A) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + A.toString(16) + " bytes");
			return O | 0;
		}
		function e(O) {
			return +O != O && (O = 0), t.alloc(+O);
		}
		t.isBuffer = function(h) {
			return h != null && h._isBuffer === !0 && h !== t.prototype;
		}, t.compare = function(h, v) {
			if (H(h, Uint8Array) && (h = t.from(h, h.offset, h.byteLength)), H(v, Uint8Array) && (v = t.from(v, v.offset, v.byteLength)), !t.isBuffer(h) || !t.isBuffer(v)) throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
			if (h === v) return 0;
			let P = h.length, G = v.length;
			for (let J = 0, tt = Math.min(P, G); J < tt; ++J) if (h[J] !== v[J]) {
				P = h[J], G = v[J];
				break;
			}
			return P < G ? -1 : G < P ? 1 : 0;
		}, t.isEncoding = function(h) {
			switch (String(h).toLowerCase()) {
				case "hex":
				case "utf8":
				case "utf-8":
				case "ascii":
				case "latin1":
				case "binary":
				case "base64":
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return !0;
				default: return !1;
			}
		}, t.concat = function(h, v) {
			if (!Array.isArray(h)) throw new TypeError("\"list\" argument must be an Array of Buffers");
			if (h.length === 0) return t.alloc(0);
			let P;
			if (v === void 0) for (v = 0, P = 0; P < h.length; ++P) v += h[P].length;
			const G = t.allocUnsafe(v);
			let J = 0;
			for (P = 0; P < h.length; ++P) {
				let tt = h[P];
				if (H(tt, Uint8Array)) J + tt.length > G.length ? (t.isBuffer(tt) || (tt = t.from(tt)), tt.copy(G, J)) : Uint8Array.prototype.set.call(G, tt, J);
				else if (t.isBuffer(tt)) tt.copy(G, J);
				else throw new TypeError("\"list\" argument must be an Array of Buffers");
				J += tt.length;
			}
			return G;
		};
		function d(O, h) {
			if (t.isBuffer(O)) return O.length;
			if (ArrayBuffer.isView(O) || H(O, ArrayBuffer)) return O.byteLength;
			if (typeof O != "string") throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof O);
			const v = O.length, P = arguments.length > 2 && arguments[2] === !0;
			if (!P && v === 0) return 0;
			let G = !1;
			for (;;) switch (h) {
				case "ascii":
				case "latin1":
				case "binary": return v;
				case "utf8":
				case "utf-8": return k(O).length;
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return v * 2;
				case "hex": return v >>> 1;
				case "base64": return rt(O).length;
				default:
					if (G) return P ? -1 : k(O).length;
					h = ("" + h).toLowerCase(), G = !0;
			}
		}
		t.byteLength = d;
		function r(O, h, v) {
			let P = !1;
			if ((h === void 0 || h < 0) && (h = 0), h > this.length || ((v === void 0 || v > this.length) && (v = this.length), v <= 0) || (v >>>= 0, h >>>= 0, v <= h)) return "";
			for (O || (O = "utf8");;) switch (O) {
				case "hex": return nt(this, h, v);
				case "utf8":
				case "utf-8": return S(this, h, v);
				case "ascii": return Q(this, h, v);
				case "latin1":
				case "binary": return dt(this, h, v);
				case "base64": return L(this, h, v);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return pt(this, h, v);
				default:
					if (P) throw new TypeError("Unknown encoding: " + O);
					O = (O + "").toLowerCase(), P = !0;
			}
		}
		t.prototype._isBuffer = !0;
		function c(O, h, v) {
			const P = O[h];
			O[h] = O[v], O[v] = P;
		}
		t.prototype.swap16 = function() {
			const h = this.length;
			if (h % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
			for (let v = 0; v < h; v += 2) c(this, v, v + 1);
			return this;
		}, t.prototype.swap32 = function() {
			const h = this.length;
			if (h % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
			for (let v = 0; v < h; v += 4) c(this, v, v + 3), c(this, v + 1, v + 2);
			return this;
		}, t.prototype.swap64 = function() {
			const h = this.length;
			if (h % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
			for (let v = 0; v < h; v += 8) c(this, v, v + 7), c(this, v + 1, v + 6), c(this, v + 2, v + 5), c(this, v + 3, v + 4);
			return this;
		}, t.prototype.toString = function() {
			const h = this.length;
			return h === 0 ? "" : arguments.length === 0 ? S(this, 0, h) : r.apply(this, arguments);
		}, t.prototype.toLocaleString = t.prototype.toString, t.prototype.equals = function(h) {
			if (!t.isBuffer(h)) throw new TypeError("Argument must be a Buffer");
			return this === h ? !0 : t.compare(this, h) === 0;
		}, t.prototype.inspect = function() {
			let h = "";
			const v = U.INSPECT_MAX_BYTES;
			return h = this.toString("hex", 0, v).replace(/(.{2})/g, "$1 ").trim(), this.length > v && (h += " ... "), "<Buffer " + h + ">";
		}, N && (t.prototype[N] = t.prototype.inspect), t.prototype.compare = function(h, v, P, G, J) {
			if (H(h, Uint8Array) && (h = t.from(h, h.offset, h.byteLength)), !t.isBuffer(h)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof h);
			if (v === void 0 && (v = 0), P === void 0 && (P = h ? h.length : 0), G === void 0 && (G = 0), J === void 0 && (J = this.length), v < 0 || P > h.length || G < 0 || J > this.length) throw new RangeError("out of range index");
			if (G >= J && v >= P) return 0;
			if (G >= J) return -1;
			if (v >= P) return 1;
			if (v >>>= 0, P >>>= 0, G >>>= 0, J >>>= 0, this === h) return 0;
			let tt = J - G, gt = P - v;
			const wt = Math.min(tt, gt), bt = this.slice(G, J), vt = h.slice(v, P);
			for (let _t = 0; _t < wt; ++_t) if (bt[_t] !== vt[_t]) {
				tt = bt[_t], gt = vt[_t];
				break;
			}
			return tt < gt ? -1 : gt < tt ? 1 : 0;
		};
		function w(O, h, v, P, G) {
			if (O.length === 0) return -1;
			if (typeof v == "string" ? (P = v, v = 0) : v > 2147483647 ? v = 2147483647 : v < -2147483648 && (v = -2147483648), v = +v, ct(v) && (v = G ? 0 : O.length - 1), v < 0 && (v = O.length + v), v >= O.length) {
				if (G) return -1;
				v = O.length - 1;
			} else if (v < 0) if (G) v = 0;
			else return -1;
			if (typeof h == "string" && (h = t.from(h, P)), t.isBuffer(h)) return h.length === 0 ? -1 : x(O, h, v, P, G);
			if (typeof h == "number") return h = h & 255, typeof Uint8Array.prototype.indexOf == "function" ? G ? Uint8Array.prototype.indexOf.call(O, h, v) : Uint8Array.prototype.lastIndexOf.call(O, h, v) : x(O, [h], v, P, G);
			throw new TypeError("val must be string, number or Buffer");
		}
		function x(O, h, v, P, G) {
			let J = 1, tt = O.length, gt = h.length;
			if (P !== void 0 && (P = String(P).toLowerCase(), P === "ucs2" || P === "ucs-2" || P === "utf16le" || P === "utf-16le")) {
				if (O.length < 2 || h.length < 2) return -1;
				J = 2, tt /= 2, gt /= 2, v /= 2;
			}
			function wt(vt, _t) {
				return J === 1 ? vt[_t] : vt.readUInt16BE(_t * J);
			}
			let bt;
			if (G) {
				let vt = -1;
				for (bt = v; bt < tt; bt++) if (wt(O, bt) === wt(h, vt === -1 ? 0 : bt - vt)) {
					if (vt === -1 && (vt = bt), bt - vt + 1 === gt) return vt * J;
				} else vt !== -1 && (bt -= bt - vt), vt = -1;
			} else for (v + gt > tt && (v = tt - gt), bt = v; bt >= 0; bt--) {
				let vt = !0;
				for (let _t = 0; _t < gt; _t++) if (wt(O, bt + _t) !== wt(h, _t)) {
					vt = !1;
					break;
				}
				if (vt) return bt;
			}
			return -1;
		}
		t.prototype.includes = function(h, v, P) {
			return this.indexOf(h, v, P) !== -1;
		}, t.prototype.indexOf = function(h, v, P) {
			return w(this, h, v, P, !0);
		}, t.prototype.lastIndexOf = function(h, v, P) {
			return w(this, h, v, P, !1);
		};
		function D(O, h, v, P) {
			v = Number(v) || 0;
			const G = O.length - v;
			P ? (P = Number(P), P > G && (P = G)) : P = G;
			const J = h.length;
			P > J / 2 && (P = J / 2);
			let tt;
			for (tt = 0; tt < P; ++tt) {
				const gt = parseInt(h.substr(tt * 2, 2), 16);
				if (ct(gt)) return tt;
				O[v + tt] = gt;
			}
			return tt;
		}
		function E(O, h, v, P) {
			return it(k(h, O.length - v), O, v, P);
		}
		function z(O, h, v, P) {
			return it(C(h), O, v, P);
		}
		function K(O, h, v, P) {
			return it(rt(h), O, v, P);
		}
		function B(O, h, v, P) {
			return it(Y(h, O.length - v), O, v, P);
		}
		t.prototype.write = function(h, v, P, G) {
			if (v === void 0) G = "utf8", P = this.length, v = 0;
			else if (P === void 0 && typeof v == "string") G = v, P = this.length, v = 0;
			else if (isFinite(v)) v = v >>> 0, isFinite(P) ? (P = P >>> 0, G === void 0 && (G = "utf8")) : (G = P, P = void 0);
			else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
			const J = this.length - v;
			if ((P === void 0 || P > J) && (P = J), h.length > 0 && (P < 0 || v < 0) || v > this.length) throw new RangeError("Attempt to write outside buffer bounds");
			G || (G = "utf8");
			let tt = !1;
			for (;;) switch (G) {
				case "hex": return D(this, h, v, P);
				case "utf8":
				case "utf-8": return E(this, h, v, P);
				case "ascii":
				case "latin1":
				case "binary": return z(this, h, v, P);
				case "base64": return K(this, h, v, P);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return B(this, h, v, P);
				default:
					if (tt) throw new TypeError("Unknown encoding: " + G);
					G = ("" + G).toLowerCase(), tt = !0;
			}
		}, t.prototype.toJSON = function() {
			return {
				type: "Buffer",
				data: Array.prototype.slice.call(this._arr || this, 0)
			};
		};
		function L(O, h, v) {
			return h === 0 && v === O.length ? F.fromByteArray(O) : F.fromByteArray(O.slice(h, v));
		}
		function S(O, h, v) {
			v = Math.min(O.length, v);
			const P = [];
			let G = h;
			for (; G < v;) {
				const J = O[G];
				let tt = null, gt = J > 239 ? 4 : J > 223 ? 3 : J > 191 ? 2 : 1;
				if (G + gt <= v) {
					let wt, bt, vt, _t;
					switch (gt) {
						case 1:
							J < 128 && (tt = J);
							break;
						case 2:
							wt = O[G + 1], (wt & 192) === 128 && (_t = (J & 31) << 6 | wt & 63, _t > 127 && (tt = _t));
							break;
						case 3:
							wt = O[G + 1], bt = O[G + 2], (wt & 192) === 128 && (bt & 192) === 128 && (_t = (J & 15) << 12 | (wt & 63) << 6 | bt & 63, _t > 2047 && (_t < 55296 || _t > 57343) && (tt = _t));
							break;
						case 4: wt = O[G + 1], bt = O[G + 2], vt = O[G + 3], (wt & 192) === 128 && (bt & 192) === 128 && (vt & 192) === 128 && (_t = (J & 15) << 18 | (wt & 63) << 12 | (bt & 63) << 6 | vt & 63, _t > 65535 && _t < 1114112 && (tt = _t));
					}
				}
				tt === null ? (tt = 65533, gt = 1) : tt > 65535 && (tt -= 65536, P.push(tt >>> 10 & 1023 | 55296), tt = 56320 | tt & 1023), P.push(tt), G += gt;
			}
			return et(P);
		}
		const q = 4096;
		function et(O) {
			const h = O.length;
			if (h <= q) return String.fromCharCode.apply(String, O);
			let v = "", P = 0;
			for (; P < h;) v += String.fromCharCode.apply(String, O.slice(P, P += q));
			return v;
		}
		function Q(O, h, v) {
			let P = "";
			v = Math.min(O.length, v);
			for (let G = h; G < v; ++G) P += String.fromCharCode(O[G] & 127);
			return P;
		}
		function dt(O, h, v) {
			let P = "";
			v = Math.min(O.length, v);
			for (let G = h; G < v; ++G) P += String.fromCharCode(O[G]);
			return P;
		}
		function nt(O, h, v) {
			const P = O.length;
			(!h || h < 0) && (h = 0), (!v || v < 0 || v > P) && (v = P);
			let G = "";
			for (let J = h; J < v; ++J) G += ht[O[J]];
			return G;
		}
		function pt(O, h, v) {
			const P = O.slice(h, v);
			let G = "";
			for (let J = 0; J < P.length - 1; J += 2) G += String.fromCharCode(P[J] + P[J + 1] * 256);
			return G;
		}
		t.prototype.slice = function(h, v) {
			const P = this.length;
			h = ~~h, v = v === void 0 ? P : ~~v, h < 0 ? (h += P, h < 0 && (h = 0)) : h > P && (h = P), v < 0 ? (v += P, v < 0 && (v = 0)) : v > P && (v = P), v < h && (v = h);
			const G = this.subarray(h, v);
			return Object.setPrototypeOf(G, t.prototype), G;
		};
		function j(O, h, v) {
			if (O % 1 !== 0 || O < 0) throw new RangeError("offset is not uint");
			if (O + h > v) throw new RangeError("Trying to access beyond buffer length");
		}
		t.prototype.readUintLE = t.prototype.readUIntLE = function(h, v, P) {
			h = h >>> 0, v = v >>> 0, P || j(h, v, this.length);
			let G = this[h], J = 1, tt = 0;
			for (; ++tt < v && (J *= 256);) G += this[h + tt] * J;
			return G;
		}, t.prototype.readUintBE = t.prototype.readUIntBE = function(h, v, P) {
			h = h >>> 0, v = v >>> 0, P || j(h, v, this.length);
			let G = this[h + --v], J = 1;
			for (; v > 0 && (J *= 256);) G += this[h + --v] * J;
			return G;
		}, t.prototype.readUint8 = t.prototype.readUInt8 = function(h, v) {
			return h = h >>> 0, v || j(h, 1, this.length), this[h];
		}, t.prototype.readUint16LE = t.prototype.readUInt16LE = function(h, v) {
			return h = h >>> 0, v || j(h, 2, this.length), this[h] | this[h + 1] << 8;
		}, t.prototype.readUint16BE = t.prototype.readUInt16BE = function(h, v) {
			return h = h >>> 0, v || j(h, 2, this.length), this[h] << 8 | this[h + 1];
		}, t.prototype.readUint32LE = t.prototype.readUInt32LE = function(h, v) {
			return h = h >>> 0, v || j(h, 4, this.length), (this[h] | this[h + 1] << 8 | this[h + 2] << 16) + this[h + 3] * 16777216;
		}, t.prototype.readUint32BE = t.prototype.readUInt32BE = function(h, v) {
			return h = h >>> 0, v || j(h, 4, this.length), this[h] * 16777216 + (this[h + 1] << 16 | this[h + 2] << 8 | this[h + 3]);
		}, t.prototype.readBigUInt64LE = ot(function(h) {
			h = h >>> 0, R(h, "offset");
			const v = this[h], P = this[h + 7];
			(v === void 0 || P === void 0) && y(h, this.length - 8);
			const G = v + this[++h] * 2 ** 8 + this[++h] * 2 ** 16 + this[++h] * 2 ** 24, J = this[++h] + this[++h] * 2 ** 8 + this[++h] * 2 ** 16 + P * 2 ** 24;
			return BigInt(G) + (BigInt(J) << BigInt(32));
		}), t.prototype.readBigUInt64BE = ot(function(h) {
			h = h >>> 0, R(h, "offset");
			const v = this[h], P = this[h + 7];
			(v === void 0 || P === void 0) && y(h, this.length - 8);
			const G = v * 2 ** 24 + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + this[++h], J = this[++h] * 2 ** 24 + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + P;
			return (BigInt(G) << BigInt(32)) + BigInt(J);
		}), t.prototype.readIntLE = function(h, v, P) {
			h = h >>> 0, v = v >>> 0, P || j(h, v, this.length);
			let G = this[h], J = 1, tt = 0;
			for (; ++tt < v && (J *= 256);) G += this[h + tt] * J;
			return J *= 128, G >= J && (G -= Math.pow(2, 8 * v)), G;
		}, t.prototype.readIntBE = function(h, v, P) {
			h = h >>> 0, v = v >>> 0, P || j(h, v, this.length);
			let G = v, J = 1, tt = this[h + --G];
			for (; G > 0 && (J *= 256);) tt += this[h + --G] * J;
			return J *= 128, tt >= J && (tt -= Math.pow(2, 8 * v)), tt;
		}, t.prototype.readInt8 = function(h, v) {
			return h = h >>> 0, v || j(h, 1, this.length), this[h] & 128 ? (255 - this[h] + 1) * -1 : this[h];
		}, t.prototype.readInt16LE = function(h, v) {
			h = h >>> 0, v || j(h, 2, this.length);
			const P = this[h] | this[h + 1] << 8;
			return P & 32768 ? P | 4294901760 : P;
		}, t.prototype.readInt16BE = function(h, v) {
			h = h >>> 0, v || j(h, 2, this.length);
			const P = this[h + 1] | this[h] << 8;
			return P & 32768 ? P | 4294901760 : P;
		}, t.prototype.readInt32LE = function(h, v) {
			return h = h >>> 0, v || j(h, 4, this.length), this[h] | this[h + 1] << 8 | this[h + 2] << 16 | this[h + 3] << 24;
		}, t.prototype.readInt32BE = function(h, v) {
			return h = h >>> 0, v || j(h, 4, this.length), this[h] << 24 | this[h + 1] << 16 | this[h + 2] << 8 | this[h + 3];
		}, t.prototype.readBigInt64LE = ot(function(h) {
			h = h >>> 0, R(h, "offset");
			const v = this[h], P = this[h + 7];
			(v === void 0 || P === void 0) && y(h, this.length - 8);
			const G = this[h + 4] + this[h + 5] * 2 ** 8 + this[h + 6] * 2 ** 16 + (P << 24);
			return (BigInt(G) << BigInt(32)) + BigInt(v + this[++h] * 2 ** 8 + this[++h] * 2 ** 16 + this[++h] * 2 ** 24);
		}), t.prototype.readBigInt64BE = ot(function(h) {
			h = h >>> 0, R(h, "offset");
			const v = this[h], P = this[h + 7];
			(v === void 0 || P === void 0) && y(h, this.length - 8);
			const G = (v << 24) + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + this[++h];
			return (BigInt(G) << BigInt(32)) + BigInt(this[++h] * 2 ** 24 + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + P);
		}), t.prototype.readFloatLE = function(h, v) {
			return h = h >>> 0, v || j(h, 4, this.length), T.read(this, h, !0, 23, 4);
		}, t.prototype.readFloatBE = function(h, v) {
			return h = h >>> 0, v || j(h, 4, this.length), T.read(this, h, !1, 23, 4);
		}, t.prototype.readDoubleLE = function(h, v) {
			return h = h >>> 0, v || j(h, 8, this.length), T.read(this, h, !0, 52, 8);
		}, t.prototype.readDoubleBE = function(h, v) {
			return h = h >>> 0, v || j(h, 8, this.length), T.read(this, h, !1, 52, 8);
		};
		function $(O, h, v, P, G, J) {
			if (!t.isBuffer(O)) throw new TypeError("\"buffer\" argument must be a Buffer instance");
			if (h > G || h < J) throw new RangeError("\"value\" argument is out of bounds");
			if (v + P > O.length) throw new RangeError("Index out of range");
		}
		t.prototype.writeUintLE = t.prototype.writeUIntLE = function(h, v, P, G) {
			if (h = +h, v = v >>> 0, P = P >>> 0, !G) {
				const gt = Math.pow(2, 8 * P) - 1;
				$(this, h, v, P, gt, 0);
			}
			let J = 1, tt = 0;
			for (this[v] = h & 255; ++tt < P && (J *= 256);) this[v + tt] = h / J & 255;
			return v + P;
		}, t.prototype.writeUintBE = t.prototype.writeUIntBE = function(h, v, P, G) {
			if (h = +h, v = v >>> 0, P = P >>> 0, !G) {
				const gt = Math.pow(2, 8 * P) - 1;
				$(this, h, v, P, gt, 0);
			}
			let J = P - 1, tt = 1;
			for (this[v + J] = h & 255; --J >= 0 && (tt *= 256);) this[v + J] = h / tt & 255;
			return v + P;
		}, t.prototype.writeUint8 = t.prototype.writeUInt8 = function(h, v, P) {
			return h = +h, v = v >>> 0, P || $(this, h, v, 1, 255, 0), this[v] = h & 255, v + 1;
		}, t.prototype.writeUint16LE = t.prototype.writeUInt16LE = function(h, v, P) {
			return h = +h, v = v >>> 0, P || $(this, h, v, 2, 65535, 0), this[v] = h & 255, this[v + 1] = h >>> 8, v + 2;
		}, t.prototype.writeUint16BE = t.prototype.writeUInt16BE = function(h, v, P) {
			return h = +h, v = v >>> 0, P || $(this, h, v, 2, 65535, 0), this[v] = h >>> 8, this[v + 1] = h & 255, v + 2;
		}, t.prototype.writeUint32LE = t.prototype.writeUInt32LE = function(h, v, P) {
			return h = +h, v = v >>> 0, P || $(this, h, v, 4, 4294967295, 0), this[v + 3] = h >>> 24, this[v + 2] = h >>> 16, this[v + 1] = h >>> 8, this[v] = h & 255, v + 4;
		}, t.prototype.writeUint32BE = t.prototype.writeUInt32BE = function(h, v, P) {
			return h = +h, v = v >>> 0, P || $(this, h, v, 4, 4294967295, 0), this[v] = h >>> 24, this[v + 1] = h >>> 16, this[v + 2] = h >>> 8, this[v + 3] = h & 255, v + 4;
		};
		function lt(O, h, v, P, G) {
			M(h, P, G, O, v, 7);
			let J = Number(h & BigInt(4294967295));
			O[v++] = J, J = J >> 8, O[v++] = J, J = J >> 8, O[v++] = J, J = J >> 8, O[v++] = J;
			let tt = Number(h >> BigInt(32) & BigInt(4294967295));
			return O[v++] = tt, tt = tt >> 8, O[v++] = tt, tt = tt >> 8, O[v++] = tt, tt = tt >> 8, O[v++] = tt, v;
		}
		function st(O, h, v, P, G) {
			M(h, P, G, O, v, 7);
			let J = Number(h & BigInt(4294967295));
			O[v + 7] = J, J = J >> 8, O[v + 6] = J, J = J >> 8, O[v + 5] = J, J = J >> 8, O[v + 4] = J;
			let tt = Number(h >> BigInt(32) & BigInt(4294967295));
			return O[v + 3] = tt, tt = tt >> 8, O[v + 2] = tt, tt = tt >> 8, O[v + 1] = tt, tt = tt >> 8, O[v] = tt, v + 8;
		}
		t.prototype.writeBigUInt64LE = ot(function(h, v = 0) {
			return lt(this, h, v, BigInt(0), BigInt("0xffffffffffffffff"));
		}), t.prototype.writeBigUInt64BE = ot(function(h, v = 0) {
			return st(this, h, v, BigInt(0), BigInt("0xffffffffffffffff"));
		}), t.prototype.writeIntLE = function(h, v, P, G) {
			if (h = +h, v = v >>> 0, !G) {
				const wt = Math.pow(2, 8 * P - 1);
				$(this, h, v, P, wt - 1, -wt);
			}
			let J = 0, tt = 1, gt = 0;
			for (this[v] = h & 255; ++J < P && (tt *= 256);) h < 0 && gt === 0 && this[v + J - 1] !== 0 && (gt = 1), this[v + J] = (h / tt >> 0) - gt & 255;
			return v + P;
		}, t.prototype.writeIntBE = function(h, v, P, G) {
			if (h = +h, v = v >>> 0, !G) {
				const wt = Math.pow(2, 8 * P - 1);
				$(this, h, v, P, wt - 1, -wt);
			}
			let J = P - 1, tt = 1, gt = 0;
			for (this[v + J] = h & 255; --J >= 0 && (tt *= 256);) h < 0 && gt === 0 && this[v + J + 1] !== 0 && (gt = 1), this[v + J] = (h / tt >> 0) - gt & 255;
			return v + P;
		}, t.prototype.writeInt8 = function(h, v, P) {
			return h = +h, v = v >>> 0, P || $(this, h, v, 1, 127, -128), h < 0 && (h = 255 + h + 1), this[v] = h & 255, v + 1;
		}, t.prototype.writeInt16LE = function(h, v, P) {
			return h = +h, v = v >>> 0, P || $(this, h, v, 2, 32767, -32768), this[v] = h & 255, this[v + 1] = h >>> 8, v + 2;
		}, t.prototype.writeInt16BE = function(h, v, P) {
			return h = +h, v = v >>> 0, P || $(this, h, v, 2, 32767, -32768), this[v] = h >>> 8, this[v + 1] = h & 255, v + 2;
		}, t.prototype.writeInt32LE = function(h, v, P) {
			return h = +h, v = v >>> 0, P || $(this, h, v, 4, 2147483647, -2147483648), this[v] = h & 255, this[v + 1] = h >>> 8, this[v + 2] = h >>> 16, this[v + 3] = h >>> 24, v + 4;
		}, t.prototype.writeInt32BE = function(h, v, P) {
			return h = +h, v = v >>> 0, P || $(this, h, v, 4, 2147483647, -2147483648), h < 0 && (h = 4294967295 + h + 1), this[v] = h >>> 24, this[v + 1] = h >>> 16, this[v + 2] = h >>> 8, this[v + 3] = h & 255, v + 4;
		}, t.prototype.writeBigInt64LE = ot(function(h, v = 0) {
			return lt(this, h, v, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
		}), t.prototype.writeBigInt64BE = ot(function(h, v = 0) {
			return st(this, h, v, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
		});
		function at(O, h, v, P, G, J) {
			if (v + P > O.length) throw new RangeError("Index out of range");
			if (v < 0) throw new RangeError("Index out of range");
		}
		function yt(O, h, v, P, G) {
			return h = +h, v = v >>> 0, G || at(O, h, v, 4, 34028234663852886e22, -34028234663852886e22), T.write(O, h, v, P, 23, 4), v + 4;
		}
		t.prototype.writeFloatLE = function(h, v, P) {
			return yt(this, h, v, !0, P);
		}, t.prototype.writeFloatBE = function(h, v, P) {
			return yt(this, h, v, !1, P);
		};
		function I(O, h, v, P, G) {
			return h = +h, v = v >>> 0, G || at(O, h, v, 8, 17976931348623157e292, -17976931348623157e292), T.write(O, h, v, P, 52, 8), v + 8;
		}
		t.prototype.writeDoubleLE = function(h, v, P) {
			return I(this, h, v, !0, P);
		}, t.prototype.writeDoubleBE = function(h, v, P) {
			return I(this, h, v, !1, P);
		}, t.prototype.copy = function(h, v, P, G) {
			if (!t.isBuffer(h)) throw new TypeError("argument should be a Buffer");
			if (P || (P = 0), !G && G !== 0 && (G = this.length), v >= h.length && (v = h.length), v || (v = 0), G > 0 && G < P && (G = P), G === P || h.length === 0 || this.length === 0) return 0;
			if (v < 0) throw new RangeError("targetStart out of bounds");
			if (P < 0 || P >= this.length) throw new RangeError("Index out of range");
			if (G < 0) throw new RangeError("sourceEnd out of bounds");
			G > this.length && (G = this.length), h.length - v < G - P && (G = h.length - v + P);
			const J = G - P;
			return this === h && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(v, P, G) : Uint8Array.prototype.set.call(h, this.subarray(P, G), v), J;
		}, t.prototype.fill = function(h, v, P, G) {
			if (typeof h == "string") {
				if (typeof v == "string" ? (G = v, v = 0, P = this.length) : typeof P == "string" && (G = P, P = this.length), G !== void 0 && typeof G != "string") throw new TypeError("encoding must be a string");
				if (typeof G == "string" && !t.isEncoding(G)) throw new TypeError("Unknown encoding: " + G);
				if (h.length === 1) {
					const tt = h.charCodeAt(0);
					(G === "utf8" && tt < 128 || G === "latin1") && (h = tt);
				}
			} else typeof h == "number" ? h = h & 255 : typeof h == "boolean" && (h = Number(h));
			if (v < 0 || this.length < v || this.length < P) throw new RangeError("Out of range index");
			if (P <= v) return this;
			v = v >>> 0, P = P === void 0 ? this.length : P >>> 0, h || (h = 0);
			let J;
			if (typeof h == "number") for (J = v; J < P; ++J) this[J] = h;
			else {
				const tt = t.isBuffer(h) ? h : t.from(h, G), gt = tt.length;
				if (gt === 0) throw new TypeError("The value \"" + h + "\" is invalid for argument \"value\"");
				for (J = 0; J < P - v; ++J) this[J + v] = tt[J % gt];
			}
			return this;
		};
		const b = {};
		function W(O, h, v) {
			b[O] = class extends v {
				constructor() {
					super(), Object.defineProperty(this, "message", {
						value: h.apply(this, arguments),
						writable: !0,
						configurable: !0
					}), this.name = `${this.name} [${O}]`, this.stack, delete this.name;
				}
				get code() {
					return O;
				}
				set code(G) {
					Object.defineProperty(this, "code", {
						configurable: !0,
						enumerable: !0,
						value: G,
						writable: !0
					});
				}
				toString() {
					return `${this.name} [${O}]: ${this.message}`;
				}
			};
		}
		W("ERR_BUFFER_OUT_OF_BOUNDS", function(O) {
			return O ? `${O} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
		}, RangeError), W("ERR_INVALID_ARG_TYPE", function(O, h) {
			return `The "${O}" argument must be of type number. Received type ${typeof h}`;
		}, TypeError), W("ERR_OUT_OF_RANGE", function(O, h, v) {
			let P = `The value of "${O}" is out of range.`, G = v;
			return Number.isInteger(v) && Math.abs(v) > 2 ** 32 ? G = X(String(v)) : typeof v == "bigint" && (G = String(v), (v > BigInt(2) ** BigInt(32) || v < -(BigInt(2) ** BigInt(32))) && (G = X(G)), G += "n"), P += ` It must be ${h}. Received ${G}`, P;
		}, RangeError);
		function X(O) {
			let h = "", v = O.length;
			const P = O[0] === "-" ? 1 : 0;
			for (; v >= P + 4; v -= 3) h = `_${O.slice(v - 3, v)}${h}`;
			return `${O.slice(0, v)}${h}`;
		}
		function ut(O, h, v) {
			R(h, "offset"), (O[h] === void 0 || O[h + v] === void 0) && y(h, O.length - (v + 1));
		}
		function M(O, h, v, P, G, J) {
			if (O > v || O < h) {
				const tt = typeof h == "bigint" ? "n" : "";
				let gt;
				throw J > 3 ? h === 0 || h === BigInt(0) ? gt = `>= 0${tt} and < 2${tt} ** ${(J + 1) * 8}${tt}` : gt = `>= -(2${tt} ** ${(J + 1) * 8 - 1}${tt}) and < 2 ** ${(J + 1) * 8 - 1}${tt}` : gt = `>= ${h}${tt} and <= ${v}${tt}`, new b.ERR_OUT_OF_RANGE("value", gt, O);
			}
			ut(P, G, J);
		}
		function R(O, h) {
			if (typeof O != "number") throw new b.ERR_INVALID_ARG_TYPE(h, "number", O);
		}
		function y(O, h, v) {
			throw Math.floor(O) !== O ? (R(O, v), new b.ERR_OUT_OF_RANGE(v || "offset", "an integer", O)) : h < 0 ? new b.ERR_BUFFER_OUT_OF_BOUNDS() : new b.ERR_OUT_OF_RANGE(v || "offset", `>= ${v ? 1 : 0} and <= ${h}`, O);
		}
		const V = /[^+/0-9A-Za-z-_]/g;
		function Z(O) {
			if (O = O.split("=")[0], O = O.trim().replace(V, ""), O.length < 2) return "";
			for (; O.length % 4 !== 0;) O = O + "=";
			return O;
		}
		function k(O, h) {
			h = h || Infinity;
			let v;
			const P = O.length;
			let G = null;
			const J = [];
			for (let tt = 0; tt < P; ++tt) {
				if (v = O.charCodeAt(tt), v > 55295 && v < 57344) {
					if (!G) {
						if (v > 56319) {
							(h -= 3) > -1 && J.push(239, 191, 189);
							continue;
						} else if (tt + 1 === P) {
							(h -= 3) > -1 && J.push(239, 191, 189);
							continue;
						}
						G = v;
						continue;
					}
					if (v < 56320) {
						(h -= 3) > -1 && J.push(239, 191, 189), G = v;
						continue;
					}
					v = (G - 55296 << 10 | v - 56320) + 65536;
				} else G && (h -= 3) > -1 && J.push(239, 191, 189);
				if (G = null, v < 128) {
					if ((h -= 1) < 0) break;
					J.push(v);
				} else if (v < 2048) {
					if ((h -= 2) < 0) break;
					J.push(v >> 6 | 192, v & 63 | 128);
				} else if (v < 65536) {
					if ((h -= 3) < 0) break;
					J.push(v >> 12 | 224, v >> 6 & 63 | 128, v & 63 | 128);
				} else if (v < 1114112) {
					if ((h -= 4) < 0) break;
					J.push(v >> 18 | 240, v >> 12 & 63 | 128, v >> 6 & 63 | 128, v & 63 | 128);
				} else throw new Error("Invalid code point");
			}
			return J;
		}
		function C(O) {
			const h = [];
			for (let v = 0; v < O.length; ++v) h.push(O.charCodeAt(v) & 255);
			return h;
		}
		function Y(O, h) {
			let v, P, G;
			const J = [];
			for (let tt = 0; tt < O.length && !((h -= 2) < 0); ++tt) v = O.charCodeAt(tt), P = v >> 8, G = v % 256, J.push(G), J.push(P);
			return J;
		}
		function rt(O) {
			return F.toByteArray(Z(O));
		}
		function it(O, h, v, P) {
			let G;
			for (G = 0; G < P && !(G + v >= h.length || G >= O.length); ++G) h[G + v] = O[G];
			return G;
		}
		function H(O, h) {
			return O instanceof h || O != null && O.constructor != null && O.constructor.name != null && O.constructor.name === h.name;
		}
		function ct(O) {
			return O !== O;
		}
		const ht = (function() {
			const O = "0123456789abcdef", h = new Array(256);
			for (let v = 0; v < 16; ++v) {
				const P = v * 16;
				for (let G = 0; G < 16; ++G) h[P + G] = O[v] + O[G];
			}
			return h;
		})();
		function ot(O) {
			return typeof BigInt > "u" ? mt : O;
		}
		function mt() {
			throw new Error("BigInt not supported");
		}
	})), Ze = Dt();
	typeof globalThis.Buffer > "u" && (globalThis.Buffer = Ze.Buffer);
	var Rt = ft(((U) => {
		Object.defineProperty(U, "__esModule", { value: !0 }), U.ParseError = U.UnsupportedFormatError = void 0;
		var F = class extends Error {
			detectedFormat;
			constructor(N, A) {
				super(N), this.name = "UnsupportedFormatError", this.detectedFormat = A;
			}
		};
		U.UnsupportedFormatError = F;
		var T = class extends Error {
			constructor(N) {
				super(N), this.name = "ParseError";
			}
		};
		U.ParseError = T;
	})), le = ft(((U, F) => {
		(function(T) {
			typeof U == "object" && typeof F < "u" ? F.exports = T() : typeof define == "function" && define.amd ? define([], T) : (typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : this).JSZip = T();
		})(function() {
			return (function T(N, A, i) {
				function s(_, g) {
					if (!A[_]) {
						if (!N[_]) {
							var a = typeof require == "function" && require;
							if (!g && a) return a(_, !0);
							if (t) return t(_, !0);
							var p = /* @__PURE__ */ new Error("Cannot find module '" + _ + "'");
							throw p.code = "MODULE_NOT_FOUND", p;
						}
						var u = A[_] = { exports: {} };
						N[_][0].call(u.exports, function(o) {
							var n = N[_][1][o];
							return s(n || o);
						}, u, u.exports, T, N, A, i);
					}
					return A[_].exports;
				}
				for (var t = typeof require == "function" && require, m = 0; m < i.length; m++) s(i[m]);
				return s;
			})({
				1: [function(T, N, A) {
					"use strict";
					var i = T("./utils"), s = T("./support"), t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
					A.encode = function(m) {
						for (var _, g, a, p, u, o, n, f = [], l = 0, e = m.length, d = e, r = i.getTypeOf(m) !== "string"; l < m.length;) d = e - l, a = r ? (_ = m[l++], g = l < e ? m[l++] : 0, l < e ? m[l++] : 0) : (_ = m.charCodeAt(l++), g = l < e ? m.charCodeAt(l++) : 0, l < e ? m.charCodeAt(l++) : 0), p = _ >> 2, u = (3 & _) << 4 | g >> 4, o = 1 < d ? (15 & g) << 2 | a >> 6 : 64, n = 2 < d ? 63 & a : 64, f.push(t.charAt(p) + t.charAt(u) + t.charAt(o) + t.charAt(n));
						return f.join("");
					}, A.decode = function(m) {
						var _, g, a, p, u, o, n = 0, f = 0, l = "data:";
						if (m.substr(0, l.length) === l) throw new Error("Invalid base64 input, it looks like a data url.");
						var e, d = 3 * (m = m.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
						if (m.charAt(m.length - 1) === t.charAt(64) && d--, m.charAt(m.length - 2) === t.charAt(64) && d--, d % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
						for (e = s.uint8array ? new Uint8Array(0 | d) : new Array(0 | d); n < m.length;) _ = t.indexOf(m.charAt(n++)) << 2 | (p = t.indexOf(m.charAt(n++))) >> 4, g = (15 & p) << 4 | (u = t.indexOf(m.charAt(n++))) >> 2, a = (3 & u) << 6 | (o = t.indexOf(m.charAt(n++))), e[f++] = _, u !== 64 && (e[f++] = g), o !== 64 && (e[f++] = a);
						return e;
					};
				}, {
					"./support": 30,
					"./utils": 32
				}],
				2: [function(T, N, A) {
					"use strict";
					var i = T("./external"), s = T("./stream/DataWorker"), t = T("./stream/Crc32Probe"), m = T("./stream/DataLengthProbe");
					function _(g, a, p, u, o) {
						this.compressedSize = g, this.uncompressedSize = a, this.crc32 = p, this.compression = u, this.compressedContent = o;
					}
					_.prototype = {
						getContentWorker: function() {
							var g = new s(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new m("data_length")), a = this;
							return g.on("end", function() {
								if (this.streamInfo.data_length !== a.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
							}), g;
						},
						getCompressedWorker: function() {
							return new s(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
						}
					}, _.createWorkerFrom = function(g, a, p) {
						return g.pipe(new t()).pipe(new m("uncompressedSize")).pipe(a.compressWorker(p)).pipe(new m("compressedSize")).withStreamInfo("compression", a);
					}, N.exports = _;
				}, {
					"./external": 6,
					"./stream/Crc32Probe": 25,
					"./stream/DataLengthProbe": 26,
					"./stream/DataWorker": 27
				}],
				3: [function(T, N, A) {
					"use strict";
					var i = T("./stream/GenericWorker");
					A.STORE = {
						magic: "\0\0",
						compressWorker: function() {
							return new i("STORE compression");
						},
						uncompressWorker: function() {
							return new i("STORE decompression");
						}
					}, A.DEFLATE = T("./flate");
				}, {
					"./flate": 7,
					"./stream/GenericWorker": 28
				}],
				4: [function(T, N, A) {
					"use strict";
					var i = T("./utils"), s = (function() {
						for (var t, m = [], _ = 0; _ < 256; _++) {
							t = _;
							for (var g = 0; g < 8; g++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
							m[_] = t;
						}
						return m;
					})();
					N.exports = function(t, m) {
						return t !== void 0 && t.length ? i.getTypeOf(t) !== "string" ? (function(_, g, a, p) {
							var u = s, o = p + a;
							_ ^= -1;
							for (var n = p; n < o; n++) _ = _ >>> 8 ^ u[255 & (_ ^ g[n])];
							return -1 ^ _;
						})(0 | m, t, t.length, 0) : (function(_, g, a, p) {
							var u = s, o = p + a;
							_ ^= -1;
							for (var n = p; n < o; n++) _ = _ >>> 8 ^ u[255 & (_ ^ g.charCodeAt(n))];
							return -1 ^ _;
						})(0 | m, t, t.length, 0) : 0;
					};
				}, { "./utils": 32 }],
				5: [function(T, N, A) {
					"use strict";
					A.base64 = !1, A.binary = !1, A.dir = !1, A.createFolders = !0, A.date = null, A.compression = null, A.compressionOptions = null, A.comment = null, A.unixPermissions = null, A.dosPermissions = null;
				}, {}],
				6: [function(T, N, A) {
					"use strict";
					var i = null;
					i = typeof Promise < "u" ? Promise : T("lie"), N.exports = { Promise: i };
				}, { lie: 37 }],
				7: [function(T, N, A) {
					"use strict";
					var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = T("pako"), t = T("./utils"), m = T("./stream/GenericWorker"), _ = i ? "uint8array" : "array";
					function g(a, p) {
						m.call(this, "FlateWorker/" + a), this._pako = null, this._pakoAction = a, this._pakoOptions = p, this.meta = {};
					}
					A.magic = "\b\0", t.inherits(g, m), g.prototype.processChunk = function(a) {
						this.meta = a.meta, this._pako === null && this._createPako(), this._pako.push(t.transformTo(_, a.data), !1);
					}, g.prototype.flush = function() {
						m.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
					}, g.prototype.cleanUp = function() {
						m.prototype.cleanUp.call(this), this._pako = null;
					}, g.prototype._createPako = function() {
						this._pako = new s[this._pakoAction]({
							raw: !0,
							level: this._pakoOptions.level || -1
						});
						var a = this;
						this._pako.onData = function(p) {
							a.push({
								data: p,
								meta: a.meta
							});
						};
					}, A.compressWorker = function(a) {
						return new g("Deflate", a);
					}, A.uncompressWorker = function() {
						return new g("Inflate", {});
					};
				}, {
					"./stream/GenericWorker": 28,
					"./utils": 32,
					pako: 38
				}],
				8: [function(T, N, A) {
					"use strict";
					function i(u, o) {
						var n, f = "";
						for (n = 0; n < o; n++) f += String.fromCharCode(255 & u), u >>>= 8;
						return f;
					}
					function s(u, o, n, f, l, e) {
						var d, r, c = u.file, w = u.compression, x = e !== _.utf8encode, D = t.transformTo("string", e(c.name)), E = t.transformTo("string", _.utf8encode(c.name)), z = c.comment, K = t.transformTo("string", e(z)), B = t.transformTo("string", _.utf8encode(z)), L = E.length !== c.name.length, S = B.length !== z.length, q = "", et = "", Q = "", dt = c.dir, nt = c.date, pt = {
							crc32: 0,
							compressedSize: 0,
							uncompressedSize: 0
						};
						o && !n || (pt.crc32 = u.crc32, pt.compressedSize = u.compressedSize, pt.uncompressedSize = u.uncompressedSize);
						var j = 0;
						o && (j |= 8), x || !L && !S || (j |= 2048);
						var $ = 0, lt = 0;
						dt && ($ |= 16), l === "UNIX" ? (lt = 798, $ |= (function(at, yt) {
							var I = at;
							return at || (I = yt ? 16893 : 33204), (65535 & I) << 16;
						})(c.unixPermissions, dt)) : (lt = 20, $ |= (function(at) {
							return 63 & (at || 0);
						})(c.dosPermissions)), d = nt.getUTCHours(), d <<= 6, d |= nt.getUTCMinutes(), d <<= 5, d |= nt.getUTCSeconds() / 2, r = nt.getUTCFullYear() - 1980, r <<= 4, r |= nt.getUTCMonth() + 1, r <<= 5, r |= nt.getUTCDate(), L && (et = i(1, 1) + i(g(D), 4) + E, q += "up" + i(et.length, 2) + et), S && (Q = i(1, 1) + i(g(K), 4) + B, q += "uc" + i(Q.length, 2) + Q);
						var st = "";
						return st += `
\0`, st += i(j, 2), st += w.magic, st += i(d, 2), st += i(r, 2), st += i(pt.crc32, 4), st += i(pt.compressedSize, 4), st += i(pt.uncompressedSize, 4), st += i(D.length, 2), st += i(q.length, 2), {
							fileRecord: a.LOCAL_FILE_HEADER + st + D + q,
							dirRecord: a.CENTRAL_FILE_HEADER + i(lt, 2) + st + i(K.length, 2) + "\0\0\0\0" + i($, 4) + i(f, 4) + D + q + K
						};
					}
					var t = T("../utils"), m = T("../stream/GenericWorker"), _ = T("../utf8"), g = T("../crc32"), a = T("../signature");
					function p(u, o, n, f) {
						m.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = o, this.zipPlatform = n, this.encodeFileName = f, this.streamFiles = u, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
					}
					t.inherits(p, m), p.prototype.push = function(u) {
						var o = u.meta.percent || 0, n = this.entriesCount, f = this._sources.length;
						this.accumulate ? this.contentBuffer.push(u) : (this.bytesWritten += u.data.length, m.prototype.push.call(this, {
							data: u.data,
							meta: {
								currentFile: this.currentFile,
								percent: n ? (o + 100 * (n - f - 1)) / n : 100
							}
						}));
					}, p.prototype.openedSource = function(u) {
						this.currentSourceOffset = this.bytesWritten, this.currentFile = u.file.name;
						var o = this.streamFiles && !u.file.dir;
						if (o) {
							var n = s(u, o, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
							this.push({
								data: n.fileRecord,
								meta: { percent: 0 }
							});
						} else this.accumulate = !0;
					}, p.prototype.closedSource = function(u) {
						this.accumulate = !1;
						var o = this.streamFiles && !u.file.dir, n = s(u, o, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
						if (this.dirRecords.push(n.dirRecord), o) this.push({
							data: (function(f) {
								return a.DATA_DESCRIPTOR + i(f.crc32, 4) + i(f.compressedSize, 4) + i(f.uncompressedSize, 4);
							})(u),
							meta: { percent: 100 }
						});
						else for (this.push({
							data: n.fileRecord,
							meta: { percent: 0 }
						}); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
						this.currentFile = null;
					}, p.prototype.flush = function() {
						for (var u = this.bytesWritten, o = 0; o < this.dirRecords.length; o++) this.push({
							data: this.dirRecords[o],
							meta: { percent: 100 }
						});
						var n = this.bytesWritten - u, f = (function(l, e, d, r, c) {
							var w = t.transformTo("string", c(r));
							return a.CENTRAL_DIRECTORY_END + "\0\0\0\0" + i(l, 2) + i(l, 2) + i(e, 4) + i(d, 4) + i(w.length, 2) + w;
						})(this.dirRecords.length, n, u, this.zipComment, this.encodeFileName);
						this.push({
							data: f,
							meta: { percent: 100 }
						});
					}, p.prototype.prepareNextSource = function() {
						this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
					}, p.prototype.registerPrevious = function(u) {
						this._sources.push(u);
						var o = this;
						return u.on("data", function(n) {
							o.processChunk(n);
						}), u.on("end", function() {
							o.closedSource(o.previous.streamInfo), o._sources.length ? o.prepareNextSource() : o.end();
						}), u.on("error", function(n) {
							o.error(n);
						}), this;
					}, p.prototype.resume = function() {
						return !!m.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
					}, p.prototype.error = function(u) {
						var o = this._sources;
						if (!m.prototype.error.call(this, u)) return !1;
						for (var n = 0; n < o.length; n++) try {
							o[n].error(u);
						} catch {}
						return !0;
					}, p.prototype.lock = function() {
						m.prototype.lock.call(this);
						for (var u = this._sources, o = 0; o < u.length; o++) u[o].lock();
					}, N.exports = p;
				}, {
					"../crc32": 4,
					"../signature": 23,
					"../stream/GenericWorker": 28,
					"../utf8": 31,
					"../utils": 32
				}],
				9: [function(T, N, A) {
					"use strict";
					var i = T("../compressions"), s = T("./ZipFileWorker");
					A.generateWorker = function(t, m, _) {
						var g = new s(m.streamFiles, _, m.platform, m.encodeFileName), a = 0;
						try {
							t.forEach(function(p, u) {
								a++;
								var o = (function(e, d) {
									var r = e || d, c = i[r];
									if (!c) throw new Error(r + " is not a valid compression method !");
									return c;
								})(u.options.compression, m.compression), n = u.options.compressionOptions || m.compressionOptions || {}, f = u.dir, l = u.date;
								u._compressWorker(o, n).withStreamInfo("file", {
									name: p,
									dir: f,
									date: l,
									comment: u.comment || "",
									unixPermissions: u.unixPermissions,
									dosPermissions: u.dosPermissions
								}).pipe(g);
							}), g.entriesCount = a;
						} catch (p) {
							g.error(p);
						}
						return g;
					};
				}, {
					"../compressions": 3,
					"./ZipFileWorker": 8
				}],
				10: [function(T, N, A) {
					"use strict";
					function i() {
						if (!(this instanceof i)) return new i();
						if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
						this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function() {
							var s = new i();
							for (var t in this) typeof this[t] != "function" && (s[t] = this[t]);
							return s;
						};
					}
					(i.prototype = T("./object")).loadAsync = T("./load"), i.support = T("./support"), i.defaults = T("./defaults"), i.version = "3.10.1", i.loadAsync = function(s, t) {
						return new i().loadAsync(s, t);
					}, i.external = T("./external"), N.exports = i;
				}, {
					"./defaults": 5,
					"./external": 6,
					"./load": 11,
					"./object": 15,
					"./support": 30
				}],
				11: [function(T, N, A) {
					"use strict";
					var i = T("./utils"), s = T("./external"), t = T("./utf8"), m = T("./zipEntries"), _ = T("./stream/Crc32Probe"), g = T("./nodejsUtils");
					function a(p) {
						return new s.Promise(function(u, o) {
							var n = p.decompressed.getContentWorker().pipe(new _());
							n.on("error", function(f) {
								o(f);
							}).on("end", function() {
								n.streamInfo.crc32 !== p.decompressed.crc32 ? o(/* @__PURE__ */ new Error("Corrupted zip : CRC32 mismatch")) : u();
							}).resume();
						});
					}
					N.exports = function(p, u) {
						var o = this;
						return u = i.extend(u || {}, {
							base64: !1,
							checkCRC32: !1,
							optimizedBinaryString: !1,
							createFolders: !1,
							decodeFileName: t.utf8decode
						}), g.isNode && g.isStream(p) ? s.Promise.reject(/* @__PURE__ */ new Error("JSZip can't accept a stream when loading a zip file.")) : i.prepareContent("the loaded zip file", p, !0, u.optimizedBinaryString, u.base64).then(function(n) {
							var f = new m(u);
							return f.load(n), f;
						}).then(function(n) {
							var f = [s.Promise.resolve(n)], l = n.files;
							if (u.checkCRC32) for (var e = 0; e < l.length; e++) f.push(a(l[e]));
							return s.Promise.all(f);
						}).then(function(n) {
							for (var f = n.shift(), l = f.files, e = 0; e < l.length; e++) {
								var d = l[e], r = d.fileNameStr, c = i.resolve(d.fileNameStr);
								o.file(c, d.decompressed, {
									binary: !0,
									optimizedBinaryString: !0,
									date: d.date,
									dir: d.dir,
									comment: d.fileCommentStr.length ? d.fileCommentStr : null,
									unixPermissions: d.unixPermissions,
									dosPermissions: d.dosPermissions,
									createFolders: u.createFolders
								}), d.dir || (o.file(c).unsafeOriginalName = r);
							}
							return f.zipComment.length && (o.comment = f.zipComment), o;
						});
					};
				}, {
					"./external": 6,
					"./nodejsUtils": 14,
					"./stream/Crc32Probe": 25,
					"./utf8": 31,
					"./utils": 32,
					"./zipEntries": 33
				}],
				12: [function(T, N, A) {
					"use strict";
					var i = T("../utils"), s = T("../stream/GenericWorker");
					function t(m, _) {
						s.call(this, "Nodejs stream input adapter for " + m), this._upstreamEnded = !1, this._bindStream(_);
					}
					i.inherits(t, s), t.prototype._bindStream = function(m) {
						var _ = this;
						(this._stream = m).pause(), m.on("data", function(g) {
							_.push({
								data: g,
								meta: { percent: 0 }
							});
						}).on("error", function(g) {
							_.isPaused ? this.generatedError = g : _.error(g);
						}).on("end", function() {
							_.isPaused ? _._upstreamEnded = !0 : _.end();
						});
					}, t.prototype.pause = function() {
						return !!s.prototype.pause.call(this) && (this._stream.pause(), !0);
					}, t.prototype.resume = function() {
						return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
					}, N.exports = t;
				}, {
					"../stream/GenericWorker": 28,
					"../utils": 32
				}],
				13: [function(T, N, A) {
					"use strict";
					var i = T("readable-stream").Readable;
					function s(t, m, _) {
						i.call(this, m), this._helper = t;
						var g = this;
						t.on("data", function(a, p) {
							g.push(a) || g._helper.pause(), _ && _(p);
						}).on("error", function(a) {
							g.emit("error", a);
						}).on("end", function() {
							g.push(null);
						});
					}
					T("../utils").inherits(s, i), s.prototype._read = function() {
						this._helper.resume();
					}, N.exports = s;
				}, {
					"../utils": 32,
					"readable-stream": 16
				}],
				14: [function(T, N, A) {
					"use strict";
					N.exports = {
						isNode: typeof Buffer < "u",
						newBufferFrom: function(i, s) {
							if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(i, s);
							if (typeof i == "number") throw new Error("The \"data\" argument must not be a number");
							return new Buffer(i, s);
						},
						allocBuffer: function(i) {
							if (Buffer.alloc) return Buffer.alloc(i);
							var s = new Buffer(i);
							return s.fill(0), s;
						},
						isBuffer: function(i) {
							return Buffer.isBuffer(i);
						},
						isStream: function(i) {
							return i && typeof i.on == "function" && typeof i.pause == "function" && typeof i.resume == "function";
						}
					};
				}, {}],
				15: [function(T, N, A) {
					"use strict";
					function i(r, c, w) {
						var x, D = t.getTypeOf(c), E = t.extend(w || {}, g);
						E.date = E.date || /* @__PURE__ */ new Date(), E.compression !== null && (E.compression = E.compression.toUpperCase()), typeof E.unixPermissions == "string" && (E.unixPermissions = parseInt(E.unixPermissions, 8)), E.unixPermissions && 16384 & E.unixPermissions && (E.dir = !0), E.dosPermissions && 16 & E.dosPermissions && (E.dir = !0), E.dir && (r = l(r)), E.createFolders && (x = f(r)) && e.call(this, x, !0);
						var z = D === "string" && E.binary === !1 && E.base64 === !1;
						w && w.binary !== void 0 || (E.binary = !z), (c instanceof a && c.uncompressedSize === 0 || E.dir || !c || c.length === 0) && (E.base64 = !1, E.binary = !0, c = "", E.compression = "STORE", D = "string");
						var K = null;
						K = c instanceof a || c instanceof m ? c : o.isNode && o.isStream(c) ? new n(r, c) : t.prepareContent(r, c, E.binary, E.optimizedBinaryString, E.base64);
						var B = new p(r, K, E);
						this.files[r] = B;
					}
					var s = T("./utf8"), t = T("./utils"), m = T("./stream/GenericWorker"), _ = T("./stream/StreamHelper"), g = T("./defaults"), a = T("./compressedObject"), p = T("./zipObject"), u = T("./generate"), o = T("./nodejsUtils"), n = T("./nodejs/NodejsStreamInputAdapter"), f = function(r) {
						r.slice(-1) === "/" && (r = r.substring(0, r.length - 1));
						var c = r.lastIndexOf("/");
						return 0 < c ? r.substring(0, c) : "";
					}, l = function(r) {
						return r.slice(-1) !== "/" && (r += "/"), r;
					}, e = function(r, c) {
						return c = c !== void 0 ? c : g.createFolders, r = l(r), this.files[r] || i.call(this, r, null, {
							dir: !0,
							createFolders: c
						}), this.files[r];
					};
					function d(r) {
						return Object.prototype.toString.call(r) === "[object RegExp]";
					}
					N.exports = {
						load: function() {
							throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
						},
						forEach: function(r) {
							var c, w, x;
							for (c in this.files) x = this.files[c], (w = c.slice(this.root.length, c.length)) && c.slice(0, this.root.length) === this.root && r(w, x);
						},
						filter: function(r) {
							var c = [];
							return this.forEach(function(w, x) {
								r(w, x) && c.push(x);
							}), c;
						},
						file: function(r, c, w) {
							if (arguments.length !== 1) return r = this.root + r, i.call(this, r, c, w), this;
							if (d(r)) {
								var x = r;
								return this.filter(function(E, z) {
									return !z.dir && x.test(E);
								});
							}
							var D = this.files[this.root + r];
							return D && !D.dir ? D : null;
						},
						folder: function(r) {
							if (!r) return this;
							if (d(r)) return this.filter(function(D, E) {
								return E.dir && r.test(D);
							});
							var c = this.root + r, w = e.call(this, c), x = this.clone();
							return x.root = w.name, x;
						},
						remove: function(r) {
							r = this.root + r;
							var c = this.files[r];
							if (c || (r.slice(-1) !== "/" && (r += "/"), c = this.files[r]), c && !c.dir) delete this.files[r];
							else for (var w = this.filter(function(D, E) {
								return E.name.slice(0, r.length) === r;
							}), x = 0; x < w.length; x++) delete this.files[w[x].name];
							return this;
						},
						generate: function() {
							throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
						},
						generateInternalStream: function(r) {
							var c, w = {};
							try {
								if ((w = t.extend(r || {}, {
									streamFiles: !1,
									compression: "STORE",
									compressionOptions: null,
									type: "",
									platform: "DOS",
									comment: null,
									mimeType: "application/zip",
									encodeFileName: s.utf8encode
								})).type = w.type.toLowerCase(), w.compression = w.compression.toUpperCase(), w.type === "binarystring" && (w.type = "string"), !w.type) throw new Error("No output type specified.");
								t.checkSupport(w.type), w.platform !== "darwin" && w.platform !== "freebsd" && w.platform !== "linux" && w.platform !== "sunos" || (w.platform = "UNIX"), w.platform === "win32" && (w.platform = "DOS");
								var x = w.comment || this.comment || "";
								c = u.generateWorker(this, w, x);
							} catch (D) {
								(c = new m("error")).error(D);
							}
							return new _(c, w.type || "string", w.mimeType);
						},
						generateAsync: function(r, c) {
							return this.generateInternalStream(r).accumulate(c);
						},
						generateNodeStream: function(r, c) {
							return (r = r || {}).type || (r.type = "nodebuffer"), this.generateInternalStream(r).toNodejsStream(c);
						}
					};
				}, {
					"./compressedObject": 2,
					"./defaults": 5,
					"./generate": 9,
					"./nodejs/NodejsStreamInputAdapter": 12,
					"./nodejsUtils": 14,
					"./stream/GenericWorker": 28,
					"./stream/StreamHelper": 29,
					"./utf8": 31,
					"./utils": 32,
					"./zipObject": 35
				}],
				16: [function(T, N, A) {
					"use strict";
					N.exports = T("stream");
				}, { stream: void 0 }],
				17: [function(T, N, A) {
					"use strict";
					var i = T("./DataReader");
					function s(t) {
						i.call(this, t);
						for (var m = 0; m < this.data.length; m++) t[m] = 255 & t[m];
					}
					T("../utils").inherits(s, i), s.prototype.byteAt = function(t) {
						return this.data[this.zero + t];
					}, s.prototype.lastIndexOfSignature = function(t) {
						for (var m = t.charCodeAt(0), _ = t.charCodeAt(1), g = t.charCodeAt(2), a = t.charCodeAt(3), p = this.length - 4; 0 <= p; --p) if (this.data[p] === m && this.data[p + 1] === _ && this.data[p + 2] === g && this.data[p + 3] === a) return p - this.zero;
						return -1;
					}, s.prototype.readAndCheckSignature = function(t) {
						var m = t.charCodeAt(0), _ = t.charCodeAt(1), g = t.charCodeAt(2), a = t.charCodeAt(3), p = this.readData(4);
						return m === p[0] && _ === p[1] && g === p[2] && a === p[3];
					}, s.prototype.readData = function(t) {
						if (this.checkOffset(t), t === 0) return [];
						var m = this.data.slice(this.zero + this.index, this.zero + this.index + t);
						return this.index += t, m;
					}, N.exports = s;
				}, {
					"../utils": 32,
					"./DataReader": 18
				}],
				18: [function(T, N, A) {
					"use strict";
					var i = T("../utils");
					function s(t) {
						this.data = t, this.length = t.length, this.index = 0, this.zero = 0;
					}
					s.prototype = {
						checkOffset: function(t) {
							this.checkIndex(this.index + t);
						},
						checkIndex: function(t) {
							if (this.length < this.zero + t || t < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + t + "). Corrupted zip ?");
						},
						setIndex: function(t) {
							this.checkIndex(t), this.index = t;
						},
						skip: function(t) {
							this.setIndex(this.index + t);
						},
						byteAt: function() {},
						readInt: function(t) {
							var m, _ = 0;
							for (this.checkOffset(t), m = this.index + t - 1; m >= this.index; m--) _ = (_ << 8) + this.byteAt(m);
							return this.index += t, _;
						},
						readString: function(t) {
							return i.transformTo("string", this.readData(t));
						},
						readData: function() {},
						lastIndexOfSignature: function() {},
						readAndCheckSignature: function() {},
						readDate: function() {
							var t = this.readInt(4);
							return new Date(Date.UTC(1980 + (t >> 25 & 127), (t >> 21 & 15) - 1, t >> 16 & 31, t >> 11 & 31, t >> 5 & 63, (31 & t) << 1));
						}
					}, N.exports = s;
				}, { "../utils": 32 }],
				19: [function(T, N, A) {
					"use strict";
					var i = T("./Uint8ArrayReader");
					function s(t) {
						i.call(this, t);
					}
					T("../utils").inherits(s, i), s.prototype.readData = function(t) {
						this.checkOffset(t);
						var m = this.data.slice(this.zero + this.index, this.zero + this.index + t);
						return this.index += t, m;
					}, N.exports = s;
				}, {
					"../utils": 32,
					"./Uint8ArrayReader": 21
				}],
				20: [function(T, N, A) {
					"use strict";
					var i = T("./DataReader");
					function s(t) {
						i.call(this, t);
					}
					T("../utils").inherits(s, i), s.prototype.byteAt = function(t) {
						return this.data.charCodeAt(this.zero + t);
					}, s.prototype.lastIndexOfSignature = function(t) {
						return this.data.lastIndexOf(t) - this.zero;
					}, s.prototype.readAndCheckSignature = function(t) {
						return t === this.readData(4);
					}, s.prototype.readData = function(t) {
						this.checkOffset(t);
						var m = this.data.slice(this.zero + this.index, this.zero + this.index + t);
						return this.index += t, m;
					}, N.exports = s;
				}, {
					"../utils": 32,
					"./DataReader": 18
				}],
				21: [function(T, N, A) {
					"use strict";
					var i = T("./ArrayReader");
					function s(t) {
						i.call(this, t);
					}
					T("../utils").inherits(s, i), s.prototype.readData = function(t) {
						if (this.checkOffset(t), t === 0) return new Uint8Array(0);
						var m = this.data.subarray(this.zero + this.index, this.zero + this.index + t);
						return this.index += t, m;
					}, N.exports = s;
				}, {
					"../utils": 32,
					"./ArrayReader": 17
				}],
				22: [function(T, N, A) {
					"use strict";
					var i = T("../utils"), s = T("../support"), t = T("./ArrayReader"), m = T("./StringReader"), _ = T("./NodeBufferReader"), g = T("./Uint8ArrayReader");
					N.exports = function(a) {
						var p = i.getTypeOf(a);
						return i.checkSupport(p), p !== "string" || s.uint8array ? p === "nodebuffer" ? new _(a) : s.uint8array ? new g(i.transformTo("uint8array", a)) : new t(i.transformTo("array", a)) : new m(a);
					};
				}, {
					"../support": 30,
					"../utils": 32,
					"./ArrayReader": 17,
					"./NodeBufferReader": 19,
					"./StringReader": 20,
					"./Uint8ArrayReader": 21
				}],
				23: [function(T, N, A) {
					"use strict";
					A.LOCAL_FILE_HEADER = "PK", A.CENTRAL_FILE_HEADER = "PK", A.CENTRAL_DIRECTORY_END = "PK", A.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", A.ZIP64_CENTRAL_DIRECTORY_END = "PK", A.DATA_DESCRIPTOR = "PK\x07\b";
				}, {}],
				24: [function(T, N, A) {
					"use strict";
					var i = T("./GenericWorker"), s = T("../utils");
					function t(m) {
						i.call(this, "ConvertWorker to " + m), this.destType = m;
					}
					s.inherits(t, i), t.prototype.processChunk = function(m) {
						this.push({
							data: s.transformTo(this.destType, m.data),
							meta: m.meta
						});
					}, N.exports = t;
				}, {
					"../utils": 32,
					"./GenericWorker": 28
				}],
				25: [function(T, N, A) {
					"use strict";
					var i = T("./GenericWorker"), s = T("../crc32");
					function t() {
						i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
					}
					T("../utils").inherits(t, i), t.prototype.processChunk = function(m) {
						this.streamInfo.crc32 = s(m.data, this.streamInfo.crc32 || 0), this.push(m);
					}, N.exports = t;
				}, {
					"../crc32": 4,
					"../utils": 32,
					"./GenericWorker": 28
				}],
				26: [function(T, N, A) {
					"use strict";
					var i = T("../utils"), s = T("./GenericWorker");
					function t(m) {
						s.call(this, "DataLengthProbe for " + m), this.propName = m, this.withStreamInfo(m, 0);
					}
					i.inherits(t, s), t.prototype.processChunk = function(m) {
						if (m) {
							var _ = this.streamInfo[this.propName] || 0;
							this.streamInfo[this.propName] = _ + m.data.length;
						}
						s.prototype.processChunk.call(this, m);
					}, N.exports = t;
				}, {
					"../utils": 32,
					"./GenericWorker": 28
				}],
				27: [function(T, N, A) {
					"use strict";
					var i = T("../utils"), s = T("./GenericWorker");
					function t(m) {
						s.call(this, "DataWorker");
						var _ = this;
						this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, m.then(function(g) {
							_.dataIsReady = !0, _.data = g, _.max = g && g.length || 0, _.type = i.getTypeOf(g), _.isPaused || _._tickAndRepeat();
						}, function(g) {
							_.error(g);
						});
					}
					i.inherits(t, s), t.prototype.cleanUp = function() {
						s.prototype.cleanUp.call(this), this.data = null;
					}, t.prototype.resume = function() {
						return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, i.delay(this._tickAndRepeat, [], this)), !0);
					}, t.prototype._tickAndRepeat = function() {
						this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
					}, t.prototype._tick = function() {
						if (this.isPaused || this.isFinished) return !1;
						var m = null, _ = Math.min(this.max, this.index + 16384);
						if (this.index >= this.max) return this.end();
						switch (this.type) {
							case "string":
								m = this.data.substring(this.index, _);
								break;
							case "uint8array":
								m = this.data.subarray(this.index, _);
								break;
							case "array":
							case "nodebuffer": m = this.data.slice(this.index, _);
						}
						return this.index = _, this.push({
							data: m,
							meta: { percent: this.max ? this.index / this.max * 100 : 0 }
						});
					}, N.exports = t;
				}, {
					"../utils": 32,
					"./GenericWorker": 28
				}],
				28: [function(T, N, A) {
					"use strict";
					function i(s) {
						this.name = s || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
							data: [],
							end: [],
							error: []
						}, this.previous = null;
					}
					i.prototype = {
						push: function(s) {
							this.emit("data", s);
						},
						end: function() {
							if (this.isFinished) return !1;
							this.flush();
							try {
								this.emit("end"), this.cleanUp(), this.isFinished = !0;
							} catch (s) {
								this.emit("error", s);
							}
							return !0;
						},
						error: function(s) {
							return !this.isFinished && (this.isPaused ? this.generatedError = s : (this.isFinished = !0, this.emit("error", s), this.previous && this.previous.error(s), this.cleanUp()), !0);
						},
						on: function(s, t) {
							return this._listeners[s].push(t), this;
						},
						cleanUp: function() {
							this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
						},
						emit: function(s, t) {
							if (this._listeners[s]) for (var m = 0; m < this._listeners[s].length; m++) this._listeners[s][m].call(this, t);
						},
						pipe: function(s) {
							return s.registerPrevious(this);
						},
						registerPrevious: function(s) {
							if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
							this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
							var t = this;
							return s.on("data", function(m) {
								t.processChunk(m);
							}), s.on("end", function() {
								t.end();
							}), s.on("error", function(m) {
								t.error(m);
							}), this;
						},
						pause: function() {
							return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
						},
						resume: function() {
							if (!this.isPaused || this.isFinished) return !1;
							var s = this.isPaused = !1;
							return this.generatedError && (this.error(this.generatedError), s = !0), this.previous && this.previous.resume(), !s;
						},
						flush: function() {},
						processChunk: function(s) {
							this.push(s);
						},
						withStreamInfo: function(s, t) {
							return this.extraStreamInfo[s] = t, this.mergeStreamInfo(), this;
						},
						mergeStreamInfo: function() {
							for (var s in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, s) && (this.streamInfo[s] = this.extraStreamInfo[s]);
						},
						lock: function() {
							if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
							this.isLocked = !0, this.previous && this.previous.lock();
						},
						toString: function() {
							var s = "Worker " + this.name;
							return this.previous ? this.previous + " -> " + s : s;
						}
					}, N.exports = i;
				}, {}],
				29: [function(T, N, A) {
					"use strict";
					var i = T("../utils"), s = T("./ConvertWorker"), t = T("./GenericWorker"), m = T("../base64"), _ = T("../support"), g = T("../external"), a = null;
					if (_.nodestream) try {
						a = T("../nodejs/NodejsStreamOutputAdapter");
					} catch {}
					function p(o, n) {
						return new g.Promise(function(f, l) {
							var e = [], d = o._internalType, r = o._outputType, c = o._mimeType;
							o.on("data", function(w, x) {
								e.push(w), n && n(x);
							}).on("error", function(w) {
								e = [], l(w);
							}).on("end", function() {
								try {
									f((function(w, x, D) {
										switch (w) {
											case "blob": return i.newBlob(i.transformTo("arraybuffer", x), D);
											case "base64": return m.encode(x);
											default: return i.transformTo(w, x);
										}
									})(r, (function(w, x) {
										var D, E = 0, z = null, K = 0;
										for (D = 0; D < x.length; D++) K += x[D].length;
										switch (w) {
											case "string": return x.join("");
											case "array": return Array.prototype.concat.apply([], x);
											case "uint8array":
												for (z = new Uint8Array(K), D = 0; D < x.length; D++) z.set(x[D], E), E += x[D].length;
												return z;
											case "nodebuffer": return Buffer.concat(x);
											default: throw new Error("concat : unsupported type '" + w + "'");
										}
									})(d, e), c));
								} catch (w) {
									l(w);
								}
								e = [];
							}).resume();
						});
					}
					function u(o, n, f) {
						var l = n;
						switch (n) {
							case "blob":
							case "arraybuffer":
								l = "uint8array";
								break;
							case "base64": l = "string";
						}
						try {
							this._internalType = l, this._outputType = n, this._mimeType = f, i.checkSupport(l), this._worker = o.pipe(new s(l)), o.lock();
						} catch (e) {
							this._worker = new t("error"), this._worker.error(e);
						}
					}
					u.prototype = {
						accumulate: function(o) {
							return p(this, o);
						},
						on: function(o, n) {
							var f = this;
							return o === "data" ? this._worker.on(o, function(l) {
								n.call(f, l.data, l.meta);
							}) : this._worker.on(o, function() {
								i.delay(n, arguments, f);
							}), this;
						},
						resume: function() {
							return i.delay(this._worker.resume, [], this._worker), this;
						},
						pause: function() {
							return this._worker.pause(), this;
						},
						toNodejsStream: function(o) {
							if (i.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
							return new a(this, { objectMode: this._outputType !== "nodebuffer" }, o);
						}
					}, N.exports = u;
				}, {
					"../base64": 1,
					"../external": 6,
					"../nodejs/NodejsStreamOutputAdapter": 13,
					"../support": 30,
					"../utils": 32,
					"./ConvertWorker": 24,
					"./GenericWorker": 28
				}],
				30: [function(T, N, A) {
					"use strict";
					if (A.base64 = !0, A.array = !0, A.string = !0, A.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", A.nodebuffer = typeof Buffer < "u", A.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") A.blob = !1;
					else {
						var i = /* @__PURE__ */ new ArrayBuffer(0);
						try {
							A.blob = new Blob([i], { type: "application/zip" }).size === 0;
						} catch {
							try {
								var s = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
								s.append(i), A.blob = s.getBlob("application/zip").size === 0;
							} catch {
								A.blob = !1;
							}
						}
					}
					try {
						A.nodestream = !!T("readable-stream").Readable;
					} catch {
						A.nodestream = !1;
					}
				}, { "readable-stream": 16 }],
				31: [function(T, N, A) {
					"use strict";
					for (var i = T("./utils"), s = T("./support"), t = T("./nodejsUtils"), m = T("./stream/GenericWorker"), _ = new Array(256), g = 0; g < 256; g++) _[g] = 252 <= g ? 6 : 248 <= g ? 5 : 240 <= g ? 4 : 224 <= g ? 3 : 192 <= g ? 2 : 1;
					_[254] = _[254] = 1;
					function a() {
						m.call(this, "utf-8 decode"), this.leftOver = null;
					}
					function p() {
						m.call(this, "utf-8 encode");
					}
					A.utf8encode = function(u) {
						return s.nodebuffer ? t.newBufferFrom(u, "utf-8") : (function(o) {
							var n, f, l, e, d, r = o.length, c = 0;
							for (e = 0; e < r; e++) (64512 & (f = o.charCodeAt(e))) == 55296 && e + 1 < r && (64512 & (l = o.charCodeAt(e + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (l - 56320), e++), c += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
							for (n = s.uint8array ? new Uint8Array(c) : new Array(c), e = d = 0; d < c; e++) (64512 & (f = o.charCodeAt(e))) == 55296 && e + 1 < r && (64512 & (l = o.charCodeAt(e + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (l - 56320), e++), f < 128 ? n[d++] = f : (f < 2048 ? n[d++] = 192 | f >>> 6 : (f < 65536 ? n[d++] = 224 | f >>> 12 : (n[d++] = 240 | f >>> 18, n[d++] = 128 | f >>> 12 & 63), n[d++] = 128 | f >>> 6 & 63), n[d++] = 128 | 63 & f);
							return n;
						})(u);
					}, A.utf8decode = function(u) {
						return s.nodebuffer ? i.transformTo("nodebuffer", u).toString("utf-8") : (function(o) {
							var n, f, l, e, d = o.length, r = new Array(2 * d);
							for (n = f = 0; n < d;) if ((l = o[n++]) < 128) r[f++] = l;
							else if (4 < (e = _[l])) r[f++] = 65533, n += e - 1;
							else {
								for (l &= e === 2 ? 31 : e === 3 ? 15 : 7; 1 < e && n < d;) l = l << 6 | 63 & o[n++], e--;
								1 < e ? r[f++] = 65533 : l < 65536 ? r[f++] = l : (l -= 65536, r[f++] = 55296 | l >> 10 & 1023, r[f++] = 56320 | 1023 & l);
							}
							return r.length !== f && (r.subarray ? r = r.subarray(0, f) : r.length = f), i.applyFromCharCode(r);
						})(u = i.transformTo(s.uint8array ? "uint8array" : "array", u));
					}, i.inherits(a, m), a.prototype.processChunk = function(u) {
						var o = i.transformTo(s.uint8array ? "uint8array" : "array", u.data);
						if (this.leftOver && this.leftOver.length) {
							if (s.uint8array) {
								var n = o;
								(o = new Uint8Array(n.length + this.leftOver.length)).set(this.leftOver, 0), o.set(n, this.leftOver.length);
							} else o = this.leftOver.concat(o);
							this.leftOver = null;
						}
						var f = (function(e, d) {
							var r;
							for ((d = d || e.length) > e.length && (d = e.length), r = d - 1; 0 <= r && (192 & e[r]) == 128;) r--;
							return r < 0 || r === 0 ? d : r + _[e[r]] > d ? r : d;
						})(o), l = o;
						f !== o.length && (s.uint8array ? (l = o.subarray(0, f), this.leftOver = o.subarray(f, o.length)) : (l = o.slice(0, f), this.leftOver = o.slice(f, o.length))), this.push({
							data: A.utf8decode(l),
							meta: u.meta
						});
					}, a.prototype.flush = function() {
						this.leftOver && this.leftOver.length && (this.push({
							data: A.utf8decode(this.leftOver),
							meta: {}
						}), this.leftOver = null);
					}, A.Utf8DecodeWorker = a, i.inherits(p, m), p.prototype.processChunk = function(u) {
						this.push({
							data: A.utf8encode(u.data),
							meta: u.meta
						});
					}, A.Utf8EncodeWorker = p;
				}, {
					"./nodejsUtils": 14,
					"./stream/GenericWorker": 28,
					"./support": 30,
					"./utils": 32
				}],
				32: [function(T, N, A) {
					"use strict";
					var i = T("./support"), s = T("./base64"), t = T("./nodejsUtils"), m = T("./external");
					function _(n) {
						return n;
					}
					function g(n, f) {
						for (var l = 0; l < n.length; ++l) f[l] = 255 & n.charCodeAt(l);
						return f;
					}
					T("setimmediate"), A.newBlob = function(n, f) {
						A.checkSupport("blob");
						try {
							return new Blob([n], { type: f });
						} catch {
							try {
								var l = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
								return l.append(n), l.getBlob(f);
							} catch {
								throw new Error("Bug : can't construct the Blob.");
							}
						}
					};
					var a = {
						stringifyByChunk: function(n, f, l) {
							var e = [], d = 0, r = n.length;
							if (r <= l) return String.fromCharCode.apply(null, n);
							for (; d < r;) f === "array" || f === "nodebuffer" ? e.push(String.fromCharCode.apply(null, n.slice(d, Math.min(d + l, r)))) : e.push(String.fromCharCode.apply(null, n.subarray(d, Math.min(d + l, r)))), d += l;
							return e.join("");
						},
						stringifyByChar: function(n) {
							for (var f = "", l = 0; l < n.length; l++) f += String.fromCharCode(n[l]);
							return f;
						},
						applyCanBeUsed: {
							uint8array: (function() {
								try {
									return i.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
								} catch {
									return !1;
								}
							})(),
							nodebuffer: (function() {
								try {
									return i.nodebuffer && String.fromCharCode.apply(null, t.allocBuffer(1)).length === 1;
								} catch {
									return !1;
								}
							})()
						}
					};
					function p(n) {
						var f = 65536, l = A.getTypeOf(n), e = !0;
						if (l === "uint8array" ? e = a.applyCanBeUsed.uint8array : l === "nodebuffer" && (e = a.applyCanBeUsed.nodebuffer), e) for (; 1 < f;) try {
							return a.stringifyByChunk(n, l, f);
						} catch {
							f = Math.floor(f / 2);
						}
						return a.stringifyByChar(n);
					}
					function u(n, f) {
						for (var l = 0; l < n.length; l++) f[l] = n[l];
						return f;
					}
					A.applyFromCharCode = p;
					var o = {};
					o.string = {
						string: _,
						array: function(n) {
							return g(n, new Array(n.length));
						},
						arraybuffer: function(n) {
							return o.string.uint8array(n).buffer;
						},
						uint8array: function(n) {
							return g(n, new Uint8Array(n.length));
						},
						nodebuffer: function(n) {
							return g(n, t.allocBuffer(n.length));
						}
					}, o.array = {
						string: p,
						array: _,
						arraybuffer: function(n) {
							return new Uint8Array(n).buffer;
						},
						uint8array: function(n) {
							return new Uint8Array(n);
						},
						nodebuffer: function(n) {
							return t.newBufferFrom(n);
						}
					}, o.arraybuffer = {
						string: function(n) {
							return p(new Uint8Array(n));
						},
						array: function(n) {
							return u(new Uint8Array(n), new Array(n.byteLength));
						},
						arraybuffer: _,
						uint8array: function(n) {
							return new Uint8Array(n);
						},
						nodebuffer: function(n) {
							return t.newBufferFrom(new Uint8Array(n));
						}
					}, o.uint8array = {
						string: p,
						array: function(n) {
							return u(n, new Array(n.length));
						},
						arraybuffer: function(n) {
							return n.buffer;
						},
						uint8array: _,
						nodebuffer: function(n) {
							return t.newBufferFrom(n);
						}
					}, o.nodebuffer = {
						string: p,
						array: function(n) {
							return u(n, new Array(n.length));
						},
						arraybuffer: function(n) {
							return o.nodebuffer.uint8array(n).buffer;
						},
						uint8array: function(n) {
							return u(n, new Uint8Array(n.length));
						},
						nodebuffer: _
					}, A.transformTo = function(n, f) {
						return f = f || "", n ? (A.checkSupport(n), o[A.getTypeOf(f)][n](f)) : f;
					}, A.resolve = function(n) {
						for (var f = n.split("/"), l = [], e = 0; e < f.length; e++) {
							var d = f[e];
							d === "." || d === "" && e !== 0 && e !== f.length - 1 || (d === ".." ? l.pop() : l.push(d));
						}
						return l.join("/");
					}, A.getTypeOf = function(n) {
						return typeof n == "string" ? "string" : Object.prototype.toString.call(n) === "[object Array]" ? "array" : i.nodebuffer && t.isBuffer(n) ? "nodebuffer" : i.uint8array && n instanceof Uint8Array ? "uint8array" : i.arraybuffer && n instanceof ArrayBuffer ? "arraybuffer" : void 0;
					}, A.checkSupport = function(n) {
						if (!i[n.toLowerCase()]) throw new Error(n + " is not supported by this platform");
					}, A.MAX_VALUE_16BITS = 65535, A.MAX_VALUE_32BITS = -1, A.pretty = function(n) {
						var f, l, e = "";
						for (l = 0; l < (n || "").length; l++) e += "\\x" + ((f = n.charCodeAt(l)) < 16 ? "0" : "") + f.toString(16).toUpperCase();
						return e;
					}, A.delay = function(n, f, l) {
						setImmediate(function() {
							n.apply(l || null, f || []);
						});
					}, A.inherits = function(n, f) {
						function l() {}
						l.prototype = f.prototype, n.prototype = new l();
					}, A.extend = function() {
						var n, f, l = {};
						for (n = 0; n < arguments.length; n++) for (f in arguments[n]) Object.prototype.hasOwnProperty.call(arguments[n], f) && l[f] === void 0 && (l[f] = arguments[n][f]);
						return l;
					}, A.prepareContent = function(n, f, l, e, d) {
						return m.Promise.resolve(f).then(function(r) {
							return i.blob && (r instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(r)) !== -1) && typeof FileReader < "u" ? new m.Promise(function(c, w) {
								var x = new FileReader();
								x.onload = function(D) {
									c(D.target.result);
								}, x.onerror = function(D) {
									w(D.target.error);
								}, x.readAsArrayBuffer(r);
							}) : r;
						}).then(function(r) {
							var c = A.getTypeOf(r);
							return c ? (c === "arraybuffer" ? r = A.transformTo("uint8array", r) : c === "string" && (d ? r = s.decode(r) : l && e !== !0 && (r = (function(w) {
								return g(w, i.uint8array ? new Uint8Array(w.length) : new Array(w.length));
							})(r))), r) : m.Promise.reject(/* @__PURE__ */ new Error("Can't read the data of '" + n + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
						});
					};
				}, {
					"./base64": 1,
					"./external": 6,
					"./nodejsUtils": 14,
					"./support": 30,
					setimmediate: 54
				}],
				33: [function(T, N, A) {
					"use strict";
					var i = T("./reader/readerFor"), s = T("./utils"), t = T("./signature"), m = T("./zipEntry"), _ = T("./support");
					function g(a) {
						this.files = [], this.loadOptions = a;
					}
					g.prototype = {
						checkSignature: function(a) {
							if (!this.reader.readAndCheckSignature(a)) {
								this.reader.index -= 4;
								var p = this.reader.readString(4);
								throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(p) + ", expected " + s.pretty(a) + ")");
							}
						},
						isSignature: function(a, p) {
							var u = this.reader.index;
							this.reader.setIndex(a);
							var o = this.reader.readString(4) === p;
							return this.reader.setIndex(u), o;
						},
						readBlockEndOfCentral: function() {
							this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
							var a = this.reader.readData(this.zipCommentLength), p = _.uint8array ? "uint8array" : "array", u = s.transformTo(p, a);
							this.zipComment = this.loadOptions.decodeFileName(u);
						},
						readBlockZip64EndOfCentral: function() {
							this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
							for (var a, p, u, o = this.zip64EndOfCentralSize - 44; 0 < o;) a = this.reader.readInt(2), p = this.reader.readInt(4), u = this.reader.readData(p), this.zip64ExtensibleData[a] = {
								id: a,
								length: p,
								value: u
							};
						},
						readBlockZip64EndOfCentralLocator: function() {
							if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
						},
						readLocalFiles: function() {
							var a, p;
							for (a = 0; a < this.files.length; a++) p = this.files[a], this.reader.setIndex(p.localHeaderOffset), this.checkSignature(t.LOCAL_FILE_HEADER), p.readLocalPart(this.reader), p.handleUTF8(), p.processAttributes();
						},
						readCentralDir: function() {
							var a;
							for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(t.CENTRAL_FILE_HEADER);) (a = new m({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(a);
							if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
						},
						readEndOfCentral: function() {
							var a = this.reader.lastIndexOfSignature(t.CENTRAL_DIRECTORY_END);
							if (a < 0) throw this.isSignature(0, t.LOCAL_FILE_HEADER) ? /* @__PURE__ */ new Error("Corrupted zip: can't find end of central directory") : /* @__PURE__ */ new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
							this.reader.setIndex(a);
							var p = a;
							if (this.checkSignature(t.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
								if (this.zip64 = !0, (a = this.reader.lastIndexOfSignature(t.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
								if (this.reader.setIndex(a), this.checkSignature(t.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, t.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(t.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
								this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(t.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
							}
							var u = this.centralDirOffset + this.centralDirSize;
							this.zip64 && (u += 20, u += 12 + this.zip64EndOfCentralSize);
							var o = p - u;
							if (0 < o) this.isSignature(p, t.CENTRAL_FILE_HEADER) || (this.reader.zero = o);
							else if (o < 0) throw new Error("Corrupted zip: missing " + Math.abs(o) + " bytes.");
						},
						prepareReader: function(a) {
							this.reader = i(a);
						},
						load: function(a) {
							this.prepareReader(a), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
						}
					}, N.exports = g;
				}, {
					"./reader/readerFor": 22,
					"./signature": 23,
					"./support": 30,
					"./utils": 32,
					"./zipEntry": 34
				}],
				34: [function(T, N, A) {
					"use strict";
					var i = T("./reader/readerFor"), s = T("./utils"), t = T("./compressedObject"), m = T("./crc32"), _ = T("./utf8"), g = T("./compressions"), a = T("./support");
					function p(u, o) {
						this.options = u, this.loadOptions = o;
					}
					p.prototype = {
						isEncrypted: function() {
							return (1 & this.bitFlag) == 1;
						},
						useUTF8: function() {
							return (2048 & this.bitFlag) == 2048;
						},
						readLocalPart: function(u) {
							var o, n;
							if (u.skip(22), this.fileNameLength = u.readInt(2), n = u.readInt(2), this.fileName = u.readData(this.fileNameLength), u.skip(n), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
							if ((o = (function(f) {
								for (var l in g) if (Object.prototype.hasOwnProperty.call(g, l) && g[l].magic === f) return g[l];
								return null;
							})(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
							this.decompressed = new t(this.compressedSize, this.uncompressedSize, this.crc32, o, u.readData(this.compressedSize));
						},
						readCentralPart: function(u) {
							this.versionMadeBy = u.readInt(2), u.skip(2), this.bitFlag = u.readInt(2), this.compressionMethod = u.readString(2), this.date = u.readDate(), this.crc32 = u.readInt(4), this.compressedSize = u.readInt(4), this.uncompressedSize = u.readInt(4);
							var o = u.readInt(2);
							if (this.extraFieldsLength = u.readInt(2), this.fileCommentLength = u.readInt(2), this.diskNumberStart = u.readInt(2), this.internalFileAttributes = u.readInt(2), this.externalFileAttributes = u.readInt(4), this.localHeaderOffset = u.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
							u.skip(o), this.readExtraFields(u), this.parseZIP64ExtraField(u), this.fileComment = u.readData(this.fileCommentLength);
						},
						processAttributes: function() {
							this.unixPermissions = null, this.dosPermissions = null;
							var u = this.versionMadeBy >> 8;
							this.dir = !!(16 & this.externalFileAttributes), u == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), u == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
						},
						parseZIP64ExtraField: function() {
							if (this.extraFields[1]) {
								var u = i(this.extraFields[1].value);
								this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = u.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = u.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = u.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = u.readInt(4));
							}
						},
						readExtraFields: function(u) {
							var o, n, f, l = u.index + this.extraFieldsLength;
							for (this.extraFields || (this.extraFields = {}); u.index + 4 < l;) o = u.readInt(2), n = u.readInt(2), f = u.readData(n), this.extraFields[o] = {
								id: o,
								length: n,
								value: f
							};
							u.setIndex(l);
						},
						handleUTF8: function() {
							var u = a.uint8array ? "uint8array" : "array";
							if (this.useUTF8()) this.fileNameStr = _.utf8decode(this.fileName), this.fileCommentStr = _.utf8decode(this.fileComment);
							else {
								var o = this.findExtraFieldUnicodePath();
								if (o !== null) this.fileNameStr = o;
								else {
									var n = s.transformTo(u, this.fileName);
									this.fileNameStr = this.loadOptions.decodeFileName(n);
								}
								var f = this.findExtraFieldUnicodeComment();
								if (f !== null) this.fileCommentStr = f;
								else {
									var l = s.transformTo(u, this.fileComment);
									this.fileCommentStr = this.loadOptions.decodeFileName(l);
								}
							}
						},
						findExtraFieldUnicodePath: function() {
							var u = this.extraFields[28789];
							if (u) {
								var o = i(u.value);
								return o.readInt(1) !== 1 || m(this.fileName) !== o.readInt(4) ? null : _.utf8decode(o.readData(u.length - 5));
							}
							return null;
						},
						findExtraFieldUnicodeComment: function() {
							var u = this.extraFields[25461];
							if (u) {
								var o = i(u.value);
								return o.readInt(1) !== 1 || m(this.fileComment) !== o.readInt(4) ? null : _.utf8decode(o.readData(u.length - 5));
							}
							return null;
						}
					}, N.exports = p;
				}, {
					"./compressedObject": 2,
					"./compressions": 3,
					"./crc32": 4,
					"./reader/readerFor": 22,
					"./support": 30,
					"./utf8": 31,
					"./utils": 32
				}],
				35: [function(T, N, A) {
					"use strict";
					function i(o, n, f) {
						this.name = o, this.dir = f.dir, this.date = f.date, this.comment = f.comment, this.unixPermissions = f.unixPermissions, this.dosPermissions = f.dosPermissions, this._data = n, this._dataBinary = f.binary, this.options = {
							compression: f.compression,
							compressionOptions: f.compressionOptions
						};
					}
					var s = T("./stream/StreamHelper"), t = T("./stream/DataWorker"), m = T("./utf8"), _ = T("./compressedObject"), g = T("./stream/GenericWorker");
					i.prototype = {
						internalStream: function(o) {
							var n = null, f = "string";
							try {
								if (!o) throw new Error("No output type specified.");
								var l = (f = o.toLowerCase()) === "string" || f === "text";
								f !== "binarystring" && f !== "text" || (f = "string"), n = this._decompressWorker();
								var e = !this._dataBinary;
								e && !l && (n = n.pipe(new m.Utf8EncodeWorker())), !e && l && (n = n.pipe(new m.Utf8DecodeWorker()));
							} catch (d) {
								(n = new g("error")).error(d);
							}
							return new s(n, f, "");
						},
						async: function(o, n) {
							return this.internalStream(o).accumulate(n);
						},
						nodeStream: function(o, n) {
							return this.internalStream(o || "nodebuffer").toNodejsStream(n);
						},
						_compressWorker: function(o, n) {
							if (this._data instanceof _ && this._data.compression.magic === o.magic) return this._data.getCompressedWorker();
							var f = this._decompressWorker();
							return this._dataBinary || (f = f.pipe(new m.Utf8EncodeWorker())), _.createWorkerFrom(f, o, n);
						},
						_decompressWorker: function() {
							return this._data instanceof _ ? this._data.getContentWorker() : this._data instanceof g ? this._data : new t(this._data);
						}
					};
					for (var a = [
						"asText",
						"asBinary",
						"asNodeBuffer",
						"asUint8Array",
						"asArrayBuffer"
					], p = function() {
						throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
					}, u = 0; u < a.length; u++) i.prototype[a[u]] = p;
					N.exports = i;
				}, {
					"./compressedObject": 2,
					"./stream/DataWorker": 27,
					"./stream/GenericWorker": 28,
					"./stream/StreamHelper": 29,
					"./utf8": 31
				}],
				36: [function(T, N, A) {
					(function(i) {
						"use strict";
						var s, t, m = i.MutationObserver || i.WebKitMutationObserver;
						if (m) {
							var _ = 0, g = new m(o), a = i.document.createTextNode("");
							g.observe(a, { characterData: !0 }), s = function() {
								a.data = _ = ++_ % 2;
							};
						} else if (i.setImmediate || i.MessageChannel === void 0) s = "document" in i && "onreadystatechange" in i.document.createElement("script") ? function() {
							var n = i.document.createElement("script");
							n.onreadystatechange = function() {
								o(), n.onreadystatechange = null, n.parentNode.removeChild(n), n = null;
							}, i.document.documentElement.appendChild(n);
						} : function() {
							setTimeout(o, 0);
						};
						else {
							var p = new i.MessageChannel();
							p.port1.onmessage = o, s = function() {
								p.port2.postMessage(0);
							};
						}
						var u = [];
						function o() {
							var n, f;
							t = !0;
							for (var l = u.length; l;) {
								for (f = u, u = [], n = -1; ++n < l;) f[n]();
								l = u.length;
							}
							t = !1;
						}
						N.exports = function(n) {
							u.push(n) !== 1 || t || s();
						};
					}).call(this, typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : {});
				}, {}],
				37: [function(T, N, A) {
					"use strict";
					var i = T("immediate");
					function s() {}
					var t = {}, m = ["REJECTED"], _ = ["FULFILLED"], g = ["PENDING"];
					function a(l) {
						if (typeof l != "function") throw new TypeError("resolver must be a function");
						this.state = g, this.queue = [], this.outcome = void 0, l !== s && n(this, l);
					}
					function p(l, e, d) {
						this.promise = l, typeof e == "function" && (this.onFulfilled = e, this.callFulfilled = this.otherCallFulfilled), typeof d == "function" && (this.onRejected = d, this.callRejected = this.otherCallRejected);
					}
					function u(l, e, d) {
						i(function() {
							var r;
							try {
								r = e(d);
							} catch (c) {
								return t.reject(l, c);
							}
							r === l ? t.reject(l, /* @__PURE__ */ new TypeError("Cannot resolve promise with itself")) : t.resolve(l, r);
						});
					}
					function o(l) {
						var e = l && l.then;
						if (l && (typeof l == "object" || typeof l == "function") && typeof e == "function") return function() {
							e.apply(l, arguments);
						};
					}
					function n(l, e) {
						var d = !1;
						function r(x) {
							d || (d = !0, t.reject(l, x));
						}
						function c(x) {
							d || (d = !0, t.resolve(l, x));
						}
						var w = f(function() {
							e(c, r);
						});
						w.status === "error" && r(w.value);
					}
					function f(l, e) {
						var d = {};
						try {
							d.value = l(e), d.status = "success";
						} catch (r) {
							d.status = "error", d.value = r;
						}
						return d;
					}
					(N.exports = a).prototype.finally = function(l) {
						if (typeof l != "function") return this;
						var e = this.constructor;
						return this.then(function(d) {
							return e.resolve(l()).then(function() {
								return d;
							});
						}, function(d) {
							return e.resolve(l()).then(function() {
								throw d;
							});
						});
					}, a.prototype.catch = function(l) {
						return this.then(null, l);
					}, a.prototype.then = function(l, e) {
						if (typeof l != "function" && this.state === _ || typeof e != "function" && this.state === m) return this;
						var d = new this.constructor(s);
						return this.state !== g ? u(d, this.state === _ ? l : e, this.outcome) : this.queue.push(new p(d, l, e)), d;
					}, p.prototype.callFulfilled = function(l) {
						t.resolve(this.promise, l);
					}, p.prototype.otherCallFulfilled = function(l) {
						u(this.promise, this.onFulfilled, l);
					}, p.prototype.callRejected = function(l) {
						t.reject(this.promise, l);
					}, p.prototype.otherCallRejected = function(l) {
						u(this.promise, this.onRejected, l);
					}, t.resolve = function(l, e) {
						var d = f(o, e);
						if (d.status === "error") return t.reject(l, d.value);
						var r = d.value;
						if (r) n(l, r);
						else {
							l.state = _, l.outcome = e;
							for (var c = -1, w = l.queue.length; ++c < w;) l.queue[c].callFulfilled(e);
						}
						return l;
					}, t.reject = function(l, e) {
						l.state = m, l.outcome = e;
						for (var d = -1, r = l.queue.length; ++d < r;) l.queue[d].callRejected(e);
						return l;
					}, a.resolve = function(l) {
						return l instanceof this ? l : t.resolve(new this(s), l);
					}, a.reject = function(l) {
						var e = new this(s);
						return t.reject(e, l);
					}, a.all = function(l) {
						var e = this;
						if (Object.prototype.toString.call(l) !== "[object Array]") return this.reject(/* @__PURE__ */ new TypeError("must be an array"));
						var d = l.length, r = !1;
						if (!d) return this.resolve([]);
						for (var c = new Array(d), w = 0, x = -1, D = new this(s); ++x < d;) E(l[x], x);
						return D;
						function E(z, K) {
							e.resolve(z).then(function(B) {
								c[K] = B, ++w !== d || r || (r = !0, t.resolve(D, c));
							}, function(B) {
								r || (r = !0, t.reject(D, B));
							});
						}
					}, a.race = function(l) {
						var e = this;
						if (Object.prototype.toString.call(l) !== "[object Array]") return this.reject(/* @__PURE__ */ new TypeError("must be an array"));
						var d = l.length, r = !1;
						if (!d) return this.resolve([]);
						for (var c = -1, w = new this(s); ++c < d;) x = l[c], e.resolve(x).then(function(D) {
							r || (r = !0, t.resolve(w, D));
						}, function(D) {
							r || (r = !0, t.reject(w, D));
						});
						var x;
						return w;
					};
				}, { immediate: 36 }],
				38: [function(T, N, A) {
					"use strict";
					var i = {};
					(0, T("./lib/utils/common").assign)(i, T("./lib/deflate"), T("./lib/inflate"), T("./lib/zlib/constants")), N.exports = i;
				}, {
					"./lib/deflate": 39,
					"./lib/inflate": 40,
					"./lib/utils/common": 41,
					"./lib/zlib/constants": 44
				}],
				39: [function(T, N, A) {
					"use strict";
					var i = T("./zlib/deflate"), s = T("./utils/common"), t = T("./utils/strings"), m = T("./zlib/messages"), _ = T("./zlib/zstream"), g = Object.prototype.toString, a = 0, p = -1, u = 0, o = 8;
					function n(l) {
						if (!(this instanceof n)) return new n(l);
						this.options = s.assign({
							level: p,
							method: o,
							chunkSize: 16384,
							windowBits: 15,
							memLevel: 8,
							strategy: u,
							to: ""
						}, l || {});
						var e = this.options;
						e.raw && 0 < e.windowBits ? e.windowBits = -e.windowBits : e.gzip && 0 < e.windowBits && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new _(), this.strm.avail_out = 0;
						var d = i.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
						if (d !== a) throw new Error(m[d]);
						if (e.header && i.deflateSetHeader(this.strm, e.header), e.dictionary) {
							var r;
							if (r = typeof e.dictionary == "string" ? t.string2buf(e.dictionary) : g.call(e.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(e.dictionary) : e.dictionary, (d = i.deflateSetDictionary(this.strm, r)) !== a) throw new Error(m[d]);
							this._dict_set = !0;
						}
					}
					function f(l, e) {
						var d = new n(e);
						if (d.push(l, !0), d.err) throw d.msg || m[d.err];
						return d.result;
					}
					n.prototype.push = function(l, e) {
						var d, r, c = this.strm, w = this.options.chunkSize;
						if (this.ended) return !1;
						r = e === ~~e ? e : e === !0 ? 4 : 0, typeof l == "string" ? c.input = t.string2buf(l) : g.call(l) === "[object ArrayBuffer]" ? c.input = new Uint8Array(l) : c.input = l, c.next_in = 0, c.avail_in = c.input.length;
						do {
							if (c.avail_out === 0 && (c.output = new s.Buf8(w), c.next_out = 0, c.avail_out = w), (d = i.deflate(c, r)) !== 1 && d !== a) return this.onEnd(d), !(this.ended = !0);
							c.avail_out !== 0 && (c.avail_in !== 0 || r !== 4 && r !== 2) || (this.options.to === "string" ? this.onData(t.buf2binstring(s.shrinkBuf(c.output, c.next_out))) : this.onData(s.shrinkBuf(c.output, c.next_out)));
						} while ((0 < c.avail_in || c.avail_out === 0) && d !== 1);
						return r === 4 ? (d = i.deflateEnd(this.strm), this.onEnd(d), this.ended = !0, d === a) : r !== 2 || (this.onEnd(a), !(c.avail_out = 0));
					}, n.prototype.onData = function(l) {
						this.chunks.push(l);
					}, n.prototype.onEnd = function(l) {
						l === a && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = l, this.msg = this.strm.msg;
					}, A.Deflate = n, A.deflate = f, A.deflateRaw = function(l, e) {
						return (e = e || {}).raw = !0, f(l, e);
					}, A.gzip = function(l, e) {
						return (e = e || {}).gzip = !0, f(l, e);
					};
				}, {
					"./utils/common": 41,
					"./utils/strings": 42,
					"./zlib/deflate": 46,
					"./zlib/messages": 51,
					"./zlib/zstream": 53
				}],
				40: [function(T, N, A) {
					"use strict";
					var i = T("./zlib/inflate"), s = T("./utils/common"), t = T("./utils/strings"), m = T("./zlib/constants"), _ = T("./zlib/messages"), g = T("./zlib/zstream"), a = T("./zlib/gzheader"), p = Object.prototype.toString;
					function u(n) {
						if (!(this instanceof u)) return new u(n);
						this.options = s.assign({
							chunkSize: 16384,
							windowBits: 0,
							to: ""
						}, n || {});
						var f = this.options;
						f.raw && 0 <= f.windowBits && f.windowBits < 16 && (f.windowBits = -f.windowBits, f.windowBits === 0 && (f.windowBits = -15)), !(0 <= f.windowBits && f.windowBits < 16) || n && n.windowBits || (f.windowBits += 32), 15 < f.windowBits && f.windowBits < 48 && !(15 & f.windowBits) && (f.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new g(), this.strm.avail_out = 0;
						var l = i.inflateInit2(this.strm, f.windowBits);
						if (l !== m.Z_OK) throw new Error(_[l]);
						this.header = new a(), i.inflateGetHeader(this.strm, this.header);
					}
					function o(n, f) {
						var l = new u(f);
						if (l.push(n, !0), l.err) throw l.msg || _[l.err];
						return l.result;
					}
					u.prototype.push = function(n, f) {
						var l, e, d, r, c, w, x = this.strm, D = this.options.chunkSize, E = this.options.dictionary, z = !1;
						if (this.ended) return !1;
						e = f === ~~f ? f : f === !0 ? m.Z_FINISH : m.Z_NO_FLUSH, typeof n == "string" ? x.input = t.binstring2buf(n) : p.call(n) === "[object ArrayBuffer]" ? x.input = new Uint8Array(n) : x.input = n, x.next_in = 0, x.avail_in = x.input.length;
						do {
							if (x.avail_out === 0 && (x.output = new s.Buf8(D), x.next_out = 0, x.avail_out = D), (l = i.inflate(x, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && E && (w = typeof E == "string" ? t.string2buf(E) : p.call(E) === "[object ArrayBuffer]" ? new Uint8Array(E) : E, l = i.inflateSetDictionary(this.strm, w)), l === m.Z_BUF_ERROR && z === !0 && (l = m.Z_OK, z = !1), l !== m.Z_STREAM_END && l !== m.Z_OK) return this.onEnd(l), !(this.ended = !0);
							x.next_out && (x.avail_out !== 0 && l !== m.Z_STREAM_END && (x.avail_in !== 0 || e !== m.Z_FINISH && e !== m.Z_SYNC_FLUSH) || (this.options.to === "string" ? (d = t.utf8border(x.output, x.next_out), r = x.next_out - d, c = t.buf2string(x.output, d), x.next_out = r, x.avail_out = D - r, r && s.arraySet(x.output, x.output, d, r, 0), this.onData(c)) : this.onData(s.shrinkBuf(x.output, x.next_out)))), x.avail_in === 0 && x.avail_out === 0 && (z = !0);
						} while ((0 < x.avail_in || x.avail_out === 0) && l !== m.Z_STREAM_END);
						return l === m.Z_STREAM_END && (e = m.Z_FINISH), e === m.Z_FINISH ? (l = i.inflateEnd(this.strm), this.onEnd(l), this.ended = !0, l === m.Z_OK) : e !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(x.avail_out = 0));
					}, u.prototype.onData = function(n) {
						this.chunks.push(n);
					}, u.prototype.onEnd = function(n) {
						n === m.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = n, this.msg = this.strm.msg;
					}, A.Inflate = u, A.inflate = o, A.inflateRaw = function(n, f) {
						return (f = f || {}).raw = !0, o(n, f);
					}, A.ungzip = o;
				}, {
					"./utils/common": 41,
					"./utils/strings": 42,
					"./zlib/constants": 44,
					"./zlib/gzheader": 47,
					"./zlib/inflate": 49,
					"./zlib/messages": 51,
					"./zlib/zstream": 53
				}],
				41: [function(T, N, A) {
					"use strict";
					var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
					A.assign = function(m) {
						for (var _ = Array.prototype.slice.call(arguments, 1); _.length;) {
							var g = _.shift();
							if (g) {
								if (typeof g != "object") throw new TypeError(g + "must be non-object");
								for (var a in g) g.hasOwnProperty(a) && (m[a] = g[a]);
							}
						}
						return m;
					}, A.shrinkBuf = function(m, _) {
						return m.length === _ ? m : m.subarray ? m.subarray(0, _) : (m.length = _, m);
					};
					var s = {
						arraySet: function(m, _, g, a, p) {
							if (_.subarray && m.subarray) m.set(_.subarray(g, g + a), p);
							else for (var u = 0; u < a; u++) m[p + u] = _[g + u];
						},
						flattenChunks: function(m) {
							var _, g, a, p, u, o;
							for (_ = a = 0, g = m.length; _ < g; _++) a += m[_].length;
							for (o = new Uint8Array(a), _ = p = 0, g = m.length; _ < g; _++) u = m[_], o.set(u, p), p += u.length;
							return o;
						}
					}, t = {
						arraySet: function(m, _, g, a, p) {
							for (var u = 0; u < a; u++) m[p + u] = _[g + u];
						},
						flattenChunks: function(m) {
							return [].concat.apply([], m);
						}
					};
					A.setTyped = function(m) {
						m ? (A.Buf8 = Uint8Array, A.Buf16 = Uint16Array, A.Buf32 = Int32Array, A.assign(A, s)) : (A.Buf8 = Array, A.Buf16 = Array, A.Buf32 = Array, A.assign(A, t));
					}, A.setTyped(i);
				}, {}],
				42: [function(T, N, A) {
					"use strict";
					var i = T("./common"), s = !0, t = !0;
					try {
						String.fromCharCode.apply(null, [0]);
					} catch {
						s = !1;
					}
					try {
						String.fromCharCode.apply(null, new Uint8Array(1));
					} catch {
						t = !1;
					}
					for (var m = new i.Buf8(256), _ = 0; _ < 256; _++) m[_] = 252 <= _ ? 6 : 248 <= _ ? 5 : 240 <= _ ? 4 : 224 <= _ ? 3 : 192 <= _ ? 2 : 1;
					function g(a, p) {
						if (p < 65537 && (a.subarray && t || !a.subarray && s)) return String.fromCharCode.apply(null, i.shrinkBuf(a, p));
						for (var u = "", o = 0; o < p; o++) u += String.fromCharCode(a[o]);
						return u;
					}
					m[254] = m[254] = 1, A.string2buf = function(a) {
						var p, u, o, n, f, l = a.length, e = 0;
						for (n = 0; n < l; n++) (64512 & (u = a.charCodeAt(n))) == 55296 && n + 1 < l && (64512 & (o = a.charCodeAt(n + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (o - 56320), n++), e += u < 128 ? 1 : u < 2048 ? 2 : u < 65536 ? 3 : 4;
						for (p = new i.Buf8(e), n = f = 0; f < e; n++) (64512 & (u = a.charCodeAt(n))) == 55296 && n + 1 < l && (64512 & (o = a.charCodeAt(n + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (o - 56320), n++), u < 128 ? p[f++] = u : (u < 2048 ? p[f++] = 192 | u >>> 6 : (u < 65536 ? p[f++] = 224 | u >>> 12 : (p[f++] = 240 | u >>> 18, p[f++] = 128 | u >>> 12 & 63), p[f++] = 128 | u >>> 6 & 63), p[f++] = 128 | 63 & u);
						return p;
					}, A.buf2binstring = function(a) {
						return g(a, a.length);
					}, A.binstring2buf = function(a) {
						for (var p = new i.Buf8(a.length), u = 0, o = p.length; u < o; u++) p[u] = a.charCodeAt(u);
						return p;
					}, A.buf2string = function(a, p) {
						var u, o, n, f, l = p || a.length, e = new Array(2 * l);
						for (u = o = 0; u < l;) if ((n = a[u++]) < 128) e[o++] = n;
						else if (4 < (f = m[n])) e[o++] = 65533, u += f - 1;
						else {
							for (n &= f === 2 ? 31 : f === 3 ? 15 : 7; 1 < f && u < l;) n = n << 6 | 63 & a[u++], f--;
							1 < f ? e[o++] = 65533 : n < 65536 ? e[o++] = n : (n -= 65536, e[o++] = 55296 | n >> 10 & 1023, e[o++] = 56320 | 1023 & n);
						}
						return g(e, o);
					}, A.utf8border = function(a, p) {
						var u;
						for ((p = p || a.length) > a.length && (p = a.length), u = p - 1; 0 <= u && (192 & a[u]) == 128;) u--;
						return u < 0 || u === 0 ? p : u + m[a[u]] > p ? u : p;
					};
				}, { "./common": 41 }],
				43: [function(T, N, A) {
					"use strict";
					N.exports = function(i, s, t, m) {
						for (var _ = 65535 & i | 0, g = i >>> 16 & 65535 | 0, a = 0; t !== 0;) {
							for (t -= a = 2e3 < t ? 2e3 : t; g = g + (_ = _ + s[m++] | 0) | 0, --a;);
							_ %= 65521, g %= 65521;
						}
						return _ | g << 16 | 0;
					};
				}, {}],
				44: [function(T, N, A) {
					"use strict";
					N.exports = {
						Z_NO_FLUSH: 0,
						Z_PARTIAL_FLUSH: 1,
						Z_SYNC_FLUSH: 2,
						Z_FULL_FLUSH: 3,
						Z_FINISH: 4,
						Z_BLOCK: 5,
						Z_TREES: 6,
						Z_OK: 0,
						Z_STREAM_END: 1,
						Z_NEED_DICT: 2,
						Z_ERRNO: -1,
						Z_STREAM_ERROR: -2,
						Z_DATA_ERROR: -3,
						Z_BUF_ERROR: -5,
						Z_NO_COMPRESSION: 0,
						Z_BEST_SPEED: 1,
						Z_BEST_COMPRESSION: 9,
						Z_DEFAULT_COMPRESSION: -1,
						Z_FILTERED: 1,
						Z_HUFFMAN_ONLY: 2,
						Z_RLE: 3,
						Z_FIXED: 4,
						Z_DEFAULT_STRATEGY: 0,
						Z_BINARY: 0,
						Z_TEXT: 1,
						Z_UNKNOWN: 2,
						Z_DEFLATED: 8
					};
				}, {}],
				45: [function(T, N, A) {
					"use strict";
					var i = (function() {
						for (var s, t = [], m = 0; m < 256; m++) {
							s = m;
							for (var _ = 0; _ < 8; _++) s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
							t[m] = s;
						}
						return t;
					})();
					N.exports = function(s, t, m, _) {
						var g = i, a = _ + m;
						s ^= -1;
						for (var p = _; p < a; p++) s = s >>> 8 ^ g[255 & (s ^ t[p])];
						return -1 ^ s;
					};
				}, {}],
				46: [function(T, N, A) {
					"use strict";
					var i, s = T("../utils/common"), t = T("./trees"), m = T("./adler32"), _ = T("./crc32"), g = T("./messages"), a = 0, p = 4, u = 0, o = -2, n = -1, f = 4, l = 2, e = 8, d = 9, r = 286, c = 30, w = 19, x = 2 * r + 1, D = 15, E = 3, z = 258, K = z + E + 1, B = 42, L = 113, S = 1, q = 2, et = 3, Q = 4;
					function dt(y, V) {
						return y.msg = g[V], V;
					}
					function nt(y) {
						return (y << 1) - (4 < y ? 9 : 0);
					}
					function pt(y) {
						for (var V = y.length; 0 <= --V;) y[V] = 0;
					}
					function j(y) {
						var V = y.state, Z = V.pending;
						Z > y.avail_out && (Z = y.avail_out), Z !== 0 && (s.arraySet(y.output, V.pending_buf, V.pending_out, Z, y.next_out), y.next_out += Z, V.pending_out += Z, y.total_out += Z, y.avail_out -= Z, V.pending -= Z, V.pending === 0 && (V.pending_out = 0));
					}
					function $(y, V) {
						t._tr_flush_block(y, 0 <= y.block_start ? y.block_start : -1, y.strstart - y.block_start, V), y.block_start = y.strstart, j(y.strm);
					}
					function lt(y, V) {
						y.pending_buf[y.pending++] = V;
					}
					function st(y, V) {
						y.pending_buf[y.pending++] = V >>> 8 & 255, y.pending_buf[y.pending++] = 255 & V;
					}
					function at(y, V) {
						var Z, k, C = y.max_chain_length, Y = y.strstart, rt = y.prev_length, it = y.nice_match, H = y.strstart > y.w_size - K ? y.strstart - (y.w_size - K) : 0, ct = y.window, ht = y.w_mask, ot = y.prev, mt = y.strstart + z, O = ct[Y + rt - 1], h = ct[Y + rt];
						y.prev_length >= y.good_match && (C >>= 2), it > y.lookahead && (it = y.lookahead);
						do
							if (ct[(Z = V) + rt] === h && ct[Z + rt - 1] === O && ct[Z] === ct[Y] && ct[++Z] === ct[Y + 1]) {
								Y += 2, Z++;
								do								;
while (ct[++Y] === ct[++Z] && ct[++Y] === ct[++Z] && ct[++Y] === ct[++Z] && ct[++Y] === ct[++Z] && ct[++Y] === ct[++Z] && ct[++Y] === ct[++Z] && ct[++Y] === ct[++Z] && ct[++Y] === ct[++Z] && Y < mt);
								if (k = z - (mt - Y), Y = mt - z, rt < k) {
									if (y.match_start = V, it <= (rt = k)) break;
									O = ct[Y + rt - 1], h = ct[Y + rt];
								}
							}
						while ((V = ot[V & ht]) > H && --C != 0);
						return rt <= y.lookahead ? rt : y.lookahead;
					}
					function yt(y) {
						var V, Z, k, C, Y, rt, it, H, ct, ht, ot = y.w_size;
						do {
							if (C = y.window_size - y.lookahead - y.strstart, y.strstart >= ot + (ot - K)) {
								for (s.arraySet(y.window, y.window, ot, ot, 0), y.match_start -= ot, y.strstart -= ot, y.block_start -= ot, V = Z = y.hash_size; k = y.head[--V], y.head[V] = ot <= k ? k - ot : 0, --Z;);
								for (V = Z = ot; k = y.prev[--V], y.prev[V] = ot <= k ? k - ot : 0, --Z;);
								C += ot;
							}
							if (y.strm.avail_in === 0) break;
							if (rt = y.strm, it = y.window, H = y.strstart + y.lookahead, ct = C, ht = void 0, ht = rt.avail_in, ct < ht && (ht = ct), Z = ht === 0 ? 0 : (rt.avail_in -= ht, s.arraySet(it, rt.input, rt.next_in, ht, H), rt.state.wrap === 1 ? rt.adler = m(rt.adler, it, ht, H) : rt.state.wrap === 2 && (rt.adler = _(rt.adler, it, ht, H)), rt.next_in += ht, rt.total_in += ht, ht), y.lookahead += Z, y.lookahead + y.insert >= E) for (Y = y.strstart - y.insert, y.ins_h = y.window[Y], y.ins_h = (y.ins_h << y.hash_shift ^ y.window[Y + 1]) & y.hash_mask; y.insert && (y.ins_h = (y.ins_h << y.hash_shift ^ y.window[Y + E - 1]) & y.hash_mask, y.prev[Y & y.w_mask] = y.head[y.ins_h], y.head[y.ins_h] = Y, Y++, y.insert--, !(y.lookahead + y.insert < E)););
						} while (y.lookahead < K && y.strm.avail_in !== 0);
					}
					function I(y, V) {
						for (var Z, k;;) {
							if (y.lookahead < K) {
								if (yt(y), y.lookahead < K && V === a) return S;
								if (y.lookahead === 0) break;
							}
							if (Z = 0, y.lookahead >= E && (y.ins_h = (y.ins_h << y.hash_shift ^ y.window[y.strstart + E - 1]) & y.hash_mask, Z = y.prev[y.strstart & y.w_mask] = y.head[y.ins_h], y.head[y.ins_h] = y.strstart), Z !== 0 && y.strstart - Z <= y.w_size - K && (y.match_length = at(y, Z)), y.match_length >= E) if (k = t._tr_tally(y, y.strstart - y.match_start, y.match_length - E), y.lookahead -= y.match_length, y.match_length <= y.max_lazy_match && y.lookahead >= E) {
								for (y.match_length--; y.strstart++, y.ins_h = (y.ins_h << y.hash_shift ^ y.window[y.strstart + E - 1]) & y.hash_mask, Z = y.prev[y.strstart & y.w_mask] = y.head[y.ins_h], y.head[y.ins_h] = y.strstart, --y.match_length != 0;);
								y.strstart++;
							} else y.strstart += y.match_length, y.match_length = 0, y.ins_h = y.window[y.strstart], y.ins_h = (y.ins_h << y.hash_shift ^ y.window[y.strstart + 1]) & y.hash_mask;
							else k = t._tr_tally(y, 0, y.window[y.strstart]), y.lookahead--, y.strstart++;
							if (k && ($(y, !1), y.strm.avail_out === 0)) return S;
						}
						return y.insert = y.strstart < E - 1 ? y.strstart : E - 1, V === p ? ($(y, !0), y.strm.avail_out === 0 ? et : Q) : y.last_lit && ($(y, !1), y.strm.avail_out === 0) ? S : q;
					}
					function b(y, V) {
						for (var Z, k, C;;) {
							if (y.lookahead < K) {
								if (yt(y), y.lookahead < K && V === a) return S;
								if (y.lookahead === 0) break;
							}
							if (Z = 0, y.lookahead >= E && (y.ins_h = (y.ins_h << y.hash_shift ^ y.window[y.strstart + E - 1]) & y.hash_mask, Z = y.prev[y.strstart & y.w_mask] = y.head[y.ins_h], y.head[y.ins_h] = y.strstart), y.prev_length = y.match_length, y.prev_match = y.match_start, y.match_length = E - 1, Z !== 0 && y.prev_length < y.max_lazy_match && y.strstart - Z <= y.w_size - K && (y.match_length = at(y, Z), y.match_length <= 5 && (y.strategy === 1 || y.match_length === E && 4096 < y.strstart - y.match_start) && (y.match_length = E - 1)), y.prev_length >= E && y.match_length <= y.prev_length) {
								for (C = y.strstart + y.lookahead - E, k = t._tr_tally(y, y.strstart - 1 - y.prev_match, y.prev_length - E), y.lookahead -= y.prev_length - 1, y.prev_length -= 2; ++y.strstart <= C && (y.ins_h = (y.ins_h << y.hash_shift ^ y.window[y.strstart + E - 1]) & y.hash_mask, Z = y.prev[y.strstart & y.w_mask] = y.head[y.ins_h], y.head[y.ins_h] = y.strstart), --y.prev_length != 0;);
								if (y.match_available = 0, y.match_length = E - 1, y.strstart++, k && ($(y, !1), y.strm.avail_out === 0)) return S;
							} else if (y.match_available) {
								if ((k = t._tr_tally(y, 0, y.window[y.strstart - 1])) && $(y, !1), y.strstart++, y.lookahead--, y.strm.avail_out === 0) return S;
							} else y.match_available = 1, y.strstart++, y.lookahead--;
						}
						return y.match_available && (k = t._tr_tally(y, 0, y.window[y.strstart - 1]), y.match_available = 0), y.insert = y.strstart < E - 1 ? y.strstart : E - 1, V === p ? ($(y, !0), y.strm.avail_out === 0 ? et : Q) : y.last_lit && ($(y, !1), y.strm.avail_out === 0) ? S : q;
					}
					function W(y, V, Z, k, C) {
						this.good_length = y, this.max_lazy = V, this.nice_length = Z, this.max_chain = k, this.func = C;
					}
					function X() {
						this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = e, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * x), this.dyn_dtree = new s.Buf16(2 * (2 * c + 1)), this.bl_tree = new s.Buf16(2 * (2 * w + 1)), pt(this.dyn_ltree), pt(this.dyn_dtree), pt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(D + 1), this.heap = new s.Buf16(2 * r + 1), pt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * r + 1), pt(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
					}
					function ut(y) {
						var V;
						return y && y.state ? (y.total_in = y.total_out = 0, y.data_type = l, (V = y.state).pending = 0, V.pending_out = 0, V.wrap < 0 && (V.wrap = -V.wrap), V.status = V.wrap ? B : L, y.adler = V.wrap === 2 ? 0 : 1, V.last_flush = a, t._tr_init(V), u) : dt(y, o);
					}
					function M(y) {
						var V = ut(y);
						return V === u && (function(Z) {
							Z.window_size = 2 * Z.w_size, pt(Z.head), Z.max_lazy_match = i[Z.level].max_lazy, Z.good_match = i[Z.level].good_length, Z.nice_match = i[Z.level].nice_length, Z.max_chain_length = i[Z.level].max_chain, Z.strstart = 0, Z.block_start = 0, Z.lookahead = 0, Z.insert = 0, Z.match_length = Z.prev_length = E - 1, Z.match_available = 0, Z.ins_h = 0;
						})(y.state), V;
					}
					function R(y, V, Z, k, C, Y) {
						if (!y) return o;
						var rt = 1;
						if (V === n && (V = 6), k < 0 ? (rt = 0, k = -k) : 15 < k && (rt = 2, k -= 16), C < 1 || d < C || Z !== e || k < 8 || 15 < k || V < 0 || 9 < V || Y < 0 || f < Y) return dt(y, o);
						k === 8 && (k = 9);
						var it = new X();
						return (y.state = it).strm = y, it.wrap = rt, it.gzhead = null, it.w_bits = k, it.w_size = 1 << it.w_bits, it.w_mask = it.w_size - 1, it.hash_bits = C + 7, it.hash_size = 1 << it.hash_bits, it.hash_mask = it.hash_size - 1, it.hash_shift = ~~((it.hash_bits + E - 1) / E), it.window = new s.Buf8(2 * it.w_size), it.head = new s.Buf16(it.hash_size), it.prev = new s.Buf16(it.w_size), it.lit_bufsize = 1 << C + 6, it.pending_buf_size = 4 * it.lit_bufsize, it.pending_buf = new s.Buf8(it.pending_buf_size), it.d_buf = 1 * it.lit_bufsize, it.l_buf = 3 * it.lit_bufsize, it.level = V, it.strategy = Y, it.method = Z, M(y);
					}
					i = [
						new W(0, 0, 0, 0, function(y, V) {
							var Z = 65535;
							for (Z > y.pending_buf_size - 5 && (Z = y.pending_buf_size - 5);;) {
								if (y.lookahead <= 1) {
									if (yt(y), y.lookahead === 0 && V === a) return S;
									if (y.lookahead === 0) break;
								}
								y.strstart += y.lookahead, y.lookahead = 0;
								var k = y.block_start + Z;
								if ((y.strstart === 0 || y.strstart >= k) && (y.lookahead = y.strstart - k, y.strstart = k, $(y, !1), y.strm.avail_out === 0) || y.strstart - y.block_start >= y.w_size - K && ($(y, !1), y.strm.avail_out === 0)) return S;
							}
							return y.insert = 0, V === p ? ($(y, !0), y.strm.avail_out === 0 ? et : Q) : (y.strstart > y.block_start && ($(y, !1), y.strm.avail_out), S);
						}),
						new W(4, 4, 8, 4, I),
						new W(4, 5, 16, 8, I),
						new W(4, 6, 32, 32, I),
						new W(4, 4, 16, 16, b),
						new W(8, 16, 32, 32, b),
						new W(8, 16, 128, 128, b),
						new W(8, 32, 128, 256, b),
						new W(32, 128, 258, 1024, b),
						new W(32, 258, 258, 4096, b)
					], A.deflateInit = function(y, V) {
						return R(y, V, e, 15, 8, 0);
					}, A.deflateInit2 = R, A.deflateReset = M, A.deflateResetKeep = ut, A.deflateSetHeader = function(y, V) {
						return y && y.state ? y.state.wrap !== 2 ? o : (y.state.gzhead = V, u) : o;
					}, A.deflate = function(y, V) {
						var Z, k, C, Y;
						if (!y || !y.state || 5 < V || V < 0) return y ? dt(y, o) : o;
						if (k = y.state, !y.output || !y.input && y.avail_in !== 0 || k.status === 666 && V !== p) return dt(y, y.avail_out === 0 ? -5 : o);
						if (k.strm = y, Z = k.last_flush, k.last_flush = V, k.status === B) if (k.wrap === 2) y.adler = 0, lt(k, 31), lt(k, 139), lt(k, 8), k.gzhead ? (lt(k, (k.gzhead.text ? 1 : 0) + (k.gzhead.hcrc ? 2 : 0) + (k.gzhead.extra ? 4 : 0) + (k.gzhead.name ? 8 : 0) + (k.gzhead.comment ? 16 : 0)), lt(k, 255 & k.gzhead.time), lt(k, k.gzhead.time >> 8 & 255), lt(k, k.gzhead.time >> 16 & 255), lt(k, k.gzhead.time >> 24 & 255), lt(k, k.level === 9 ? 2 : 2 <= k.strategy || k.level < 2 ? 4 : 0), lt(k, 255 & k.gzhead.os), k.gzhead.extra && k.gzhead.extra.length && (lt(k, 255 & k.gzhead.extra.length), lt(k, k.gzhead.extra.length >> 8 & 255)), k.gzhead.hcrc && (y.adler = _(y.adler, k.pending_buf, k.pending, 0)), k.gzindex = 0, k.status = 69) : (lt(k, 0), lt(k, 0), lt(k, 0), lt(k, 0), lt(k, 0), lt(k, k.level === 9 ? 2 : 2 <= k.strategy || k.level < 2 ? 4 : 0), lt(k, 3), k.status = L);
						else {
							var rt = e + (k.w_bits - 8 << 4) << 8;
							rt |= (2 <= k.strategy || k.level < 2 ? 0 : k.level < 6 ? 1 : k.level === 6 ? 2 : 3) << 6, k.strstart !== 0 && (rt |= 32), rt += 31 - rt % 31, k.status = L, st(k, rt), k.strstart !== 0 && (st(k, y.adler >>> 16), st(k, 65535 & y.adler)), y.adler = 1;
						}
						if (k.status === 69) if (k.gzhead.extra) {
							for (C = k.pending; k.gzindex < (65535 & k.gzhead.extra.length) && (k.pending !== k.pending_buf_size || (k.gzhead.hcrc && k.pending > C && (y.adler = _(y.adler, k.pending_buf, k.pending - C, C)), j(y), C = k.pending, k.pending !== k.pending_buf_size));) lt(k, 255 & k.gzhead.extra[k.gzindex]), k.gzindex++;
							k.gzhead.hcrc && k.pending > C && (y.adler = _(y.adler, k.pending_buf, k.pending - C, C)), k.gzindex === k.gzhead.extra.length && (k.gzindex = 0, k.status = 73);
						} else k.status = 73;
						if (k.status === 73) if (k.gzhead.name) {
							C = k.pending;
							do {
								if (k.pending === k.pending_buf_size && (k.gzhead.hcrc && k.pending > C && (y.adler = _(y.adler, k.pending_buf, k.pending - C, C)), j(y), C = k.pending, k.pending === k.pending_buf_size)) {
									Y = 1;
									break;
								}
								Y = k.gzindex < k.gzhead.name.length ? 255 & k.gzhead.name.charCodeAt(k.gzindex++) : 0, lt(k, Y);
							} while (Y !== 0);
							k.gzhead.hcrc && k.pending > C && (y.adler = _(y.adler, k.pending_buf, k.pending - C, C)), Y === 0 && (k.gzindex = 0, k.status = 91);
						} else k.status = 91;
						if (k.status === 91) if (k.gzhead.comment) {
							C = k.pending;
							do {
								if (k.pending === k.pending_buf_size && (k.gzhead.hcrc && k.pending > C && (y.adler = _(y.adler, k.pending_buf, k.pending - C, C)), j(y), C = k.pending, k.pending === k.pending_buf_size)) {
									Y = 1;
									break;
								}
								Y = k.gzindex < k.gzhead.comment.length ? 255 & k.gzhead.comment.charCodeAt(k.gzindex++) : 0, lt(k, Y);
							} while (Y !== 0);
							k.gzhead.hcrc && k.pending > C && (y.adler = _(y.adler, k.pending_buf, k.pending - C, C)), Y === 0 && (k.status = 103);
						} else k.status = 103;
						if (k.status === 103 && (k.gzhead.hcrc ? (k.pending + 2 > k.pending_buf_size && j(y), k.pending + 2 <= k.pending_buf_size && (lt(k, 255 & y.adler), lt(k, y.adler >> 8 & 255), y.adler = 0, k.status = L)) : k.status = L), k.pending !== 0) {
							if (j(y), y.avail_out === 0) return k.last_flush = -1, u;
						} else if (y.avail_in === 0 && nt(V) <= nt(Z) && V !== p) return dt(y, -5);
						if (k.status === 666 && y.avail_in !== 0) return dt(y, -5);
						if (y.avail_in !== 0 || k.lookahead !== 0 || V !== a && k.status !== 666) {
							var it = k.strategy === 2 ? (function(H, ct) {
								for (var ht;;) {
									if (H.lookahead === 0 && (yt(H), H.lookahead === 0)) {
										if (ct === a) return S;
										break;
									}
									if (H.match_length = 0, ht = t._tr_tally(H, 0, H.window[H.strstart]), H.lookahead--, H.strstart++, ht && ($(H, !1), H.strm.avail_out === 0)) return S;
								}
								return H.insert = 0, ct === p ? ($(H, !0), H.strm.avail_out === 0 ? et : Q) : H.last_lit && ($(H, !1), H.strm.avail_out === 0) ? S : q;
							})(k, V) : k.strategy === 3 ? (function(H, ct) {
								for (var ht, ot, mt, O, h = H.window;;) {
									if (H.lookahead <= z) {
										if (yt(H), H.lookahead <= z && ct === a) return S;
										if (H.lookahead === 0) break;
									}
									if (H.match_length = 0, H.lookahead >= E && 0 < H.strstart && (ot = h[mt = H.strstart - 1]) === h[++mt] && ot === h[++mt] && ot === h[++mt]) {
										O = H.strstart + z;
										do										;
while (ot === h[++mt] && ot === h[++mt] && ot === h[++mt] && ot === h[++mt] && ot === h[++mt] && ot === h[++mt] && ot === h[++mt] && ot === h[++mt] && mt < O);
										H.match_length = z - (O - mt), H.match_length > H.lookahead && (H.match_length = H.lookahead);
									}
									if (H.match_length >= E ? (ht = t._tr_tally(H, 1, H.match_length - E), H.lookahead -= H.match_length, H.strstart += H.match_length, H.match_length = 0) : (ht = t._tr_tally(H, 0, H.window[H.strstart]), H.lookahead--, H.strstart++), ht && ($(H, !1), H.strm.avail_out === 0)) return S;
								}
								return H.insert = 0, ct === p ? ($(H, !0), H.strm.avail_out === 0 ? et : Q) : H.last_lit && ($(H, !1), H.strm.avail_out === 0) ? S : q;
							})(k, V) : i[k.level].func(k, V);
							if (it !== et && it !== Q || (k.status = 666), it === S || it === et) return y.avail_out === 0 && (k.last_flush = -1), u;
							if (it === q && (V === 1 ? t._tr_align(k) : V !== 5 && (t._tr_stored_block(k, 0, 0, !1), V === 3 && (pt(k.head), k.lookahead === 0 && (k.strstart = 0, k.block_start = 0, k.insert = 0))), j(y), y.avail_out === 0)) return k.last_flush = -1, u;
						}
						return V !== p ? u : k.wrap <= 0 ? 1 : (k.wrap === 2 ? (lt(k, 255 & y.adler), lt(k, y.adler >> 8 & 255), lt(k, y.adler >> 16 & 255), lt(k, y.adler >> 24 & 255), lt(k, 255 & y.total_in), lt(k, y.total_in >> 8 & 255), lt(k, y.total_in >> 16 & 255), lt(k, y.total_in >> 24 & 255)) : (st(k, y.adler >>> 16), st(k, 65535 & y.adler)), j(y), 0 < k.wrap && (k.wrap = -k.wrap), k.pending !== 0 ? u : 1);
					}, A.deflateEnd = function(y) {
						var V;
						return y && y.state ? (V = y.state.status) !== B && V !== 69 && V !== 73 && V !== 91 && V !== 103 && V !== L && V !== 666 ? dt(y, o) : (y.state = null, V === L ? dt(y, -3) : u) : o;
					}, A.deflateSetDictionary = function(y, V) {
						var Z, k, C, Y, rt, it, H, ct, ht = V.length;
						if (!y || !y.state || (Y = (Z = y.state).wrap) === 2 || Y === 1 && Z.status !== B || Z.lookahead) return o;
						for (Y === 1 && (y.adler = m(y.adler, V, ht, 0)), Z.wrap = 0, ht >= Z.w_size && (Y === 0 && (pt(Z.head), Z.strstart = 0, Z.block_start = 0, Z.insert = 0), ct = new s.Buf8(Z.w_size), s.arraySet(ct, V, ht - Z.w_size, Z.w_size, 0), V = ct, ht = Z.w_size), rt = y.avail_in, it = y.next_in, H = y.input, y.avail_in = ht, y.next_in = 0, y.input = V, yt(Z); Z.lookahead >= E;) {
							for (k = Z.strstart, C = Z.lookahead - (E - 1); Z.ins_h = (Z.ins_h << Z.hash_shift ^ Z.window[k + E - 1]) & Z.hash_mask, Z.prev[k & Z.w_mask] = Z.head[Z.ins_h], Z.head[Z.ins_h] = k, k++, --C;);
							Z.strstart = k, Z.lookahead = E - 1, yt(Z);
						}
						return Z.strstart += Z.lookahead, Z.block_start = Z.strstart, Z.insert = Z.lookahead, Z.lookahead = 0, Z.match_length = Z.prev_length = E - 1, Z.match_available = 0, y.next_in = it, y.input = H, y.avail_in = rt, Z.wrap = Y, u;
					}, A.deflateInfo = "pako deflate (from Nodeca project)";
				}, {
					"../utils/common": 41,
					"./adler32": 43,
					"./crc32": 45,
					"./messages": 51,
					"./trees": 52
				}],
				47: [function(T, N, A) {
					"use strict";
					N.exports = function() {
						this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
					};
				}, {}],
				48: [function(T, N, A) {
					"use strict";
					N.exports = function(i, s) {
						var t = i.state, m = i.next_in, _, g, a, p, u, o, n, f, l, e, d, r, c, w, x, D, E, z, K, B, L, S = i.input, q;
						_ = m + (i.avail_in - 5), g = i.next_out, q = i.output, a = g - (s - i.avail_out), p = g + (i.avail_out - 257), u = t.dmax, o = t.wsize, n = t.whave, f = t.wnext, l = t.window, e = t.hold, d = t.bits, r = t.lencode, c = t.distcode, w = (1 << t.lenbits) - 1, x = (1 << t.distbits) - 1;
						t: do {
							d < 15 && (e += S[m++] << d, d += 8, e += S[m++] << d, d += 8), D = r[e & w];
							e: for (;;) {
								if (e >>>= E = D >>> 24, d -= E, (E = D >>> 16 & 255) === 0) q[g++] = 65535 & D;
								else {
									if (!(16 & E)) {
										if ((64 & E) == 0) {
											D = r[(65535 & D) + (e & (1 << E) - 1)];
											continue e;
										}
										if (32 & E) {
											t.mode = 12;
											break t;
										}
										i.msg = "invalid literal/length code", t.mode = 30;
										break t;
									}
									z = 65535 & D, (E &= 15) && (d < E && (e += S[m++] << d, d += 8), z += e & (1 << E) - 1, e >>>= E, d -= E), d < 15 && (e += S[m++] << d, d += 8, e += S[m++] << d, d += 8), D = c[e & x];
									r: for (;;) {
										if (e >>>= E = D >>> 24, d -= E, !(16 & (E = D >>> 16 & 255))) {
											if ((64 & E) == 0) {
												D = c[(65535 & D) + (e & (1 << E) - 1)];
												continue r;
											}
											i.msg = "invalid distance code", t.mode = 30;
											break t;
										}
										if (K = 65535 & D, d < (E &= 15) && (e += S[m++] << d, (d += 8) < E && (e += S[m++] << d, d += 8)), u < (K += e & (1 << E) - 1)) {
											i.msg = "invalid distance too far back", t.mode = 30;
											break t;
										}
										if (e >>>= E, d -= E, (E = g - a) < K) {
											if (n < (E = K - E) && t.sane) {
												i.msg = "invalid distance too far back", t.mode = 30;
												break t;
											}
											if (L = l, (B = 0) === f) {
												if (B += o - E, E < z) {
													for (z -= E; q[g++] = l[B++], --E;);
													B = g - K, L = q;
												}
											} else if (f < E) {
												if (B += o + f - E, (E -= f) < z) {
													for (z -= E; q[g++] = l[B++], --E;);
													if (B = 0, f < z) {
														for (z -= E = f; q[g++] = l[B++], --E;);
														B = g - K, L = q;
													}
												}
											} else if (B += f - E, E < z) {
												for (z -= E; q[g++] = l[B++], --E;);
												B = g - K, L = q;
											}
											for (; 2 < z;) q[g++] = L[B++], q[g++] = L[B++], q[g++] = L[B++], z -= 3;
											z && (q[g++] = L[B++], 1 < z && (q[g++] = L[B++]));
										} else {
											for (B = g - K; q[g++] = q[B++], q[g++] = q[B++], q[g++] = q[B++], 2 < (z -= 3););
											z && (q[g++] = q[B++], 1 < z && (q[g++] = q[B++]));
										}
										break;
									}
								}
								break;
							}
						} while (m < _ && g < p);
						m -= z = d >> 3, e &= (1 << (d -= z << 3)) - 1, i.next_in = m, i.next_out = g, i.avail_in = m < _ ? _ - m + 5 : 5 - (m - _), i.avail_out = g < p ? p - g + 257 : 257 - (g - p), t.hold = e, t.bits = d;
					};
				}, {}],
				49: [function(T, N, A) {
					"use strict";
					var i = T("../utils/common"), s = T("./adler32"), t = T("./crc32"), m = T("./inffast"), _ = T("./inftrees"), g = 1, a = 2, p = 0, u = -2, o = 1, n = 852, f = 592;
					function l(B) {
						return (B >>> 24 & 255) + (B >>> 8 & 65280) + ((65280 & B) << 8) + ((255 & B) << 24);
					}
					function e() {
						this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new i.Buf16(320), this.work = new i.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
					}
					function d(B) {
						var L;
						return B && B.state ? (L = B.state, B.total_in = B.total_out = L.total = 0, B.msg = "", L.wrap && (B.adler = 1 & L.wrap), L.mode = o, L.last = 0, L.havedict = 0, L.dmax = 32768, L.head = null, L.hold = 0, L.bits = 0, L.lencode = L.lendyn = new i.Buf32(n), L.distcode = L.distdyn = new i.Buf32(f), L.sane = 1, L.back = -1, p) : u;
					}
					function r(B) {
						var L;
						return B && B.state ? ((L = B.state).wsize = 0, L.whave = 0, L.wnext = 0, d(B)) : u;
					}
					function c(B, L) {
						var S, q;
						return B && B.state ? (q = B.state, L < 0 ? (S = 0, L = -L) : (S = 1 + (L >> 4), L < 48 && (L &= 15)), L && (L < 8 || 15 < L) ? u : (q.window !== null && q.wbits !== L && (q.window = null), q.wrap = S, q.wbits = L, r(B))) : u;
					}
					function w(B, L) {
						var S, q;
						return B ? (q = new e(), (B.state = q).window = null, (S = c(B, L)) !== p && (B.state = null), S) : u;
					}
					var x, D, E = !0;
					function z(B) {
						if (E) {
							var L;
							for (x = new i.Buf32(512), D = new i.Buf32(32), L = 0; L < 144;) B.lens[L++] = 8;
							for (; L < 256;) B.lens[L++] = 9;
							for (; L < 280;) B.lens[L++] = 7;
							for (; L < 288;) B.lens[L++] = 8;
							for (_(g, B.lens, 0, 288, x, 0, B.work, { bits: 9 }), L = 0; L < 32;) B.lens[L++] = 5;
							_(a, B.lens, 0, 32, D, 0, B.work, { bits: 5 }), E = !1;
						}
						B.lencode = x, B.lenbits = 9, B.distcode = D, B.distbits = 5;
					}
					function K(B, L, S, q) {
						var et, Q = B.state;
						return Q.window === null && (Q.wsize = 1 << Q.wbits, Q.wnext = 0, Q.whave = 0, Q.window = new i.Buf8(Q.wsize)), q >= Q.wsize ? (i.arraySet(Q.window, L, S - Q.wsize, Q.wsize, 0), Q.wnext = 0, Q.whave = Q.wsize) : (q < (et = Q.wsize - Q.wnext) && (et = q), i.arraySet(Q.window, L, S - q, et, Q.wnext), (q -= et) ? (i.arraySet(Q.window, L, S - q, q, 0), Q.wnext = q, Q.whave = Q.wsize) : (Q.wnext += et, Q.wnext === Q.wsize && (Q.wnext = 0), Q.whave < Q.wsize && (Q.whave += et))), 0;
					}
					A.inflateReset = r, A.inflateReset2 = c, A.inflateResetKeep = d, A.inflateInit = function(B) {
						return w(B, 15);
					}, A.inflateInit2 = w, A.inflate = function(B, L) {
						var S, q, et, Q, dt, nt, pt, j, $, lt, st, at, yt, I, b, W, X, ut, M, R, y, V, Z, k, C = 0, Y = new i.Buf8(4), rt = [
							16,
							17,
							18,
							0,
							8,
							7,
							9,
							6,
							10,
							5,
							11,
							4,
							12,
							3,
							13,
							2,
							14,
							1,
							15
						];
						if (!B || !B.state || !B.output || !B.input && B.avail_in !== 0) return u;
						(S = B.state).mode === 12 && (S.mode = 13), dt = B.next_out, et = B.output, pt = B.avail_out, Q = B.next_in, q = B.input, nt = B.avail_in, j = S.hold, $ = S.bits, lt = nt, st = pt, V = p;
						t: for (;;) switch (S.mode) {
							case o:
								if (S.wrap === 0) {
									S.mode = 13;
									break;
								}
								for (; $ < 16;) {
									if (nt === 0) break t;
									nt--, j += q[Q++] << $, $ += 8;
								}
								if (2 & S.wrap && j === 35615) {
									Y[S.check = 0] = 255 & j, Y[1] = j >>> 8 & 255, S.check = t(S.check, Y, 2, 0), $ = j = 0, S.mode = 2;
									break;
								}
								if (S.flags = 0, S.head && (S.head.done = !1), !(1 & S.wrap) || (((255 & j) << 8) + (j >> 8)) % 31) {
									B.msg = "incorrect header check", S.mode = 30;
									break;
								}
								if ((15 & j) != 8) {
									B.msg = "unknown compression method", S.mode = 30;
									break;
								}
								if ($ -= 4, y = 8 + (15 & (j >>>= 4)), S.wbits === 0) S.wbits = y;
								else if (y > S.wbits) {
									B.msg = "invalid window size", S.mode = 30;
									break;
								}
								S.dmax = 1 << y, B.adler = S.check = 1, S.mode = 512 & j ? 10 : 12, $ = j = 0;
								break;
							case 2:
								for (; $ < 16;) {
									if (nt === 0) break t;
									nt--, j += q[Q++] << $, $ += 8;
								}
								if (S.flags = j, (255 & S.flags) != 8) {
									B.msg = "unknown compression method", S.mode = 30;
									break;
								}
								if (57344 & S.flags) {
									B.msg = "unknown header flags set", S.mode = 30;
									break;
								}
								S.head && (S.head.text = j >> 8 & 1), 512 & S.flags && (Y[0] = 255 & j, Y[1] = j >>> 8 & 255, S.check = t(S.check, Y, 2, 0)), $ = j = 0, S.mode = 3;
							case 3:
								for (; $ < 32;) {
									if (nt === 0) break t;
									nt--, j += q[Q++] << $, $ += 8;
								}
								S.head && (S.head.time = j), 512 & S.flags && (Y[0] = 255 & j, Y[1] = j >>> 8 & 255, Y[2] = j >>> 16 & 255, Y[3] = j >>> 24 & 255, S.check = t(S.check, Y, 4, 0)), $ = j = 0, S.mode = 4;
							case 4:
								for (; $ < 16;) {
									if (nt === 0) break t;
									nt--, j += q[Q++] << $, $ += 8;
								}
								S.head && (S.head.xflags = 255 & j, S.head.os = j >> 8), 512 & S.flags && (Y[0] = 255 & j, Y[1] = j >>> 8 & 255, S.check = t(S.check, Y, 2, 0)), $ = j = 0, S.mode = 5;
							case 5:
								if (1024 & S.flags) {
									for (; $ < 16;) {
										if (nt === 0) break t;
										nt--, j += q[Q++] << $, $ += 8;
									}
									S.length = j, S.head && (S.head.extra_len = j), 512 & S.flags && (Y[0] = 255 & j, Y[1] = j >>> 8 & 255, S.check = t(S.check, Y, 2, 0)), $ = j = 0;
								} else S.head && (S.head.extra = null);
								S.mode = 6;
							case 6:
								if (1024 & S.flags && (nt < (at = S.length) && (at = nt), at && (S.head && (y = S.head.extra_len - S.length, S.head.extra || (S.head.extra = new Array(S.head.extra_len)), i.arraySet(S.head.extra, q, Q, at, y)), 512 & S.flags && (S.check = t(S.check, q, at, Q)), nt -= at, Q += at, S.length -= at), S.length)) break t;
								S.length = 0, S.mode = 7;
							case 7:
								if (2048 & S.flags) {
									if (nt === 0) break t;
									for (at = 0; y = q[Q + at++], S.head && y && S.length < 65536 && (S.head.name += String.fromCharCode(y)), y && at < nt;);
									if (512 & S.flags && (S.check = t(S.check, q, at, Q)), nt -= at, Q += at, y) break t;
								} else S.head && (S.head.name = null);
								S.length = 0, S.mode = 8;
							case 8:
								if (4096 & S.flags) {
									if (nt === 0) break t;
									for (at = 0; y = q[Q + at++], S.head && y && S.length < 65536 && (S.head.comment += String.fromCharCode(y)), y && at < nt;);
									if (512 & S.flags && (S.check = t(S.check, q, at, Q)), nt -= at, Q += at, y) break t;
								} else S.head && (S.head.comment = null);
								S.mode = 9;
							case 9:
								if (512 & S.flags) {
									for (; $ < 16;) {
										if (nt === 0) break t;
										nt--, j += q[Q++] << $, $ += 8;
									}
									if (j !== (65535 & S.check)) {
										B.msg = "header crc mismatch", S.mode = 30;
										break;
									}
									$ = j = 0;
								}
								S.head && (S.head.hcrc = S.flags >> 9 & 1, S.head.done = !0), B.adler = S.check = 0, S.mode = 12;
								break;
							case 10:
								for (; $ < 32;) {
									if (nt === 0) break t;
									nt--, j += q[Q++] << $, $ += 8;
								}
								B.adler = S.check = l(j), $ = j = 0, S.mode = 11;
							case 11:
								if (S.havedict === 0) return B.next_out = dt, B.avail_out = pt, B.next_in = Q, B.avail_in = nt, S.hold = j, S.bits = $, 2;
								B.adler = S.check = 1, S.mode = 12;
							case 12: if (L === 5 || L === 6) break t;
							case 13:
								if (S.last) {
									j >>>= 7 & $, $ -= 7 & $, S.mode = 27;
									break;
								}
								for (; $ < 3;) {
									if (nt === 0) break t;
									nt--, j += q[Q++] << $, $ += 8;
								}
								switch (S.last = 1 & j, $ -= 1, 3 & (j >>>= 1)) {
									case 0:
										S.mode = 14;
										break;
									case 1:
										if (z(S), S.mode = 20, L !== 6) break;
										j >>>= 2, $ -= 2;
										break t;
									case 2:
										S.mode = 17;
										break;
									case 3: B.msg = "invalid block type", S.mode = 30;
								}
								j >>>= 2, $ -= 2;
								break;
							case 14:
								for (j >>>= 7 & $, $ -= 7 & $; $ < 32;) {
									if (nt === 0) break t;
									nt--, j += q[Q++] << $, $ += 8;
								}
								if ((65535 & j) != (j >>> 16 ^ 65535)) {
									B.msg = "invalid stored block lengths", S.mode = 30;
									break;
								}
								if (S.length = 65535 & j, $ = j = 0, S.mode = 15, L === 6) break t;
							case 15: S.mode = 16;
							case 16:
								if (at = S.length) {
									if (nt < at && (at = nt), pt < at && (at = pt), at === 0) break t;
									i.arraySet(et, q, Q, at, dt), nt -= at, Q += at, pt -= at, dt += at, S.length -= at;
									break;
								}
								S.mode = 12;
								break;
							case 17:
								for (; $ < 14;) {
									if (nt === 0) break t;
									nt--, j += q[Q++] << $, $ += 8;
								}
								if (S.nlen = 257 + (31 & j), j >>>= 5, $ -= 5, S.ndist = 1 + (31 & j), j >>>= 5, $ -= 5, S.ncode = 4 + (15 & j), j >>>= 4, $ -= 4, 286 < S.nlen || 30 < S.ndist) {
									B.msg = "too many length or distance symbols", S.mode = 30;
									break;
								}
								S.have = 0, S.mode = 18;
							case 18:
								for (; S.have < S.ncode;) {
									for (; $ < 3;) {
										if (nt === 0) break t;
										nt--, j += q[Q++] << $, $ += 8;
									}
									S.lens[rt[S.have++]] = 7 & j, j >>>= 3, $ -= 3;
								}
								for (; S.have < 19;) S.lens[rt[S.have++]] = 0;
								if (S.lencode = S.lendyn, S.lenbits = 7, Z = { bits: S.lenbits }, V = _(0, S.lens, 0, 19, S.lencode, 0, S.work, Z), S.lenbits = Z.bits, V) {
									B.msg = "invalid code lengths set", S.mode = 30;
									break;
								}
								S.have = 0, S.mode = 19;
							case 19:
								for (; S.have < S.nlen + S.ndist;) {
									for (; W = (C = S.lencode[j & (1 << S.lenbits) - 1]) >>> 16 & 255, X = 65535 & C, !((b = C >>> 24) <= $);) {
										if (nt === 0) break t;
										nt--, j += q[Q++] << $, $ += 8;
									}
									if (X < 16) j >>>= b, $ -= b, S.lens[S.have++] = X;
									else {
										if (X === 16) {
											for (k = b + 2; $ < k;) {
												if (nt === 0) break t;
												nt--, j += q[Q++] << $, $ += 8;
											}
											if (j >>>= b, $ -= b, S.have === 0) {
												B.msg = "invalid bit length repeat", S.mode = 30;
												break;
											}
											y = S.lens[S.have - 1], at = 3 + (3 & j), j >>>= 2, $ -= 2;
										} else if (X === 17) {
											for (k = b + 3; $ < k;) {
												if (nt === 0) break t;
												nt--, j += q[Q++] << $, $ += 8;
											}
											$ -= b, y = 0, at = 3 + (7 & (j >>>= b)), j >>>= 3, $ -= 3;
										} else {
											for (k = b + 7; $ < k;) {
												if (nt === 0) break t;
												nt--, j += q[Q++] << $, $ += 8;
											}
											$ -= b, y = 0, at = 11 + (127 & (j >>>= b)), j >>>= 7, $ -= 7;
										}
										if (S.have + at > S.nlen + S.ndist) {
											B.msg = "invalid bit length repeat", S.mode = 30;
											break;
										}
										for (; at--;) S.lens[S.have++] = y;
									}
								}
								if (S.mode === 30) break;
								if (S.lens[256] === 0) {
									B.msg = "invalid code -- missing end-of-block", S.mode = 30;
									break;
								}
								if (S.lenbits = 9, Z = { bits: S.lenbits }, V = _(g, S.lens, 0, S.nlen, S.lencode, 0, S.work, Z), S.lenbits = Z.bits, V) {
									B.msg = "invalid literal/lengths set", S.mode = 30;
									break;
								}
								if (S.distbits = 6, S.distcode = S.distdyn, Z = { bits: S.distbits }, V = _(a, S.lens, S.nlen, S.ndist, S.distcode, 0, S.work, Z), S.distbits = Z.bits, V) {
									B.msg = "invalid distances set", S.mode = 30;
									break;
								}
								if (S.mode = 20, L === 6) break t;
							case 20: S.mode = 21;
							case 21:
								if (6 <= nt && 258 <= pt) {
									B.next_out = dt, B.avail_out = pt, B.next_in = Q, B.avail_in = nt, S.hold = j, S.bits = $, m(B, st), dt = B.next_out, et = B.output, pt = B.avail_out, Q = B.next_in, q = B.input, nt = B.avail_in, j = S.hold, $ = S.bits, S.mode === 12 && (S.back = -1);
									break;
								}
								for (S.back = 0; W = (C = S.lencode[j & (1 << S.lenbits) - 1]) >>> 16 & 255, X = 65535 & C, !((b = C >>> 24) <= $);) {
									if (nt === 0) break t;
									nt--, j += q[Q++] << $, $ += 8;
								}
								if (W && (240 & W) == 0) {
									for (ut = b, M = W, R = X; W = (C = S.lencode[R + ((j & (1 << ut + M) - 1) >> ut)]) >>> 16 & 255, X = 65535 & C, !(ut + (b = C >>> 24) <= $);) {
										if (nt === 0) break t;
										nt--, j += q[Q++] << $, $ += 8;
									}
									j >>>= ut, $ -= ut, S.back += ut;
								}
								if (j >>>= b, $ -= b, S.back += b, S.length = X, W === 0) {
									S.mode = 26;
									break;
								}
								if (32 & W) {
									S.back = -1, S.mode = 12;
									break;
								}
								if (64 & W) {
									B.msg = "invalid literal/length code", S.mode = 30;
									break;
								}
								S.extra = 15 & W, S.mode = 22;
							case 22:
								if (S.extra) {
									for (k = S.extra; $ < k;) {
										if (nt === 0) break t;
										nt--, j += q[Q++] << $, $ += 8;
									}
									S.length += j & (1 << S.extra) - 1, j >>>= S.extra, $ -= S.extra, S.back += S.extra;
								}
								S.was = S.length, S.mode = 23;
							case 23:
								for (; W = (C = S.distcode[j & (1 << S.distbits) - 1]) >>> 16 & 255, X = 65535 & C, !((b = C >>> 24) <= $);) {
									if (nt === 0) break t;
									nt--, j += q[Q++] << $, $ += 8;
								}
								if ((240 & W) == 0) {
									for (ut = b, M = W, R = X; W = (C = S.distcode[R + ((j & (1 << ut + M) - 1) >> ut)]) >>> 16 & 255, X = 65535 & C, !(ut + (b = C >>> 24) <= $);) {
										if (nt === 0) break t;
										nt--, j += q[Q++] << $, $ += 8;
									}
									j >>>= ut, $ -= ut, S.back += ut;
								}
								if (j >>>= b, $ -= b, S.back += b, 64 & W) {
									B.msg = "invalid distance code", S.mode = 30;
									break;
								}
								S.offset = X, S.extra = 15 & W, S.mode = 24;
							case 24:
								if (S.extra) {
									for (k = S.extra; $ < k;) {
										if (nt === 0) break t;
										nt--, j += q[Q++] << $, $ += 8;
									}
									S.offset += j & (1 << S.extra) - 1, j >>>= S.extra, $ -= S.extra, S.back += S.extra;
								}
								if (S.offset > S.dmax) {
									B.msg = "invalid distance too far back", S.mode = 30;
									break;
								}
								S.mode = 25;
							case 25:
								if (pt === 0) break t;
								if (at = st - pt, S.offset > at) {
									if ((at = S.offset - at) > S.whave && S.sane) {
										B.msg = "invalid distance too far back", S.mode = 30;
										break;
									}
									yt = at > S.wnext ? (at -= S.wnext, S.wsize - at) : S.wnext - at, at > S.length && (at = S.length), I = S.window;
								} else I = et, yt = dt - S.offset, at = S.length;
								for (pt < at && (at = pt), pt -= at, S.length -= at; et[dt++] = I[yt++], --at;);
								S.length === 0 && (S.mode = 21);
								break;
							case 26:
								if (pt === 0) break t;
								et[dt++] = S.length, pt--, S.mode = 21;
								break;
							case 27:
								if (S.wrap) {
									for (; $ < 32;) {
										if (nt === 0) break t;
										nt--, j |= q[Q++] << $, $ += 8;
									}
									if (st -= pt, B.total_out += st, S.total += st, st && (B.adler = S.check = S.flags ? t(S.check, et, st, dt - st) : s(S.check, et, st, dt - st)), st = pt, (S.flags ? j : l(j)) !== S.check) {
										B.msg = "incorrect data check", S.mode = 30;
										break;
									}
									$ = j = 0;
								}
								S.mode = 28;
							case 28:
								if (S.wrap && S.flags) {
									for (; $ < 32;) {
										if (nt === 0) break t;
										nt--, j += q[Q++] << $, $ += 8;
									}
									if (j !== (4294967295 & S.total)) {
										B.msg = "incorrect length check", S.mode = 30;
										break;
									}
									$ = j = 0;
								}
								S.mode = 29;
							case 29:
								V = 1;
								break t;
							case 30:
								V = -3;
								break t;
							case 31: return -4;
							default: return u;
						}
						return B.next_out = dt, B.avail_out = pt, B.next_in = Q, B.avail_in = nt, S.hold = j, S.bits = $, (S.wsize || st !== B.avail_out && S.mode < 30 && (S.mode < 27 || L !== 4)) && K(B, B.output, B.next_out, st - B.avail_out) ? (S.mode = 31, -4) : (lt -= B.avail_in, st -= B.avail_out, B.total_in += lt, B.total_out += st, S.total += st, S.wrap && st && (B.adler = S.check = S.flags ? t(S.check, et, st, B.next_out - st) : s(S.check, et, st, B.next_out - st)), B.data_type = S.bits + (S.last ? 64 : 0) + (S.mode === 12 ? 128 : 0) + (S.mode === 20 || S.mode === 15 ? 256 : 0), (lt == 0 && st === 0 || L === 4) && V === p && (V = -5), V);
					}, A.inflateEnd = function(B) {
						if (!B || !B.state) return u;
						var L = B.state;
						return L.window && (L.window = null), B.state = null, p;
					}, A.inflateGetHeader = function(B, L) {
						var S;
						return B && B.state ? (2 & (S = B.state).wrap) == 0 ? u : ((S.head = L).done = !1, p) : u;
					}, A.inflateSetDictionary = function(B, L) {
						var S, q = L.length;
						return B && B.state ? (S = B.state).wrap !== 0 && S.mode !== 11 ? u : S.mode === 11 && s(1, L, q, 0) !== S.check ? -3 : K(B, L, q, q) ? (S.mode = 31, -4) : (S.havedict = 1, p) : u;
					}, A.inflateInfo = "pako inflate (from Nodeca project)";
				}, {
					"../utils/common": 41,
					"./adler32": 43,
					"./crc32": 45,
					"./inffast": 48,
					"./inftrees": 50
				}],
				50: [function(T, N, A) {
					"use strict";
					var i = T("../utils/common"), s = [
						3,
						4,
						5,
						6,
						7,
						8,
						9,
						10,
						11,
						13,
						15,
						17,
						19,
						23,
						27,
						31,
						35,
						43,
						51,
						59,
						67,
						83,
						99,
						115,
						131,
						163,
						195,
						227,
						258,
						0,
						0
					], t = [
						16,
						16,
						16,
						16,
						16,
						16,
						16,
						16,
						17,
						17,
						17,
						17,
						18,
						18,
						18,
						18,
						19,
						19,
						19,
						19,
						20,
						20,
						20,
						20,
						21,
						21,
						21,
						21,
						16,
						72,
						78
					], m = [
						1,
						2,
						3,
						4,
						5,
						7,
						9,
						13,
						17,
						25,
						33,
						49,
						65,
						97,
						129,
						193,
						257,
						385,
						513,
						769,
						1025,
						1537,
						2049,
						3073,
						4097,
						6145,
						8193,
						12289,
						16385,
						24577,
						0,
						0
					], _ = [
						16,
						16,
						16,
						16,
						17,
						17,
						18,
						18,
						19,
						19,
						20,
						20,
						21,
						21,
						22,
						22,
						23,
						23,
						24,
						24,
						25,
						25,
						26,
						26,
						27,
						27,
						28,
						28,
						29,
						29,
						64,
						64
					];
					N.exports = function(g, a, p, u, o, n, f, l) {
						var e, d, r, c, w, x, D, E, z, K = l.bits, B = 0, L = 0, S = 0, q = 0, et = 0, Q = 0, dt = 0, nt = 0, pt = 0, j = 0, $ = null, lt = 0, st = new i.Buf16(16), at = new i.Buf16(16), yt = null, I = 0;
						for (B = 0; B <= 15; B++) st[B] = 0;
						for (L = 0; L < u; L++) st[a[p + L]]++;
						for (et = K, q = 15; 1 <= q && st[q] === 0; q--);
						if (q < et && (et = q), q === 0) return o[n++] = 20971520, o[n++] = 20971520, l.bits = 1, 0;
						for (S = 1; S < q && st[S] === 0; S++);
						for (et < S && (et = S), B = nt = 1; B <= 15; B++) if (nt <<= 1, (nt -= st[B]) < 0) return -1;
						if (0 < nt && (g === 0 || q !== 1)) return -1;
						for (at[1] = 0, B = 1; B < 15; B++) at[B + 1] = at[B] + st[B];
						for (L = 0; L < u; L++) a[p + L] !== 0 && (f[at[a[p + L]]++] = L);
						if (x = g === 0 ? ($ = yt = f, 19) : g === 1 ? ($ = s, lt -= 257, yt = t, I -= 257, 256) : ($ = m, yt = _, -1), B = S, w = n, dt = L = j = 0, r = -1, c = (pt = 1 << (Q = et)) - 1, g === 1 && 852 < pt || g === 2 && 592 < pt) return 1;
						for (;;) {
							for (D = B - dt, z = f[L] < x ? (E = 0, f[L]) : f[L] > x ? (E = yt[I + f[L]], $[lt + f[L]]) : (E = 96, 0), e = 1 << B - dt, S = d = 1 << Q; o[w + (j >> dt) + (d -= e)] = D << 24 | E << 16 | z | 0, d !== 0;);
							for (e = 1 << B - 1; j & e;) e >>= 1;
							if (e !== 0 ? (j &= e - 1, j += e) : j = 0, L++, --st[B] == 0) {
								if (B === q) break;
								B = a[p + f[L]];
							}
							if (et < B && (j & c) !== r) {
								for (dt === 0 && (dt = et), w += S, nt = 1 << (Q = B - dt); Q + dt < q && !((nt -= st[Q + dt]) <= 0);) Q++, nt <<= 1;
								if (pt += 1 << Q, g === 1 && 852 < pt || g === 2 && 592 < pt) return 1;
								o[r = j & c] = et << 24 | Q << 16 | w - n | 0;
							}
						}
						return j !== 0 && (o[w + j] = B - dt << 24 | 4194304), l.bits = et, 0;
					};
				}, { "../utils/common": 41 }],
				51: [function(T, N, A) {
					"use strict";
					N.exports = {
						2: "need dictionary",
						1: "stream end",
						0: "",
						"-1": "file error",
						"-2": "stream error",
						"-3": "data error",
						"-4": "insufficient memory",
						"-5": "buffer error",
						"-6": "incompatible version"
					};
				}, {}],
				52: [function(T, N, A) {
					"use strict";
					var i = T("../utils/common"), s = 0, t = 1;
					function m(C) {
						for (var Y = C.length; 0 <= --Y;) C[Y] = 0;
					}
					var _ = 0, g = 29, a = 256, p = a + 1 + g, u = 30, o = 19, n = 2 * p + 1, f = 15, l = 16, e = 7, d = 256, r = 16, c = 17, w = 18, x = [
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						1,
						1,
						1,
						1,
						2,
						2,
						2,
						2,
						3,
						3,
						3,
						3,
						4,
						4,
						4,
						4,
						5,
						5,
						5,
						5,
						0
					], D = [
						0,
						0,
						0,
						0,
						1,
						1,
						2,
						2,
						3,
						3,
						4,
						4,
						5,
						5,
						6,
						6,
						7,
						7,
						8,
						8,
						9,
						9,
						10,
						10,
						11,
						11,
						12,
						12,
						13,
						13
					], E = [
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						2,
						3,
						7
					], z = [
						16,
						17,
						18,
						0,
						8,
						7,
						9,
						6,
						10,
						5,
						11,
						4,
						12,
						3,
						13,
						2,
						14,
						1,
						15
					], K = new Array(2 * (p + 2));
					m(K);
					var B = new Array(2 * u);
					m(B);
					var L = new Array(512);
					m(L);
					var S = new Array(256);
					m(S);
					var q = new Array(g);
					m(q);
					var et, Q, dt, nt = new Array(u);
					function pt(C, Y, rt, it, H) {
						this.static_tree = C, this.extra_bits = Y, this.extra_base = rt, this.elems = it, this.max_length = H, this.has_stree = C && C.length;
					}
					function j(C, Y) {
						this.dyn_tree = C, this.max_code = 0, this.stat_desc = Y;
					}
					function $(C) {
						return C < 256 ? L[C] : L[256 + (C >>> 7)];
					}
					function lt(C, Y) {
						C.pending_buf[C.pending++] = 255 & Y, C.pending_buf[C.pending++] = Y >>> 8 & 255;
					}
					function st(C, Y, rt) {
						C.bi_valid > l - rt ? (C.bi_buf |= Y << C.bi_valid & 65535, lt(C, C.bi_buf), C.bi_buf = Y >> l - C.bi_valid, C.bi_valid += rt - l) : (C.bi_buf |= Y << C.bi_valid & 65535, C.bi_valid += rt);
					}
					function at(C, Y, rt) {
						st(C, rt[2 * Y], rt[2 * Y + 1]);
					}
					function yt(C, Y) {
						for (var rt = 0; rt |= 1 & C, C >>>= 1, rt <<= 1, 0 < --Y;);
						return rt >>> 1;
					}
					function I(C, Y, rt) {
						var it, H, ct = new Array(f + 1), ht = 0;
						for (it = 1; it <= f; it++) ct[it] = ht = ht + rt[it - 1] << 1;
						for (H = 0; H <= Y; H++) {
							var ot = C[2 * H + 1];
							ot !== 0 && (C[2 * H] = yt(ct[ot]++, ot));
						}
					}
					function b(C) {
						var Y;
						for (Y = 0; Y < p; Y++) C.dyn_ltree[2 * Y] = 0;
						for (Y = 0; Y < u; Y++) C.dyn_dtree[2 * Y] = 0;
						for (Y = 0; Y < o; Y++) C.bl_tree[2 * Y] = 0;
						C.dyn_ltree[2 * d] = 1, C.opt_len = C.static_len = 0, C.last_lit = C.matches = 0;
					}
					function W(C) {
						8 < C.bi_valid ? lt(C, C.bi_buf) : 0 < C.bi_valid && (C.pending_buf[C.pending++] = C.bi_buf), C.bi_buf = 0, C.bi_valid = 0;
					}
					function X(C, Y, rt, it) {
						var H = 2 * Y, ct = 2 * rt;
						return C[H] < C[ct] || C[H] === C[ct] && it[Y] <= it[rt];
					}
					function ut(C, Y, rt) {
						for (var it = C.heap[rt], H = rt << 1; H <= C.heap_len && (H < C.heap_len && X(Y, C.heap[H + 1], C.heap[H], C.depth) && H++, !X(Y, it, C.heap[H], C.depth));) C.heap[rt] = C.heap[H], rt = H, H <<= 1;
						C.heap[rt] = it;
					}
					function M(C, Y, rt) {
						var it, H, ct, ht, ot = 0;
						if (C.last_lit !== 0) for (; it = C.pending_buf[C.d_buf + 2 * ot] << 8 | C.pending_buf[C.d_buf + 2 * ot + 1], H = C.pending_buf[C.l_buf + ot], ot++, it === 0 ? at(C, H, Y) : (at(C, (ct = S[H]) + a + 1, Y), (ht = x[ct]) !== 0 && st(C, H -= q[ct], ht), at(C, ct = $(--it), rt), (ht = D[ct]) !== 0 && st(C, it -= nt[ct], ht)), ot < C.last_lit;);
						at(C, d, Y);
					}
					function R(C, Y) {
						var rt, it, H, ct = Y.dyn_tree, ht = Y.stat_desc.static_tree, ot = Y.stat_desc.has_stree, mt = Y.stat_desc.elems, O = -1;
						for (C.heap_len = 0, C.heap_max = n, rt = 0; rt < mt; rt++) ct[2 * rt] !== 0 ? (C.heap[++C.heap_len] = O = rt, C.depth[rt] = 0) : ct[2 * rt + 1] = 0;
						for (; C.heap_len < 2;) ct[2 * (H = C.heap[++C.heap_len] = O < 2 ? ++O : 0)] = 1, C.depth[H] = 0, C.opt_len--, ot && (C.static_len -= ht[2 * H + 1]);
						for (Y.max_code = O, rt = C.heap_len >> 1; 1 <= rt; rt--) ut(C, ct, rt);
						for (H = mt; rt = C.heap[1], C.heap[1] = C.heap[C.heap_len--], ut(C, ct, 1), it = C.heap[1], C.heap[--C.heap_max] = rt, C.heap[--C.heap_max] = it, ct[2 * H] = ct[2 * rt] + ct[2 * it], C.depth[H] = (C.depth[rt] >= C.depth[it] ? C.depth[rt] : C.depth[it]) + 1, ct[2 * rt + 1] = ct[2 * it + 1] = H, C.heap[1] = H++, ut(C, ct, 1), 2 <= C.heap_len;);
						C.heap[--C.heap_max] = C.heap[1], (function(h, v) {
							var P, G, J, tt, gt, wt, bt = v.dyn_tree, vt = v.max_code, _t = v.stat_desc.static_tree, Gr = v.stat_desc.has_stree, Vr = v.stat_desc.extra_bits, qe = v.stat_desc.extra_base, kt = v.stat_desc.max_length, Ht = 0;
							for (tt = 0; tt <= f; tt++) h.bl_count[tt] = 0;
							for (bt[2 * h.heap[h.heap_max] + 1] = 0, P = h.heap_max + 1; P < n; P++) kt < (tt = bt[2 * bt[2 * (G = h.heap[P]) + 1] + 1] + 1) && (tt = kt, Ht++), bt[2 * G + 1] = tt, vt < G || (h.bl_count[tt]++, gt = 0, qe <= G && (gt = Vr[G - qe]), wt = bt[2 * G], h.opt_len += wt * (tt + gt), Gr && (h.static_len += wt * (_t[2 * G + 1] + gt)));
							if (Ht !== 0) {
								do {
									for (tt = kt - 1; h.bl_count[tt] === 0;) tt--;
									h.bl_count[tt]--, h.bl_count[tt + 1] += 2, h.bl_count[kt]--, Ht -= 2;
								} while (0 < Ht);
								for (tt = kt; tt !== 0; tt--) for (G = h.bl_count[tt]; G !== 0;) vt < (J = h.heap[--P]) || (bt[2 * J + 1] !== tt && (h.opt_len += (tt - bt[2 * J + 1]) * bt[2 * J], bt[2 * J + 1] = tt), G--);
							}
						})(C, Y), I(ct, O, C.bl_count);
					}
					function y(C, Y, rt) {
						var it, H, ct = -1, ht = Y[1], ot = 0, mt = 7, O = 4;
						for (ht === 0 && (mt = 138, O = 3), Y[2 * (rt + 1) + 1] = 65535, it = 0; it <= rt; it++) H = ht, ht = Y[2 * (it + 1) + 1], ++ot < mt && H === ht || (ot < O ? C.bl_tree[2 * H] += ot : H !== 0 ? (H !== ct && C.bl_tree[2 * H]++, C.bl_tree[2 * r]++) : ot <= 10 ? C.bl_tree[2 * c]++ : C.bl_tree[2 * w]++, ct = H, O = (ot = 0) === ht ? (mt = 138, 3) : H === ht ? (mt = 6, 3) : (mt = 7, 4));
					}
					function V(C, Y, rt) {
						var it, H, ct = -1, ht = Y[1], ot = 0, mt = 7, O = 4;
						for (ht === 0 && (mt = 138, O = 3), it = 0; it <= rt; it++) if (H = ht, ht = Y[2 * (it + 1) + 1], !(++ot < mt && H === ht)) {
							if (ot < O) for (; at(C, H, C.bl_tree), --ot != 0;);
							else H !== 0 ? (H !== ct && (at(C, H, C.bl_tree), ot--), at(C, r, C.bl_tree), st(C, ot - 3, 2)) : ot <= 10 ? (at(C, c, C.bl_tree), st(C, ot - 3, 3)) : (at(C, w, C.bl_tree), st(C, ot - 11, 7));
							ct = H, O = (ot = 0) === ht ? (mt = 138, 3) : H === ht ? (mt = 6, 3) : (mt = 7, 4);
						}
					}
					m(nt);
					var Z = !1;
					function k(C, Y, rt, it) {
						st(C, (_ << 1) + (it ? 1 : 0), 3), (function(H, ct, ht, ot) {
							W(H), ot && (lt(H, ht), lt(H, ~ht)), i.arraySet(H.pending_buf, H.window, ct, ht, H.pending), H.pending += ht;
						})(C, Y, rt, !0);
					}
					A._tr_init = function(C) {
						Z || ((function() {
							var Y, rt, it, H, ct, ht = new Array(f + 1);
							for (H = it = 0; H < g - 1; H++) for (q[H] = it, Y = 0; Y < 1 << x[H]; Y++) S[it++] = H;
							for (S[it - 1] = H, H = ct = 0; H < 16; H++) for (nt[H] = ct, Y = 0; Y < 1 << D[H]; Y++) L[ct++] = H;
							for (ct >>= 7; H < u; H++) for (nt[H] = ct << 7, Y = 0; Y < 1 << D[H] - 7; Y++) L[256 + ct++] = H;
							for (rt = 0; rt <= f; rt++) ht[rt] = 0;
							for (Y = 0; Y <= 143;) K[2 * Y + 1] = 8, Y++, ht[8]++;
							for (; Y <= 255;) K[2 * Y + 1] = 9, Y++, ht[9]++;
							for (; Y <= 279;) K[2 * Y + 1] = 7, Y++, ht[7]++;
							for (; Y <= 287;) K[2 * Y + 1] = 8, Y++, ht[8]++;
							for (I(K, p + 1, ht), Y = 0; Y < u; Y++) B[2 * Y + 1] = 5, B[2 * Y] = yt(Y, 5);
							et = new pt(K, x, a + 1, p, f), Q = new pt(B, D, 0, u, f), dt = new pt(new Array(0), E, 0, o, e);
						})(), Z = !0), C.l_desc = new j(C.dyn_ltree, et), C.d_desc = new j(C.dyn_dtree, Q), C.bl_desc = new j(C.bl_tree, dt), C.bi_buf = 0, C.bi_valid = 0, b(C);
					}, A._tr_stored_block = k, A._tr_flush_block = function(C, Y, rt, it) {
						var H, ct, ht = 0;
						0 < C.level ? (C.strm.data_type === 2 && (C.strm.data_type = (function(ot) {
							var mt, O = 4093624447;
							for (mt = 0; mt <= 31; mt++, O >>>= 1) if (1 & O && ot.dyn_ltree[2 * mt] !== 0) return s;
							if (ot.dyn_ltree[18] !== 0 || ot.dyn_ltree[20] !== 0 || ot.dyn_ltree[26] !== 0) return t;
							for (mt = 32; mt < a; mt++) if (ot.dyn_ltree[2 * mt] !== 0) return t;
							return s;
						})(C)), R(C, C.l_desc), R(C, C.d_desc), ht = (function(ot) {
							var mt;
							for (y(ot, ot.dyn_ltree, ot.l_desc.max_code), y(ot, ot.dyn_dtree, ot.d_desc.max_code), R(ot, ot.bl_desc), mt = o - 1; 3 <= mt && ot.bl_tree[2 * z[mt] + 1] === 0; mt--);
							return ot.opt_len += 3 * (mt + 1) + 5 + 5 + 4, mt;
						})(C), H = C.opt_len + 3 + 7 >>> 3, (ct = C.static_len + 3 + 7 >>> 3) <= H && (H = ct)) : H = ct = rt + 5, rt + 4 <= H && Y !== -1 ? k(C, Y, rt, it) : C.strategy === 4 || ct === H ? (st(C, 2 + (it ? 1 : 0), 3), M(C, K, B)) : (st(C, 4 + (it ? 1 : 0), 3), (function(ot, mt, O, h) {
							var v;
							for (st(ot, mt - 257, 5), st(ot, O - 1, 5), st(ot, h - 4, 4), v = 0; v < h; v++) st(ot, ot.bl_tree[2 * z[v] + 1], 3);
							V(ot, ot.dyn_ltree, mt - 1), V(ot, ot.dyn_dtree, O - 1);
						})(C, C.l_desc.max_code + 1, C.d_desc.max_code + 1, ht + 1), M(C, C.dyn_ltree, C.dyn_dtree)), b(C), it && W(C);
					}, A._tr_tally = function(C, Y, rt) {
						return C.pending_buf[C.d_buf + 2 * C.last_lit] = Y >>> 8 & 255, C.pending_buf[C.d_buf + 2 * C.last_lit + 1] = 255 & Y, C.pending_buf[C.l_buf + C.last_lit] = 255 & rt, C.last_lit++, Y === 0 ? C.dyn_ltree[2 * rt]++ : (C.matches++, Y--, C.dyn_ltree[2 * (S[rt] + a + 1)]++, C.dyn_dtree[2 * $(Y)]++), C.last_lit === C.lit_bufsize - 1;
					}, A._tr_align = function(C) {
						st(C, 2, 3), at(C, d, K), (function(Y) {
							Y.bi_valid === 16 ? (lt(Y, Y.bi_buf), Y.bi_buf = 0, Y.bi_valid = 0) : 8 <= Y.bi_valid && (Y.pending_buf[Y.pending++] = 255 & Y.bi_buf, Y.bi_buf >>= 8, Y.bi_valid -= 8);
						})(C);
					};
				}, { "../utils/common": 41 }],
				53: [function(T, N, A) {
					"use strict";
					N.exports = function() {
						this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
					};
				}, {}],
				54: [function(T, N, A) {
					(function(i) {
						(function(s, t) {
							"use strict";
							if (!s.setImmediate) {
								var m, _, g, a, p = 1, u = {}, o = !1, n = s.document, f = Object.getPrototypeOf && Object.getPrototypeOf(s);
								f = f && f.setTimeout ? f : s, m = {}.toString.call(s.process) === "[object process]" ? function(r) {
									process.nextTick(function() {
										e(r);
									});
								} : (function() {
									if (s.postMessage && !s.importScripts) {
										var r = !0, c = s.onmessage;
										return s.onmessage = function() {
											r = !1;
										}, s.postMessage("", "*"), s.onmessage = c, r;
									}
								})() ? (a = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", d, !1) : s.attachEvent("onmessage", d), function(r) {
									s.postMessage(a + r, "*");
								}) : s.MessageChannel ? ((g = new MessageChannel()).port1.onmessage = function(r) {
									e(r.data);
								}, function(r) {
									g.port2.postMessage(r);
								}) : n && "onreadystatechange" in n.createElement("script") ? (_ = n.documentElement, function(r) {
									var c = n.createElement("script");
									c.onreadystatechange = function() {
										e(r), c.onreadystatechange = null, _.removeChild(c), c = null;
									}, _.appendChild(c);
								}) : function(r) {
									setTimeout(e, 0, r);
								}, f.setImmediate = function(r) {
									typeof r != "function" && (r = new Function("" + r));
									for (var c = new Array(arguments.length - 1), w = 0; w < c.length; w++) c[w] = arguments[w + 1];
									return u[p] = {
										callback: r,
										args: c
									}, m(p), p++;
								}, f.clearImmediate = l;
							}
							function l(r) {
								delete u[r];
							}
							function e(r) {
								if (o) setTimeout(e, 0, r);
								else {
									var c = u[r];
									if (c) {
										o = !0;
										try {
											(function(w) {
												var x = w.callback, D = w.args;
												switch (D.length) {
													case 0:
														x();
														break;
													case 1:
														x(D[0]);
														break;
													case 2:
														x(D[0], D[1]);
														break;
													case 3:
														x(D[0], D[1], D[2]);
														break;
													default: x.apply(t, D);
												}
											})(c);
										} finally {
											l(r), o = !1;
										}
									}
								}
							}
							function d(r) {
								r.source === s && typeof r.data == "string" && r.data.indexOf(a) === 0 && e(+r.data.slice(a.length));
							}
						})(typeof self > "u" ? i === void 0 ? this : i : self);
					}).call(this, typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : {});
				}, {}]
			}, {}, [10])(10);
		});
	})), Ke = St({
		$id: () => Kt,
		$schema: () => Zt,
		additionalProperties: () => !0,
		default: () => he,
		description: () => Qt,
		properties: () => re,
		required: () => ee,
		title: () => Jt,
		type: () => te
	}), Zt, Kt, Jt, Qt, te, ee, re, he, Qe = Tt((() => {
		Zt = "http://json-schema.org/draft-07/schema#", Kt = "https://flat.io/schemas/flat-format/v1.json", Jt = "Flat Score Format Manifest v1", Qt = "Manifest for the .flat container format — a ZIP archive (comment: \"flat-score/v1\") containing manifest.json, a score JSON file, and an optional thumbnail. The container uses DEFLATE compression. Directory layout: manifest.json + latest.json + thumbnail.png (optional). Versioning: additive changes keep formatVersion 1 (additionalProperties: true); breaking changes bump to 2+.", te = "object", ee = [
			"formatVersion",
			"createdWith",
			"score",
			"files"
		], re = {
			$schema: { type: "string" },
			formatVersion: {
				type: "integer",
				const: 1,
				description: "Format major version. Older apps reject unknown versions with \"please update Flat\"."
			},
			createdWith: {
				type: "object",
				description: "Identity of the application that created this file.",
				required: ["app", "version"],
				additionalProperties: !1,
				properties: {
					app: {
						type: "string",
						description: "Application identifier (e.g. \"flat-desktop\")."
					},
					version: {
						type: "string",
						description: "Semver application version (e.g. \"1.2.0\")."
					},
					build: {
						type: "string",
						description: "Optional build hash or identifier."
					}
				}
			},
			score: {
				type: "object",
				description: "Score metadata. Extracted at save time for display without parsing the full score.",
				required: ["title"],
				additionalProperties: !0,
				properties: {
					title: {
						type: "string",
						description: "Score title."
					},
					composer: {
						type: "string",
						description: "Composer name."
					},
					creationDate: {
						type: "string",
						format: "date-time",
						description: "ISO 8601 creation timestamp."
					},
					modificationDate: {
						type: "string",
						format: "date-time",
						description: "ISO 8601 last modification timestamp."
					}
				}
			},
			cloud: {
				type: "object",
				description: "Present when the local file matches a cloud revision with no local-only changes. Cleared when local edits diverge from the cloud revision.",
				required: [
					"scoreId",
					"revisionId",
					"revisionDate"
				],
				additionalProperties: !1,
				properties: {
					scoreId: {
						type: "string",
						description: "Cloud score identifier."
					},
					revisionId: {
						type: "string",
						description: "Cloud revision identifier."
					},
					revisionDate: {
						type: "string",
						format: "date-time",
						description: "ISO 8601 timestamp of the cloud revision."
					}
				}
			},
			summary: {
				type: "object",
				description: "Quick preview data extracted from the score at save time, avoiding full score parsing.",
				additionalProperties: !0,
				properties: {
					parts: {
						type: "array",
						description: "List of score parts (instruments).",
						items: {
							type: "object",
							required: ["name"],
							additionalProperties: !0,
							properties: {
								name: {
									type: "string",
									description: "Part/instrument display name."
								},
								midiProgram: {
									type: "integer",
									minimum: 0,
									description: "MIDI program number. Standard GM range is 0-127; Flat extends this for percussion and custom instruments."
								}
							}
						}
					},
					measures: {
						type: "integer",
						minimum: 0,
						description: "Total number of measures in the score."
					}
				}
			},
			files: {
				type: "object",
				description: "Maps logical file roles to ZIP entry paths. Paths must be relative with no traversal (..).",
				required: ["score"],
				additionalProperties: !0,
				properties: {
					score: {
						type: "string",
						description: "ZIP entry path for the Adagio JSON score (e.g. \"latest.json\")."
					},
					thumbnail: {
						type: "string",
						description: "ZIP entry path for the optional thumbnail image (e.g. \"thumbnail.png\")."
					}
				}
			}
		}, he = {
			$schema: Zt,
			$id: Kt,
			title: Jt,
			description: Qt,
			type: te,
			required: ee,
			additionalProperties: !0,
			properties: re
		};
	})), tr = ft(((U) => {
		var F = U && U.__importDefault || function(a) {
			return a && a.__esModule ? a : { default: a };
		};
		Object.defineProperty(U, "__esModule", { value: !0 }), U.FlatFormatError = void 0, U.inflateFlatFile = _, U.deflateFlatFile = g;
		const T = F(le()), N = F((Qe(), At(Ke))), A = "flat-score/v1", i = "manifest.json";
		var s = class extends Error {
			constructor(a) {
				super(a), this.name = "FlatFormatError";
			}
		};
		U.FlatFormatError = s;
		function t(a, p) {
			if (a.startsWith("/") || a.startsWith("\\") || a.includes("..") || /^[a-zA-Z]:/.test(a)) throw new s(`Invalid manifest: "${p}" contains an unsafe path`);
		}
		function m(a) {
			if (typeof a != "object" || a === null) throw new s("Invalid manifest: not an object");
			const p = a, u = N.default.required;
			for (const f of u) if (!(f in p)) throw new s(`Invalid manifest: missing required field "${f}"`);
			if (p.formatVersion !== 1) throw typeof p.formatVersion == "number" && p.formatVersion > 1 ? new s("This file was created with a newer version of Flat. Please update the app to open it.") : new s(`Invalid manifest: unsupported formatVersion "${p.formatVersion}"`);
			if (typeof p.createdWith != "object" || p.createdWith === null) throw new s("Invalid manifest: \"createdWith\" must be an object");
			const o = p.createdWith;
			if (typeof o.app != "string" || typeof o.version != "string") throw new s("Invalid manifest: \"createdWith\" requires \"app\" and \"version\" strings");
			if (typeof p.score != "object" || p.score === null) throw new s("Invalid manifest: \"score\" must be an object");
			if (typeof p.score.title != "string") throw new s("Invalid manifest: \"score.title\" must be a string");
			if (typeof p.files != "object" || p.files === null) throw new s("Invalid manifest: \"files\" must be an object");
			const n = p.files;
			if (typeof n.score != "string") throw new s("Invalid manifest: \"files.score\" must be a string");
			if ("thumbnail" in n && typeof n.thumbnail != "string") throw new s("Invalid manifest: \"files.thumbnail\" must be a string");
			t(n.score, "files.score"), typeof n.thumbnail == "string" && t(n.thumbnail, "files.thumbnail");
		}
		async function _(a) {
			let p;
			try {
				p = await T.default.loadAsync(a);
			} catch {
				throw new s("Invalid .flat file: not a valid ZIP archive");
			}
			if (p.comment !== A) throw new s("Invalid .flat file: missing format identifier");
			const u = p.file(i);
			if (!u) throw new s("Invalid .flat file: missing manifest.json");
			let o;
			try {
				const d = await u.async("string");
				o = JSON.parse(d);
			} catch {
				throw new s("Invalid .flat file: manifest.json is not valid JSON");
			}
			m(o);
			const n = o.files.score, f = p.file(n);
			if (!f) throw new s(`Invalid .flat file: score file "${n}" not found in archive`);
			let l;
			try {
				const d = await f.async("string");
				l = JSON.parse(d);
			} catch {
				throw new s("Invalid .flat file: score data is not valid JSON");
			}
			let e;
			if (o.files.thumbnail) {
				const d = p.file(o.files.thumbnail);
				d && (e = await d.async("nodebuffer"));
			}
			return {
				manifest: o,
				score: l,
				thumbnail: e
			};
		}
		async function g(a) {
			const { manifest: p, score: u, thumbnail: o } = a;
			m(p);
			const n = new T.default();
			return n.file(i, JSON.stringify(p, null, 2)), n.file(p.files.score, JSON.stringify(u)), o && p.files.thumbnail && n.file(p.files.thumbnail, o), n.generateAsync({
				compression: "DEFLATE",
				type: "nodebuffer",
				comment: A
			});
		}
	})), It = ft(((U, F) => {
		(function() {
			var T, N, A, i, s, t, m, _ = [].slice, g = {}.hasOwnProperty;
			T = function() {
				var a, p, u, o, n, f = arguments[0];
				if (n = 2 <= arguments.length ? _.call(arguments, 1) : [], s(Object.assign)) Object.assign.apply(null, arguments);
				else for (a = 0, u = n.length; a < u; a++) if (o = n[a], o != null) for (p in o) g.call(o, p) && (f[p] = o[p]);
				return f;
			}, s = function(a) {
				return !!a && Object.prototype.toString.call(a) === "[object Function]";
			}, t = function(a) {
				var p;
				return !!a && ((p = typeof a) == "function" || p === "object");
			}, A = function(a) {
				return s(Array.isArray) ? Array.isArray(a) : Object.prototype.toString.call(a) === "[object Array]";
			}, i = function(a) {
				var p;
				if (A(a)) return !a.length;
				for (p in a) if (g.call(a, p)) return !1;
				return !0;
			}, m = function(a) {
				var p, u;
				return t(a) && (u = Object.getPrototypeOf(a)) && (p = u.constructor) && typeof p == "function" && p instanceof p && Function.prototype.toString.call(p) === Function.prototype.toString.call(Object);
			}, N = function(a) {
				return s(a.valueOf) ? a.valueOf() : a;
			}, F.exports.assign = T, F.exports.isFunction = s, F.exports.isObject = t, F.exports.isArray = A, F.exports.isEmpty = i, F.exports.isPlainObject = m, F.exports.getValue = N;
		}).call(U);
	})), de = ft(((U, F) => {
		(function() {
			F.exports = (function() {
				function T(N, A, i) {
					if (this.options = N.options, this.stringify = N.stringify, this.parent = N, A == null) throw new Error("Missing attribute name. " + this.debugInfo(A));
					if (i == null) throw new Error("Missing attribute value. " + this.debugInfo(A));
					this.name = this.stringify.attName(A), this.value = this.stringify.attValue(i);
				}
				return T.prototype.clone = function() {
					return Object.create(this);
				}, T.prototype.toString = function(N) {
					return this.options.writer.set(N).attribute(this);
				}, T.prototype.debugInfo = function(N) {
					return N = N || this.name, N == null ? "parent: <" + this.parent.name + ">" : "attribute: {" + N + "}, parent: <" + this.parent.name + ">";
				}, T;
			})();
		}).call(U);
	})), Pt = ft(((U, F) => {
		(function() {
			var T, N, A, i, s, t, m = function(g, a) {
				for (var p in a) _.call(a, p) && (g[p] = a[p]);
				function u() {
					this.constructor = g;
				}
				return u.prototype = a.prototype, g.prototype = new u(), g.__super__ = a.prototype, g;
			}, _ = {}.hasOwnProperty;
			t = It(), s = t.isObject, i = t.isFunction, A = t.getValue, N = Et(), T = de(), F.exports = (function(g) {
				m(a, g);
				function a(p, u, o) {
					if (a.__super__.constructor.call(this, p), u == null) throw new Error("Missing element name. " + this.debugInfo());
					this.name = this.stringify.eleName(u), this.attributes = {}, o != null && this.attribute(o), p.isDocument && (this.isRoot = !0, this.documentObject = p, p.rootObject = this);
				}
				return a.prototype.clone = function() {
					var p, u, o = Object.create(this), n;
					o.isRoot && (o.documentObject = null), o.attributes = {}, n = this.attributes;
					for (u in n) _.call(n, u) && (p = n[u], o.attributes[u] = p.clone());
					return o.children = [], this.children.forEach(function(f) {
						var l = f.clone();
						return l.parent = o, o.children.push(l);
					}), o;
				}, a.prototype.attribute = function(p, u) {
					var o, n;
					if (p != null && (p = A(p)), s(p)) for (o in p) _.call(p, o) && (n = p[o], this.attribute(o, n));
					else i(u) && (u = u.apply()), (!this.options.skipNullAttributes || u != null) && (this.attributes[p] = new T(this, p, u));
					return this;
				}, a.prototype.removeAttribute = function(p) {
					var u, o, n;
					if (p == null) throw new Error("Missing attribute name. " + this.debugInfo());
					if (p = A(p), Array.isArray(p)) for (o = 0, n = p.length; o < n; o++) u = p[o], delete this.attributes[u];
					else delete this.attributes[p];
					return this;
				}, a.prototype.toString = function(p) {
					return this.options.writer.set(p).element(this);
				}, a.prototype.att = function(p, u) {
					return this.attribute(p, u);
				}, a.prototype.a = function(p, u) {
					return this.attribute(p, u);
				}, a;
			})(N);
		}).call(U);
	})), Ft = ft(((U, F) => {
		(function() {
			var T, N = function(i, s) {
				for (var t in s) A.call(s, t) && (i[t] = s[t]);
				function m() {
					this.constructor = i;
				}
				return m.prototype = s.prototype, i.prototype = new m(), i.__super__ = s.prototype, i;
			}, A = {}.hasOwnProperty;
			T = Et(), F.exports = (function(i) {
				N(s, i);
				function s(t, m) {
					if (s.__super__.constructor.call(this, t), m == null) throw new Error("Missing CDATA text. " + this.debugInfo());
					this.text = this.stringify.cdata(m);
				}
				return s.prototype.clone = function() {
					return Object.create(this);
				}, s.prototype.toString = function(t) {
					return this.options.writer.set(t).cdata(this);
				}, s;
			})(T);
		}).call(U);
	})), Ut = ft(((U, F) => {
		(function() {
			var T, N = function(i, s) {
				for (var t in s) A.call(s, t) && (i[t] = s[t]);
				function m() {
					this.constructor = i;
				}
				return m.prototype = s.prototype, i.prototype = new m(), i.__super__ = s.prototype, i;
			}, A = {}.hasOwnProperty;
			T = Et(), F.exports = (function(i) {
				N(s, i);
				function s(t, m) {
					if (s.__super__.constructor.call(this, t), m == null) throw new Error("Missing comment text. " + this.debugInfo());
					this.text = this.stringify.comment(m);
				}
				return s.prototype.clone = function() {
					return Object.create(this);
				}, s.prototype.toString = function(t) {
					return this.options.writer.set(t).comment(this);
				}, s;
			})(T);
		}).call(U);
	})), jt = ft(((U, F) => {
		(function() {
			var T, N, A = function(s, t) {
				for (var m in t) i.call(t, m) && (s[m] = t[m]);
				function _() {
					this.constructor = s;
				}
				return _.prototype = t.prototype, s.prototype = new _(), s.__super__ = t.prototype, s;
			}, i = {}.hasOwnProperty;
			N = It().isObject, T = Et(), F.exports = (function(s) {
				A(t, s);
				function t(m, _, g, a) {
					var p;
					t.__super__.constructor.call(this, m), N(_) && (p = _, _ = p.version, g = p.encoding, a = p.standalone), _ || (_ = "1.0"), this.version = this.stringify.xmlVersion(_), g != null && (this.encoding = this.stringify.xmlEncoding(g)), a != null && (this.standalone = this.stringify.xmlStandalone(a));
				}
				return t.prototype.toString = function(m) {
					return this.options.writer.set(m).declaration(this);
				}, t;
			})(T);
		}).call(U);
	})), zt = ft(((U, F) => {
		(function() {
			var T, N = function(i, s) {
				for (var t in s) A.call(s, t) && (i[t] = s[t]);
				function m() {
					this.constructor = i;
				}
				return m.prototype = s.prototype, i.prototype = new m(), i.__super__ = s.prototype, i;
			}, A = {}.hasOwnProperty;
			T = Et(), F.exports = (function(i) {
				N(s, i);
				function s(t, m, _, g, a, p) {
					if (s.__super__.constructor.call(this, t), m == null) throw new Error("Missing DTD element name. " + this.debugInfo());
					if (_ == null) throw new Error("Missing DTD attribute name. " + this.debugInfo(m));
					if (!g) throw new Error("Missing DTD attribute type. " + this.debugInfo(m));
					if (!a) throw new Error("Missing DTD attribute default. " + this.debugInfo(m));
					if (a.indexOf("#") !== 0 && (a = "#" + a), !a.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(m));
					if (p && !a.match(/^(#FIXED|#DEFAULT)$/)) throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(m));
					this.elementName = this.stringify.eleName(m), this.attributeName = this.stringify.attName(_), this.attributeType = this.stringify.dtdAttType(g), this.defaultValue = this.stringify.dtdAttDefault(p), this.defaultValueType = a;
				}
				return s.prototype.toString = function(t) {
					return this.options.writer.set(t).dtdAttList(this);
				}, s;
			})(T);
		}).call(U);
	})), Xt = ft(((U, F) => {
		(function() {
			var T, N, A = function(s, t) {
				for (var m in t) i.call(t, m) && (s[m] = t[m]);
				function _() {
					this.constructor = s;
				}
				return _.prototype = t.prototype, s.prototype = new _(), s.__super__ = t.prototype, s;
			}, i = {}.hasOwnProperty;
			N = It().isObject, T = Et(), F.exports = (function(s) {
				A(t, s);
				function t(m, _, g, a) {
					if (t.__super__.constructor.call(this, m), g == null) throw new Error("Missing DTD entity name. " + this.debugInfo(g));
					if (a == null) throw new Error("Missing DTD entity value. " + this.debugInfo(g));
					if (this.pe = !!_, this.name = this.stringify.eleName(g), !N(a)) this.value = this.stringify.dtdEntityValue(a);
					else {
						if (!a.pubID && !a.sysID) throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(g));
						if (a.pubID && !a.sysID) throw new Error("System identifier is required for a public external entity. " + this.debugInfo(g));
						if (a.pubID != null && (this.pubID = this.stringify.dtdPubID(a.pubID)), a.sysID != null && (this.sysID = this.stringify.dtdSysID(a.sysID)), a.nData != null && (this.nData = this.stringify.dtdNData(a.nData)), this.pe && this.nData) throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(g));
					}
				}
				return t.prototype.toString = function(m) {
					return this.options.writer.set(m).dtdEntity(this);
				}, t;
			})(T);
		}).call(U);
	})), Wt = ft(((U, F) => {
		(function() {
			var T, N = function(i, s) {
				for (var t in s) A.call(s, t) && (i[t] = s[t]);
				function m() {
					this.constructor = i;
				}
				return m.prototype = s.prototype, i.prototype = new m(), i.__super__ = s.prototype, i;
			}, A = {}.hasOwnProperty;
			T = Et(), F.exports = (function(i) {
				N(s, i);
				function s(t, m, _) {
					if (s.__super__.constructor.call(this, t), m == null) throw new Error("Missing DTD element name. " + this.debugInfo());
					_ || (_ = "(#PCDATA)"), Array.isArray(_) && (_ = "(" + _.join(",") + ")"), this.name = this.stringify.eleName(m), this.value = this.stringify.dtdElementValue(_);
				}
				return s.prototype.toString = function(t) {
					return this.options.writer.set(t).dtdElement(this);
				}, s;
			})(T);
		}).call(U);
	})), qt = ft(((U, F) => {
		(function() {
			var T, N = function(i, s) {
				for (var t in s) A.call(s, t) && (i[t] = s[t]);
				function m() {
					this.constructor = i;
				}
				return m.prototype = s.prototype, i.prototype = new m(), i.__super__ = s.prototype, i;
			}, A = {}.hasOwnProperty;
			T = Et(), F.exports = (function(i) {
				N(s, i);
				function s(t, m, _) {
					if (s.__super__.constructor.call(this, t), m == null) throw new Error("Missing DTD notation name. " + this.debugInfo(m));
					if (!_.pubID && !_.sysID) throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(m));
					this.name = this.stringify.eleName(m), _.pubID != null && (this.pubID = this.stringify.dtdPubID(_.pubID)), _.sysID != null && (this.sysID = this.stringify.dtdSysID(_.sysID));
				}
				return s.prototype.toString = function(t) {
					return this.options.writer.set(t).dtdNotation(this);
				}, s;
			})(T);
		}).call(U);
	})), Gt = ft(((U, F) => {
		(function() {
			var T, N, A, i, s, t, m = function(g, a) {
				for (var p in a) _.call(a, p) && (g[p] = a[p]);
				function u() {
					this.constructor = g;
				}
				return u.prototype = a.prototype, g.prototype = new u(), g.__super__ = a.prototype, g;
			}, _ = {}.hasOwnProperty;
			t = It().isObject, s = Et(), T = zt(), A = Xt(), N = Wt(), i = qt(), F.exports = (function(g) {
				m(a, g);
				function a(p, u, o) {
					var n, f;
					a.__super__.constructor.call(this, p), this.name = "!DOCTYPE", this.documentObject = p, t(u) && (n = u, u = n.pubID, o = n.sysID), o == null && (f = [u, o], o = f[0], u = f[1]), u != null && (this.pubID = this.stringify.dtdPubID(u)), o != null && (this.sysID = this.stringify.dtdSysID(o));
				}
				return a.prototype.element = function(p, u) {
					var o = new N(this, p, u);
					return this.children.push(o), this;
				}, a.prototype.attList = function(p, u, o, n, f) {
					var l = new T(this, p, u, o, n, f);
					return this.children.push(l), this;
				}, a.prototype.entity = function(p, u) {
					var o = new A(this, !1, p, u);
					return this.children.push(o), this;
				}, a.prototype.pEntity = function(p, u) {
					var o = new A(this, !0, p, u);
					return this.children.push(o), this;
				}, a.prototype.notation = function(p, u) {
					var o = new i(this, p, u);
					return this.children.push(o), this;
				}, a.prototype.toString = function(p) {
					return this.options.writer.set(p).docType(this);
				}, a.prototype.ele = function(p, u) {
					return this.element(p, u);
				}, a.prototype.att = function(p, u, o, n, f) {
					return this.attList(p, u, o, n, f);
				}, a.prototype.ent = function(p, u) {
					return this.entity(p, u);
				}, a.prototype.pent = function(p, u) {
					return this.pEntity(p, u);
				}, a.prototype.not = function(p, u) {
					return this.notation(p, u);
				}, a.prototype.up = function() {
					return this.root() || this.documentObject;
				}, a;
			})(s);
		}).call(U);
	})), Vt = ft(((U, F) => {
		(function() {
			var T, N = function(i, s) {
				for (var t in s) A.call(s, t) && (i[t] = s[t]);
				function m() {
					this.constructor = i;
				}
				return m.prototype = s.prototype, i.prototype = new m(), i.__super__ = s.prototype, i;
			}, A = {}.hasOwnProperty;
			T = Et(), F.exports = (function(i) {
				N(s, i);
				function s(t, m) {
					if (s.__super__.constructor.call(this, t), m == null) throw new Error("Missing raw text. " + this.debugInfo());
					this.value = this.stringify.raw(m);
				}
				return s.prototype.clone = function() {
					return Object.create(this);
				}, s.prototype.toString = function(t) {
					return this.options.writer.set(t).raw(this);
				}, s;
			})(T);
		}).call(U);
	})), $t = ft(((U, F) => {
		(function() {
			var T, N = function(i, s) {
				for (var t in s) A.call(s, t) && (i[t] = s[t]);
				function m() {
					this.constructor = i;
				}
				return m.prototype = s.prototype, i.prototype = new m(), i.__super__ = s.prototype, i;
			}, A = {}.hasOwnProperty;
			T = Et(), F.exports = (function(i) {
				N(s, i);
				function s(t, m) {
					if (s.__super__.constructor.call(this, t), m == null) throw new Error("Missing element text. " + this.debugInfo());
					this.value = this.stringify.eleText(m);
				}
				return s.prototype.clone = function() {
					return Object.create(this);
				}, s.prototype.toString = function(t) {
					return this.options.writer.set(t).text(this);
				}, s;
			})(T);
		}).call(U);
	})), Yt = ft(((U, F) => {
		(function() {
			var T, N = function(i, s) {
				for (var t in s) A.call(s, t) && (i[t] = s[t]);
				function m() {
					this.constructor = i;
				}
				return m.prototype = s.prototype, i.prototype = new m(), i.__super__ = s.prototype, i;
			}, A = {}.hasOwnProperty;
			T = Et(), F.exports = (function(i) {
				N(s, i);
				function s(t, m, _) {
					if (s.__super__.constructor.call(this, t), m == null) throw new Error("Missing instruction target. " + this.debugInfo());
					this.target = this.stringify.insTarget(m), _ && (this.value = this.stringify.insValue(_));
				}
				return s.prototype.clone = function() {
					return Object.create(this);
				}, s.prototype.toString = function(t) {
					return this.options.writer.set(t).processingInstruction(this);
				}, s;
			})(T);
		}).call(U);
	})), ie = ft(((U, F) => {
		(function() {
			var T, N = function(i, s) {
				for (var t in s) A.call(s, t) && (i[t] = s[t]);
				function m() {
					this.constructor = i;
				}
				return m.prototype = s.prototype, i.prototype = new m(), i.__super__ = s.prototype, i;
			}, A = {}.hasOwnProperty;
			T = Et(), F.exports = (function(i) {
				N(s, i);
				function s(t) {
					s.__super__.constructor.call(this, t), this.isDummy = !0;
				}
				return s.prototype.clone = function() {
					return Object.create(this);
				}, s.prototype.toString = function(t) {
					return "";
				}, s;
			})(T);
		}).call(U);
	})), Et = ft(((U, F) => {
		(function() {
			var T, N, A, i, s, t, m, _, g, a, p, u, o, n, f = {}.hasOwnProperty;
			n = It(), o = n.isObject, u = n.isFunction, p = n.isEmpty, a = n.getValue, t = null, T = null, N = null, A = null, i = null, _ = null, g = null, m = null, s = null, F.exports = (function() {
				function l(e) {
					this.parent = e, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), this.children = [], t || (t = Pt(), T = Ft(), N = Ut(), A = jt(), i = Gt(), _ = Vt(), g = $t(), m = Yt(), s = ie());
				}
				return l.prototype.element = function(e, d, r) {
					var c, w, x, D, E, z = null, K, B, L, S, q;
					if (d === null && r == null && (L = [{}, null], d = L[0], r = L[1]), d == null && (d = {}), d = a(d), o(d) || (S = [d, r], r = S[0], d = S[1]), e != null && (e = a(e)), Array.isArray(e)) for (x = 0, K = e.length; x < K; x++) w = e[x], z = this.element(w);
					else if (u(e)) z = this.element(e.apply());
					else if (o(e)) {
						for (E in e) if (f.call(e, E)) if (q = e[E], u(q) && (q = q.apply()), o(q) && p(q) && (q = null), !this.options.ignoreDecorators && this.stringify.convertAttKey && E.indexOf(this.stringify.convertAttKey) === 0) z = this.attribute(E.substr(this.stringify.convertAttKey.length), q);
						else if (!this.options.separateArrayItems && Array.isArray(q)) for (D = 0, B = q.length; D < B; D++) w = q[D], c = {}, c[E] = w, z = this.element(c);
						else o(q) ? (z = this.element(E), z.element(q)) : z = this.element(E, q);
					} else this.options.skipNullNodes && r === null ? z = this.dummy() : !this.options.ignoreDecorators && this.stringify.convertTextKey && e.indexOf(this.stringify.convertTextKey) === 0 ? z = this.text(r) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && e.indexOf(this.stringify.convertCDataKey) === 0 ? z = this.cdata(r) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && e.indexOf(this.stringify.convertCommentKey) === 0 ? z = this.comment(r) : !this.options.ignoreDecorators && this.stringify.convertRawKey && e.indexOf(this.stringify.convertRawKey) === 0 ? z = this.raw(r) : !this.options.ignoreDecorators && this.stringify.convertPIKey && e.indexOf(this.stringify.convertPIKey) === 0 ? z = this.instruction(e.substr(this.stringify.convertPIKey.length), r) : z = this.node(e, d, r);
					if (z == null) throw new Error("Could not create any elements with: " + e + ". " + this.debugInfo());
					return z;
				}, l.prototype.insertBefore = function(e, d, r) {
					var c, w, x;
					if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(e));
					return w = this.parent.children.indexOf(this), x = this.parent.children.splice(w), c = this.parent.element(e, d, r), Array.prototype.push.apply(this.parent.children, x), c;
				}, l.prototype.insertAfter = function(e, d, r) {
					var c, w, x;
					if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(e));
					return w = this.parent.children.indexOf(this), x = this.parent.children.splice(w + 1), c = this.parent.element(e, d, r), Array.prototype.push.apply(this.parent.children, x), c;
				}, l.prototype.remove = function() {
					var e;
					if (this.isRoot) throw new Error("Cannot remove the root element. " + this.debugInfo());
					return e = this.parent.children.indexOf(this), [].splice.apply(this.parent.children, [e, e - e + 1].concat([])), this.parent;
				}, l.prototype.node = function(e, d, r) {
					var c, w;
					return e != null && (e = a(e)), d || (d = {}), d = a(d), o(d) || (w = [d, r], r = w[0], d = w[1]), c = new t(this, e, d), r != null && c.text(r), this.children.push(c), c;
				}, l.prototype.text = function(e) {
					var d = new g(this, e);
					return this.children.push(d), this;
				}, l.prototype.cdata = function(e) {
					var d = new T(this, e);
					return this.children.push(d), this;
				}, l.prototype.comment = function(e) {
					var d = new N(this, e);
					return this.children.push(d), this;
				}, l.prototype.commentBefore = function(e) {
					var d = this.parent.children.indexOf(this), r = this.parent.children.splice(d);
					return this.parent.comment(e), Array.prototype.push.apply(this.parent.children, r), this;
				}, l.prototype.commentAfter = function(e) {
					var d = this.parent.children.indexOf(this), r = this.parent.children.splice(d + 1);
					return this.parent.comment(e), Array.prototype.push.apply(this.parent.children, r), this;
				}, l.prototype.raw = function(e) {
					var d = new _(this, e);
					return this.children.push(d), this;
				}, l.prototype.dummy = function() {
					var e = new s(this);
					return this.children.push(e), e;
				}, l.prototype.instruction = function(e, d) {
					var r, c, w, x, D;
					if (e != null && (e = a(e)), d != null && (d = a(d)), Array.isArray(e)) for (x = 0, D = e.length; x < D; x++) r = e[x], this.instruction(r);
					else if (o(e)) for (r in e) f.call(e, r) && (c = e[r], this.instruction(r, c));
					else u(d) && (d = d.apply()), w = new m(this, e, d), this.children.push(w);
					return this;
				}, l.prototype.instructionBefore = function(e, d) {
					var r = this.parent.children.indexOf(this), c = this.parent.children.splice(r);
					return this.parent.instruction(e, d), Array.prototype.push.apply(this.parent.children, c), this;
				}, l.prototype.instructionAfter = function(e, d) {
					var r = this.parent.children.indexOf(this), c = this.parent.children.splice(r + 1);
					return this.parent.instruction(e, d), Array.prototype.push.apply(this.parent.children, c), this;
				}, l.prototype.declaration = function(e, d, r) {
					var c = this.document(), w = new A(c, e, d, r);
					return c.children[0] instanceof A ? c.children[0] = w : c.children.unshift(w), c.root() || c;
				}, l.prototype.doctype = function(e, d) {
					var r, c = this.document(), w = new i(c, e, d), x, D, E, z, K, B = c.children, L;
					for (x = D = 0, z = B.length; D < z; x = ++D) if (r = B[x], r instanceof i) return c.children[x] = w, w;
					for (L = c.children, x = E = 0, K = L.length; E < K; x = ++E) if (r = L[x], r.isRoot) return c.children.splice(x, 0, w), w;
					return c.children.push(w), w;
				}, l.prototype.up = function() {
					if (this.isRoot) throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
					return this.parent;
				}, l.prototype.root = function() {
					for (var e = this; e;) {
						if (e.isDocument) return e.rootObject;
						if (e.isRoot) return e;
						e = e.parent;
					}
				}, l.prototype.document = function() {
					for (var e = this; e;) {
						if (e.isDocument) return e;
						e = e.parent;
					}
				}, l.prototype.end = function(e) {
					return this.document().end(e);
				}, l.prototype.prev = function() {
					for (var e = this.parent.children.indexOf(this); e > 0 && this.parent.children[e - 1].isDummy;) e = e - 1;
					if (e < 1) throw new Error("Already at the first node. " + this.debugInfo());
					return this.parent.children[e - 1];
				}, l.prototype.next = function() {
					for (var e = this.parent.children.indexOf(this); e < this.parent.children.length - 1 && this.parent.children[e + 1].isDummy;) e = e + 1;
					if (e === -1 || e === this.parent.children.length - 1) throw new Error("Already at the last node. " + this.debugInfo());
					return this.parent.children[e + 1];
				}, l.prototype.importDocument = function(e) {
					var d = e.root().clone();
					return d.parent = this, d.isRoot = !1, this.children.push(d), this;
				}, l.prototype.debugInfo = function(e) {
					var d, r;
					return e = e || this.name, e == null && !((d = this.parent) != null && d.name) ? "" : e == null ? "parent: <" + this.parent.name + ">" : (r = this.parent) != null && r.name ? "node: <" + e + ">, parent: <" + this.parent.name + ">" : "node: <" + e + ">";
				}, l.prototype.ele = function(e, d, r) {
					return this.element(e, d, r);
				}, l.prototype.nod = function(e, d, r) {
					return this.node(e, d, r);
				}, l.prototype.txt = function(e) {
					return this.text(e);
				}, l.prototype.dat = function(e) {
					return this.cdata(e);
				}, l.prototype.com = function(e) {
					return this.comment(e);
				}, l.prototype.ins = function(e, d) {
					return this.instruction(e, d);
				}, l.prototype.doc = function() {
					return this.document();
				}, l.prototype.dec = function(e, d, r) {
					return this.declaration(e, d, r);
				}, l.prototype.dtd = function(e, d) {
					return this.doctype(e, d);
				}, l.prototype.e = function(e, d, r) {
					return this.element(e, d, r);
				}, l.prototype.n = function(e, d, r) {
					return this.node(e, d, r);
				}, l.prototype.t = function(e) {
					return this.text(e);
				}, l.prototype.d = function(e) {
					return this.cdata(e);
				}, l.prototype.c = function(e) {
					return this.comment(e);
				}, l.prototype.r = function(e) {
					return this.raw(e);
				}, l.prototype.i = function(e, d) {
					return this.instruction(e, d);
				}, l.prototype.u = function() {
					return this.up();
				}, l.prototype.importXMLBuilder = function(e) {
					return this.importDocument(e);
				}, l;
			})();
		}).call(U);
	})), pe = ft(((U, F) => {
		(function() {
			var T = function(A, i) {
				return function() {
					return A.apply(i, arguments);
				};
			}, N = {}.hasOwnProperty;
			F.exports = (function() {
				function A(i) {
					this.assertLegalChar = T(this.assertLegalChar, this);
					var s, t, m;
					i || (i = {}), this.noDoubleEncoding = i.noDoubleEncoding, t = i.stringify || {};
					for (s in t) N.call(t, s) && (m = t[s], this[s] = m);
				}
				return A.prototype.eleName = function(i) {
					return i = "" + i || "", this.assertLegalChar(i);
				}, A.prototype.eleText = function(i) {
					return i = "" + i || "", this.assertLegalChar(this.elEscape(i));
				}, A.prototype.cdata = function(i) {
					return i = "" + i || "", i = i.replace("]]>", "]]]]><![CDATA[>"), this.assertLegalChar(i);
				}, A.prototype.comment = function(i) {
					if (i = "" + i || "", i.match(/--/)) throw new Error("Comment text cannot contain double-hypen: " + i);
					return this.assertLegalChar(i);
				}, A.prototype.raw = function(i) {
					return "" + i || "";
				}, A.prototype.attName = function(i) {
					return i = "" + i || "";
				}, A.prototype.attValue = function(i) {
					return i = "" + i || "", this.attEscape(i);
				}, A.prototype.insTarget = function(i) {
					return "" + i || "";
				}, A.prototype.insValue = function(i) {
					if (i = "" + i || "", i.match(/\?>/)) throw new Error("Invalid processing instruction value: " + i);
					return i;
				}, A.prototype.xmlVersion = function(i) {
					if (i = "" + i || "", !i.match(/1\.[0-9]+/)) throw new Error("Invalid version number: " + i);
					return i;
				}, A.prototype.xmlEncoding = function(i) {
					if (i = "" + i || "", !i.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) throw new Error("Invalid encoding: " + i);
					return i;
				}, A.prototype.xmlStandalone = function(i) {
					return i ? "yes" : "no";
				}, A.prototype.dtdPubID = function(i) {
					return "" + i || "";
				}, A.prototype.dtdSysID = function(i) {
					return "" + i || "";
				}, A.prototype.dtdElementValue = function(i) {
					return "" + i || "";
				}, A.prototype.dtdAttType = function(i) {
					return "" + i || "";
				}, A.prototype.dtdAttDefault = function(i) {
					return i != null ? "" + i || "" : i;
				}, A.prototype.dtdEntityValue = function(i) {
					return "" + i || "";
				}, A.prototype.dtdNData = function(i) {
					return "" + i || "";
				}, A.prototype.convertAttKey = "@", A.prototype.convertPIKey = "?", A.prototype.convertTextKey = "#text", A.prototype.convertCDataKey = "#cdata", A.prototype.convertCommentKey = "#comment", A.prototype.convertRawKey = "#raw", A.prototype.assertLegalChar = function(i) {
					var s = i.match(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/);
					if (s) throw new Error("Invalid character in string: " + i + " at index " + s.index);
					return i;
				}, A.prototype.elEscape = function(i) {
					var s = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
					return i.replace(s, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
				}, A.prototype.attEscape = function(i) {
					var s = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
					return i.replace(s, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
				}, A;
			})();
		}).call(U);
	})), me = ft(((U, F) => {
		(function() {
			var T = {}.hasOwnProperty;
			F.exports = (function() {
				function N(A) {
					var i, s, t, m, _, g, a, p, u;
					A || (A = {}), this.pretty = A.pretty || !1, this.allowEmpty = (s = A.allowEmpty) != null ? s : !1, this.pretty ? (this.indent = (t = A.indent) != null ? t : "  ", this.newline = (m = A.newline) != null ? m : `
`, this.offset = (_ = A.offset) != null ? _ : 0, this.dontprettytextnodes = (g = A.dontprettytextnodes) != null ? g : 0) : (this.indent = "", this.newline = "", this.offset = 0, this.dontprettytextnodes = 0), this.spacebeforeslash = (a = A.spacebeforeslash) != null ? a : "", this.spacebeforeslash === !0 && (this.spacebeforeslash = " "), this.newlinedefault = this.newline, this.prettydefault = this.pretty, p = A.writer || {};
					for (i in p) T.call(p, i) && (u = p[i], this[i] = u);
				}
				return N.prototype.set = function(A) {
					var i, s, t;
					A || (A = {}), "pretty" in A && (this.pretty = A.pretty), "allowEmpty" in A && (this.allowEmpty = A.allowEmpty), this.pretty ? (this.indent = "indent" in A ? A.indent : "  ", this.newline = "newline" in A ? A.newline : `
`, this.offset = "offset" in A ? A.offset : 0, this.dontprettytextnodes = "dontprettytextnodes" in A ? A.dontprettytextnodes : 0) : (this.indent = "", this.newline = "", this.offset = 0, this.dontprettytextnodes = 0), this.spacebeforeslash = "spacebeforeslash" in A ? A.spacebeforeslash : "", this.spacebeforeslash === !0 && (this.spacebeforeslash = " "), this.newlinedefault = this.newline, this.prettydefault = this.pretty, s = A.writer || {};
					for (i in s) T.call(s, i) && (t = s[i], this[i] = t);
					return this;
				}, N.prototype.space = function(A) {
					var i;
					return this.pretty ? (i = (A || 0) + this.offset + 1, i > 0 ? new Array(i).join(this.indent) : "") : "";
				}, N;
			})();
		}).call(U);
	})), ne = ft(((U, F) => {
		(function() {
			var T, N, A, i, s, t, m, _, g, a, p, u, o, n, f = function(e, d) {
				for (var r in d) l.call(d, r) && (e[r] = d[r]);
				function c() {
					this.constructor = e;
				}
				return c.prototype = d.prototype, e.prototype = new c(), e.__super__ = d.prototype, e;
			}, l = {}.hasOwnProperty;
			m = jt(), _ = Gt(), T = Ft(), N = Ut(), a = Pt(), u = Vt(), o = $t(), p = Yt(), g = ie(), A = zt(), i = Wt(), s = Xt(), t = qt(), n = me(), F.exports = (function(e) {
				f(d, e);
				function d(r) {
					d.__super__.constructor.call(this, r);
				}
				return d.prototype.document = function(r) {
					var c, w, x, D, E;
					for (this.textispresent = !1, D = "", E = r.children, w = 0, x = E.length; w < x; w++) c = E[w], !(c instanceof g) && (D += (function() {
						switch (!1) {
							case !(c instanceof m): return this.declaration(c);
							case !(c instanceof _): return this.docType(c);
							case !(c instanceof N): return this.comment(c);
							case !(c instanceof p): return this.processingInstruction(c);
							default: return this.element(c, 0);
						}
					}).call(this));
					return this.pretty && D.slice(-this.newline.length) === this.newline && (D = D.slice(0, -this.newline.length)), D;
				}, d.prototype.attribute = function(r) {
					return " " + r.name + "=\"" + r.value + "\"";
				}, d.prototype.cdata = function(r, c) {
					return this.space(c) + "<![CDATA[" + r.text + "]]>" + this.newline;
				}, d.prototype.comment = function(r, c) {
					return this.space(c) + "<!-- " + r.text + " -->" + this.newline;
				}, d.prototype.declaration = function(r, c) {
					var w = this.space(c);
					return w += "<?xml version=\"" + r.version + "\"", r.encoding != null && (w += " encoding=\"" + r.encoding + "\""), r.standalone != null && (w += " standalone=\"" + r.standalone + "\""), w += this.spacebeforeslash + "?>", w += this.newline, w;
				}, d.prototype.docType = function(r, c) {
					var w, x, D, E, z;
					if (c || (c = 0), E = this.space(c), E += "<!DOCTYPE " + r.root().name, r.pubID && r.sysID ? E += " PUBLIC \"" + r.pubID + "\" \"" + r.sysID + "\"" : r.sysID && (E += " SYSTEM \"" + r.sysID + "\""), r.children.length > 0) {
						for (E += " [", E += this.newline, z = r.children, x = 0, D = z.length; x < D; x++) w = z[x], E += (function() {
							switch (!1) {
								case !(w instanceof A): return this.dtdAttList(w, c + 1);
								case !(w instanceof i): return this.dtdElement(w, c + 1);
								case !(w instanceof s): return this.dtdEntity(w, c + 1);
								case !(w instanceof t): return this.dtdNotation(w, c + 1);
								case !(w instanceof T): return this.cdata(w, c + 1);
								case !(w instanceof N): return this.comment(w, c + 1);
								case !(w instanceof p): return this.processingInstruction(w, c + 1);
								default: throw new Error("Unknown DTD node type: " + w.constructor.name);
							}
						}).call(this);
						E += "]";
					}
					return E += this.spacebeforeslash + ">", E += this.newline, E;
				}, d.prototype.element = function(r, c) {
					var w, x, D, E, z, K, B, L, S, q, et, Q, dt;
					c || (c = 0), dt = !1, this.textispresent ? (this.newline = "", this.pretty = !1) : (this.newline = this.newlinedefault, this.pretty = this.prettydefault), Q = this.space(c), L = "", L += Q + "<" + r.name, S = r.attributes;
					for (B in S) l.call(S, B) && (w = S[B], L += this.attribute(w));
					if (r.children.length === 0 || r.children.every(function(nt) {
						return nt.value === "";
					})) this.allowEmpty ? L += "></" + r.name + ">" + this.newline : L += this.spacebeforeslash + "/>" + this.newline;
					else if (this.pretty && r.children.length === 1 && r.children[0].value != null) L += ">", L += r.children[0].value, L += "</" + r.name + ">" + this.newline;
					else {
						if (this.dontprettytextnodes) {
							for (q = r.children, D = 0, z = q.length; D < z; D++) if (x = q[D], x.value != null) {
								this.textispresent++, dt = !0;
								break;
							}
						}
						for (this.textispresent && (this.newline = "", this.pretty = !1, Q = this.space(c)), L += ">" + this.newline, et = r.children, E = 0, K = et.length; E < K; E++) x = et[E], L += (function() {
							switch (!1) {
								case !(x instanceof T): return this.cdata(x, c + 1);
								case !(x instanceof N): return this.comment(x, c + 1);
								case !(x instanceof a): return this.element(x, c + 1);
								case !(x instanceof u): return this.raw(x, c + 1);
								case !(x instanceof o): return this.text(x, c + 1);
								case !(x instanceof p): return this.processingInstruction(x, c + 1);
								case !(x instanceof g): return "";
								default: throw new Error("Unknown XML node type: " + x.constructor.name);
							}
						}).call(this);
						dt && this.textispresent--, this.textispresent || (this.newline = this.newlinedefault, this.pretty = this.prettydefault), L += Q + "</" + r.name + ">" + this.newline;
					}
					return L;
				}, d.prototype.processingInstruction = function(r, c) {
					var w = this.space(c) + "<?" + r.target;
					return r.value && (w += " " + r.value), w += this.spacebeforeslash + "?>" + this.newline, w;
				}, d.prototype.raw = function(r, c) {
					return this.space(c) + r.value + this.newline;
				}, d.prototype.text = function(r, c) {
					return this.space(c) + r.value + this.newline;
				}, d.prototype.dtdAttList = function(r, c) {
					var w = this.space(c) + "<!ATTLIST " + r.elementName + " " + r.attributeName + " " + r.attributeType;
					return r.defaultValueType !== "#DEFAULT" && (w += " " + r.defaultValueType), r.defaultValue && (w += " \"" + r.defaultValue + "\""), w += this.spacebeforeslash + ">" + this.newline, w;
				}, d.prototype.dtdElement = function(r, c) {
					return this.space(c) + "<!ELEMENT " + r.name + " " + r.value + this.spacebeforeslash + ">" + this.newline;
				}, d.prototype.dtdEntity = function(r, c) {
					var w = this.space(c) + "<!ENTITY";
					return r.pe && (w += " %"), w += " " + r.name, r.value ? w += " \"" + r.value + "\"" : (r.pubID && r.sysID ? w += " PUBLIC \"" + r.pubID + "\" \"" + r.sysID + "\"" : r.sysID && (w += " SYSTEM \"" + r.sysID + "\""), r.nData && (w += " NDATA " + r.nData)), w += this.spacebeforeslash + ">" + this.newline, w;
				}, d.prototype.dtdNotation = function(r, c) {
					var w = this.space(c) + "<!NOTATION " + r.name;
					return r.pubID && r.sysID ? w += " PUBLIC \"" + r.pubID + "\" \"" + r.sysID + "\"" : r.pubID ? w += " PUBLIC \"" + r.pubID + "\"" : r.sysID && (w += " SYSTEM \"" + r.sysID + "\""), w += this.spacebeforeslash + ">" + this.newline, w;
				}, d.prototype.openNode = function(r, c) {
					var w, x, D, E;
					if (c || (c = 0), r instanceof a) {
						D = this.space(c) + "<" + r.name, E = r.attributes;
						for (x in E) l.call(E, x) && (w = E[x], D += this.attribute(w));
						return D += (r.children ? ">" : "/>") + this.newline, D;
					} else return D = this.space(c) + "<!DOCTYPE " + r.rootNodeName, r.pubID && r.sysID ? D += " PUBLIC \"" + r.pubID + "\" \"" + r.sysID + "\"" : r.sysID && (D += " SYSTEM \"" + r.sysID + "\""), D += (r.children ? " [" : ">") + this.newline, D;
				}, d.prototype.closeNode = function(r, c) {
					switch (c || (c = 0), !1) {
						case !(r instanceof a): return this.space(c) + "</" + r.name + ">" + this.newline;
						case !(r instanceof _): return this.space(c) + "]>" + this.newline;
					}
				}, d;
			})(n);
		}).call(U);
	})), er = ft(((U, F) => {
		(function() {
			var T, N, A, i, s = function(m, _) {
				for (var g in _) t.call(_, g) && (m[g] = _[g]);
				function a() {
					this.constructor = m;
				}
				return a.prototype = _.prototype, m.prototype = new a(), m.__super__ = _.prototype, m;
			}, t = {}.hasOwnProperty;
			i = It().isPlainObject, T = Et(), A = pe(), N = ne(), F.exports = (function(m) {
				s(_, m);
				function _(g) {
					_.__super__.constructor.call(this, null), this.name = "?xml", g || (g = {}), g.writer || (g.writer = new N()), this.options = g, this.stringify = new A(g), this.isDocument = !0;
				}
				return _.prototype.end = function(g) {
					var a;
					return g ? i(g) && (a = g, g = this.options.writer.set(a)) : g = this.options.writer, g.document(this);
				}, _.prototype.toString = function(g) {
					return this.options.writer.set(g).document(this);
				}, _;
			})(T);
		}).call(U);
	})), rr = ft(((U, F) => {
		(function() {
			var T, N, A, i, s, t, m, _, g, a, p, u, o, n, f, l, e, d, r, c, w = {}.hasOwnProperty;
			c = It(), d = c.isObject, e = c.isFunction, r = c.isPlainObject, l = c.getValue, a = Pt(), N = Ft(), A = Ut(), u = Vt(), f = $t(), p = Yt(), _ = jt(), g = Gt(), i = zt(), t = Xt(), s = Wt(), m = qt(), T = de(), n = pe(), o = ne(), F.exports = (function() {
				function x(D, E, z) {
					var K;
					this.name = "?xml", D || (D = {}), D.writer ? r(D.writer) && (K = D.writer, D.writer = new o(K)) : D.writer = new o(D), this.options = D, this.writer = D.writer, this.stringify = new n(D), this.onDataCallback = E || function() {}, this.onEndCallback = z || function() {}, this.currentNode = null, this.currentLevel = -1, this.openTags = {}, this.documentStarted = !1, this.documentCompleted = !1, this.root = null;
				}
				return x.prototype.node = function(D, E, z) {
					var K, B;
					if (D == null) throw new Error("Missing node name.");
					if (this.root && this.currentLevel === -1) throw new Error("Document can only have one root node. " + this.debugInfo(D));
					return this.openCurrent(), D = l(D), E === null && z == null && (K = [{}, null], E = K[0], z = K[1]), E == null && (E = {}), E = l(E), d(E) || (B = [E, z], z = B[0], E = B[1]), this.currentNode = new a(this, D, E), this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, z != null && this.text(z), this;
				}, x.prototype.element = function(D, E, z) {
					return this.currentNode && this.currentNode instanceof g ? this.dtdElement.apply(this, arguments) : this.node(D, E, z);
				}, x.prototype.attribute = function(D, E) {
					var z, K;
					if (!this.currentNode || this.currentNode.children) throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(D));
					if (D != null && (D = l(D)), d(D)) for (z in D) w.call(D, z) && (K = D[z], this.attribute(z, K));
					else e(E) && (E = E.apply()), (!this.options.skipNullAttributes || E != null) && (this.currentNode.attributes[D] = new T(this, D, E));
					return this;
				}, x.prototype.text = function(D) {
					var E;
					return this.openCurrent(), E = new f(this, D), this.onData(this.writer.text(E, this.currentLevel + 1), this.currentLevel + 1), this;
				}, x.prototype.cdata = function(D) {
					var E;
					return this.openCurrent(), E = new N(this, D), this.onData(this.writer.cdata(E, this.currentLevel + 1), this.currentLevel + 1), this;
				}, x.prototype.comment = function(D) {
					var E;
					return this.openCurrent(), E = new A(this, D), this.onData(this.writer.comment(E, this.currentLevel + 1), this.currentLevel + 1), this;
				}, x.prototype.raw = function(D) {
					var E;
					return this.openCurrent(), E = new u(this, D), this.onData(this.writer.raw(E, this.currentLevel + 1), this.currentLevel + 1), this;
				}, x.prototype.instruction = function(D, E) {
					var z, K, B, L, S;
					if (this.openCurrent(), D != null && (D = l(D)), E != null && (E = l(E)), Array.isArray(D)) for (z = 0, L = D.length; z < L; z++) K = D[z], this.instruction(K);
					else if (d(D)) for (K in D) w.call(D, K) && (B = D[K], this.instruction(K, B));
					else e(E) && (E = E.apply()), S = new p(this, D, E), this.onData(this.writer.processingInstruction(S, this.currentLevel + 1), this.currentLevel + 1);
					return this;
				}, x.prototype.declaration = function(D, E, z) {
					var K;
					if (this.openCurrent(), this.documentStarted) throw new Error("declaration() must be the first node.");
					return K = new _(this, D, E, z), this.onData(this.writer.declaration(K, this.currentLevel + 1), this.currentLevel + 1), this;
				}, x.prototype.doctype = function(D, E, z) {
					if (this.openCurrent(), D == null) throw new Error("Missing root node name.");
					if (this.root) throw new Error("dtd() must come before the root node.");
					return this.currentNode = new g(this, E, z), this.currentNode.rootNodeName = D, this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, this;
				}, x.prototype.dtdElement = function(D, E) {
					var z;
					return this.openCurrent(), z = new s(this, D, E), this.onData(this.writer.dtdElement(z, this.currentLevel + 1), this.currentLevel + 1), this;
				}, x.prototype.attList = function(D, E, z, K, B) {
					var L;
					return this.openCurrent(), L = new i(this, D, E, z, K, B), this.onData(this.writer.dtdAttList(L, this.currentLevel + 1), this.currentLevel + 1), this;
				}, x.prototype.entity = function(D, E) {
					var z;
					return this.openCurrent(), z = new t(this, !1, D, E), this.onData(this.writer.dtdEntity(z, this.currentLevel + 1), this.currentLevel + 1), this;
				}, x.prototype.pEntity = function(D, E) {
					var z;
					return this.openCurrent(), z = new t(this, !0, D, E), this.onData(this.writer.dtdEntity(z, this.currentLevel + 1), this.currentLevel + 1), this;
				}, x.prototype.notation = function(D, E) {
					var z;
					return this.openCurrent(), z = new m(this, D, E), this.onData(this.writer.dtdNotation(z, this.currentLevel + 1), this.currentLevel + 1), this;
				}, x.prototype.up = function() {
					if (this.currentLevel < 0) throw new Error("The document node has no parent.");
					return this.currentNode ? (this.currentNode.children ? this.closeNode(this.currentNode) : this.openNode(this.currentNode), this.currentNode = null) : this.closeNode(this.openTags[this.currentLevel]), delete this.openTags[this.currentLevel], this.currentLevel--, this;
				}, x.prototype.end = function() {
					for (; this.currentLevel >= 0;) this.up();
					return this.onEnd();
				}, x.prototype.openCurrent = function() {
					if (this.currentNode) return this.currentNode.children = !0, this.openNode(this.currentNode);
				}, x.prototype.openNode = function(D) {
					if (!D.isOpen) return !this.root && this.currentLevel === 0 && D instanceof a && (this.root = D), this.onData(this.writer.openNode(D, this.currentLevel), this.currentLevel), D.isOpen = !0;
				}, x.prototype.closeNode = function(D) {
					if (!D.isClosed) return this.onData(this.writer.closeNode(D, this.currentLevel), this.currentLevel), D.isClosed = !0;
				}, x.prototype.onData = function(D, E) {
					return this.documentStarted = !0, this.onDataCallback(D, E + 1);
				}, x.prototype.onEnd = function() {
					return this.documentCompleted = !0, this.onEndCallback();
				}, x.prototype.debugInfo = function(D) {
					return D == null ? "" : "node: <" + D + ">";
				}, x.prototype.ele = function() {
					return this.element.apply(this, arguments);
				}, x.prototype.nod = function(D, E, z) {
					return this.node(D, E, z);
				}, x.prototype.txt = function(D) {
					return this.text(D);
				}, x.prototype.dat = function(D) {
					return this.cdata(D);
				}, x.prototype.com = function(D) {
					return this.comment(D);
				}, x.prototype.ins = function(D, E) {
					return this.instruction(D, E);
				}, x.prototype.dec = function(D, E, z) {
					return this.declaration(D, E, z);
				}, x.prototype.dtd = function(D, E, z) {
					return this.doctype(D, E, z);
				}, x.prototype.e = function(D, E, z) {
					return this.element(D, E, z);
				}, x.prototype.n = function(D, E, z) {
					return this.node(D, E, z);
				}, x.prototype.t = function(D) {
					return this.text(D);
				}, x.prototype.d = function(D) {
					return this.cdata(D);
				}, x.prototype.c = function(D) {
					return this.comment(D);
				}, x.prototype.r = function(D) {
					return this.raw(D);
				}, x.prototype.i = function(D, E) {
					return this.instruction(D, E);
				}, x.prototype.att = function() {
					return this.currentNode && this.currentNode instanceof g ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
				}, x.prototype.a = function() {
					return this.currentNode && this.currentNode instanceof g ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
				}, x.prototype.ent = function(D, E) {
					return this.entity(D, E);
				}, x.prototype.pent = function(D, E) {
					return this.pEntity(D, E);
				}, x.prototype.not = function(D, E) {
					return this.notation(D, E);
				}, x;
			})();
		}).call(U);
	})), ir = ft(((U, F) => {
		(function() {
			var T, N, A, i, s, t, m, _, g, a, p, u, o, n, f = function(e, d) {
				for (var r in d) l.call(d, r) && (e[r] = d[r]);
				function c() {
					this.constructor = e;
				}
				return c.prototype = d.prototype, e.prototype = new c(), e.__super__ = d.prototype, e;
			}, l = {}.hasOwnProperty;
			m = jt(), _ = Gt(), T = Ft(), N = Ut(), a = Pt(), u = Vt(), o = $t(), p = Yt(), g = ie(), A = zt(), i = Wt(), s = Xt(), t = qt(), n = me(), F.exports = (function(e) {
				f(d, e);
				function d(r, c) {
					d.__super__.constructor.call(this, c), this.stream = r;
				}
				return d.prototype.document = function(r) {
					var c, w, x, D, E, z = r.children, K, B;
					for (w = 0, D = z.length; w < D; w++) c = z[w], c.isLastRootNode = !1;
					for (r.children[r.children.length - 1].isLastRootNode = !0, K = r.children, B = [], x = 0, E = K.length; x < E; x++) if (c = K[x], !(c instanceof g)) switch (!1) {
						case !(c instanceof m):
							B.push(this.declaration(c));
							break;
						case !(c instanceof _):
							B.push(this.docType(c));
							break;
						case !(c instanceof N):
							B.push(this.comment(c));
							break;
						case !(c instanceof p):
							B.push(this.processingInstruction(c));
							break;
						default: B.push(this.element(c));
					}
					return B;
				}, d.prototype.attribute = function(r) {
					return this.stream.write(" " + r.name + "=\"" + r.value + "\"");
				}, d.prototype.cdata = function(r, c) {
					return this.stream.write(this.space(c) + "<![CDATA[" + r.text + "]]>" + this.endline(r));
				}, d.prototype.comment = function(r, c) {
					return this.stream.write(this.space(c) + "<!-- " + r.text + " -->" + this.endline(r));
				}, d.prototype.declaration = function(r, c) {
					return this.stream.write(this.space(c)), this.stream.write("<?xml version=\"" + r.version + "\""), r.encoding != null && this.stream.write(" encoding=\"" + r.encoding + "\""), r.standalone != null && this.stream.write(" standalone=\"" + r.standalone + "\""), this.stream.write(this.spacebeforeslash + "?>"), this.stream.write(this.endline(r));
				}, d.prototype.docType = function(r, c) {
					var w, x, D, E;
					if (c || (c = 0), this.stream.write(this.space(c)), this.stream.write("<!DOCTYPE " + r.root().name), r.pubID && r.sysID ? this.stream.write(" PUBLIC \"" + r.pubID + "\" \"" + r.sysID + "\"") : r.sysID && this.stream.write(" SYSTEM \"" + r.sysID + "\""), r.children.length > 0) {
						for (this.stream.write(" ["), this.stream.write(this.endline(r)), E = r.children, x = 0, D = E.length; x < D; x++) switch (w = E[x], !1) {
							case !(w instanceof A):
								this.dtdAttList(w, c + 1);
								break;
							case !(w instanceof i):
								this.dtdElement(w, c + 1);
								break;
							case !(w instanceof s):
								this.dtdEntity(w, c + 1);
								break;
							case !(w instanceof t):
								this.dtdNotation(w, c + 1);
								break;
							case !(w instanceof T):
								this.cdata(w, c + 1);
								break;
							case !(w instanceof N):
								this.comment(w, c + 1);
								break;
							case !(w instanceof p):
								this.processingInstruction(w, c + 1);
								break;
							default: throw new Error("Unknown DTD node type: " + w.constructor.name);
						}
						this.stream.write("]");
					}
					return this.stream.write(this.spacebeforeslash + ">"), this.stream.write(this.endline(r));
				}, d.prototype.element = function(r, c) {
					var w, x, D, E, z, K, B, L;
					c || (c = 0), L = this.space(c), this.stream.write(L + "<" + r.name), K = r.attributes;
					for (z in K) l.call(K, z) && (w = K[z], this.attribute(w));
					if (r.children.length === 0 || r.children.every(function(S) {
						return S.value === "";
					})) this.allowEmpty ? this.stream.write("></" + r.name + ">") : this.stream.write(this.spacebeforeslash + "/>");
					else if (this.pretty && r.children.length === 1 && r.children[0].value != null) this.stream.write(">"), this.stream.write(r.children[0].value), this.stream.write("</" + r.name + ">");
					else {
						for (this.stream.write(">" + this.newline), B = r.children, D = 0, E = B.length; D < E; D++) switch (x = B[D], !1) {
							case !(x instanceof T):
								this.cdata(x, c + 1);
								break;
							case !(x instanceof N):
								this.comment(x, c + 1);
								break;
							case !(x instanceof a):
								this.element(x, c + 1);
								break;
							case !(x instanceof u):
								this.raw(x, c + 1);
								break;
							case !(x instanceof o):
								this.text(x, c + 1);
								break;
							case !(x instanceof p):
								this.processingInstruction(x, c + 1);
								break;
							case !(x instanceof g): break;
							default: throw new Error("Unknown XML node type: " + x.constructor.name);
						}
						this.stream.write(L + "</" + r.name + ">");
					}
					return this.stream.write(this.endline(r));
				}, d.prototype.processingInstruction = function(r, c) {
					return this.stream.write(this.space(c) + "<?" + r.target), r.value && this.stream.write(" " + r.value), this.stream.write(this.spacebeforeslash + "?>" + this.endline(r));
				}, d.prototype.raw = function(r, c) {
					return this.stream.write(this.space(c) + r.value + this.endline(r));
				}, d.prototype.text = function(r, c) {
					return this.stream.write(this.space(c) + r.value + this.endline(r));
				}, d.prototype.dtdAttList = function(r, c) {
					return this.stream.write(this.space(c) + "<!ATTLIST " + r.elementName + " " + r.attributeName + " " + r.attributeType), r.defaultValueType !== "#DEFAULT" && this.stream.write(" " + r.defaultValueType), r.defaultValue && this.stream.write(" \"" + r.defaultValue + "\""), this.stream.write(this.spacebeforeslash + ">" + this.endline(r));
				}, d.prototype.dtdElement = function(r, c) {
					return this.stream.write(this.space(c) + "<!ELEMENT " + r.name + " " + r.value), this.stream.write(this.spacebeforeslash + ">" + this.endline(r));
				}, d.prototype.dtdEntity = function(r, c) {
					return this.stream.write(this.space(c) + "<!ENTITY"), r.pe && this.stream.write(" %"), this.stream.write(" " + r.name), r.value ? this.stream.write(" \"" + r.value + "\"") : (r.pubID && r.sysID ? this.stream.write(" PUBLIC \"" + r.pubID + "\" \"" + r.sysID + "\"") : r.sysID && this.stream.write(" SYSTEM \"" + r.sysID + "\""), r.nData && this.stream.write(" NDATA " + r.nData)), this.stream.write(this.spacebeforeslash + ">" + this.endline(r));
				}, d.prototype.dtdNotation = function(r, c) {
					return this.stream.write(this.space(c) + "<!NOTATION " + r.name), r.pubID && r.sysID ? this.stream.write(" PUBLIC \"" + r.pubID + "\" \"" + r.sysID + "\"") : r.pubID ? this.stream.write(" PUBLIC \"" + r.pubID + "\"") : r.sysID && this.stream.write(" SYSTEM \"" + r.sysID + "\""), this.stream.write(this.spacebeforeslash + ">" + this.endline(r));
				}, d.prototype.endline = function(r) {
					return r.isLastRootNode ? "" : this.newline;
				}, d;
			})(n);
		}).call(U);
	})), ge = ft(((U, F) => {
		(function() {
			var T, N, A, i, s, t, m = It();
			s = m.assign, t = m.isFunction, T = er(), N = rr(), i = ne(), A = ir(), F.exports.create = function(_, g, a, p) {
				var u, o;
				if (_ == null) throw new Error("Root element needs a name.");
				return p = s({}, g, a, p), u = new T(p), o = u.element(_), p.headless || (u.declaration(p), (p.pubID != null || p.sysID != null) && u.doctype(p)), o;
			}, F.exports.begin = function(_, g, a) {
				var p;
				return t(_) && (p = [_, g], g = p[0], a = p[1], _ = {}), g ? new N(_, g, a) : new T(_);
			}, F.exports.stringWriter = function(_) {
				return new i(_);
			}, F.exports.streamWriter = function(_, g) {
				return new A(_, g);
			};
		}).call(U);
	})), Lt = ft(((U, F) => {
		var T = typeof Reflect == "object" ? Reflect : null, N = T && typeof T.apply == "function" ? T.apply : function(x, D, E) {
			return Function.prototype.apply.call(x, D, E);
		}, A;
		T && typeof T.ownKeys == "function" ? A = T.ownKeys : Object.getOwnPropertySymbols ? A = function(x) {
			return Object.getOwnPropertyNames(x).concat(Object.getOwnPropertySymbols(x));
		} : A = function(x) {
			return Object.getOwnPropertyNames(x);
		};
		function i(w) {
			console && console.warn && console.warn(w);
		}
		var s = Number.isNaN || function(x) {
			return x !== x;
		};
		function t() {
			t.init.call(this);
		}
		F.exports = t, F.exports.once = d, t.EventEmitter = t, t.prototype._events = void 0, t.prototype._eventsCount = 0, t.prototype._maxListeners = void 0;
		var m = 10;
		function _(w) {
			if (typeof w != "function") throw new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof w);
		}
		Object.defineProperty(t, "defaultMaxListeners", {
			enumerable: !0,
			get: function() {
				return m;
			},
			set: function(w) {
				if (typeof w != "number" || w < 0 || s(w)) throw new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + w + ".");
				m = w;
			}
		}), t.init = function() {
			(this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
		}, t.prototype.setMaxListeners = function(x) {
			if (typeof x != "number" || x < 0 || s(x)) throw new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + x + ".");
			return this._maxListeners = x, this;
		};
		function g(w) {
			return w._maxListeners === void 0 ? t.defaultMaxListeners : w._maxListeners;
		}
		t.prototype.getMaxListeners = function() {
			return g(this);
		}, t.prototype.emit = function(x) {
			for (var D = [], E = 1; E < arguments.length; E++) D.push(arguments[E]);
			var z = x === "error", K = this._events;
			if (K !== void 0) z = z && K.error === void 0;
			else if (!z) return !1;
			if (z) {
				var B;
				if (D.length > 0 && (B = D[0]), B instanceof Error) throw B;
				var L = /* @__PURE__ */ new Error("Unhandled error." + (B ? " (" + B.message + ")" : ""));
				throw L.context = B, L;
			}
			var S = K[x];
			if (S === void 0) return !1;
			if (typeof S == "function") N(S, this, D);
			else for (var q = S.length, et = f(S, q), E = 0; E < q; ++E) N(et[E], this, D);
			return !0;
		};
		function a(w, x, D, E) {
			var z, K, B;
			if (_(D), K = w._events, K === void 0 ? (K = w._events = Object.create(null), w._eventsCount = 0) : (K.newListener !== void 0 && (w.emit("newListener", x, D.listener ? D.listener : D), K = w._events), B = K[x]), B === void 0) B = K[x] = D, ++w._eventsCount;
			else if (typeof B == "function" ? B = K[x] = E ? [D, B] : [B, D] : E ? B.unshift(D) : B.push(D), z = g(w), z > 0 && B.length > z && !B.warned) {
				B.warned = !0;
				var L = /* @__PURE__ */ new Error("Possible EventEmitter memory leak detected. " + B.length + " " + String(x) + " listeners added. Use emitter.setMaxListeners() to increase limit");
				L.name = "MaxListenersExceededWarning", L.emitter = w, L.type = x, L.count = B.length, i(L);
			}
			return w;
		}
		t.prototype.addListener = function(x, D) {
			return a(this, x, D, !1);
		}, t.prototype.on = t.prototype.addListener, t.prototype.prependListener = function(x, D) {
			return a(this, x, D, !0);
		};
		function p() {
			if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
		}
		function u(w, x, D) {
			var E = {
				fired: !1,
				wrapFn: void 0,
				target: w,
				type: x,
				listener: D
			}, z = p.bind(E);
			return z.listener = D, E.wrapFn = z, z;
		}
		t.prototype.once = function(x, D) {
			return _(D), this.on(x, u(this, x, D)), this;
		}, t.prototype.prependOnceListener = function(x, D) {
			return _(D), this.prependListener(x, u(this, x, D)), this;
		}, t.prototype.removeListener = function(x, D) {
			var E, z, K, B, L;
			if (_(D), z = this._events, z === void 0) return this;
			if (E = z[x], E === void 0) return this;
			if (E === D || E.listener === D) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete z[x], z.removeListener && this.emit("removeListener", x, E.listener || D));
			else if (typeof E != "function") {
				for (K = -1, B = E.length - 1; B >= 0; B--) if (E[B] === D || E[B].listener === D) {
					L = E[B].listener, K = B;
					break;
				}
				if (K < 0) return this;
				K === 0 ? E.shift() : l(E, K), E.length === 1 && (z[x] = E[0]), z.removeListener !== void 0 && this.emit("removeListener", x, L || D);
			}
			return this;
		}, t.prototype.off = t.prototype.removeListener, t.prototype.removeAllListeners = function(x) {
			var D, E = this._events, z;
			if (E === void 0) return this;
			if (E.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : E[x] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete E[x]), this;
			if (arguments.length === 0) {
				var K = Object.keys(E), B;
				for (z = 0; z < K.length; ++z) B = K[z], B !== "removeListener" && this.removeAllListeners(B);
				return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
			}
			if (D = E[x], typeof D == "function") this.removeListener(x, D);
			else if (D !== void 0) for (z = D.length - 1; z >= 0; z--) this.removeListener(x, D[z]);
			return this;
		};
		function o(w, x, D) {
			var E = w._events;
			if (E === void 0) return [];
			var z = E[x];
			return z === void 0 ? [] : typeof z == "function" ? D ? [z.listener || z] : [z] : D ? e(z) : f(z, z.length);
		}
		t.prototype.listeners = function(x) {
			return o(this, x, !0);
		}, t.prototype.rawListeners = function(x) {
			return o(this, x, !1);
		}, t.listenerCount = function(w, x) {
			return typeof w.listenerCount == "function" ? w.listenerCount(x) : n.call(w, x);
		}, t.prototype.listenerCount = n;
		function n(w) {
			var x = this._events;
			if (x !== void 0) {
				var D = x[w];
				if (typeof D == "function") return 1;
				if (D !== void 0) return D.length;
			}
			return 0;
		}
		t.prototype.eventNames = function() {
			return this._eventsCount > 0 ? A(this._events) : [];
		};
		function f(w, x) {
			for (var D = new Array(x), E = 0; E < x; ++E) D[E] = w[E];
			return D;
		}
		function l(w, x) {
			for (; x + 1 < w.length; x++) w[x] = w[x + 1];
			w.pop();
		}
		function e(w) {
			for (var x = new Array(w.length), D = 0; D < x.length; ++D) x[D] = w[D].listener || w[D];
			return x;
		}
		function d(w, x) {
			return new Promise(function(D, E) {
				function z(B) {
					w.removeListener(x, K), E(B);
				}
				function K() {
					typeof w.removeListener == "function" && w.removeListener("error", z), D([].slice.call(arguments));
				}
				c(w, x, K, { once: !0 }), x !== "error" && r(w, z, { once: !0 });
			});
		}
		function r(w, x, D) {
			typeof w.on == "function" && c(w, "error", x, D);
		}
		function c(w, x, D, E) {
			if (typeof w.on == "function") E.once ? w.once(x, D) : w.on(x, D);
			else if (typeof w.addEventListener == "function") w.addEventListener(x, function z(K) {
				E.once && w.removeEventListener(x, z), D(K);
			});
			else throw new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof w);
		}
	})), nr = ft(((U) => {
		Object.defineProperty(U, "__esModule", { value: !0 }), U.default = T;
		const F = {
			131: 31,
			139: 39,
			140: 40,
			153: 53,
			154: 53,
			155: 53,
			156: 53,
			159: 59,
			161: 61,
			165: 65,
			166: 66,
			167: 67,
			168: 68,
			171: 71,
			172: 72,
			174: 74,
			178: 78,
			181: 81,
			182: 82,
			183: 83,
			184: 84,
			185: 85,
			186: 86,
			187: 87,
			188: 88,
			207: 105,
			215: 115,
			224: 25,
			225: 25,
			239: 39,
			240: 40,
			241: 41,
			231: 31,
			242: 42,
			243: 43,
			244: 44,
			253: 53,
			254: 53,
			255: 53,
			256: 53,
			257: 57,
			258: 58,
			268: 61,
			269: 61,
			270: 61,
			271: 72,
			272: 72,
			273: 72,
			274: 74,
			281: 81,
			282: 82,
			301: 1,
			302: 1,
			303: 1,
			324: 25,
			325: 25,
			328: 28,
			331: 31,
			334: 34,
			335: 34,
			339: 39,
			340: 40,
			341: 41,
			353: 53,
			354: 53,
			368: 61,
			369: 61,
			372: 72,
			374: 74,
			439: 39,
			440: 40,
			441: 41,
			539: 39,
			540: 40,
			666: 54
		};
		function T(N) {
			return N > 0 && N <= 128 ? N : N in F ? F[N] : 1;
		}
	})), sr = ft(((U) => {
		Object.defineProperty(U, "__esModule", { value: !0 }), U.default = T;
		const F = new Map([
			[3, 1],
			[4, 1],
			[5, 1],
			[6, 1],
			[8, 1],
			[16, 11],
			[109, 11],
			[24, 22],
			[30, 31],
			[32, 25],
			[33, 34],
			[36, 34],
			[38, 37],
			[45, 41],
			[46, 41],
			[111, 41],
			[50, 49],
			[51, 49],
			[52, 49],
			[56, 49],
			[60, 57],
			[63, 57],
			[64, 57],
			[77, 74],
			[112, 110]
		]);
		function T(N) {
			return F.has(N) ? F.get(N) : N;
		}
	})), ye = ft(((U) => {
		Object.defineProperty(U, "__esModule", { value: !0 }), U.getMatchingProgram = U.getExportMatchingProgram = U.getImportMatchingProgram = void 0;
		const F = nr();
		U.getExportMatchingProgram = F.default;
		U.getImportMatchingProgram = sr().default, U.getMatchingProgram = F.default;
	})), xt = ft(((U, F) => {
		var T = Dt(), N = T.Buffer, A = {}, i;
		for (i in T) T.hasOwnProperty(i) && (i === "SlowBuffer" || i === "Buffer" || (A[i] = T[i]));
		var s = A.Buffer = {};
		for (i in N) N.hasOwnProperty(i) && (i === "allocUnsafe" || i === "allocUnsafeSlow" || (s[i] = N[i]));
		if (A.Buffer.prototype = N.prototype, (!s.from || s.from === Uint8Array.from) && (s.from = function(t, m, _) {
			if (typeof t == "number") throw new TypeError("The \"value\" argument must not be of type number. Received type " + typeof t);
			if (t && typeof t.length > "u") throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
			return N(t, m, _);
		}), s.alloc || (s.alloc = function(t, m, _) {
			if (typeof t != "number") throw new TypeError("The \"size\" argument must be of type number. Received type " + typeof t);
			if (t < 0 || t >= 2 * (1 << 30)) throw new RangeError("The value \"" + t + "\" is invalid for option \"size\"");
			var g = N(t);
			return !m || m.length === 0 ? g.fill(0) : typeof _ == "string" ? g.fill(m, _) : g.fill(m), g;
		}), !A.kStringMaxLength) try {
			A.kStringMaxLength = process.binding("buffer").kStringMaxLength;
		} catch {}
		A.constants || (A.constants = { MAX_LENGTH: A.kMaxLength }, A.kStringMaxLength && (A.constants.MAX_STRING_LENGTH = A.kStringMaxLength)), F.exports = A;
	})), or = ft(((U) => {
		var F = "﻿";
		U.PrependBOM = T;
		function T(A, i) {
			this.encoder = A, this.addBOM = !0;
		}
		T.prototype.write = function(A) {
			return this.addBOM && (A = F + A, this.addBOM = !1), this.encoder.write(A);
		}, T.prototype.end = function() {
			return this.encoder.end();
		}, U.StripBOM = N;
		function N(A, i) {
			this.decoder = A, this.pass = !1, this.options = i || {};
		}
		N.prototype.write = function(A) {
			var i = this.decoder.write(A);
			return this.pass || !i || (i[0] === F && (i = i.slice(1), typeof this.options.stripBOM == "function" && this.options.stripBOM()), this.pass = !0), i;
		}, N.prototype.end = function() {
			return this.decoder.end();
		};
	})), be = ft(((U, F) => {
		var T = typeof Object.hasOwn > "u" ? Function.call.bind(Object.prototype.hasOwnProperty) : Object.hasOwn;
		function N(A, i) {
			for (var s in i) T(i, s) && (A[s] = i[s]);
		}
		F.exports = N;
	})), ar = ft(((U, F) => {
		var T = Dt(), N = T.Buffer;
		function A(s, t) {
			for (var m in s) t[m] = s[m];
		}
		N.from && N.alloc && N.allocUnsafe && N.allocUnsafeSlow ? F.exports = T : (A(T, U), U.Buffer = i);
		function i(s, t, m) {
			return N(s, t, m);
		}
		A(N, i), i.from = function(s, t, m) {
			if (typeof s == "number") throw new TypeError("Argument must not be a number");
			return N(s, t, m);
		}, i.alloc = function(s, t, m) {
			if (typeof s != "number") throw new TypeError("Argument must be a number");
			var _ = N(s);
			return t !== void 0 ? typeof m == "string" ? _.fill(t, m) : _.fill(t) : _.fill(0), _;
		}, i.allocUnsafe = function(s) {
			if (typeof s != "number") throw new TypeError("Argument must be a number");
			return N(s);
		}, i.allocUnsafeSlow = function(s) {
			if (typeof s != "number") throw new TypeError("Argument must be a number");
			return T.SlowBuffer(s);
		};
	})), _e = ft(((U) => {
		var F = ar().Buffer, T = F.isEncoding || function(e) {
			switch (e = "" + e, e && e.toLowerCase()) {
				case "hex":
				case "utf8":
				case "utf-8":
				case "ascii":
				case "binary":
				case "base64":
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
				case "raw": return !0;
				default: return !1;
			}
		};
		function N(e) {
			if (!e) return "utf8";
			for (var d;;) switch (e) {
				case "utf8":
				case "utf-8": return "utf8";
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return "utf16le";
				case "latin1":
				case "binary": return "latin1";
				case "base64":
				case "ascii":
				case "hex": return e;
				default:
					if (d) return;
					e = ("" + e).toLowerCase(), d = !0;
			}
		}
		function A(e) {
			var d = N(e);
			if (typeof d != "string" && (F.isEncoding === T || !T(e))) throw new Error("Unknown encoding: " + e);
			return d || e;
		}
		U.StringDecoder = i;
		function i(e) {
			this.encoding = A(e);
			var d;
			switch (this.encoding) {
				case "utf16le":
					this.text = p, this.end = u, d = 4;
					break;
				case "utf8":
					this.fillLast = _, d = 4;
					break;
				case "base64":
					this.text = o, this.end = n, d = 3;
					break;
				default:
					this.write = f, this.end = l;
					return;
			}
			this.lastNeed = 0, this.lastTotal = 0, this.lastChar = F.allocUnsafe(d);
		}
		i.prototype.write = function(e) {
			if (e.length === 0) return "";
			var d, r;
			if (this.lastNeed) {
				if (d = this.fillLast(e), d === void 0) return "";
				r = this.lastNeed, this.lastNeed = 0;
			} else r = 0;
			return r < e.length ? d ? d + this.text(e, r) : this.text(e, r) : d || "";
		}, i.prototype.end = a, i.prototype.text = g, i.prototype.fillLast = function(e) {
			if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
			e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
		};
		function s(e) {
			return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2;
		}
		function t(e, d, r) {
			var c = d.length - 1;
			if (c < r) return 0;
			var w = s(d[c]);
			return w >= 0 ? (w > 0 && (e.lastNeed = w - 1), w) : --c < r || w === -2 ? 0 : (w = s(d[c]), w >= 0 ? (w > 0 && (e.lastNeed = w - 2), w) : --c < r || w === -2 ? 0 : (w = s(d[c]), w >= 0 ? (w > 0 && (w === 2 ? w = 0 : e.lastNeed = w - 3), w) : 0));
		}
		function m(e, d, r) {
			if ((d[0] & 192) !== 128) return e.lastNeed = 0, "�";
			if (e.lastNeed > 1 && d.length > 1) {
				if ((d[1] & 192) !== 128) return e.lastNeed = 1, "�";
				if (e.lastNeed > 2 && d.length > 2 && (d[2] & 192) !== 128) return e.lastNeed = 2, "�";
			}
		}
		function _(e) {
			var d = this.lastTotal - this.lastNeed, r = m(this, e, d);
			if (r !== void 0) return r;
			if (this.lastNeed <= e.length) return e.copy(this.lastChar, d, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
			e.copy(this.lastChar, d, 0, e.length), this.lastNeed -= e.length;
		}
		function g(e, d) {
			var r = t(this, e, d);
			if (!this.lastNeed) return e.toString("utf8", d);
			this.lastTotal = r;
			var c = e.length - (r - this.lastNeed);
			return e.copy(this.lastChar, 0, c), e.toString("utf8", d, c);
		}
		function a(e) {
			var d = e && e.length ? this.write(e) : "";
			return this.lastNeed ? d + "�" : d;
		}
		function p(e, d) {
			if ((e.length - d) % 2 === 0) {
				var r = e.toString("utf16le", d);
				if (r) {
					var c = r.charCodeAt(r.length - 1);
					if (c >= 55296 && c <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1);
				}
				return r;
			}
			return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", d, e.length - 1);
		}
		function u(e) {
			var d = e && e.length ? this.write(e) : "";
			if (this.lastNeed) {
				var r = this.lastTotal - this.lastNeed;
				return d + this.lastChar.toString("utf16le", 0, r);
			}
			return d;
		}
		function o(e, d) {
			var r = (e.length - d) % 3;
			return r === 0 ? e.toString("base64", d) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", d, e.length - r));
		}
		function n(e) {
			var d = e && e.length ? this.write(e) : "";
			return this.lastNeed ? d + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : d;
		}
		function f(e) {
			return e.toString(this.encoding);
		}
		function l(e) {
			return e && e.length ? this.write(e) : "";
		}
	})), cr = ft(((U, F) => {
		var T = xt().Buffer;
		F.exports = {
			utf8: {
				type: "_internal",
				bomAware: !0
			},
			cesu8: {
				type: "_internal",
				bomAware: !0
			},
			unicode11utf8: "utf8",
			ucs2: {
				type: "_internal",
				bomAware: !0
			},
			utf16le: "ucs2",
			binary: { type: "_internal" },
			base64: { type: "_internal" },
			hex: { type: "_internal" },
			_internal: N
		};
		function N(a, p) {
			this.enc = a.encodingName, this.bomAware = a.bomAware, this.enc === "base64" ? this.encoder = t : this.enc === "utf8" ? this.encoder = g : this.enc === "cesu8" && (this.enc = "utf8", this.encoder = m, T.from("eda0bdedb2a9", "hex").toString() !== "💩" && (this.decoder = _, this.defaultCharUnicode = p.defaultCharUnicode));
		}
		N.prototype.encoder = s, N.prototype.decoder = i;
		var A = _e().StringDecoder;
		function i(a, p) {
			this.decoder = new A(p.enc);
		}
		i.prototype.write = function(a) {
			return T.isBuffer(a) || (a = T.from(a)), this.decoder.write(a);
		}, i.prototype.end = function() {
			return this.decoder.end();
		};
		function s(a, p) {
			this.enc = p.enc;
		}
		s.prototype.write = function(a) {
			return T.from(a, this.enc);
		}, s.prototype.end = function() {};
		function t(a, p) {
			this.prevStr = "";
		}
		t.prototype.write = function(a) {
			a = this.prevStr + a;
			var p = a.length - a.length % 4;
			return this.prevStr = a.slice(p), a = a.slice(0, p), T.from(a, "base64");
		}, t.prototype.end = function() {
			return T.from(this.prevStr, "base64");
		};
		function m(a, p) {}
		m.prototype.write = function(a) {
			for (var p = T.alloc(a.length * 3), u = 0, o = 0; o < a.length; o++) {
				var n = a.charCodeAt(o);
				n < 128 ? p[u++] = n : n < 2048 ? (p[u++] = 192 + (n >>> 6), p[u++] = 128 + (n & 63)) : (p[u++] = 224 + (n >>> 12), p[u++] = 128 + (n >>> 6 & 63), p[u++] = 128 + (n & 63));
			}
			return p.slice(0, u);
		}, m.prototype.end = function() {};
		function _(a, p) {
			this.acc = 0, this.contBytes = 0, this.accBytes = 0, this.defaultCharUnicode = p.defaultCharUnicode;
		}
		_.prototype.write = function(a) {
			for (var p = this.acc, u = this.contBytes, o = this.accBytes, n = "", f = 0; f < a.length; f++) {
				var l = a[f];
				(l & 192) !== 128 ? (u > 0 && (n += this.defaultCharUnicode, u = 0), l < 128 ? n += String.fromCharCode(l) : l < 224 ? (p = l & 31, u = 1, o = 1) : l < 240 ? (p = l & 15, u = 2, o = 1) : n += this.defaultCharUnicode) : u > 0 ? (p = p << 6 | l & 63, u--, o++, u === 0 && (o === 2 && p < 128 && p > 0 ? n += this.defaultCharUnicode : o === 3 && p < 2048 ? n += this.defaultCharUnicode : n += String.fromCharCode(p))) : n += this.defaultCharUnicode;
			}
			return this.acc = p, this.contBytes = u, this.accBytes = o, n;
		}, _.prototype.end = function() {
			var a = 0;
			return this.contBytes > 0 && (a += this.defaultCharUnicode), a;
		};
		function g(a, p) {
			this.highSurrogate = "";
		}
		g.prototype.write = function(a) {
			if (this.highSurrogate && (a = this.highSurrogate + a, this.highSurrogate = ""), a.length > 0) {
				var p = a.charCodeAt(a.length - 1);
				p >= 55296 && p < 56320 && (this.highSurrogate = a[a.length - 1], a = a.slice(0, a.length - 1));
			}
			return T.from(a, this.enc);
		}, g.prototype.end = function() {
			if (this.highSurrogate) {
				var a = this.highSurrogate;
				return this.highSurrogate = "", T.from(a, this.enc);
			}
		};
	})), ur = ft(((U) => {
		var F = xt().Buffer;
		U._utf32 = T;
		function T(g, a) {
			this.iconv = a, this.bomAware = !0, this.isLE = g.isLE;
		}
		U.utf32le = {
			type: "_utf32",
			isLE: !0
		}, U.utf32be = {
			type: "_utf32",
			isLE: !1
		}, U.ucs4le = "utf32le", U.ucs4be = "utf32be", T.prototype.encoder = N, T.prototype.decoder = A;
		function N(g, a) {
			this.isLE = a.isLE, this.highSurrogate = 0;
		}
		N.prototype.write = function(g) {
			for (var a = F.from(g, "ucs2"), p = F.alloc(a.length * 2), u = this.isLE ? p.writeUInt32LE : p.writeUInt32BE, o = 0, n = 0; n < a.length; n += 2) {
				var f = a.readUInt16LE(n), l = f >= 55296 && f < 56320, e = f >= 56320 && f < 57344;
				if (this.highSurrogate) if (l || !e) u.call(p, this.highSurrogate, o), o += 4;
				else {
					var d = (this.highSurrogate - 55296 << 10 | f - 56320) + 65536;
					u.call(p, d, o), o += 4, this.highSurrogate = 0;
					continue;
				}
				l ? this.highSurrogate = f : (u.call(p, f, o), o += 4, this.highSurrogate = 0);
			}
			return o < p.length && (p = p.slice(0, o)), p;
		}, N.prototype.end = function() {
			if (this.highSurrogate) {
				var g = F.alloc(4);
				return this.isLE ? g.writeUInt32LE(this.highSurrogate, 0) : g.writeUInt32BE(this.highSurrogate, 0), this.highSurrogate = 0, g;
			}
		};
		function A(g, a) {
			this.isLE = a.isLE, this.badChar = a.iconv.defaultCharUnicode.charCodeAt(0), this.overflow = [];
		}
		A.prototype.write = function(g) {
			if (g.length === 0) return "";
			var a = 0, p = 0, u = F.alloc(g.length + 4), o = 0, n = this.isLE, f = this.overflow, l = this.badChar;
			if (f.length > 0) {
				for (; a < g.length && f.length < 4; a++) f.push(g[a]);
				f.length === 4 && (n ? p = f[a] | f[a + 1] << 8 | f[a + 2] << 16 | f[a + 3] << 24 : p = f[a + 3] | f[a + 2] << 8 | f[a + 1] << 16 | f[a] << 24, f.length = 0, o = i(u, o, p, l));
			}
			for (; a < g.length - 3; a += 4) n ? p = g[a] | g[a + 1] << 8 | g[a + 2] << 16 | g[a + 3] << 24 : p = g[a + 3] | g[a + 2] << 8 | g[a + 1] << 16 | g[a] << 24, o = i(u, o, p, l);
			for (; a < g.length; a++) f.push(g[a]);
			return u.slice(0, o).toString("ucs2");
		};
		function i(g, a, p, u) {
			if ((p < 0 || p > 1114111) && (p = u), p >= 65536) {
				p -= 65536;
				var o = 55296 | p >> 10;
				g[a++] = o & 255, g[a++] = o >> 8;
				var p = 56320 | p & 1023;
			}
			return g[a++] = p & 255, g[a++] = p >> 8, a;
		}
		A.prototype.end = function() {
			this.overflow.length = 0;
		}, U.utf32 = s, U.ucs4 = "utf32";
		function s(g, a) {
			this.iconv = a;
		}
		s.prototype.encoder = t, s.prototype.decoder = m;
		function t(g, a) {
			g = g || {}, g.addBOM === void 0 && (g.addBOM = !0), this.encoder = a.iconv.getEncoder(g.defaultEncoding || "utf-32le", g);
		}
		t.prototype.write = function(g) {
			return this.encoder.write(g);
		}, t.prototype.end = function() {
			return this.encoder.end();
		};
		function m(g, a) {
			this.decoder = null, this.initialBufs = [], this.initialBufsLen = 0, this.options = g || {}, this.iconv = a.iconv;
		}
		m.prototype.write = function(g) {
			if (!this.decoder) {
				if (this.initialBufs.push(g), this.initialBufsLen += g.length, this.initialBufsLen < 32) return "";
				var a = _(this.initialBufs, this.options.defaultEncoding);
				this.decoder = this.iconv.getDecoder(a, this.options);
				for (var p = "", u = 0; u < this.initialBufs.length; u++) p += this.decoder.write(this.initialBufs[u]);
				return this.initialBufs.length = this.initialBufsLen = 0, p;
			}
			return this.decoder.write(g);
		}, m.prototype.end = function() {
			if (!this.decoder) {
				var g = _(this.initialBufs, this.options.defaultEncoding);
				this.decoder = this.iconv.getDecoder(g, this.options);
				for (var a = "", p = 0; p < this.initialBufs.length; p++) a += this.decoder.write(this.initialBufs[p]);
				var u = this.decoder.end();
				return u && (a += u), this.initialBufs.length = this.initialBufsLen = 0, a;
			}
			return this.decoder.end();
		};
		function _(g, a) {
			var p = [], u = 0, o = 0, n = 0, f = 0, l = 0;
			t: for (var e = 0; e < g.length; e++) for (var d = g[e], r = 0; r < d.length; r++) if (p.push(d[r]), p.length === 4) {
				if (u === 0) {
					if (p[0] === 255 && p[1] === 254 && p[2] === 0 && p[3] === 0) return "utf-32le";
					if (p[0] === 0 && p[1] === 0 && p[2] === 254 && p[3] === 255) return "utf-32be";
				}
				if ((p[0] !== 0 || p[1] > 16) && n++, (p[3] !== 0 || p[2] > 16) && o++, p[0] === 0 && p[1] === 0 && (p[2] !== 0 || p[3] !== 0) && l++, (p[0] !== 0 || p[1] !== 0) && p[2] === 0 && p[3] === 0 && f++, p.length = 0, u++, u >= 100) break t;
			}
			return l - n > f - o ? "utf-32be" : l - n < f - o ? "utf-32le" : a || "utf-32le";
		}
	})), fr = ft(((U) => {
		var F = xt().Buffer;
		U.utf16be = T;
		function T() {}
		T.prototype.encoder = N, T.prototype.decoder = A, T.prototype.bomAware = !0;
		function N() {}
		N.prototype.write = function(_) {
			for (var g = F.from(_, "ucs2"), a = 0; a < g.length; a += 2) {
				var p = g[a];
				g[a] = g[a + 1], g[a + 1] = p;
			}
			return g;
		}, N.prototype.end = function() {};
		function A() {
			this.overflowByte = -1;
		}
		A.prototype.write = function(_) {
			if (_.length == 0) return "";
			var g = F.alloc(_.length + 1), a = 0, p = 0;
			for (this.overflowByte !== -1 && (g[0] = _[0], g[1] = this.overflowByte, a = 1, p = 2); a < _.length - 1; a += 2, p += 2) g[p] = _[a + 1], g[p + 1] = _[a];
			return this.overflowByte = a == _.length - 1 ? _[_.length - 1] : -1, g.slice(0, p).toString("ucs2");
		}, A.prototype.end = function() {
			this.overflowByte = -1;
		}, U.utf16 = i;
		function i(_, g) {
			this.iconv = g;
		}
		i.prototype.encoder = s, i.prototype.decoder = t;
		function s(_, g) {
			_ = _ || {}, _.addBOM === void 0 && (_.addBOM = !0), this.encoder = g.iconv.getEncoder("utf-16le", _);
		}
		s.prototype.write = function(_) {
			return this.encoder.write(_);
		}, s.prototype.end = function() {
			return this.encoder.end();
		};
		function t(_, g) {
			this.decoder = null, this.initialBufs = [], this.initialBufsLen = 0, this.options = _ || {}, this.iconv = g.iconv;
		}
		t.prototype.write = function(_) {
			if (!this.decoder) {
				if (this.initialBufs.push(_), this.initialBufsLen += _.length, this.initialBufsLen < 16) return "";
				var g = m(this.initialBufs, this.options.defaultEncoding);
				this.decoder = this.iconv.getDecoder(g, this.options);
				for (var a = "", p = 0; p < this.initialBufs.length; p++) a += this.decoder.write(this.initialBufs[p]);
				return this.initialBufs.length = this.initialBufsLen = 0, a;
			}
			return this.decoder.write(_);
		}, t.prototype.end = function() {
			if (!this.decoder) {
				var _ = m(this.initialBufs, this.options.defaultEncoding);
				this.decoder = this.iconv.getDecoder(_, this.options);
				for (var g = "", a = 0; a < this.initialBufs.length; a++) g += this.decoder.write(this.initialBufs[a]);
				var p = this.decoder.end();
				return p && (g += p), this.initialBufs.length = this.initialBufsLen = 0, g;
			}
			return this.decoder.end();
		};
		function m(_, g) {
			var a = [], p = 0, u = 0, o = 0;
			t: for (var n = 0; n < _.length; n++) for (var f = _[n], l = 0; l < f.length; l++) if (a.push(f[l]), a.length === 2) {
				if (p === 0) {
					if (a[0] === 255 && a[1] === 254) return "utf-16le";
					if (a[0] === 254 && a[1] === 255) return "utf-16be";
				}
				if (a[0] === 0 && a[1] !== 0 && o++, a[0] !== 0 && a[1] === 0 && u++, a.length = 0, p++, p >= 100) break t;
			}
			return o > u ? "utf-16be" : o < u ? "utf-16le" : g || "utf-16le";
		}
	})), lr = ft(((U) => {
		var F = xt().Buffer;
		U.utf7 = T, U.unicode11utf7 = "utf7";
		function T(f, l) {
			this.iconv = l;
		}
		T.prototype.encoder = A, T.prototype.decoder = i, T.prototype.bomAware = !0;
		var N = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;
		function A(f, l) {
			this.iconv = l.iconv;
		}
		A.prototype.write = function(f) {
			return F.from(f.replace(N, function(l) {
				return "+" + (l === "+" ? "" : this.iconv.encode(l, "utf16-be").toString("base64").replace(/=+$/, "")) + "-";
			}.bind(this)));
		}, A.prototype.end = function() {};
		function i(f, l) {
			this.iconv = l.iconv, this.inBase64 = !1, this.base64Accum = "";
		}
		for (var s = /[A-Za-z0-9\/+]/, t = [], m = 0; m < 256; m++) t[m] = s.test(String.fromCharCode(m));
		var _ = 43, g = 45, a = 38;
		i.prototype.write = function(f) {
			for (var l = "", e = 0, d = this.inBase64, r = this.base64Accum, c = 0; c < f.length; c++) if (!d) f[c] == _ && (l += this.iconv.decode(f.slice(e, c), "ascii"), e = c + 1, d = !0);
			else if (!t[f[c]]) {
				if (c == e && f[c] == g) l += "+";
				else {
					var w = r + this.iconv.decode(f.slice(e, c), "ascii");
					l += this.iconv.decode(F.from(w, "base64"), "utf16-be");
				}
				f[c] != g && c--, e = c + 1, d = !1, r = "";
			}
			if (!d) l += this.iconv.decode(f.slice(e), "ascii");
			else {
				var w = r + this.iconv.decode(f.slice(e), "ascii"), x = w.length - w.length % 8;
				r = w.slice(x), w = w.slice(0, x), l += this.iconv.decode(F.from(w, "base64"), "utf16-be");
			}
			return this.inBase64 = d, this.base64Accum = r, l;
		}, i.prototype.end = function() {
			var f = "";
			return this.inBase64 && this.base64Accum.length > 0 && (f = this.iconv.decode(F.from(this.base64Accum, "base64"), "utf16-be")), this.inBase64 = !1, this.base64Accum = "", f;
		}, U.utf7imap = p;
		function p(f, l) {
			this.iconv = l;
		}
		p.prototype.encoder = u, p.prototype.decoder = o, p.prototype.bomAware = !0;
		function u(f, l) {
			this.iconv = l.iconv, this.inBase64 = !1, this.base64Accum = F.alloc(6), this.base64AccumIdx = 0;
		}
		u.prototype.write = function(f) {
			for (var l = this.inBase64, e = this.base64Accum, d = this.base64AccumIdx, r = F.alloc(f.length * 5 + 10), c = 0, w = 0; w < f.length; w++) {
				var x = f.charCodeAt(w);
				x >= 32 && x <= 126 ? (l && (d > 0 && (c += r.write(e.slice(0, d).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), c), d = 0), r[c++] = g, l = !1), l || (r[c++] = x, x === a && (r[c++] = g))) : (l || (r[c++] = a, l = !0), l && (e[d++] = x >> 8, e[d++] = x & 255, d == e.length && (c += r.write(e.toString("base64").replace(/\//g, ","), c), d = 0)));
			}
			return this.inBase64 = l, this.base64AccumIdx = d, r.slice(0, c);
		}, u.prototype.end = function() {
			var f = F.alloc(10), l = 0;
			return this.inBase64 && (this.base64AccumIdx > 0 && (l += f.write(this.base64Accum.slice(0, this.base64AccumIdx).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), l), this.base64AccumIdx = 0), f[l++] = g, this.inBase64 = !1), f.slice(0, l);
		};
		function o(f, l) {
			this.iconv = l.iconv, this.inBase64 = !1, this.base64Accum = "";
		}
		var n = t.slice();
		n[44] = !0, o.prototype.write = function(f) {
			for (var l = "", e = 0, d = this.inBase64, r = this.base64Accum, c = 0; c < f.length; c++) if (!d) f[c] == a && (l += this.iconv.decode(f.slice(e, c), "ascii"), e = c + 1, d = !0);
			else if (!n[f[c]]) {
				if (c == e && f[c] == g) l += "&";
				else {
					var w = r + this.iconv.decode(f.slice(e, c), "ascii").replace(/,/g, "/");
					l += this.iconv.decode(F.from(w, "base64"), "utf16-be");
				}
				f[c] != g && c--, e = c + 1, d = !1, r = "";
			}
			if (!d) l += this.iconv.decode(f.slice(e), "ascii");
			else {
				var w = r + this.iconv.decode(f.slice(e), "ascii").replace(/,/g, "/"), x = w.length - w.length % 8;
				r = w.slice(x), w = w.slice(0, x), l += this.iconv.decode(F.from(w, "base64"), "utf16-be");
			}
			return this.inBase64 = d, this.base64Accum = r, l;
		}, o.prototype.end = function() {
			var f = "";
			return this.inBase64 && this.base64Accum.length > 0 && (f = this.iconv.decode(F.from(this.base64Accum, "base64"), "utf16-be")), this.inBase64 = !1, this.base64Accum = "", f;
		};
	})), hr = ft(((U) => {
		var F = xt().Buffer;
		U._sbcs = T;
		function T(i, s) {
			if (!i) throw new Error("SBCS codec is called without the data.");
			if (!i.chars || i.chars.length !== 128 && i.chars.length !== 256) throw new Error("Encoding '" + i.type + "' has incorrect 'chars' (must be of len 128 or 256)");
			if (i.chars.length === 128) {
				for (var t = "", m = 0; m < 128; m++) t += String.fromCharCode(m);
				i.chars = t + i.chars;
			}
			this.decodeBuf = F.from(i.chars, "ucs2");
			for (var _ = F.alloc(65536, s.defaultCharSingleByte.charCodeAt(0)), m = 0; m < i.chars.length; m++) _[i.chars.charCodeAt(m)] = m;
			this.encodeBuf = _;
		}
		T.prototype.encoder = N, T.prototype.decoder = A;
		function N(i, s) {
			this.encodeBuf = s.encodeBuf;
		}
		N.prototype.write = function(i) {
			for (var s = F.alloc(i.length), t = 0; t < i.length; t++) s[t] = this.encodeBuf[i.charCodeAt(t)];
			return s;
		}, N.prototype.end = function() {};
		function A(i, s) {
			this.decodeBuf = s.decodeBuf;
		}
		A.prototype.write = function(i) {
			for (var s = this.decodeBuf, t = F.alloc(i.length * 2), m = 0, _ = 0, g = 0; g < i.length; g++) m = i[g] * 2, _ = g * 2, t[_] = s[m], t[_ + 1] = s[m + 1];
			return t.toString("ucs2");
		}, A.prototype.end = function() {};
	})), dr = ft(((U, F) => {
		F.exports = {
			10029: "maccenteuro",
			maccenteuro: {
				type: "_sbcs",
				chars: "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»…\xA0ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ"
			},
			808: "cp808",
			ibm808: "cp808",
			cp808: {
				type: "_sbcs",
				chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№€■\xA0"
			},
			mik: {
				type: "_sbcs",
				chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя└┴┬├─┼╣║╚╔╩╦╠═╬┐░▒▓│┤№§╗╝┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■\xA0"
			},
			cp720: {
				type: "_sbcs",
				chars: "éâàçêëèïîّْô¤ـûùءآأؤ£إئابةتثجحخدذرزسشص«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ضطظعغفµقكلمنهوىي≡ًٌٍَُِ≈°∙·√ⁿ²■\xA0"
			},
			ascii8bit: "ascii",
			usascii: "ascii",
			ansix34: "ascii",
			ansix341968: "ascii",
			ansix341986: "ascii",
			csascii: "ascii",
			cp367: "ascii",
			ibm367: "ascii",
			isoir6: "ascii",
			iso646us: "ascii",
			iso646irv: "ascii",
			us: "ascii",
			latin1: "iso88591",
			latin2: "iso88592",
			latin3: "iso88593",
			latin4: "iso88594",
			latin5: "iso88599",
			latin6: "iso885910",
			latin7: "iso885913",
			latin8: "iso885914",
			latin9: "iso885915",
			latin10: "iso885916",
			csisolatin1: "iso88591",
			csisolatin2: "iso88592",
			csisolatin3: "iso88593",
			csisolatin4: "iso88594",
			csisolatincyrillic: "iso88595",
			csisolatinarabic: "iso88596",
			csisolatingreek: "iso88597",
			csisolatinhebrew: "iso88598",
			csisolatin5: "iso88599",
			csisolatin6: "iso885910",
			l1: "iso88591",
			l2: "iso88592",
			l3: "iso88593",
			l4: "iso88594",
			l5: "iso88599",
			l6: "iso885910",
			l7: "iso885913",
			l8: "iso885914",
			l9: "iso885915",
			l10: "iso885916",
			isoir14: "iso646jp",
			isoir57: "iso646cn",
			isoir100: "iso88591",
			isoir101: "iso88592",
			isoir109: "iso88593",
			isoir110: "iso88594",
			isoir144: "iso88595",
			isoir127: "iso88596",
			isoir126: "iso88597",
			isoir138: "iso88598",
			isoir148: "iso88599",
			isoir157: "iso885910",
			isoir166: "tis620",
			isoir179: "iso885913",
			isoir199: "iso885914",
			isoir203: "iso885915",
			isoir226: "iso885916",
			cp819: "iso88591",
			ibm819: "iso88591",
			cyrillic: "iso88595",
			arabic: "iso88596",
			arabic8: "iso88596",
			ecma114: "iso88596",
			asmo708: "iso88596",
			greek: "iso88597",
			greek8: "iso88597",
			ecma118: "iso88597",
			elot928: "iso88597",
			hebrew: "iso88598",
			hebrew8: "iso88598",
			turkish: "iso88599",
			turkish8: "iso88599",
			thai: "iso885911",
			thai8: "iso885911",
			celtic: "iso885914",
			celtic8: "iso885914",
			isoceltic: "iso885914",
			tis6200: "tis620",
			tis62025291: "tis620",
			tis62025330: "tis620",
			1e4: "macroman",
			10006: "macgreek",
			10007: "maccyrillic",
			10079: "maciceland",
			10081: "macturkish",
			cspc8codepage437: "cp437",
			cspc775baltic: "cp775",
			cspc850multilingual: "cp850",
			cspcp852: "cp852",
			cspc862latinhebrew: "cp862",
			cpgr: "cp869",
			msee: "cp1250",
			mscyrl: "cp1251",
			msansi: "cp1252",
			msgreek: "cp1253",
			msturk: "cp1254",
			mshebr: "cp1255",
			msarab: "cp1256",
			winbaltrim: "cp1257",
			cp20866: "koi8r",
			20866: "koi8r",
			ibm878: "koi8r",
			cskoi8r: "koi8r",
			cp21866: "koi8u",
			21866: "koi8u",
			ibm1168: "koi8u",
			strk10482002: "rk1048",
			tcvn5712: "tcvn",
			tcvn57121: "tcvn",
			gb198880: "iso646cn",
			cn: "iso646cn",
			csiso14jisc6220ro: "iso646jp",
			jisc62201969ro: "iso646jp",
			jp: "iso646jp",
			cshproman8: "hproman8",
			r8: "hproman8",
			roman8: "hproman8",
			xroman8: "hproman8",
			ibm1051: "hproman8",
			mac: "macintosh",
			csmacintosh: "macintosh"
		};
	})), pr = ft(((U, F) => {
		F.exports = {
			437: "cp437",
			737: "cp737",
			775: "cp775",
			850: "cp850",
			852: "cp852",
			855: "cp855",
			856: "cp856",
			857: "cp857",
			858: "cp858",
			860: "cp860",
			861: "cp861",
			862: "cp862",
			863: "cp863",
			864: "cp864",
			865: "cp865",
			866: "cp866",
			869: "cp869",
			874: "windows874",
			922: "cp922",
			1046: "cp1046",
			1124: "cp1124",
			1125: "cp1125",
			1129: "cp1129",
			1133: "cp1133",
			1161: "cp1161",
			1162: "cp1162",
			1163: "cp1163",
			1250: "windows1250",
			1251: "windows1251",
			1252: "windows1252",
			1253: "windows1253",
			1254: "windows1254",
			1255: "windows1255",
			1256: "windows1256",
			1257: "windows1257",
			1258: "windows1258",
			28591: "iso88591",
			28592: "iso88592",
			28593: "iso88593",
			28594: "iso88594",
			28595: "iso88595",
			28596: "iso88596",
			28597: "iso88597",
			28598: "iso88598",
			28599: "iso88599",
			28600: "iso885910",
			28601: "iso885911",
			28603: "iso885913",
			28604: "iso885914",
			28605: "iso885915",
			28606: "iso885916",
			windows874: {
				type: "_sbcs",
				chars: "€����…�����������‘’“”•–—��������\xA0กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
			},
			win874: "windows874",
			cp874: "windows874",
			windows1250: {
				type: "_sbcs",
				chars: "€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź\xA0ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
			},
			win1250: "windows1250",
			cp1250: "windows1250",
			windows1251: {
				type: "_sbcs",
				chars: "ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ\xA0ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
			},
			win1251: "windows1251",
			cp1251: "windows1251",
			windows1252: {
				type: "_sbcs",
				chars: "€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ\xA0¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
			},
			win1252: "windows1252",
			cp1252: "windows1252",
			windows1253: {
				type: "_sbcs",
				chars: "€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›����\xA0΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
			},
			win1253: "windows1253",
			cp1253: "windows1253",
			windows1254: {
				type: "_sbcs",
				chars: "€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ\xA0¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
			},
			win1254: "windows1254",
			cp1254: "windows1254",
			windows1255: {
				type: "_sbcs",
				chars: "€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›����\xA0¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
			},
			win1255: "windows1255",
			cp1255: "windows1255",
			windows1256: {
				type: "_sbcs",
				chars: "€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں\xA0،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے"
			},
			win1256: "windows1256",
			cp1256: "windows1256",
			windows1257: {
				type: "_sbcs",
				chars: "€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛�\xA0�¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙"
			},
			win1257: "windows1257",
			cp1257: "windows1257",
			windows1258: {
				type: "_sbcs",
				chars: "€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ\xA0¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
			},
			win1258: "windows1258",
			cp1258: "windows1258",
			iso88591: {
				type: "_sbcs",
				chars: "\xA0¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
			},
			cp28591: "iso88591",
			iso88592: {
				type: "_sbcs",
				chars: "\xA0Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
			},
			cp28592: "iso88592",
			iso88593: {
				type: "_sbcs",
				chars: "\xA0Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙"
			},
			cp28593: "iso88593",
			iso88594: {
				type: "_sbcs",
				chars: "\xA0ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙"
			},
			cp28594: "iso88594",
			iso88595: {
				type: "_sbcs",
				chars: "\xA0ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ"
			},
			cp28595: "iso88595",
			iso88596: {
				type: "_sbcs",
				chars: "\xA0���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������"
			},
			cp28596: "iso88596",
			iso88597: {
				type: "_sbcs",
				chars: "\xA0‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
			},
			cp28597: "iso88597",
			iso88598: {
				type: "_sbcs",
				chars: "\xA0�¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
			},
			cp28598: "iso88598",
			iso88599: {
				type: "_sbcs",
				chars: "\xA0¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
			},
			cp28599: "iso88599",
			iso885910: {
				type: "_sbcs",
				chars: "\xA0ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ"
			},
			cp28600: "iso885910",
			iso885911: {
				type: "_sbcs",
				chars: "\xA0กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
			},
			cp28601: "iso885911",
			iso885913: {
				type: "_sbcs",
				chars: "\xA0”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’"
			},
			cp28603: "iso885913",
			iso885914: {
				type: "_sbcs",
				chars: "\xA0Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ"
			},
			cp28604: "iso885914",
			iso885915: {
				type: "_sbcs",
				chars: "\xA0¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
			},
			cp28605: "iso885915",
			iso885916: {
				type: "_sbcs",
				chars: "\xA0ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ"
			},
			cp28606: "iso885916",
			cp437: {
				type: "_sbcs",
				chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■\xA0"
			},
			ibm437: "cp437",
			csibm437: "cp437",
			cp737: {
				type: "_sbcs",
				chars: "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■\xA0"
			},
			ibm737: "cp737",
			csibm737: "cp737",
			cp775: {
				type: "_sbcs",
				chars: "ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■\xA0"
			},
			ibm775: "cp775",
			csibm775: "cp775",
			cp850: {
				type: "_sbcs",
				chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■\xA0"
			},
			ibm850: "cp850",
			csibm850: "cp850",
			cp852: {
				type: "_sbcs",
				chars: "ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■\xA0"
			},
			ibm852: "cp852",
			csibm852: "cp852",
			cp855: {
				type: "_sbcs",
				chars: "ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■\xA0"
			},
			ibm855: "cp855",
			csibm855: "cp855",
			cp856: {
				type: "_sbcs",
				chars: "אבגדהוזחטיךכלםמןנסעףפץצקרשת�£�×����������®¬½¼�«»░▒▓│┤���©╣║╗╝¢¥┐└┴┬├─┼��╚╔╩╦╠═╬¤���������┘┌█▄¦�▀������µ�������¯´­±‗¾¶§÷¸°¨·¹³²■\xA0"
			},
			ibm856: "cp856",
			csibm856: "cp856",
			cp857: {
				type: "_sbcs",
				chars: "ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■\xA0"
			},
			ibm857: "cp857",
			csibm857: "cp857",
			cp858: {
				type: "_sbcs",
				chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■\xA0"
			},
			ibm858: "cp858",
			csibm858: "cp858",
			cp860: {
				type: "_sbcs",
				chars: "ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■\xA0"
			},
			ibm860: "cp860",
			csibm860: "cp860",
			cp861: {
				type: "_sbcs",
				chars: "ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■\xA0"
			},
			ibm861: "cp861",
			csibm861: "cp861",
			cp862: {
				type: "_sbcs",
				chars: "אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■\xA0"
			},
			ibm862: "cp862",
			csibm862: "cp862",
			cp863: {
				type: "_sbcs",
				chars: "ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■\xA0"
			},
			ibm863: "cp863",
			csibm863: "cp863",
			cp864: {
				type: "_sbcs",
				chars: `\0\x07\b	
\v\f\r\x1B !"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�`
			},
			ibm864: "cp864",
			csibm864: "cp864",
			cp865: {
				type: "_sbcs",
				chars: "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■\xA0"
			},
			ibm865: "cp865",
			csibm865: "cp865",
			cp866: {
				type: "_sbcs",
				chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■\xA0"
			},
			ibm866: "cp866",
			csibm866: "cp866",
			cp869: {
				type: "_sbcs",
				chars: "������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■\xA0"
			},
			ibm869: "cp869",
			csibm869: "cp869",
			cp922: {
				type: "_sbcs",
				chars: "\xA0¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ"
			},
			ibm922: "cp922",
			csibm922: "cp922",
			cp1046: {
				type: "_sbcs",
				chars: "ﺈ×÷ﹱ■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ\xA0¤ﺋﺑﺗﺛﺟﺣ،­ﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�"
			},
			ibm1046: "cp1046",
			csibm1046: "cp1046",
			cp1124: {
				type: "_sbcs",
				chars: "\xA0ЁЂҐЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ§ўџ"
			},
			ibm1124: "cp1124",
			csibm1124: "cp1124",
			cp1125: {
				type: "_sbcs",
				chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■\xA0"
			},
			ibm1125: "cp1125",
			csibm1125: "cp1125",
			cp1129: {
				type: "_sbcs",
				chars: "\xA0¡¢£¤¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
			},
			ibm1129: "cp1129",
			csibm1129: "cp1129",
			cp1133: {
				type: "_sbcs",
				chars: "\xA0ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��¢¬¦�"
			},
			ibm1133: "cp1133",
			csibm1133: "cp1133",
			cp1161: {
				type: "_sbcs",
				chars: "��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛¢¬¦\xA0"
			},
			ibm1161: "cp1161",
			csibm1161: "cp1161",
			cp1162: {
				type: "_sbcs",
				chars: "€…‘’“”•–—\xA0กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
			},
			ibm1162: "cp1162",
			csibm1162: "cp1162",
			cp1163: {
				type: "_sbcs",
				chars: "\xA0¡¢£€¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
			},
			ibm1163: "cp1163",
			csibm1163: "cp1163",
			maccroatian: {
				type: "_sbcs",
				chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č…\xA0ÀÃÕŒœĐ—“”‘’÷◊�©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ"
			},
			maccyrillic: {
				type: "_sbcs",
				chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»…\xA0ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
			},
			macgreek: {
				type: "_sbcs",
				chars: "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»…\xA0ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�"
			},
			maciceland: {
				type: "_sbcs",
				chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
			},
			macroman: {
				type: "_sbcs",
				chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
			},
			macromania: {
				type: "_sbcs",
				chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
			},
			macthai: {
				type: "_sbcs",
				chars: "«»…“”�•‘’�\xA0กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู﻿​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����"
			},
			macturkish: {
				type: "_sbcs",
				chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ"
			},
			macukraine: {
				type: "_sbcs",
				chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»…\xA0ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
			},
			koi8r: {
				type: "_sbcs",
				chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥\xA0⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
			},
			koi8u: {
				type: "_sbcs",
				chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥\xA0⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
			},
			koi8ru: {
				type: "_sbcs",
				chars: "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥\xA0⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
			},
			koi8t: {
				type: "_sbcs",
				chars: "қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё¤ӣ¦§���«¬­®�°±²Ё�Ӣ¶·�№�»���©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
			},
			armscii8: {
				type: "_sbcs",
				chars: "\xA0�և։)(»«—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�"
			},
			rk1048: {
				type: "_sbcs",
				chars: "ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ\xA0ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
			},
			tcvn: {
				type: "_sbcs",
				chars: `\0ÚỤỪỬỮ\x07\b	
\v\f\rỨỰỲỶỸÝỴ\x1B !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~ÀẢÃÁẠẶẬÈẺẼÉẸỆÌỈĨÍỊÒỎÕÓỌỘỜỞỠỚỢÙỦŨ ĂÂÊÔƠƯĐăâêôơưđẶ̀̀̉̃́àảãáạẲằẳẵắẴẮẦẨẪẤỀặầẩẫấậèỂẻẽéẹềểễếệìỉỄẾỒĩíịòỔỏõóọồổỗốộờởỡớợùỖủũúụừửữứựỳỷỹýỵỐ`
			},
			georgianacademy: {
				type: "_sbcs",
				chars: "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ\xA0¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
			},
			georgianps: {
				type: "_sbcs",
				chars: "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ\xA0¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
			},
			pt154: {
				type: "_sbcs",
				chars: "ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ\xA0ЎўЈӨҘҰ§Ё©Ә«¬ӯ®Ҝ°ұІіҙө¶·ё№ә»јҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
			},
			viscii: {
				type: "_sbcs",
				chars: `\0ẲẴẪ\x07\b	
\v\f\rỶỸ\x1BỴ !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~ẠẮẰẶẤẦẨẬẼẸẾỀỂỄỆỐỒỔỖỘỢỚỜỞỊỎỌỈỦŨỤỲÕắằặấầẩậẽẹếềểễệốồổỗỠƠộờởịỰỨỪỬơớƯÀÁÂÃẢĂẳẵÈÉÊẺÌÍĨỳĐứÒÓÔạỷừửÙÚỹỵÝỡưàáâãảăữẫèéêẻìíĩỉđựòóôõỏọụùúũủýợỮ`
			},
			iso646cn: {
				type: "_sbcs",
				chars: `\0\x07\b	
\v\f\r\x1B !"#¥%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������`
			},
			iso646jp: {
				type: "_sbcs",
				chars: `\0\x07\b	
\v\f\r\x1B !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[¥]^_\`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������`
			},
			hproman8: {
				type: "_sbcs",
				chars: "\xA0ÀÂÈÊËÎÏ´ˋˆ¨˜ÙÛ₤¯Ýý°ÇçÑñ¡¿¤£¥§ƒ¢âêôûáéóúàèòùäëöüÅîØÆåíøæÄìÖÜÉïßÔÁÃãÐðÍÌÓÒÕõŠšÚŸÿÞþ·µ¶¾—¼½ªº«■»±�"
			},
			macintosh: {
				type: "_sbcs",
				chars: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
			},
			ascii: {
				type: "_sbcs",
				chars: "��������������������������������������������������������������������������������������������������������������������������������"
			},
			tis620: {
				type: "_sbcs",
				chars: "���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
			}
		};
	})), mr = ft(((U) => {
		var F = xt().Buffer;
		U._dbcs = _;
		for (var T = -1, N = -2, A = -10, i = -1e3, s = new Array(256), t = -1, m = 0; m < 256; m++) s[m] = T;
		function _(u, o) {
			if (this.encodingName = u.encodingName, !u) throw new Error("DBCS codec is called without the data.");
			if (!u.table) throw new Error("Encoding '" + this.encodingName + "' has no data.");
			var n = u.table();
			this.decodeTables = [], this.decodeTables[0] = s.slice(0), this.decodeTableSeq = [];
			for (var f = 0; f < n.length; f++) this._addDecodeChunk(n[f]);
			if (typeof u.gb18030 == "function") {
				this.gb18030 = u.gb18030();
				var l = this.decodeTables.length;
				this.decodeTables.push(s.slice(0));
				var e = this.decodeTables.length;
				this.decodeTables.push(s.slice(0));
				for (var d = this.decodeTables[0], f = 129; f <= 254; f++) for (var r = this.decodeTables[i - d[f]], c = 48; c <= 57; c++) {
					if (r[c] === T) r[c] = i - l;
					else if (r[c] > i) throw new Error("gb18030 decode tables conflict at byte 2");
					for (var w = this.decodeTables[i - r[c]], x = 129; x <= 254; x++) {
						if (w[x] === T) w[x] = i - e;
						else {
							if (w[x] === i - e) continue;
							if (w[x] > i) throw new Error("gb18030 decode tables conflict at byte 3");
						}
						for (var D = this.decodeTables[i - w[x]], E = 48; E <= 57; E++) D[E] === T && (D[E] = N);
					}
				}
			}
			this.defaultCharUnicode = o.defaultCharUnicode, this.encodeTable = [], this.encodeTableSeq = [];
			var z = {};
			if (u.encodeSkipVals) for (var f = 0; f < u.encodeSkipVals.length; f++) {
				var K = u.encodeSkipVals[f];
				if (typeof K == "number") z[K] = !0;
				else for (var c = K.from; c <= K.to; c++) z[c] = !0;
			}
			if (this._fillEncodeTable(0, 0, z), u.encodeAdd) for (var B in u.encodeAdd) Object.prototype.hasOwnProperty.call(u.encodeAdd, B) && this._setEncodeChar(B.charCodeAt(0), u.encodeAdd[B]);
			this.defCharSB = this.encodeTable[0][o.defaultCharSingleByte.charCodeAt(0)], this.defCharSB === T && (this.defCharSB = this.encodeTable[0]["?"]), this.defCharSB === T && (this.defCharSB = 63);
		}
		_.prototype.encoder = g, _.prototype.decoder = a, _.prototype._getDecodeTrieNode = function(u) {
			for (var o = []; u > 0; u >>>= 8) o.push(u & 255);
			o.length == 0 && o.push(0);
			for (var n = this.decodeTables[0], f = o.length - 1; f > 0; f--) {
				var l = n[o[f]];
				if (l == T) n[o[f]] = i - this.decodeTables.length, this.decodeTables.push(n = s.slice(0));
				else if (l <= i) n = this.decodeTables[i - l];
				else throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + u.toString(16));
			}
			return n;
		}, _.prototype._addDecodeChunk = function(u) {
			var o = parseInt(u[0], 16), n = this._getDecodeTrieNode(o);
			o = o & 255;
			for (var f = 1; f < u.length; f++) {
				var l = u[f];
				if (typeof l == "string") for (var e = 0; e < l.length;) {
					var d = l.charCodeAt(e++);
					if (d >= 55296 && d < 56320) {
						var r = l.charCodeAt(e++);
						if (r >= 56320 && r < 57344) n[o++] = 65536 + (d - 55296) * 1024 + (r - 56320);
						else throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + u[0]);
					} else if (d > 4080 && d <= 4095) {
						for (var c = 4095 - d + 2, w = [], x = 0; x < c; x++) w.push(l.charCodeAt(e++));
						n[o++] = A - this.decodeTableSeq.length, this.decodeTableSeq.push(w);
					} else n[o++] = d;
				}
				else if (typeof l == "number") for (var D = n[o - 1] + 1, e = 0; e < l; e++) n[o++] = D++;
				else throw new Error("Incorrect type '" + typeof l + "' given in " + this.encodingName + " at chunk " + u[0]);
			}
			if (o > 255) throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + u[0] + ": too long" + o);
		}, _.prototype._getEncodeBucket = function(u) {
			var o = u >> 8;
			return this.encodeTable[o] === void 0 && (this.encodeTable[o] = s.slice(0)), this.encodeTable[o];
		}, _.prototype._setEncodeChar = function(u, o) {
			var n = this._getEncodeBucket(u), f = u & 255;
			n[f] <= A ? this.encodeTableSeq[A - n[f]][t] = o : n[f] == T && (n[f] = o);
		}, _.prototype._setEncodeSequence = function(u, o) {
			var n = u[0], f = this._getEncodeBucket(n), l = n & 255, e;
			f[l] <= A ? e = this.encodeTableSeq[A - f[l]] : (e = {}, f[l] !== T && (e[t] = f[l]), f[l] = A - this.encodeTableSeq.length, this.encodeTableSeq.push(e));
			for (var d = 1; d < u.length - 1; d++) {
				var r = e[n];
				typeof r == "object" ? e = r : (e = e[n] = {}, r !== void 0 && (e[t] = r));
			}
			n = u[u.length - 1], e[n] = o;
		}, _.prototype._fillEncodeTable = function(u, o, n) {
			for (var f = this.decodeTables[u], l = !1, e = {}, d = 0; d < 256; d++) {
				var r = f[d], c = o + d;
				if (!n[c]) if (r >= 0) this._setEncodeChar(r, c), l = !0;
				else if (r <= i) {
					var w = i - r;
					if (!e[w]) {
						var x = c << 8 >>> 0;
						this._fillEncodeTable(w, x, n) ? l = !0 : e[w] = !0;
					}
				} else r <= A && (this._setEncodeSequence(this.decodeTableSeq[A - r], c), l = !0);
			}
			return l;
		};
		function g(u, o) {
			this.leadSurrogate = -1, this.seqObj = void 0, this.encodeTable = o.encodeTable, this.encodeTableSeq = o.encodeTableSeq, this.defaultCharSingleByte = o.defCharSB, this.gb18030 = o.gb18030;
		}
		g.prototype.write = function(u) {
			for (var o = F.alloc(u.length * (this.gb18030 ? 4 : 3)), n = this.leadSurrogate, f = this.seqObj, l = -1, e = 0, d = 0;;) {
				if (l === -1) {
					if (e == u.length) break;
					var r = u.charCodeAt(e++);
				} else {
					var r = l;
					l = -1;
				}
				if (r >= 55296 && r < 57344) if (r < 56320) if (n === -1) {
					n = r;
					continue;
				} else n = r, r = T;
				else n !== -1 ? (r = 65536 + (n - 55296) * 1024 + (r - 56320), n = -1) : r = T;
				else n !== -1 && (l = r, r = T, n = -1);
				var c = T;
				if (f !== void 0 && r != T) {
					var w = f[r];
					if (typeof w == "object") {
						f = w;
						continue;
					} else typeof w == "number" ? c = w : w == null && (w = f[t], w !== void 0 && (c = w, l = r));
					f = void 0;
				} else if (r >= 0) {
					var x = this.encodeTable[r >> 8];
					if (x !== void 0 && (c = x[r & 255]), c <= A) {
						f = this.encodeTableSeq[A - c];
						continue;
					}
					if (c == T && this.gb18030) {
						var D = p(this.gb18030.uChars, r);
						if (D != -1) {
							var c = this.gb18030.gbChars[D] + (r - this.gb18030.uChars[D]);
							o[d++] = 129 + Math.floor(c / 12600), c = c % 12600, o[d++] = 48 + Math.floor(c / 1260), c = c % 1260, o[d++] = 129 + Math.floor(c / 10), c = c % 10, o[d++] = 48 + c;
							continue;
						}
					}
				}
				c === T && (c = this.defaultCharSingleByte), c < 256 ? o[d++] = c : c < 65536 ? (o[d++] = c >> 8, o[d++] = c & 255) : c < 16777216 ? (o[d++] = c >> 16, o[d++] = c >> 8 & 255, o[d++] = c & 255) : (o[d++] = c >>> 24, o[d++] = c >>> 16 & 255, o[d++] = c >>> 8 & 255, o[d++] = c & 255);
			}
			return this.seqObj = f, this.leadSurrogate = n, o.slice(0, d);
		}, g.prototype.end = function() {
			if (!(this.leadSurrogate === -1 && this.seqObj === void 0)) {
				var u = F.alloc(10), o = 0;
				if (this.seqObj) {
					var n = this.seqObj[t];
					n !== void 0 && (n < 256 ? u[o++] = n : (u[o++] = n >> 8, u[o++] = n & 255)), this.seqObj = void 0;
				}
				return this.leadSurrogate !== -1 && (u[o++] = this.defaultCharSingleByte, this.leadSurrogate = -1), u.slice(0, o);
			}
		}, g.prototype.findIdx = p;
		function a(u, o) {
			this.nodeIdx = 0, this.prevBytes = [], this.decodeTables = o.decodeTables, this.decodeTableSeq = o.decodeTableSeq, this.defaultCharUnicode = o.defaultCharUnicode, this.gb18030 = o.gb18030;
		}
		a.prototype.write = function(u) {
			for (var o = F.alloc(u.length * 2), n = this.nodeIdx, f = this.prevBytes, l = this.prevBytes.length, e = -this.prevBytes.length, d, r = 0, c = 0; r < u.length; r++) {
				var w = r >= 0 ? u[r] : f[r + l], d = this.decodeTables[n][w];
				if (!(d >= 0)) if (d === T) d = this.defaultCharUnicode.charCodeAt(0), r = e;
				else if (d === N) {
					if (r >= 3) var x = (u[r - 3] - 129) * 12600 + (u[r - 2] - 48) * 1260 + (u[r - 1] - 129) * 10 + (w - 48);
					else var x = (f[r - 3 + l] - 129) * 12600 + ((r - 2 >= 0 ? u[r - 2] : f[r - 2 + l]) - 48) * 1260 + ((r - 1 >= 0 ? u[r - 1] : f[r - 1 + l]) - 129) * 10 + (w - 48);
					var D = p(this.gb18030.gbChars, x);
					d = this.gb18030.uChars[D] + x - this.gb18030.gbChars[D];
				} else if (d <= i) {
					n = i - d;
					continue;
				} else if (d <= A) {
					for (var E = this.decodeTableSeq[A - d], z = 0; z < E.length - 1; z++) d = E[z], o[c++] = d & 255, o[c++] = d >> 8;
					d = E[E.length - 1];
				} else throw new Error("iconv-lite internal error: invalid decoding table value " + d + " at " + n + "/" + w);
				if (d >= 65536) {
					d -= 65536;
					var K = 55296 | d >> 10;
					o[c++] = K & 255, o[c++] = K >> 8, d = 56320 | d & 1023;
				}
				o[c++] = d & 255, o[c++] = d >> 8, n = 0, e = r + 1;
			}
			return this.nodeIdx = n, this.prevBytes = e >= 0 ? Array.prototype.slice.call(u, e) : f.slice(e + l).concat(Array.prototype.slice.call(u)), o.slice(0, c).toString("ucs2");
		}, a.prototype.end = function() {
			for (var u = ""; this.prevBytes.length > 0;) {
				u += this.defaultCharUnicode;
				var o = this.prevBytes.slice(1);
				this.prevBytes = [], this.nodeIdx = 0, o.length > 0 && (u += this.write(o));
			}
			return this.prevBytes = [], this.nodeIdx = 0, u;
		};
		function p(u, o) {
			if (u[0] > o) return -1;
			for (var n = 0, f = u.length; n < f - 1;) {
				var l = n + (f - n + 1 >> 1);
				u[l] <= o ? n = l : f = l;
			}
			return n;
		}
	})), gr = St({ default: () => we }), we, yr = Tt((() => {
		we = JSON.parse("[[\"0\",\"\\u0000\",128],[\"a1\",\"｡\",62],[\"8140\",\"　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈\",9,\"＋－±×\"],[\"8180\",\"÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓\"],[\"81b8\",\"∈∋⊆⊇⊂⊃∪∩\"],[\"81c8\",\"∧∨￢⇒⇔∀∃\"],[\"81da\",\"∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬\"],[\"81f0\",\"Å‰♯♭♪†‡¶\"],[\"81fc\",\"◯\"],[\"824f\",\"０\",9],[\"8260\",\"Ａ\",25],[\"8281\",\"ａ\",25],[\"829f\",\"ぁ\",82],[\"8340\",\"ァ\",62],[\"8380\",\"ム\",22],[\"839f\",\"Α\",16,\"Σ\",6],[\"83bf\",\"α\",16,\"σ\",6],[\"8440\",\"А\",5,\"ЁЖ\",25],[\"8470\",\"а\",5,\"ёж\",7],[\"8480\",\"о\",17],[\"849f\",\"─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂\"],[\"8740\",\"①\",19,\"Ⅰ\",9],[\"875f\",\"㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡\"],[\"877e\",\"㍻\"],[\"8780\",\"〝〟№㏍℡㊤\",4,\"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪\"],[\"889f\",\"亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭\"],[\"8940\",\"院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円\"],[\"8980\",\"園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改\"],[\"8a40\",\"魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫\"],[\"8a80\",\"橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄\"],[\"8b40\",\"機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救\"],[\"8b80\",\"朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈\"],[\"8c40\",\"掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨\"],[\"8c80\",\"劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向\"],[\"8d40\",\"后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降\"],[\"8d80\",\"項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷\"],[\"8e40\",\"察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止\"],[\"8e80\",\"死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周\"],[\"8f40\",\"宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳\"],[\"8f80\",\"準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾\"],[\"9040\",\"拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨\"],[\"9080\",\"逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線\"],[\"9140\",\"繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻\"],[\"9180\",\"操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只\"],[\"9240\",\"叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄\"],[\"9280\",\"逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓\"],[\"9340\",\"邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬\"],[\"9380\",\"凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入\"],[\"9440\",\"如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅\"],[\"9480\",\"楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美\"],[\"9540\",\"鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷\"],[\"9580\",\"斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋\"],[\"9640\",\"法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆\"],[\"9680\",\"摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒\"],[\"9740\",\"諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲\"],[\"9780\",\"沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯\"],[\"9840\",\"蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕\"],[\"989f\",\"弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲\"],[\"9940\",\"僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭\"],[\"9980\",\"凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨\"],[\"9a40\",\"咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸\"],[\"9a80\",\"噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩\"],[\"9b40\",\"奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀\"],[\"9b80\",\"它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏\"],[\"9c40\",\"廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠\"],[\"9c80\",\"怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛\"],[\"9d40\",\"戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫\"],[\"9d80\",\"捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼\"],[\"9e40\",\"曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎\"],[\"9e80\",\"梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣\"],[\"9f40\",\"檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯\"],[\"9f80\",\"麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌\"],[\"e040\",\"漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝\"],[\"e080\",\"烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱\"],[\"e140\",\"瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿\"],[\"e180\",\"痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬\"],[\"e240\",\"磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰\"],[\"e280\",\"窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆\"],[\"e340\",\"紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷\"],[\"e380\",\"縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋\"],[\"e440\",\"隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤\"],[\"e480\",\"艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈\"],[\"e540\",\"蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬\"],[\"e580\",\"蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞\"],[\"e640\",\"襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧\"],[\"e680\",\"諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊\"],[\"e740\",\"蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜\"],[\"e780\",\"轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮\"],[\"e840\",\"錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙\"],[\"e880\",\"閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰\"],[\"e940\",\"顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃\"],[\"e980\",\"騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈\"],[\"ea40\",\"鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯\"],[\"ea80\",\"黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙\"],[\"ed40\",\"纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏\"],[\"ed80\",\"塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱\"],[\"ee40\",\"犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙\"],[\"ee80\",\"蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑\"],[\"eeef\",\"ⅰ\",9,\"￢￤＇＂\"],[\"f040\",\"\",62],[\"f080\",\"\",124],[\"f140\",\"\",62],[\"f180\",\"\",124],[\"f240\",\"\",62],[\"f280\",\"\",124],[\"f340\",\"\",62],[\"f380\",\"\",124],[\"f440\",\"\",62],[\"f480\",\"\",124],[\"f540\",\"\",62],[\"f580\",\"\",124],[\"f640\",\"\",62],[\"f680\",\"\",124],[\"f740\",\"\",62],[\"f780\",\"\",124],[\"f840\",\"\",62],[\"f880\",\"\",124],[\"f940\",\"\"],[\"fa40\",\"ⅰ\",9,\"Ⅰ\",9,\"￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊\"],[\"fa80\",\"兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯\"],[\"fb40\",\"涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神\"],[\"fb80\",\"祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙\"],[\"fc40\",\"髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑\"]]");
	})), br = St({ default: () => ve }), ve, _r = Tt((() => {
		ve = JSON.parse("[[\"0\",\"\\u0000\",127],[\"8ea1\",\"｡\",62],[\"a1a1\",\"　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈\",9,\"＋－±×÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇\"],[\"a2a1\",\"◆□■△▲▽▼※〒→←↑↓〓\"],[\"a2ba\",\"∈∋⊆⊇⊂⊃∪∩\"],[\"a2ca\",\"∧∨￢⇒⇔∀∃\"],[\"a2dc\",\"∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬\"],[\"a2f2\",\"Å‰♯♭♪†‡¶\"],[\"a2fe\",\"◯\"],[\"a3b0\",\"０\",9],[\"a3c1\",\"Ａ\",25],[\"a3e1\",\"ａ\",25],[\"a4a1\",\"ぁ\",82],[\"a5a1\",\"ァ\",85],[\"a6a1\",\"Α\",16,\"Σ\",6],[\"a6c1\",\"α\",16,\"σ\",6],[\"a7a1\",\"А\",5,\"ЁЖ\",25],[\"a7d1\",\"а\",5,\"ёж\",25],[\"a8a1\",\"─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂\"],[\"ada1\",\"①\",19,\"Ⅰ\",9],[\"adc0\",\"㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡\"],[\"addf\",\"㍻〝〟№㏍℡㊤\",4,\"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪\"],[\"b0a1\",\"亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭\"],[\"b1a1\",\"院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応\"],[\"b2a1\",\"押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改\"],[\"b3a1\",\"魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱\"],[\"b4a1\",\"粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄\"],[\"b5a1\",\"機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京\"],[\"b6a1\",\"供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈\"],[\"b7a1\",\"掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲\"],[\"b8a1\",\"検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向\"],[\"b9a1\",\"后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込\"],[\"baa1\",\"此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷\"],[\"bba1\",\"察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時\"],[\"bca1\",\"次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周\"],[\"bda1\",\"宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償\"],[\"bea1\",\"勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾\"],[\"bfa1\",\"拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾\"],[\"c0a1\",\"澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線\"],[\"c1a1\",\"繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎\"],[\"c2a1\",\"臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只\"],[\"c3a1\",\"叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵\"],[\"c4a1\",\"帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓\"],[\"c5a1\",\"邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到\"],[\"c6a1\",\"董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入\"],[\"c7a1\",\"如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦\"],[\"c8a1\",\"函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美\"],[\"c9a1\",\"鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服\"],[\"caa1\",\"福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋\"],[\"cba1\",\"法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満\"],[\"cca1\",\"漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒\"],[\"cda1\",\"諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃\"],[\"cea1\",\"痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯\"],[\"cfa1\",\"蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕\"],[\"d0a1\",\"弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲\"],[\"d1a1\",\"僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨\"],[\"d2a1\",\"辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨\"],[\"d3a1\",\"咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉\"],[\"d4a1\",\"圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩\"],[\"d5a1\",\"奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓\"],[\"d6a1\",\"屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏\"],[\"d7a1\",\"廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚\"],[\"d8a1\",\"悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛\"],[\"d9a1\",\"戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼\"],[\"daa1\",\"據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼\"],[\"dba1\",\"曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍\"],[\"dca1\",\"棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣\"],[\"dda1\",\"檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾\"],[\"dea1\",\"沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌\"],[\"dfa1\",\"漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼\"],[\"e0a1\",\"燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱\"],[\"e1a1\",\"瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰\"],[\"e2a1\",\"癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬\"],[\"e3a1\",\"磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐\"],[\"e4a1\",\"筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆\"],[\"e5a1\",\"紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺\"],[\"e6a1\",\"罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋\"],[\"e7a1\",\"隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙\"],[\"e8a1\",\"茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈\"],[\"e9a1\",\"蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙\"],[\"eaa1\",\"蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞\"],[\"eba1\",\"襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫\"],[\"eca1\",\"譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊\"],[\"eda1\",\"蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸\"],[\"eea1\",\"遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮\"],[\"efa1\",\"錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞\"],[\"f0a1\",\"陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰\"],[\"f1a1\",\"顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷\"],[\"f2a1\",\"髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈\"],[\"f3a1\",\"鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠\"],[\"f4a1\",\"堯槇遙瑤凜熙\"],[\"f9a1\",\"纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德\"],[\"faa1\",\"忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱\"],[\"fba1\",\"犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚\"],[\"fca1\",\"釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑\"],[\"fcf1\",\"ⅰ\",9,\"￢￤＇＂\"],[\"8fa2af\",\"˘ˇ¸˙˝¯˛˚～΄΅\"],[\"8fa2c2\",\"¡¦¿\"],[\"8fa2eb\",\"ºª©®™¤№\"],[\"8fa6e1\",\"ΆΈΉΊΪ\"],[\"8fa6e7\",\"Ό\"],[\"8fa6e9\",\"ΎΫ\"],[\"8fa6ec\",\"Ώ\"],[\"8fa6f1\",\"άέήίϊΐόςύϋΰώ\"],[\"8fa7c2\",\"Ђ\",10,\"ЎЏ\"],[\"8fa7f2\",\"ђ\",10,\"ўџ\"],[\"8fa9a1\",\"ÆĐ\"],[\"8fa9a4\",\"Ħ\"],[\"8fa9a6\",\"Ĳ\"],[\"8fa9a8\",\"ŁĿ\"],[\"8fa9ab\",\"ŊØŒ\"],[\"8fa9af\",\"ŦÞ\"],[\"8fa9c1\",\"æđðħıĳĸłŀŉŋøœßŧþ\"],[\"8faaa1\",\"ÁÀÄÂĂǍĀĄÅÃĆĈČÇĊĎÉÈËÊĚĖĒĘ\"],[\"8faaba\",\"ĜĞĢĠĤÍÌÏÎǏİĪĮĨĴĶĹĽĻŃŇŅÑÓÒÖÔǑŐŌÕŔŘŖŚŜŠŞŤŢÚÙÜÛŬǓŰŪŲŮŨǗǛǙǕŴÝŸŶŹŽŻ\"],[\"8faba1\",\"áàäâăǎāąåãćĉčçċďéèëêěėēęǵĝğ\"],[\"8fabbd\",\"ġĥíìïîǐ\"],[\"8fabc5\",\"īįĩĵķĺľļńňņñóòöôǒőōõŕřŗśŝšşťţúùüûŭǔűūųůũǘǜǚǖŵýÿŷźžż\"],[\"8fb0a1\",\"丂丄丅丌丒丟丣两丨丫丮丯丰丵乀乁乄乇乑乚乜乣乨乩乴乵乹乿亍亖亗亝亯亹仃仐仚仛仠仡仢仨仯仱仳仵份仾仿伀伂伃伈伋伌伒伕伖众伙伮伱你伳伵伷伹伻伾佀佂佈佉佋佌佒佔佖佘佟佣佪佬佮佱佷佸佹佺佽佾侁侂侄\"],[\"8fb1a1\",\"侅侉侊侌侎侐侒侓侔侗侙侚侞侟侲侷侹侻侼侽侾俀俁俅俆俈俉俋俌俍俏俒俜俠俢俰俲俼俽俿倀倁倄倇倊倌倎倐倓倗倘倛倜倝倞倢倧倮倰倲倳倵偀偁偂偅偆偊偌偎偑偒偓偗偙偟偠偢偣偦偧偪偭偰偱倻傁傃傄傆傊傎傏傐\"],[\"8fb2a1\",\"傒傓傔傖傛傜傞\",4,\"傪傯傰傹傺傽僀僃僄僇僌僎僐僓僔僘僜僝僟僢僤僦僨僩僯僱僶僺僾儃儆儇儈儋儌儍儎僲儐儗儙儛儜儝儞儣儧儨儬儭儯儱儳儴儵儸儹兂兊兏兓兕兗兘兟兤兦兾冃冄冋冎冘冝冡冣冭冸冺冼冾冿凂\"],[\"8fb3a1\",\"凈减凑凒凓凕凘凞凢凥凮凲凳凴凷刁刂刅划刓刕刖刘刢刨刱刲刵刼剅剉剕剗剘剚剜剟剠剡剦剮剷剸剹劀劂劅劊劌劓劕劖劗劘劚劜劤劥劦劧劯劰劶劷劸劺劻劽勀勄勆勈勌勏勑勔勖勛勜勡勥勨勩勪勬勰勱勴勶勷匀匃匊匋\"],[\"8fb4a1\",\"匌匑匓匘匛匜匞匟匥匧匨匩匫匬匭匰匲匵匼匽匾卂卌卋卙卛卡卣卥卬卭卲卹卾厃厇厈厎厓厔厙厝厡厤厪厫厯厲厴厵厷厸厺厽叀叅叏叒叓叕叚叝叞叠另叧叵吂吓吚吡吧吨吪启吱吴吵呃呄呇呍呏呞呢呤呦呧呩呫呭呮呴呿\"],[\"8fb5a1\",\"咁咃咅咈咉咍咑咕咖咜咟咡咦咧咩咪咭咮咱咷咹咺咻咿哆哊响哎哠哪哬哯哶哼哾哿唀唁唅唈唉唌唍唎唕唪唫唲唵唶唻唼唽啁啇啉啊啍啐啑啘啚啛啞啠啡啤啦啿喁喂喆喈喎喏喑喒喓喔喗喣喤喭喲喿嗁嗃嗆嗉嗋嗌嗎嗑嗒\"],[\"8fb6a1\",\"嗓嗗嗘嗛嗞嗢嗩嗶嗿嘅嘈嘊嘍\",5,\"嘙嘬嘰嘳嘵嘷嘹嘻嘼嘽嘿噀噁噃噄噆噉噋噍噏噔噞噠噡噢噣噦噩噭噯噱噲噵嚄嚅嚈嚋嚌嚕嚙嚚嚝嚞嚟嚦嚧嚨嚩嚫嚬嚭嚱嚳嚷嚾囅囉囊囋囏囐囌囍囙囜囝囟囡囤\",4,\"囱囫园\"],[\"8fb7a1\",\"囶囷圁圂圇圊圌圑圕圚圛圝圠圢圣圤圥圩圪圬圮圯圳圴圽圾圿坅坆坌坍坒坢坥坧坨坫坭\",4,\"坳坴坵坷坹坺坻坼坾垁垃垌垔垗垙垚垜垝垞垟垡垕垧垨垩垬垸垽埇埈埌埏埕埝埞埤埦埧埩埭埰埵埶埸埽埾埿堃堄堈堉埡\"],[\"8fb8a1\",\"堌堍堛堞堟堠堦堧堭堲堹堿塉塌塍塏塐塕塟塡塤塧塨塸塼塿墀墁墇墈墉墊墌墍墏墐墔墖墝墠墡墢墦墩墱墲壄墼壂壈壍壎壐壒壔壖壚壝壡壢壩壳夅夆夋夌夒夓夔虁夝夡夣夤夨夯夰夳夵夶夿奃奆奒奓奙奛奝奞奟奡奣奫奭\"],[\"8fb9a1\",\"奯奲奵奶她奻奼妋妌妎妒妕妗妟妤妧妭妮妯妰妳妷妺妼姁姃姄姈姊姍姒姝姞姟姣姤姧姮姯姱姲姴姷娀娄娌娍娎娒娓娞娣娤娧娨娪娭娰婄婅婇婈婌婐婕婞婣婥婧婭婷婺婻婾媋媐媓媖媙媜媞媟媠媢媧媬媱媲媳媵媸媺媻媿\"],[\"8fbaa1\",\"嫄嫆嫈嫏嫚嫜嫠嫥嫪嫮嫵嫶嫽嬀嬁嬈嬗嬴嬙嬛嬝嬡嬥嬭嬸孁孋孌孒孖孞孨孮孯孼孽孾孿宁宄宆宊宎宐宑宓宔宖宨宩宬宭宯宱宲宷宺宼寀寁寍寏寖\",4,\"寠寯寱寴寽尌尗尞尟尣尦尩尫尬尮尰尲尵尶屙屚屜屢屣屧屨屩\"],[\"8fbba1\",\"屭屰屴屵屺屻屼屽岇岈岊岏岒岝岟岠岢岣岦岪岲岴岵岺峉峋峒峝峗峮峱峲峴崁崆崍崒崫崣崤崦崧崱崴崹崽崿嵂嵃嵆嵈嵕嵑嵙嵊嵟嵠嵡嵢嵤嵪嵭嵰嵹嵺嵾嵿嶁嶃嶈嶊嶒嶓嶔嶕嶙嶛嶟嶠嶧嶫嶰嶴嶸嶹巃巇巋巐巎巘巙巠巤\"],[\"8fbca1\",\"巩巸巹帀帇帍帒帔帕帘帟帠帮帨帲帵帾幋幐幉幑幖幘幛幜幞幨幪\",4,\"幰庀庋庎庢庤庥庨庪庬庱庳庽庾庿廆廌廋廎廑廒廔廕廜廞廥廫异弆弇弈弎弙弜弝弡弢弣弤弨弫弬弮弰弴弶弻弽弿彀彄彅彇彍彐彔彘彛彠彣彤彧\"],[\"8fbda1\",\"彯彲彴彵彸彺彽彾徉徍徏徖徜徝徢徧徫徤徬徯徰徱徸忄忇忈忉忋忐\",4,\"忞忡忢忨忩忪忬忭忮忯忲忳忶忺忼怇怊怍怓怔怗怘怚怟怤怭怳怵恀恇恈恉恌恑恔恖恗恝恡恧恱恾恿悂悆悈悊悎悑悓悕悘悝悞悢悤悥您悰悱悷\"],[\"8fbea1\",\"悻悾惂惄惈惉惊惋惎惏惔惕惙惛惝惞惢惥惲惵惸惼惽愂愇愊愌愐\",4,\"愖愗愙愜愞愢愪愫愰愱愵愶愷愹慁慅慆慉慞慠慬慲慸慻慼慿憀憁憃憄憋憍憒憓憗憘憜憝憟憠憥憨憪憭憸憹憼懀懁懂懎懏懕懜懝懞懟懡懢懧懩懥\"],[\"8fbfa1\",\"懬懭懯戁戃戄戇戓戕戜戠戢戣戧戩戫戹戽扂扃扄扆扌扐扑扒扔扖扚扜扤扭扯扳扺扽抍抎抏抐抦抨抳抶抷抺抾抿拄拎拕拖拚拪拲拴拼拽挃挄挊挋挍挐挓挖挘挩挪挭挵挶挹挼捁捂捃捄捆捊捋捎捒捓捔捘捛捥捦捬捭捱捴捵\"],[\"8fc0a1\",\"捸捼捽捿掂掄掇掊掐掔掕掙掚掞掤掦掭掮掯掽揁揅揈揎揑揓揔揕揜揠揥揪揬揲揳揵揸揹搉搊搐搒搔搘搞搠搢搤搥搩搪搯搰搵搽搿摋摏摑摒摓摔摚摛摜摝摟摠摡摣摭摳摴摻摽撅撇撏撐撑撘撙撛撝撟撡撣撦撨撬撳撽撾撿\"],[\"8fc1a1\",\"擄擉擊擋擌擎擐擑擕擗擤擥擩擪擭擰擵擷擻擿攁攄攈攉攊攏攓攔攖攙攛攞攟攢攦攩攮攱攺攼攽敃敇敉敐敒敔敟敠敧敫敺敽斁斅斊斒斕斘斝斠斣斦斮斲斳斴斿旂旈旉旎旐旔旖旘旟旰旲旴旵旹旾旿昀昄昈昉昍昑昒昕昖昝\"],[\"8fc2a1\",\"昞昡昢昣昤昦昩昪昫昬昮昰昱昳昹昷晀晅晆晊晌晑晎晗晘晙晛晜晠晡曻晪晫晬晾晳晵晿晷晸晹晻暀晼暋暌暍暐暒暙暚暛暜暟暠暤暭暱暲暵暻暿曀曂曃曈曌曎曏曔曛曟曨曫曬曮曺朅朇朎朓朙朜朠朢朳朾杅杇杈杌杔杕杝\"],[\"8fc3a1\",\"杦杬杮杴杶杻极构枎枏枑枓枖枘枙枛枰枱枲枵枻枼枽柹柀柂柃柅柈柉柒柗柙柜柡柦柰柲柶柷桒栔栙栝栟栨栧栬栭栯栰栱栳栻栿桄桅桊桌桕桗桘桛桫桮\",4,\"桵桹桺桻桼梂梄梆梈梖梘梚梜梡梣梥梩梪梮梲梻棅棈棌棏\"],[\"8fc4a1\",\"棐棑棓棖棙棜棝棥棨棪棫棬棭棰棱棵棶棻棼棽椆椉椊椐椑椓椖椗椱椳椵椸椻楂楅楉楎楗楛楣楤楥楦楨楩楬楰楱楲楺楻楿榀榍榒榖榘榡榥榦榨榫榭榯榷榸榺榼槅槈槑槖槗槢槥槮槯槱槳槵槾樀樁樃樏樑樕樚樝樠樤樨樰樲\"],[\"8fc5a1\",\"樴樷樻樾樿橅橆橉橊橎橐橑橒橕橖橛橤橧橪橱橳橾檁檃檆檇檉檋檑檛檝檞檟檥檫檯檰檱檴檽檾檿櫆櫉櫈櫌櫐櫔櫕櫖櫜櫝櫤櫧櫬櫰櫱櫲櫼櫽欂欃欆欇欉欏欐欑欗欛欞欤欨欫欬欯欵欶欻欿歆歊歍歒歖歘歝歠歧歫歮歰歵歽\"],[\"8fc6a1\",\"歾殂殅殗殛殟殠殢殣殨殩殬殭殮殰殸殹殽殾毃毄毉毌毖毚毡毣毦毧毮毱毷毹毿氂氄氅氉氍氎氐氒氙氟氦氧氨氬氮氳氵氶氺氻氿汊汋汍汏汒汔汙汛汜汫汭汯汴汶汸汹汻沅沆沇沉沔沕沗沘沜沟沰沲沴泂泆泍泏泐泑泒泔泖\"],[\"8fc7a1\",\"泚泜泠泧泩泫泬泮泲泴洄洇洊洎洏洑洓洚洦洧洨汧洮洯洱洹洼洿浗浞浟浡浥浧浯浰浼涂涇涑涒涔涖涗涘涪涬涴涷涹涽涿淄淈淊淎淏淖淛淝淟淠淢淥淩淯淰淴淶淼渀渄渞渢渧渲渶渹渻渼湄湅湈湉湋湏湑湒湓湔湗湜湝湞\"],[\"8fc8a1\",\"湢湣湨湳湻湽溍溓溙溠溧溭溮溱溳溻溿滀滁滃滇滈滊滍滎滏滫滭滮滹滻滽漄漈漊漌漍漖漘漚漛漦漩漪漯漰漳漶漻漼漭潏潑潒潓潗潙潚潝潞潡潢潨潬潽潾澃澇澈澋澌澍澐澒澓澔澖澚澟澠澥澦澧澨澮澯澰澵澶澼濅濇濈濊\"],[\"8fc9a1\",\"濚濞濨濩濰濵濹濼濽瀀瀅瀆瀇瀍瀗瀠瀣瀯瀴瀷瀹瀼灃灄灈灉灊灋灔灕灝灞灎灤灥灬灮灵灶灾炁炅炆炔\",4,\"炛炤炫炰炱炴炷烊烑烓烔烕烖烘烜烤烺焃\",4,\"焋焌焏焞焠焫焭焯焰焱焸煁煅煆煇煊煋煐煒煗煚煜煞煠\"],[\"8fcaa1\",\"煨煹熀熅熇熌熒熚熛熠熢熯熰熲熳熺熿燀燁燄燋燌燓燖燙燚燜燸燾爀爇爈爉爓爗爚爝爟爤爫爯爴爸爹牁牂牃牅牎牏牐牓牕牖牚牜牞牠牣牨牫牮牯牱牷牸牻牼牿犄犉犍犎犓犛犨犭犮犱犴犾狁狇狉狌狕狖狘狟狥狳狴狺狻\"],[\"8fcba1\",\"狾猂猄猅猇猋猍猒猓猘猙猞猢猤猧猨猬猱猲猵猺猻猽獃獍獐獒獖獘獝獞獟獠獦獧獩獫獬獮獯獱獷獹獼玀玁玃玅玆玎玐玓玕玗玘玜玞玟玠玢玥玦玪玫玭玵玷玹玼玽玿珅珆珉珋珌珏珒珓珖珙珝珡珣珦珧珩珴珵珷珹珺珻珽\"],[\"8fcca1\",\"珿琀琁琄琇琊琑琚琛琤琦琨\",9,\"琹瑀瑃瑄瑆瑇瑋瑍瑑瑒瑗瑝瑢瑦瑧瑨瑫瑭瑮瑱瑲璀璁璅璆璇璉璏璐璑璒璘璙璚璜璟璠璡璣璦璨璩璪璫璮璯璱璲璵璹璻璿瓈瓉瓌瓐瓓瓘瓚瓛瓞瓟瓤瓨瓪瓫瓯瓴瓺瓻瓼瓿甆\"],[\"8fcda1\",\"甒甖甗甠甡甤甧甩甪甯甶甹甽甾甿畀畃畇畈畎畐畒畗畞畟畡畯畱畹\",5,\"疁疅疐疒疓疕疙疜疢疤疴疺疿痀痁痄痆痌痎痏痗痜痟痠痡痤痧痬痮痯痱痹瘀瘂瘃瘄瘇瘈瘊瘌瘏瘒瘓瘕瘖瘙瘛瘜瘝瘞瘣瘥瘦瘩瘭瘲瘳瘵瘸瘹\"],[\"8fcea1\",\"瘺瘼癊癀癁癃癄癅癉癋癕癙癟癤癥癭癮癯癱癴皁皅皌皍皕皛皜皝皟皠皢\",6,\"皪皭皽盁盅盉盋盌盎盔盙盠盦盨盬盰盱盶盹盼眀眆眊眎眒眔眕眗眙眚眜眢眨眭眮眯眴眵眶眹眽眾睂睅睆睊睍睎睏睒睖睗睜睞睟睠睢\"],[\"8fcfa1\",\"睤睧睪睬睰睲睳睴睺睽瞀瞄瞌瞍瞔瞕瞖瞚瞟瞢瞧瞪瞮瞯瞱瞵瞾矃矉矑矒矕矙矞矟矠矤矦矪矬矰矱矴矸矻砅砆砉砍砎砑砝砡砢砣砭砮砰砵砷硃硄硇硈硌硎硒硜硞硠硡硣硤硨硪确硺硾碊碏碔碘碡碝碞碟碤碨碬碭碰碱碲碳\"],[\"8fd0a1\",\"碻碽碿磇磈磉磌磎磒磓磕磖磤磛磟磠磡磦磪磲磳礀磶磷磺磻磿礆礌礐礚礜礞礟礠礥礧礩礭礱礴礵礻礽礿祄祅祆祊祋祏祑祔祘祛祜祧祩祫祲祹祻祼祾禋禌禑禓禔禕禖禘禛禜禡禨禩禫禯禱禴禸离秂秄秇秈秊秏秔秖秚秝秞\"],[\"8fd1a1\",\"秠秢秥秪秫秭秱秸秼稂稃稇稉稊稌稑稕稛稞稡稧稫稭稯稰稴稵稸稹稺穄穅穇穈穌穕穖穙穜穝穟穠穥穧穪穭穵穸穾窀窂窅窆窊窋窐窑窔窞窠窣窬窳窵窹窻窼竆竉竌竎竑竛竨竩竫竬竱竴竻竽竾笇笔笟笣笧笩笪笫笭笮笯笰\"],[\"8fd2a1\",\"笱笴笽笿筀筁筇筎筕筠筤筦筩筪筭筯筲筳筷箄箉箎箐箑箖箛箞箠箥箬箯箰箲箵箶箺箻箼箽篂篅篈篊篔篖篗篙篚篛篨篪篲篴篵篸篹篺篼篾簁簂簃簄簆簉簋簌簎簏簙簛簠簥簦簨簬簱簳簴簶簹簺籆籊籕籑籒籓籙\",5],[\"8fd3a1\",\"籡籣籧籩籭籮籰籲籹籼籽粆粇粏粔粞粠粦粰粶粷粺粻粼粿糄糇糈糉糍糏糓糔糕糗糙糚糝糦糩糫糵紃紇紈紉紏紑紒紓紖紝紞紣紦紪紭紱紼紽紾絀絁絇絈絍絑絓絗絙絚絜絝絥絧絪絰絸絺絻絿綁綂綃綅綆綈綋綌綍綑綖綗綝\"],[\"8fd4a1\",\"綞綦綧綪綳綶綷綹緂\",4,\"緌緍緎緗緙縀緢緥緦緪緫緭緱緵緶緹緺縈縐縑縕縗縜縝縠縧縨縬縭縯縳縶縿繄繅繇繎繐繒繘繟繡繢繥繫繮繯繳繸繾纁纆纇纊纍纑纕纘纚纝纞缼缻缽缾缿罃罄罇罏罒罓罛罜罝罡罣罤罥罦罭\"],[\"8fd5a1\",\"罱罽罾罿羀羋羍羏羐羑羖羗羜羡羢羦羪羭羴羼羿翀翃翈翎翏翛翟翣翥翨翬翮翯翲翺翽翾翿耇耈耊耍耎耏耑耓耔耖耝耞耟耠耤耦耬耮耰耴耵耷耹耺耼耾聀聄聠聤聦聭聱聵肁肈肎肜肞肦肧肫肸肹胈胍胏胒胔胕胗胘胠胭胮\"],[\"8fd6a1\",\"胰胲胳胶胹胺胾脃脋脖脗脘脜脞脠脤脧脬脰脵脺脼腅腇腊腌腒腗腠腡腧腨腩腭腯腷膁膐膄膅膆膋膎膖膘膛膞膢膮膲膴膻臋臃臅臊臎臏臕臗臛臝臞臡臤臫臬臰臱臲臵臶臸臹臽臿舀舃舏舓舔舙舚舝舡舢舨舲舴舺艃艄艅艆\"],[\"8fd7a1\",\"艋艎艏艑艖艜艠艣艧艭艴艻艽艿芀芁芃芄芇芉芊芎芑芔芖芘芚芛芠芡芣芤芧芨芩芪芮芰芲芴芷芺芼芾芿苆苐苕苚苠苢苤苨苪苭苯苶苷苽苾茀茁茇茈茊茋荔茛茝茞茟茡茢茬茭茮茰茳茷茺茼茽荂荃荄荇荍荎荑荕荖荗荰荸\"],[\"8fd8a1\",\"荽荿莀莂莄莆莍莒莔莕莘莙莛莜莝莦莧莩莬莾莿菀菇菉菏菐菑菔菝荓菨菪菶菸菹菼萁萆萊萏萑萕萙莭萯萹葅葇葈葊葍葏葑葒葖葘葙葚葜葠葤葥葧葪葰葳葴葶葸葼葽蒁蒅蒒蒓蒕蒞蒦蒨蒩蒪蒯蒱蒴蒺蒽蒾蓀蓂蓇蓈蓌蓏蓓\"],[\"8fd9a1\",\"蓜蓧蓪蓯蓰蓱蓲蓷蔲蓺蓻蓽蔂蔃蔇蔌蔎蔐蔜蔞蔢蔣蔤蔥蔧蔪蔫蔯蔳蔴蔶蔿蕆蕏\",4,\"蕖蕙蕜\",6,\"蕤蕫蕯蕹蕺蕻蕽蕿薁薅薆薉薋薌薏薓薘薝薟薠薢薥薧薴薶薷薸薼薽薾薿藂藇藊藋藎薭藘藚藟藠藦藨藭藳藶藼\"],[\"8fdaa1\",\"藿蘀蘄蘅蘍蘎蘐蘑蘒蘘蘙蘛蘞蘡蘧蘩蘶蘸蘺蘼蘽虀虂虆虒虓虖虗虘虙虝虠\",4,\"虩虬虯虵虶虷虺蚍蚑蚖蚘蚚蚜蚡蚦蚧蚨蚭蚱蚳蚴蚵蚷蚸蚹蚿蛀蛁蛃蛅蛑蛒蛕蛗蛚蛜蛠蛣蛥蛧蚈蛺蛼蛽蜄蜅蜇蜋蜎蜏蜐蜓蜔蜙蜞蜟蜡蜣\"],[\"8fdba1\",\"蜨蜮蜯蜱蜲蜹蜺蜼蜽蜾蝀蝃蝅蝍蝘蝝蝡蝤蝥蝯蝱蝲蝻螃\",6,\"螋螌螐螓螕螗螘螙螞螠螣螧螬螭螮螱螵螾螿蟁蟈蟉蟊蟎蟕蟖蟙蟚蟜蟟蟢蟣蟤蟪蟫蟭蟱蟳蟸蟺蟿蠁蠃蠆蠉蠊蠋蠐蠙蠒蠓蠔蠘蠚蠛蠜蠞蠟蠨蠭蠮蠰蠲蠵\"],[\"8fdca1\",\"蠺蠼衁衃衅衈衉衊衋衎衑衕衖衘衚衜衟衠衤衩衱衹衻袀袘袚袛袜袟袠袨袪袺袽袾裀裊\",4,\"裑裒裓裛裞裧裯裰裱裵裷褁褆褍褎褏褕褖褘褙褚褜褠褦褧褨褰褱褲褵褹褺褾襀襂襅襆襉襏襒襗襚襛襜襡襢襣襫襮襰襳襵襺\"],[\"8fdda1\",\"襻襼襽覉覍覐覔覕覛覜覟覠覥覰覴覵覶覷覼觔\",4,\"觥觩觫觭觱觳觶觹觽觿訄訅訇訏訑訒訔訕訞訠訢訤訦訫訬訯訵訷訽訾詀詃詅詇詉詍詎詓詖詗詘詜詝詡詥詧詵詶詷詹詺詻詾詿誀誃誆誋誏誐誒誖誗誙誟誧誩誮誯誳\"],[\"8fdea1\",\"誶誷誻誾諃諆諈諉諊諑諓諔諕諗諝諟諬諰諴諵諶諼諿謅謆謋謑謜謞謟謊謭謰謷謼譂\",4,\"譈譒譓譔譙譍譞譣譭譶譸譹譼譾讁讄讅讋讍讏讔讕讜讞讟谸谹谽谾豅豇豉豋豏豑豓豔豗豘豛豝豙豣豤豦豨豩豭豳豵豶豻豾貆\"],[\"8fdfa1\",\"貇貋貐貒貓貙貛貜貤貹貺賅賆賉賋賏賖賕賙賝賡賨賬賯賰賲賵賷賸賾賿贁贃贉贒贗贛赥赩赬赮赿趂趄趈趍趐趑趕趞趟趠趦趫趬趯趲趵趷趹趻跀跅跆跇跈跊跎跑跔跕跗跙跤跥跧跬跰趼跱跲跴跽踁踄踅踆踋踑踔踖踠踡踢\"],[\"8fe0a1\",\"踣踦踧踱踳踶踷踸踹踽蹀蹁蹋蹍蹎蹏蹔蹛蹜蹝蹞蹡蹢蹩蹬蹭蹯蹰蹱蹹蹺蹻躂躃躉躐躒躕躚躛躝躞躢躧躩躭躮躳躵躺躻軀軁軃軄軇軏軑軔軜軨軮軰軱軷軹軺軭輀輂輇輈輏輐輖輗輘輞輠輡輣輥輧輨輬輭輮輴輵輶輷輺轀轁\"],[\"8fe1a1\",\"轃轇轏轑\",4,\"轘轝轞轥辝辠辡辤辥辦辵辶辸达迀迁迆迊迋迍运迒迓迕迠迣迤迨迮迱迵迶迻迾适逄逈逌逘逛逨逩逯逪逬逭逳逴逷逿遃遄遌遛遝遢遦遧遬遰遴遹邅邈邋邌邎邐邕邗邘邙邛邠邡邢邥邰邲邳邴邶邽郌邾郃\"],[\"8fe2a1\",\"郄郅郇郈郕郗郘郙郜郝郟郥郒郶郫郯郰郴郾郿鄀鄄鄅鄆鄈鄍鄐鄔鄖鄗鄘鄚鄜鄞鄠鄥鄢鄣鄧鄩鄮鄯鄱鄴鄶鄷鄹鄺鄼鄽酃酇酈酏酓酗酙酚酛酡酤酧酭酴酹酺酻醁醃醅醆醊醎醑醓醔醕醘醞醡醦醨醬醭醮醰醱醲醳醶醻醼醽醿\"],[\"8fe3a1\",\"釂釃釅釓釔釗釙釚釞釤釥釩釪釬\",5,\"釷釹釻釽鈀鈁鈄鈅鈆鈇鈉鈊鈌鈐鈒鈓鈖鈘鈜鈝鈣鈤鈥鈦鈨鈮鈯鈰鈳鈵鈶鈸鈹鈺鈼鈾鉀鉂鉃鉆鉇鉊鉍鉎鉏鉑鉘鉙鉜鉝鉠鉡鉥鉧鉨鉩鉮鉯鉰鉵\",4,\"鉻鉼鉽鉿銈銉銊銍銎銒銗\"],[\"8fe4a1\",\"銙銟銠銤銥銧銨銫銯銲銶銸銺銻銼銽銿\",4,\"鋅鋆鋇鋈鋋鋌鋍鋎鋐鋓鋕鋗鋘鋙鋜鋝鋟鋠鋡鋣鋥鋧鋨鋬鋮鋰鋹鋻鋿錀錂錈錍錑錔錕錜錝錞錟錡錤錥錧錩錪錳錴錶錷鍇鍈鍉鍐鍑鍒鍕鍗鍘鍚鍞鍤鍥鍧鍩鍪鍭鍯鍰鍱鍳鍴鍶\"],[\"8fe5a1\",\"鍺鍽鍿鎀鎁鎂鎈鎊鎋鎍鎏鎒鎕鎘鎛鎞鎡鎣鎤鎦鎨鎫鎴鎵鎶鎺鎩鏁鏄鏅鏆鏇鏉\",4,\"鏓鏙鏜鏞鏟鏢鏦鏧鏹鏷鏸鏺鏻鏽鐁鐂鐄鐈鐉鐍鐎鐏鐕鐖鐗鐟鐮鐯鐱鐲鐳鐴鐻鐿鐽鑃鑅鑈鑊鑌鑕鑙鑜鑟鑡鑣鑨鑫鑭鑮鑯鑱鑲钄钃镸镹\"],[\"8fe6a1\",\"镾閄閈閌閍閎閝閞閟閡閦閩閫閬閴閶閺閽閿闆闈闉闋闐闑闒闓闙闚闝闞闟闠闤闦阝阞阢阤阥阦阬阱阳阷阸阹阺阼阽陁陒陔陖陗陘陡陮陴陻陼陾陿隁隂隃隄隉隑隖隚隝隟隤隥隦隩隮隯隳隺雊雒嶲雘雚雝雞雟雩雯雱雺霂\"],[\"8fe7a1\",\"霃霅霉霚霛霝霡霢霣霨霱霳靁靃靊靎靏靕靗靘靚靛靣靧靪靮靳靶靷靸靻靽靿鞀鞉鞕鞖鞗鞙鞚鞞鞟鞢鞬鞮鞱鞲鞵鞶鞸鞹鞺鞼鞾鞿韁韄韅韇韉韊韌韍韎韐韑韔韗韘韙韝韞韠韛韡韤韯韱韴韷韸韺頇頊頙頍頎頔頖頜頞頠頣頦\"],[\"8fe8a1\",\"頫頮頯頰頲頳頵頥頾顄顇顊顑顒顓顖顗顙顚顢顣顥顦顪顬颫颭颮颰颴颷颸颺颻颿飂飅飈飌飡飣飥飦飧飪飳飶餂餇餈餑餕餖餗餚餛餜餟餢餦餧餫餱\",4,\"餹餺餻餼饀饁饆饇饈饍饎饔饘饙饛饜饞饟饠馛馝馟馦馰馱馲馵\"],[\"8fe9a1\",\"馹馺馽馿駃駉駓駔駙駚駜駞駧駪駫駬駰駴駵駹駽駾騂騃騄騋騌騐騑騖騞騠騢騣騤騧騭騮騳騵騶騸驇驁驄驊驋驌驎驑驔驖驝骪骬骮骯骲骴骵骶骹骻骾骿髁髃髆髈髎髐髒髕髖髗髛髜髠髤髥髧髩髬髲髳髵髹髺髽髿\",4],[\"8feaa1\",\"鬄鬅鬈鬉鬋鬌鬍鬎鬐鬒鬖鬙鬛鬜鬠鬦鬫鬭鬳鬴鬵鬷鬹鬺鬽魈魋魌魕魖魗魛魞魡魣魥魦魨魪\",4,\"魳魵魷魸魹魿鮀鮄鮅鮆鮇鮉鮊鮋鮍鮏鮐鮔鮚鮝鮞鮦鮧鮩鮬鮰鮱鮲鮷鮸鮻鮼鮾鮿鯁鯇鯈鯎鯐鯗鯘鯝鯟鯥鯧鯪鯫鯯鯳鯷鯸\"],[\"8feba1\",\"鯹鯺鯽鯿鰀鰂鰋鰏鰑鰖鰘鰙鰚鰜鰞鰢鰣鰦\",4,\"鰱鰵鰶鰷鰽鱁鱃鱄鱅鱉鱊鱎鱏鱐鱓鱔鱖鱘鱛鱝鱞鱟鱣鱩鱪鱜鱫鱨鱮鱰鱲鱵鱷鱻鳦鳲鳷鳹鴋鴂鴑鴗鴘鴜鴝鴞鴯鴰鴲鴳鴴鴺鴼鵅鴽鵂鵃鵇鵊鵓鵔鵟鵣鵢鵥鵩鵪鵫鵰鵶鵷鵻\"],[\"8feca1\",\"鵼鵾鶃鶄鶆鶊鶍鶎鶒鶓鶕鶖鶗鶘鶡鶪鶬鶮鶱鶵鶹鶼鶿鷃鷇鷉鷊鷔鷕鷖鷗鷚鷞鷟鷠鷥鷧鷩鷫鷮鷰鷳鷴鷾鸊鸂鸇鸎鸐鸑鸒鸕鸖鸙鸜鸝鹺鹻鹼麀麂麃麄麅麇麎麏麖麘麛麞麤麨麬麮麯麰麳麴麵黆黈黋黕黟黤黧黬黭黮黰黱黲黵\"],[\"8feda1\",\"黸黿鼂鼃鼉鼏鼐鼑鼒鼔鼖鼗鼙鼚鼛鼟鼢鼦鼪鼫鼯鼱鼲鼴鼷鼹鼺鼼鼽鼿齁齃\",4,\"齓齕齖齗齘齚齝齞齨齩齭\",4,\"齳齵齺齽龏龐龑龒龔龖龗龞龡龢龣龥\"]]");
	})), se = St({ default: () => Ee }), Ee, oe = Tt((() => {
		Ee = JSON.parse("[[\"0\",\"\\u0000\",127,\"€\"],[\"8140\",\"丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪\",5,\"乲乴\",9,\"乿\",6,\"亇亊\"],[\"8180\",\"亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂\",6,\"伋伌伒\",4,\"伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾\",4,\"佄佅佇\",5,\"佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢\"],[\"8240\",\"侤侫侭侰\",4,\"侶\",8,\"俀俁係俆俇俈俉俋俌俍俒\",4,\"俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿\",11],[\"8280\",\"個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯\",10,\"倻倽倿偀偁偂偄偅偆偉偊偋偍偐\",4,\"偖偗偘偙偛偝\",7,\"偦\",5,\"偭\",8,\"偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎\",20,\"傤傦傪傫傭\",4,\"傳\",6,\"傼\"],[\"8340\",\"傽\",17,\"僐\",5,\"僗僘僙僛\",10,\"僨僩僪僫僯僰僱僲僴僶\",4,\"僼\",9,\"儈\"],[\"8380\",\"儉儊儌\",5,\"儓\",13,\"儢\",28,\"兂兇兊兌兎兏児兒兓兗兘兙兛兝\",4,\"兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦\",4,\"冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒\",5],[\"8440\",\"凘凙凚凜凞凟凢凣凥\",5,\"凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄\",5,\"剋剎剏剒剓剕剗剘\"],[\"8480\",\"剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳\",9,\"剾劀劃\",4,\"劉\",6,\"劑劒劔\",6,\"劜劤劥劦劧劮劯劰労\",9,\"勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務\",5,\"勠勡勢勣勥\",10,\"勱\",7,\"勻勼勽匁匂匃匄匇匉匊匋匌匎\"],[\"8540\",\"匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯\",9,\"匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏\"],[\"8580\",\"厐\",4,\"厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯\",6,\"厷厸厹厺厼厽厾叀參\",4,\"収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝\",4,\"呣呥呧呩\",7,\"呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡\"],[\"8640\",\"咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠\",4,\"哫哬哯哰哱哴\",5,\"哻哾唀唂唃唄唅唈唊\",4,\"唒唓唕\",5,\"唜唝唞唟唡唥唦\"],[\"8680\",\"唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋\",4,\"啑啒啓啔啗\",4,\"啝啞啟啠啢啣啨啩啫啯\",5,\"啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠\",6,\"喨\",8,\"喲喴営喸喺喼喿\",4,\"嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗\",4,\"嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸\",4,\"嗿嘂嘃嘄嘅\"],[\"8740\",\"嘆嘇嘊嘋嘍嘐\",7,\"嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀\",11,\"噏\",4,\"噕噖噚噛噝\",4],[\"8780\",\"噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽\",7,\"嚇\",6,\"嚐嚑嚒嚔\",14,\"嚤\",10,\"嚰\",6,\"嚸嚹嚺嚻嚽\",12,\"囋\",8,\"囕囖囘囙囜団囥\",5,\"囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國\",6],[\"8840\",\"園\",9,\"圝圞圠圡圢圤圥圦圧圫圱圲圴\",4,\"圼圽圿坁坃坄坅坆坈坉坋坒\",4,\"坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀\"],[\"8880\",\"垁垇垈垉垊垍\",4,\"垔\",6,\"垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹\",8,\"埄\",6,\"埌埍埐埑埓埖埗埛埜埞埡埢埣埥\",7,\"埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥\",4,\"堫\",4,\"報堲堳場堶\",7],[\"8940\",\"堾\",5,\"塅\",6,\"塎塏塐塒塓塕塖塗塙\",4,\"塟\",5,\"塦\",4,\"塭\",16,\"塿墂墄墆墇墈墊墋墌\"],[\"8980\",\"墍\",4,\"墔\",4,\"墛墜墝墠\",7,\"墪\",17,\"墽墾墿壀壂壃壄壆\",10,\"壒壓壔壖\",13,\"壥\",5,\"壭壯壱売壴壵壷壸壺\",7,\"夃夅夆夈\",4,\"夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻\"],[\"8a40\",\"夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛\",4,\"奡奣奤奦\",12,\"奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦\"],[\"8a80\",\"妧妬妭妰妱妳\",5,\"妺妼妽妿\",6,\"姇姈姉姌姍姎姏姕姖姙姛姞\",4,\"姤姦姧姩姪姫姭\",11,\"姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪\",6,\"娳娵娷\",4,\"娽娾娿婁\",4,\"婇婈婋\",9,\"婖婗婘婙婛\",5],[\"8b40\",\"婡婣婤婥婦婨婩婫\",8,\"婸婹婻婼婽婾媀\",17,\"媓\",6,\"媜\",13,\"媫媬\"],[\"8b80\",\"媭\",4,\"媴媶媷媹\",4,\"媿嫀嫃\",5,\"嫊嫋嫍\",4,\"嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬\",4,\"嫲\",22,\"嬊\",11,\"嬘\",25,\"嬳嬵嬶嬸\",7,\"孁\",6],[\"8c40\",\"孈\",7,\"孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏\"],[\"8c80\",\"寑寔\",8,\"寠寢寣實寧審\",4,\"寯寱\",6,\"寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧\",6,\"屰屲\",6,\"屻屼屽屾岀岃\",4,\"岉岊岋岎岏岒岓岕岝\",4,\"岤\",4],[\"8d40\",\"岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅\",5,\"峌\",5,\"峓\",5,\"峚\",6,\"峢峣峧峩峫峬峮峯峱\",9,\"峼\",4],[\"8d80\",\"崁崄崅崈\",5,\"崏\",4,\"崕崗崘崙崚崜崝崟\",4,\"崥崨崪崫崬崯\",4,\"崵\",7,\"崿\",7,\"嵈嵉嵍\",10,\"嵙嵚嵜嵞\",10,\"嵪嵭嵮嵰嵱嵲嵳嵵\",12,\"嶃\",21,\"嶚嶛嶜嶞嶟嶠\"],[\"8e40\",\"嶡\",21,\"嶸\",12,\"巆\",6,\"巎\",12,\"巜巟巠巣巤巪巬巭\"],[\"8e80\",\"巰巵巶巸\",4,\"巿帀帄帇帉帊帋帍帎帒帓帗帞\",7,\"帨\",4,\"帯帰帲\",4,\"帹帺帾帿幀幁幃幆\",5,\"幍\",6,\"幖\",4,\"幜幝幟幠幣\",14,\"幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨\",4,\"庮\",4,\"庴庺庻庼庽庿\",6],[\"8f40\",\"廆廇廈廋\",5,\"廔廕廗廘廙廚廜\",11,\"廩廫\",8,\"廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤\"],[\"8f80\",\"弨弫弬弮弰弲\",6,\"弻弽弾弿彁\",14,\"彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢\",5,\"復徫徬徯\",5,\"徶徸徹徺徻徾\",4,\"忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇\"],[\"9040\",\"怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰\",4,\"怶\",4,\"怽怾恀恄\",6,\"恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀\"],[\"9080\",\"悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽\",7,\"惇惈惉惌\",4,\"惒惓惔惖惗惙惛惞惡\",4,\"惪惱惲惵惷惸惻\",4,\"愂愃愄愅愇愊愋愌愐\",4,\"愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬\",18,\"慀\",6],[\"9140\",\"慇慉態慍慏慐慒慓慔慖\",6,\"慞慟慠慡慣慤慥慦慩\",6,\"慱慲慳慴慶慸\",18,\"憌憍憏\",4,\"憕\"],[\"9180\",\"憖\",6,\"憞\",8,\"憪憫憭\",9,\"憸\",5,\"憿懀懁懃\",4,\"應懌\",4,\"懓懕\",16,\"懧\",13,\"懶\",8,\"戀\",5,\"戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸\",4,\"扂扄扅扆扊\"],[\"9240\",\"扏扐払扖扗扙扚扜\",6,\"扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋\",5,\"抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁\"],[\"9280\",\"拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳\",5,\"挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖\",7,\"捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙\",6,\"採掤掦掫掯掱掲掵掶掹掻掽掿揀\"],[\"9340\",\"揁揂揃揅揇揈揊揋揌揑揓揔揕揗\",6,\"揟揢揤\",4,\"揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆\",4,\"損搎搑搒搕\",5,\"搝搟搢搣搤\"],[\"9380\",\"搥搧搨搩搫搮\",5,\"搵\",4,\"搻搼搾摀摂摃摉摋\",6,\"摓摕摖摗摙\",4,\"摟\",7,\"摨摪摫摬摮\",9,\"摻\",6,\"撃撆撈\",8,\"撓撔撗撘撚撛撜撝撟\",4,\"撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆\",6,\"擏擑擓擔擕擖擙據\"],[\"9440\",\"擛擜擝擟擠擡擣擥擧\",24,\"攁\",7,\"攊\",7,\"攓\",4,\"攙\",8],[\"9480\",\"攢攣攤攦\",4,\"攬攭攰攱攲攳攷攺攼攽敀\",4,\"敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數\",14,\"斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱\",7,\"斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘\",7,\"旡旣旤旪旫\"],[\"9540\",\"旲旳旴旵旸旹旻\",4,\"昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷\",4,\"昽昿晀時晄\",6,\"晍晎晐晑晘\"],[\"9580\",\"晙晛晜晝晞晠晢晣晥晧晩\",4,\"晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘\",4,\"暞\",8,\"暩\",4,\"暯\",4,\"暵暶暷暸暺暻暼暽暿\",25,\"曚曞\",7,\"曧曨曪\",5,\"曱曵曶書曺曻曽朁朂會\"],[\"9640\",\"朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠\",5,\"朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗\",4,\"杝杢杣杤杦杧杫杬杮東杴杶\"],[\"9680\",\"杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹\",7,\"柂柅\",9,\"柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵\",7,\"柾栁栂栃栄栆栍栐栒栔栕栘\",4,\"栞栟栠栢\",6,\"栫\",6,\"栴栵栶栺栻栿桇桋桍桏桒桖\",5],[\"9740\",\"桜桝桞桟桪桬\",7,\"桵桸\",8,\"梂梄梇\",7,\"梐梑梒梔梕梖梘\",9,\"梣梤梥梩梪梫梬梮梱梲梴梶梷梸\"],[\"9780\",\"梹\",6,\"棁棃\",5,\"棊棌棎棏棐棑棓棔棖棗棙棛\",4,\"棡棢棤\",9,\"棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆\",4,\"椌椏椑椓\",11,\"椡椢椣椥\",7,\"椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃\",16,\"楕楖楘楙楛楜楟\"],[\"9840\",\"楡楢楤楥楧楨楩楪楬業楯楰楲\",4,\"楺楻楽楾楿榁榃榅榊榋榌榎\",5,\"榖榗榙榚榝\",9,\"榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽\"],[\"9880\",\"榾榿槀槂\",7,\"構槍槏槑槒槓槕\",5,\"槜槝槞槡\",11,\"槮槯槰槱槳\",9,\"槾樀\",9,\"樋\",11,\"標\",5,\"樠樢\",5,\"権樫樬樭樮樰樲樳樴樶\",6,\"樿\",4,\"橅橆橈\",7,\"橑\",6,\"橚\"],[\"9940\",\"橜\",4,\"橢橣橤橦\",10,\"橲\",6,\"橺橻橽橾橿檁檂檃檅\",8,\"檏檒\",4,\"檘\",7,\"檡\",5],[\"9980\",\"檧檨檪檭\",114,\"欥欦欨\",6],[\"9a40\",\"欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍\",11,\"歚\",7,\"歨歩歫\",13,\"歺歽歾歿殀殅殈\"],[\"9a80\",\"殌殎殏殐殑殔殕殗殘殙殜\",4,\"殢\",7,\"殫\",7,\"殶殸\",6,\"毀毃毄毆\",4,\"毌毎毐毑毘毚毜\",4,\"毢\",7,\"毬毭毮毰毱毲毴毶毷毸毺毻毼毾\",6,\"氈\",4,\"氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋\",4,\"汑汒汓汖汘\"],[\"9b40\",\"汙汚汢汣汥汦汧汫\",4,\"汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘\"],[\"9b80\",\"泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟\",5,\"洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽\",4,\"涃涄涆涇涊涋涍涏涐涒涖\",4,\"涜涢涥涬涭涰涱涳涴涶涷涹\",5,\"淁淂淃淈淉淊\"],[\"9c40\",\"淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽\",7,\"渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵\"],[\"9c80\",\"渶渷渹渻\",7,\"湅\",7,\"湏湐湑湒湕湗湙湚湜湝湞湠\",10,\"湬湭湯\",14,\"満溁溂溄溇溈溊\",4,\"溑\",6,\"溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪\",5],[\"9d40\",\"滰滱滲滳滵滶滷滸滺\",7,\"漃漄漅漇漈漊\",4,\"漐漑漒漖\",9,\"漡漢漣漥漦漧漨漬漮漰漲漴漵漷\",6,\"漿潀潁潂\"],[\"9d80\",\"潃潄潅潈潉潊潌潎\",9,\"潙潚潛潝潟潠潡潣潤潥潧\",5,\"潯潰潱潳潵潶潷潹潻潽\",6,\"澅澆澇澊澋澏\",12,\"澝澞澟澠澢\",4,\"澨\",10,\"澴澵澷澸澺\",5,\"濁濃\",5,\"濊\",6,\"濓\",10,\"濟濢濣濤濥\"],[\"9e40\",\"濦\",7,\"濰\",32,\"瀒\",7,\"瀜\",6,\"瀤\",6],[\"9e80\",\"瀫\",9,\"瀶瀷瀸瀺\",17,\"灍灎灐\",13,\"灟\",11,\"灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞\",12,\"炰炲炴炵炶為炾炿烄烅烆烇烉烋\",12,\"烚\"],[\"9f40\",\"烜烝烞烠烡烢烣烥烪烮烰\",6,\"烸烺烻烼烾\",10,\"焋\",4,\"焑焒焔焗焛\",10,\"焧\",7,\"焲焳焴\"],[\"9f80\",\"焵焷\",13,\"煆煇煈煉煋煍煏\",12,\"煝煟\",4,\"煥煩\",4,\"煯煰煱煴煵煶煷煹煻煼煾\",5,\"熅\",4,\"熋熌熍熎熐熑熒熓熕熖熗熚\",4,\"熡\",6,\"熩熪熫熭\",5,\"熴熶熷熸熺\",8,\"燄\",9,\"燏\",4],[\"a040\",\"燖\",9,\"燡燢燣燤燦燨\",5,\"燯\",9,\"燺\",11,\"爇\",19],[\"a080\",\"爛爜爞\",9,\"爩爫爭爮爯爲爳爴爺爼爾牀\",6,\"牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅\",4,\"犌犎犐犑犓\",11,\"犠\",11,\"犮犱犲犳犵犺\",6,\"狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛\"],[\"a1a1\",\"　、。·ˉˇ¨〃々—～‖…‘’“”〔〕〈\",7,\"〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓\"],[\"a2a1\",\"ⅰ\",9],[\"a2b1\",\"⒈\",19,\"⑴\",19,\"①\",9],[\"a2e5\",\"㈠\",9],[\"a2f1\",\"Ⅰ\",11],[\"a3a1\",\"！＂＃￥％\",88,\"￣\"],[\"a4a1\",\"ぁ\",82],[\"a5a1\",\"ァ\",85],[\"a6a1\",\"Α\",16,\"Σ\",6],[\"a6c1\",\"α\",16,\"σ\",6],[\"a6e0\",\"︵︶︹︺︿﹀︽︾﹁﹂﹃﹄\"],[\"a6ee\",\"︻︼︷︸︱\"],[\"a6f4\",\"︳︴\"],[\"a7a1\",\"А\",5,\"ЁЖ\",25],[\"a7d1\",\"а\",5,\"ёж\",25],[\"a840\",\"ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═\",35,\"▁\",6],[\"a880\",\"█\",7,\"▓▔▕▼▽◢◣◤◥☉⊕〒〝〞\"],[\"a8a1\",\"āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüêɑ\"],[\"a8bd\",\"ńň\"],[\"a8c0\",\"ɡ\"],[\"a8c5\",\"ㄅ\",36],[\"a940\",\"〡\",8,\"㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤\"],[\"a959\",\"℡㈱\"],[\"a95c\",\"‐\"],[\"a960\",\"ー゛゜ヽヾ〆ゝゞ﹉\",9,\"﹔﹕﹖﹗﹙\",8],[\"a980\",\"﹢\",4,\"﹨﹩﹪﹫\"],[\"a996\",\"〇\"],[\"a9a4\",\"─\",75],[\"aa40\",\"狜狝狟狢\",5,\"狪狫狵狶狹狽狾狿猀猂猄\",5,\"猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀\",8],[\"aa80\",\"獉獊獋獌獎獏獑獓獔獕獖獘\",7,\"獡\",10,\"獮獰獱\"],[\"ab40\",\"獲\",11,\"獿\",4,\"玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣\",5,\"玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃\",4],[\"ab80\",\"珋珌珎珒\",6,\"珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳\",4],[\"ac40\",\"珸\",10,\"琄琇琈琋琌琍琎琑\",8,\"琜\",5,\"琣琤琧琩琫琭琯琱琲琷\",4,\"琽琾琿瑀瑂\",11],[\"ac80\",\"瑎\",6,\"瑖瑘瑝瑠\",12,\"瑮瑯瑱\",4,\"瑸瑹瑺\"],[\"ad40\",\"瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑\",10,\"璝璟\",7,\"璪\",15,\"璻\",12],[\"ad80\",\"瓈\",9,\"瓓\",8,\"瓝瓟瓡瓥瓧\",6,\"瓰瓱瓲\"],[\"ae40\",\"瓳瓵瓸\",6,\"甀甁甂甃甅\",7,\"甎甐甒甔甕甖甗甛甝甞甠\",4,\"甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘\"],[\"ae80\",\"畝\",7,\"畧畨畩畫\",6,\"畳畵當畷畺\",4,\"疀疁疂疄疅疇\"],[\"af40\",\"疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦\",4,\"疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇\"],[\"af80\",\"瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄\"],[\"b040\",\"癅\",6,\"癎\",5,\"癕癗\",4,\"癝癟癠癡癢癤\",6,\"癬癭癮癰\",7,\"癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛\"],[\"b080\",\"皜\",7,\"皥\",8,\"皯皰皳皵\",9,\"盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥\"],[\"b140\",\"盄盇盉盋盌盓盕盙盚盜盝盞盠\",4,\"盦\",7,\"盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎\",10,\"眛眜眝眞眡眣眤眥眧眪眫\"],[\"b180\",\"眬眮眰\",4,\"眹眻眽眾眿睂睄睅睆睈\",7,\"睒\",7,\"睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳\"],[\"b240\",\"睝睞睟睠睤睧睩睪睭\",11,\"睺睻睼瞁瞂瞃瞆\",5,\"瞏瞐瞓\",11,\"瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶\",4],[\"b280\",\"瞼瞾矀\",12,\"矎\",8,\"矘矙矚矝\",4,\"矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖\"],[\"b340\",\"矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃\",5,\"砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚\"],[\"b380\",\"硛硜硞\",11,\"硯\",7,\"硸硹硺硻硽\",6,\"场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚\"],[\"b440\",\"碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨\",7,\"碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚\",9],[\"b480\",\"磤磥磦磧磩磪磫磭\",4,\"磳磵磶磸磹磻\",5,\"礂礃礄礆\",6,\"础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮\"],[\"b540\",\"礍\",5,\"礔\",9,\"礟\",4,\"礥\",14,\"礵\",4,\"礽礿祂祃祄祅祇祊\",8,\"祔祕祘祙祡祣\"],[\"b580\",\"祤祦祩祪祫祬祮祰\",6,\"祹祻\",4,\"禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠\"],[\"b640\",\"禓\",6,\"禛\",11,\"禨\",10,\"禴\",4,\"禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙\",5,\"秠秡秢秥秨秪\"],[\"b680\",\"秬秮秱\",6,\"秹秺秼秾秿稁稄稅稇稈稉稊稌稏\",4,\"稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二\"],[\"b740\",\"稝稟稡稢稤\",14,\"稴稵稶稸稺稾穀\",5,\"穇\",9,\"穒\",4,\"穘\",16],[\"b780\",\"穩\",6,\"穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服\"],[\"b840\",\"窣窤窧窩窪窫窮\",4,\"窴\",10,\"竀\",10,\"竌\",9,\"竗竘竚竛竜竝竡竢竤竧\",5,\"竮竰竱竲竳\"],[\"b880\",\"竴\",4,\"竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹\"],[\"b940\",\"笯笰笲笴笵笶笷笹笻笽笿\",5,\"筆筈筊筍筎筓筕筗筙筜筞筟筡筣\",10,\"筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆\",6,\"箎箏\"],[\"b980\",\"箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹\",7,\"篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈\"],[\"ba40\",\"篅篈築篊篋篍篎篏篐篒篔\",4,\"篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲\",4,\"篸篹篺篻篽篿\",7,\"簈簉簊簍簎簐\",5,\"簗簘簙\"],[\"ba80\",\"簚\",4,\"簠\",5,\"簨簩簫\",12,\"簹\",5,\"籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖\"],[\"bb40\",\"籃\",9,\"籎\",36,\"籵\",5,\"籾\",9],[\"bb80\",\"粈粊\",6,\"粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴\",4,\"粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕\"],[\"bc40\",\"粿糀糂糃糄糆糉糋糎\",6,\"糘糚糛糝糞糡\",6,\"糩\",5,\"糰\",7,\"糹糺糼\",13,\"紋\",5],[\"bc80\",\"紑\",14,\"紡紣紤紥紦紨紩紪紬紭紮細\",6,\"肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件\"],[\"bd40\",\"紷\",54,\"絯\",7],[\"bd80\",\"絸\",32,\"健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸\"],[\"be40\",\"継\",12,\"綧\",6,\"綯\",42],[\"be80\",\"線\",32,\"尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻\"],[\"bf40\",\"緻\",62],[\"bf80\",\"縺縼\",4,\"繂\",4,\"繈\",21,\"俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀\"],[\"c040\",\"繞\",35,\"纃\",23,\"纜纝纞\"],[\"c080\",\"纮纴纻纼绖绤绬绹缊缐缞缷缹缻\",6,\"罃罆\",9,\"罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐\"],[\"c140\",\"罖罙罛罜罝罞罠罣\",4,\"罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂\",7,\"羋羍羏\",4,\"羕\",4,\"羛羜羠羢羣羥羦羨\",6,\"羱\"],[\"c180\",\"羳\",4,\"羺羻羾翀翂翃翄翆翇翈翉翋翍翏\",4,\"翖翗翙\",5,\"翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿\"],[\"c240\",\"翤翧翨翪翫翬翭翯翲翴\",6,\"翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫\",5,\"耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗\"],[\"c280\",\"聙聛\",13,\"聫\",5,\"聲\",11,\"隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫\"],[\"c340\",\"聾肁肂肅肈肊肍\",5,\"肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇\",4,\"胏\",6,\"胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋\"],[\"c380\",\"脌脕脗脙脛脜脝脟\",12,\"脭脮脰脳脴脵脷脹\",4,\"脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸\"],[\"c440\",\"腀\",5,\"腇腉腍腎腏腒腖腗腘腛\",4,\"腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃\",4,\"膉膋膌膍膎膐膒\",5,\"膙膚膞\",4,\"膤膥\"],[\"c480\",\"膧膩膫\",7,\"膴\",5,\"膼膽膾膿臄臅臇臈臉臋臍\",6,\"摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁\"],[\"c540\",\"臔\",14,\"臤臥臦臨臩臫臮\",4,\"臵\",5,\"臽臿舃與\",4,\"舎舏舑舓舕\",5,\"舝舠舤舥舦舧舩舮舲舺舼舽舿\"],[\"c580\",\"艀艁艂艃艅艆艈艊艌艍艎艐\",7,\"艙艛艜艝艞艠\",7,\"艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗\"],[\"c640\",\"艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸\"],[\"c680\",\"苺苼\",4,\"茊茋茍茐茒茓茖茘茙茝\",9,\"茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐\"],[\"c740\",\"茾茿荁荂荄荅荈荊\",4,\"荓荕\",4,\"荝荢荰\",6,\"荹荺荾\",6,\"莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡\",6,\"莬莭莮\"],[\"c780\",\"莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠\"],[\"c840\",\"菮華菳\",4,\"菺菻菼菾菿萀萂萅萇萈萉萊萐萒\",5,\"萙萚萛萞\",5,\"萩\",7,\"萲\",5,\"萹萺萻萾\",7,\"葇葈葉\"],[\"c880\",\"葊\",6,\"葒\",4,\"葘葝葞葟葠葢葤\",4,\"葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁\"],[\"c940\",\"葽\",4,\"蒃蒄蒅蒆蒊蒍蒏\",7,\"蒘蒚蒛蒝蒞蒟蒠蒢\",12,\"蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗\"],[\"c980\",\"蓘\",4,\"蓞蓡蓢蓤蓧\",4,\"蓭蓮蓯蓱\",10,\"蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳\"],[\"ca40\",\"蔃\",8,\"蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢\",8,\"蔭\",9,\"蔾\",4,\"蕄蕅蕆蕇蕋\",10],[\"ca80\",\"蕗蕘蕚蕛蕜蕝蕟\",4,\"蕥蕦蕧蕩\",8,\"蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱\"],[\"cb40\",\"薂薃薆薈\",6,\"薐\",10,\"薝\",6,\"薥薦薧薩薫薬薭薱\",5,\"薸薺\",6,\"藂\",6,\"藊\",4,\"藑藒\"],[\"cb80\",\"藔藖\",5,\"藝\",6,\"藥藦藧藨藪\",14,\"恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔\"],[\"cc40\",\"藹藺藼藽藾蘀\",4,\"蘆\",10,\"蘒蘓蘔蘕蘗\",15,\"蘨蘪\",13,\"蘹蘺蘻蘽蘾蘿虀\"],[\"cc80\",\"虁\",11,\"虒虓處\",4,\"虛虜虝號虠虡虣\",7,\"獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃\"],[\"cd40\",\"虭虯虰虲\",6,\"蚃\",6,\"蚎\",4,\"蚔蚖\",5,\"蚞\",4,\"蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻\",4,\"蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜\"],[\"cd80\",\"蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威\"],[\"ce40\",\"蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀\",6,\"蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚\",5,\"蝡蝢蝦\",7,\"蝯蝱蝲蝳蝵\"],[\"ce80\",\"蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎\",4,\"螔螕螖螘\",6,\"螠\",4,\"巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺\"],[\"cf40\",\"螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁\",4,\"蟇蟈蟉蟌\",4,\"蟔\",6,\"蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯\",9],[\"cf80\",\"蟺蟻蟼蟽蟿蠀蠁蠂蠄\",5,\"蠋\",7,\"蠔蠗蠘蠙蠚蠜\",4,\"蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓\"],[\"d040\",\"蠤\",13,\"蠳\",5,\"蠺蠻蠽蠾蠿衁衂衃衆\",5,\"衎\",5,\"衕衖衘衚\",6,\"衦衧衪衭衯衱衳衴衵衶衸衹衺\"],[\"d080\",\"衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗\",4,\"袝\",4,\"袣袥\",5,\"小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄\"],[\"d140\",\"袬袮袯袰袲\",4,\"袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚\",4,\"裠裡裦裧裩\",6,\"裲裵裶裷裺裻製裿褀褁褃\",5],[\"d180\",\"褉褋\",4,\"褑褔\",4,\"褜\",4,\"褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶\"],[\"d240\",\"褸\",8,\"襂襃襅\",24,\"襠\",5,\"襧\",19,\"襼\"],[\"d280\",\"襽襾覀覂覄覅覇\",26,\"摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐\"],[\"d340\",\"覢\",30,\"觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴\",6],[\"d380\",\"觻\",4,\"訁\",5,\"計\",21,\"印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉\"],[\"d440\",\"訞\",31,\"訿\",8,\"詉\",21],[\"d480\",\"詟\",25,\"詺\",6,\"浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧\"],[\"d540\",\"誁\",7,\"誋\",7,\"誔\",46],[\"d580\",\"諃\",32,\"铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政\"],[\"d640\",\"諤\",34,\"謈\",27],[\"d680\",\"謤謥謧\",30,\"帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑\"],[\"d740\",\"譆\",31,\"譧\",4,\"譭\",25],[\"d780\",\"讇\",24,\"讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座\"],[\"d840\",\"谸\",8,\"豂豃豄豅豈豊豋豍\",7,\"豖豗豘豙豛\",5,\"豣\",6,\"豬\",6,\"豴豵豶豷豻\",6,\"貃貄貆貇\"],[\"d880\",\"貈貋貍\",6,\"貕貖貗貙\",20,\"亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝\"],[\"d940\",\"貮\",62],[\"d980\",\"賭\",32,\"佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼\"],[\"da40\",\"贎\",14,\"贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸\",8,\"趂趃趆趇趈趉趌\",4,\"趒趓趕\",9,\"趠趡\"],[\"da80\",\"趢趤\",12,\"趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺\"],[\"db40\",\"跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾\",6,\"踆踇踈踋踍踎踐踑踒踓踕\",7,\"踠踡踤\",4,\"踫踭踰踲踳踴踶踷踸踻踼踾\"],[\"db80\",\"踿蹃蹅蹆蹌\",4,\"蹓\",5,\"蹚\",11,\"蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝\"],[\"dc40\",\"蹳蹵蹷\",4,\"蹽蹾躀躂躃躄躆躈\",6,\"躑躒躓躕\",6,\"躝躟\",11,\"躭躮躰躱躳\",6,\"躻\",7],[\"dc80\",\"軃\",10,\"軏\",21,\"堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥\"],[\"dd40\",\"軥\",62],[\"dd80\",\"輤\",32,\"荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺\"],[\"de40\",\"轅\",32,\"轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆\"],[\"de80\",\"迉\",4,\"迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖\"],[\"df40\",\"這逜連逤逥逧\",5,\"逰\",4,\"逷逹逺逽逿遀遃遅遆遈\",4,\"過達違遖遙遚遜\",5,\"遤遦遧適遪遫遬遯\",4,\"遶\",6,\"遾邁\"],[\"df80\",\"還邅邆邇邉邊邌\",4,\"邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼\"],[\"e040\",\"郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅\",19,\"鄚鄛鄜\"],[\"e080\",\"鄝鄟鄠鄡鄤\",10,\"鄰鄲\",6,\"鄺\",8,\"酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼\"],[\"e140\",\"酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀\",4,\"醆醈醊醎醏醓\",6,\"醜\",5,\"醤\",5,\"醫醬醰醱醲醳醶醷醸醹醻\"],[\"e180\",\"醼\",10,\"釈釋釐釒\",9,\"針\",8,\"帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺\"],[\"e240\",\"釦\",62],[\"e280\",\"鈥\",32,\"狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧\",5,\"饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂\"],[\"e340\",\"鉆\",45,\"鉵\",16],[\"e380\",\"銆\",7,\"銏\",24,\"恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾\"],[\"e440\",\"銨\",5,\"銯\",24,\"鋉\",31],[\"e480\",\"鋩\",32,\"洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑\"],[\"e540\",\"錊\",51,\"錿\",10],[\"e580\",\"鍊\",31,\"鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣\"],[\"e640\",\"鍬\",34,\"鎐\",27],[\"e680\",\"鎬\",29,\"鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩\"],[\"e740\",\"鏎\",7,\"鏗\",54],[\"e780\",\"鐎\",32,\"纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡\",6,\"缪缫缬缭缯\",4,\"缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬\"],[\"e840\",\"鐯\",14,\"鐿\",43,\"鑬鑭鑮鑯\"],[\"e880\",\"鑰\",20,\"钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹\"],[\"e940\",\"锧锳锽镃镈镋镕镚镠镮镴镵長\",7,\"門\",42],[\"e980\",\"閫\",32,\"椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋\"],[\"ea40\",\"闌\",27,\"闬闿阇阓阘阛阞阠阣\",6,\"阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗\"],[\"ea80\",\"陘陙陚陜陝陞陠陣陥陦陫陭\",4,\"陳陸\",12,\"隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰\"],[\"eb40\",\"隌階隑隒隓隕隖隚際隝\",9,\"隨\",7,\"隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖\",9,\"雡\",6,\"雫\"],[\"eb80\",\"雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗\",4,\"霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻\"],[\"ec40\",\"霡\",8,\"霫霬霮霯霱霳\",4,\"霺霻霼霽霿\",18,\"靔靕靗靘靚靜靝靟靣靤靦靧靨靪\",7],[\"ec80\",\"靲靵靷\",4,\"靽\",7,\"鞆\",4,\"鞌鞎鞏鞐鞓鞕鞖鞗鞙\",4,\"臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐\"],[\"ed40\",\"鞞鞟鞡鞢鞤\",6,\"鞬鞮鞰鞱鞳鞵\",46],[\"ed80\",\"韤韥韨韮\",4,\"韴韷\",23,\"怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨\"],[\"ee40\",\"頏\",62],[\"ee80\",\"顎\",32,\"睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶\",4,\"钼钽钿铄铈\",6,\"铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪\"],[\"ef40\",\"顯\",5,\"颋颎颒颕颙颣風\",37,\"飏飐飔飖飗飛飜飝飠\",4],[\"ef80\",\"飥飦飩\",30,\"铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒\",4,\"锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤\",8,\"镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔\"],[\"f040\",\"餈\",4,\"餎餏餑\",28,\"餯\",26],[\"f080\",\"饊\",9,\"饖\",12,\"饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨\",4,\"鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦\",6,\"鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙\"],[\"f140\",\"馌馎馚\",10,\"馦馧馩\",47],[\"f180\",\"駙\",32,\"瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃\"],[\"f240\",\"駺\",62],[\"f280\",\"騹\",32,\"颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒\"],[\"f340\",\"驚\",17,\"驲骃骉骍骎骔骕骙骦骩\",6,\"骲骳骴骵骹骻骽骾骿髃髄髆\",4,\"髍髎髏髐髒體髕髖髗髙髚髛髜\"],[\"f380\",\"髝髞髠髢髣髤髥髧髨髩髪髬髮髰\",8,\"髺髼\",6,\"鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋\"],[\"f440\",\"鬇鬉\",5,\"鬐鬑鬒鬔\",10,\"鬠鬡鬢鬤\",10,\"鬰鬱鬳\",7,\"鬽鬾鬿魀魆魊魋魌魎魐魒魓魕\",5],[\"f480\",\"魛\",32,\"簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤\"],[\"f540\",\"魼\",62],[\"f580\",\"鮻\",32,\"酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜\"],[\"f640\",\"鯜\",62],[\"f680\",\"鰛\",32,\"觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅\",5,\"龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞\",5,\"鲥\",4,\"鲫鲭鲮鲰\",7,\"鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋\"],[\"f740\",\"鰼\",62],[\"f780\",\"鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾\",4,\"鳈鳉鳑鳒鳚鳛鳠鳡鳌\",4,\"鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄\"],[\"f840\",\"鳣\",62],[\"f880\",\"鴢\",32],[\"f940\",\"鵃\",62],[\"f980\",\"鶂\",32],[\"fa40\",\"鶣\",62],[\"fa80\",\"鷢\",32],[\"fb40\",\"鸃\",27,\"鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴\",9,\"麀\"],[\"fb80\",\"麁麃麄麅麆麉麊麌\",5,\"麔\",8,\"麞麠\",5,\"麧麨麩麪\"],[\"fc40\",\"麫\",8,\"麵麶麷麹麺麼麿\",4,\"黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰\",8,\"黺黽黿\",6],[\"fc80\",\"鼆\",4,\"鼌鼏鼑鼒鼔鼕鼖鼘鼚\",5,\"鼡鼣\",8,\"鼭鼮鼰鼱\"],[\"fd40\",\"鼲\",4,\"鼸鼺鼼鼿\",4,\"齅\",10,\"齒\",38],[\"fd80\",\"齹\",5,\"龁龂龍\",11,\"龜龝龞龡\",4,\"郎凉秊裏隣\"],[\"fe40\",\"兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩\"]]");
	})), Ae = St({ default: () => Te }), Te, Se = Tt((() => {
		Te = [
			[
				"a140",
				"",
				62
			],
			[
				"a180",
				"",
				32
			],
			[
				"a240",
				"",
				62
			],
			[
				"a280",
				"",
				32
			],
			[
				"a2ab",
				"",
				5
			],
			["a2e3", "€"],
			["a2ef", ""],
			["a2fd", ""],
			[
				"a340",
				"",
				62
			],
			[
				"a380",
				"",
				31,
				"　"
			],
			[
				"a440",
				"",
				62
			],
			[
				"a480",
				"",
				32
			],
			[
				"a4f4",
				"",
				10
			],
			[
				"a540",
				"",
				62
			],
			[
				"a580",
				"",
				32
			],
			[
				"a5f7",
				"",
				7
			],
			[
				"a640",
				"",
				62
			],
			[
				"a680",
				"",
				32
			],
			[
				"a6b9",
				"",
				7
			],
			[
				"a6d9",
				"",
				6
			],
			["a6ec", ""],
			["a6f3", ""],
			[
				"a6f6",
				"",
				8
			],
			[
				"a740",
				"",
				62
			],
			[
				"a780",
				"",
				32
			],
			[
				"a7c2",
				"",
				14
			],
			[
				"a7f2",
				"",
				12
			],
			[
				"a896",
				"",
				10
			],
			["a8bc", "ḿ"],
			["a8bf", "ǹ"],
			["a8c1", ""],
			[
				"a8ea",
				"",
				20
			],
			["a958", ""],
			["a95b", ""],
			["a95d", ""],
			[
				"a989",
				"〾⿰",
				11
			],
			[
				"a997",
				"",
				12
			],
			[
				"a9f0",
				"",
				14
			],
			[
				"aaa1",
				"",
				93
			],
			[
				"aba1",
				"",
				93
			],
			[
				"aca1",
				"",
				93
			],
			[
				"ada1",
				"",
				93
			],
			[
				"aea1",
				"",
				93
			],
			[
				"afa1",
				"",
				93
			],
			[
				"d7fa",
				"",
				4
			],
			[
				"f8a1",
				"",
				93
			],
			[
				"f9a1",
				"",
				93
			],
			[
				"faa1",
				"",
				93
			],
			[
				"fba1",
				"",
				93
			],
			[
				"fca1",
				"",
				93
			],
			[
				"fda1",
				"",
				93
			],
			["fe50", "⺁⺄㑳㑇⺈⺋㖞㘚㘎⺌⺗㥮㤘㧏㧟㩳㧐㭎㱮㳠⺧⺪䁖䅟⺮䌷⺳⺶⺷䎱䎬⺻䏝䓖䙡䙌"],
			[
				"fe80",
				"䜣䜩䝼䞍⻊䥇䥺䥽䦂䦃䦅䦆䦟䦛䦷䦶䲣䲟䲠䲡䱷䲢䴓",
				6,
				"䶮",
				93
			],
			["8135f437", ""]
		];
	})), wr = St({
		default: () => Ie,
		gbChars: () => ce,
		uChars: () => ae
	}), ae, ce, Ie, vr = Tt((() => {
		ae = [
			128,
			165,
			169,
			178,
			184,
			216,
			226,
			235,
			238,
			244,
			248,
			251,
			253,
			258,
			276,
			284,
			300,
			325,
			329,
			334,
			364,
			463,
			465,
			467,
			469,
			471,
			473,
			475,
			477,
			506,
			594,
			610,
			712,
			716,
			730,
			930,
			938,
			962,
			970,
			1026,
			1104,
			1106,
			8209,
			8215,
			8218,
			8222,
			8231,
			8241,
			8244,
			8246,
			8252,
			8365,
			8452,
			8454,
			8458,
			8471,
			8482,
			8556,
			8570,
			8596,
			8602,
			8713,
			8720,
			8722,
			8726,
			8731,
			8737,
			8740,
			8742,
			8748,
			8751,
			8760,
			8766,
			8777,
			8781,
			8787,
			8802,
			8808,
			8816,
			8854,
			8858,
			8870,
			8896,
			8979,
			9322,
			9372,
			9548,
			9588,
			9616,
			9622,
			9634,
			9652,
			9662,
			9672,
			9676,
			9680,
			9702,
			9735,
			9738,
			9793,
			9795,
			11906,
			11909,
			11913,
			11917,
			11928,
			11944,
			11947,
			11951,
			11956,
			11960,
			11964,
			11979,
			12284,
			12292,
			12312,
			12319,
			12330,
			12351,
			12436,
			12447,
			12535,
			12543,
			12586,
			12842,
			12850,
			12964,
			13200,
			13215,
			13218,
			13253,
			13263,
			13267,
			13270,
			13384,
			13428,
			13727,
			13839,
			13851,
			14617,
			14703,
			14801,
			14816,
			14964,
			15183,
			15471,
			15585,
			16471,
			16736,
			17208,
			17325,
			17330,
			17374,
			17623,
			17997,
			18018,
			18212,
			18218,
			18301,
			18318,
			18760,
			18811,
			18814,
			18820,
			18823,
			18844,
			18848,
			18872,
			19576,
			19620,
			19738,
			19887,
			40870,
			59244,
			59336,
			59367,
			59413,
			59417,
			59423,
			59431,
			59437,
			59443,
			59452,
			59460,
			59478,
			59493,
			63789,
			63866,
			63894,
			63976,
			63986,
			64016,
			64018,
			64021,
			64025,
			64034,
			64037,
			64042,
			65074,
			65093,
			65107,
			65112,
			65127,
			65132,
			65375,
			65510,
			65536
		], ce = [
			0,
			36,
			38,
			45,
			50,
			81,
			89,
			95,
			96,
			100,
			103,
			104,
			105,
			109,
			126,
			133,
			148,
			172,
			175,
			179,
			208,
			306,
			307,
			308,
			309,
			310,
			311,
			312,
			313,
			341,
			428,
			443,
			544,
			545,
			558,
			741,
			742,
			749,
			750,
			805,
			819,
			820,
			7922,
			7924,
			7925,
			7927,
			7934,
			7943,
			7944,
			7945,
			7950,
			8062,
			8148,
			8149,
			8152,
			8164,
			8174,
			8236,
			8240,
			8262,
			8264,
			8374,
			8380,
			8381,
			8384,
			8388,
			8390,
			8392,
			8393,
			8394,
			8396,
			8401,
			8406,
			8416,
			8419,
			8424,
			8437,
			8439,
			8445,
			8482,
			8485,
			8496,
			8521,
			8603,
			8936,
			8946,
			9046,
			9050,
			9063,
			9066,
			9076,
			9092,
			9100,
			9108,
			9111,
			9113,
			9131,
			9162,
			9164,
			9218,
			9219,
			11329,
			11331,
			11334,
			11336,
			11346,
			11361,
			11363,
			11366,
			11370,
			11372,
			11375,
			11389,
			11682,
			11686,
			11687,
			11692,
			11694,
			11714,
			11716,
			11723,
			11725,
			11730,
			11736,
			11982,
			11989,
			12102,
			12336,
			12348,
			12350,
			12384,
			12393,
			12395,
			12397,
			12510,
			12553,
			12851,
			12962,
			12973,
			13738,
			13823,
			13919,
			13933,
			14080,
			14298,
			14585,
			14698,
			15583,
			15847,
			16318,
			16434,
			16438,
			16481,
			16729,
			17102,
			17122,
			17315,
			17320,
			17402,
			17418,
			17859,
			17909,
			17911,
			17915,
			17916,
			17936,
			17939,
			17961,
			18664,
			18703,
			18814,
			18962,
			19043,
			33469,
			33470,
			33471,
			33484,
			33485,
			33490,
			33497,
			33501,
			33505,
			33513,
			33520,
			33536,
			33550,
			37845,
			37921,
			37948,
			38029,
			38038,
			38064,
			38065,
			38066,
			38069,
			38075,
			38076,
			38078,
			39108,
			39109,
			39113,
			39114,
			39115,
			39116,
			39265,
			39394,
			189e3
		], Ie = {
			uChars: ae,
			gbChars: ce
		};
	})), Er = St({ default: () => xe }), xe, Ar = Tt((() => {
		xe = JSON.parse("[[\"0\",\"\\u0000\",127],[\"8141\",\"갂갃갅갆갋\",4,\"갘갞갟갡갢갣갥\",6,\"갮갲갳갴\"],[\"8161\",\"갵갶갷갺갻갽갾갿걁\",9,\"걌걎\",5,\"걕\"],[\"8181\",\"걖걗걙걚걛걝\",18,\"걲걳걵걶걹걻\",4,\"겂겇겈겍겎겏겑겒겓겕\",6,\"겞겢\",5,\"겫겭겮겱\",6,\"겺겾겿곀곂곃곅곆곇곉곊곋곍\",7,\"곖곘\",7,\"곢곣곥곦곩곫곭곮곲곴곷\",4,\"곾곿괁괂괃괅괇\",4,\"괎괐괒괓\"],[\"8241\",\"괔괕괖괗괙괚괛괝괞괟괡\",7,\"괪괫괮\",5],[\"8261\",\"괶괷괹괺괻괽\",6,\"굆굈굊\",5,\"굑굒굓굕굖굗\"],[\"8281\",\"굙\",7,\"굢굤\",7,\"굮굯굱굲굷굸굹굺굾궀궃\",4,\"궊궋궍궎궏궑\",10,\"궞\",5,\"궥\",17,\"궸\",7,\"귂귃귅귆귇귉\",6,\"귒귔\",7,\"귝귞귟귡귢귣귥\",18],[\"8341\",\"귺귻귽귾긂\",5,\"긊긌긎\",5,\"긕\",7],[\"8361\",\"긝\",18,\"긲긳긵긶긹긻긼\"],[\"8381\",\"긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗\",4,\"깞깢깣깤깦깧깪깫깭깮깯깱\",6,\"깺깾\",5,\"꺆\",5,\"꺍\",46,\"꺿껁껂껃껅\",6,\"껎껒\",5,\"껚껛껝\",8],[\"8441\",\"껦껧껩껪껬껮\",5,\"껵껶껷껹껺껻껽\",8],[\"8461\",\"꼆꼉꼊꼋꼌꼎꼏꼑\",18],[\"8481\",\"꼤\",7,\"꼮꼯꼱꼳꼵\",6,\"꼾꽀꽄꽅꽆꽇꽊\",5,\"꽑\",10,\"꽞\",5,\"꽦\",18,\"꽺\",5,\"꾁꾂꾃꾅꾆꾇꾉\",6,\"꾒꾓꾔꾖\",5,\"꾝\",26,\"꾺꾻꾽꾾\"],[\"8541\",\"꾿꿁\",5,\"꿊꿌꿏\",4,\"꿕\",6,\"꿝\",4],[\"8561\",\"꿢\",5,\"꿪\",5,\"꿲꿳꿵꿶꿷꿹\",6,\"뀂뀃\"],[\"8581\",\"뀅\",6,\"뀍뀎뀏뀑뀒뀓뀕\",6,\"뀞\",9,\"뀩\",26,\"끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞\",29,\"끾끿낁낂낃낅\",6,\"낎낐낒\",5,\"낛낝낞낣낤\"],[\"8641\",\"낥낦낧낪낰낲낶낷낹낺낻낽\",6,\"냆냊\",5,\"냒\"],[\"8661\",\"냓냕냖냗냙\",6,\"냡냢냣냤냦\",10],[\"8681\",\"냱\",22,\"넊넍넎넏넑넔넕넖넗넚넞\",4,\"넦넧넩넪넫넭\",6,\"넶넺\",5,\"녂녃녅녆녇녉\",6,\"녒녓녖녗녙녚녛녝녞녟녡\",22,\"녺녻녽녾녿놁놃\",4,\"놊놌놎놏놐놑놕놖놗놙놚놛놝\"],[\"8741\",\"놞\",9,\"놩\",15],[\"8761\",\"놹\",18,\"뇍뇎뇏뇑뇒뇓뇕\"],[\"8781\",\"뇖\",5,\"뇞뇠\",7,\"뇪뇫뇭뇮뇯뇱\",7,\"뇺뇼뇾\",5,\"눆눇눉눊눍\",6,\"눖눘눚\",5,\"눡\",18,\"눵\",6,\"눽\",26,\"뉙뉚뉛뉝뉞뉟뉡\",6,\"뉪\",4],[\"8841\",\"뉯\",4,\"뉶\",5,\"뉽\",6,\"늆늇늈늊\",4],[\"8861\",\"늏늒늓늕늖늗늛\",4,\"늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷\"],[\"8881\",\"늸\",15,\"닊닋닍닎닏닑닓\",4,\"닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉\",6,\"댒댖\",5,\"댝\",54,\"덗덙덚덝덠덡덢덣\"],[\"8941\",\"덦덨덪덬덭덯덲덳덵덶덷덹\",6,\"뎂뎆\",5,\"뎍\"],[\"8961\",\"뎎뎏뎑뎒뎓뎕\",10,\"뎢\",5,\"뎩뎪뎫뎭\"],[\"8981\",\"뎮\",21,\"돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩\",18,\"돽\",18,\"됑\",6,\"됙됚됛됝됞됟됡\",6,\"됪됬\",7,\"됵\",15],[\"8a41\",\"둅\",10,\"둒둓둕둖둗둙\",6,\"둢둤둦\"],[\"8a61\",\"둧\",4,\"둭\",18,\"뒁뒂\"],[\"8a81\",\"뒃\",4,\"뒉\",19,\"뒞\",5,\"뒥뒦뒧뒩뒪뒫뒭\",7,\"뒶뒸뒺\",5,\"듁듂듃듅듆듇듉\",6,\"듑듒듓듔듖\",5,\"듞듟듡듢듥듧\",4,\"듮듰듲\",5,\"듹\",26,\"딖딗딙딚딝\"],[\"8b41\",\"딞\",5,\"딦딫\",4,\"딲딳딵딶딷딹\",6,\"땂땆\"],[\"8b61\",\"땇땈땉땊땎땏땑땒땓땕\",6,\"땞땢\",8],[\"8b81\",\"땫\",52,\"떢떣떥떦떧떩떬떭떮떯떲떶\",4,\"떾떿뗁뗂뗃뗅\",6,\"뗎뗒\",5,\"뗙\",18,\"뗭\",18],[\"8c41\",\"똀\",15,\"똒똓똕똖똗똙\",4],[\"8c61\",\"똞\",6,\"똦\",5,\"똭\",6,\"똵\",5],[\"8c81\",\"똻\",12,\"뙉\",26,\"뙥뙦뙧뙩\",50,\"뚞뚟뚡뚢뚣뚥\",5,\"뚭뚮뚯뚰뚲\",16],[\"8d41\",\"뛃\",16,\"뛕\",8],[\"8d61\",\"뛞\",17,\"뛱뛲뛳뛵뛶뛷뛹뛺\"],[\"8d81\",\"뛻\",4,\"뜂뜃뜄뜆\",33,\"뜪뜫뜭뜮뜱\",6,\"뜺뜼\",7,\"띅띆띇띉띊띋띍\",6,\"띖\",9,\"띡띢띣띥띦띧띩\",6,\"띲띴띶\",5,\"띾띿랁랂랃랅\",6,\"랎랓랔랕랚랛랝랞\"],[\"8e41\",\"랟랡\",6,\"랪랮\",5,\"랶랷랹\",8],[\"8e61\",\"럂\",4,\"럈럊\",19],[\"8e81\",\"럞\",13,\"럮럯럱럲럳럵\",6,\"럾렂\",4,\"렊렋렍렎렏렑\",6,\"렚렜렞\",5,\"렦렧렩렪렫렭\",6,\"렶렺\",5,\"롁롂롃롅\",11,\"롒롔\",7,\"롞롟롡롢롣롥\",6,\"롮롰롲\",5,\"롹롺롻롽\",7],[\"8f41\",\"뢅\",7,\"뢎\",17],[\"8f61\",\"뢠\",7,\"뢩\",6,\"뢱뢲뢳뢵뢶뢷뢹\",4],[\"8f81\",\"뢾뢿룂룄룆\",5,\"룍룎룏룑룒룓룕\",7,\"룞룠룢\",5,\"룪룫룭룮룯룱\",6,\"룺룼룾\",5,\"뤅\",18,\"뤙\",6,\"뤡\",26,\"뤾뤿륁륂륃륅\",6,\"륍륎륐륒\",5],[\"9041\",\"륚륛륝륞륟륡\",6,\"륪륬륮\",5,\"륶륷륹륺륻륽\"],[\"9061\",\"륾\",5,\"릆릈릋릌릏\",15],[\"9081\",\"릟\",12,\"릮릯릱릲릳릵\",6,\"릾맀맂\",5,\"맊맋맍맓\",4,\"맚맜맟맠맢맦맧맩맪맫맭\",6,\"맶맻\",4,\"먂\",5,\"먉\",11,\"먖\",33,\"먺먻먽먾먿멁멃멄멅멆\"],[\"9141\",\"멇멊멌멏멐멑멒멖멗멙멚멛멝\",6,\"멦멪\",5],[\"9161\",\"멲멳멵멶멷멹\",9,\"몆몈몉몊몋몍\",5],[\"9181\",\"몓\",20,\"몪몭몮몯몱몳\",4,\"몺몼몾\",5,\"뫅뫆뫇뫉\",14,\"뫚\",33,\"뫽뫾뫿묁묂묃묅\",7,\"묎묐묒\",5,\"묙묚묛묝묞묟묡\",6],[\"9241\",\"묨묪묬\",7,\"묷묹묺묿\",4,\"뭆뭈뭊뭋뭌뭎뭑뭒\"],[\"9261\",\"뭓뭕뭖뭗뭙\",7,\"뭢뭤\",7,\"뭭\",4],[\"9281\",\"뭲\",21,\"뮉뮊뮋뮍뮎뮏뮑\",18,\"뮥뮦뮧뮩뮪뮫뮭\",6,\"뮵뮶뮸\",7,\"믁믂믃믅믆믇믉\",6,\"믑믒믔\",35,\"믺믻믽믾밁\"],[\"9341\",\"밃\",4,\"밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵\"],[\"9361\",\"밶밷밹\",6,\"뱂뱆뱇뱈뱊뱋뱎뱏뱑\",8],[\"9381\",\"뱚뱛뱜뱞\",37,\"벆벇벉벊벍벏\",4,\"벖벘벛\",4,\"벢벣벥벦벩\",6,\"벲벶\",5,\"벾벿볁볂볃볅\",7,\"볎볒볓볔볖볗볙볚볛볝\",22,\"볷볹볺볻볽\"],[\"9441\",\"볾\",5,\"봆봈봊\",5,\"봑봒봓봕\",8],[\"9461\",\"봞\",5,\"봥\",6,\"봭\",12],[\"9481\",\"봺\",5,\"뵁\",6,\"뵊뵋뵍뵎뵏뵑\",6,\"뵚\",9,\"뵥뵦뵧뵩\",22,\"붂붃붅붆붋\",4,\"붒붔붖붗붘붛붝\",6,\"붥\",10,\"붱\",6,\"붹\",24],[\"9541\",\"뷒뷓뷖뷗뷙뷚뷛뷝\",11,\"뷪\",5,\"뷱\"],[\"9561\",\"뷲뷳뷵뷶뷷뷹\",6,\"븁븂븄븆\",5,\"븎븏븑븒븓\"],[\"9581\",\"븕\",6,\"븞븠\",35,\"빆빇빉빊빋빍빏\",4,\"빖빘빜빝빞빟빢빣빥빦빧빩빫\",4,\"빲빶\",4,\"빾빿뺁뺂뺃뺅\",6,\"뺎뺒\",5,\"뺚\",13,\"뺩\",14],[\"9641\",\"뺸\",23,\"뻒뻓\"],[\"9661\",\"뻕뻖뻙\",6,\"뻡뻢뻦\",5,\"뻭\",8],[\"9681\",\"뻶\",10,\"뼂\",5,\"뼊\",13,\"뼚뼞\",33,\"뽂뽃뽅뽆뽇뽉\",6,\"뽒뽓뽔뽖\",44],[\"9741\",\"뾃\",16,\"뾕\",8],[\"9761\",\"뾞\",17,\"뾱\",7],[\"9781\",\"뾹\",11,\"뿆\",5,\"뿎뿏뿑뿒뿓뿕\",6,\"뿝뿞뿠뿢\",89,\"쀽쀾쀿\"],[\"9841\",\"쁀\",16,\"쁒\",5,\"쁙쁚쁛\"],[\"9861\",\"쁝쁞쁟쁡\",6,\"쁪\",15],[\"9881\",\"쁺\",21,\"삒삓삕삖삗삙\",6,\"삢삤삦\",5,\"삮삱삲삷\",4,\"삾샂샃샄샆샇샊샋샍샎샏샑\",6,\"샚샞\",5,\"샦샧샩샪샫샭\",6,\"샶샸샺\",5,\"섁섂섃섅섆섇섉\",6,\"섑섒섓섔섖\",5,\"섡섢섥섨섩섪섫섮\"],[\"9941\",\"섲섳섴섵섷섺섻섽섾섿셁\",6,\"셊셎\",5,\"셖셗\"],[\"9961\",\"셙셚셛셝\",6,\"셦셪\",5,\"셱셲셳셵셶셷셹셺셻\"],[\"9981\",\"셼\",8,\"솆\",5,\"솏솑솒솓솕솗\",4,\"솞솠솢솣솤솦솧솪솫솭솮솯솱\",11,\"솾\",5,\"쇅쇆쇇쇉쇊쇋쇍\",6,\"쇕쇖쇙\",6,\"쇡쇢쇣쇥쇦쇧쇩\",6,\"쇲쇴\",7,\"쇾쇿숁숂숃숅\",6,\"숎숐숒\",5,\"숚숛숝숞숡숢숣\"],[\"9a41\",\"숤숥숦숧숪숬숮숰숳숵\",16],[\"9a61\",\"쉆쉇쉉\",6,\"쉒쉓쉕쉖쉗쉙\",6,\"쉡쉢쉣쉤쉦\"],[\"9a81\",\"쉧\",4,\"쉮쉯쉱쉲쉳쉵\",6,\"쉾슀슂\",5,\"슊\",5,\"슑\",6,\"슙슚슜슞\",5,\"슦슧슩슪슫슮\",5,\"슶슸슺\",33,\"싞싟싡싢싥\",5,\"싮싰싲싳싴싵싷싺싽싾싿쌁\",6,\"쌊쌋쌎쌏\"],[\"9b41\",\"쌐쌑쌒쌖쌗쌙쌚쌛쌝\",6,\"쌦쌧쌪\",8],[\"9b61\",\"쌳\",17,\"썆\",7],[\"9b81\",\"썎\",25,\"썪썫썭썮썯썱썳\",4,\"썺썻썾\",5,\"쎅쎆쎇쎉쎊쎋쎍\",50,\"쏁\",22,\"쏚\"],[\"9c41\",\"쏛쏝쏞쏡쏣\",4,\"쏪쏫쏬쏮\",5,\"쏶쏷쏹\",5],[\"9c61\",\"쏿\",8,\"쐉\",6,\"쐑\",9],[\"9c81\",\"쐛\",8,\"쐥\",6,\"쐭쐮쐯쐱쐲쐳쐵\",6,\"쐾\",9,\"쑉\",26,\"쑦쑧쑩쑪쑫쑭\",6,\"쑶쑷쑸쑺\",5,\"쒁\",18,\"쒕\",6,\"쒝\",12],[\"9d41\",\"쒪\",13,\"쒹쒺쒻쒽\",8],[\"9d61\",\"쓆\",25],[\"9d81\",\"쓠\",8,\"쓪\",5,\"쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂\",9,\"씍씎씏씑씒씓씕\",6,\"씝\",10,\"씪씫씭씮씯씱\",6,\"씺씼씾\",5,\"앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩\",6,\"앲앶\",5,\"앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔\"],[\"9e41\",\"얖얙얚얛얝얞얟얡\",7,\"얪\",9,\"얶\"],[\"9e61\",\"얷얺얿\",4,\"엋엍엏엒엓엕엖엗엙\",6,\"엢엤엦엧\"],[\"9e81\",\"엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑\",6,\"옚옝\",6,\"옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉\",6,\"왒왖\",5,\"왞왟왡\",10,\"왭왮왰왲\",5,\"왺왻왽왾왿욁\",6,\"욊욌욎\",5,\"욖욗욙욚욛욝\",6,\"욦\"],[\"9f41\",\"욨욪\",5,\"욲욳욵욶욷욻\",4,\"웂웄웆\",5,\"웎\"],[\"9f61\",\"웏웑웒웓웕\",6,\"웞웟웢\",5,\"웪웫웭웮웯웱웲\"],[\"9f81\",\"웳\",4,\"웺웻웼웾\",5,\"윆윇윉윊윋윍\",6,\"윖윘윚\",5,\"윢윣윥윦윧윩\",6,\"윲윴윶윸윹윺윻윾윿읁읂읃읅\",4,\"읋읎읐읙읚읛읝읞읟읡\",6,\"읩읪읬\",7,\"읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛\",4,\"잢잧\",4,\"잮잯잱잲잳잵잶잷\"],[\"a041\",\"잸잹잺잻잾쟂\",5,\"쟊쟋쟍쟏쟑\",6,\"쟙쟚쟛쟜\"],[\"a061\",\"쟞\",5,\"쟥쟦쟧쟩쟪쟫쟭\",13],[\"a081\",\"쟻\",4,\"젂젃젅젆젇젉젋\",4,\"젒젔젗\",4,\"젞젟젡젢젣젥\",6,\"젮젰젲\",5,\"젹젺젻젽젾젿졁\",6,\"졊졋졎\",5,\"졕\",26,\"졲졳졵졶졷졹졻\",4,\"좂좄좈좉좊좎\",5,\"좕\",7,\"좞좠좢좣좤\"],[\"a141\",\"좥좦좧좩\",18,\"좾좿죀죁\"],[\"a161\",\"죂죃죅죆죇죉죊죋죍\",6,\"죖죘죚\",5,\"죢죣죥\"],[\"a181\",\"죦\",14,\"죶\",5,\"죾죿줁줂줃줇\",4,\"줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈\",9,\"±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢\"],[\"a241\",\"줐줒\",5,\"줙\",18],[\"a261\",\"줭\",6,\"줵\",18],[\"a281\",\"쥈\",7,\"쥒쥓쥕쥖쥗쥙\",6,\"쥢쥤\",7,\"쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®\"],[\"a341\",\"쥱쥲쥳쥵\",6,\"쥽\",10,\"즊즋즍즎즏\"],[\"a361\",\"즑\",6,\"즚즜즞\",16],[\"a381\",\"즯\",16,\"짂짃짅짆짉짋\",4,\"짒짔짗짘짛！\",58,\"￦］\",32,\"￣\"],[\"a441\",\"짞짟짡짣짥짦짨짩짪짫짮짲\",5,\"짺짻짽짾짿쨁쨂쨃쨄\"],[\"a461\",\"쨅쨆쨇쨊쨎\",5,\"쨕쨖쨗쨙\",12],[\"a481\",\"쨦쨧쨨쨪\",28,\"ㄱ\",93],[\"a541\",\"쩇\",4,\"쩎쩏쩑쩒쩓쩕\",6,\"쩞쩢\",5,\"쩩쩪\"],[\"a561\",\"쩫\",17,\"쩾\",5,\"쪅쪆\"],[\"a581\",\"쪇\",16,\"쪙\",14,\"ⅰ\",9],[\"a5b0\",\"Ⅰ\",9],[\"a5c1\",\"Α\",16,\"Σ\",6],[\"a5e1\",\"α\",16,\"σ\",6],[\"a641\",\"쪨\",19,\"쪾쪿쫁쫂쫃쫅\"],[\"a661\",\"쫆\",5,\"쫎쫐쫒쫔쫕쫖쫗쫚\",5,\"쫡\",6],[\"a681\",\"쫨쫩쫪쫫쫭\",6,\"쫵\",18,\"쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃\",7],[\"a741\",\"쬋\",4,\"쬑쬒쬓쬕쬖쬗쬙\",6,\"쬢\",7],[\"a761\",\"쬪\",22,\"쭂쭃쭄\"],[\"a781\",\"쭅쭆쭇쭊쭋쭍쭎쭏쭑\",6,\"쭚쭛쭜쭞\",5,\"쭥\",7,\"㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙\",9,\"㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰\",9,\"㎀\",4,\"㎺\",5,\"㎐\",4,\"Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆\"],[\"a841\",\"쭭\",10,\"쭺\",14],[\"a861\",\"쮉\",18,\"쮝\",6],[\"a881\",\"쮤\",19,\"쮹\",11,\"ÆÐªĦ\"],[\"a8a6\",\"Ĳ\"],[\"a8a8\",\"ĿŁØŒºÞŦŊ\"],[\"a8b1\",\"㉠\",27,\"ⓐ\",25,\"①\",14,\"½⅓⅔¼¾⅛⅜⅝⅞\"],[\"a941\",\"쯅\",14,\"쯕\",10],[\"a961\",\"쯠쯡쯢쯣쯥쯦쯨쯪\",18],[\"a981\",\"쯽\",14,\"찎찏찑찒찓찕\",6,\"찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀\",27,\"⒜\",25,\"⑴\",14,\"¹²³⁴ⁿ₁₂₃₄\"],[\"aa41\",\"찥찦찪찫찭찯찱\",6,\"찺찿\",4,\"챆챇챉챊챋챍챎\"],[\"aa61\",\"챏\",4,\"챖챚\",5,\"챡챢챣챥챧챩\",6,\"챱챲\"],[\"aa81\",\"챳챴챶\",29,\"ぁ\",82],[\"ab41\",\"첔첕첖첗첚첛첝첞첟첡\",6,\"첪첮\",5,\"첶첷첹\"],[\"ab61\",\"첺첻첽\",6,\"쳆쳈쳊\",5,\"쳑쳒쳓쳕\",5],[\"ab81\",\"쳛\",8,\"쳥\",6,\"쳭쳮쳯쳱\",12,\"ァ\",85],[\"ac41\",\"쳾쳿촀촂\",5,\"촊촋촍촎촏촑\",6,\"촚촜촞촟촠\"],[\"ac61\",\"촡촢촣촥촦촧촩촪촫촭\",11,\"촺\",4],[\"ac81\",\"촿\",28,\"쵝쵞쵟А\",5,\"ЁЖ\",25],[\"acd1\",\"а\",5,\"ёж\",25],[\"ad41\",\"쵡쵢쵣쵥\",6,\"쵮쵰쵲\",5,\"쵹\",7],[\"ad61\",\"춁\",6,\"춉\",10,\"춖춗춙춚춛춝춞춟\"],[\"ad81\",\"춠춡춢춣춦춨춪\",5,\"춱\",18,\"췅\"],[\"ae41\",\"췆\",5,\"췍췎췏췑\",16],[\"ae61\",\"췢\",5,\"췩췪췫췭췮췯췱\",6,\"췺췼췾\",4],[\"ae81\",\"츃츅츆츇츉츊츋츍\",6,\"츕츖츗츘츚\",5,\"츢츣츥츦츧츩츪츫\"],[\"af41\",\"츬츭츮츯츲츴츶\",19],[\"af61\",\"칊\",13,\"칚칛칝칞칢\",5,\"칪칬\"],[\"af81\",\"칮\",5,\"칶칷칹칺칻칽\",6,\"캆캈캊\",5,\"캒캓캕캖캗캙\"],[\"b041\",\"캚\",5,\"캢캦\",5,\"캮\",12],[\"b061\",\"캻\",5,\"컂\",19],[\"b081\",\"컖\",13,\"컦컧컩컪컭\",6,\"컶컺\",5,\"가각간갇갈갉갊감\",7,\"같\",4,\"갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆\"],[\"b141\",\"켂켃켅켆켇켉\",6,\"켒켔켖\",5,\"켝켞켟켡켢켣\"],[\"b161\",\"켥\",6,\"켮켲\",5,\"켹\",11],[\"b181\",\"콅\",14,\"콖콗콙콚콛콝\",6,\"콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸\"],[\"b241\",\"콭콮콯콲콳콵콶콷콹\",6,\"쾁쾂쾃쾄쾆\",5,\"쾍\"],[\"b261\",\"쾎\",18,\"쾢\",5,\"쾩\"],[\"b281\",\"쾪\",5,\"쾱\",18,\"쿅\",6,\"깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙\"],[\"b341\",\"쿌\",19,\"쿢쿣쿥쿦쿧쿩\"],[\"b361\",\"쿪\",5,\"쿲쿴쿶\",5,\"쿽쿾쿿퀁퀂퀃퀅\",5],[\"b381\",\"퀋\",5,\"퀒\",5,\"퀙\",19,\"끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫\",4,\"낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝\"],[\"b441\",\"퀮\",5,\"퀶퀷퀹퀺퀻퀽\",6,\"큆큈큊\",5],[\"b461\",\"큑큒큓큕큖큗큙\",6,\"큡\",10,\"큮큯\"],[\"b481\",\"큱큲큳큵\",6,\"큾큿킀킂\",18,\"뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫\",4,\"닳담답닷\",4,\"닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥\"],[\"b541\",\"킕\",14,\"킦킧킩킪킫킭\",5],[\"b561\",\"킳킶킸킺\",5,\"탂탃탅탆탇탊\",5,\"탒탖\",4],[\"b581\",\"탛탞탟탡탢탣탥\",6,\"탮탲\",5,\"탹\",11,\"덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸\"],[\"b641\",\"턅\",7,\"턎\",17],[\"b661\",\"턠\",15,\"턲턳턵턶턷턹턻턼턽턾\"],[\"b681\",\"턿텂텆\",5,\"텎텏텑텒텓텕\",6,\"텞텠텢\",5,\"텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗\"],[\"b741\",\"텮\",13,\"텽\",6,\"톅톆톇톉톊\"],[\"b761\",\"톋\",20,\"톢톣톥톦톧\"],[\"b781\",\"톩\",6,\"톲톴톶톷톸톹톻톽톾톿퇁\",14,\"래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩\"],[\"b841\",\"퇐\",7,\"퇙\",17],[\"b861\",\"퇫\",8,\"퇵퇶퇷퇹\",13],[\"b881\",\"툈툊\",5,\"툑\",24,\"륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많\",4,\"맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼\"],[\"b941\",\"툪툫툮툯툱툲툳툵\",6,\"툾퉀퉂\",5,\"퉉퉊퉋퉌\"],[\"b961\",\"퉍\",14,\"퉝\",6,\"퉥퉦퉧퉨\"],[\"b981\",\"퉩\",22,\"튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바\",4,\"받\",4,\"밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗\"],[\"ba41\",\"튍튎튏튒튓튔튖\",5,\"튝튞튟튡튢튣튥\",6,\"튭\"],[\"ba61\",\"튮튯튰튲\",5,\"튺튻튽튾틁틃\",4,\"틊틌\",5],[\"ba81\",\"틒틓틕틖틗틙틚틛틝\",6,\"틦\",9,\"틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤\"],[\"bb41\",\"틻\",4,\"팂팄팆\",5,\"팏팑팒팓팕팗\",4,\"팞팢팣\"],[\"bb61\",\"팤팦팧팪팫팭팮팯팱\",6,\"팺팾\",5,\"퍆퍇퍈퍉\"],[\"bb81\",\"퍊\",31,\"빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤\"],[\"bc41\",\"퍪\",17,\"퍾퍿펁펂펃펅펆펇\"],[\"bc61\",\"펈펉펊펋펎펒\",5,\"펚펛펝펞펟펡\",6,\"펪펬펮\"],[\"bc81\",\"펯\",4,\"펵펶펷펹펺펻펽\",6,\"폆폇폊\",5,\"폑\",5,\"샥샨샬샴샵샷샹섀섄섈섐섕서\",4,\"섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭\"],[\"bd41\",\"폗폙\",7,\"폢폤\",7,\"폮폯폱폲폳폵폶폷\"],[\"bd61\",\"폸폹폺폻폾퐀퐂\",5,\"퐉\",13],[\"bd81\",\"퐗\",5,\"퐞\",25,\"숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰\"],[\"be41\",\"퐸\",7,\"푁푂푃푅\",14],[\"be61\",\"푔\",7,\"푝푞푟푡푢푣푥\",7,\"푮푰푱푲\"],[\"be81\",\"푳\",4,\"푺푻푽푾풁풃\",4,\"풊풌풎\",5,\"풕\",8,\"쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄\",6,\"엌엎\"],[\"bf41\",\"풞\",10,\"풪\",14],[\"bf61\",\"풹\",18,\"퓍퓎퓏퓑퓒퓓퓕\"],[\"bf81\",\"퓖\",5,\"퓝퓞퓠\",7,\"퓩퓪퓫퓭퓮퓯퓱\",6,\"퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염\",5,\"옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨\"],[\"c041\",\"퓾\",5,\"픅픆픇픉픊픋픍\",6,\"픖픘\",5],[\"c061\",\"픞\",25],[\"c081\",\"픸픹픺픻픾픿핁핂핃핅\",6,\"핎핐핒\",5,\"핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응\",7,\"읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊\"],[\"c141\",\"핤핦핧핪핬핮\",5,\"핶핷핹핺핻핽\",6,\"햆햊햋\"],[\"c161\",\"햌햍햎햏햑\",19,\"햦햧\"],[\"c181\",\"햨\",31,\"점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓\"],[\"c241\",\"헊헋헍헎헏헑헓\",4,\"헚헜헞\",5,\"헦헧헩헪헫헭헮\"],[\"c261\",\"헯\",4,\"헶헸헺\",5,\"혂혃혅혆혇혉\",6,\"혒\"],[\"c281\",\"혖\",5,\"혝혞혟혡혢혣혥\",7,\"혮\",9,\"혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻\"],[\"c341\",\"혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝\",4],[\"c361\",\"홢\",4,\"홨홪\",5,\"홲홳홵\",11],[\"c381\",\"횁횂횄횆\",5,\"횎횏횑횒횓횕\",7,\"횞횠횢\",5,\"횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층\"],[\"c441\",\"횫횭횮횯횱\",7,\"횺횼\",7,\"훆훇훉훊훋\"],[\"c461\",\"훍훎훏훐훒훓훕훖훘훚\",5,\"훡훢훣훥훦훧훩\",4],[\"c481\",\"훮훯훱훲훳훴훶\",5,\"훾훿휁휂휃휅\",11,\"휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼\"],[\"c541\",\"휕휖휗휚휛휝휞휟휡\",6,\"휪휬휮\",5,\"휶휷휹\"],[\"c561\",\"휺휻휽\",6,\"흅흆흈흊\",5,\"흒흓흕흚\",4],[\"c581\",\"흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵\",6,\"흾흿힀힂\",5,\"힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜\"],[\"c641\",\"힍힎힏힑\",6,\"힚힜힞\",5],[\"c6a1\",\"퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁\"],[\"c7a1\",\"퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠\"],[\"c8a1\",\"혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝\"],[\"caa1\",\"伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕\"],[\"cba1\",\"匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢\"],[\"cca1\",\"瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械\"],[\"cda1\",\"棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜\"],[\"cea1\",\"科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾\"],[\"cfa1\",\"區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴\"],[\"d0a1\",\"鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣\"],[\"d1a1\",\"朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩\",5,\"那樂\",4,\"諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉\"],[\"d2a1\",\"納臘蠟衲囊娘廊\",4,\"乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧\",5,\"駑魯\",10,\"濃籠聾膿農惱牢磊腦賂雷尿壘\",7,\"嫩訥杻紐勒\",5,\"能菱陵尼泥匿溺多茶\"],[\"d3a1\",\"丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃\"],[\"d4a1\",\"棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅\"],[\"d5a1\",\"蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣\"],[\"d6a1\",\"煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼\"],[\"d7a1\",\"遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬\"],[\"d8a1\",\"立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅\"],[\"d9a1\",\"蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文\"],[\"daa1\",\"汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑\"],[\"dba1\",\"發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖\"],[\"dca1\",\"碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦\"],[\"dda1\",\"孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥\"],[\"dea1\",\"脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索\"],[\"dfa1\",\"傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署\"],[\"e0a1\",\"胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬\"],[\"e1a1\",\"聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁\"],[\"e2a1\",\"戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧\"],[\"e3a1\",\"嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁\"],[\"e4a1\",\"沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額\"],[\"e5a1\",\"櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬\"],[\"e6a1\",\"旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒\"],[\"e7a1\",\"簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳\"],[\"e8a1\",\"烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療\"],[\"e9a1\",\"窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓\"],[\"eaa1\",\"運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜\"],[\"eba1\",\"濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼\"],[\"eca1\",\"議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄\"],[\"eda1\",\"立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長\"],[\"eea1\",\"障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱\"],[\"efa1\",\"煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖\"],[\"f0a1\",\"靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫\"],[\"f1a1\",\"踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只\"],[\"f2a1\",\"咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯\"],[\"f3a1\",\"鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策\"],[\"f4a1\",\"責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢\"],[\"f5a1\",\"椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃\"],[\"f6a1\",\"贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託\"],[\"f7a1\",\"鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑\"],[\"f8a1\",\"阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃\"],[\"f9a1\",\"品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航\"],[\"faa1\",\"行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型\"],[\"fba1\",\"形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵\"],[\"fca1\",\"禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆\"],[\"fda1\",\"爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰\"]]");
	})), De = St({ default: () => Be }), Be, Ne = Tt((() => {
		Be = JSON.parse("[[\"0\",\"\\u0000\",127],[\"a140\",\"　，、。．‧；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚\"],[\"a1a1\",\"﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※§〃○●△▲◎☆★◇◆□■▽▼㊣℅¯￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－×÷±√＜＞＝≦≧≠∞≒≡﹢\",4,\"～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／\"],[\"a240\",\"＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄°兙兛兞兝兡兣嗧瓩糎▁\",7,\"▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭\"],[\"a2a1\",\"╮╰╯═╞╪╡◢◣◥◤╱╲╳０\",9,\"Ⅰ\",9,\"〡\",8,\"十卄卅Ａ\",25,\"ａ\",21],[\"a340\",\"ｗｘｙｚΑ\",16,\"Σ\",6,\"α\",16,\"σ\",6,\"ㄅ\",10],[\"a3a1\",\"ㄐ\",25,\"˙ˉˊˇˋ\"],[\"a3e1\",\"€\"],[\"a440\",\"一乙丁七乃九了二人儿入八几刀刁力匕十卜又三下丈上丫丸凡久么也乞于亡兀刃勺千叉口土士夕大女子孑孓寸小尢尸山川工己已巳巾干廾弋弓才\"],[\"a4a1\",\"丑丐不中丰丹之尹予云井互五亢仁什仃仆仇仍今介仄元允內六兮公冗凶分切刈勻勾勿化匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛犬王丙\"],[\"a540\",\"世丕且丘主乍乏乎以付仔仕他仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼司叵叫另只史叱台句叭叻四囚外\"],[\"a5a1\",\"央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒扑斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩田由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交亦亥仿伉伙伊伕伍伐休伏仲件任仰仳份企伋光兇兆先全\"],[\"a640\",\"共再冰列刑划刎刖劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回囝圳地在圭圬圯圩夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年\"],[\"a6a1\",\"式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐汕污汛汍汎灰牟牝百竹米糸缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣\"],[\"a740\",\"作你伯低伶余佝佈佚兌克免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟听囪困囤囫坊坑址坍\"],[\"a7a1\",\"均坎圾坐坏圻壯夾妝妒妨妞妣妙妖妍妤妓妊妥孝孜孚孛完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快忸忪戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑抆改攻攸旱更束李杏材村杜杖杞杉杆杠\"],[\"a840\",\"杓杗步每求汞沙沁沈沉沅沛汪決沐汰沌汨沖沒汽沃汲汾汴沆汶沍沔沘沂灶灼災灸牢牡牠狄狂玖甬甫男甸皂盯矣私秀禿究系罕肖肓肝肘肛肚育良芒\"],[\"a8a1\",\"芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉釆里防阮阱阪阬並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏侑佺兔兒兕兩具其典冽函刻券刷刺到刮制剁劾劻卒協卓卑卦卷卸卹取叔受味呵\"],[\"a940\",\"咖呸咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐姍始姓姊妯妳姒姅孟孤季宗定官宜宙宛尚屈居\"],[\"a9a1\",\"屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性怩怫怛或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於旺昔易昌昆昂明昀昏昕昊\"],[\"aa40\",\"昇服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚枓杼杪杲欣武歧歿氓氛泣注泳沱泌泥河沽沾沼波沫法泓沸泄油況沮泗泅泱沿治泡泛泊沬泯泜泖泠\"],[\"aaa1\",\"炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫玥甽疝疙疚的盂盲直知矽社祀祁秉秈空穹竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥芯芸芣芰芾芷虎虱初表軋迎返近邵邸邱邶采金長門阜陀阿阻附\"],[\"ab40\",\"陂隹雨青非亟亭亮信侵侯便俠俑俏保促侶俘俟俊俗侮俐俄係俚俎俞侷兗冒冑冠剎剃削前剌剋則勇勉勃勁匍南卻厚叛咬哀咨哎哉咸咦咳哇哂咽咪品\"],[\"aba1\",\"哄哈咯咫咱咻咩咧咿囿垂型垠垣垢城垮垓奕契奏奎奐姜姘姿姣姨娃姥姪姚姦威姻孩宣宦室客宥封屎屏屍屋峙峒巷帝帥帟幽庠度建弈弭彥很待徊律徇後徉怒思怠急怎怨恍恰恨恢恆恃恬恫恪恤扁拜挖按拼拭持拮拽指拱拷\"],[\"ac40\",\"拯括拾拴挑挂政故斫施既春昭映昧是星昨昱昤曷柿染柱柔某柬架枯柵柩柯柄柑枴柚查枸柏柞柳枰柙柢柝柒歪殃殆段毒毗氟泉洋洲洪流津洌洱洞洗\"],[\"aca1\",\"活洽派洶洛泵洹洧洸洩洮洵洎洫炫為炳炬炯炭炸炮炤爰牲牯牴狩狠狡玷珊玻玲珍珀玳甚甭畏界畎畋疫疤疥疢疣癸皆皇皈盈盆盃盅省盹相眉看盾盼眇矜砂研砌砍祆祉祈祇禹禺科秒秋穿突竿竽籽紂紅紀紉紇約紆缸美羿耄\"],[\"ad40\",\"耐耍耑耶胖胥胚胃胄背胡胛胎胞胤胝致舢苧范茅苣苛苦茄若茂茉苒苗英茁苜苔苑苞苓苟苯茆虐虹虻虺衍衫要觔計訂訃貞負赴赳趴軍軌述迦迢迪迥\"],[\"ada1\",\"迭迫迤迨郊郎郁郃酋酊重閂限陋陌降面革韋韭音頁風飛食首香乘亳倌倍倣俯倦倥俸倩倖倆值借倚倒們俺倀倔倨俱倡個候倘俳修倭倪俾倫倉兼冤冥冢凍凌准凋剖剜剔剛剝匪卿原厝叟哨唐唁唷哼哥哲唆哺唔哩哭員唉哮哪\"],[\"ae40\",\"哦唧唇哽唏圃圄埂埔埋埃堉夏套奘奚娑娘娜娟娛娓姬娠娣娩娥娌娉孫屘宰害家宴宮宵容宸射屑展屐峭峽峻峪峨峰島崁峴差席師庫庭座弱徒徑徐恙\"],[\"aea1\",\"恣恥恐恕恭恩息悄悟悚悍悔悌悅悖扇拳挈拿捎挾振捕捂捆捏捉挺捐挽挪挫挨捍捌效敉料旁旅時晉晏晃晒晌晅晁書朔朕朗校核案框桓根桂桔栩梳栗桌桑栽柴桐桀格桃株桅栓栘桁殊殉殷氣氧氨氦氤泰浪涕消涇浦浸海浙涓\"],[\"af40\",\"浬涉浮浚浴浩涌涊浹涅浥涔烊烘烤烙烈烏爹特狼狹狽狸狷玆班琉珮珠珪珞畔畝畜畚留疾病症疲疳疽疼疹痂疸皋皰益盍盎眩真眠眨矩砰砧砸砝破砷\"],[\"afa1\",\"砥砭砠砟砲祕祐祠祟祖神祝祗祚秤秣秧租秦秩秘窄窈站笆笑粉紡紗紋紊素索純紐紕級紜納紙紛缺罟羔翅翁耆耘耕耙耗耽耿胱脂胰脅胭胴脆胸胳脈能脊胼胯臭臬舀舐航舫舨般芻茫荒荔荊茸荐草茵茴荏茲茹茶茗荀茱茨荃\"],[\"b040\",\"虔蚊蚪蚓蚤蚩蚌蚣蚜衰衷袁袂衽衹記訐討訌訕訊託訓訖訏訑豈豺豹財貢起躬軒軔軏辱送逆迷退迺迴逃追逅迸邕郡郝郢酒配酌釘針釗釜釙閃院陣陡\"],[\"b0a1\",\"陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀\"],[\"b140\",\"娼婢婚婆婊孰寇寅寄寂宿密尉專將屠屜屝崇崆崎崛崖崢崑崩崔崙崤崧崗巢常帶帳帷康庸庶庵庾張強彗彬彩彫得徙從徘御徠徜恿患悉悠您惋悴惦悽\"],[\"b1a1\",\"情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺\"],[\"b240\",\"毫毬氫涎涼淳淙液淡淌淤添淺清淇淋涯淑涮淞淹涸混淵淅淒渚涵淚淫淘淪深淮淨淆淄涪淬涿淦烹焉焊烽烯爽牽犁猜猛猖猓猙率琅琊球理現琍瓠瓶\"],[\"b2a1\",\"瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼\"],[\"b340\",\"莆莧處彪蛇蛀蚶蛄蚵蛆蛋蚱蚯蛉術袞袈被袒袖袍袋覓規訪訝訣訥許設訟訛訢豉豚販責貫貨貪貧赧赦趾趺軛軟這逍通逗連速逝逐逕逞造透逢逖逛途\"],[\"b3a1\",\"部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠\"],[\"b440\",\"婷媚婿媒媛媧孳孱寒富寓寐尊尋就嵌嵐崴嵇巽幅帽幀幃幾廊廁廂廄弼彭復循徨惑惡悲悶惠愜愣惺愕惰惻惴慨惱愎惶愉愀愒戟扉掣掌描揀揩揉揆揍\"],[\"b4a1\",\"插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋\"],[\"b540\",\"溉渙湎湣湄湲湩湟焙焚焦焰無然煮焜牌犄犀猶猥猴猩琺琪琳琢琥琵琶琴琯琛琦琨甥甦畫番痢痛痣痙痘痞痠登發皖皓皴盜睏短硝硬硯稍稈程稅稀窘\"],[\"b5a1\",\"窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁\"],[\"b640\",\"詔詛詐詆訴診訶詖象貂貯貼貳貽賁費賀貴買貶貿貸越超趁跎距跋跚跑跌跛跆軻軸軼辜逮逵週逸進逶鄂郵鄉郾酣酥量鈔鈕鈣鈉鈞鈍鈐鈇鈑閔閏開閑\"],[\"b6a1\",\"間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼\"],[\"b740\",\"媳嫂媲嵩嵯幌幹廉廈弒彙徬微愚意慈感想愛惹愁愈慎慌慄慍愾愴愧愍愆愷戡戢搓搾搞搪搭搽搬搏搜搔損搶搖搗搆敬斟新暗暉暇暈暖暄暘暍會榔業\"],[\"b7a1\",\"楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督\"],[\"b840\",\"睹睪睬睜睥睨睢矮碎碰碗碘碌碉硼碑碓硿祺祿禁萬禽稜稚稠稔稟稞窟窠筷節筠筮筧粱粳粵經絹綑綁綏絛置罩罪署義羨群聖聘肆肄腱腰腸腥腮腳腫\"],[\"b8a1\",\"腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊\"],[\"b940\",\"辟農運遊道遂達逼違遐遇遏過遍遑逾遁鄒鄗酬酪酩釉鈷鉗鈸鈽鉀鈾鉛鉋鉤鉑鈴鉉鉍鉅鈹鈿鉚閘隘隔隕雍雋雉雊雷電雹零靖靴靶預頑頓頊頒頌飼飴\"],[\"b9a1\",\"飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇\"],[\"ba40\",\"愿態慷慢慣慟慚慘慵截撇摘摔撤摸摟摺摑摧搴摭摻敲斡旗旖暢暨暝榜榨榕槁榮槓構榛榷榻榫榴槐槍榭槌榦槃榣歉歌氳漳演滾漓滴漩漾漠漬漏漂漢\"],[\"baa1\",\"滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬\"],[\"bb40\",\"罰翠翡翟聞聚肇腐膀膏膈膊腿膂臧臺與舔舞艋蓉蒿蓆蓄蒙蒞蒲蒜蓋蒸蓀蓓蒐蒼蓑蓊蜿蜜蜻蜢蜥蜴蜘蝕蜷蜩裳褂裴裹裸製裨褚裯誦誌語誣認誡誓誤\"],[\"bba1\",\"說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜\"],[\"bc40\",\"劇劈劉劍劊勰厲嘮嘻嘹嘲嘿嘴嘩噓噎噗噴嘶嘯嘰墀墟增墳墜墮墩墦奭嬉嫻嬋嫵嬌嬈寮寬審寫層履嶝嶔幢幟幡廢廚廟廝廣廠彈影德徵慶慧慮慝慕憂\"],[\"bca1\",\"慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樣樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃\"],[\"bd40\",\"瑾璀畿瘠瘩瘟瘤瘦瘡瘢皚皺盤瞎瞇瞌瞑瞋磋磅確磊碾磕碼磐稿稼穀稽稷稻窯窮箭箱範箴篆篇篁箠篌糊締練緯緻緘緬緝編緣線緞緩綞緙緲緹罵罷羯\"],[\"bda1\",\"翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞\"],[\"be40\",\"輥適遮遨遭遷鄰鄭鄧鄱醇醉醋醃鋅銻銷鋪銬鋤鋁銳銼鋒鋇鋰銲閭閱霄霆震霉靠鞍鞋鞏頡頫頜颳養餓餒餘駝駐駟駛駑駕駒駙骷髮髯鬧魅魄魷魯鴆鴉\"],[\"bea1\",\"鴃麩麾黎墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋橇樵機橈歙歷氅濂澱澡\"],[\"bf40\",\"濃澤濁澧澳激澹澶澦澠澴熾燉燐燒燈燕熹燎燙燜燃燄獨璜璣璘璟璞瓢甌甍瘴瘸瘺盧盥瞠瞞瞟瞥磨磚磬磧禦積穎穆穌穋窺篙簑築篤篛篡篩篦糕糖縊\"],[\"bfa1\",\"縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚\"],[\"c040\",\"錐錦錡錕錮錙閻隧隨險雕霎霑霖霍霓霏靛靜靦鞘頰頸頻頷頭頹頤餐館餞餛餡餚駭駢駱骸骼髻髭鬨鮑鴕鴣鴦鴨鴒鴛默黔龍龜優償儡儲勵嚎嚀嚐嚅嚇\"],[\"c0a1\",\"嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬\"],[\"c140\",\"瞧瞭矯磷磺磴磯礁禧禪穗窿簇簍篾篷簌篠糠糜糞糢糟糙糝縮績繆縷縲繃縫總縱繅繁縴縹繈縵縿縯罄翳翼聱聲聰聯聳臆臃膺臂臀膿膽臉膾臨舉艱薪\"],[\"c1a1\",\"薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁\"],[\"c240\",\"駿鮮鮫鮪鮭鴻鴿麋黏點黜黝黛鼾齋叢嚕嚮壙壘嬸彝懣戳擴擲擾攆擺擻擷斷曜朦檳檬櫃檻檸櫂檮檯歟歸殯瀉瀋濾瀆濺瀑瀏燻燼燾燸獷獵璧璿甕癖癘\"],[\"c2a1\",\"癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦\"],[\"c340\",\"鞭韹額顏題顎顓颺餾餿餽餮馥騎髁鬃鬆魏魎魍鯊鯉鯽鯈鯀鵑鵝鵠黠鼕鼬儳嚥壞壟壢寵龐廬懲懷懶懵攀攏曠曝櫥櫝櫚櫓瀛瀟瀨瀚瀝瀕瀘爆爍牘犢獸\"],[\"c3a1\",\"獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類\"],[\"c440\",\"願顛颼饅饉騖騙鬍鯨鯧鯖鯛鶉鵡鵲鵪鵬麒麗麓麴勸嚨嚷嚶嚴嚼壤孀孃孽寶巉懸懺攘攔攙曦朧櫬瀾瀰瀲爐獻瓏癢癥礦礪礬礫竇競籌籃籍糯糰辮繽繼\"],[\"c4a1\",\"纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴\"],[\"c540\",\"護譽贓躊躍躋轟辯醺鐮鐳鐵鐺鐸鐲鐫闢霸霹露響顧顥饗驅驃驀騾髏魔魑鰭鰥鶯鶴鷂鶸麝黯鼙齜齦齧儼儻囈囊囉孿巔巒彎懿攤權歡灑灘玀瓤疊癮癬\"],[\"c5a1\",\"禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒\"],[\"c640\",\"讖艷贛釀鑪靂靈靄韆顰驟鬢魘鱟鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻觀躡釁鑲鑰顱饞髖鬣黌灤矚讚鑷韉驢驥纜讜躪釅鑽鑾鑼鱷鱸黷豔鑿鸚爨驪鬱鸛鸞籲\"],[\"c940\",\"乂乜凵匚厂万丌乇亍囗兀屮彳丏冇与丮亓仂仉仈冘勼卬厹圠夃夬尐巿旡殳毌气爿丱丼仨仜仩仡仝仚刌匜卌圢圣夗夯宁宄尒尻屴屳帄庀庂忉戉扐氕\"],[\"c9a1\",\"氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋\"],[\"ca40\",\"汌灱牞犴犵玎甪癿穵网艸艼芀艽艿虍襾邙邗邘邛邔阢阤阠阣佖伻佢佉体佤伾佧佒佟佁佘伭伳伿佡冏冹刜刞刡劭劮匉卣卲厎厏吰吷吪呔呅吙吜吥吘\"],[\"caa1\",\"吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇\"],[\"cb40\",\"杙杕杌杈杝杍杚杋毐氙氚汸汧汫沄沋沏汱汯汩沚汭沇沕沜汦汳汥汻沎灴灺牣犿犽狃狆狁犺狅玕玗玓玔玒町甹疔疕皁礽耴肕肙肐肒肜芐芏芅芎芑芓\"],[\"cba1\",\"芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢\"],[\"cc40\",\"坨坽夌奅妵妺姏姎妲姌姁妶妼姃姖妱妽姀姈妴姇孢孥宓宕屄屇岮岤岠岵岯岨岬岟岣岭岢岪岧岝岥岶岰岦帗帔帙弨弢弣弤彔徂彾彽忞忥怭怦怙怲怋\"],[\"cca1\",\"怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲\"],[\"cd40\",\"泒泝沴沊沝沀泞泀洰泍泇沰泹泏泩泑炔炘炅炓炆炄炑炖炂炚炃牪狖狋狘狉狜狒狔狚狌狑玤玡玭玦玢玠玬玝瓝瓨甿畀甾疌疘皯盳盱盰盵矸矼矹矻矺\"],[\"cda1\",\"矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏\"],[\"ce40\",\"哃茍咷咮哖咶哅哆咠呰咼咢咾呲哞咰垵垞垟垤垌垗垝垛垔垘垏垙垥垚垕壴复奓姡姞姮娀姱姝姺姽姼姶姤姲姷姛姩姳姵姠姾姴姭宨屌峐峘峌峗峋峛\"],[\"cea1\",\"峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺\"],[\"cf40\",\"柜枻柸柘柀枷柅柫柤柟枵柍枳柷柶柮柣柂枹柎柧柰枲柼柆柭柌枮柦柛柺柉柊柃柪柋欨殂殄殶毖毘毠氠氡洨洴洭洟洼洿洒洊泚洳洄洙洺洚洑洀洝浂\"],[\"cfa1\",\"洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀\"],[\"d040\",\"穾竑笀笁籺籸籹籿粀粁紃紈紁罘羑羍羾耇耎耏耔耷胘胇胠胑胈胂胐胅胣胙胜胊胕胉胏胗胦胍臿舡芔苙苾苹茇苨茀苕茺苫苖苴苬苡苲苵茌苻苶苰苪\"],[\"d0a1\",\"苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱\"],[\"d140\",\"唊哻哷哸哠唎唃唋圁圂埌堲埕埒垺埆垽垼垸垶垿埇埐垹埁夎奊娙娖娭娮娕娏娗娊娞娳孬宧宭宬尃屖屔峬峿峮峱峷崀峹帩帨庨庮庪庬弳弰彧恝恚恧\"],[\"d1a1\",\"恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤\"],[\"d240\",\"毨毣毢毧氥浺浣浤浶洍浡涒浘浢浭浯涑涍淯浿涆浞浧浠涗浰浼浟涂涘洯浨涋浾涀涄洖涃浻浽浵涐烜烓烑烝烋缹烢烗烒烞烠烔烍烅烆烇烚烎烡牂牸\"],[\"d2a1\",\"牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐\"],[\"d340\",\"笄笓笅笏笈笊笎笉笒粄粑粊粌粈粍粅紞紝紑紎紘紖紓紟紒紏紌罜罡罞罠罝罛羖羒翃翂翀耖耾耹胺胲胹胵脁胻脀舁舯舥茳茭荄茙荑茥荖茿荁茦茜茢\"],[\"d3a1\",\"荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐\"],[\"d440\",\"酎酏釕釢釚陜陟隼飣髟鬯乿偰偪偡偞偠偓偋偝偲偈偍偁偛偊偢倕偅偟偩偫偣偤偆偀偮偳偗偑凐剫剭剬剮勖勓匭厜啵啶唼啍啐唴唪啑啢唶唵唰啒啅\"],[\"d4a1\",\"唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏\"],[\"d540\",\"崰崒崣崟崮帾帴庱庴庹庲庳弶弸徛徖徟悊悐悆悾悰悺惓惔惏惤惙惝惈悱惛悷惊悿惃惍惀挲捥掊掂捽掽掞掭掝掗掫掎捯掇掐据掯捵掜捭掮捼掤挻掟\"],[\"d5a1\",\"捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉\"],[\"d640\",\"淐淲淓淽淗淍淣涻烺焍烷焗烴焌烰焄烳焐烼烿焆焓焀烸烶焋焂焎牾牻牼牿猝猗猇猑猘猊猈狿猏猞玈珶珸珵琄琁珽琇琀珺珼珿琌琋珴琈畤畣痎痒痏\"],[\"d6a1\",\"痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟\"],[\"d740\",\"耞耛聇聃聈脘脥脙脛脭脟脬脞脡脕脧脝脢舑舸舳舺舴舲艴莐莣莨莍荺荳莤荴莏莁莕莙荵莔莩荽莃莌莝莛莪莋荾莥莯莈莗莰荿莦莇莮荶莚虙虖蚿蚷\"],[\"d7a1\",\"蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱釳釸釤釹釪\"],[\"d840\",\"釫釷釨釮镺閆閈陼陭陫陱陯隿靪頄飥馗傛傕傔傞傋傣傃傌傎傝偨傜傒傂傇兟凔匒匑厤厧喑喨喥喭啷噅喢喓喈喏喵喁喣喒喤啽喌喦啿喕喡喎圌堩堷\"],[\"d8a1\",\"堙堞堧堣堨埵塈堥堜堛堳堿堶堮堹堸堭堬堻奡媯媔媟婺媢媞婸媦婼媥媬媕媮娷媄媊媗媃媋媩婻婽媌媜媏媓媝寪寍寋寔寑寊寎尌尰崷嵃嵫嵁嵋崿崵嵑嵎嵕崳崺嵒崽崱嵙嵂崹嵉崸崼崲崶嵀嵅幄幁彘徦徥徫惉悹惌惢惎惄愔\"],[\"d940\",\"惲愊愖愅惵愓惸惼惾惁愃愘愝愐惿愄愋扊掔掱掰揎揥揨揯揃撝揳揊揠揶揕揲揵摡揟掾揝揜揄揘揓揂揇揌揋揈揰揗揙攲敧敪敤敜敨敥斌斝斞斮旐旒\"],[\"d9a1\",\"晼晬晻暀晱晹晪晲朁椌棓椄棜椪棬棪棱椏棖棷棫棤棶椓椐棳棡椇棌椈楰梴椑棯棆椔棸棐棽棼棨椋椊椗棎棈棝棞棦棴棑椆棔棩椕椥棇欹欻欿欼殔殗殙殕殽毰毲毳氰淼湆湇渟湉溈渼渽湅湢渫渿湁湝湳渜渳湋湀湑渻渃渮湞\"],[\"da40\",\"湨湜湡渱渨湠湱湫渹渢渰湓湥渧湸湤湷湕湹湒湦渵渶湚焠焞焯烻焮焱焣焥焢焲焟焨焺焛牋牚犈犉犆犅犋猒猋猰猢猱猳猧猲猭猦猣猵猌琮琬琰琫琖\"],[\"daa1\",\"琚琡琭琱琤琣琝琩琠琲瓻甯畯畬痧痚痡痦痝痟痤痗皕皒盚睆睇睄睍睅睊睎睋睌矞矬硠硤硥硜硭硱硪确硰硩硨硞硢祴祳祲祰稂稊稃稌稄窙竦竤筊笻筄筈筌筎筀筘筅粢粞粨粡絘絯絣絓絖絧絪絏絭絜絫絒絔絩絑絟絎缾缿罥\"],[\"db40\",\"罦羢羠羡翗聑聏聐胾胔腃腊腒腏腇脽腍脺臦臮臷臸臹舄舼舽舿艵茻菏菹萣菀菨萒菧菤菼菶萐菆菈菫菣莿萁菝菥菘菿菡菋菎菖菵菉萉萏菞萑萆菂菳\"],[\"dba1\",\"菕菺菇菑菪萓菃菬菮菄菻菗菢萛菛菾蛘蛢蛦蛓蛣蛚蛪蛝蛫蛜蛬蛩蛗蛨蛑衈衖衕袺裗袹袸裀袾袶袼袷袽袲褁裉覕覘覗觝觚觛詎詍訹詙詀詗詘詄詅詒詈詑詊詌詏豟貁貀貺貾貰貹貵趄趀趉跘跓跍跇跖跜跏跕跙跈跗跅軯軷軺\"],[\"dc40\",\"軹軦軮軥軵軧軨軶軫軱軬軴軩逭逴逯鄆鄬鄄郿郼鄈郹郻鄁鄀鄇鄅鄃酡酤酟酢酠鈁鈊鈥鈃鈚鈦鈏鈌鈀鈒釿釽鈆鈄鈧鈂鈜鈤鈙鈗鈅鈖镻閍閌閐隇陾隈\"],[\"dca1\",\"隉隃隀雂雈雃雱雰靬靰靮頇颩飫鳦黹亃亄亶傽傿僆傮僄僊傴僈僂傰僁傺傱僋僉傶傸凗剺剸剻剼嗃嗛嗌嗐嗋嗊嗝嗀嗔嗄嗩喿嗒喍嗏嗕嗢嗖嗈嗲嗍嗙嗂圔塓塨塤塏塍塉塯塕塎塝塙塥塛堽塣塱壼嫇嫄嫋媺媸媱媵媰媿嫈媻嫆\"],[\"dd40\",\"媷嫀嫊媴媶嫍媹媐寖寘寙尟尳嵱嵣嵊嵥嵲嵬嵞嵨嵧嵢巰幏幎幊幍幋廅廌廆廋廇彀徯徭惷慉慊愫慅愶愲愮慆愯慏愩慀戠酨戣戥戤揅揱揫搐搒搉搠搤\"],[\"dda1\",\"搳摃搟搕搘搹搷搢搣搌搦搰搨摁搵搯搊搚摀搥搧搋揧搛搮搡搎敯斒旓暆暌暕暐暋暊暙暔晸朠楦楟椸楎楢楱椿楅楪椹楂楗楙楺楈楉椵楬椳椽楥棰楸椴楩楀楯楄楶楘楁楴楌椻楋椷楜楏楑椲楒椯楻椼歆歅歃歂歈歁殛嗀毻毼\"],[\"de40\",\"毹毷毸溛滖滈溏滀溟溓溔溠溱溹滆滒溽滁溞滉溷溰滍溦滏溲溾滃滜滘溙溒溎溍溤溡溿溳滐滊溗溮溣煇煔煒煣煠煁煝煢煲煸煪煡煂煘煃煋煰煟煐煓\"],[\"dea1\",\"煄煍煚牏犍犌犑犐犎猼獂猻猺獀獊獉瑄瑊瑋瑒瑑瑗瑀瑏瑐瑎瑂瑆瑍瑔瓡瓿瓾瓽甝畹畷榃痯瘏瘃痷痾痼痹痸瘐痻痶痭痵痽皙皵盝睕睟睠睒睖睚睩睧睔睙睭矠碇碚碔碏碄碕碅碆碡碃硹碙碀碖硻祼禂祽祹稑稘稙稒稗稕稢稓\"],[\"df40\",\"稛稐窣窢窞竫筦筤筭筴筩筲筥筳筱筰筡筸筶筣粲粴粯綈綆綀綍絿綅絺綎絻綃絼綌綔綄絽綒罭罫罧罨罬羦羥羧翛翜耡腤腠腷腜腩腛腢腲朡腞腶腧腯\"],[\"dfa1\",\"腄腡舝艉艄艀艂艅蓱萿葖葶葹蒏蒍葥葑葀蒆葧萰葍葽葚葙葴葳葝蔇葞萷萺萴葺葃葸萲葅萩菙葋萯葂萭葟葰萹葎葌葒葯蓅蒎萻葇萶萳葨葾葄萫葠葔葮葐蜋蜄蛷蜌蛺蛖蛵蝍蛸蜎蜉蜁蛶蜍蜅裖裋裍裎裞裛裚裌裐覅覛觟觥觤\"],[\"e040\",\"觡觠觢觜触詶誆詿詡訿詷誂誄詵誃誁詴詺谼豋豊豥豤豦貆貄貅賌赨赩趑趌趎趏趍趓趔趐趒跰跠跬跱跮跐跩跣跢跧跲跫跴輆軿輁輀輅輇輈輂輋遒逿\"],[\"e0a1\",\"遄遉逽鄐鄍鄏鄑鄖鄔鄋鄎酮酯鉈鉒鈰鈺鉦鈳鉥鉞銃鈮鉊鉆鉭鉬鉏鉠鉧鉯鈶鉡鉰鈱鉔鉣鉐鉲鉎鉓鉌鉖鈲閟閜閞閛隒隓隑隗雎雺雽雸雵靳靷靸靲頏頍頎颬飶飹馯馲馰馵骭骫魛鳪鳭鳧麀黽僦僔僗僨僳僛僪僝僤僓僬僰僯僣僠\"],[\"e140\",\"凘劀劁勩勫匰厬嘧嘕嘌嘒嗼嘏嘜嘁嘓嘂嗺嘝嘄嗿嗹墉塼墐墘墆墁塿塴墋塺墇墑墎塶墂墈塻墔墏壾奫嫜嫮嫥嫕嫪嫚嫭嫫嫳嫢嫠嫛嫬嫞嫝嫙嫨嫟孷寠\"],[\"e1a1\",\"寣屣嶂嶀嵽嶆嵺嶁嵷嶊嶉嶈嵾嵼嶍嵹嵿幘幙幓廘廑廗廎廜廕廙廒廔彄彃彯徶愬愨慁慞慱慳慒慓慲慬憀慴慔慺慛慥愻慪慡慖戩戧戫搫摍摛摝摴摶摲摳摽摵摦撦摎撂摞摜摋摓摠摐摿搿摬摫摙摥摷敳斠暡暠暟朅朄朢榱榶槉\"],[\"e240\",\"榠槎榖榰榬榼榑榙榎榧榍榩榾榯榿槄榽榤槔榹槊榚槏榳榓榪榡榞槙榗榐槂榵榥槆歊歍歋殞殟殠毃毄毾滎滵滱漃漥滸漷滻漮漉潎漙漚漧漘漻漒滭漊\"],[\"e2a1\",\"漶潳滹滮漭潀漰漼漵滫漇漎潃漅滽滶漹漜滼漺漟漍漞漈漡熇熐熉熀熅熂熏煻熆熁熗牄牓犗犕犓獃獍獑獌瑢瑳瑱瑵瑲瑧瑮甀甂甃畽疐瘖瘈瘌瘕瘑瘊瘔皸瞁睼瞅瞂睮瞀睯睾瞃碲碪碴碭碨硾碫碞碥碠碬碢碤禘禊禋禖禕禔禓\"],[\"e340\",\"禗禈禒禐稫穊稰稯稨稦窨窫窬竮箈箜箊箑箐箖箍箌箛箎箅箘劄箙箤箂粻粿粼粺綧綷緂綣綪緁緀緅綝緎緄緆緋緌綯綹綖綼綟綦綮綩綡緉罳翢翣翥翞\"],[\"e3a1\",\"耤聝聜膉膆膃膇膍膌膋舕蒗蒤蒡蒟蒺蓎蓂蒬蒮蒫蒹蒴蓁蓍蒪蒚蒱蓐蒝蒧蒻蒢蒔蓇蓌蒛蒩蒯蒨蓖蒘蒶蓏蒠蓗蓔蓒蓛蒰蒑虡蜳蜣蜨蝫蝀蜮蜞蜡蜙蜛蝃蜬蝁蜾蝆蜠蜲蜪蜭蜼蜒蜺蜱蜵蝂蜦蜧蜸蜤蜚蜰蜑裷裧裱裲裺裾裮裼裶裻\"],[\"e440\",\"裰裬裫覝覡覟覞觩觫觨誫誙誋誒誏誖谽豨豩賕賏賗趖踉踂跿踍跽踊踃踇踆踅跾踀踄輐輑輎輍鄣鄜鄠鄢鄟鄝鄚鄤鄡鄛酺酲酹酳銥銤鉶銛鉺銠銔銪銍\"],[\"e4a1\",\"銦銚銫鉹銗鉿銣鋮銎銂銕銢鉽銈銡銊銆銌銙銧鉾銇銩銝銋鈭隞隡雿靘靽靺靾鞃鞀鞂靻鞄鞁靿韎韍頖颭颮餂餀餇馝馜駃馹馻馺駂馽駇骱髣髧鬾鬿魠魡魟鳱鳲鳵麧僿儃儰僸儆儇僶僾儋儌僽儊劋劌勱勯噈噂噌嘵噁噊噉噆噘\"],[\"e540\",\"噚噀嘳嘽嘬嘾嘸嘪嘺圚墫墝墱墠墣墯墬墥墡壿嫿嫴嫽嫷嫶嬃嫸嬂嫹嬁嬇嬅嬏屧嶙嶗嶟嶒嶢嶓嶕嶠嶜嶡嶚嶞幩幝幠幜緳廛廞廡彉徲憋憃慹憱憰憢憉\"],[\"e5a1\",\"憛憓憯憭憟憒憪憡憍慦憳戭摮摰撖撠撅撗撜撏撋撊撌撣撟摨撱撘敶敺敹敻斲斳暵暰暩暲暷暪暯樀樆樗槥槸樕槱槤樠槿槬槢樛樝槾樧槲槮樔槷槧橀樈槦槻樍槼槫樉樄樘樥樏槶樦樇槴樖歑殥殣殢殦氁氀毿氂潁漦潾澇濆澒\"],[\"e640\",\"澍澉澌潢潏澅潚澖潶潬澂潕潲潒潐潗澔澓潝漀潡潫潽潧澐潓澋潩潿澕潣潷潪潻熲熯熛熰熠熚熩熵熝熥熞熤熡熪熜熧熳犘犚獘獒獞獟獠獝獛獡獚獙\"],[\"e6a1\",\"獢璇璉璊璆璁瑽璅璈瑼瑹甈甇畾瘥瘞瘙瘝瘜瘣瘚瘨瘛皜皝皞皛瞍瞏瞉瞈磍碻磏磌磑磎磔磈磃磄磉禚禡禠禜禢禛歶稹窲窴窳箷篋箾箬篎箯箹篊箵糅糈糌糋緷緛緪緧緗緡縃緺緦緶緱緰緮緟罶羬羰羭翭翫翪翬翦翨聤聧膣膟\"],[\"e740\",\"膞膕膢膙膗舖艏艓艒艐艎艑蔤蔻蔏蔀蔩蔎蔉蔍蔟蔊蔧蔜蓻蔫蓺蔈蔌蓴蔪蓲蔕蓷蓫蓳蓼蔒蓪蓩蔖蓾蔨蔝蔮蔂蓽蔞蓶蔱蔦蓧蓨蓰蓯蓹蔘蔠蔰蔋蔙蔯虢\"],[\"e7a1\",\"蝖蝣蝤蝷蟡蝳蝘蝔蝛蝒蝡蝚蝑蝞蝭蝪蝐蝎蝟蝝蝯蝬蝺蝮蝜蝥蝏蝻蝵蝢蝧蝩衚褅褌褔褋褗褘褙褆褖褑褎褉覢覤覣觭觰觬諏諆誸諓諑諔諕誻諗誾諀諅諘諃誺誽諙谾豍貏賥賟賙賨賚賝賧趠趜趡趛踠踣踥踤踮踕踛踖踑踙踦踧\"],[\"e840\",\"踔踒踘踓踜踗踚輬輤輘輚輠輣輖輗遳遰遯遧遫鄯鄫鄩鄪鄲鄦鄮醅醆醊醁醂醄醀鋐鋃鋄鋀鋙銶鋏鋱鋟鋘鋩鋗鋝鋌鋯鋂鋨鋊鋈鋎鋦鋍鋕鋉鋠鋞鋧鋑鋓\"],[\"e8a1\",\"銵鋡鋆銴镼閬閫閮閰隤隢雓霅霈霂靚鞊鞎鞈韐韏頞頝頦頩頨頠頛頧颲餈飺餑餔餖餗餕駜駍駏駓駔駎駉駖駘駋駗駌骳髬髫髳髲髱魆魃魧魴魱魦魶魵魰魨魤魬鳼鳺鳽鳿鳷鴇鴀鳹鳻鴈鴅鴄麃黓鼏鼐儜儓儗儚儑凞匴叡噰噠噮\"],[\"e940\",\"噳噦噣噭噲噞噷圜圛壈墽壉墿墺壂墼壆嬗嬙嬛嬡嬔嬓嬐嬖嬨嬚嬠嬞寯嶬嶱嶩嶧嶵嶰嶮嶪嶨嶲嶭嶯嶴幧幨幦幯廩廧廦廨廥彋徼憝憨憖懅憴懆懁懌憺\"],[\"e9a1\",\"憿憸憌擗擖擐擏擉撽撉擃擛擳擙攳敿敼斢曈暾曀曊曋曏暽暻暺曌朣樴橦橉橧樲橨樾橝橭橶橛橑樨橚樻樿橁橪橤橐橏橔橯橩橠樼橞橖橕橍橎橆歕歔歖殧殪殫毈毇氄氃氆澭濋澣濇澼濎濈潞濄澽澞濊澨瀄澥澮澺澬澪濏澿澸\"],[\"ea40\",\"澢濉澫濍澯澲澰燅燂熿熸燖燀燁燋燔燊燇燏熽燘熼燆燚燛犝犞獩獦獧獬獥獫獪瑿璚璠璔璒璕璡甋疀瘯瘭瘱瘽瘳瘼瘵瘲瘰皻盦瞚瞝瞡瞜瞛瞢瞣瞕瞙\"],[\"eaa1\",\"瞗磝磩磥磪磞磣磛磡磢磭磟磠禤穄穈穇窶窸窵窱窷篞篣篧篝篕篥篚篨篹篔篪篢篜篫篘篟糒糔糗糐糑縒縡縗縌縟縠縓縎縜縕縚縢縋縏縖縍縔縥縤罃罻罼罺羱翯耪耩聬膱膦膮膹膵膫膰膬膴膲膷膧臲艕艖艗蕖蕅蕫蕍蕓蕡蕘\"],[\"eb40\",\"蕀蕆蕤蕁蕢蕄蕑蕇蕣蔾蕛蕱蕎蕮蕵蕕蕧蕠薌蕦蕝蕔蕥蕬虣虥虤螛螏螗螓螒螈螁螖螘蝹螇螣螅螐螑螝螄螔螜螚螉褞褦褰褭褮褧褱褢褩褣褯褬褟觱諠\"],[\"eba1\",\"諢諲諴諵諝謔諤諟諰諈諞諡諨諿諯諻貑貒貐賵賮賱賰賳赬赮趥趧踳踾踸蹀蹅踶踼踽蹁踰踿躽輶輮輵輲輹輷輴遶遹遻邆郺鄳鄵鄶醓醐醑醍醏錧錞錈錟錆錏鍺錸錼錛錣錒錁鍆錭錎錍鋋錝鋺錥錓鋹鋷錴錂錤鋿錩錹錵錪錔錌\"],[\"ec40\",\"錋鋾錉錀鋻錖閼闍閾閹閺閶閿閵閽隩雔霋霒霐鞙鞗鞔韰韸頵頯頲餤餟餧餩馞駮駬駥駤駰駣駪駩駧骹骿骴骻髶髺髹髷鬳鮀鮅鮇魼魾魻鮂鮓鮒鮐魺鮕\"],[\"eca1\",\"魽鮈鴥鴗鴠鴞鴔鴩鴝鴘鴢鴐鴙鴟麈麆麇麮麭黕黖黺鼒鼽儦儥儢儤儠儩勴嚓嚌嚍嚆嚄嚃噾嚂噿嚁壖壔壏壒嬭嬥嬲嬣嬬嬧嬦嬯嬮孻寱寲嶷幬幪徾徻懃憵憼懧懠懥懤懨懞擯擩擣擫擤擨斁斀斶旚曒檍檖檁檥檉檟檛檡檞檇檓檎\"],[\"ed40\",\"檕檃檨檤檑橿檦檚檅檌檒歛殭氉濌澩濴濔濣濜濭濧濦濞濲濝濢濨燡燱燨燲燤燰燢獳獮獯璗璲璫璐璪璭璱璥璯甐甑甒甏疄癃癈癉癇皤盩瞵瞫瞲瞷瞶\"],[\"eda1\",\"瞴瞱瞨矰磳磽礂磻磼磲礅磹磾礄禫禨穜穛穖穘穔穚窾竀竁簅簏篲簀篿篻簎篴簋篳簂簉簃簁篸篽簆篰篱簐簊糨縭縼繂縳顈縸縪繉繀繇縩繌縰縻縶繄縺罅罿罾罽翴翲耬膻臄臌臊臅臇膼臩艛艚艜薃薀薏薧薕薠薋薣蕻薤薚薞\"],[\"ee40\",\"蕷蕼薉薡蕺蕸蕗薎薖薆薍薙薝薁薢薂薈薅蕹蕶薘薐薟虨螾螪螭蟅螰螬螹螵螼螮蟉蟃蟂蟌螷螯蟄蟊螴螶螿螸螽蟞螲褵褳褼褾襁襒褷襂覭覯覮觲觳謞\"],[\"eea1\",\"謘謖謑謅謋謢謏謒謕謇謍謈謆謜謓謚豏豰豲豱豯貕貔賹赯蹎蹍蹓蹐蹌蹇轃轀邅遾鄸醚醢醛醙醟醡醝醠鎡鎃鎯鍤鍖鍇鍼鍘鍜鍶鍉鍐鍑鍠鍭鎏鍌鍪鍹鍗鍕鍒鍏鍱鍷鍻鍡鍞鍣鍧鎀鍎鍙闇闀闉闃闅閷隮隰隬霠霟霘霝霙鞚鞡鞜\"],[\"ef40\",\"鞞鞝韕韔韱顁顄顊顉顅顃餥餫餬餪餳餲餯餭餱餰馘馣馡騂駺駴駷駹駸駶駻駽駾駼騃骾髾髽鬁髼魈鮚鮨鮞鮛鮦鮡鮥鮤鮆鮢鮠鮯鴳鵁鵧鴶鴮鴯鴱鴸鴰\"],[\"efa1\",\"鵅鵂鵃鴾鴷鵀鴽翵鴭麊麉麍麰黈黚黻黿鼤鼣鼢齔龠儱儭儮嚘嚜嚗嚚嚝嚙奰嬼屩屪巀幭幮懘懟懭懮懱懪懰懫懖懩擿攄擽擸攁攃擼斔旛曚曛曘櫅檹檽櫡櫆檺檶檷櫇檴檭歞毉氋瀇瀌瀍瀁瀅瀔瀎濿瀀濻瀦濼濷瀊爁燿燹爃燽獶\"],[\"f040\",\"璸瓀璵瓁璾璶璻瓂甔甓癜癤癙癐癓癗癚皦皽盬矂瞺磿礌礓礔礉礐礒礑禭禬穟簜簩簙簠簟簭簝簦簨簢簥簰繜繐繖繣繘繢繟繑繠繗繓羵羳翷翸聵臑臒\"],[\"f0a1\",\"臐艟艞薴藆藀藃藂薳薵薽藇藄薿藋藎藈藅薱薶藒蘤薸薷薾虩蟧蟦蟢蟛蟫蟪蟥蟟蟳蟤蟔蟜蟓蟭蟘蟣螤蟗蟙蠁蟴蟨蟝襓襋襏襌襆襐襑襉謪謧謣謳謰謵譇謯謼謾謱謥謷謦謶謮謤謻謽謺豂豵貙貘貗賾贄贂贀蹜蹢蹠蹗蹖蹞蹥蹧\"],[\"f140\",\"蹛蹚蹡蹝蹩蹔轆轇轈轋鄨鄺鄻鄾醨醥醧醯醪鎵鎌鎒鎷鎛鎝鎉鎧鎎鎪鎞鎦鎕鎈鎙鎟鎍鎱鎑鎲鎤鎨鎴鎣鎥闒闓闑隳雗雚巂雟雘雝霣霢霥鞬鞮鞨鞫鞤鞪\"],[\"f1a1\",\"鞢鞥韗韙韖韘韺顐顑顒颸饁餼餺騏騋騉騍騄騑騊騅騇騆髀髜鬈鬄鬅鬩鬵魊魌魋鯇鯆鯃鮿鯁鮵鮸鯓鮶鯄鮹鮽鵜鵓鵏鵊鵛鵋鵙鵖鵌鵗鵒鵔鵟鵘鵚麎麌黟鼁鼀鼖鼥鼫鼪鼩鼨齌齕儴儵劖勷厴嚫嚭嚦嚧嚪嚬壚壝壛夒嬽嬾嬿巃幰\"],[\"f240\",\"徿懻攇攐攍攉攌攎斄旞旝曞櫧櫠櫌櫑櫙櫋櫟櫜櫐櫫櫏櫍櫞歠殰氌瀙瀧瀠瀖瀫瀡瀢瀣瀩瀗瀤瀜瀪爌爊爇爂爅犥犦犤犣犡瓋瓅璷瓃甖癠矉矊矄矱礝礛\"],[\"f2a1\",\"礡礜礗礞禰穧穨簳簼簹簬簻糬糪繶繵繸繰繷繯繺繲繴繨罋罊羃羆羷翽翾聸臗臕艤艡艣藫藱藭藙藡藨藚藗藬藲藸藘藟藣藜藑藰藦藯藞藢蠀蟺蠃蟶蟷蠉蠌蠋蠆蟼蠈蟿蠊蠂襢襚襛襗襡襜襘襝襙覈覷覶觶譐譈譊譀譓譖譔譋譕\"],[\"f340\",\"譑譂譒譗豃豷豶貚贆贇贉趬趪趭趫蹭蹸蹳蹪蹯蹻軂轒轑轏轐轓辴酀鄿醰醭鏞鏇鏏鏂鏚鏐鏹鏬鏌鏙鎩鏦鏊鏔鏮鏣鏕鏄鏎鏀鏒鏧镽闚闛雡霩霫霬霨霦\"],[\"f3a1\",\"鞳鞷鞶韝韞韟顜顙顝顗颿颽颻颾饈饇饃馦馧騚騕騥騝騤騛騢騠騧騣騞騜騔髂鬋鬊鬎鬌鬷鯪鯫鯠鯞鯤鯦鯢鯰鯔鯗鯬鯜鯙鯥鯕鯡鯚鵷鶁鶊鶄鶈鵱鶀鵸鶆鶋鶌鵽鵫鵴鵵鵰鵩鶅鵳鵻鶂鵯鵹鵿鶇鵨麔麑黀黼鼭齀齁齍齖齗齘匷嚲\"],[\"f440\",\"嚵嚳壣孅巆巇廮廯忀忁懹攗攖攕攓旟曨曣曤櫳櫰櫪櫨櫹櫱櫮櫯瀼瀵瀯瀷瀴瀱灂瀸瀿瀺瀹灀瀻瀳灁爓爔犨獽獼璺皫皪皾盭矌矎矏矍矲礥礣礧礨礤礩\"],[\"f4a1\",\"禲穮穬穭竷籉籈籊籇籅糮繻繾纁纀羺翿聹臛臙舋艨艩蘢藿蘁藾蘛蘀藶蘄蘉蘅蘌藽蠙蠐蠑蠗蠓蠖襣襦覹觷譠譪譝譨譣譥譧譭趮躆躈躄轙轖轗轕轘轚邍酃酁醷醵醲醳鐋鐓鏻鐠鐏鐔鏾鐕鐐鐨鐙鐍鏵鐀鏷鐇鐎鐖鐒鏺鐉鏸鐊鏿\"],[\"f540\",\"鏼鐌鏶鐑鐆闞闠闟霮霯鞹鞻韽韾顠顢顣顟飁飂饐饎饙饌饋饓騲騴騱騬騪騶騩騮騸騭髇髊髆鬐鬒鬑鰋鰈鯷鰅鰒鯸鱀鰇鰎鰆鰗鰔鰉鶟鶙鶤鶝鶒鶘鶐鶛\"],[\"f5a1\",\"鶠鶔鶜鶪鶗鶡鶚鶢鶨鶞鶣鶿鶩鶖鶦鶧麙麛麚黥黤黧黦鼰鼮齛齠齞齝齙龑儺儹劘劗囃嚽嚾孈孇巋巏廱懽攛欂櫼欃櫸欀灃灄灊灈灉灅灆爝爚爙獾甗癪矐礭礱礯籔籓糲纊纇纈纋纆纍罍羻耰臝蘘蘪蘦蘟蘣蘜蘙蘧蘮蘡蘠蘩蘞蘥\"],[\"f640\",\"蠩蠝蠛蠠蠤蠜蠫衊襭襩襮襫觺譹譸譅譺譻贐贔趯躎躌轞轛轝酆酄酅醹鐿鐻鐶鐩鐽鐼鐰鐹鐪鐷鐬鑀鐱闥闤闣霵霺鞿韡顤飉飆飀饘饖騹騽驆驄驂驁騺\"],[\"f6a1\",\"騿髍鬕鬗鬘鬖鬺魒鰫鰝鰜鰬鰣鰨鰩鰤鰡鶷鶶鶼鷁鷇鷊鷏鶾鷅鷃鶻鶵鷎鶹鶺鶬鷈鶱鶭鷌鶳鷍鶲鹺麜黫黮黭鼛鼘鼚鼱齎齥齤龒亹囆囅囋奱孋孌巕巑廲攡攠攦攢欋欈欉氍灕灖灗灒爞爟犩獿瓘瓕瓙瓗癭皭礵禴穰穱籗籜籙籛籚\"],[\"f740\",\"糴糱纑罏羇臞艫蘴蘵蘳蘬蘲蘶蠬蠨蠦蠪蠥襱覿覾觻譾讄讂讆讅譿贕躕躔躚躒躐躖躗轠轢酇鑌鑐鑊鑋鑏鑇鑅鑈鑉鑆霿韣顪顩飋饔饛驎驓驔驌驏驈驊\"],[\"f7a1\",\"驉驒驐髐鬙鬫鬻魖魕鱆鱈鰿鱄鰹鰳鱁鰼鰷鰴鰲鰽鰶鷛鷒鷞鷚鷋鷐鷜鷑鷟鷩鷙鷘鷖鷵鷕鷝麶黰鼵鼳鼲齂齫龕龢儽劙壨壧奲孍巘蠯彏戁戃戄攩攥斖曫欑欒欏毊灛灚爢玂玁玃癰矔籧籦纕艬蘺虀蘹蘼蘱蘻蘾蠰蠲蠮蠳襶襴襳觾\"],[\"f840\",\"讌讎讋讈豅贙躘轤轣醼鑢鑕鑝鑗鑞韄韅頀驖驙鬞鬟鬠鱒鱘鱐鱊鱍鱋鱕鱙鱌鱎鷻鷷鷯鷣鷫鷸鷤鷶鷡鷮鷦鷲鷰鷢鷬鷴鷳鷨鷭黂黐黲黳鼆鼜鼸鼷鼶齃齏\"],[\"f8a1\",\"齱齰齮齯囓囍孎屭攭曭曮欓灟灡灝灠爣瓛瓥矕礸禷禶籪纗羉艭虃蠸蠷蠵衋讔讕躞躟躠躝醾醽釂鑫鑨鑩雥靆靃靇韇韥驞髕魙鱣鱧鱦鱢鱞鱠鸂鷾鸇鸃鸆鸅鸀鸁鸉鷿鷽鸄麠鼞齆齴齵齶囔攮斸欘欙欗欚灢爦犪矘矙礹籩籫糶纚\"],[\"f940\",\"纘纛纙臠臡虆虇虈襹襺襼襻觿讘讙躥躤躣鑮鑭鑯鑱鑳靉顲饟鱨鱮鱭鸋鸍鸐鸏鸒鸑麡黵鼉齇齸齻齺齹圞灦籯蠼趲躦釃鑴鑸鑶鑵驠鱴鱳鱱鱵鸔鸓黶鼊\"],[\"f9a1\",\"龤灨灥糷虪蠾蠽蠿讞貜躩軉靋顳顴飌饡馫驤驦驧鬤鸕鸗齈戇欞爧虌躨钂钀钁驩驨鬮鸙爩虋讟钃鱹麷癵驫鱺鸝灩灪麤齾齉龘碁銹裏墻恒粧嫺╔╦╗╠╬╣╚╩╝╒╤╕╞╪╡╘╧╛╓╥╖╟╫╢╙╨╜║═╭╮╰╯▓\"]]");
	})), Tr = St({ default: () => Oe }), Oe, Sr = Tt((() => {
		Oe = JSON.parse("[[\"8740\",\"䏰䰲䘃䖦䕸𧉧䵷䖳𧲱䳢𧳅㮕䜶䝄䱇䱀𤊿𣘗𧍒𦺋𧃒䱗𪍑䝏䗚䲅𧱬䴇䪤䚡𦬣爥𥩔𡩣𣸆𣽡晍囻\"],[\"8767\",\"綕夝𨮹㷴霴𧯯寛𡵞媤㘥𩺰嫑宷峼杮薓𩥅瑡璝㡵𡵓𣚞𦀡㻬\"],[\"87a1\",\"𥣞㫵竼龗𤅡𨤍𣇪𠪊𣉞䌊蒄龖鐯䤰蘓墖靊鈘秐稲晠権袝瑌篅枂稬剏遆㓦珄𥶹瓆鿇垳䤯呌䄱𣚎堘穲𧭥讏䚮𦺈䆁𥶙箮𢒼鿈𢓁𢓉𢓌鿉蔄𣖻䂴鿊䓡𪷿拁灮鿋\"],[\"8840\",\"㇀\",4,\"𠄌㇅𠃑𠃍㇆㇇𠃋𡿨㇈𠃊㇉㇊㇋㇌𠄎㇍㇎ĀÁǍÀĒÉĚÈŌÓǑÒ࿿Ê̄Ế࿿Ê̌ỀÊāáǎàɑēéěèīíǐìōóǒòūúǔùǖǘǚ\"],[\"88a1\",\"ǜü࿿ê̄ế࿿ê̌ềêɡ⏚⏛\"],[\"8940\",\"𪎩𡅅\"],[\"8943\",\"攊\"],[\"8946\",\"丽滝鵎釟\"],[\"894c\",\"𧜵撑会伨侨兖兴农凤务动医华发变团声处备夲头学实実岚庆总斉柾栄桥济炼电纤纬纺织经统缆缷艺苏药视设询车轧轮\"],[\"89a1\",\"琑糼緍楆竉刧\"],[\"89ab\",\"醌碸酞肼\"],[\"89b0\",\"贋胶𠧧\"],[\"89b5\",\"肟黇䳍鷉鸌䰾𩷶𧀎鸊𪄳㗁\"],[\"89c1\",\"溚舾甙\"],[\"89c5\",\"䤑马骏龙禇𨑬𡷊𠗐𢫦两亁亀亇亿仫伷㑌侽㹈倃傈㑽㒓㒥円夅凛凼刅争剹劐匧㗇厩㕑厰㕓参吣㕭㕲㚁咓咣咴咹哐哯唘唣唨㖘唿㖥㖿嗗㗅\"],[\"8a40\",\"𧶄唥\"],[\"8a43\",\"𠱂𠴕𥄫喐𢳆㧬𠍁蹆𤶸𩓥䁓𨂾睺𢰸㨴䟕𨅝𦧲𤷪擝𠵼𠾴𠳕𡃴撍蹾𠺖𠰋𠽤𢲩𨉖𤓓\"],[\"8a64\",\"𠵆𩩍𨃩䟴𤺧𢳂骲㩧𩗴㿭㔆𥋇𩟔𧣈𢵄鵮頕\"],[\"8a76\",\"䏙𦂥撴哣𢵌𢯊𡁷㧻𡁯\"],[\"8aa1\",\"𦛚𦜖𧦠擪𥁒𠱃蹨𢆡𨭌𠜱\"],[\"8aac\",\"䠋𠆩㿺塳𢶍\"],[\"8ab2\",\"𤗈𠓼𦂗𠽌𠶖啹䂻䎺\"],[\"8abb\",\"䪴𢩦𡂝膪飵𠶜捹㧾𢝵跀嚡摼㹃\"],[\"8ac9\",\"𪘁𠸉𢫏𢳉\"],[\"8ace\",\"𡃈𣧂㦒㨆𨊛㕸𥹉𢃇噒𠼱𢲲𩜠㒼氽𤸻\"],[\"8adf\",\"𧕴𢺋𢈈𪙛𨳍𠹺𠰴𦠜羓𡃏𢠃𢤹㗻𥇣𠺌𠾍𠺪㾓𠼰𠵇𡅏𠹌\"],[\"8af6\",\"𠺫𠮩𠵈𡃀𡄽㿹𢚖搲𠾭\"],[\"8b40\",\"𣏴𧘹𢯎𠵾𠵿𢱑𢱕㨘𠺘𡃇𠼮𪘲𦭐𨳒𨶙𨳊閪哌苄喹\"],[\"8b55\",\"𩻃鰦骶𧝞𢷮煀腭胬尜𦕲脴㞗卟𨂽醶𠻺𠸏𠹷𠻻㗝𤷫㘉𠳖嚯𢞵𡃉𠸐𠹸𡁸𡅈𨈇𡑕𠹹𤹐𢶤婔𡀝𡀞𡃵𡃶垜𠸑\"],[\"8ba1\",\"𧚔𨋍𠾵𠹻𥅾㜃𠾶𡆀𥋘𪊽𤧚𡠺𤅷𨉼墙剨㘚𥜽箲孨䠀䬬鼧䧧鰟鮍𥭴𣄽嗻㗲嚉丨夂𡯁屮靑𠂆乛亻㔾尣彑忄㣺扌攵歺氵氺灬爫丬犭𤣩罒礻糹罓𦉪㓁\"],[\"8bde\",\"𦍋耂肀𦘒𦥑卝衤见𧢲讠贝钅镸长门𨸏韦页风飞饣𩠐鱼鸟黄歯龜丷𠂇阝户钢\"],[\"8c40\",\"倻淾𩱳龦㷉袏𤅎灷峵䬠𥇍㕙𥴰愢𨨲辧釶熑朙玺𣊁𪄇㲋𡦀䬐磤琂冮𨜏䀉橣𪊺䈣蘏𠩯稪𩥇𨫪靕灍匤𢁾鏴盙𨧣龧矝亣俰傼丯众龨吴綋墒壐𡶶庒庙忂𢜒斋\"],[\"8ca1\",\"𣏹椙橃𣱣泿\"],[\"8ca7\",\"爀𤔅玌㻛𤨓嬕璹讃𥲤𥚕窓篬糃繬苸薗龩袐龪躹龫迏蕟駠鈡龬𨶹𡐿䁱䊢娚\"],[\"8cc9\",\"顨杫䉶圽\"],[\"8cce\",\"藖𤥻芿𧄍䲁𦵴嵻𦬕𦾾龭龮宖龯曧繛湗秊㶈䓃𣉖𢞖䎚䔶\"],[\"8ce6\",\"峕𣬚諹屸㴒𣕑嵸龲煗䕘𤃬𡸣䱷㥸㑊𠆤𦱁諌侴𠈹妿腬顖𩣺弻\"],[\"8d40\",\"𠮟\"],[\"8d42\",\"𢇁𨥭䄂䚻𩁹㼇龳𪆵䃸㟖䛷𦱆䅼𨚲𧏿䕭㣔𥒚䕡䔛䶉䱻䵶䗪㿈𤬏㙡䓞䒽䇭崾嵈嵖㷼㠏嶤嶹㠠㠸幂庽弥徃㤈㤔㤿㥍惗愽峥㦉憷憹懏㦸戬抐拥挘㧸嚱\"],[\"8da1\",\"㨃揢揻搇摚㩋擀崕嘡龟㪗斆㪽旿晓㫲暒㬢朖㭂枤栀㭘桊梄㭲㭱㭻椉楃牜楤榟榅㮼槖㯝橥橴橱檂㯬檙㯲檫檵櫔櫶殁毁毪汵沪㳋洂洆洦涁㳯涤涱渕渘温溆𨧀溻滢滚齿滨滩漤漴㵆𣽁澁澾㵪㵵熷岙㶊瀬㶑灐灔灯灿炉𠌥䏁㗱𠻘\"],[\"8e40\",\"𣻗垾𦻓焾𥟠㙎榢𨯩孴穉𥣡𩓙穥穽𥦬窻窰竂竃燑𦒍䇊竚竝竪䇯咲𥰁笋筕笩𥌎𥳾箢筯莜𥮴𦱿篐萡箒箸𥴠㶭𥱥蒒篺簆簵𥳁籄粃𤢂粦晽𤕸糉糇糦籴糳糵糎\"],[\"8ea1\",\"繧䔝𦹄絝𦻖璍綉綫焵綳緒𤁗𦀩緤㴓緵𡟹緥𨍭縝𦄡𦅚繮纒䌫鑬縧罀罁罇礶𦋐駡羗𦍑羣𡙡𠁨䕜𣝦䔃𨌺翺𦒉者耈耝耨耯𪂇𦳃耻耼聡𢜔䦉𦘦𣷣𦛨朥肧𨩈脇脚墰𢛶汿𦒘𤾸擧𡒊舘𡡞橓𤩥𤪕䑺舩𠬍𦩒𣵾俹𡓽蓢荢𦬊𤦧𣔰𡝳𣷸芪椛芳䇛\"],[\"8f40\",\"蕋苐茚𠸖𡞴㛁𣅽𣕚艻苢茘𣺋𦶣𦬅𦮗𣗎㶿茝嗬莅䔋𦶥莬菁菓㑾𦻔橗蕚㒖𦹂𢻯葘𥯤葱㷓䓤檧葊𣲵祘蒨𦮖𦹷𦹃蓞萏莑䒠蒓蓤𥲑䉀𥳀䕃蔴嫲𦺙䔧蕳䔖枿蘖\"],[\"8fa1\",\"𨘥𨘻藁𧂈蘂𡖂𧃍䕫䕪蘨㙈𡢢号𧎚虾蝱𪃸蟮𢰧螱蟚蠏噡虬桖䘏衅衆𧗠𣶹𧗤衞袜䙛袴袵揁装睷𧜏覇覊覦覩覧覼𨨥觧𧤤𧪽誜瞓釾誐𧩙竩𧬺𣾏䜓𧬸煼謌謟𥐰𥕥謿譌譍誩𤩺讐讛誯𡛟䘕衏貛𧵔𧶏貫㜥𧵓賖𧶘𧶽贒贃𡤐賛灜贑𤳉㻐起\"],[\"9040\",\"趩𨀂𡀔𤦊㭼𨆼𧄌竧躭躶軃鋔輙輭𨍥𨐒辥錃𪊟𠩐辳䤪𨧞𨔽𣶻廸𣉢迹𪀔𨚼𨔁𢌥㦀𦻗逷𨔼𧪾遡𨕬𨘋邨𨜓郄𨛦邮都酧㫰醩釄粬𨤳𡺉鈎沟鉁鉢𥖹銹𨫆𣲛𨬌𥗛\"],[\"90a1\",\"𠴱錬鍫𨫡𨯫炏嫃𨫢𨫥䥥鉄𨯬𨰹𨯿鍳鑛躼閅閦鐦閠濶䊹𢙺𨛘𡉼𣸮䧟氜陻隖䅬隣𦻕懚隶磵𨫠隽双䦡𦲸𠉴𦐐𩂯𩃥𤫑𡤕𣌊霱虂霶䨏䔽䖅𤫩灵孁霛靜𩇕靗孊𩇫靟鐥僐𣂷𣂼鞉鞟鞱鞾韀韒韠𥑬韮琜𩐳響韵𩐝𧥺䫑頴頳顋顦㬎𧅵㵑𠘰𤅜\"],[\"9140\",\"𥜆飊颷飈飇䫿𦴧𡛓喰飡飦飬鍸餹𤨩䭲𩡗𩤅駵騌騻騐驘𥜥㛄𩂱𩯕髠髢𩬅髴䰎鬔鬭𨘀倴鬴𦦨㣃𣁽魐魀𩴾婅𡡣鮎𤉋鰂鯿鰌𩹨鷔𩾷𪆒𪆫𪃡𪄣𪇟鵾鶃𪄴鸎梈\"],[\"91a1\",\"鷄𢅛𪆓𪈠𡤻𪈳鴹𪂹𪊴麐麕麞麢䴴麪麯𤍤黁㭠㧥㴝伲㞾𨰫鼂鼈䮖鐤𦶢鼗鼖鼹嚟嚊齅馸𩂋韲葿齢齩竜龎爖䮾𤥵𤦻煷𤧸𤍈𤩑玞𨯚𡣺禟𨥾𨸶鍩鏳𨩄鋬鎁鏋𨥬𤒹爗㻫睲穃烐𤑳𤏸煾𡟯炣𡢾𣖙㻇𡢅𥐯𡟸㜢𡛻𡠹㛡𡝴𡣑𥽋㜣𡛀坛𤨥𡏾𡊨\"],[\"9240\",\"𡏆𡒶蔃𣚦蔃葕𤦔𧅥𣸱𥕜𣻻𧁒䓴𣛮𩦝𦼦柹㜳㰕㷧塬𡤢栐䁗𣜿𤃡𤂋𤄏𦰡哋嚞𦚱嚒𠿟𠮨𠸍鏆𨬓鎜仸儫㠙𤐶亼𠑥𠍿佋侊𥙑婨𠆫𠏋㦙𠌊𠐔㐵伩𠋀𨺳𠉵諚𠈌亘\"],[\"92a1\",\"働儍侢伃𤨎𣺊佂倮偬傁俌俥偘僼兙兛兝兞湶𣖕𣸹𣺿浲𡢄𣺉冨凃𠗠䓝𠒣𠒒𠒑赺𨪜𠜎剙劤𠡳勡鍮䙺熌𤎌𠰠𤦬𡃤槑𠸝瑹㻞璙琔瑖玘䮎𤪼𤂍叐㖄爏𤃉喴𠍅响𠯆圝鉝雴鍦埝垍坿㘾壋媙𨩆𡛺𡝯𡜐娬妸銏婾嫏娒𥥆𡧳𡡡𤊕㛵洅瑃娡𥺃\"],[\"9340\",\"媁𨯗𠐓鏠璌𡌃焅䥲鐈𨧻鎽㞠尞岞幞幈𡦖𡥼𣫮廍孏𡤃𡤄㜁𡢠㛝𡛾㛓脪𨩇𡶺𣑲𨦨弌弎𡤧𡞫婫𡜻孄蘔𧗽衠恾𢡠𢘫忛㺸𢖯𢖾𩂈𦽳懀𠀾𠁆𢘛憙憘恵𢲛𢴇𤛔𩅍\"],[\"93a1\",\"摱𤙥𢭪㨩𢬢𣑐𩣪𢹸挷𪑛撶挱揑𤧣𢵧护𢲡搻敫楲㯴𣂎𣊭𤦉𣊫唍𣋠𡣙𩐿曎𣊉𣆳㫠䆐𥖄𨬢𥖏𡛼𥕛𥐥磮𣄃𡠪𣈴㑤𣈏𣆂𤋉暎𦴤晫䮓昰𧡰𡷫晣𣋒𣋡昞𥡲㣑𣠺𣞼㮙𣞢𣏾瓐㮖枏𤘪梶栞㯄檾㡣𣟕𤒇樳橒櫉欅𡤒攑梘橌㯗橺歗𣿀𣲚鎠鋲𨯪𨫋\"],[\"9440\",\"銉𨀞𨧜鑧涥漋𤧬浧𣽿㶏渄𤀼娽渊塇洤硂焻𤌚𤉶烱牐犇犔𤞏𤜥兹𤪤𠗫瑺𣻸𣙟𤩊𤤗𥿡㼆㺱𤫟𨰣𣼵悧㻳瓌琼鎇琷䒟𦷪䕑疃㽣𤳙𤴆㽘畕癳𪗆㬙瑨𨫌𤦫𤦎㫻\"],[\"94a1\",\"㷍𤩎㻿𤧅𤣳釺圲鍂𨫣𡡤僟𥈡𥇧睸𣈲眎眏睻𤚗𣞁㩞𤣰琸璛㺿𤪺𤫇䃈𤪖𦆮錇𥖁砞碍碈磒珐祙𧝁𥛣䄎禛蒖禥樭𣻺稺秴䅮𡛦䄲鈵秱𠵌𤦌𠊙𣶺𡝮㖗啫㕰㚪𠇔𠰍竢婙𢛵𥪯𥪜娍𠉛磰娪𥯆竾䇹籝籭䈑𥮳𥺼𥺦糍𤧹𡞰粎籼粮檲緜縇緓罎𦉡\"],[\"9540\",\"𦅜𧭈綗𥺂䉪𦭵𠤖柖𠁎𣗏埄𦐒𦏸𤥢翝笧𠠬𥫩𥵃笌𥸎駦虅驣樜𣐿㧢𤧷𦖭騟𦖠蒀𧄧𦳑䓪脷䐂胆脉腂𦞴飃𦩂艢艥𦩑葓𦶧蘐𧈛媆䅿𡡀嬫𡢡嫤𡣘蚠蜨𣶏蠭𧐢娂\"],[\"95a1\",\"衮佅袇袿裦襥襍𥚃襔𧞅𧞄𨯵𨯙𨮜𨧹㺭蒣䛵䛏㟲訽訜𩑈彍鈫𤊄旔焩烄𡡅鵭貟賩𧷜妚矃姰䍮㛔踪躧𤰉輰轊䋴汘澻𢌡䢛潹溋𡟚鯩㚵𤤯邻邗啱䤆醻鐄𨩋䁢𨫼鐧𨰝𨰻蓥訫閙閧閗閖𨴴瑅㻂𤣿𤩂𤏪㻧𣈥随𨻧𨹦𨹥㻌𤧭𤩸𣿮琒瑫㻼靁𩂰\"],[\"9640\",\"桇䨝𩂓𥟟靝鍨𨦉𨰦𨬯𦎾銺嬑譩䤼珹𤈛鞛靱餸𠼦巁𨯅𤪲頟𩓚鋶𩗗釥䓀𨭐𤩧𨭤飜𨩅㼀鈪䤥萔餻饍𧬆㷽馛䭯馪驜𨭥𥣈檏騡嫾騯𩣱䮐𩥈馼䮽䮗鍽塲𡌂堢𤦸\"],[\"96a1\",\"𡓨硄𢜟𣶸棅㵽鑘㤧慐𢞁𢥫愇鱏鱓鱻鰵鰐魿鯏𩸭鮟𪇵𪃾鴡䲮𤄄鸘䲰鴌𪆴𪃭𪃳𩤯鶥蒽𦸒𦿟𦮂藼䔳𦶤𦺄𦷰萠藮𦸀𣟗𦁤秢𣖜𣙀䤭𤧞㵢鏛銾鍈𠊿碹鉷鑍俤㑀遤𥕝砽硔碶硋𡝗𣇉𤥁㚚佲濚濙瀞瀞吔𤆵垻壳垊鴖埗焴㒯𤆬燫𦱀𤾗嬨𡞵𨩉\"],[\"9740\",\"愌嫎娋䊼𤒈㜬䭻𨧼鎻鎸𡣖𠼝葲𦳀𡐓𤋺𢰦𤏁妔𣶷𦝁綨𦅛𦂤𤦹𤦋𨧺鋥珢㻩璴𨭣𡢟㻡𤪳櫘珳珻㻖𤨾𤪔𡟙𤩦𠎧𡐤𤧥瑈𤤖炥𤥶銄珦鍟𠓾錱𨫎𨨖鎆𨯧𥗕䤵𨪂煫\"],[\"97a1\",\"𤥃𠳿嚤𠘚𠯫𠲸唂秄𡟺緾𡛂𤩐𡡒䔮鐁㜊𨫀𤦭妰𡢿𡢃𧒄媡㛢𣵛㚰鉟婹𨪁𡡢鍴㳍𠪴䪖㦊僴㵩㵌𡎜煵䋻𨈘渏𩃤䓫浗𧹏灧沯㳖𣿭𣸭渂漌㵯𠏵畑㚼㓈䚀㻚䡱姄鉮䤾轁𨰜𦯀堒埈㛖𡑒烾𤍢𤩱𢿣𡊰𢎽梹楧𡎘𣓥𧯴𣛟𨪃𣟖𣏺𤲟樚𣚭𦲷萾䓟䓎\"],[\"9840\",\"𦴦𦵑𦲂𦿞漗𧄉茽𡜺菭𦲀𧁓𡟛妉媂𡞳婡婱𡤅𤇼㜭姯𡜼㛇熎鎐暚𤊥婮娫𤊓樫𣻹𧜶𤑛𤋊焝𤉙𨧡侰𦴨峂𤓎𧹍𤎽樌𤉖𡌄炦焳𤏩㶥泟勇𤩏繥姫崯㷳彜𤩝𡟟綤萦\"],[\"98a1\",\"咅𣫺𣌀𠈔坾𠣕𠘙㿥𡾞𪊶瀃𩅛嵰玏糓𨩙𩐠俈翧狍猐𧫴猸猹𥛶獁獈㺩𧬘遬燵𤣲珡臶㻊県㻑沢国琙琞琟㻢㻰㻴㻺瓓㼎㽓畂畭畲疍㽼痈痜㿀癍㿗癴㿜発𤽜熈嘣覀塩䀝睃䀹条䁅㗛瞘䁪䁯属瞾矋売砘点砜䂨砹硇硑硦葈𥔵礳栃礲䄃\"],[\"9940\",\"䄉禑禙辻稆込䅧窑䆲窼艹䇄竏竛䇏両筢筬筻簒簛䉠䉺类粜䊌粸䊔糭输烀𠳏総緔緐緽羮羴犟䎗耠耥笹耮耱联㷌垴炠肷胩䏭脌猪脎脒畠脔䐁㬹腖腙腚\"],[\"99a1\",\"䐓堺腼膄䐥膓䐭膥埯臁臤艔䒏芦艶苊苘苿䒰荗险榊萅烵葤惣蒈䔄蒾蓡蓸蔐蔸蕒䔻蕯蕰藠䕷虲蚒蚲蛯际螋䘆䘗袮裿褤襇覑𧥧訩訸誔誴豑賔賲贜䞘塟跃䟭仮踺嗘坔蹱嗵躰䠷軎転軤軭軲辷迁迊迌逳駄䢭飠鈓䤞鈨鉘鉫銱銮銿\"],[\"9a40\",\"鋣鋫鋳鋴鋽鍃鎄鎭䥅䥑麿鐗匁鐝鐭鐾䥪鑔鑹锭関䦧间阳䧥枠䨤靀䨵鞲韂噔䫤惨颹䬙飱塄餎餙冴餜餷饂饝饢䭰駅䮝騼鬏窃魩鮁鯝鯱鯴䱭鰠㝯𡯂鵉鰺\"],[\"9aa1\",\"黾噐鶓鶽鷀鷼银辶鹻麬麱麽黆铜黢黱黸竈齄𠂔𠊷𠎠椚铃妬𠓗塀铁㞹𠗕𠘕𠙶𡚺块煳𠫂𠫍𠮿呪吆𠯋咞𠯻𠰻𠱓𠱥𠱼惧𠲍噺𠲵𠳝𠳭𠵯𠶲𠷈楕鰯螥𠸄𠸎𠻗𠾐𠼭𠹳尠𠾼帋𡁜𡁏𡁶朞𡁻𡂈𡂖㙇𡂿𡃓𡄯𡄻卤蒭𡋣𡍵𡌶讁𡕷𡘙𡟃𡟇乸炻𡠭𡥪\"],[\"9b40\",\"𡨭𡩅𡰪𡱰𡲬𡻈拃𡻕𡼕熘桕𢁅槩㛈𢉼𢏗𢏺𢜪𢡱𢥏苽𢥧𢦓𢫕覥𢫨辠𢬎鞸𢬿顇骽𢱌\"],[\"9b62\",\"𢲈𢲷𥯨𢴈𢴒𢶷𢶕𢹂𢽴𢿌𣀳𣁦𣌟𣏞徱晈暿𧩹𣕧𣗳爁𤦺矗𣘚𣜖纇𠍆墵朎\"],[\"9ba1\",\"椘𣪧𧙗𥿢𣸑𣺹𧗾𢂚䣐䪸𤄙𨪚𤋮𤌍𤀻𤌴𤎖𤩅𠗊凒𠘑妟𡺨㮾𣳿𤐄𤓖垈𤙴㦛𤜯𨗨𩧉㝢𢇃譞𨭎駖𤠒𤣻𤨕爉𤫀𠱸奥𤺥𤾆𠝹軚𥀬劏圿煱𥊙𥐙𣽊𤪧喼𥑆𥑮𦭒釔㑳𥔿𧘲𥕞䜘𥕢𥕦𥟇𤤿𥡝偦㓻𣏌惞𥤃䝼𨥈𥪮𥮉𥰆𡶐垡煑澶𦄂𧰒遖𦆲𤾚譢𦐂𦑊\"],[\"9c40\",\"嵛𦯷輶𦒄𡤜諪𤧶𦒈𣿯𦔒䯀𦖿𦚵𢜛鑥𥟡憕娧晉侻嚹𤔡𦛼乪𤤴陖涏𦲽㘘襷𦞙𦡮𦐑𦡞營𦣇筂𩃀𠨑𦤦鄄𦤹穅鷰𦧺騦𦨭㙟𦑩𠀡禃𦨴𦭛崬𣔙菏𦮝䛐𦲤画补𦶮墶\"],[\"9ca1\",\"㜜𢖍𧁋𧇍㱔𧊀𧊅銁𢅺𧊋錰𧋦𤧐氹钟𧑐𠻸蠧裵𢤦𨑳𡞱溸𤨪𡠠㦤㚹尐秣䔿暶𩲭𩢤襃𧟌𧡘囖䃟𡘊㦡𣜯𨃨𡏅熭荦𧧝𩆨婧䲷𧂯𨦫𧧽𧨊𧬋𧵦𤅺筃祾𨀉澵𪋟樃𨌘厢𦸇鎿栶靝𨅯𨀣𦦵𡏭𣈯𨁈嶅𨰰𨂃圕頣𨥉嶫𤦈斾槕叒𤪥𣾁㰑朶𨂐𨃴𨄮𡾡𨅏\"],[\"9d40\",\"𨆉𨆯𨈚𨌆𨌯𨎊㗊𨑨𨚪䣺揦𨥖砈鉕𨦸䏲𨧧䏟𨧨𨭆𨯔姸𨰉輋𨿅𩃬筑𩄐𩄼㷷𩅞𤫊运犏嚋𩓧𩗩𩖰𩖸𩜲𩣑𩥉𩥪𩧃𩨨𩬎𩵚𩶛纟𩻸𩼣䲤镇𪊓熢𪋿䶑递𪗋䶜𠲜达嗁\"],[\"9da1\",\"辺𢒰边𤪓䔉繿潖檱仪㓤𨬬𧢝㜺躀𡟵𨀤𨭬𨮙𧨾𦚯㷫𧙕𣲷𥘵𥥖亚𥺁𦉘嚿𠹭踎孭𣺈𤲞揞拐𡟶𡡻攰嘭𥱊吚𥌑㷆𩶘䱽嘢嘞罉𥻘奵𣵀蝰东𠿪𠵉𣚺脗鵞贘瘻鱅癎瞹鍅吲腈苷嘥脲萘肽嗪祢噃吖𠺝㗎嘅嗱曱𨋢㘭甴嗰喺咗啲𠱁𠲖廐𥅈𠹶𢱢\"],[\"9e40\",\"𠺢麫絚嗞𡁵抝靭咔賍燶酶揼掹揾啩𢭃鱲𢺳冚㓟𠶧冧呍唞唓癦踭𦢊疱肶蠄螆裇膶萜𡃁䓬猄𤜆宐茋𦢓噻𢛴𧴯𤆣𧵳𦻐𧊶酰𡇙鈈𣳼𪚩𠺬𠻹牦𡲢䝎𤿂𧿹𠿫䃺\"],[\"9ea1\",\"鱝攟𢶠䣳𤟠𩵼𠿬𠸊恢𧖣𠿭\"],[\"9ead\",\"𦁈𡆇熣纎鵐业丄㕷嬍沲卧㚬㧜卽㚥𤘘墚𤭮舭呋垪𥪕𠥹\"],[\"9ec5\",\"㩒𢑥獴𩺬䴉鯭𣳾𩼰䱛𤾩𩖞𩿞葜𣶶𧊲𦞳𣜠挮紥𣻷𣸬㨪逈勌㹴㙺䗩𠒎癀嫰𠺶硺𧼮墧䂿噼鮋嵴癔𪐴麅䳡痹㟻愙𣃚𤏲\"],[\"9ef5\",\"噝𡊩垧𤥣𩸆刴𧂮㖭汊鵼\"],[\"9f40\",\"籖鬹埞𡝬屓擓𩓐𦌵𧅤蚭𠴨𦴢𤫢𠵱\"],[\"9f4f\",\"凾𡼏嶎霃𡷑麁遌笟鬂峑箣扨挵髿篏鬪籾鬮籂粆鰕篼鬉鼗鰛𤤾齚啳寃俽麘俲剠㸆勑坧偖妷帒韈鶫轜呩鞴饀鞺匬愰\"],[\"9fa1\",\"椬叚鰊鴂䰻陁榀傦畆𡝭駚剳\"],[\"9fae\",\"酙隁酜\"],[\"9fb2\",\"酑𨺗捿𦴣櫊嘑醎畺抅𠏼獏籰𥰡𣳽\"],[\"9fc1\",\"𤤙盖鮝个𠳔莾衂\"],[\"9fc9\",\"届槀僭坺刟巵从氱𠇲伹咜哚劚趂㗾弌㗳\"],[\"9fdb\",\"歒酼龥鮗頮颴骺麨麄煺笔\"],[\"9fe7\",\"毺蠘罸\"],[\"9feb\",\"嘠𪙊蹷齓\"],[\"9ff0\",\"跔蹏鸜踁抂𨍽踨蹵竓𤩷稾磘泪詧瘇\"],[\"a040\",\"𨩚鼦泎蟖痃𪊲硓咢贌狢獱謭猂瓱賫𤪻蘯徺袠䒷\"],[\"a055\",\"𡠻𦸅\"],[\"a058\",\"詾𢔛\"],[\"a05b\",\"惽癧髗鵄鍮鮏蟵\"],[\"a063\",\"蠏賷猬霡鮰㗖犲䰇籑饊𦅙慙䰄麖慽\"],[\"a073\",\"坟慯抦戹拎㩜懢厪𣏵捤栂㗒\"],[\"a0a1\",\"嵗𨯂迚𨸹\"],[\"a0a6\",\"僙𡵆礆匲阸𠼻䁥\"],[\"a0ae\",\"矾\"],[\"a0b0\",\"糂𥼚糚稭聦聣絍甅瓲覔舚朌聢𧒆聛瓰脃眤覉𦟌畓𦻑螩蟎臈螌詉貭譃眫瓸蓚㘵榲趦\"],[\"a0d4\",\"覩瑨涹蟁𤀑瓧㷛煶悤憜㳑煢恷\"],[\"a0e2\",\"罱𨬭牐惩䭾删㰘𣳇𥻗𧙖𥔱𡥄𡋾𩤃𦷜𧂭峁𦆭𨨏𣙷𠃮𦡆𤼎䕢嬟𦍌齐麦𦉫\"],[\"a3c0\",\"␀\",31,\"␡\"],[\"c6a1\",\"①\",9,\"⑴\",9,\"ⅰ\",9,\"丶丿亅亠冂冖冫勹匸卩厶夊宀巛⼳广廴彐彡攴无疒癶辵隶¨ˆヽヾゝゞ〃仝々〆〇ー［］✽ぁ\",23],[\"c740\",\"す\",58,\"ァアィイ\"],[\"c7a1\",\"ゥ\",81,\"А\",5,\"ЁЖ\",4],[\"c840\",\"Л\",26,\"ёж\",25,\"⇧↸↹㇏𠃌乚𠂊刂䒑\"],[\"c8a1\",\"龰冈龱𧘇\"],[\"c8cd\",\"￢￤＇＂㈱№℡゛゜⺀⺄⺆⺇⺈⺊⺌⺍⺕⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍⻏⻖⻗⻞⻣\"],[\"c8f5\",\"ʃɐɛɔɵœøŋʊɪ\"],[\"f9fe\",\"￭\"],[\"fa40\",\"𠕇鋛𠗟𣿅蕌䊵珯况㙉𤥂𨧤鍄𡧛苮𣳈砼杄拟𤤳𨦪𠊠𦮳𡌅侫𢓭倈𦴩𧪄𣘀𤪱𢔓倩𠍾徤𠎀𠍇滛𠐟偽儁㑺儎顬㝃萖𤦤𠒇兠𣎴兪𠯿𢃼𠋥𢔰𠖎𣈳𡦃宂蝽𠖳𣲙冲冸\"],[\"faa1\",\"鴴凉减凑㳜凓𤪦决凢卂凭菍椾𣜭彻刋刦刼劵剗劔効勅簕蕂勠蘍𦬓包𨫞啉滙𣾀𠥔𣿬匳卄𠯢泋𡜦栛珕恊㺪㣌𡛨燝䒢卭却𨚫卾卿𡖖𡘓矦厓𨪛厠厫厮玧𥝲㽙玜叁叅汉义埾叙㪫𠮏叠𣿫𢶣叶𠱷吓灹唫晗浛呭𦭓𠵴啝咏咤䞦𡜍𠻝㶴𠵍\"],[\"fb40\",\"𨦼𢚘啇䳭启琗喆喩嘅𡣗𤀺䕒𤐵暳𡂴嘷曍𣊊暤暭噍噏磱囱鞇叾圀囯园𨭦㘣𡉏坆𤆥汮炋坂㚱𦱾埦𡐖堃𡑔𤍣堦𤯵塜墪㕡壠壜𡈼壻寿坃𪅐𤉸鏓㖡够梦㛃湙\"],[\"fba1\",\"𡘾娤啓𡚒蔅姉𠵎𦲁𦴪𡟜姙𡟻𡞲𦶦浱𡠨𡛕姹𦹅媫婣㛦𤦩婷㜈媖瑥嫓𦾡𢕔㶅𡤑㜲𡚸広勐孶斈孼𧨎䀄䡝𠈄寕慠𡨴𥧌𠖥寳宝䴐尅𡭄尓珎尔𡲥𦬨屉䣝岅峩峯嶋𡷹𡸷崐崘嵆𡺤岺巗苼㠭𤤁𢁉𢅳芇㠶㯂帮檊幵幺𤒼𠳓厦亷廐厨𡝱帉廴𨒂\"],[\"fc40\",\"廹廻㢠廼栾鐛弍𠇁弢㫞䢮𡌺强𦢈𢏐彘𢑱彣鞽𦹮彲鍀𨨶徧嶶㵟𥉐𡽪𧃸𢙨釖𠊞𨨩怱暅𡡷㥣㷇㘹垐𢞴祱㹀悞悤悳𤦂𤦏𧩓璤僡媠慤萤慂慈𦻒憁凴𠙖憇宪𣾷\"],[\"fca1\",\"𢡟懓𨮝𩥝懐㤲𢦀𢣁怣慜攞掋𠄘担𡝰拕𢸍捬𤧟㨗搸揸𡎎𡟼撐澊𢸶頔𤂌𥜝擡擥鑻㩦携㩗敍漖𤨨𤨣斅敭敟𣁾斵𤥀䬷旑䃘𡠩无旣忟𣐀昘𣇷𣇸晄𣆤𣆥晋𠹵晧𥇦晳晴𡸽𣈱𨗴𣇈𥌓矅𢣷馤朂𤎜𤨡㬫槺𣟂杞杧杢𤇍𩃭柗䓩栢湐鈼栁𣏦𦶠桝\"],[\"fd40\",\"𣑯槡樋𨫟楳棃𣗍椁椀㴲㨁𣘼㮀枬楡𨩊䋼椶榘㮡𠏉荣傐槹𣙙𢄪橅𣜃檝㯳枱櫈𩆜㰍欝𠤣惞欵歴𢟍溵𣫛𠎵𡥘㝀吡𣭚毡𣻼毜氷𢒋𤣱𦭑汚舦汹𣶼䓅𣶽𤆤𤤌𤤀\"],[\"fda1\",\"𣳉㛥㳫𠴲鮃𣇹𢒑羏样𦴥𦶡𦷫涖浜湼漄𤥿𤂅𦹲蔳𦽴凇沜渝萮𨬡港𣸯瑓𣾂秌湏媑𣁋濸㜍澝𣸰滺𡒗𤀽䕕鏰潄潜㵎潴𩅰㴻澟𤅄濓𤂑𤅕𤀹𣿰𣾴𤄿凟𤅖𤅗𤅀𦇝灋灾炧炁烌烕烖烟䄄㷨熴熖𤉷焫煅媈煊煮岜𤍥煏鍢𤋁焬𤑚𤨧𤨢熺𨯨炽爎\"],[\"fe40\",\"鑂爕夑鑃爤鍁𥘅爮牀𤥴梽牕牗㹕𣁄栍漽犂猪猫𤠣𨠫䣭𨠄猨献珏玪𠰺𦨮珉瑉𤇢𡛧𤨤昣㛅𤦷𤦍𤧻珷琕椃𤨦琹𠗃㻗瑜𢢭瑠𨺲瑇珤瑶莹瑬㜰瑴鏱樬璂䥓𤪌\"],[\"fea1\",\"𤅟𤩹𨮏孆𨰃𡢞瓈𡦈甎瓩甞𨻙𡩋寗𨺬鎅畍畊畧畮𤾂㼄𤴓疎瑝疞疴瘂瘬癑癏癯癶𦏵皐臯㟸𦤑𦤎皡皥皷盌𦾟葢𥂝𥅽𡸜眞眦着撯𥈠睘𣊬瞯𨥤𨥨𡛁矴砉𡍶𤨒棊碯磇磓隥礮𥗠磗礴碱𧘌辸袄𨬫𦂃𢘜禆褀椂禀𥡗禝𧬹礼禩渪𧄦㺨秆𩄍秔\"]]");
	})), Ir = ft(((U, F) => {
		F.exports = {
			shiftjis: {
				type: "_dbcs",
				table: function() {
					return yr(), At(gr);
				},
				encodeAdd: {
					"¥": 92,
					"‾": 126
				},
				encodeSkipVals: [{
					from: 60736,
					to: 63808
				}]
			},
			csshiftjis: "shiftjis",
			mskanji: "shiftjis",
			sjis: "shiftjis",
			windows31j: "shiftjis",
			ms31j: "shiftjis",
			xsjis: "shiftjis",
			windows932: "shiftjis",
			ms932: "shiftjis",
			932: "shiftjis",
			cp932: "shiftjis",
			eucjp: {
				type: "_dbcs",
				table: function() {
					return _r(), At(br);
				},
				encodeAdd: {
					"¥": 92,
					"‾": 126
				}
			},
			gb2312: "cp936",
			gb231280: "cp936",
			gb23121980: "cp936",
			csgb2312: "cp936",
			csiso58gb231280: "cp936",
			euccn: "cp936",
			windows936: "cp936",
			ms936: "cp936",
			936: "cp936",
			cp936: {
				type: "_dbcs",
				table: function() {
					return oe(), At(se);
				}
			},
			gbk: {
				type: "_dbcs",
				table: function() {
					return (oe(), At(se)).concat((Se(), At(Ae)));
				}
			},
			xgbk: "gbk",
			isoir58: "gbk",
			gb18030: {
				type: "_dbcs",
				table: function() {
					return (oe(), At(se)).concat((Se(), At(Ae)));
				},
				gb18030: function() {
					return vr(), At(wr);
				},
				encodeSkipVals: [128],
				encodeAdd: { "€": 41699 }
			},
			chinese: "gb18030",
			windows949: "cp949",
			ms949: "cp949",
			949: "cp949",
			cp949: {
				type: "_dbcs",
				table: function() {
					return Ar(), At(Er);
				}
			},
			cseuckr: "cp949",
			csksc56011987: "cp949",
			euckr: "cp949",
			isoir149: "cp949",
			korean: "cp949",
			ksc56011987: "cp949",
			ksc56011989: "cp949",
			ksc5601: "cp949",
			windows950: "cp950",
			ms950: "cp950",
			950: "cp950",
			cp950: {
				type: "_dbcs",
				table: function() {
					return Ne(), At(De);
				}
			},
			big5: "big5hkscs",
			big5hkscs: {
				type: "_dbcs",
				table: function() {
					return (Ne(), At(De)).concat((Sr(), At(Tr)));
				},
				encodeSkipVals: [
					36457,
					36463,
					36478,
					36523,
					36532,
					36557,
					36560,
					36695,
					36713,
					36718,
					36811,
					36862,
					36973,
					36986,
					37060,
					37084,
					37105,
					37311,
					37551,
					37552,
					37553,
					37554,
					37585,
					37959,
					38090,
					38361,
					38652,
					39285,
					39798,
					39800,
					39803,
					39878,
					39902,
					39916,
					39926,
					40002,
					40019,
					40034,
					40040,
					40043,
					40055,
					40124,
					40125,
					40144,
					40279,
					40282,
					40388,
					40431,
					40443,
					40617,
					40687,
					40701,
					40800,
					40907,
					41079,
					41180,
					41183,
					36812,
					37576,
					38468,
					38637,
					41636,
					41637,
					41639,
					41638,
					41676,
					41678
				]
			},
			cnbig5: "big5hkscs",
			csbig5: "big5hkscs",
			xxbig5: "big5hkscs"
		};
	})), xr = ft(((U) => {
		for (var F = be(), T = [
			cr(),
			ur(),
			fr(),
			lr(),
			hr(),
			dr(),
			pr(),
			mr(),
			Ir()
		], N = 0; N < T.length; N++) {
			var A = T[N];
			F(U, A);
		}
	})), Dr = ft(((U, F) => {
		var T = xt().Buffer;
		F.exports = function(N) {
			var A = N.Transform;
			function i(t, m) {
				this.conv = t, m = m || {}, m.decodeStrings = !1, A.call(this, m);
			}
			i.prototype = Object.create(A.prototype, { constructor: { value: i } }), i.prototype._transform = function(t, m, _) {
				if (typeof t != "string") return _(/* @__PURE__ */ new Error("Iconv encoding stream needs strings as its input."));
				try {
					var g = this.conv.write(t);
					g && g.length && this.push(g), _();
				} catch (a) {
					_(a);
				}
			}, i.prototype._flush = function(t) {
				try {
					var m = this.conv.end();
					m && m.length && this.push(m), t();
				} catch (_) {
					t(_);
				}
			}, i.prototype.collect = function(t) {
				var m = [];
				return this.on("error", t), this.on("data", function(_) {
					m.push(_);
				}), this.on("end", function() {
					t(null, T.concat(m));
				}), this;
			};
			function s(t, m) {
				this.conv = t, m = m || {}, m.encoding = this.encoding = "utf8", A.call(this, m);
			}
			return s.prototype = Object.create(A.prototype, { constructor: { value: s } }), s.prototype._transform = function(t, m, _) {
				if (!T.isBuffer(t) && !(t instanceof Uint8Array)) return _(/* @__PURE__ */ new Error("Iconv decoding stream needs buffers as its input."));
				try {
					var g = this.conv.write(t);
					g && g.length && this.push(g, this.encoding), _();
				} catch (a) {
					_(a);
				}
			}, s.prototype._flush = function(t) {
				try {
					var m = this.conv.end();
					m && m.length && this.push(m, this.encoding), t();
				} catch (_) {
					t(_);
				}
			}, s.prototype.collect = function(t) {
				var m = "";
				return this.on("error", t), this.on("data", function(_) {
					m += _;
				}), this.on("end", function() {
					t(null, m);
				}), this;
			}, {
				IconvLiteEncoderStream: i,
				IconvLiteDecoderStream: s
			};
		};
	})), Bt = ft(((U, F) => {
		typeof Object.create == "function" ? F.exports = function(N, A) {
			A && (N.super_ = A, N.prototype = Object.create(A.prototype, { constructor: {
				value: N,
				enumerable: !1,
				writable: !0,
				configurable: !0
			} }));
		} : F.exports = function(N, A) {
			if (A) {
				N.super_ = A;
				var i = function() {};
				i.prototype = A.prototype, N.prototype = new i(), N.prototype.constructor = N;
			}
		};
	})), Le = ft(((U, F) => {
		F.exports = Lt().EventEmitter;
	})), ke = ft(((U, F) => {
		F.exports = {};
	})), Br = ft(((U, F) => {
		function T(o, n) {
			var f = Object.keys(o);
			if (Object.getOwnPropertySymbols) {
				var l = Object.getOwnPropertySymbols(o);
				n && (l = l.filter(function(e) {
					return Object.getOwnPropertyDescriptor(o, e).enumerable;
				})), f.push.apply(f, l);
			}
			return f;
		}
		function N(o) {
			for (var n = 1; n < arguments.length; n++) {
				var f = arguments[n] != null ? arguments[n] : {};
				n % 2 ? T(Object(f), !0).forEach(function(l) {
					A(o, l, f[l]);
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(f)) : T(Object(f)).forEach(function(l) {
					Object.defineProperty(o, l, Object.getOwnPropertyDescriptor(f, l));
				});
			}
			return o;
		}
		function A(o, n, f) {
			return n = m(n), n in o ? Object.defineProperty(o, n, {
				value: f,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : o[n] = f, o;
		}
		function i(o, n) {
			if (!(o instanceof n)) throw new TypeError("Cannot call a class as a function");
		}
		function s(o, n) {
			for (var f = 0; f < n.length; f++) {
				var l = n[f];
				l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(o, m(l.key), l);
			}
		}
		function t(o, n, f) {
			return n && s(o.prototype, n), f && s(o, f), Object.defineProperty(o, "prototype", { writable: !1 }), o;
		}
		function m(o) {
			var n = _(o, "string");
			return typeof n == "symbol" ? n : String(n);
		}
		function _(o, n) {
			if (typeof o != "object" || o === null) return o;
			var f = o[Symbol.toPrimitive];
			if (f !== void 0) {
				var l = f.call(o, n || "default");
				if (typeof l != "object") return l;
				throw new TypeError("@@toPrimitive must return a primitive value.");
			}
			return (n === "string" ? String : Number)(o);
		}
		var g = Dt().Buffer, a = ke().inspect, p = a && a.custom || "inspect";
		function u(o, n, f) {
			g.prototype.copy.call(o, n, f);
		}
		F.exports = (function() {
			function o() {
				i(this, o), this.head = null, this.tail = null, this.length = 0;
			}
			return t(o, [
				{
					key: "push",
					value: function(f) {
						var l = {
							data: f,
							next: null
						};
						this.length > 0 ? this.tail.next = l : this.head = l, this.tail = l, ++this.length;
					}
				},
				{
					key: "unshift",
					value: function(f) {
						var l = {
							data: f,
							next: this.head
						};
						this.length === 0 && (this.tail = l), this.head = l, ++this.length;
					}
				},
				{
					key: "shift",
					value: function() {
						if (this.length !== 0) {
							var f = this.head.data;
							return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, f;
						}
					}
				},
				{
					key: "clear",
					value: function() {
						this.head = this.tail = null, this.length = 0;
					}
				},
				{
					key: "join",
					value: function(f) {
						if (this.length === 0) return "";
						for (var l = this.head, e = "" + l.data; l = l.next;) e += f + l.data;
						return e;
					}
				},
				{
					key: "concat",
					value: function(f) {
						if (this.length === 0) return g.alloc(0);
						for (var l = g.allocUnsafe(f >>> 0), e = this.head, d = 0; e;) u(e.data, l, d), d += e.data.length, e = e.next;
						return l;
					}
				},
				{
					key: "consume",
					value: function(f, l) {
						var e;
						return f < this.head.data.length ? (e = this.head.data.slice(0, f), this.head.data = this.head.data.slice(f)) : f === this.head.data.length ? e = this.shift() : e = l ? this._getString(f) : this._getBuffer(f), e;
					}
				},
				{
					key: "first",
					value: function() {
						return this.head.data;
					}
				},
				{
					key: "_getString",
					value: function(f) {
						var l = this.head, e = 1, d = l.data;
						for (f -= d.length; l = l.next;) {
							var r = l.data, c = f > r.length ? r.length : f;
							if (c === r.length ? d += r : d += r.slice(0, f), f -= c, f === 0) {
								c === r.length ? (++e, l.next ? this.head = l.next : this.head = this.tail = null) : (this.head = l, l.data = r.slice(c));
								break;
							}
							++e;
						}
						return this.length -= e, d;
					}
				},
				{
					key: "_getBuffer",
					value: function(f) {
						var l = g.allocUnsafe(f), e = this.head, d = 1;
						for (e.data.copy(l), f -= e.data.length; e = e.next;) {
							var r = e.data, c = f > r.length ? r.length : f;
							if (r.copy(l, l.length - f, 0, c), f -= c, f === 0) {
								c === r.length ? (++d, e.next ? this.head = e.next : this.head = this.tail = null) : (this.head = e, e.data = r.slice(c));
								break;
							}
							++d;
						}
						return this.length -= d, l;
					}
				},
				{
					key: p,
					value: function(f, l) {
						return a(this, N(N({}, l), {}, {
							depth: 0,
							customInspect: !1
						}));
					}
				}
			]), o;
		})();
	})), Ce = ft(((U, F) => {
		function T(m, _) {
			var g = this, a = this._readableState && this._readableState.destroyed, p = this._writableState && this._writableState.destroyed;
			return a || p ? (_ ? _(m) : m && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(s, this, m)) : process.nextTick(s, this, m)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(m || null, function(u) {
				!_ && u ? g._writableState ? g._writableState.errorEmitted ? process.nextTick(A, g) : (g._writableState.errorEmitted = !0, process.nextTick(N, g, u)) : process.nextTick(N, g, u) : _ ? (process.nextTick(A, g), _(u)) : process.nextTick(A, g);
			}), this);
		}
		function N(m, _) {
			s(m, _), A(m);
		}
		function A(m) {
			m._writableState && !m._writableState.emitClose || m._readableState && !m._readableState.emitClose || m.emit("close");
		}
		function i() {
			this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
		}
		function s(m, _) {
			m.emit("error", _);
		}
		function t(m, _) {
			var g = m._readableState, a = m._writableState;
			g && g.autoDestroy || a && a.autoDestroy ? m.destroy(_) : m.emit("error", _);
		}
		F.exports = {
			destroy: T,
			undestroy: i,
			errorOrDestroy: t
		};
	})), Nt = ft(((U, F) => {
		function T(_, g) {
			_.prototype = Object.create(g.prototype), _.prototype.constructor = _, _.__proto__ = g;
		}
		var N = {};
		function A(_, g, a) {
			a || (a = Error);
			function p(o, n, f) {
				return typeof g == "string" ? g : g(o, n, f);
			}
			var u = (function(o) {
				T(n, o);
				function n(f, l, e) {
					return o.call(this, p(f, l, e)) || this;
				}
				return n;
			})(a);
			u.prototype.name = a.name, u.prototype.code = _, N[_] = u;
		}
		function i(_, g) {
			if (Array.isArray(_)) {
				var a = _.length;
				return _ = _.map(function(p) {
					return String(p);
				}), a > 2 ? "one of ".concat(g, " ").concat(_.slice(0, a - 1).join(", "), ", or ") + _[a - 1] : a === 2 ? "one of ".concat(g, " ").concat(_[0], " or ").concat(_[1]) : "of ".concat(g, " ").concat(_[0]);
			} else return "of ".concat(g, " ").concat(String(_));
		}
		function s(_, g, a) {
			return _.substr(!a || a < 0 ? 0 : +a, g.length) === g;
		}
		function t(_, g, a) {
			return (a === void 0 || a > _.length) && (a = _.length), _.substring(a - g.length, a) === g;
		}
		function m(_, g, a) {
			return typeof a != "number" && (a = 0), a + g.length > _.length ? !1 : _.indexOf(g, a) !== -1;
		}
		A("ERR_INVALID_OPT_VALUE", function(_, g) {
			return "The value \"" + g + "\" is invalid for option \"" + _ + "\"";
		}, TypeError), A("ERR_INVALID_ARG_TYPE", function(_, g, a) {
			var p;
			typeof g == "string" && s(g, "not ") ? (p = "must not be", g = g.replace(/^not /, "")) : p = "must be";
			var u;
			if (t(_, " argument")) u = "The ".concat(_, " ").concat(p, " ").concat(i(g, "type"));
			else {
				var o = m(_, ".") ? "property" : "argument";
				u = "The \"".concat(_, "\" ").concat(o, " ").concat(p, " ").concat(i(g, "type"));
			}
			return u += ". Received type ".concat(typeof a), u;
		}, TypeError), A("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), A("ERR_METHOD_NOT_IMPLEMENTED", function(_) {
			return "The " + _ + " method is not implemented";
		}), A("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), A("ERR_STREAM_DESTROYED", function(_) {
			return "Cannot call " + _ + " after a stream was destroyed";
		}), A("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), A("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), A("ERR_STREAM_WRITE_AFTER_END", "write after end"), A("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), A("ERR_UNKNOWN_ENCODING", function(_) {
			return "Unknown encoding: " + _;
		}, TypeError), A("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), F.exports.codes = N;
	})), Me = ft(((U, F) => {
		var T = Nt().codes.ERR_INVALID_OPT_VALUE;
		function N(i, s, t) {
			return i.highWaterMark != null ? i.highWaterMark : s ? i[t] : null;
		}
		function A(i, s, t, m) {
			var _ = N(s, m, t);
			if (_ != null) {
				if (!(isFinite(_) && Math.floor(_) === _) || _ < 0) throw new T(m ? t : "highWaterMark", _);
				return Math.floor(_);
			}
			return i.objectMode ? 16 : 16 * 1024;
		}
		F.exports = { getHighWaterMark: A };
	})), Nr = ft(((U, F) => {
		F.exports = T;
		function T(A, i) {
			if (N("noDeprecation")) return A;
			var s = !1;
			function t() {
				if (!s) {
					if (N("throwDeprecation")) throw new Error(i);
					N("traceDeprecation") ? console.trace(i) : console.warn(i), s = !0;
				}
				return A.apply(this, arguments);
			}
			return t;
		}
		function N(A) {
			try {
				if (!globalThis.localStorage) return !1;
			} catch {
				return !1;
			}
			var i = globalThis.localStorage[A];
			return i == null ? !1 : String(i).toLowerCase() === "true";
		}
	})), Re = ft(((U, F) => {
		F.exports = E;
		function T(I) {
			var b = this;
			this.next = null, this.entry = null, this.finish = function() {
				yt(b, I);
			};
		}
		var N;
		E.WritableState = x;
		var A = { deprecate: Nr() }, i = Le(), s = Dt().Buffer, t = (typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {};
		function m(I) {
			return s.from(I);
		}
		function _(I) {
			return s.isBuffer(I) || I instanceof t;
		}
		var g = Ce(), a = Me().getHighWaterMark, p = Nt().codes, u = p.ERR_INVALID_ARG_TYPE, o = p.ERR_METHOD_NOT_IMPLEMENTED, n = p.ERR_MULTIPLE_CALLBACK, f = p.ERR_STREAM_CANNOT_PIPE, l = p.ERR_STREAM_DESTROYED, e = p.ERR_STREAM_NULL_VALUES, d = p.ERR_STREAM_WRITE_AFTER_END, r = p.ERR_UNKNOWN_ENCODING, c = g.errorOrDestroy;
		Bt()(E, i);
		function w() {}
		function x(I, b, W) {
			N = N || Ot(), I = I || {}, typeof W != "boolean" && (W = b instanceof N), this.objectMode = !!I.objectMode, W && (this.objectMode = this.objectMode || !!I.writableObjectMode), this.highWaterMark = a(this, I, "writableHighWaterMark", W), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1, this.decodeStrings = I.decodeStrings !== !1, this.defaultEncoding = I.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(X) {
				Q(b, X);
			}, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = I.emitClose !== !1, this.autoDestroy = !!I.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new T(this);
		}
		x.prototype.getBuffer = function() {
			for (var b = this.bufferedRequest, W = []; b;) W.push(b), b = b.next;
			return W;
		}, (function() {
			try {
				Object.defineProperty(x.prototype, "buffer", { get: A.deprecate(function() {
					return this.getBuffer();
				}, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
			} catch {}
		})();
		var D;
		typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (D = Function.prototype[Symbol.hasInstance], Object.defineProperty(E, Symbol.hasInstance, { value: function(b) {
			return D.call(this, b) ? !0 : this !== E ? !1 : b && b._writableState instanceof x;
		} })) : D = function(b) {
			return b instanceof this;
		};
		function E(I) {
			N = N || Ot();
			var b = this instanceof N;
			if (!b && !D.call(E, this)) return new E(I);
			this._writableState = new x(I, this, b), this.writable = !0, I && (typeof I.write == "function" && (this._write = I.write), typeof I.writev == "function" && (this._writev = I.writev), typeof I.destroy == "function" && (this._destroy = I.destroy), typeof I.final == "function" && (this._final = I.final)), i.call(this);
		}
		E.prototype.pipe = function() {
			c(this, new f());
		};
		function z(I, b) {
			var W = new d();
			c(I, W), process.nextTick(b, W);
		}
		function K(I, b, W, X) {
			var ut;
			return W === null ? ut = new e() : typeof W != "string" && !b.objectMode && (ut = new u("chunk", ["string", "Buffer"], W)), ut ? (c(I, ut), process.nextTick(X, ut), !1) : !0;
		}
		E.prototype.write = function(I, b, W) {
			var X = this._writableState, ut = !1, M = !X.objectMode && _(I);
			return M && !s.isBuffer(I) && (I = m(I)), typeof b == "function" && (W = b, b = null), M ? b = "buffer" : b || (b = X.defaultEncoding), typeof W != "function" && (W = w), X.ending ? z(this, W) : (M || K(this, X, I, W)) && (X.pendingcb++, ut = L(this, X, M, I, b, W)), ut;
		}, E.prototype.cork = function() {
			this._writableState.corked++;
		}, E.prototype.uncork = function() {
			var I = this._writableState;
			I.corked && (I.corked--, !I.writing && !I.corked && !I.bufferProcessing && I.bufferedRequest && pt(this, I));
		}, E.prototype.setDefaultEncoding = function(b) {
			if (typeof b == "string" && (b = b.toLowerCase()), !([
				"hex",
				"utf8",
				"utf-8",
				"ascii",
				"binary",
				"base64",
				"ucs2",
				"ucs-2",
				"utf16le",
				"utf-16le",
				"raw"
			].indexOf((b + "").toLowerCase()) > -1)) throw new r(b);
			return this._writableState.defaultEncoding = b, this;
		}, Object.defineProperty(E.prototype, "writableBuffer", {
			enumerable: !1,
			get: function() {
				return this._writableState && this._writableState.getBuffer();
			}
		});
		function B(I, b, W) {
			return !I.objectMode && I.decodeStrings !== !1 && typeof b == "string" && (b = s.from(b, W)), b;
		}
		Object.defineProperty(E.prototype, "writableHighWaterMark", {
			enumerable: !1,
			get: function() {
				return this._writableState.highWaterMark;
			}
		});
		function L(I, b, W, X, ut, M) {
			if (!W) {
				var R = B(b, X, ut);
				X !== R && (W = !0, ut = "buffer", X = R);
			}
			var y = b.objectMode ? 1 : X.length;
			b.length += y;
			var V = b.length < b.highWaterMark;
			if (V || (b.needDrain = !0), b.writing || b.corked) {
				var Z = b.lastBufferedRequest;
				b.lastBufferedRequest = {
					chunk: X,
					encoding: ut,
					isBuf: W,
					callback: M,
					next: null
				}, Z ? Z.next = b.lastBufferedRequest : b.bufferedRequest = b.lastBufferedRequest, b.bufferedRequestCount += 1;
			} else S(I, b, !1, y, X, ut, M);
			return V;
		}
		function S(I, b, W, X, ut, M, R) {
			b.writelen = X, b.writecb = R, b.writing = !0, b.sync = !0, b.destroyed ? b.onwrite(new l("write")) : W ? I._writev(ut, b.onwrite) : I._write(ut, M, b.onwrite), b.sync = !1;
		}
		function q(I, b, W, X, ut) {
			--b.pendingcb, W ? (process.nextTick(ut, X), process.nextTick(st, I, b), I._writableState.errorEmitted = !0, c(I, X)) : (ut(X), I._writableState.errorEmitted = !0, c(I, X), st(I, b));
		}
		function et(I) {
			I.writing = !1, I.writecb = null, I.length -= I.writelen, I.writelen = 0;
		}
		function Q(I, b) {
			var W = I._writableState, X = W.sync, ut = W.writecb;
			if (typeof ut != "function") throw new n();
			if (et(W), b) q(I, W, X, b, ut);
			else {
				var M = j(W) || I.destroyed;
				!M && !W.corked && !W.bufferProcessing && W.bufferedRequest && pt(I, W), X ? process.nextTick(dt, I, W, M, ut) : dt(I, W, M, ut);
			}
		}
		function dt(I, b, W, X) {
			W || nt(I, b), b.pendingcb--, X(), st(I, b);
		}
		function nt(I, b) {
			b.length === 0 && b.needDrain && (b.needDrain = !1, I.emit("drain"));
		}
		function pt(I, b) {
			b.bufferProcessing = !0;
			var W = b.bufferedRequest;
			if (I._writev && W && W.next) {
				var X = b.bufferedRequestCount, ut = new Array(X), M = b.corkedRequestsFree;
				M.entry = W;
				for (var R = 0, y = !0; W;) ut[R] = W, W.isBuf || (y = !1), W = W.next, R += 1;
				ut.allBuffers = y, S(I, b, !0, b.length, ut, "", M.finish), b.pendingcb++, b.lastBufferedRequest = null, M.next ? (b.corkedRequestsFree = M.next, M.next = null) : b.corkedRequestsFree = new T(b), b.bufferedRequestCount = 0;
			} else {
				for (; W;) {
					var V = W.chunk, Z = W.encoding, k = W.callback;
					if (S(I, b, !1, b.objectMode ? 1 : V.length, V, Z, k), W = W.next, b.bufferedRequestCount--, b.writing) break;
				}
				W === null && (b.lastBufferedRequest = null);
			}
			b.bufferedRequest = W, b.bufferProcessing = !1;
		}
		E.prototype._write = function(I, b, W) {
			W(new o("_write()"));
		}, E.prototype._writev = null, E.prototype.end = function(I, b, W) {
			var X = this._writableState;
			return typeof I == "function" ? (W = I, I = null, b = null) : typeof b == "function" && (W = b, b = null), I != null && this.write(I, b), X.corked && (X.corked = 1, this.uncork()), X.ending || at(this, X, W), this;
		}, Object.defineProperty(E.prototype, "writableLength", {
			enumerable: !1,
			get: function() {
				return this._writableState.length;
			}
		});
		function j(I) {
			return I.ending && I.length === 0 && I.bufferedRequest === null && !I.finished && !I.writing;
		}
		function $(I, b) {
			I._final(function(W) {
				b.pendingcb--, W && c(I, W), b.prefinished = !0, I.emit("prefinish"), st(I, b);
			});
		}
		function lt(I, b) {
			!b.prefinished && !b.finalCalled && (typeof I._final == "function" && !b.destroyed ? (b.pendingcb++, b.finalCalled = !0, process.nextTick($, I, b)) : (b.prefinished = !0, I.emit("prefinish")));
		}
		function st(I, b) {
			var W = j(b);
			if (W && (lt(I, b), b.pendingcb === 0 && (b.finished = !0, I.emit("finish"), b.autoDestroy))) {
				var X = I._readableState;
				(!X || X.autoDestroy && X.endEmitted) && I.destroy();
			}
			return W;
		}
		function at(I, b, W) {
			b.ending = !0, st(I, b), W && (b.finished ? process.nextTick(W) : I.once("finish", W)), b.ended = !0, I.writable = !1;
		}
		function yt(I, b, W) {
			var X = I.entry;
			for (I.entry = null; X;) {
				var ut = X.callback;
				b.pendingcb--, ut(W), X = X.next;
			}
			b.corkedRequestsFree.next = I;
		}
		Object.defineProperty(E.prototype, "destroyed", {
			enumerable: !1,
			get: function() {
				return this._writableState === void 0 ? !1 : this._writableState.destroyed;
			},
			set: function(b) {
				this._writableState && (this._writableState.destroyed = b);
			}
		}), E.prototype.destroy = g.destroy, E.prototype._undestroy = g.undestroy, E.prototype._destroy = function(I, b) {
			b(I);
		};
	})), Ot = ft(((U, F) => {
		var T = Object.keys || function(a) {
			var p = [];
			for (var u in a) p.push(u);
			return p;
		};
		F.exports = m;
		var N = Fe(), A = Re();
		Bt()(m, N);
		for (var i = T(A.prototype), s = 0; s < i.length; s++) {
			var t = i[s];
			m.prototype[t] || (m.prototype[t] = A.prototype[t]);
		}
		function m(a) {
			if (!(this instanceof m)) return new m(a);
			N.call(this, a), A.call(this, a), this.allowHalfOpen = !0, a && (a.readable === !1 && (this.readable = !1), a.writable === !1 && (this.writable = !1), a.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", _)));
		}
		Object.defineProperty(m.prototype, "writableHighWaterMark", {
			enumerable: !1,
			get: function() {
				return this._writableState.highWaterMark;
			}
		}), Object.defineProperty(m.prototype, "writableBuffer", {
			enumerable: !1,
			get: function() {
				return this._writableState && this._writableState.getBuffer();
			}
		}), Object.defineProperty(m.prototype, "writableLength", {
			enumerable: !1,
			get: function() {
				return this._writableState.length;
			}
		});
		function _() {
			this._writableState.ended || process.nextTick(g, this);
		}
		function g(a) {
			a.end();
		}
		Object.defineProperty(m.prototype, "destroyed", {
			enumerable: !1,
			get: function() {
				return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
			},
			set: function(p) {
				this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = p, this._writableState.destroyed = p);
			}
		});
	})), Or = ft(((U, F) => {
		var T = Dt(), N = T.Buffer;
		function A(s, t) {
			for (var m in s) t[m] = s[m];
		}
		N.from && N.alloc && N.allocUnsafe && N.allocUnsafeSlow ? F.exports = T : (A(T, U), U.Buffer = i);
		function i(s, t, m) {
			return N(s, t, m);
		}
		i.prototype = Object.create(N.prototype), A(N, i), i.from = function(s, t, m) {
			if (typeof s == "number") throw new TypeError("Argument must not be a number");
			return N(s, t, m);
		}, i.alloc = function(s, t, m) {
			if (typeof s != "number") throw new TypeError("Argument must be a number");
			var _ = N(s);
			return t !== void 0 ? typeof m == "string" ? _.fill(t, m) : _.fill(t) : _.fill(0), _;
		}, i.allocUnsafe = function(s) {
			if (typeof s != "number") throw new TypeError("Argument must be a number");
			return N(s);
		}, i.allocUnsafeSlow = function(s) {
			if (typeof s != "number") throw new TypeError("Argument must be a number");
			return T.SlowBuffer(s);
		};
	})), Pe = ft(((U) => {
		var F = Or().Buffer, T = F.isEncoding || function(e) {
			switch (e = "" + e, e && e.toLowerCase()) {
				case "hex":
				case "utf8":
				case "utf-8":
				case "ascii":
				case "binary":
				case "base64":
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
				case "raw": return !0;
				default: return !1;
			}
		};
		function N(e) {
			if (!e) return "utf8";
			for (var d;;) switch (e) {
				case "utf8":
				case "utf-8": return "utf8";
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le": return "utf16le";
				case "latin1":
				case "binary": return "latin1";
				case "base64":
				case "ascii":
				case "hex": return e;
				default:
					if (d) return;
					e = ("" + e).toLowerCase(), d = !0;
			}
		}
		function A(e) {
			var d = N(e);
			if (typeof d != "string" && (F.isEncoding === T || !T(e))) throw new Error("Unknown encoding: " + e);
			return d || e;
		}
		U.StringDecoder = i;
		function i(e) {
			this.encoding = A(e);
			var d;
			switch (this.encoding) {
				case "utf16le":
					this.text = p, this.end = u, d = 4;
					break;
				case "utf8":
					this.fillLast = _, d = 4;
					break;
				case "base64":
					this.text = o, this.end = n, d = 3;
					break;
				default:
					this.write = f, this.end = l;
					return;
			}
			this.lastNeed = 0, this.lastTotal = 0, this.lastChar = F.allocUnsafe(d);
		}
		i.prototype.write = function(e) {
			if (e.length === 0) return "";
			var d, r;
			if (this.lastNeed) {
				if (d = this.fillLast(e), d === void 0) return "";
				r = this.lastNeed, this.lastNeed = 0;
			} else r = 0;
			return r < e.length ? d ? d + this.text(e, r) : this.text(e, r) : d || "";
		}, i.prototype.end = a, i.prototype.text = g, i.prototype.fillLast = function(e) {
			if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
			e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
		};
		function s(e) {
			return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2;
		}
		function t(e, d, r) {
			var c = d.length - 1;
			if (c < r) return 0;
			var w = s(d[c]);
			return w >= 0 ? (w > 0 && (e.lastNeed = w - 1), w) : --c < r || w === -2 ? 0 : (w = s(d[c]), w >= 0 ? (w > 0 && (e.lastNeed = w - 2), w) : --c < r || w === -2 ? 0 : (w = s(d[c]), w >= 0 ? (w > 0 && (w === 2 ? w = 0 : e.lastNeed = w - 3), w) : 0));
		}
		function m(e, d, r) {
			if ((d[0] & 192) !== 128) return e.lastNeed = 0, "�";
			if (e.lastNeed > 1 && d.length > 1) {
				if ((d[1] & 192) !== 128) return e.lastNeed = 1, "�";
				if (e.lastNeed > 2 && d.length > 2 && (d[2] & 192) !== 128) return e.lastNeed = 2, "�";
			}
		}
		function _(e) {
			var d = this.lastTotal - this.lastNeed, r = m(this, e, d);
			if (r !== void 0) return r;
			if (this.lastNeed <= e.length) return e.copy(this.lastChar, d, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
			e.copy(this.lastChar, d, 0, e.length), this.lastNeed -= e.length;
		}
		function g(e, d) {
			var r = t(this, e, d);
			if (!this.lastNeed) return e.toString("utf8", d);
			this.lastTotal = r;
			var c = e.length - (r - this.lastNeed);
			return e.copy(this.lastChar, 0, c), e.toString("utf8", d, c);
		}
		function a(e) {
			var d = e && e.length ? this.write(e) : "";
			return this.lastNeed ? d + "�" : d;
		}
		function p(e, d) {
			if ((e.length - d) % 2 === 0) {
				var r = e.toString("utf16le", d);
				if (r) {
					var c = r.charCodeAt(r.length - 1);
					if (c >= 55296 && c <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1);
				}
				return r;
			}
			return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", d, e.length - 1);
		}
		function u(e) {
			var d = e && e.length ? this.write(e) : "";
			if (this.lastNeed) {
				var r = this.lastTotal - this.lastNeed;
				return d + this.lastChar.toString("utf16le", 0, r);
			}
			return d;
		}
		function o(e, d) {
			var r = (e.length - d) % 3;
			return r === 0 ? e.toString("base64", d) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", d, e.length - r));
		}
		function n(e) {
			var d = e && e.length ? this.write(e) : "";
			return this.lastNeed ? d + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : d;
		}
		function f(e) {
			return e.toString(this.encoding);
		}
		function l(e) {
			return e && e.length ? this.write(e) : "";
		}
	})), ue = ft(((U, F) => {
		var T = Nt().codes.ERR_STREAM_PREMATURE_CLOSE;
		function N(t) {
			var m = !1;
			return function() {
				if (!m) {
					m = !0;
					for (var _ = arguments.length, g = new Array(_), a = 0; a < _; a++) g[a] = arguments[a];
					t.apply(this, g);
				}
			};
		}
		function A() {}
		function i(t) {
			return t.setHeader && typeof t.abort == "function";
		}
		function s(t, m, _) {
			if (typeof m == "function") return s(t, null, m);
			m || (m = {}), _ = N(_ || A);
			var g = m.readable || m.readable !== !1 && t.readable, a = m.writable || m.writable !== !1 && t.writable, p = function() {
				t.writable || o();
			}, u = t._writableState && t._writableState.finished, o = function() {
				a = !1, u = !0, g || _.call(t);
			}, n = t._readableState && t._readableState.endEmitted, f = function() {
				g = !1, n = !0, a || _.call(t);
			}, l = function(c) {
				_.call(t, c);
			}, e = function() {
				var c;
				if (g && !n) return (!t._readableState || !t._readableState.ended) && (c = new T()), _.call(t, c);
				if (a && !u) return (!t._writableState || !t._writableState.ended) && (c = new T()), _.call(t, c);
			}, d = function() {
				t.req.on("finish", o);
			};
			return i(t) ? (t.on("complete", o), t.on("abort", e), t.req ? d() : t.on("request", d)) : a && !t._writableState && (t.on("end", p), t.on("close", p)), t.on("end", f), t.on("finish", o), m.error !== !1 && t.on("error", l), t.on("close", e), function() {
				t.removeListener("complete", o), t.removeListener("abort", e), t.removeListener("request", d), t.req && t.req.removeListener("finish", o), t.removeListener("end", p), t.removeListener("close", p), t.removeListener("finish", o), t.removeListener("end", f), t.removeListener("error", l), t.removeListener("close", e);
			};
		}
		F.exports = s;
	})), Lr = ft(((U, F) => {
		var T;
		function N(c, w, x) {
			return w = A(w), w in c ? Object.defineProperty(c, w, {
				value: x,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : c[w] = x, c;
		}
		function A(c) {
			var w = i(c, "string");
			return typeof w == "symbol" ? w : String(w);
		}
		function i(c, w) {
			if (typeof c != "object" || c === null) return c;
			var x = c[Symbol.toPrimitive];
			if (x !== void 0) {
				var D = x.call(c, w || "default");
				if (typeof D != "object") return D;
				throw new TypeError("@@toPrimitive must return a primitive value.");
			}
			return (w === "string" ? String : Number)(c);
		}
		var s = ue(), t = Symbol("lastResolve"), m = Symbol("lastReject"), _ = Symbol("error"), g = Symbol("ended"), a = Symbol("lastPromise"), p = Symbol("handlePromise"), u = Symbol("stream");
		function o(c, w) {
			return {
				value: c,
				done: w
			};
		}
		function n(c) {
			var w = c[t];
			if (w !== null) {
				var x = c[u].read();
				x !== null && (c[a] = null, c[t] = null, c[m] = null, w(o(x, !1)));
			}
		}
		function f(c) {
			process.nextTick(n, c);
		}
		function l(c, w) {
			return function(x, D) {
				c.then(function() {
					if (w[g]) {
						x(o(void 0, !0));
						return;
					}
					w[p](x, D);
				}, D);
			};
		}
		var e = Object.getPrototypeOf(function() {}), d = Object.setPrototypeOf((T = {
			get stream() {
				return this[u];
			},
			next: function() {
				var w = this, x = this[_];
				if (x !== null) return Promise.reject(x);
				if (this[g]) return Promise.resolve(o(void 0, !0));
				if (this[u].destroyed) return new Promise(function(K, B) {
					process.nextTick(function() {
						w[_] ? B(w[_]) : K(o(void 0, !0));
					});
				});
				var D = this[a], E;
				if (D) E = new Promise(l(D, this));
				else {
					var z = this[u].read();
					if (z !== null) return Promise.resolve(o(z, !1));
					E = new Promise(this[p]);
				}
				return this[a] = E, E;
			}
		}, N(T, Symbol.asyncIterator, function() {
			return this;
		}), N(T, "return", function() {
			var w = this;
			return new Promise(function(x, D) {
				w[u].destroy(null, function(E) {
					if (E) {
						D(E);
						return;
					}
					x(o(void 0, !0));
				});
			});
		}), T), e), r = function(w) {
			var x, D = Object.create(d, (x = {}, N(x, u, {
				value: w,
				writable: !0
			}), N(x, t, {
				value: null,
				writable: !0
			}), N(x, m, {
				value: null,
				writable: !0
			}), N(x, _, {
				value: null,
				writable: !0
			}), N(x, g, {
				value: w._readableState.endEmitted,
				writable: !0
			}), N(x, p, {
				value: function(z, K) {
					var B = D[u].read();
					B ? (D[a] = null, D[t] = null, D[m] = null, z(o(B, !1))) : (D[t] = z, D[m] = K);
				},
				writable: !0
			}), x));
			return D[a] = null, s(w, function(E) {
				if (E && E.code !== "ERR_STREAM_PREMATURE_CLOSE") {
					var z = D[m];
					z !== null && (D[a] = null, D[t] = null, D[m] = null, z(E)), D[_] = E;
					return;
				}
				var K = D[t];
				K !== null && (D[a] = null, D[t] = null, D[m] = null, K(o(void 0, !0))), D[g] = !0;
			}), w.on("readable", f.bind(null, D)), D;
		};
		F.exports = r;
	})), kr = ft(((U, F) => {
		F.exports = function() {
			throw new Error("Readable.from is not available in the browser");
		};
	})), Fe = ft(((U, F) => {
		F.exports = z;
		var T;
		z.ReadableState = E, Lt().EventEmitter;
		var N = function(R, y) {
			return R.listeners(y).length;
		}, A = Le(), i = Dt().Buffer, s = (typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {};
		function t(M) {
			return i.from(M);
		}
		function m(M) {
			return i.isBuffer(M) || M instanceof s;
		}
		var _ = ke(), g;
		_ && _.debuglog ? g = _.debuglog("stream") : g = function() {};
		var a = Br(), p = Ce(), u = Me().getHighWaterMark, o = Nt().codes, n = o.ERR_INVALID_ARG_TYPE, f = o.ERR_STREAM_PUSH_AFTER_EOF, l = o.ERR_METHOD_NOT_IMPLEMENTED, e = o.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, d, r, c;
		Bt()(z, A);
		var w = p.errorOrDestroy, x = [
			"error",
			"close",
			"destroy",
			"pause",
			"resume"
		];
		function D(M, R, y) {
			if (typeof M.prependListener == "function") return M.prependListener(R, y);
			!M._events || !M._events[R] ? M.on(R, y) : Array.isArray(M._events[R]) ? M._events[R].unshift(y) : M._events[R] = [y, M._events[R]];
		}
		function E(M, R, y) {
			T = T || Ot(), M = M || {}, typeof y != "boolean" && (y = R instanceof T), this.objectMode = !!M.objectMode, y && (this.objectMode = this.objectMode || !!M.readableObjectMode), this.highWaterMark = u(this, M, "readableHighWaterMark", y), this.buffer = new a(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = M.emitClose !== !1, this.autoDestroy = !!M.autoDestroy, this.destroyed = !1, this.defaultEncoding = M.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, M.encoding && (d || (d = Pe().StringDecoder), this.decoder = new d(M.encoding), this.encoding = M.encoding);
		}
		function z(M) {
			if (T = T || Ot(), !(this instanceof z)) return new z(M);
			var R = this instanceof T;
			this._readableState = new E(M, this, R), this.readable = !0, M && (typeof M.read == "function" && (this._read = M.read), typeof M.destroy == "function" && (this._destroy = M.destroy)), A.call(this);
		}
		Object.defineProperty(z.prototype, "destroyed", {
			enumerable: !1,
			get: function() {
				return this._readableState === void 0 ? !1 : this._readableState.destroyed;
			},
			set: function(R) {
				this._readableState && (this._readableState.destroyed = R);
			}
		}), z.prototype.destroy = p.destroy, z.prototype._undestroy = p.undestroy, z.prototype._destroy = function(M, R) {
			R(M);
		}, z.prototype.push = function(M, R) {
			var y = this._readableState, V;
			return y.objectMode ? V = !0 : typeof M == "string" && (R = R || y.defaultEncoding, R !== y.encoding && (M = i.from(M, R), R = ""), V = !0), K(this, M, R, !1, V);
		}, z.prototype.unshift = function(M) {
			return K(this, M, null, !0, !1);
		};
		function K(M, R, y, V, Z) {
			g("readableAddChunk", R);
			var k = M._readableState;
			if (R === null) k.reading = !1, Q(M, k);
			else {
				var C;
				if (Z || (C = L(k, R)), C) w(M, C);
				else if (k.objectMode || R && R.length > 0) if (typeof R != "string" && !k.objectMode && Object.getPrototypeOf(R) !== i.prototype && (R = t(R)), V) k.endEmitted ? w(M, new e()) : B(M, k, R, !0);
				else if (k.ended) w(M, new f());
				else {
					if (k.destroyed) return !1;
					k.reading = !1, k.decoder && !y ? (R = k.decoder.write(R), k.objectMode || R.length !== 0 ? B(M, k, R, !1) : pt(M, k)) : B(M, k, R, !1);
				}
				else V || (k.reading = !1, pt(M, k));
			}
			return !k.ended && (k.length < k.highWaterMark || k.length === 0);
		}
		function B(M, R, y, V) {
			R.flowing && R.length === 0 && !R.sync ? (R.awaitDrain = 0, M.emit("data", y)) : (R.length += R.objectMode ? 1 : y.length, V ? R.buffer.unshift(y) : R.buffer.push(y), R.needReadable && dt(M)), pt(M, R);
		}
		function L(M, R) {
			var y;
			return !m(R) && typeof R != "string" && R !== void 0 && !M.objectMode && (y = new n("chunk", [
				"string",
				"Buffer",
				"Uint8Array"
			], R)), y;
		}
		z.prototype.isPaused = function() {
			return this._readableState.flowing === !1;
		}, z.prototype.setEncoding = function(M) {
			d || (d = Pe().StringDecoder);
			var R = new d(M);
			this._readableState.decoder = R, this._readableState.encoding = this._readableState.decoder.encoding;
			for (var y = this._readableState.buffer.head, V = ""; y !== null;) V += R.write(y.data), y = y.next;
			return this._readableState.buffer.clear(), V !== "" && this._readableState.buffer.push(V), this._readableState.length = V.length, this;
		};
		var S = 1073741824;
		function q(M) {
			return M >= S ? M = S : (M--, M |= M >>> 1, M |= M >>> 2, M |= M >>> 4, M |= M >>> 8, M |= M >>> 16, M++), M;
		}
		function et(M, R) {
			return M <= 0 || R.length === 0 && R.ended ? 0 : R.objectMode ? 1 : M !== M ? R.flowing && R.length ? R.buffer.head.data.length : R.length : (M > R.highWaterMark && (R.highWaterMark = q(M)), M <= R.length ? M : R.ended ? R.length : (R.needReadable = !0, 0));
		}
		z.prototype.read = function(M) {
			g("read", M), M = parseInt(M, 10);
			var R = this._readableState, y = M;
			if (M !== 0 && (R.emittedReadable = !1), M === 0 && R.needReadable && ((R.highWaterMark !== 0 ? R.length >= R.highWaterMark : R.length > 0) || R.ended)) return g("read: emitReadable", R.length, R.ended), R.length === 0 && R.ended ? W(this) : dt(this), null;
			if (M = et(M, R), M === 0 && R.ended) return R.length === 0 && W(this), null;
			var V = R.needReadable;
			g("need readable", V), (R.length === 0 || R.length - M < R.highWaterMark) && (V = !0, g("length less than watermark", V)), R.ended || R.reading ? (V = !1, g("reading or ended", V)) : V && (g("do read"), R.reading = !0, R.sync = !0, R.length === 0 && (R.needReadable = !0), this._read(R.highWaterMark), R.sync = !1, R.reading || (M = et(y, R)));
			var Z;
			return M > 0 ? Z = b(M, R) : Z = null, Z === null ? (R.needReadable = R.length <= R.highWaterMark, M = 0) : (R.length -= M, R.awaitDrain = 0), R.length === 0 && (R.ended || (R.needReadable = !0), y !== M && R.ended && W(this)), Z !== null && this.emit("data", Z), Z;
		};
		function Q(M, R) {
			if (g("onEofChunk"), !R.ended) {
				if (R.decoder) {
					var y = R.decoder.end();
					y && y.length && (R.buffer.push(y), R.length += R.objectMode ? 1 : y.length);
				}
				R.ended = !0, R.sync ? dt(M) : (R.needReadable = !1, R.emittedReadable || (R.emittedReadable = !0, nt(M)));
			}
		}
		function dt(M) {
			var R = M._readableState;
			g("emitReadable", R.needReadable, R.emittedReadable), R.needReadable = !1, R.emittedReadable || (g("emitReadable", R.flowing), R.emittedReadable = !0, process.nextTick(nt, M));
		}
		function nt(M) {
			var R = M._readableState;
			g("emitReadable_", R.destroyed, R.length, R.ended), !R.destroyed && (R.length || R.ended) && (M.emit("readable"), R.emittedReadable = !1), R.needReadable = !R.flowing && !R.ended && R.length <= R.highWaterMark, I(M);
		}
		function pt(M, R) {
			R.readingMore || (R.readingMore = !0, process.nextTick(j, M, R));
		}
		function j(M, R) {
			for (; !R.reading && !R.ended && (R.length < R.highWaterMark || R.flowing && R.length === 0);) {
				var y = R.length;
				if (g("maybeReadMore read 0"), M.read(0), y === R.length) break;
			}
			R.readingMore = !1;
		}
		z.prototype._read = function(M) {
			w(this, new l("_read()"));
		}, z.prototype.pipe = function(M, R) {
			var y = this, V = this._readableState;
			switch (V.pipesCount) {
				case 0:
					V.pipes = M;
					break;
				case 1:
					V.pipes = [V.pipes, M];
					break;
				default:
					V.pipes.push(M);
					break;
			}
			V.pipesCount += 1, g("pipe count=%d opts=%j", V.pipesCount, R);
			var Z = (!R || R.end !== !1) && M !== process.stdout && M !== process.stderr ? C : mt;
			V.endEmitted ? process.nextTick(Z) : y.once("end", Z), M.on("unpipe", k);
			function k(O, h) {
				g("onunpipe"), O === y && h && h.hasUnpiped === !1 && (h.hasUnpiped = !0, it());
			}
			function C() {
				g("onend"), M.end();
			}
			var Y = $(y);
			M.on("drain", Y);
			var rt = !1;
			function it() {
				g("cleanup"), M.removeListener("close", ht), M.removeListener("finish", ot), M.removeListener("drain", Y), M.removeListener("error", ct), M.removeListener("unpipe", k), y.removeListener("end", C), y.removeListener("end", mt), y.removeListener("data", H), rt = !0, V.awaitDrain && (!M._writableState || M._writableState.needDrain) && Y();
			}
			y.on("data", H);
			function H(O) {
				g("ondata");
				var h = M.write(O);
				g("dest.write", h), h === !1 && ((V.pipesCount === 1 && V.pipes === M || V.pipesCount > 1 && ut(V.pipes, M) !== -1) && !rt && (g("false write response, pause", V.awaitDrain), V.awaitDrain++), y.pause());
			}
			function ct(O) {
				g("onerror", O), mt(), M.removeListener("error", ct), N(M, "error") === 0 && w(M, O);
			}
			D(M, "error", ct);
			function ht() {
				M.removeListener("finish", ot), mt();
			}
			M.once("close", ht);
			function ot() {
				g("onfinish"), M.removeListener("close", ht), mt();
			}
			M.once("finish", ot);
			function mt() {
				g("unpipe"), y.unpipe(M);
			}
			return M.emit("pipe", y), V.flowing || (g("pipe resume"), y.resume()), M;
		};
		function $(M) {
			return function() {
				var y = M._readableState;
				g("pipeOnDrain", y.awaitDrain), y.awaitDrain && y.awaitDrain--, y.awaitDrain === 0 && N(M, "data") && (y.flowing = !0, I(M));
			};
		}
		z.prototype.unpipe = function(M) {
			var R = this._readableState, y = { hasUnpiped: !1 };
			if (R.pipesCount === 0) return this;
			if (R.pipesCount === 1) return M && M !== R.pipes ? this : (M || (M = R.pipes), R.pipes = null, R.pipesCount = 0, R.flowing = !1, M && M.emit("unpipe", this, y), this);
			if (!M) {
				var V = R.pipes, Z = R.pipesCount;
				R.pipes = null, R.pipesCount = 0, R.flowing = !1;
				for (var k = 0; k < Z; k++) V[k].emit("unpipe", this, { hasUnpiped: !1 });
				return this;
			}
			var C = ut(R.pipes, M);
			return C === -1 ? this : (R.pipes.splice(C, 1), R.pipesCount -= 1, R.pipesCount === 1 && (R.pipes = R.pipes[0]), M.emit("unpipe", this, y), this);
		}, z.prototype.on = function(M, R) {
			var y = A.prototype.on.call(this, M, R), V = this._readableState;
			return M === "data" ? (V.readableListening = this.listenerCount("readable") > 0, V.flowing !== !1 && this.resume()) : M === "readable" && !V.endEmitted && !V.readableListening && (V.readableListening = V.needReadable = !0, V.flowing = !1, V.emittedReadable = !1, g("on readable", V.length, V.reading), V.length ? dt(this) : V.reading || process.nextTick(st, this)), y;
		}, z.prototype.addListener = z.prototype.on, z.prototype.removeListener = function(M, R) {
			var y = A.prototype.removeListener.call(this, M, R);
			return M === "readable" && process.nextTick(lt, this), y;
		}, z.prototype.removeAllListeners = function(M) {
			var R = A.prototype.removeAllListeners.apply(this, arguments);
			return (M === "readable" || M === void 0) && process.nextTick(lt, this), R;
		};
		function lt(M) {
			var R = M._readableState;
			R.readableListening = M.listenerCount("readable") > 0, R.resumeScheduled && !R.paused ? R.flowing = !0 : M.listenerCount("data") > 0 && M.resume();
		}
		function st(M) {
			g("readable nexttick read 0"), M.read(0);
		}
		z.prototype.resume = function() {
			var M = this._readableState;
			return M.flowing || (g("resume"), M.flowing = !M.readableListening, at(this, M)), M.paused = !1, this;
		};
		function at(M, R) {
			R.resumeScheduled || (R.resumeScheduled = !0, process.nextTick(yt, M, R));
		}
		function yt(M, R) {
			g("resume", R.reading), R.reading || M.read(0), R.resumeScheduled = !1, M.emit("resume"), I(M), R.flowing && !R.reading && M.read(0);
		}
		z.prototype.pause = function() {
			return g("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (g("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
		};
		function I(M) {
			var R = M._readableState;
			for (g("flow", R.flowing); R.flowing && M.read() !== null;);
		}
		z.prototype.wrap = function(M) {
			var R = this, y = this._readableState, V = !1;
			M.on("end", function() {
				if (g("wrapped end"), y.decoder && !y.ended) {
					var C = y.decoder.end();
					C && C.length && R.push(C);
				}
				R.push(null);
			}), M.on("data", function(C) {
				g("wrapped data"), y.decoder && (C = y.decoder.write(C)), !(y.objectMode && C == null) && (!y.objectMode && (!C || !C.length) || R.push(C) || (V = !0, M.pause()));
			});
			for (var Z in M) this[Z] === void 0 && typeof M[Z] == "function" && (this[Z] = (function(Y) {
				return function() {
					return M[Y].apply(M, arguments);
				};
			})(Z));
			for (var k = 0; k < x.length; k++) M.on(x[k], this.emit.bind(this, x[k]));
			return this._read = function(C) {
				g("wrapped _read", C), V && (V = !1, M.resume());
			}, this;
		}, typeof Symbol == "function" && (z.prototype[Symbol.asyncIterator] = function() {
			return r === void 0 && (r = Lr()), r(this);
		}), Object.defineProperty(z.prototype, "readableHighWaterMark", {
			enumerable: !1,
			get: function() {
				return this._readableState.highWaterMark;
			}
		}), Object.defineProperty(z.prototype, "readableBuffer", {
			enumerable: !1,
			get: function() {
				return this._readableState && this._readableState.buffer;
			}
		}), Object.defineProperty(z.prototype, "readableFlowing", {
			enumerable: !1,
			get: function() {
				return this._readableState.flowing;
			},
			set: function(R) {
				this._readableState && (this._readableState.flowing = R);
			}
		}), z._fromList = b, Object.defineProperty(z.prototype, "readableLength", {
			enumerable: !1,
			get: function() {
				return this._readableState.length;
			}
		});
		function b(M, R) {
			if (R.length === 0) return null;
			var y;
			return R.objectMode ? y = R.buffer.shift() : !M || M >= R.length ? (R.decoder ? y = R.buffer.join("") : R.buffer.length === 1 ? y = R.buffer.first() : y = R.buffer.concat(R.length), R.buffer.clear()) : y = R.buffer.consume(M, R.decoder), y;
		}
		function W(M) {
			var R = M._readableState;
			g("endReadable", R.endEmitted), R.endEmitted || (R.ended = !0, process.nextTick(X, R, M));
		}
		function X(M, R) {
			if (g("endReadableNT", M.endEmitted, M.length), !M.endEmitted && M.length === 0 && (M.endEmitted = !0, R.readable = !1, R.emit("end"), M.autoDestroy)) {
				var y = R._writableState;
				(!y || y.autoDestroy && y.finished) && R.destroy();
			}
		}
		typeof Symbol == "function" && (z.from = function(M, R) {
			return c === void 0 && (c = kr()), c(z, M, R);
		});
		function ut(M, R) {
			for (var y = 0, V = M.length; y < V; y++) if (M[y] === R) return y;
			return -1;
		}
	})), Ue = ft(((U, F) => {
		F.exports = _;
		var T = Nt().codes, N = T.ERR_METHOD_NOT_IMPLEMENTED, A = T.ERR_MULTIPLE_CALLBACK, i = T.ERR_TRANSFORM_ALREADY_TRANSFORMING, s = T.ERR_TRANSFORM_WITH_LENGTH_0, t = Ot();
		Bt()(_, t);
		function m(p, u) {
			var o = this._transformState;
			o.transforming = !1;
			var n = o.writecb;
			if (n === null) return this.emit("error", new A());
			o.writechunk = null, o.writecb = null, u != null && this.push(u), n(p);
			var f = this._readableState;
			f.reading = !1, (f.needReadable || f.length < f.highWaterMark) && this._read(f.highWaterMark);
		}
		function _(p) {
			if (!(this instanceof _)) return new _(p);
			t.call(this, p), this._transformState = {
				afterTransform: m.bind(this),
				needTransform: !1,
				transforming: !1,
				writecb: null,
				writechunk: null,
				writeencoding: null
			}, this._readableState.needReadable = !0, this._readableState.sync = !1, p && (typeof p.transform == "function" && (this._transform = p.transform), typeof p.flush == "function" && (this._flush = p.flush)), this.on("prefinish", g);
		}
		function g() {
			var p = this;
			typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(u, o) {
				a(p, u, o);
			}) : a(this, null, null);
		}
		_.prototype.push = function(p, u) {
			return this._transformState.needTransform = !1, t.prototype.push.call(this, p, u);
		}, _.prototype._transform = function(p, u, o) {
			o(new N("_transform()"));
		}, _.prototype._write = function(p, u, o) {
			var n = this._transformState;
			if (n.writecb = o, n.writechunk = p, n.writeencoding = u, !n.transforming) {
				var f = this._readableState;
				(n.needTransform || f.needReadable || f.length < f.highWaterMark) && this._read(f.highWaterMark);
			}
		}, _.prototype._read = function(p) {
			var u = this._transformState;
			u.writechunk !== null && !u.transforming ? (u.transforming = !0, this._transform(u.writechunk, u.writeencoding, u.afterTransform)) : u.needTransform = !0;
		}, _.prototype._destroy = function(p, u) {
			t.prototype._destroy.call(this, p, function(o) {
				u(o);
			});
		};
		function a(p, u, o) {
			if (u) return p.emit("error", u);
			if (o != null && p.push(o), p._writableState.length) throw new s();
			if (p._transformState.transforming) throw new i();
			return p.push(null);
		}
	})), Cr = ft(((U, F) => {
		F.exports = N;
		var T = Ue();
		Bt()(N, T);
		function N(A) {
			if (!(this instanceof N)) return new N(A);
			T.call(this, A);
		}
		N.prototype._transform = function(A, i, s) {
			s(null, A);
		};
	})), Mr = ft(((U, F) => {
		var T;
		function N(o) {
			var n = !1;
			return function() {
				n || (n = !0, o.apply(void 0, arguments));
			};
		}
		var A = Nt().codes, i = A.ERR_MISSING_ARGS, s = A.ERR_STREAM_DESTROYED;
		function t(o) {
			if (o) throw o;
		}
		function m(o) {
			return o.setHeader && typeof o.abort == "function";
		}
		function _(o, n, f, l) {
			l = N(l);
			var e = !1;
			o.on("close", function() {
				e = !0;
			}), T === void 0 && (T = ue()), T(o, {
				readable: n,
				writable: f
			}, function(r) {
				if (r) return l(r);
				e = !0, l();
			});
			var d = !1;
			return function(r) {
				if (!e && !d) {
					if (d = !0, m(o)) return o.abort();
					if (typeof o.destroy == "function") return o.destroy();
					l(r || new s("pipe"));
				}
			};
		}
		function g(o) {
			o();
		}
		function a(o, n) {
			return o.pipe(n);
		}
		function p(o) {
			return !o.length || typeof o[o.length - 1] != "function" ? t : o.pop();
		}
		function u() {
			for (var o = arguments.length, n = new Array(o), f = 0; f < o; f++) n[f] = arguments[f];
			var l = p(n);
			if (Array.isArray(n[0]) && (n = n[0]), n.length < 2) throw new i("streams");
			var e, d = n.map(function(r, c) {
				var w = c < n.length - 1;
				return _(r, w, c > 0, function(x) {
					e || (e = x), x && d.forEach(g), !w && (d.forEach(g), l(e));
				});
			});
			return n.reduce(a);
		}
		F.exports = u;
	})), je = ft(((U, F) => {
		F.exports = N;
		var T = Lt().EventEmitter;
		Bt()(N, T), N.Readable = Fe(), N.Writable = Re(), N.Duplex = Ot(), N.Transform = Ue(), N.PassThrough = Cr(), N.finished = ue(), N.pipeline = Mr(), N.Stream = N;
		function N() {
			T.call(this);
		}
		N.prototype.pipe = function(A, i) {
			var s = this;
			function t(o) {
				A.writable && A.write(o) === !1 && s.pause && s.pause();
			}
			s.on("data", t);
			function m() {
				s.readable && s.resume && s.resume();
			}
			A.on("drain", m), !A._isStdio && (!i || i.end !== !1) && (s.on("end", g), s.on("close", a));
			var _ = !1;
			function g() {
				_ || (_ = !0, A.end());
			}
			function a() {
				_ || (_ = !0, typeof A.destroy == "function" && A.destroy());
			}
			function p(o) {
				if (u(), T.listenerCount(this, "error") === 0) throw o;
			}
			s.on("error", p), A.on("error", p);
			function u() {
				s.removeListener("data", t), A.removeListener("drain", m), s.removeListener("end", g), s.removeListener("close", a), s.removeListener("error", p), A.removeListener("error", p), s.removeListener("end", u), s.removeListener("close", u), A.removeListener("close", u);
			}
			return s.on("end", u), s.on("close", u), A.on("close", u), A.emit("pipe", s), A;
		};
	})), Rr = ft(((U, F) => {
		var T = xt().Buffer, N = or(), A = be(), i = F.exports;
		i.encodings = null, i.defaultCharUnicode = "�", i.defaultCharSingleByte = "?", i.encode = function(m, _, g) {
			m = "" + (m || "");
			var a = i.getEncoder(_, g), p = a.write(m), u = a.end();
			return u && u.length > 0 ? T.concat([p, u]) : p;
		}, i.decode = function(m, _, g) {
			typeof m == "string" && (i.skipDecodeWarning || (console.error("Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding"), i.skipDecodeWarning = !0), m = T.from("" + (m || ""), "binary"));
			var a = i.getDecoder(_, g), p = a.write(m), u = a.end();
			return u ? p + u : p;
		}, i.encodingExists = function(m) {
			try {
				return i.getCodec(m), !0;
			} catch {
				return !1;
			}
		}, i.toEncoding = i.encode, i.fromEncoding = i.decode, i._codecDataCache = { __proto__: null }, i.getCodec = function(m) {
			if (!i.encodings) {
				var _ = xr();
				i.encodings = { __proto__: null }, A(i.encodings, _);
			}
			for (var g = i._canonicalizeEncoding(m), a = {};;) {
				var p = i._codecDataCache[g];
				if (p) return p;
				var u = i.encodings[g];
				switch (typeof u) {
					case "string":
						g = u;
						break;
					case "object":
						for (var o in u) a[o] = u[o];
						a.encodingName || (a.encodingName = g), g = u.type;
						break;
					case "function": return a.encodingName || (a.encodingName = g), p = new u(a, i), i._codecDataCache[a.encodingName] = p, p;
					default: throw new Error("Encoding not recognized: '" + m + "' (searched as: '" + g + "')");
				}
			}
		}, i._canonicalizeEncoding = function(t) {
			return ("" + t).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
		}, i.getEncoder = function(m, _) {
			var g = i.getCodec(m), a = new g.encoder(_, g);
			return g.bomAware && _ && _.addBOM && (a = new N.PrependBOM(a, _)), a;
		}, i.getDecoder = function(m, _) {
			var g = i.getCodec(m), a = new g.decoder(_, g);
			return g.bomAware && !(_ && _.stripBOM === !1) && (a = new N.StripBOM(a, _)), a;
		}, i.enableStreamingAPI = function(m) {
			if (!i.supportsStreams) {
				var _ = Dr()(m);
				i.IconvLiteEncoderStream = _.IconvLiteEncoderStream, i.IconvLiteDecoderStream = _.IconvLiteDecoderStream, i.encodeStream = function(a, p) {
					return new i.IconvLiteEncoderStream(i.getEncoder(a, p), p);
				}, i.decodeStream = function(a, p) {
					return new i.IconvLiteDecoderStream(i.getDecoder(a, p), p);
				}, i.supportsStreams = !0;
			}
		};
		var s;
		try {
			s = je();
		} catch {}
		s && s.Transform ? i.enableStreamingAPI(s) : i.encodeStream = i.decodeStream = function() {
			throw new Error("iconv-lite Streaming API is not enabled. Use iconv.enableStreamingAPI(require('stream')); to enable it.");
		};
	})), ze = ft(((U) => {
		(function(F) {
			F.parser = function(I, b) {
				return new N(I, b);
			}, F.SAXParser = N, F.SAXStream = g, F.createStream = _, F.MAX_BUFFER_LENGTH = 64 * 1024;
			var T = [
				"comment",
				"sgmlDecl",
				"textNode",
				"tagName",
				"doctype",
				"procInstName",
				"procInstBody",
				"entity",
				"attribName",
				"attribValue",
				"cdata",
				"script"
			];
			F.EVENTS = [
				"text",
				"processinginstruction",
				"sgmldeclaration",
				"doctype",
				"comment",
				"opentagstart",
				"attribute",
				"opentag",
				"closetag",
				"opencdata",
				"cdata",
				"closecdata",
				"error",
				"end",
				"ready",
				"script",
				"opennamespace",
				"closenamespace"
			];
			function N(I, b) {
				if (!(this instanceof N)) return new N(I, b);
				var W = this;
				i(W), W.q = W.c = "", W.bufferCheckPosition = F.MAX_BUFFER_LENGTH, W.opt = b || {}, W.opt.lowercase = W.opt.lowercase || W.opt.lowercasetags, W.looseCase = W.opt.lowercase ? "toLowerCase" : "toUpperCase", W.tags = [], W.closed = W.closedRoot = W.sawRoot = !1, W.tag = W.error = null, W.strict = !!I, W.noscript = !!(I || W.opt.noscript), W.state = E.BEGIN, W.strictEntities = W.opt.strictEntities, W.ENTITIES = W.strictEntities ? Object.create(F.XML_ENTITIES) : Object.create(F.ENTITIES), W.attribList = [], W.opt.xmlns && (W.ns = Object.create(n)), W.opt.unquotedAttributeValues === void 0 && (W.opt.unquotedAttributeValues = !I), W.trackPosition = W.opt.position !== !1, W.trackPosition && (W.position = W.line = W.column = 0), K(W, "onready");
			}
			Object.create || (Object.create = function(I) {
				function b() {}
				return b.prototype = I, new b();
			}), Object.keys || (Object.keys = function(I) {
				var b = [];
				for (var W in I) I.hasOwnProperty(W) && b.push(W);
				return b;
			});
			function A(I) {
				for (var b = Math.max(F.MAX_BUFFER_LENGTH, 10), W = 0, X = 0, ut = T.length; X < ut; X++) {
					var M = I[T[X]].length;
					if (M > b) switch (T[X]) {
						case "textNode":
							L(I);
							break;
						case "cdata":
							B(I, "oncdata", I.cdata), I.cdata = "";
							break;
						case "script":
							B(I, "onscript", I.script), I.script = "";
							break;
						default: q(I, "Max buffer length exceeded: " + T[X]);
					}
					W = Math.max(W, M);
				}
				I.bufferCheckPosition = F.MAX_BUFFER_LENGTH - W + I.position;
			}
			function i(I) {
				for (var b = 0, W = T.length; b < W; b++) I[T[b]] = "";
			}
			function s(I) {
				L(I), I.cdata !== "" && (B(I, "oncdata", I.cdata), I.cdata = ""), I.script !== "" && (B(I, "onscript", I.script), I.script = "");
			}
			N.prototype = {
				end: function() {
					et(this);
				},
				write: yt,
				resume: function() {
					return this.error = null, this;
				},
				close: function() {
					return this.write(null);
				},
				flush: function() {
					s(this);
				}
			};
			var t;
			try {
				t = je().Stream;
			} catch {
				t = function() {};
			}
			t || (t = function() {});
			var m = F.EVENTS.filter(function(I) {
				return I !== "error" && I !== "end";
			});
			function _(I, b) {
				return new g(I, b);
			}
			function g(I, b) {
				if (!(this instanceof g)) return new g(I, b);
				t.apply(this), this._parser = new N(I, b), this.writable = !0, this.readable = !0;
				var W = this;
				this._parser.onend = function() {
					W.emit("end");
				}, this._parser.onerror = function(X) {
					W.emit("error", X), W._parser.error = null;
				}, this._decoder = null, m.forEach(function(X) {
					Object.defineProperty(W, "on" + X, {
						get: function() {
							return W._parser["on" + X];
						},
						set: function(ut) {
							if (!ut) return W.removeAllListeners(X), W._parser["on" + X] = ut, ut;
							W.on(X, ut);
						},
						enumerable: !0,
						configurable: !1
					});
				});
			}
			g.prototype = Object.create(t.prototype, { constructor: { value: g } }), g.prototype.write = function(I) {
				if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(I)) {
					if (!this._decoder) {
						var b = _e().StringDecoder;
						this._decoder = new b("utf8");
					}
					I = this._decoder.write(I);
				}
				return this._parser.write(I.toString()), this.emit("data", I), !0;
			}, g.prototype.end = function(I) {
				return I && I.length && this.write(I), this._parser.end(), !0;
			}, g.prototype.on = function(I, b) {
				var W = this;
				return !W._parser["on" + I] && m.indexOf(I) !== -1 && (W._parser["on" + I] = function() {
					var X = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
					X.splice(0, 0, I), W.emit.apply(W, X);
				}), t.prototype.on.call(W, I, b);
			};
			var a = "[CDATA[", p = "DOCTYPE", u = "http://www.w3.org/XML/1998/namespace", o = "http://www.w3.org/2000/xmlns/", n = {
				xml: u,
				xmlns: o
			}, f = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, l = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, e = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, d = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
			function r(I) {
				return I === " " || I === `
` || I === "\r" || I === "	";
			}
			function c(I) {
				return I === "\"" || I === "'";
			}
			function w(I) {
				return I === ">" || r(I);
			}
			function x(I, b) {
				return I.test(b);
			}
			function D(I, b) {
				return !x(I, b);
			}
			var E = 0;
			F.STATE = {
				BEGIN: E++,
				BEGIN_WHITESPACE: E++,
				TEXT: E++,
				TEXT_ENTITY: E++,
				OPEN_WAKA: E++,
				SGML_DECL: E++,
				SGML_DECL_QUOTED: E++,
				DOCTYPE: E++,
				DOCTYPE_QUOTED: E++,
				DOCTYPE_DTD: E++,
				DOCTYPE_DTD_QUOTED: E++,
				COMMENT_STARTING: E++,
				COMMENT: E++,
				COMMENT_ENDING: E++,
				COMMENT_ENDED: E++,
				CDATA: E++,
				CDATA_ENDING: E++,
				CDATA_ENDING_2: E++,
				PROC_INST: E++,
				PROC_INST_BODY: E++,
				PROC_INST_ENDING: E++,
				OPEN_TAG: E++,
				OPEN_TAG_SLASH: E++,
				ATTRIB: E++,
				ATTRIB_NAME: E++,
				ATTRIB_NAME_SAW_WHITE: E++,
				ATTRIB_VALUE: E++,
				ATTRIB_VALUE_QUOTED: E++,
				ATTRIB_VALUE_CLOSED: E++,
				ATTRIB_VALUE_UNQUOTED: E++,
				ATTRIB_VALUE_ENTITY_Q: E++,
				ATTRIB_VALUE_ENTITY_U: E++,
				CLOSE_TAG: E++,
				CLOSE_TAG_SAW_WHITE: E++,
				SCRIPT: E++,
				SCRIPT_ENDING: E++
			}, F.XML_ENTITIES = {
				amp: "&",
				gt: ">",
				lt: "<",
				quot: "\"",
				apos: "'"
			}, F.ENTITIES = {
				amp: "&",
				gt: ">",
				lt: "<",
				quot: "\"",
				apos: "'",
				AElig: 198,
				Aacute: 193,
				Acirc: 194,
				Agrave: 192,
				Aring: 197,
				Atilde: 195,
				Auml: 196,
				Ccedil: 199,
				ETH: 208,
				Eacute: 201,
				Ecirc: 202,
				Egrave: 200,
				Euml: 203,
				Iacute: 205,
				Icirc: 206,
				Igrave: 204,
				Iuml: 207,
				Ntilde: 209,
				Oacute: 211,
				Ocirc: 212,
				Ograve: 210,
				Oslash: 216,
				Otilde: 213,
				Ouml: 214,
				THORN: 222,
				Uacute: 218,
				Ucirc: 219,
				Ugrave: 217,
				Uuml: 220,
				Yacute: 221,
				aacute: 225,
				acirc: 226,
				aelig: 230,
				agrave: 224,
				aring: 229,
				atilde: 227,
				auml: 228,
				ccedil: 231,
				eacute: 233,
				ecirc: 234,
				egrave: 232,
				eth: 240,
				euml: 235,
				iacute: 237,
				icirc: 238,
				igrave: 236,
				iuml: 239,
				ntilde: 241,
				oacute: 243,
				ocirc: 244,
				ograve: 242,
				oslash: 248,
				otilde: 245,
				ouml: 246,
				szlig: 223,
				thorn: 254,
				uacute: 250,
				ucirc: 251,
				ugrave: 249,
				uuml: 252,
				yacute: 253,
				yuml: 255,
				copy: 169,
				reg: 174,
				nbsp: 160,
				iexcl: 161,
				cent: 162,
				pound: 163,
				curren: 164,
				yen: 165,
				brvbar: 166,
				sect: 167,
				uml: 168,
				ordf: 170,
				laquo: 171,
				not: 172,
				shy: 173,
				macr: 175,
				deg: 176,
				plusmn: 177,
				sup1: 185,
				sup2: 178,
				sup3: 179,
				acute: 180,
				micro: 181,
				para: 182,
				middot: 183,
				cedil: 184,
				ordm: 186,
				raquo: 187,
				frac14: 188,
				frac12: 189,
				frac34: 190,
				iquest: 191,
				times: 215,
				divide: 247,
				OElig: 338,
				oelig: 339,
				Scaron: 352,
				scaron: 353,
				Yuml: 376,
				fnof: 402,
				circ: 710,
				tilde: 732,
				Alpha: 913,
				Beta: 914,
				Gamma: 915,
				Delta: 916,
				Epsilon: 917,
				Zeta: 918,
				Eta: 919,
				Theta: 920,
				Iota: 921,
				Kappa: 922,
				Lambda: 923,
				Mu: 924,
				Nu: 925,
				Xi: 926,
				Omicron: 927,
				Pi: 928,
				Rho: 929,
				Sigma: 931,
				Tau: 932,
				Upsilon: 933,
				Phi: 934,
				Chi: 935,
				Psi: 936,
				Omega: 937,
				alpha: 945,
				beta: 946,
				gamma: 947,
				delta: 948,
				epsilon: 949,
				zeta: 950,
				eta: 951,
				theta: 952,
				iota: 953,
				kappa: 954,
				lambda: 955,
				mu: 956,
				nu: 957,
				xi: 958,
				omicron: 959,
				pi: 960,
				rho: 961,
				sigmaf: 962,
				sigma: 963,
				tau: 964,
				upsilon: 965,
				phi: 966,
				chi: 967,
				psi: 968,
				omega: 969,
				thetasym: 977,
				upsih: 978,
				piv: 982,
				ensp: 8194,
				emsp: 8195,
				thinsp: 8201,
				zwnj: 8204,
				zwj: 8205,
				lrm: 8206,
				rlm: 8207,
				ndash: 8211,
				mdash: 8212,
				lsquo: 8216,
				rsquo: 8217,
				sbquo: 8218,
				ldquo: 8220,
				rdquo: 8221,
				bdquo: 8222,
				dagger: 8224,
				Dagger: 8225,
				bull: 8226,
				hellip: 8230,
				permil: 8240,
				prime: 8242,
				Prime: 8243,
				lsaquo: 8249,
				rsaquo: 8250,
				oline: 8254,
				frasl: 8260,
				euro: 8364,
				image: 8465,
				weierp: 8472,
				real: 8476,
				trade: 8482,
				alefsym: 8501,
				larr: 8592,
				uarr: 8593,
				rarr: 8594,
				darr: 8595,
				harr: 8596,
				crarr: 8629,
				lArr: 8656,
				uArr: 8657,
				rArr: 8658,
				dArr: 8659,
				hArr: 8660,
				forall: 8704,
				part: 8706,
				exist: 8707,
				empty: 8709,
				nabla: 8711,
				isin: 8712,
				notin: 8713,
				ni: 8715,
				prod: 8719,
				sum: 8721,
				minus: 8722,
				lowast: 8727,
				radic: 8730,
				prop: 8733,
				infin: 8734,
				ang: 8736,
				and: 8743,
				or: 8744,
				cap: 8745,
				cup: 8746,
				int: 8747,
				there4: 8756,
				sim: 8764,
				cong: 8773,
				asymp: 8776,
				ne: 8800,
				equiv: 8801,
				le: 8804,
				ge: 8805,
				sub: 8834,
				sup: 8835,
				nsub: 8836,
				sube: 8838,
				supe: 8839,
				oplus: 8853,
				otimes: 8855,
				perp: 8869,
				sdot: 8901,
				lceil: 8968,
				rceil: 8969,
				lfloor: 8970,
				rfloor: 8971,
				lang: 9001,
				rang: 9002,
				loz: 9674,
				spades: 9824,
				clubs: 9827,
				hearts: 9829,
				diams: 9830
			}, Object.keys(F.ENTITIES).forEach(function(I) {
				var b = F.ENTITIES[I], W = typeof b == "number" ? String.fromCharCode(b) : b;
				F.ENTITIES[I] = W;
			});
			for (var z in F.STATE) F.STATE[F.STATE[z]] = z;
			E = F.STATE;
			function K(I, b, W) {
				I[b] && I[b](W);
			}
			function B(I, b, W) {
				I.textNode && L(I), K(I, b, W);
			}
			function L(I) {
				I.textNode = S(I.opt, I.textNode), I.textNode && K(I, "ontext", I.textNode), I.textNode = "";
			}
			function S(I, b) {
				return I.trim && (b = b.trim()), I.normalize && (b = b.replace(/\s+/g, " ")), b;
			}
			function q(I, b) {
				return L(I), I.trackPosition && (b += `
Line: ` + I.line + `
Column: ` + I.column + `
Char: ` + I.c), b = new Error(b), I.error = b, K(I, "onerror", b), I;
			}
			function et(I) {
				return I.sawRoot && !I.closedRoot && Q(I, "Unclosed root tag"), I.state !== E.BEGIN && I.state !== E.BEGIN_WHITESPACE && I.state !== E.TEXT && q(I, "Unexpected end"), L(I), I.c = "", I.closed = !0, K(I, "onend"), N.call(I, I.strict, I.opt), I;
			}
			function Q(I, b) {
				if (typeof I != "object" || !(I instanceof N)) throw new Error("bad call to strictFail");
				I.strict && q(I, b);
			}
			function dt(I) {
				I.strict || (I.tagName = I.tagName[I.looseCase]());
				var b = I.tags[I.tags.length - 1] || I, W = I.tag = {
					name: I.tagName,
					attributes: {}
				};
				I.opt.xmlns && (W.ns = b.ns), I.attribList.length = 0, B(I, "onopentagstart", W);
			}
			function nt(I, b) {
				var W = I.indexOf(":") < 0 ? ["", I] : I.split(":"), X = W[0], ut = W[1];
				return b && I === "xmlns" && (X = "xmlns", ut = ""), {
					prefix: X,
					local: ut
				};
			}
			function pt(I) {
				if (I.strict || (I.attribName = I.attribName[I.looseCase]()), I.attribList.indexOf(I.attribName) !== -1 || I.tag.attributes.hasOwnProperty(I.attribName)) {
					I.attribName = I.attribValue = "";
					return;
				}
				if (I.opt.xmlns) {
					var b = nt(I.attribName, !0), W = b.prefix, X = b.local;
					if (W === "xmlns") if (X === "xml" && I.attribValue !== u) Q(I, "xml: prefix must be bound to " + u + `
Actual: ` + I.attribValue);
					else if (X === "xmlns" && I.attribValue !== o) Q(I, "xmlns: prefix must be bound to " + o + `
Actual: ` + I.attribValue);
					else {
						var ut = I.tag, M = I.tags[I.tags.length - 1] || I;
						ut.ns === M.ns && (ut.ns = Object.create(M.ns)), ut.ns[X] = I.attribValue;
					}
					I.attribList.push([I.attribName, I.attribValue]);
				} else I.tag.attributes[I.attribName] = I.attribValue, B(I, "onattribute", {
					name: I.attribName,
					value: I.attribValue
				});
				I.attribName = I.attribValue = "";
			}
			function j(I, b) {
				if (I.opt.xmlns) {
					var W = I.tag, X = nt(I.tagName);
					W.prefix = X.prefix, W.local = X.local, W.uri = W.ns[X.prefix] || "", W.prefix && !W.uri && (Q(I, "Unbound namespace prefix: " + JSON.stringify(I.tagName)), W.uri = X.prefix);
					var ut = I.tags[I.tags.length - 1] || I;
					W.ns && ut.ns !== W.ns && Object.keys(W.ns).forEach(function(H) {
						B(I, "onopennamespace", {
							prefix: H,
							uri: W.ns[H]
						});
					});
					for (var M = 0, R = I.attribList.length; M < R; M++) {
						var y = I.attribList[M], V = y[0], Z = y[1], k = nt(V, !0), C = k.prefix, Y = k.local, rt = C === "" ? "" : W.ns[C] || "", it = {
							name: V,
							value: Z,
							prefix: C,
							local: Y,
							uri: rt
						};
						C && C !== "xmlns" && !rt && (Q(I, "Unbound namespace prefix: " + JSON.stringify(C)), it.uri = C), I.tag.attributes[V] = it, B(I, "onattribute", it);
					}
					I.attribList.length = 0;
				}
				I.tag.isSelfClosing = !!b, I.sawRoot = !0, I.tags.push(I.tag), B(I, "onopentag", I.tag), b || (!I.noscript && I.tagName.toLowerCase() === "script" ? I.state = E.SCRIPT : I.state = E.TEXT, I.tag = null, I.tagName = ""), I.attribName = I.attribValue = "", I.attribList.length = 0;
			}
			function $(I) {
				if (!I.tagName) {
					Q(I, "Weird empty close tag."), I.textNode += "</>", I.state = E.TEXT;
					return;
				}
				if (I.script) {
					if (I.tagName !== "script") {
						I.script += "</" + I.tagName + ">", I.tagName = "", I.state = E.SCRIPT;
						return;
					}
					B(I, "onscript", I.script), I.script = "";
				}
				var b = I.tags.length, W = I.tagName;
				I.strict || (W = W[I.looseCase]());
				for (var X = W; b-- && I.tags[b].name !== X;) Q(I, "Unexpected close tag");
				if (b < 0) {
					Q(I, "Unmatched closing tag: " + I.tagName), I.textNode += "</" + I.tagName + ">", I.state = E.TEXT;
					return;
				}
				I.tagName = W;
				for (var ut = I.tags.length; ut-- > b;) {
					var M = I.tag = I.tags.pop();
					I.tagName = I.tag.name, B(I, "onclosetag", I.tagName);
					var R = {};
					for (var y in M.ns) R[y] = M.ns[y];
					var V = I.tags[I.tags.length - 1] || I;
					I.opt.xmlns && M.ns !== V.ns && Object.keys(M.ns).forEach(function(Z) {
						var k = M.ns[Z];
						B(I, "onclosenamespace", {
							prefix: Z,
							uri: k
						});
					});
				}
				b === 0 && (I.closedRoot = !0), I.tagName = I.attribValue = I.attribName = "", I.attribList.length = 0, I.state = E.TEXT;
			}
			function lt(I) {
				var b = I.entity, W = b.toLowerCase(), X, ut = "";
				return I.ENTITIES[b] ? I.ENTITIES[b] : I.ENTITIES[W] ? I.ENTITIES[W] : (b = W, b.charAt(0) === "#" && (b.charAt(1) === "x" ? (b = b.slice(2), X = parseInt(b, 16), ut = X.toString(16)) : (b = b.slice(1), X = parseInt(b, 10), ut = X.toString(10))), b = b.replace(/^0+/, ""), isNaN(X) || ut.toLowerCase() !== b || X < 0 || X > 1114111 ? (Q(I, "Invalid character entity"), "&" + I.entity + ";") : String.fromCodePoint(X));
			}
			function st(I, b) {
				b === "<" ? (I.state = E.OPEN_WAKA, I.startTagPosition = I.position) : r(b) || (Q(I, "Non-whitespace before first tag."), I.textNode = b, I.state = E.TEXT);
			}
			function at(I, b) {
				var W = "";
				return b < I.length && (W = I.charAt(b)), W;
			}
			function yt(I) {
				var b = this;
				if (this.error) throw this.error;
				if (b.closed) return q(b, "Cannot write after close. Assign an onready handler.");
				if (I === null) return et(b);
				typeof I == "object" && (I = I.toString());
				for (var W = 0, X = ""; X = at(I, W++), b.c = X, !!X;) switch (b.trackPosition && (b.position++, X === `
` ? (b.line++, b.column = 0) : b.column++), b.state) {
					case E.BEGIN:
						if (b.state = E.BEGIN_WHITESPACE, X === "﻿") continue;
						st(b, X);
						continue;
					case E.BEGIN_WHITESPACE:
						st(b, X);
						continue;
					case E.TEXT:
						if (b.sawRoot && !b.closedRoot) {
							for (var M = W - 1; X && X !== "<" && X !== "&";) X = at(I, W++), X && b.trackPosition && (b.position++, X === `
` ? (b.line++, b.column = 0) : b.column++);
							b.textNode += I.substring(M, W - 1);
						}
						X === "<" && !(b.sawRoot && b.closedRoot && !b.strict) ? (b.state = E.OPEN_WAKA, b.startTagPosition = b.position) : (!r(X) && (!b.sawRoot || b.closedRoot) && Q(b, "Text data outside of root node."), X === "&" ? b.state = E.TEXT_ENTITY : b.textNode += X);
						continue;
					case E.SCRIPT:
						X === "<" ? b.state = E.SCRIPT_ENDING : b.script += X;
						continue;
					case E.SCRIPT_ENDING:
						X === "/" ? b.state = E.CLOSE_TAG : (b.script += "<" + X, b.state = E.SCRIPT);
						continue;
					case E.OPEN_WAKA:
						if (X === "!") b.state = E.SGML_DECL, b.sgmlDecl = "";
						else if (!r(X)) if (x(f, X)) b.state = E.OPEN_TAG, b.tagName = X;
						else if (X === "/") b.state = E.CLOSE_TAG, b.tagName = "";
						else if (X === "?") b.state = E.PROC_INST, b.procInstName = b.procInstBody = "";
						else {
							if (Q(b, "Unencoded <"), b.startTagPosition + 1 < b.position) {
								var ut = b.position - b.startTagPosition;
								X = new Array(ut).join(" ") + X;
							}
							b.textNode += "<" + X, b.state = E.TEXT;
						}
						continue;
					case E.SGML_DECL:
						if (b.sgmlDecl + X === "--") {
							b.state = E.COMMENT, b.comment = "", b.sgmlDecl = "";
							continue;
						}
						b.doctype && b.doctype !== !0 && b.sgmlDecl ? (b.state = E.DOCTYPE_DTD, b.doctype += "<!" + b.sgmlDecl + X, b.sgmlDecl = "") : (b.sgmlDecl + X).toUpperCase() === a ? (B(b, "onopencdata"), b.state = E.CDATA, b.sgmlDecl = "", b.cdata = "") : (b.sgmlDecl + X).toUpperCase() === p ? (b.state = E.DOCTYPE, (b.doctype || b.sawRoot) && Q(b, "Inappropriately located doctype declaration"), b.doctype = "", b.sgmlDecl = "") : X === ">" ? (B(b, "onsgmldeclaration", b.sgmlDecl), b.sgmlDecl = "", b.state = E.TEXT) : (c(X) && (b.state = E.SGML_DECL_QUOTED), b.sgmlDecl += X);
						continue;
					case E.SGML_DECL_QUOTED:
						X === b.q && (b.state = E.SGML_DECL, b.q = ""), b.sgmlDecl += X;
						continue;
					case E.DOCTYPE:
						X === ">" ? (b.state = E.TEXT, B(b, "ondoctype", b.doctype), b.doctype = !0) : (b.doctype += X, X === "[" ? b.state = E.DOCTYPE_DTD : c(X) && (b.state = E.DOCTYPE_QUOTED, b.q = X));
						continue;
					case E.DOCTYPE_QUOTED:
						b.doctype += X, X === b.q && (b.q = "", b.state = E.DOCTYPE);
						continue;
					case E.DOCTYPE_DTD:
						X === "]" ? (b.doctype += X, b.state = E.DOCTYPE) : X === "<" ? (b.state = E.OPEN_WAKA, b.startTagPosition = b.position) : c(X) ? (b.doctype += X, b.state = E.DOCTYPE_DTD_QUOTED, b.q = X) : b.doctype += X;
						continue;
					case E.DOCTYPE_DTD_QUOTED:
						b.doctype += X, X === b.q && (b.state = E.DOCTYPE_DTD, b.q = "");
						continue;
					case E.COMMENT:
						X === "-" ? b.state = E.COMMENT_ENDING : b.comment += X;
						continue;
					case E.COMMENT_ENDING:
						X === "-" ? (b.state = E.COMMENT_ENDED, b.comment = S(b.opt, b.comment), b.comment && B(b, "oncomment", b.comment), b.comment = "") : (b.comment += "-" + X, b.state = E.COMMENT);
						continue;
					case E.COMMENT_ENDED:
						X !== ">" ? (Q(b, "Malformed comment"), b.comment += "--" + X, b.state = E.COMMENT) : b.doctype && b.doctype !== !0 ? b.state = E.DOCTYPE_DTD : b.state = E.TEXT;
						continue;
					case E.CDATA:
						for (var M = W - 1; X && X !== "]";) X = at(I, W++), X && b.trackPosition && (b.position++, X === `
` ? (b.line++, b.column = 0) : b.column++);
						b.cdata += I.substring(M, W - 1), X === "]" && (b.state = E.CDATA_ENDING);
						continue;
					case E.CDATA_ENDING:
						X === "]" ? b.state = E.CDATA_ENDING_2 : (b.cdata += "]" + X, b.state = E.CDATA);
						continue;
					case E.CDATA_ENDING_2:
						X === ">" ? (b.cdata && B(b, "oncdata", b.cdata), B(b, "onclosecdata"), b.cdata = "", b.state = E.TEXT) : X === "]" ? b.cdata += "]" : (b.cdata += "]]" + X, b.state = E.CDATA);
						continue;
					case E.PROC_INST:
						X === "?" ? b.state = E.PROC_INST_ENDING : r(X) ? b.state = E.PROC_INST_BODY : b.procInstName += X;
						continue;
					case E.PROC_INST_BODY:
						if (!b.procInstBody && r(X)) continue;
						X === "?" ? b.state = E.PROC_INST_ENDING : b.procInstBody += X;
						continue;
					case E.PROC_INST_ENDING:
						X === ">" ? (B(b, "onprocessinginstruction", {
							name: b.procInstName,
							body: b.procInstBody
						}), b.procInstName = b.procInstBody = "", b.state = E.TEXT) : (b.procInstBody += "?" + X, b.state = E.PROC_INST_BODY);
						continue;
					case E.OPEN_TAG:
						x(l, X) ? b.tagName += X : (dt(b), X === ">" ? j(b) : X === "/" ? b.state = E.OPEN_TAG_SLASH : (r(X) || Q(b, "Invalid character in tag name"), b.state = E.ATTRIB));
						continue;
					case E.OPEN_TAG_SLASH:
						X === ">" ? (j(b, !0), $(b)) : (Q(b, "Forward-slash in opening tag not followed by >"), b.state = E.ATTRIB);
						continue;
					case E.ATTRIB:
						if (r(X)) continue;
						X === ">" ? j(b) : X === "/" ? b.state = E.OPEN_TAG_SLASH : x(f, X) ? (b.attribName = X, b.attribValue = "", b.state = E.ATTRIB_NAME) : Q(b, "Invalid attribute name");
						continue;
					case E.ATTRIB_NAME:
						X === "=" ? b.state = E.ATTRIB_VALUE : X === ">" ? (Q(b, "Attribute without value"), b.attribValue = b.attribName, pt(b), j(b)) : r(X) ? b.state = E.ATTRIB_NAME_SAW_WHITE : x(l, X) ? b.attribName += X : Q(b, "Invalid attribute name");
						continue;
					case E.ATTRIB_NAME_SAW_WHITE:
						if (X === "=") b.state = E.ATTRIB_VALUE;
						else {
							if (r(X)) continue;
							Q(b, "Attribute without value"), b.tag.attributes[b.attribName] = "", b.attribValue = "", B(b, "onattribute", {
								name: b.attribName,
								value: ""
							}), b.attribName = "", X === ">" ? j(b) : x(f, X) ? (b.attribName = X, b.state = E.ATTRIB_NAME) : (Q(b, "Invalid attribute name"), b.state = E.ATTRIB);
						}
						continue;
					case E.ATTRIB_VALUE:
						if (r(X)) continue;
						c(X) ? (b.q = X, b.state = E.ATTRIB_VALUE_QUOTED) : (b.opt.unquotedAttributeValues || q(b, "Unquoted attribute value"), b.state = E.ATTRIB_VALUE_UNQUOTED, b.attribValue = X);
						continue;
					case E.ATTRIB_VALUE_QUOTED:
						if (X !== b.q) {
							X === "&" ? b.state = E.ATTRIB_VALUE_ENTITY_Q : b.attribValue += X;
							continue;
						}
						pt(b), b.q = "", b.state = E.ATTRIB_VALUE_CLOSED;
						continue;
					case E.ATTRIB_VALUE_CLOSED:
						r(X) ? b.state = E.ATTRIB : X === ">" ? j(b) : X === "/" ? b.state = E.OPEN_TAG_SLASH : x(f, X) ? (Q(b, "No whitespace between attributes"), b.attribName = X, b.attribValue = "", b.state = E.ATTRIB_NAME) : Q(b, "Invalid attribute name");
						continue;
					case E.ATTRIB_VALUE_UNQUOTED:
						if (!w(X)) {
							X === "&" ? b.state = E.ATTRIB_VALUE_ENTITY_U : b.attribValue += X;
							continue;
						}
						pt(b), X === ">" ? j(b) : b.state = E.ATTRIB;
						continue;
					case E.CLOSE_TAG:
						if (b.tagName) X === ">" ? $(b) : x(l, X) ? b.tagName += X : b.script ? (b.script += "</" + b.tagName, b.tagName = "", b.state = E.SCRIPT) : (r(X) || Q(b, "Invalid tagname in closing tag"), b.state = E.CLOSE_TAG_SAW_WHITE);
						else {
							if (r(X)) continue;
							D(f, X) ? b.script ? (b.script += "</" + X, b.state = E.SCRIPT) : Q(b, "Invalid tagname in closing tag.") : b.tagName = X;
						}
						continue;
					case E.CLOSE_TAG_SAW_WHITE:
						if (r(X)) continue;
						X === ">" ? $(b) : Q(b, "Invalid characters in closing tag");
						continue;
					case E.TEXT_ENTITY:
					case E.ATTRIB_VALUE_ENTITY_Q:
					case E.ATTRIB_VALUE_ENTITY_U:
						var R, y;
						switch (b.state) {
							case E.TEXT_ENTITY:
								R = E.TEXT, y = "textNode";
								break;
							case E.ATTRIB_VALUE_ENTITY_Q:
								R = E.ATTRIB_VALUE_QUOTED, y = "attribValue";
								break;
							case E.ATTRIB_VALUE_ENTITY_U:
								R = E.ATTRIB_VALUE_UNQUOTED, y = "attribValue";
								break;
						}
						if (X === ";") {
							var V = lt(b);
							b.opt.unparsedEntities && !Object.values(F.XML_ENTITIES).includes(V) ? (b.entity = "", b.state = R, b.write(V)) : (b[y] += V, b.entity = "", b.state = R);
						} else x(b.entity.length ? d : e, X) ? b.entity += X : (Q(b, "Invalid character in entity name"), b[y] += "&" + b.entity + X, b.entity = "", b.state = R);
						continue;
					default: throw new Error(b, "Unknown state: " + b.state);
				}
				return b.position >= b.bufferCheckPosition && A(b), b;
			}
			String.fromCodePoint || (function() {
				var I = String.fromCharCode, b = Math.floor, W = function() {
					var X = 16384, ut = [], M, R, y = -1, V = arguments.length;
					if (!V) return "";
					for (var Z = ""; ++y < V;) {
						var k = Number(arguments[y]);
						if (!isFinite(k) || k < 0 || k > 1114111 || b(k) !== k) throw RangeError("Invalid code point: " + k);
						k <= 65535 ? ut.push(k) : (k -= 65536, M = (k >> 10) + 55296, R = k % 1024 + 56320, ut.push(M, R)), (y + 1 === V || ut.length > X) && (Z += I.apply(null, ut), ut.length = 0);
					}
					return Z;
				};
				Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
					value: W,
					configurable: !0,
					writable: !0
				}) : String.fromCodePoint = W;
			})();
		})(typeof U > "u" ? U.sax = {} : U);
	})), Pr = ft(((U) => {
		var F = U && U.__createBinding || (Object.create ? (function(n, f, l, e) {
			e === void 0 && (e = l);
			var d = Object.getOwnPropertyDescriptor(f, l);
			(!d || ("get" in d ? !f.__esModule : d.writable || d.configurable)) && (d = {
				enumerable: !0,
				get: function() {
					return f[l];
				}
			}), Object.defineProperty(n, e, d);
		}) : (function(n, f, l, e) {
			e === void 0 && (e = l), n[e] = f[l];
		})), T = U && U.__setModuleDefault || (Object.create ? (function(n, f) {
			Object.defineProperty(n, "default", {
				enumerable: !0,
				value: f
			});
		}) : function(n, f) {
			n.default = f;
		}), N = U && U.__importStar || (function() {
			var n = function(f) {
				return n = Object.getOwnPropertyNames || function(l) {
					var e = [];
					for (var d in l) Object.prototype.hasOwnProperty.call(l, d) && (e[e.length] = d);
					return e;
				}, n(f);
			};
			return function(f) {
				if (f && f.__esModule) return f;
				var l = {};
				if (f != null) for (var e = n(f), d = 0; d < e.length; d++) e[d] !== "default" && F(l, f, e[d]);
				return T(l, f), l;
			};
		})();
		Object.defineProperty(U, "__esModule", { value: !0 }), U.parseGpEntries = s;
		const A = Lt(), i = N(ze());
		function s(n, f) {
			Promise.all(n.map(t)).then(() => f(null)).catch(f);
		}
		function t({ note: n, gpData: f }) {
			return new Promise((l, e) => {
				new a().parse(f, (d, r) => {
					if (d) return e(d);
					if (typeof r?.root > "u" || typeof r.root.string > "u") return l();
					const c = r.root;
					p(n, c), l();
				});
			});
		}
		const m = "$", _ = "content", g = "#name";
		var a = class extends A.EventEmitter {
			sax;
			stack;
			constructor() {
				super(), this.sax = i.parser(!1, {
					trim: !1,
					lowercase: !0,
					normalize: !1,
					xmlns: !1
				}), this.sax.strict = !1, this.stack = [], this.sax.onerror = this.error.bind(this), this.sax.onopentag = this.open.bind(this), this.sax.onclosetag = this.close.bind(this), this.sax.ontext = this.sax.oncdata = this.text.bind(this);
			}
			error(n) {
				this.emit("error", n);
			}
			open(n) {
				const f = {};
				f[g] = n.name.toLowerCase(), f[_] = "";
				for (const l in n.attributes) Object.hasOwn(n.attributes, l) && (f[m + l] = n.attributes[l]);
				this.stack.push(f);
			}
			close() {
				let n = this.stack.pop();
				const f = n[g], l = this.stack[this.stack.length - 1];
				delete n[g];
				const e = n[_];
				if (e.trim().length ? Object.keys(n).length === 1 && (n = e) : delete n[_], this.stack.length > 0) f in l ? (l[f] = Array.isArray(l[f]) ? l[f] : [l[f]], l[f].push(n)) : l[f] = n;
				else {
					const d = {};
					d[f] = n, this.emit("end", d);
				}
			}
			text(n) {
				const f = this.stack[this.stack.length - 1];
				f && (f[_] += n);
			}
			parse(n, f) {
				this.on("end", (l) => {
					f(null, l);
				}), this.on("error", f), this.sax.write(n);
			}
		};
		function p(n, f) {
			const l = u(n);
			l.fret = f.fret, l.string = f.string;
		}
		function u(n) {
			const f = o(n);
			return typeof f.technical > "u" ? (f.technical = {}, f.technical) : Array.isArray(f.technical) ? f.technical[0] : f.technical;
		}
		function o(n) {
			return typeof n.notations > "u" ? (n.notations = {}, n.notations) : Array.isArray(n.notations) ? n.notations[0] : n.notations;
		}
	})), Fr = ft(((U) => {
		Object.defineProperty(U, "__esModule", { value: !0 });
		const F = "offset";
		function T(N) {
			return typeof N[F] > "u" ? !1 : typeof N[F] == "string" || typeof N[F] == "object" && N[F] !== null && typeof N[F].content == "string";
		}
		U.default = T;
	})), Ur = ft(((U) => {
		var F = U && U.__importDefault || function(s) {
			return s && s.__esModule ? s : { default: s };
		};
		Object.defineProperty(U, "__esModule", { value: !0 });
		const T = F(Fr()), N = "offset", A = (s) => (0, T.default)(s) ? typeof s[N] == "string" ? i(s[N]) : i(s[N].content) : 0, i = (s) => {
			const t = parseInt(s, 10);
			if (Number.isNaN(t)) throw new Error(`An integer is expected for the attribute "offset". The actual value is "${s}".`);
			return t;
		};
		U.default = A;
	})), jr = ft(((U) => {
		var F = U && U.__importDefault || function(n) {
			return n && n.__esModule ? n : { default: n };
		};
		Object.defineProperty(U, "__esModule", { value: !0 });
		const T = F(Ur()), N = "measure", A = "part", i = "backup", s = "forward", t = "attributes", m = "note", _ = [
			t,
			"barline",
			"bookmark",
			"direction",
			"figured-bass",
			"grouping",
			"harmony",
			"link",
			m,
			"print",
			"sound"
		], g = "duration", a = "divisions";
		var p = class {
			dpq = 1;
			timePos = 0;
			previousTimePos = 0;
			invalidTimePos = 0;
			canFixBackup = !1;
			nodeName = "";
			node = {};
			constructor() {
				this.init();
			}
			init() {
				this.reset();
			}
			processContextNode(n) {
				this.nodeName = n, this.isPart() ? this.reset() : this.isMeasure() && (this.canFixBackup = !0, this.resetTimePos());
			}
			processNode(n, f) {
				this.nodeName = n, this.node = f, this.isBackup() ? (this.fixBackupIfNeeded(), this.moveBackward()) : this.isForward() ? (this.canFixBackup = !1, this.moveForward()) : (this.hasDpq() && this.updateDpq(), this.isIndexable() && this.indexNode(), this.isNonChordNote() ? this.moveForwardNote() : this.isChordNote() && this.updateInvalidTimePos());
			}
			isPart() {
				return this.nodeName === A;
			}
			reset() {
				this.dpq = 1, this.timePos = 0, this.previousTimePos = 0;
			}
			isMeasure() {
				return this.nodeName === N;
			}
			resetTimePos() {
				this.timePos = 0, this.previousTimePos = 0, this.invalidTimePos = 0;
			}
			isBackup() {
				return this.nodeName === i;
			}
			fixBackupIfNeeded() {
				if (!this.canFixBackup) return;
				const n = u(this.node, g);
				if (n !== this.timePos) {
					if (n !== this.invalidTimePos) {
						this.canFixBackup = !1;
						return;
					}
					this.node[g] = this.timePos.toString(), this.invalidTimePos = this.timePos;
				}
			}
			moveBackward() {
				const n = u(this.node, g);
				this.timePos -= n, this.invalidTimePos -= n, this.previousTimePos = this.timePos;
			}
			isForward() {
				return this.nodeName === s;
			}
			hasDpq() {
				return !(this.nodeName !== t || typeof this.node[a] > "u");
			}
			updateDpq() {
				this.timePos, this.dpq = o(this.node, a);
			}
			isIndexable() {
				return _.includes(this.nodeName);
			}
			indexNode() {
				const n = (0, T.default)(this.node), f = this.getCursorTimePos() + n;
				typeof this.node == "object" && (this.node["$adagio-location"] = {
					timePos: f,
					dpq: this.dpq
				});
			}
			getCursorTimePos() {
				return this.isChordNote() ? this.previousTimePos : (this.previousTimePos = this.timePos, this.timePos);
			}
			isChordNote() {
				return this.nodeName === m && typeof this.node.chord < "u";
			}
			isNonChordNote() {
				return this.isNote() && !this.isChordNote();
			}
			isNote() {
				return this.nodeName === m;
			}
			moveForward() {
				const n = u(this.node, g);
				this.timePos += n, this.invalidTimePos += n, this.previousTimePos = this.timePos;
			}
			moveForwardNote() {
				const n = u(this.node, g);
				this.timePos += n, this.invalidTimePos += n;
			}
			updateInvalidTimePos() {
				const n = u(this.node, g);
				this.invalidTimePos += n;
			}
		};
		const u = (n, f) => typeof n[f] < "u" ? o(n, f) : 0, o = (n, f) => {
			const l = n[f], e = parseInt(l, 10);
			if (Number.isNaN(e)) throw new Error(`An integer is expected for the attribute "${f}". The actual value is "${l}".`);
			return e;
		};
		U.default = p;
	})), Xe = ft(((U) => {
		var F = U && U.__createBinding || (Object.create ? (function(r, c, w, x) {
			x === void 0 && (x = w);
			var D = Object.getOwnPropertyDescriptor(c, w);
			(!D || ("get" in D ? !c.__esModule : D.writable || D.configurable)) && (D = {
				enumerable: !0,
				get: function() {
					return c[w];
				}
			}), Object.defineProperty(r, x, D);
		}) : (function(r, c, w, x) {
			x === void 0 && (x = w), r[x] = c[w];
		})), T = U && U.__setModuleDefault || (Object.create ? (function(r, c) {
			Object.defineProperty(r, "default", {
				enumerable: !0,
				value: c
			});
		}) : function(r, c) {
			r.default = c;
		}), N = U && U.__importStar || (function() {
			var r = function(c) {
				return r = Object.getOwnPropertyNames || function(w) {
					var x = [];
					for (var D in w) Object.prototype.hasOwnProperty.call(w, D) && (x[x.length] = D);
					return x;
				}, r(c);
			};
			return function(c) {
				if (c && c.__esModule) return c;
				var w = {};
				if (c != null) for (var x = r(c), D = 0; D < x.length; D++) x[D] !== "default" && F(w, c, x[D]);
				return T(w, c), w;
			};
		})(), A = U && U.__importDefault || function(r) {
			return r && r.__esModule ? r : { default: r };
		};
		Object.defineProperty(U, "__esModule", { value: !0 }), U.Parser = void 0, U.encoding = e, U.toAdagio = d;
		const i = Lt(), s = N(ye()), t = A(Rr()), m = N(ze()), _ = Rt(), g = Pr(), a = A(jr()), p = "$", u = "content", o = "#name", n = [
			"score-part",
			"part-group",
			"part",
			"measure",
			"attributes",
			"note",
			"direction",
			"harmony",
			"line-width",
			"barline"
		];
		function f(r) {
			const c = r["score-partwise"]?.["part-list"]?.["score-part"];
			Array.isArray(c) && c.forEach((w) => {
				if (w["midi-instrument"]?.["midi-program"]) {
					let x = parseInt(w["midi-instrument"]["midi-program"], 10);
					x = s.getImportMatchingProgram(x), w["midi-instrument"]["midi-program"] = x;
				}
			});
		}
		var l = class Ct extends i.EventEmitter {
			forceArrays;
			sax;
			stack;
			partGroups;
			multiPartOp;
			gpEntries;
			currentGp;
			timeIndexor;
			constructor(c) {
				super(), this.forceArrays = c, this.sax = m.parser(!1, {
					trim: !1,
					lowercase: !0,
					normalize: !1,
					xmlns: !1
				}), this.sax.strict = !1, this.stack = [], this.partGroups = {}, this.multiPartOp = null, this.gpEntries = [], this.currentGp = null, this.sax.onerror = this.error.bind(this), this.sax.onopentag = this.open.bind(this), this.sax.onclosetag = this.close.bind(this), this.sax.onprocessinginstruction = this.processingInstruction.bind(this), this.sax.ontext = this.sax.oncdata = this.text.bind(this), this.timeIndexor = new a.default();
			}
			error(c) {
				this.emit("error", c);
			}
			open(c) {
				const w = {};
				w[o] = c.name.toLowerCase(), w[u] = "";
				for (const x in c.attributes) Object.hasOwn(c.attributes, x) && (w[p + x] = c.attributes[x]);
				this.timeIndexor.processContextNode(w[o]), this.stack.push(w);
			}
			processingInstruction({ name: c, body: w }) {
				c === "GP7" && (this.currentGp = w);
			}
			close() {
				let c = this.stack.pop();
				const w = c[o];
				let x = !1;
				delete c[o];
				const D = this.stack[this.stack.length - 1];
				if (typeof c[u] == "string" && !c[u].trim().length ? delete c[u] : Object.keys(c).length === 1 && (c = c[u]), this.timeIndexor.processNode(w, c), w === "note" && this.currentGp && (this.gpEntries.push({
					note: c,
					gpData: this.currentGp
				}), this.currentGp = null), w === "part-group") x = this.partGroup(c);
				else if (w === "score-part") this.scorePart(c);
				else if (w === "direction") this.direction(c, D);
				else if (w === "attributes") this.attributes(c, D);
				else if (w === "harmony") Array.isArray(c.root) && (c.root = c.root[0]), Array.isArray(c.bass) && (c.bass = c.bass[0]), this.harmony(c, D);
				else if (w === "print") this.print(c, D);
				else if (w === "barline") this.barline(c, D);
				else if (w === "sound" && D["#name"] === "measure") this.sound(c, D);
				else if (w === "backup" || w === "forward") x = !0, this.multiPartOp = this.multiPartOp || {}, this.multiPartOp[w] ? this.multiPartOp[w].push(c) : this.multiPartOp[w] = [c];
				else if (w === "dynamics" && c["other-dynamics"]) {
					const E = c["other-dynamics"];
					delete c["other-dynamics"], c[E] = {};
				} else this.multiPartOp !== null && (w === "note" ? (this.multiPartOp.backup && (c.backup = this.multiPartOp.backup), this.multiPartOp.forward && (c.forward = this.multiPartOp.forward), this.multiPartOp = null) : w === "measure" && (this.multiPartOp = null));
				if (this.stack.length > 0) x || (w in D ? (D[w] = Array.isArray(D[w]) ? D[w] : [D[w]], D[w].push(c)) : D[w] = this.forceArrays.indexOf(w) >= 0 ? [c] : c);
				else {
					const E = {};
					E[w] = c, this.emit("end", E);
				}
			}
			partGroup(c) {
				if (typeof c.$type > "u") return this.emit("error", new _.ParseError("\"type\" attribute is compulsory in a part-group element.")), !1;
				if (c.$number = c.$number || "1", c.$type === "start") {
					this.partGroups[c.$number] = { "score-part": [] };
					for (const w in c) w !== "$number" && w !== "$type" && (this.partGroups[c.$number][w] = c[w]);
					return !0;
				} else if (c.$type === "stop") {
					for (const w in this.partGroups[c.$number]) Object.hasOwn(this.partGroups[c.$number], w) && (c[w] = this.partGroups[c.$number][w]);
					return delete this.partGroups[c.$number], delete c.$type, !1;
				} else return this.emit("error", new _.ParseError("\"type\" attribute of part-group element must be (start|stop).")), !1;
			}
			scorePart(c) {
				for (const w in this.partGroups) Object.hasOwn(this.partGroups, w) && this.partGroups[w]["score-part"].push(c.$id);
			}
			_noteBeforeAdd(c, w) {
				if (typeof c == "object") {
					let x = -1;
					typeof w.note < "u" && (x = w.note.length - 1), c.noteBefore = x;
				}
			}
			direction(c, w) {
				this._noteBeforeAdd(c, w);
			}
			attributes(c, w) {
				this._noteBeforeAdd(c, w);
			}
			harmony(c, w) {
				this._noteBeforeAdd(c, w);
			}
			sound(c, w) {
				this._noteBeforeAdd(c, w), c.swing !== void 0 && this._convertSwing(c);
			}
			static MXL_SWING_TYPE_MAP = {
				"16th": "sixteenth",
				eighth: "eighth"
			};
			static DEFAULT_ADAGIO_SWING_TYPE = "eighth";
			static DEFAULT_SWING_FIRST = 2;
			static DEFAULT_SWING_SECOND = 1;
			_convertSwing(c) {
				const w = c.swing;
				if (delete c.swing, w.straight !== void 0) {
					c["$adagio-swing"] = {
						swing: !1,
						_straight: !0
					};
					return;
				}
				const x = Number.parseInt(w.first ?? String(Ct.DEFAULT_SWING_FIRST), 10), D = x + Number.parseInt(w.second ?? String(Ct.DEFAULT_SWING_SECOND), 10), E = {
					swing: !0,
					ratio: D > 0 ? Math.round(x / D * 100) : 0
				}, z = w["swing-type"], K = z !== void 0 ? Ct.MXL_SWING_TYPE_MAP[z] : void 0;
				K !== void 0 && K !== Ct.DEFAULT_ADAGIO_SWING_TYPE && (E.swingType = K), c["$adagio-swing"] = E;
			}
			barline(c, w) {
				this._noteBeforeAdd(c, w);
			}
			print(c, w) {
				this._noteBeforeAdd(c, w);
			}
			text(c) {
				const w = this.stack[this.stack.length - 1];
				w && (w[u] += c);
			}
			parse(c, w) {
				this.on("end", (x) => {
					this.gpEntries.length > 0 ? (0, g.parseGpEntries)(this.gpEntries, (D) => {
						w(D ?? null, x);
					}) : w(null, x);
				}), this.on("error", () => w(new _.ParseError("Unparseable MusicXML file format."))), this.sax.write(c), this.sax.end();
			}
		};
		U.Parser = l;
		function e(r) {
			return Buffer.isBuffer(r) ? r[0] === 255 && r[1] === 254 && r[2] === 0 && r[3] === 0 || r[0] === 0 && r[1] === 0 && r[2] === 254 && r[3] === 255 ? "UTF-32" : r[0] === 255 && r[1] === 254 ? "UTF-16LE" : r[0] === 254 && r[1] === 255 ? "UTF-16BE" : r.length >= 4 && r[0] === 60 && r[1] === 0 && (r[2] === 63 || r[2] === 115) && r[3] === 0 ? "UTF-16LE" : r.length >= 4 && r[0] === 0 && r[1] === 60 && r[2] === 0 && (r[3] === 63 || r[3] === 115) ? "UTF-16BE" : null : null;
		}
		function d(r, c, w) {
			let x = {}, D;
			typeof c == "function" ? D = c : c && (x = c, D = w);
			const E = () => new Promise((z, K) => {
				const B = new l(n), L = e(r);
				L && (r = t.default.decode(r, L, { stripBOM: !0 }));
				let S = !1;
				B.parse(r, (q, et) => {
					if (!S) {
						if (S = !0, q) return K(q);
						if (!x.force) {
							if (et?.musescore) return K(new _.UnsupportedFormatError("MuseScore files are not supported, please convert your file to a MusicXML file (File > Export > MusicXML in MuseScore)", "musescore"));
							if (et?.noteflightscore) return K(new _.UnsupportedFormatError("Noteflight files are not supported, please convert your file to a MusicXML file on Noteflight website to import it on Flat.", "noteflight"));
							if (!et?.["score-partwise"]) return K(new _.ParseError("Invalid MusicXML file format."));
						}
						if (!x.keepvolume && et?.["score-partwise"] && et["score-partwise"]["part-list"] && et["score-partwise"]["part-list"]["score-part"]) {
							const Q = et["score-partwise"]["part-list"]["score-part"];
							for (let dt = 0; dt < Q.length; dt++) Q[dt]["midi-instrument"] && delete Q[dt]["midi-instrument"].volume;
						}
						et && f(et), z(et);
					}
				});
			});
			if (D) {
				E().then((z) => D(null, z), (z) => D(z, null));
				return;
			}
			return E();
		}
	})), zr = ft(((U) => {
		var F = U && U.__createBinding || (Object.create ? (function(u, o, n, f) {
			f === void 0 && (f = n);
			var l = Object.getOwnPropertyDescriptor(o, n);
			(!l || ("get" in l ? !o.__esModule : l.writable || l.configurable)) && (l = {
				enumerable: !0,
				get: function() {
					return o[n];
				}
			}), Object.defineProperty(u, f, l);
		}) : (function(u, o, n, f) {
			f === void 0 && (f = n), u[f] = o[n];
		})), T = U && U.__setModuleDefault || (Object.create ? (function(u, o) {
			Object.defineProperty(u, "default", {
				enumerable: !0,
				value: o
			});
		}) : function(u, o) {
			u.default = o;
		}), N = U && U.__importStar || (function() {
			var u = function(o) {
				return u = Object.getOwnPropertyNames || function(n) {
					var f = [];
					for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (f[f.length] = l);
					return f;
				}, u(o);
			};
			return function(o) {
				if (o && o.__esModule) return o;
				var n = {};
				if (o != null) for (var f = u(o), l = 0; l < f.length; l++) f[l] !== "default" && F(n, o, f[l]);
				return T(n, o), n;
			};
		})(), A = U && U.__importDefault || function(u) {
			return u && u.__esModule ? u : { default: u };
		};
		Object.defineProperty(U, "__esModule", { value: !0 }), U.inflateMusicXML = a, U.deflateMusicXML = p;
		const i = A(le()), s = N(ge()), t = Rt(), m = Xe(), _ = ["application/vnd.recordare.musicxml+xml"];
		var g = class {
			zip;
			xmlFilename;
			options;
			constructor(u) {
				this.zip = new i.default(), this.xmlFilename = null, this.options = {
					maxFileSize: u?.maxFileSize ?? -1,
					xmlFilename: u?.xmlFilename ?? "document.xml",
					containerFilename: u?.containerFilename ?? "META-INF/container.xml"
				};
			}
			async readContainer(u) {
				return new Promise((o, n) => {
					new m.Parser(["rootfile"]).parse(u, (f, l) => {
						const e = l;
						if (f) return n(f);
						if (typeof e?.container > "u" || typeof e.container.rootfiles > "u") return n(/* @__PURE__ */ new Error(`Unable to read the ${this.options.containerFilename} file`));
						if (typeof e.container.$xmlns == "string" && e.container.$xmlns.toLowerCase().includes("makemusic")) return n(new t.UnsupportedFormatError("MakeMusic Finale files are not supported, please use Finale to convert your file to a MusicXML first", "finale"));
						for (let d = 0; d < e.container.rootfiles.rootfile.length; ++d) {
							const r = e.container.rootfiles.rootfile[d], c = r["$full-path"];
							if (c) {
								if (c.endsWith(".mscx")) return n(new t.UnsupportedFormatError("MuseScore files are not supported, please convert your file to a MusicXML file (File > Export > MusicXML in MuseScore)", "musescore"));
								if (typeof r["$media-type"] > "u" && c.endsWith(".xml")) {
									this.xmlFilename = c;
									break;
								} else if (r["$media-type"] && _.includes(r["$media-type"])) {
									this.xmlFilename = c;
									break;
								}
							}
						}
						if (!this.xmlFilename) return n(/* @__PURE__ */ new Error("No MusicXML found in this compressed file"));
						o(this.xmlFilename);
					});
				});
			}
			async inflate(u) {
				let o;
				try {
					o = await i.default.loadAsync(u);
				} catch {
					throw new Error("Invalid compressed MusicXML file");
				}
				if (this.zip = o, this.zip.files["Content/score.gpif"]) throw new t.UnsupportedFormatError("Unsupported GuitarPro file", "gp");
				if (!this.zip.files[this.options.containerFilename]) throw new Error("No MusicXML file found");
				const n = this.zip.files[this.options.containerFilename];
				if (this.options.maxFileSize >= 0 && n._data?.uncompressedSize > this.options.maxFileSize) throw new Error("File too large");
				const f = await n.async("string"), l = await this.readContainer(f);
				let e = this.zip.files[l];
				if (!e) {
					const r = this.zip.files, c = Object.keys(r).filter((w) => !w.includes("META-INF"));
					if (c.length === 1) e = r[c[0]];
					else throw new Error(`${l} not found in container`);
				}
				if (this.options.maxFileSize >= 0 && e._data?.uncompressedSize > this.options.maxFileSize) throw new Error("File too large");
				const d = this.zip.file(e.name);
				if (!d) throw new Error(`${l} not found in container`);
				return d.async("string");
			}
			writeContainer() {
				const u = s.create("container");
				return u.ele("rootfiles").ele("rootfile", { "full-path": this.options.xmlFilename }), u.end();
			}
			async deflate(u) {
				const o = this.writeContainer();
				return this.zip.file(this.options.xmlFilename, u), this.zip.file(this.options.containerFilename, o), this.zip.generateAsync({
					compression: "DEFLATE",
					type: "nodebuffer"
				});
			}
		};
		function a(u, o, n) {
			let f = {}, l;
			typeof o == "function" ? l = o : o && (f = o, l = n);
			const e = new g(f).inflate(u);
			if (l) {
				e.then((d) => l(null, d), (d) => l(d, void 0));
				return;
			}
			return e;
		}
		function p(u, o, n) {
			let f = {}, l;
			typeof o == "function" ? l = o : o && (f = o, l = n);
			const e = new g(f).deflate(u);
			if (l) {
				e.then((d) => l(null, d), (d) => l(d, void 0));
				return;
			}
			return e;
		}
	})), Xr = ft(((U) => {
		Object.defineProperty(U, "__esModule", { value: !0 });
		U.default = {
			attributes: [
				"footnote",
				"level",
				"divisions",
				"key",
				"time",
				"staves",
				"part-symbol",
				"instruments",
				"clef",
				"staff-details",
				"transpose",
				"directive",
				"measure-style"
			],
			key: [
				"cancel",
				"fifths",
				"mode",
				"key-step",
				"key-alter",
				"key-accidental",
				"key-octave"
			],
			time: [
				"beats",
				"beat-type",
				"interchangeable",
				"senza-misura"
			],
			interchangeable: [
				"time-relation",
				"beats",
				"beat-type"
			],
			clef: [
				"sign",
				"line",
				"clef-octave-change"
			],
			"staff-details": [
				"staff-type",
				"staff-lines",
				"staff-tuning",
				"capo",
				"staff-size"
			],
			"staff-tuning": [
				"tuning-step",
				"tuning-alter",
				"tuning-octave"
			],
			transpose: [
				"diatonic",
				"chromatic",
				"octave-change",
				"double"
			],
			"measure-style": [
				"multiple-rest",
				"measure-repeat",
				"beat-repeat",
				"slash"
			],
			"beat-repeat": ["slash-type", "slash-dot"],
			slash: ["slash-type", "slash-dot"],
			barline: [
				"bar-style",
				"footnote",
				"level",
				"wavy-line",
				"segno",
				"coda",
				"fermata",
				"ending",
				"repeat"
			],
			dynamics: [
				"p",
				"pp",
				"ppp",
				"pppp",
				"ppppp",
				"pppppp",
				"f",
				"ff",
				"fff",
				"ffff",
				"fffff",
				"ffffff",
				"mp",
				"mf",
				"sf",
				"sfp",
				"sfpp",
				"fp",
				"rf",
				"rfz",
				"sfz",
				"sffz",
				"fz",
				"other-dynamics"
			],
			"part-name-display": ["display-text", "accidental-text"],
			"part-abbreviation-display": ["display-text", "accidental-text"],
			"midi-instrument": [
				"midi-channel",
				"midi-name",
				"midi-bank",
				"midi-program",
				"midi-unpitched",
				"volume",
				"pan",
				"elevation"
			],
			play: [
				"ipa",
				"mute",
				"semi-pitched",
				"other-play"
			],
			direction: [
				"direction-type",
				"offset",
				"footnote",
				"level",
				"voice",
				"staff",
				"sound"
			],
			"direction-type": [
				"rehearsal",
				"segno",
				"words",
				"coda",
				"wedge",
				"dynamics",
				"dashes",
				"bracket",
				"pedal",
				"metronome",
				"octave-shift",
				"harp-pedals",
				"damp",
				"damp-all",
				"eyeglasses",
				"string-mute",
				"cordatura",
				"image",
				"principal-voice",
				"accordion-registration",
				"percussion",
				"other-direction"
			],
			metronome: [
				"beat-unit",
				"beat-unit-dot",
				"per-minute",
				"metronome-note",
				"metronome-relation"
			],
			"metronome-note": [
				"metronome-type",
				"metronome-dot",
				"metronome-beam",
				"metronome-tuplet"
			],
			"metronome-tuplet": [
				"actual-notes",
				"normal-notes",
				"normal-type",
				"normal-dot"
			],
			"pedal-tuning": ["pedal-step", "pedal-alter"],
			accord: [
				"tuning-step",
				"tuning-alter",
				"tuning-octave"
			],
			"accordion-registration": [
				"accordion-high",
				"accordion-middle",
				"accordion-low"
			],
			percussion: [
				"glass",
				"metal",
				"wood",
				"pitched",
				"membrane",
				"effect",
				"timpani",
				"beater",
				"stick",
				"stick-location",
				"other-percussion"
			],
			stick: ["stick-type", "stick-material"],
			harmony: [
				"function",
				"root",
				"kind",
				"inversion",
				"bass",
				"degree",
				"frame",
				"offset",
				"footnode",
				"level",
				"staff"
			],
			root: ["root-step", "root-alter"],
			bass: ["bass-step", "bass-alter"],
			degree: [
				"degree-value",
				"degree-alter",
				"degree-type"
			],
			frame: [
				"frame-strings",
				"frame-frets",
				"first-fret",
				"frame-note"
			],
			"frame-note": [
				"string",
				"fret",
				"fingering",
				"barre"
			],
			print: [
				"page-layout",
				"system-layout",
				"staff-layout",
				"measure-layout",
				"measure-numbering",
				"part-name-display",
				"part-abbreviation-display"
			],
			sound: [
				"midi-device",
				"midi-instrument",
				"play",
				"swing"
			],
			swing: [
				"straight",
				"first",
				"second",
				"swing-type",
				"swing-style"
			],
			identification: [
				"creator",
				"rights",
				"encoding",
				"source",
				"relation",
				"miscellaneous"
			],
			encoding: [
				"encoding-data",
				"encoder",
				"software",
				"encoding-description",
				"supports"
			],
			scaling: ["millimeters", "tenths"],
			"page-layout": [
				"page-height",
				"page-width",
				"page-margins"
			],
			"page-margins": [
				"left-margin",
				"right-margin",
				"top-margin",
				"bottom-margin"
			],
			"system-layout": [
				"system-margins",
				"system-distance",
				"top-system-distance",
				"system-dividers"
			],
			"system-margins": ["left-margin", "right-margin"],
			"system-dividers": ["left-divier", "right-divider"],
			appearance: [
				"line-width",
				"note-size",
				"distance",
				"other-appearance"
			],
			note: [
				"grace",
				"cue",
				"chord",
				"pitch",
				"unpitched",
				"rest",
				"duration",
				"tie",
				"instrument",
				"footnote",
				"level",
				"voice",
				"type",
				"dot",
				"accidental",
				"time-modification",
				"stem",
				"notehead",
				"notehead-text",
				"staff",
				"beam",
				"notations",
				"lyric",
				"play"
			],
			pitch: [
				"step",
				"alter",
				"octave"
			],
			unpitched: ["display-step", "display-octave"],
			rest: ["display-step", "display-octave"],
			"time-modification": [
				"actual-notes",
				"normal-note",
				"normal-type",
				"normal-dot"
			],
			"notehead-text": ["display-text", "notehead-text"],
			notations: [
				"footnote",
				"level",
				"tied",
				"slur",
				"tuplet",
				"glissando",
				"slide",
				"ornaments",
				"technical",
				"articulations",
				"dynamics",
				"fermata",
				"arpeggiate",
				"non-arpeggiate",
				"accidental-mark",
				"other-notation"
			],
			tuplet: ["tuplet-actual", "tuplet-normal"],
			"tuplet-actual": [
				"tuplet-number",
				"tuplet-type",
				"tuplet-dot"
			],
			"tuplet-normal": [
				"tuplet-number",
				"tuplet-type",
				"tuplet-dot"
			],
			orgaments: [
				"trill-mark",
				"turn",
				"delayed-turn",
				"inverted-turn",
				"delayed-inverted-turn",
				"vertical-turn",
				"shake",
				"wavy-line",
				"mordent",
				"inverted-mordent",
				"schleifer",
				"tremolo",
				"other-ornament",
				"accidental-mark"
			],
			technical: [
				"up-bow",
				"down-bow",
				"harmonic",
				"open-string",
				"thumb-position",
				"fingering",
				"pluck",
				"double-tongue",
				"triple-tongue",
				"stopped",
				"snap-pizzicato",
				"fret",
				"string",
				"hammer-on",
				"pull-off",
				"bend",
				"tap",
				"heel",
				"toe",
				"fingernails",
				"hole",
				"arrow",
				"handbell",
				"other-technical"
			],
			harmonic: [
				"natural",
				"artificial",
				"base-pitch",
				"touching-pitch",
				"sounding-pitch"
			],
			bend: [
				"bend-alter",
				"pre-bend",
				"release",
				"with-bar"
			],
			hole: [
				"hole-type",
				"hole-closed",
				"hole-shape"
			],
			arrow: [
				"arrow-direction",
				"arrow-style",
				"circular-arrow"
			],
			articulations: [
				"articulations",
				"accent",
				"strong-accent",
				"staccato",
				"tenuto",
				"detached-legato",
				"staccatissimo",
				"spiccato",
				"scoop",
				"plop",
				"doit",
				"falloff",
				"breath-mark",
				"caesura",
				"stress",
				"unstress",
				"other-articulation"
			],
			lyric: [
				"elision",
				"syllabic",
				"text",
				"extend",
				"laughing",
				"humming",
				"end-line",
				"end-paragraph",
				"footnote",
				"level"
			],
			"figured-bass": [
				"figure",
				"duration",
				"footnote",
				"level"
			],
			figure: [
				"prefix",
				"figure-number",
				"suffix",
				"extend"
			],
			backup: [
				"duration",
				"footnote",
				"level"
			],
			forward: [
				"duration",
				"footnote",
				"level",
				"voice",
				"staff"
			],
			opus: [
				"opus",
				"opus-link",
				"score"
			],
			work: [
				"work-number",
				"work-title",
				"opus"
			],
			defaults: [
				"scaling",
				"page-layout",
				"system-layout",
				"staff-layout",
				"appearance",
				"music-font",
				"word-font",
				"lyric-font",
				"lyric-language"
			],
			"part-list": ["part-group", "score-part"],
			"score-part": [
				"identification",
				"part-name",
				"part-name-display",
				"part-abbreviation",
				"part-abbreviation-display",
				"group",
				"score-instrument",
				"midi-device",
				"midi-instrument"
			],
			"part-group": [
				"group-name",
				"group-name-display",
				"group-abbreviation",
				"group-abbreviation-display",
				"group-symbol",
				"group-barline",
				"group-time",
				"footnote",
				"level"
			],
			"group-abbreviation-display": ["display-text", "accidental-text"],
			"score-instrument": [
				"instrument-name",
				"instrument-abbreviation",
				"instrument-sound",
				"solo",
				"ensemble",
				"virtual-instrument"
			],
			"score-partwise": [
				"work",
				"movement-number",
				"movement-title",
				"identification",
				"defaults",
				"credit",
				"part-list",
				"part"
			],
			"score-timewise": [
				"work",
				"movement-number",
				"movement-title",
				"identification",
				"defaults",
				"credit",
				"part-list",
				"measure"
			]
		};
	})), Wr = ft(((U) => {
		var F = U && U.__createBinding || (Object.create ? (function(B, L, S, q) {
			q === void 0 && (q = S);
			var et = Object.getOwnPropertyDescriptor(L, S);
			(!et || ("get" in et ? !L.__esModule : et.writable || et.configurable)) && (et = {
				enumerable: !0,
				get: function() {
					return L[S];
				}
			}), Object.defineProperty(B, q, et);
		}) : (function(B, L, S, q) {
			q === void 0 && (q = S), B[q] = L[S];
		})), T = U && U.__setModuleDefault || (Object.create ? (function(B, L) {
			Object.defineProperty(B, "default", {
				enumerable: !0,
				value: L
			});
		}) : function(B, L) {
			B.default = L;
		}), N = U && U.__importStar || (function() {
			var B = function(L) {
				return B = Object.getOwnPropertyNames || function(S) {
					var q = [];
					for (var et in S) Object.prototype.hasOwnProperty.call(S, et) && (q[q.length] = et);
					return q;
				}, B(L);
			};
			return function(L) {
				if (L && L.__esModule) return L;
				var S = {};
				if (L != null) for (var q = B(L), et = 0; et < q.length; et++) q[et] !== "default" && F(S, L, q[et]);
				return T(S, L), S;
			};
		})(), A = U && U.__importDefault || function(B) {
			return B && B.__esModule ? B : { default: B };
		};
		Object.defineProperty(U, "__esModule", { value: !0 }), U.toMusicXML = K;
		const i = N(ye()), s = N(ge()), t = Rt(), m = A(Xr()), _ = {
			pubID: "-//Recordare//DTD MusicXML 3.1 Partwise//EN",
			sysID: "http://www.musicxml.org/dtds/partwise.dtd",
			type: "score-partwise"
		}, g = [
			"f",
			"ff",
			"fff",
			"ffff",
			"fffff",
			"ffffff",
			"fp",
			"fz",
			"mf",
			"mp",
			"rf",
			"rfz",
			"sf",
			"sffz",
			"sfp",
			"sfpp",
			"sfz",
			"p",
			"pp",
			"ppp",
			"pppp",
			"ppppp",
			"pppppp"
		], a = (B, L) => ({
			el: L,
			name: B
		});
		function p(B) {
			delete B["measure-list"], B["part-list"]?.["score-part"].forEach((L) => {
				delete L.uuid;
			}), B.part?.forEach((L) => {
				delete L.uuid;
			});
		}
		function u(B) {
			B["part-list"]?.["score-part"].forEach((L) => {
				delete L.pitchMapping, delete L.unpitchedMapping, delete L.voiceMapping, delete L.staffMapping;
			});
		}
		function o(B) {
			if (B["part-list"]) {
				for (let L = 0; L < B["part-list"]["score-part"].length; L++) {
					const S = B["part-list"]["score-part"][L];
					if (S["midi-instrument"]?.["midi-program"]) {
						const q = parseInt(S["midi-instrument"]["midi-program"], 10);
						S["midi-instrument"]["midi-program"] = String(i.getExportMatchingProgram(q));
					}
				}
				p(B), u(B);
			}
		}
		const n = "eighth", f = {
			sixteenth: "16th",
			eighth: "eighth"
		};
		function l(B, L) {
			for (; L !== 0;) {
				const S = L;
				L = B % L, B = S;
			}
			return B;
		}
		function e(B) {
			if (!(B.swing === !0 || B.swing === "true")) return B._straight === !0 ? { straight: "" } : null;
			const L = typeof B.ratio == "number" ? B.ratio : Number.parseInt(B.ratio ?? "67", 10), S = 100 - L;
			if (L <= 0 || S <= 0) return {
				first: String(L),
				second: String(S),
				"swing-type": n
			};
			const q = l(L, S), et = String(L / q), Q = String(S / q), dt = f[B.swingType] ?? n;
			return {
				first: et,
				second: Q,
				"swing-type": dt
			};
		}
		function d(B, L, S) {
			let q, et = [];
			const Q = typeof L;
			if (B ? q = B.element(S) : q = B = s.create(S, {
				version: "1.0",
				encoding: "UTF-8",
				standalone: !1
			}, {
				pubID: _.pubID,
				sysID: _.sysID
			}), Q === "number" || Q === "string") return q.text(String(L));
			if (L["$adagio-swing"] !== void 0 && S === "sound") {
				const j = e(L["$adagio-swing"]);
				j !== null && (L.swing = j);
			}
			const dt = Object.keys(L);
			for (let j = 0; j < dt.length; j++) {
				const $ = dt[j];
				$.startsWith("$adagio") && delete L[$];
			}
			if (delete L.voiceIdxToUuidMapping, delete L.voiceUuidToIdxMapping, typeof L["part-group"] < "u" && typeof L["score-part"] < "u") {
				const j = [], $ = [];
				for (let lt = 0; lt < L["part-group"].length; lt++) j.push({
					sp: L["part-group"][lt]["score-part"].splice(0),
					pg: L["part-group"][lt]
				});
				j.sort((lt, st) => {
					const at = parseInt(lt.pg.$number, 10), yt = parseInt(st.pg.$number, 10);
					return at > yt ? 1 : at < yt ? -1 : 0;
				});
				for (let lt = 0; lt < L["score-part"].length; lt++) {
					for (let st = 0; st < j.length; st++) {
						if (typeof j[st].sp > "u") continue;
						const at = j[st].sp.indexOf(L["score-part"][lt].$id);
						if (at >= 0 && (j[st].sp.splice(at, 1), $.indexOf(st) < 0)) {
							$.push(st);
							const yt = { $type: "start" };
							for (const I in j[st].pg) I !== "score-part" && (yt[I] = j[st].pg[I]);
							et.push({
								el: yt,
								name: "part-group"
							});
						}
					}
					et.push({
						el: L["score-part"][lt],
						name: "score-part"
					});
					for (let st = j.length - 1; st >= 0; st--) typeof j[st].sp < "u" && j[st].sp.length === 0 && (et.push({
						el: {
							$type: "stop",
							$number: j[st].pg.$number
						},
						name: "part-group"
					}), delete j[st].sp);
				}
				delete L["part-group"], delete L["score-part"];
			} else if (typeof L.note < "u") {
				L.direction = L.direction || [], L.direction = x(L.direction), L.direction.sort((j, $) => j.noteBefore - $.noteBefore), L.attributes = L.attributes || [], L.attributes.sort((j, $) => j.noteBefore - $.noteBefore), L.harmony = L.harmony || [], L.harmony.sort((j, $) => j.noteBefore - $.noteBefore), L.barline = z(L.barline), L.barline.sort((j, $) => j.noteBefore - $.noteBefore), L.print = z(L.print), L.print.sort((j, $) => j.noteBefore - $.noteBefore), L.sound = z(L.sound), L.sound.sort((j, $) => j.noteBefore - $.noteBefore);
				for (let j = 0; j < L.note.length; j++) r(L.print, et, "print", j), r(L.barline, et, "barline", j), r(L.attributes, et, "attributes", j), r(L.sound, et, "sound", j), r(L.direction, et, "direction", j), r(L.harmony, et, "harmony", j), et.push({
					el: L.note[j],
					name: "note"
				});
				for (let j = 0; j < L.direction.length; j++) delete L.direction[0].noteBefore, et.push({
					el: L.direction[0],
					name: "direction"
				});
				for (let j = 0; j < L.attributes.length; j++) delete L.attributes[0].noteBefore, et.push({
					el: L.attributes[0],
					name: "attributes"
				});
				for (let j = 0; j < L.harmony.length; j++) delete L.harmony[0].noteBefore, et.push({
					el: L.harmony[0],
					name: "harmony"
				});
				for (let j = 0; j < L.sound.length; j++) delete L.sound[0].noteBefore, et.push({
					el: L.sound[0],
					name: "sound"
				});
				for (let j = 0; j < L.print.length; j++) delete L.print[0].noteBefore, et.push({
					el: L.print[0],
					name: "print"
				});
				for (let j = 0; j < L.barline.length; j++) delete L.barline[0].noteBefore, et.push({
					el: L.barline[0],
					name: "barline"
				});
				delete L.direction, delete L.attribute, delete L.harmony, delete L.sound, delete L.print, delete L.barline, delete L.note;
			} else if (typeof L.backup < "u") {
				const j = q.parent.children.pop(), $ = w(q.parent.children);
				Array.isArray(L.backup) || (L.backup = [L.backup]), L.backup.forEach((lt) => {
					d(q.parent, lt, "backup");
				}), q.parent.children.push(...$), q.parent.children.push(j), delete L.backup;
			} else if (typeof L.forward < "u") {
				const j = q.parent.children.pop();
				Array.isArray(L.forward) || (L.forward = [L.forward]), L.forward.forEach(($) => {
					d(q.parent, $, "forward");
				}), q.parent.children.push(j), delete L.forward;
			} else if (typeof L.dynamics < "u") {
				const j = Object.keys(L.dynamics);
				if (j.length > 0 && g.indexOf(j[0]) < 0) {
					const $ = j[0];
					delete L.dynamics[$], L.dynamics["other-dynamics"] = $;
				}
			}
			let nt = [];
			const pt = typeof L == "object" ? Object.keys(L) : [];
			typeof m.default[S] < "u" && (nt = m.default[S]);
			for (const j of pt) nt.indexOf(j) < 0 && nt.push(j);
			for (const j of nt) typeof L[j] > "u" || (j[0] === "$" ? q.attribute(j.substring(1), L[j]) : j === "content" ? q.text(L[j]) : Array.isArray(L[j]) ? et = et.concat(L[j].map(a.bind(L, j))) : et.push({
				el: L[j],
				name: j
			}));
			return et.forEach((j) => {
				d(q, j.el, j.name);
			}), q;
		}
		const r = (B, L, S, q) => {
			for (; B.length > 0;) if (typeof B[0].noteBefore > "u" && (B[0].noteBefore = -1), B[0].noteBefore < q) {
				const et = B.shift();
				c(et) && (et.$isAfterBackup = !0), delete et.noteBefore, L.push({
					el: et,
					name: S
				});
			} else return;
		};
		function c(B) {
			return B.noteBefore === -1 ? !1 : typeof B["$adagio-isFirst"] < "u" ? B["$adagio-isFirst"] : typeof B["$adagio-location"] > "u" || typeof B["$adagio-location"].timePos > "u" ? !1 : B["$adagio-location"].timePos === 0;
		}
		function w(B) {
			const L = [];
			for (let S = B.length - 1; S >= 0; S--) {
				const q = B[S];
				if (q.attributes.isAfterBackup && (delete q.attributes.isAfterBackup, L.unshift(q), B.splice(S, 1)), q.name === "note") break;
			}
			return L;
		}
		const x = (B) => (B.forEach((L) => {
			let S = L["direction-type"] || [];
			S = z(S), S = S.filter(D), L["direction-type"] = S;
		}), B = B.filter(E), B), D = (B) => typeof B["$adagio-tempoChange"] > "u", E = (B) => B["direction-type"].length > 0, z = (B) => typeof B > "u" ? [] : Array.isArray(B) ? B : [B];
		function K(B, L) {
			const S = () => new Promise((q, et) => {
				const Q = B[_.type];
				if (!Q) return et(new t.ParseError("Invalid MusicXML source"));
				o(Q), Q.$version = "3.1", q(d(null, Q, _.type));
			});
			if (L) {
				S().then((q) => L(null, q), (q) => L(q, void 0));
				return;
			}
			return S();
		}
	})), We = ft(((U) => {
		Object.defineProperty(U, "__esModule", { value: !0 }), U.toMusicXML = U.toAdagio = U.inflateMusicXML = U.deflateMusicXML = U.inflateFlatFile = U.FlatFormatError = U.deflateFlatFile = U.UnsupportedFormatError = U.ParseError = void 0;
		var F = Rt();
		Object.defineProperty(U, "ParseError", {
			enumerable: !0,
			get: function() {
				return F.ParseError;
			}
		}), Object.defineProperty(U, "UnsupportedFormatError", {
			enumerable: !0,
			get: function() {
				return F.UnsupportedFormatError;
			}
		});
		var T = tr();
		Object.defineProperty(U, "deflateFlatFile", {
			enumerable: !0,
			get: function() {
				return T.deflateFlatFile;
			}
		}), Object.defineProperty(U, "FlatFormatError", {
			enumerable: !0,
			get: function() {
				return T.FlatFormatError;
			}
		}), Object.defineProperty(U, "inflateFlatFile", {
			enumerable: !0,
			get: function() {
				return T.inflateFlatFile;
			}
		});
		var N = zr();
		Object.defineProperty(U, "deflateMusicXML", {
			enumerable: !0,
			get: function() {
				return N.deflateMusicXML;
			}
		}), Object.defineProperty(U, "inflateMusicXML", {
			enumerable: !0,
			get: function() {
				return N.inflateMusicXML;
			}
		});
		var A = Xe();
		Object.defineProperty(U, "toAdagio", {
			enumerable: !0,
			get: function() {
				return A.toAdagio;
			}
		});
		var i = Wr();
		Object.defineProperty(U, "toMusicXML", {
			enumerable: !0,
			get: function() {
				return i.toMusicXML;
			}
		});
	}))();
	console.debug("WebWorker for MusicXML export loaded"), onmessage = async (U) => {
		const { jobId: F, adagioJson: T, options: N } = U.data;
		let A = await (0, We.toMusicXML)(T);
		if (A = A.end({ pretty: !0 }), !N.compressed) {
			postMessage({
				jobId: F,
				status: "complete",
				payload: A
			});
			return;
		}
		postMessage({
			jobId: F,
			status: "compressing"
		});
		const i = await (0, We.deflateMusicXML)(A);
		postMessage({
			jobId: F,
			status: "complete",
			payload: i
		});
	};
})();

//# sourceMappingURL=AdagioToMxl.worker-CIMR3yTn.js.map