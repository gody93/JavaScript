function currTime(){
    var d = new Date();
    var h = d.getHours().toString();
    var m = d.getMinutes().length === 1 ? "0" + d.getMinutes() : d.getMinutes();
    var s = d.getSeconds().toString().length === 1 ? "0" + d.getSeconds() : d.getSeconds();
    document.getElementById('txt').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){currTime()},500);
}
