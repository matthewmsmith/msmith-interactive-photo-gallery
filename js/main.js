




 let $search = $('#search');
 let $img = $('img');


 $search.keyup(function (e) {
 const entered = $search.val().toLowerCase();
  if (entered === `$[data-title]`) {
    $img.show();
  } else if ( value !== '') {
    $img.hide();
  }
});
