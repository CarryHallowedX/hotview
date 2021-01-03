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
    var xmlhttp;

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET", "../file/user/" + sessionStorage.getItem("username") + ".json", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var json = JSON.parse(xmlhttp.responseText);
            var img = document.getElementsByTagName('img');
            img[0].src = json.src;
        }
    }
}

function hight() {
    var iframe = document.getElementById('a');
    var height = document.body.clientHeight - 65;
    iframe.style.height = height + "px";
}

window.setInterval("hight()", 10);