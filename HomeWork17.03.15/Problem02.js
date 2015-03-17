var km = 20;

var toKnots = function (speed) {
	return 0.539956803*speed;
};

console.log(toKnots(km).toFixed(2));