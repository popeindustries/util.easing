// t: current time, b: beginning value, c: change in value, d: duration

exports.inExpo = {
	js: function(t, b, c, d) {
			if (t === 0) {
				return b;
			} else {
				return c * Math.pow(2, 10 * (t / d - 1)) + b;
			}
		},
	css: 'cubic-bezier(0.950, 0.050, 0.795, 0.035)'
};

exports.outExpo = {
	js: function(t, b, c, d) {
			if (t === d) {
				return b + c;
			} else {
				return c * (-Math.pow(2, -10 * t / d) + 1) + b;
			}
		},
	css: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)'
};

exports.inOutExpo = {
	js: function(t, b, c, d) {
			if (t === 0) {
				return b;
			}
			if (t === d) {
				return b + c;
			}
			if ((t /= d / 2) < 1) {
				return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			}
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
	css: 'cubic-bezier(1.000, 0.000, 0.000, 1.000)'
};
