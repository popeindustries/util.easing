// t: current time, b: beginning value, c: change in value, d: duration

exports.inCubic = {
	js: function(t, b, c, d) {
			return c * (t /= d) * t * t + b;
		},
	css: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
};

exports.outCubic = {
	js: function(t, b, c, d) {
			return c * ((t = t / d - 1) * t * t + 1) + b;
		},
	css: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
};

exports.inOutCubic = {
	js: function(t, b, c, d) {
			if ((t /= d / 2) < 1) {
				return c / 2 * t * t * t + b;
			}
			return c / 2 * ((t -= 2) * t * t + 2) + b;
		}
};
