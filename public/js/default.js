'use strict';

$(document).ready(function() {
// const $badge_call = $('#badge_call');
const $badgeTest = $('#badgeTest');

  $.getJSON(`users/current`)
    .done((user) => {
        $.getJSON(`badges/${user.github_id}`)
          .done((userBadges) => {
            for ( var i = 0; i < userBadges.length; i++) {
              if (userBadges[i].badgeComplete === false) {
                $badgeTest.append(
                  '<img src="' + userBadges[i].badgeCompleteLocation + '" class="badge badgeInactiveSmall">'
                );
              }
            }
          })
          .fail(() => {
            Materialize.toast('Unable to retrieve badges', 3000);
          });
        // console.log(user);
    })
    .fail(() => {
     Materialize.toast('Unable to retrieve user', 3000);
    });


  // Initialize collapsable menu
  $(".button-collapse").sideNav();

});
