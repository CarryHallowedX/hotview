function addview() {
    var username = sessionStorage.getItem("username");
    var mes = document.getElementsByTagName('textarea');
    var text = mes[0].value.replace(/\"/g, "\\\"");
    text = mes[0].value.replace(/\n/g, "<br>");
    console.log("运行");
    if (text == "" || text == null) {
        var p = document.getElementsByTagName('p');
        p[0].innerHTML = "留言不可以为空！"
        console.log("变");
        return;
    }

    var blogplus = '["' + username + '","' + text + '"]';
    var blog = JSON.parse(localStorage.getItem("blog"));
    var a = 0;

    for (; blog.mes[a] != "" && blog.mes[a] != null; a++) { }

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

// function clear() {
//     var p = document.getElementsByTagName('p');
//     p[0].innerHTML = "0000";
// }

function back() {
    history.back(-1);
    history.back(-1);
}

// function back() {
//     var back=document.getElementsByClassName('back');
//     var parent=back[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
//     console.log(parent);
//     parent.src='home.html';
// }
