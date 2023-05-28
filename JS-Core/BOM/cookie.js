function SetCookie() {
    var text = document.getElementById("frm_name").value;
    var number = document.getElementById("frm_age").value;
    var timeLine = new Date();
    timeLine.setMonth(timeLine.getMonth()+1);
    document.cookie = "Name: "+escape(text)+", Age: "+number+", Time line cookie: "
                                +timeLine.toUTCString(); //cookie
}
var cookies = document.cookie;  
var arrCookie = cookies.split(", "); //Cắt chuỗi cookie thành mảng 
for (i = 0; i < arrCookie.length; i++) {    //Vòng lặp mảng
    var text2 = unescape(arrCookie[0]).substr(6);  //Lấy mảng đầu tiên và cắt từ vị trí thứ 6 
    alert("Xin chào: "+ text2);  
    break;  
}

// escape : Mã hóa ký tự đặc biệt
// unescape : Giải mã ký tự đặc biệt



function deleteCookie() {
    document.cookie = "Name:, Age:, Time line cookie: Thu, 01 Jan 1970 00:00:00 UTC"; 
    //Luu cookie với Name rỗng, Age rỗng và time line là 1/1970
}