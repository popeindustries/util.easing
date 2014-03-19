// t: current time, b: beginning value, c: change in value, d: duration

exports.inQuart = {
	js: function(t, b, c, d) {
			return c * (t /= d) * t * t * t + b;
		},
	css: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)'
};

exports.outQuart = {
	js: function(t, b, c, d) {
			return -c * ((t = t / d - 1) * t * t * t - 1) + b;
		},
	css: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)'
};

exports.inOutQuart = {
	js: function(t, b, c, d) {
			if ((t /= d / 2) < 1) {
				return c / 2 * t * t * t * t + b;
			}
			return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
		},
	css: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)'
};
