// alert("Hello World");

// var luaChon = confirm('Bạn có đồng ý truy cập không.!');
// document.write(luaChon);

// var a = "123 alo 12";
// var conver = parseInt(a);
// alert(conver);

// var a = "12 + 3 + 5";
// alert(a);
// alert(eval(a));

// var a = prompt("Nhap bieu thuc can tinh: ");
// document.write(eval(a));

var keyEmail = 'email';
// Object
var myInfo = {
    name: 'Quang ND',
    age: '27',
    address: 'Ha Noi',
    [keyEmail]: 'quangnd512@gmail.com',
    
    // Khai báo function trong object
    getName: function() {
        return this.name;
    }
}

// Gọi đối tượng function
myInfo.getName() // object myInfo

// Đổi 1 giá trị trong object
myInfo.name = 'Quang ND 123'; //giá trị name trong object = Quang ND 123

// Sửa key
myInfo['age-name'] = '27';

// Lấy value
myInfo.name;
myInfo['name'];

// xóa Key
delete myInfo.age

