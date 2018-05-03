 var calculadora = {
   clickAbajo : function(i){
     document.getElementById(i).style.transform = "scale(0.9, 0.9)"
   },
   clickArriba: function(i){
     document.getElementById(i).style.transform = "scale(1, 1)"
   },

   init: function(){
     document.getElementById("on").addEventListener("mousedown", function(){
        calculadora.clickAbajo("on");
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
     })
     document.getElementById("7").addEventListener("mouseup", function(){
        calculadora.clickArriba("7");
     })

     document.getElementById("8").addEventListener("mousedown", function(){
        calculadora.clickAbajo("8");
     })
     document.getElementById("8").addEventListener("mouseup", function(){
        calculadora.clickArriba("8");
     })

     document.getElementById("9").addEventListener("mousedown", function(){
        calculadora.clickAbajo("9");
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
     })
     document.getElementById("4").addEventListener("mouseup", function(){
        calculadora.clickArriba("4");
     })

     document.getElementById("5").addEventListener("mousedown", function(){
        calculadora.clickAbajo("5");
     })
     document.getElementById("5").addEventListener("mouseup", function(){
        calculadora.clickArriba("5");
     })

     document.getElementById("6").addEventListener("mousedown", function(){
        calculadora.clickAbajo("6");
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
     })
     document.getElementById("1").addEventListener("mouseup", function(){
        calculadora.clickArriba("1");
     })

     document.getElementById("2").addEventListener("mousedown", function(){
        calculadora.clickAbajo("2");
     })
     document.getElementById("2").addEventListener("mouseup", function(){
        calculadora.clickArriba("2");
     })

     document.getElementById("3").addEventListener("mousedown", function(){
        calculadora.clickAbajo("3");
     })
     document.getElementById("3").addEventListener("mouseup", function(){
        calculadora.clickArriba("3");
     })

     document.getElementById("0").addEventListener("mousedown", function(){
        calculadora.clickAbajo("0");
     })
     document.getElementById("0").addEventListener("mouseup", function(){
        calculadora.clickArriba("0");
     })

     document.getElementById("punto").addEventListener("mousedown", function(){
        calculadora.clickAbajo("punto");
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
