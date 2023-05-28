// Cho người dùng nhập vào tên và tuổi. 
// Hãy viết lại tên và tuổi của người đó ra màn hình bằng hàm document.write, 
//     trong đó tên có màu đậm, tuổi được gạch chân.


var name = prompt("Nhap ten:");
var age = prompt("Nhap tuoi: ");
var address = prompt("Nhap dia chi: ");
document.write("Ho ten: <b>"+name+"</b>, Tuoi: <u>"+age+"</u>, Dia chi: "+address);