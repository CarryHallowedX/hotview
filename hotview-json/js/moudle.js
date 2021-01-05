function loadview() {
    var username;
    var nickname;
    var text;
    var img;
    var a = 0;
    var xmlhttp;
    
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET", "../file/blog/blog_eg.json", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var json = JSON.parse(xmlhttp.responseText);

            for (; json.mes[a] != "" && json.mes[a] != null; a++) {
                username = json.mes[a][0];
                text = json.mes[a][1];
                var xmlhtt;

                if (window.XMLHttpRequest) {
                    xmlhtt = new XMLHttpRequest();
                }
                else {
                    xmlhtt = new ActiveXObject("Microsoft.XMLHTTP");
                }

                xmlhtt.open("GET", "../file/user/" + username + ".json", true);
                xmlhtt.send();
                xmlhtt.onreadystatechange = function () {

                    if (xmlhtt.readyState == 4 && xmlhtt.status == 200) {
                        var jsn = JSON.parse(xmlhtt.responseText);
                        img = jsn.src;
                        nickname = jsn.inf[0];
                        addview(nickname, text, img);

                    }
                }
            }


        }
    }
}



function addview(usn, mes, src) {
    var username = usn;
    var text = mes;
    var img = src;

    if (img == "" || img == null) {
        img = "../src/umlogin.jpg"
    }
    
    var div = document.getElementById('views');
    div.innerHTML += '<div class="view"><div class="box"><a href="#"><img src="' + img + '" class="usimg"></a><div class="name"><em>' + username + '</em></div></div><div class="text"><p>' + text + '</p>    </div></div>'
}


