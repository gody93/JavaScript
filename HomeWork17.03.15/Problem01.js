var a = 2,
	b = 5,
	c = -3;
var D = (b*b) - (4*a*c);


var equation = function (a, b, c) {
	if (D > 0) {
		console.log("x1 = " + ((-b + Math.sqrt(D))/(2*a)));
		console.log("x2 = " + ((-b - Math.sqrt(D))/(2*a)));
	} else if (D === 1) {
		console.log("x = " + -b/2*a);
	} else{
		console.log("No real roots");
	}
};
equation(a,b,c);