function light(sw) {
    var pic;
    if (sw==0) {
        pic = "img/bulboff.png"
    } else {
        pic = "img/bulbon.png"
    }
    document.getElementById('myImage').src = pic;
}