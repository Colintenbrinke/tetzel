console.log("gemaakt door colin, thomas en imme")

var images = ["sintpieter.jpg", "aflaat.jpg"];
var num = 0;

function slide(){
    var movingimage = document.getElementById("movingimage");
    var images = +1;
    movingimage.src = images[num];
}