'use strict';

$(document).ready(function() {
// const $badge_call = $('#badge_call');
const $badgeTest = $('#badgeTest');

  $.getJSON(`badges/8294530`)
    .done((userBadges) => {
        for ( var i = 0; i < userBadges.length; i++) {
          if (userBadges[i].badgeComplete === true){
            $badgeTest.append(
              '<img src="' + userBadges[i].badgeCompleteLocation + '" class="badge badgeInactiveSmall">'
            );
          }
        }
    })
    .fail(() => {
     Materialize.toast('Unable to retrieve user', 3000);
    });


  // Initialize collapsable menu
  $(".button-collapse").sideNav();

});
