function destroy( ) {
    let layar = document.getElementById ("display");
   let s = layar.value ;
    layar.value = s.slice(0,-1);
}
function remove () {
    let layar = document.getElementById ("display");
    layar.value = "";
    console.log(layar);
}
function num (object) {
    let angka = object.innerHTML;
    console.log(angka);
    let layar = document.getElementById ("display");
    layar.value =  layar.value +  angka;
}

function operator (object) {
    let operator=object.innerHTML;
    console.log(operator);
    let layar = document.getElementById ("display");
    layar.value =  layar.value +  operator;
}
 function calculate () {
    let layar = document.getElementById ("display");
    layar.value = eval (layar.value)  ;
 }
 