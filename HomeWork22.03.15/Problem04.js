function solve (input) {

for (var i = 0; i < input.length; i++) {
	input[i].score += input[i].score*0.1;
		if (input[i].score >= 100) {
			input[i].hasPassed = true;
		}else{
			input[i].hasPassed = false;
		}

	var	pesho = input.filter(function(el){
		if (el[i].name = true) {
			return el[i]
		};
	})
	var	input = input.sort(function(a,b){
		return a.name > b.name;
	});
	console.log(input);
};
solve([{'name' : 'Пешо','score' : 91},{ 'name' : 'Лилия','score' : 290},{ 'name' : 'Алекс','score' : 343},
	{ 'name' : 'Габриела','score' : 400},{ 'name' : 'Жичка','score' : 70}]);