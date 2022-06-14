but.onclick=function(){
    let val = "";
    val += document.getElementById('firstName').value + " ";
    val += document.getElementById('lastName').value + " ";
    val += document.getElementById('username').value + " ";
    val += document.getElementById('email').value + " ";
    alert("Вы ввели: " + val);
}
