// Tạo 1 iput khi nhập text vào và nhấn submit thì hiện ra thông báo value vừa nhập 

document.write("<h3>Javascript</h3>");
document.write("<form action=\"\" method=\"post\">");
document.write("<input type=\"text\" id=\"welcome-id\" name=\"welcome-to\" value=\"Welcome to\">");
document.write("<input type=\"submit\" name=\"welcome\" onclick=\"fOnClick()\" value=\"Welcome\">");
document.write("</form>");

function fOnClick() {
    var doc = document.getElementById("welcome-id").value;
    alert(doc);
}