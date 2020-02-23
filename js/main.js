// $(document).ready(function(){
//   $('.button[filter="wd"]').click(function () {
//   if($(this).attr('val')=='off'){
//      $('.button[filter]').attr('val','off');
//      $(this).attr('val0','on');
//      $('.filter > div').hide(300);
//      $('.filter > div[filter="wd"]').show(300);
//   }
// });
//   $('.button[filter="ud"]').click(function () {
//     if($(this).attr('val')=='off'){
//        $('.button[filter]').attr('val','off');
//        $(this).attr('val0','on');
//        $('.filter > div').hide(300);
//        $('.filter > div[filter="ud"]').show(300);
//     }
//   });
//     $('.button[filter="moc"]').click(function () {
//       if($(this).attr('val')=='off'){
//          $('.button[filter]').attr('val','off');
//          $(this).attr('val0','on');
//          $('.filter > div').hide(300);
//          $('.filter > div[filter="moc"]').show(300);
//       }
//     });
//       $('.button[filter="all"]').click(function () {
//         if($(this).attr('val')=='off'){
//            $('.button[filter]').attr('val','off');
//            $(this).attr('val0','on');
//            $('.filter > div').show(300);
//         }
//   });
// });
$(document).ready(function () {
  /* Портфолио */
  $('.button[filter]').click(function () {
     if ($(this).attr('val') == 'off') {
        $('.button[filter]').attr('val', 'off').removeClass('focused');
        $(this).attr('val', 'on').addClass('focused');
        $('.filter > div').hide(300);
        $('.filter > div[filter=' + $(this).attr('filter') + ']').show(300);
        if ($(this).attr('filter') == 'all') {
           $('.button[filter]').attr('val', 'off').removeClass('focused');
           $(this).attr('val', 'on').addClass('focused');
           $('.filter > div').show(300);
        }
     }
  })
  });