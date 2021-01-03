function change() {
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
            var tb = document.getElementById("tb");
            var button = tb.getElementsByTagName('button');
            var tr = tb.getElementsByTagName('tr');
            
            if (button[0].innerHTML == "编辑") {
                button[0].innerHTML = "确定";
                var a = 0;

                for (; a < 4; a++) {
                    var td = tr[a].getElementsByTagName('td');
                    td[1].innerHTML = '<input class="text" type="text" value="' + td[1].innerHTML + '"/>';
                }
            }
            else {
                button[0].innerHTML = "编辑";
                var a = 0;

                for (; a < 4; a++) {
                    var td = tr[a].getElementsByTagName('td');
                    td[1].innerHTML = td[1].firstChild.value;;
                    json.inf[a] = td[1].innerHTML;
                }

                console.log(JSON.stringify(json));
            }
        }
    }


}

function appear() {
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
            var tb = document.getElementById('tb');
            var tr = tb.getElementsByTagName('tr');
            var a = 0;
            img[0].src = json.src;

            for (; a < 4; a++) {
                var td = tr[a].getElementsByTagName('td');
                td[1].innerHTML = json.inf[a];
            }

        }
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
