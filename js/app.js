 var calculadora = {
   num1: 0, punto: 0,

   clickAbajo : function(i){
     document.getElementById(i).style.transform = "scale(0.9, 0.9)"
   },

   clickArriba: function(i){
     document.getElementById(i).style.transform = "scale(1, 1)"
   },

   escribir: function(i){
     if(calculadora.num1 == 0 && calculadora.punto ==0){
       calculadora.num1 = i;
       console.log("Este numero es"+calculadora.num1);
     } else {
       calculadora.num1+= i;
     }
     document.getElementById('display').innerHTML =calculadora.num1;
   },

   borrar: function(){
     calculadora.num1 = 0;
     calculadora.punto = 0;
     document.getElementById('display').innerHTML =calculadora.num1;
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

     document.getElementById("dividido").addEventListener("mousedown", function(){
        calculadora.clickAbajo("dividido");
     })
     document.getElementById("dividido").addEventListener("mouseup", function(){
        calculadora.clickArriba("dividido");
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

     document.getElementById("por").addEventListener("mousedown", function(){
        calculadora.clickAbajo("por");
     })
     document.getElementById("por").addEventListener("mouseup", function(){
        calculadora.clickArriba("por");
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

     document.getElementById("menos").addEventListener("mousedown", function(){
        calculadora.clickAbajo("menos");
     })
     document.getElementById("menos").addEventListener("mouseup", function(){
        calculadora.clickArriba("menos");
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
     })
     document.getElementById("igual").addEventListener("mouseup", function(){
        calculadora.clickArriba("igual");
     })

     document.getElementById("mas").addEventListener("mousedown", function(){
        calculadora.clickAbajo("mas");
     })
     document.getElementById("mas").addEventListener("mouseup", function(){
        calculadora.clickArriba("mas");
     })

   }
 }

 calculadora.init();
