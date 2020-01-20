// $(document).ready(
//   function(){
//     $('li.relative').mouseover(
//          function(){
//          $('ul.window').addClass('.active').removeClass('display-none');
//        });
//     $('li.relative').mouseout(
//         function(){
//           $('ul.window').addClass('display-none').removeClass('.active');
//         }
//     );
//
//
//   }
// );

$(document).ready(
  function(){
    // $('li.relative').each(function (){
      $('li.relative').mouseover(
        function(){
          $(this).children('ul.display-none').addClass('.active').removeClass('display-none');
       });
       $('ul.display-none').mouseout(
         function(){
           $(this).addClass('display-none').removeClass('.active');
         });
    // });
  }
);
