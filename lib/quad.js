// t: current time, b: beginning value, c: change in value, d: duration

exports.inQuad = {
	js: function(t, b, c, d) {
			return c * (t /= d) * t + b;
		},
	css: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)'
};

exports.outQuad = {
	js: function(t, b, c, d) {
			return -c * (t /= d) * (t - 2) + b;
		},
	css: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)'
};

exports.inOutQuad = {
	js: function(t, b, c, d) {
			if ((t /= d / 2) < 1) {
				return c / 2 * t * t + b;
			}
			return -c / 2 * ((--t) * (t - 2) - 1) + b;
		}
};
