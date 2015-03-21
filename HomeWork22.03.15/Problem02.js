var array = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];

// Sorts all valid scores
var valid = array.filter(function(el){
	if (el >= 0 && el <=400) {
			return el;
	};
});


// Down with 20%

function down(scores){
	for (var i = 0; i < scores.length; i++) {
			scores[i] -= scores[i]*0.2 ;
	};
};

// Sort ascending.

valid.sort(function(a,b){return a-b});


down(valid);
console.log(valid);
