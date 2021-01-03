function login() {
    var form = document.getElementById('form');
    var input = form.getElementsByTagName('input');
    var p = form.getElementsByTagName('p');

    if (input[0].value == "") {
        p[0].innerHTML = "请输入账号"
    }
    else {
        p[0].innerHTML = ""
    }

    if (input[1].value == "") {
        p[1].innerHTML = "请输入密码"
    }
    else {
        p[1].innerHTML = ""
    }

    var xmlhttp;

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET", "../file/user/" + input[0].value + ".json", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var json = JSON.parse(xmlhttp.responseText);

            if (json.psd == input[1].value) {
                setCookie(input[0].value, input[1].value, 0.007);
                sessionStorage.setItem("username", getCookie("username"));
                window.location = "home.html"
            }
            else {
                p[2].innerHTML = "账号和密码不匹配！";
            }
        }


    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = "username=" + cname + "; " + expires;
    document.cookie = "psd=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }

    return "";
}

function checkCookie() {
    var user = getCookie("username");
    var psd = getCookie("psd");

    if (user != "") {
        var xmlhttp;

        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.open("GET", "../file/user/" + user + ".json", true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var json = JSON.parse(xmlhttp.responseText);

                if (json.psd == psd) {
                    sessionStorage.setItem("username", getCookie("username"));
                    window.location = "home.html";
                }
            }


        }
    }
}

function tag(a) {
    var tag = a;
    var form = document.getElementById('form');
    var input = form.getElementsByTagName('input');
    var p = document.getElementById('form').getElementsByTagName('p');

    if (tag == 1) {

        if (input[0].value == "") {
            p[0].innerHTML = "请输入账号"
        }
        else {
            p[0].innerHTML = ""
        }
    }

    if (tag == 2) {
        
        if (input[1].value == "") {
            p[1].innerHTML = "请输入密码"
        }
        else {
            p[0].innerHTML = ""
        }
    }
}

function reg() {
    window.location = "reg.html";
}