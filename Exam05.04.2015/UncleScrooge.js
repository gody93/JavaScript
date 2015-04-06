function solve (str) {
	var money = 0,
	gold, silver, bronze;


	for (var i = 0; i < str.length; i++) {
		 var res = str[i].split(" ");
		 var type = res[0];
		 if (isInt(res[1])) {
		 	var value = parseInt(res[1]);
		 	if (type.toLowerCase() === "coin" && isInt(value)) {
		 	money = money + value;
		 }
		 };
}
if (money >= 100000) {
	money = money.toString();
	console.log("gold : " + money.substr(0,4));
	console.log("silver : " + getDigits(money)[4]);
	console.log("bronze : " + getDigits(money)[5]);
}if (money >= 10000) {
	money = money.toString();
	console.log("gold : " + money.substr(0,3));
	console.log("silver : " + getDigits(money)[3]);
	console.log("bronze : " + getDigits(money)[4]);
}if (money >= 1000) {
	money = money.toString();
	console.log("gold : " + money.substr(0,2));
	console.log("silver : " + getDigits(money)[2]);
	console.log("bronze : " + getDigits(money)[3]);
}else if (money >= 100) {	
	console.log("gold : " + getDigits(money)[0]);
	console.log("silver : " + getDigits(money)[1]);
	console.log("bronze : " + getDigits(money)[2]);
}else if(money >=10){
	console.log("gold : " + 0);
	console.log("silver : " + getDigits(money)[0]);
	console.log("bronze : " + getDigits(money)[1]);
}else if(money <= 9){
	console.log("gold : " + 0);
	console.log("silver : " + 0);
	console.log("bronze : " + getDigits(money)[0]);
}

function getDigits(num) {
    var digits = [];
    while (num >= 10) {
        digits.unshift(num % 10);
        num = Math.floor(num / 10);
    }
    digits.unshift(num);
    return digits;
}


function isInt(num) {
  var x = parseFloat(num);
  return !isNaN(num) && (x | 0) === x;
}


}

solve(['Coin 1','coin 2','coin 5','coin 10','coin 20','coin 50','coin 100','coin 200','coin 500','cigars 1']);