function reg() {
    var username = document.getElementById('username');
    var psd = document.getElementById('psd');
    var nickname = document.getElementById('niname');
    var select = document.getElementsByName('sex');
    var sexx;

    if (select[0].checked) {
        sexx = "男";
    }
    else {
        sexx = "女";
    }

    var year = document.getElementById('year');
    var month = document.getElementById('month');
    var place = document.getElementById('place');
    var inf = "{\"inf\":[\"" + nickname.value + "\",\"" + sexx + "\",\"" + year.value + "." + month.value + "\",\"" + place.value + "\"],\"psd\":\"" + psd.value + "\",\"src\":\"../src/user.jpg\"}"
    
    if (localStorage.getItem(username.value)) {
        alert("用户名已被注册");
    }
    else {
        alert("注册成功");
        localStorage.setItem(username.value, inf);
    }
}