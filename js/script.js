$(document).ready(
  function(){
    $('li.relative').mouseover(
         function(){
           $('ul.window').removeClass('display-none').addClass('active');
         }
       );

  }
);
