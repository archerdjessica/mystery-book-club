 function Authorfunction(){
     
   let num=document.getElementById("authors").value;

   switch(num){
       case '1':
       document.getElementById("author21").style.display="none";
       document.getElementById("author22").style.display="none";
       document.getElementById("label21").style.display="none";
       document.getElementById("label22").style.display="none";
       document.getElementById("author31").style.display="none";
       document.getElementById("author32").style.display="none";
       document.getElementById("label31").style.display="none";
       document.getElementById("label32").style.display="none";
       break;
       case '2':
       document.getElementById("author21").style.display="inline";
       document.getElementById("author22").style.display="inline";
       document.getElementById("label21").style.display="inline";
       document.getElementById("label22").style.display="inline";
       
       document.getElementById("author31").style.display="none";
       document.getElementById("author32").style.display="none";
       document.getElementById("label31").style.display="none";
       document.getElementById("label32").style.display="none";  
       break;
       case '3':
       document.getElementById("author21").style.display="inline";
       document.getElementById("author22").style.display="inline";
       document.getElementById("label21").style.display="inline";
       document.getElementById("label22").style.display="inline";
       
       document.getElementById("author31").style.display="inline";
       document.getElementById("author32").style.display="inline";
       document.getElementById("label31").style.display="inline";
       document.getElementById("label32").style.display="inline";  
       break;
       default:
        break;

   }
  
   }