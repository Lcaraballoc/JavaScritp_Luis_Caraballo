 var calculadora = {
   num1: 0, num2:0, punto: 0, signo: 0, operador: 0,

   clickAbajo : function(i){
     document.getElementById(i).style.transform = "scale(0.9, 0.9)"
   },

   clickArriba: function(i){
     document.getElementById(i).style.transform = "scale(1, 1)"
   },

   escribir: function(i){
     var longitud = calculadora.num1.toString().length;
      if(longitud< 8){
       if(calculadora.num1 == 0 && calculadora.punto ==0){
         calculadora.num1 = i;
       } else {
         calculadora.num1+= i;
       }
     }
     document.getElementById('display').innerHTML =calculadora.num1;
   },

   borrar: function(){
     calculadora.num1 = 0;
     calculadora.punto = 0;
     document.getElementById('display').innerHTML =calculadora.num1;
   },

   operacion: function(num1, num2, signo){
     switch (signo) {
      case 1:
          var resultado = num1/num2;
          break;
      case 2:
          var resultado = num1*num2;
          break;
      case 3:
          var resultado = num1-num2;
          break;
      case 4:
          var resultado = parseFloat(num1)+parseFloat(num2);
          break;
     }
    resultado = resultado.toString();
    resultado = resultado.substring(0,8);
    return(resultado);
   },

   init: function(){

     document.getElementById("on").addEventListener("mousedown", function(){
        calculadora.clickAbajo("on");
        calculadora.borrar();
     })
     document.getElementById("on").addEventListener("mouseup", function(){
        calculadora.clickArriba("on");
     })

     document.getElementById("sign").addEventListener("mousedown", function(){
        calculadora.clickAbajo("sign");

          calculadora.num1= -calculadora.num1;
          document.getElementById('display').innerHTML = calculadora.num1;
          calculadora.signo= 1;
          console.log("Entro el negativo");


     })
     document.getElementById("sign").addEventListener("mouseup", function(){
        calculadora.clickArriba("sign");
     })

     document.getElementById("raiz").addEventListener("mousedown", function(){
        calculadora.clickAbajo("raiz");
     })
     document.getElementById("raiz").addEventListener("mouseup", function(){
        calculadora.clickArriba("raiz");
     })

     document.getElementById("7").addEventListener("mousedown", function(){
        calculadora.clickAbajo("7");
        calculadora.escribir("7");
     })
     document.getElementById("7").addEventListener("mouseup", function(){
        calculadora.clickArriba("7");
     })

     document.getElementById("8").addEventListener("mousedown", function(){
        calculadora.clickAbajo("8");
        calculadora.escribir("8");
     })
     document.getElementById("8").addEventListener("mouseup", function(){
        calculadora.clickArriba("8");
     })

     document.getElementById("9").addEventListener("mousedown", function(){
        calculadora.clickAbajo("9");
        calculadora.escribir("9");
     })
     document.getElementById("9").addEventListener("mouseup", function(){
        calculadora.clickArriba("9");
     })

     document.getElementById("4").addEventListener("mousedown", function(){
        calculadora.clickAbajo("4");
        calculadora.escribir("4");
     })
     document.getElementById("4").addEventListener("mouseup", function(){
        calculadora.clickArriba("4");
     })

     document.getElementById("5").addEventListener("mousedown", function(){
        calculadora.clickAbajo("5");
        calculadora.escribir("5");
     })
     document.getElementById("5").addEventListener("mouseup", function(){
        calculadora.clickArriba("5");
     })

     document.getElementById("6").addEventListener("mousedown", function(){
        calculadora.clickAbajo("6");
        calculadora.escribir("6");
     })
     document.getElementById("6").addEventListener("mouseup", function(){
        calculadora.clickArriba("6");
     })

     document.getElementById("1").addEventListener("mousedown", function(){
        calculadora.clickAbajo("1");
        calculadora.escribir("1");
     })
     document.getElementById("1").addEventListener("mouseup", function(){
        calculadora.clickArriba("1");
     })

     document.getElementById("2").addEventListener("mousedown", function(){
        calculadora.clickAbajo("2");
        calculadora.escribir("2");
     })
     document.getElementById("2").addEventListener("mouseup", function(){
        calculadora.clickArriba("2");
     })

     document.getElementById("3").addEventListener("mousedown", function(){
        calculadora.clickAbajo("3");
        calculadora.escribir("3");
     })
     document.getElementById("3").addEventListener("mouseup", function(){
        calculadora.clickArriba("3");
     })

     document.getElementById("0").addEventListener("mousedown", function(){
        calculadora.clickAbajo("0");
        calculadora.escribir("0");
     })
     document.getElementById("0").addEventListener("mouseup", function(){
        calculadora.clickArriba("0");
     })

     document.getElementById("punto").addEventListener("mousedown", function(){
        calculadora.clickAbajo("punto");
        if (calculadora.punto ==0){
            if(calculadora.num1 == 0 ){
              calculadora.num1 = 0+".";
              console.log("Este numero es" +calculadora.num1);
            } else {
              calculadora.num1+= ".";
            }
            calculadora.punto = 1;
          }
        document.getElementById('display').innerHTML =calculadora.num1;
     })

     document.getElementById("punto").addEventListener("mouseup", function(){
        calculadora.clickArriba("punto");
     })

     document.getElementById("igual").addEventListener("mousedown", function(){
        calculadora.clickAbajo("igual");
        if(calculadora.operador !=0 ){
          var total = calculadora.operacion(calculadora.num2, calculadora.num1, calculadora.operador);
          calculadora.num1 = "";
          calculadora.punto= 0; calculadora.operador=0;
          document.getElementById('display').innerHTML =total;
        }
     })
     document.getElementById("igual").addEventListener("mouseup", function(){
        calculadora.clickArriba("igual");
     })

     document.getElementById("mas").addEventListener("mousedown", function(){
        calculadora.clickAbajo("mas");
        calculadora.operador = 4;
        calculadora.num2 = calculadora.num1;
        calculadora.num1=0;
        calculadora.punto= 0;
        document.getElementById('display').innerHTML ="";
     })
     document.getElementById("mas").addEventListener("mouseup", function(){
        calculadora.clickArriba("mas");
     })

     document.getElementById("menos").addEventListener("mousedown", function(){
        calculadora.clickAbajo("menos");
        calculadora.operador = 3;
        calculadora.num2 = calculadora.num1;
        calculadora.num1=0;
        calculadora.punto= 0;
        document.getElementById('display').innerHTML ="";
     })
     document.getElementById("menos").addEventListener("mouseup", function(){
        calculadora.clickArriba("menos");
     })

     document.getElementById("por").addEventListener("mousedown", function(){
        calculadora.clickAbajo("por");
        calculadora.operador = 2;
        calculadora.num2 = calculadora.num1;
        calculadora.num1=0;
        calculadora.punto= 0;
        document.getElementById('display').innerHTML ="";
     })
     document.getElementById("por").addEventListener("mouseup", function(){
        calculadora.clickArriba("por");

     })

     document.getElementById("dividido").addEventListener("mousedown", function(){
        calculadora.clickAbajo("dividido");
        calculadora.operador = 1;
        calculadora.num2 = calculadora.num1;
        calculadora.num1=0;
        calculadora.punto= 0;
        document.getElementById('display').innerHTML ="";
     })
     document.getElementById("dividido").addEventListener("mouseup", function(){
        calculadora.clickArriba("dividido");
     })

   }
 }

 calculadora.init();
