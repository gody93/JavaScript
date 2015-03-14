var radius = 7,
    radius1 = 1.5,
    radius2 = 20;

function calcCircleArea(r){
    var area = (Math.PI * (r*r));
    return area;
}

document.write('r = ' + radius + ";" + "area = " + calcCircleArea(radius) + "<br/>");
document.write('r = ' + radius1 + ";" + "area = " + calcCircleArea(radius1) + "<br/>");
document.write('r = ' + radius2 + ";" + "area = " + calcCircleArea(radius2));