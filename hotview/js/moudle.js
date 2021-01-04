function loadview() {
    var username;
    var nickname;
    var text;
    var img;
    var a = 0;
    var mes = localStorage.getItem("blog");
    var blog = JSON.parse(mes);

    for (; blog.mes[a] != "" && blog.mes[a] != null; a++) {
        username = blog.mes[a][0];
        var userinf = JSON.parse(localStorage.getItem(username));
        text = blog.mes[a][1];
        nickname = userinf.inf[0];
        img = userinf.src;
        addview(nickname, text, img);
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
    div.innerHTML += "<div class=\"view\"><div class=\"box\"><a href=\"\"><img src=\"" + img + "\" class=\"usimg\"></a><div class=\"name\">" + username + "</div></div><div class=\"text\"><p><pre>" + text + "</pre></p>    </div></div>"
}
