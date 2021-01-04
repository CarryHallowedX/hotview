function appear() {
    var box = document.getElementById('box');
    box.style.zIndex = 1;
}

function disappear() {
    // setTimeout(() => {

    // }, 500);
    var box = document.getElementById('box');
    box.style.zIndex = -1;
}
