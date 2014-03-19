// t: current time, b: beginning value, c: change in value, d: duration

exports.inCirc = {
	js: function(t, b, c, d) {
			return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
		},
	css: 'cubic-bezier(0.600, 0.040, 0.980, 0.335)'
};

exports.outCirc = {
	js: function(t, b, c, d) {
			return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
		},
	css: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)'
};

exports.inOutCirc = {
	js: function(t, b, c, d) {
			if ((t /= d / 2) < 1) {
				return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
			}
			return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
		},
	css: 'cubic-bezier(0.785, 0.135, 0.150, 0.860)'
};
