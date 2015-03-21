var array = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];

var arrayNum = array.filter(function(element) {
  return !isNaN(element);
});

arrayNum.sort(function(a,b){return b-a});
console.log("Min number is: " + arrayNum[0]);
console.log("Max number is: " + arrayNum[arrayNum.length-1]);


// Most freq value

var counts = {}, max = 0, res;
for (var v in array) {
  counts[array[v]] = (counts[array[v]] || 0) + 1;
  if (counts[array[v]] > max) { 
    max = counts[array[v]];
    res = array[v];
  }
}
console.log("Most frequent number is: " + res);


console.log(arrayNum);
