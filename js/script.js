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
    $('li.relative').each(function (){
      $(this).mouseover(
        function(){
          $('ul.window').addClass('.active').removeClass('display-none');
       });
    });
      $(this).mouseout(
        function(){
          $('ul.window').addClass('display-none').removeClass('.active');
        }
    );
  }
);
