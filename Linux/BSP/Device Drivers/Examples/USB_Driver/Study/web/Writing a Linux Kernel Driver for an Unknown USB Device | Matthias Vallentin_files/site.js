(function () {

var RESTORE_WIDTH = 640;

function expand_pre_boxes()
{
  $('pre code, .highlight pre').hover(
    function(event)
    {
      $(this).stop(true).animate({'max-width': "1000px"}, 'fast');
    },
    function(event)
    {
      $(this).stop(true).delay(300).animate(
        {'max-width': RESTORE_WIDTH + "px"}, 'fast');
    }
  );
}

$(document).ready(
  function ()
  {
    expand_pre_boxes();
  }
);

})();
