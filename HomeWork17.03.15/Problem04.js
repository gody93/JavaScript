function calcSupply(age, maxAge, food, foodPerDay) {
	var year = 365;
	var foods = ((maxAge-age)*year) * foodPerDay;
	return foods + "kg" + " of " + food+ " would be enough until I am " + maxAge + " years old!";
};
console.log(calcSupply(38,118,"chocolate",0.5));
