$(document).ready(
  function(){
    $('li.relative').mouseover(
         function(){
         $('ul.prodotti').addClass('.active').removeClass('display-none');
       });
    $('li.relative').mouseout(
        function(){
          $('ul.prodotti').addClass('display-none').removeClass('.active');
        }
    );


  }
);
