// t: current time, b: beginning value, c: change in value, d: duration

exports.linear = {
	js: function(t, b, c, d) {
			return c * t / d + b;
		},
	css: 'cubic-bezier(0.250, 0.250, 0.750, 0.750)'
}