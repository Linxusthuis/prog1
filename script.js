// variavel = elemento "shit"
var dropdown = document.getElementById('shit');
function menuabrir() {
     // se o elemento com o nome "shit" estiver o oposto de visivel ele deixa visivel 
   if (dropdown.style.visibility !='visible'){
        dropdown.style.visibility = 'visible';

   }
//    senão colapsar
   else {
    dropdown.style.visibility = 'collapse';
   
}
   }
   