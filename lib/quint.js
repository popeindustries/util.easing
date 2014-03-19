// t: current time, b: beginning value, c: change in value, d: duration

exports.inQuint = {
	js: function(t, b, c, d) {
			return c * (t /= d) * t * t * t * t + b;
		},
	css: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)'
};

exports.outQuint = {
	js: function(t, b, c, d) {
			return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
		},
	css: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)'
};

exports.inOutQuint = {
	js: function(t, b, c, d) {
			if ((t /= d / 2) < 1) {
				return c / 2 * t * t * t * t * t + b;
			}
			return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
		},
	css: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)'
};
