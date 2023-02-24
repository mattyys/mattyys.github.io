function calcularMayor(){
    let num1 = document.getElementById("val1").value;
    let num2 = document.getElementById("val2").value;
    if(num1 == ""){
        alert("Ingrese el primer numero");
        document.getElementById("val1").focus();
    }else{
        if(num2 == ""){
            alert("Ingrese el segundo numero");
            document.getElementById("val2").focus();
        }else{
            calculo(num1, num2);
            document.getElementById("val1").value = "";
            document.getElementById("val2").value = "";
            document.getElementById("val1").focus();
        }
    }   
}
function calculo(num1, num2){
    if (num1 > num2) {
        alert("El mayor es el primero : "+num1);
    } else{
        if (num2 > num1) {
            alert("El mayor es el Segundo : "+num2);
      }
        else{
            alert("Los numeros son iguales : "+num1+" / "+num2);
     }
    }

}
 