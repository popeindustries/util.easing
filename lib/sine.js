// t: current time, b: beginning value, c: change in value, d: duration

exports.inSine = {
	js: function(t, b, c, d) {
			return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
		},
	css: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)'
};

exports.outSine = {
	js: function(t, b, c, d) {
			return c * Math.sin(t / d * (Math.PI / 2)) + b;
		},
	css: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)'
};

exports.inOutSine = {
	js: function(t, b, c, d) {
			return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
		},
	css: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
};
