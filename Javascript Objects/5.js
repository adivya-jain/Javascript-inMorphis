const pi = 3.14;
var volume;
function volumeOfCylinder(r,h)
{
    var volume = (pi * r * r * h);
    return volume.toFixed(4);
}

console.log(volumeOfCylinder(3,7))