'use strict';

$(document).ready(function() {
const $badge_call = $('#badge_call');

$badge_call.click(function(){
  console.log('click me Alice');

  $.getJSON(`/badges/2`)
       .done((user) => {
         console.log(user);
       })
       .fail(() => {
         Materialize.toast('Unable to retrieve user', 3000);
       });
     })


  // Initialize collapsable menu
  $(".button-collapse").sideNav();
});
