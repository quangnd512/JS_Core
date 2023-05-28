var date = new Date();
while (true) {
    var yearCsm = prompt("Nhap nam sinh cua ban: ");
    if (yearCsm>=date.getFullYear()) {
        alert("Nam sinh cua ban khong duoc lon hon nam hien tai.!");
    }else{
        var age = date.getFullYear()-yearCsm;
        break;
    }
}
document.write("Ban nam nay "+age+" tuoi.!");