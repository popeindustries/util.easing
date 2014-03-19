// t: current time, b: beginning value, c: change in value, d: duration

exports.inBack = {
	js: function(t, b, c, d) {
			if (s != null) {
				s = 1.70158;
			}
			return c * (t /= d) * t * ((s + 1) * t - s) + b;
		},
	css: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)'
};

exports.outBack = {
	js: function(t, b, c, d) {
			if (s != null) {
				s = 1.70158;
			}
			return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
		},
	css: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
};

exports.inOutBack = {
	js: function(t, b, c, d) {
			if (s != null) {
				s = 1.70158;
			}
			if ((t /= d / 2) < 1) {
				return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
			}
			return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
		},
	css: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
};
