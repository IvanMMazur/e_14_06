function clear() {
  document.getElementsByName('myForm')[0].reset();
}
function complete(){
  var elem="<b>" + document.myForm.imie.value + " " +
            document.myForm.nazwisko.value + "</br>" +
            document.myForm.mail.value.toLowerCase() + "</br>Usluga: " +
            document.myForm.usluga.value + "</b>";
  document.getElementById('result').innerHTML=elem;
}