'use strict';

$(document).ready(function() {
// const $badge_call = $('#badge_call');
const $badgeTest = $('#badgeTest');

  $.getJSON(`users/current`)
    .done((user) => {
      $.getJSON(`badges/${user.github_id}`)
        .done((userBadges) => {
          console.log(user.github_id);
          for ( var i = 0; i < userBadges.length; i++) {
            if (userBadges[i].badgeComplete === true) {
              $badgeTest.append(
                '<img src="' + userBadges[i].badgeCompleteLocation + '" class="badge badgeInactiveSmall">'
              );
            } else {
              $badgeTest.append(
                '<img src="' + userBadges[i].badgeIncompleteLocation + '" class="badge badgeInactiveSmall">'
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

  // Github chip
  let $user = $('#user');

    $.getJSON(`users/current`)
      .done((user) => {
          console.log(user.github_id);
          console.log(user.gh_avatar_url);
          console.log(user.name);

          $user.append(
            '<div class="chip">' +
            '<img src="' + user.gh_avatar_url + '">' +
            user.name +
            '</div>'
          );

      })
      .fail(() => {
       Materialize.toast('Unable to retrieve user', 3000);
      });

});
