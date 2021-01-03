
function test(I) {
    var iframe = document.getElementById('a');
    var s = I;

    if (s == 1) {
        iframe.src = "main.html";
    }

    if (s == 2) {
        iframe.src = "discover.html";
    }

    if (s == 3) {
        iframe.src = "addview.html";
    }
}

function loads() {
    var username = sessionStorage.getItem('username');
    var inf = localStorage.getItem(username);
    var json = JSON.parse(inf);
    var img = document.getElementsByTagName('img');
    img[0].src = json.src;
}

function hight() {
    var iframe = document.getElementById('a');
    var height = document.body.clientHeight - 65;
    iframe.style.height = height + 'px';
}

window.setInterval('hight()', 10);
