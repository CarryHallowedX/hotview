function addview() {
    var username = sessionStorage.getItem("username");
    var mes = document.getElementsByTagName('textarea');
    var text = mes[0].value.replace(/\"/g, "\\\"");

    if (text == "" || text == null) {
        var p = document.getElementsByTagName('p');
        p[0].innerHTML = "留言不可以为空！"
        return;
    }

    console.log(text);
    var blogplus = '["' + username + '","' + text + '"]';
    var blog = JSON.parse(localStorage.getItem("blog"));
    var a = 0;

    for (; blog.mes[a] != "" && blog.mes[a] != null; a++) {}

    var blogtostr = JSON.stringify(blog);
    blogtostr = blogtostr.substring(0, blogtostr.length - 2);

    if (a == 0) {
        blogtostr = blogtostr + blogplus + "]}";
    }
    else {
        blogtostr = blogtostr + "," + blogplus + "]}";
    }
    
    localStorage.setItem("blog", blogtostr);
    back();
}

function clear() {
    var p = document.getElementsByTagName('p');
    p[0].innerHTML = "0000";
}

function back() {
    history.go(-2);
}
