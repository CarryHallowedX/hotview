function change() {
    var username = sessionStorage.getItem("username");
    var inf = localStorage.getItem(username);
    var json = JSON.parse(inf);
    var tb = document.getElementById("tb");
    var button = tb.getElementsByTagName('button');
    var tr = tb.getElementsByTagName('tr');
    var td;
    var a;
    if (button[0].innerHTML == "编辑") {
        button[0].innerHTML = "确定";
        a = 0;

        for (; a < 4; a++) {
            td = tr[a].getElementsByTagName('td');
            td[1].innerHTML = '<input class="text" type="text" value="' + td[1].innerHTML + '"/>';
        }
    }

    else {
        a = 0;
        
        button[0].innerHTML = "编辑";

        for (; a < 4; a++) {
            td = tr[a].getElementsByTagName('td');
            td[1].innerHTML = td[1].firstChild.value;
            json.inf[a] = td[1].innerHTML;
        }

        localStorage.setItem(username, JSON.stringify(json));
    }
}

function appear() {
    var img = document.getElementsByTagName('img');
    var tb = document.getElementById('tb');
    var tr = tb.getElementsByTagName('tr');
    var a = 0;
    var username = sessionStorage.getItem("username");
    var inf = localStorage.getItem(username);
    var td;
    var json = JSON.parse(inf);
    img[0].src = json.src;

    for (; a < 4; a++) {
        td = tr[a].getElementsByTagName('td');
        td[1].innerHTML = json.inf[a];
    }
}


function logout() {
    clearCookie();
    sessionStorage.clear();
    window.location = "login.html"
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = "username=" + cname + "; " + expires;
    document.cookie = "psd=" + cvalue + "; " + expires;
}

function clearCookie() {
    setCookie("username", "", -1);
    setCookie("psd", "", -1);
}
