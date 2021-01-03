function login() {
    var form = document.getElementById('form');
    var input = form.getElementsByTagName('input');
    var p = form.getElementsByTagName('p');

    if (input[0].value == '') {
        p[0].innerHTML = '请输入账号';
    }
    else {
        p[0].innerHTML = '';
    }

    if (input[1].value == '') {
        p[1].innerHTML = '请输入密码';
    }
    else {
        p[1].innerHTML = '';
    }

    var inf = localStorage.getItem(input[0].value);
    if (inf == "" || inf == null) {
        p[2].innerHTML = '账号不存在！'
    }
    else {
        var json = JSON.parse(inf);

        if (json.psd == input[1].value) {
            setCookie(input[0].value, input[1].value, 0.007);
            sessionStorage.setItem('username', getCookie('username'));
            window.location = 'home.html';
        }
        else {
            p[2].innerHTML = '账号和密码不匹配！';
        }
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + d.toGMTString();
    document.cookie = 'username=' + cname + ';' + expires;
    document.cookie = 'psd=' + cvalue + ';' + expires;
}

function getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }

    return "";
}

function checkCookie() {
    var user = getCookie('username');
    var psd = getCookie('psd');
    var blog = localStorage.getItem('blog');

    if (blog == "" || blog == null) {
        localStorage.setItem('blog', '{"mes":[]}');
    }

    if (user != "") {
        var inf = localStorage.getItem(user);
        var json = JSON.parse(inf);

        if (json.psd == psd) {
            sessionStorage.setItem('username', getCookie('username'));
            window.location = 'home.html';
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
            p[0].innerHTML = '请输入账号'
        }
        else {
            p[0].innerHTML = ""
        }
    }

    if (tag == 2) {

        if (input[1].value == "") {
            p[1].innerHTML = '请输入密码'
        }
        else {
            p[0].innerHTML = ""
        }
    }
}

function reg() {
    window.location = 'reg.html';
}
