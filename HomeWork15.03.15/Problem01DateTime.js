var d = new Date();
var m = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes();
var h = d.getHours().toString();
var s = d.getSeconds().toString().length == 1 ? '0' + d.getSeconds() : d.getSeconds();
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

console.log(days[d.getDay()]+', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + '  ' +
h + ':' + m + ':' + s + ' ');

//Dosta po lesen nachin ! :D :D Ma koi da misli :D
console.log(d);