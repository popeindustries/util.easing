// t: current time, b: beginning value, c: change in value, d: duration

exports.inBounce = {
	js: function(t, b, c, d) {
			return c - exports.outBounce(x, d - t, 0, c, d) + b;
		}
};

exports.outBounce = {
	js: function(t, b, c, d) {
			if ((t /= d) < (1 / 2.75)) {
				return c * (7.5625 * t * t) + b;
			} else if (t < (2 / 2.75)) {
				return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
			} else if (t < (2.5 / 2.75)) {
				return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
			} else {
				return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
			}
		}
};

exports.inOutBounce = {
	js: function(t, b, c, d) {
			if (t < d / 2) {
				return exports.inBounce(x, t * 2, 0, c, d) * 0.5 + b;
			}
			return exports.outBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
		}
};
