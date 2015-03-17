function calCylindVol (arr) {		
	var V = Math.PI*(arr[0]*arr[0])*arr[1];
	return V;
};
var values = [2,4];
console.log(calCylindVol(values).toFixed(3));