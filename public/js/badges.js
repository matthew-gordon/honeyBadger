'use strict';

$(document).ready(function() {
// const $badge_call = $('#badge_call');
const $badgeTest = $('#badgeTest');

// Initialize collapsable menu
$(".button-collapse").sideNav();

$.getJSON(`users/current`)
  .done((user) => {
    let $user = $('#user');

    $user.append(
      '<div class="chip">' +
      '<img src="' + user.gh_avatar_url + '">' +
      user.name +
      '</div>'
    );

    $.getJSON(`badges/${user.github_id}`)
      .done((userBadges) => {
        const completedBadges = [];
        for ( var i = 0; i < userBadges.length; i++) {
          if (userBadges[i].badgeComplete === true) {
            $badgeTest.append(
              '<img src="' + userBadges[i].badgeCompleteLocation + '" class="badge badgeInactiveSmall">'
            );
            completedBadges.push(userBadges[i].badgeId);
          } else {
            $badgeTest.append(
              '<img src="' + userBadges[i].badgeIncompleteLocation + '" class="badge badgeInactiveSmall">'
            );
          }
        }

        $.getJSON('achievements')
          .done((achievements) => {
            let $achievements = $('#achievements');

            if (completedBadges.includes(2) && completedBadges.includes(4)) {
              $achievements.append('<li><img class="achievementBadge" src="img/htmlgold.svg"></img></li>');
            }

            if (completedBadges.includes(1) && completedBadges.includes(6)) {
              $achievements.append('<li><img class="achievementBadge" src="img/htmlgold.svg"></img></li>');
            }

            if (completedBadges.includes(9) && completedBadges.includes(5)) {
              $achievements.append('<li><img class="achievementBadge" src="img/htmlgold.svg"></img></li>');
            }

          })
          .fail(() => {
            Materialize.toast('Unable to retrieve achievements', 3000);
          });

        let $masterbadge = $('#masterbadge');
        if (completedBadges.length === 8) {
          $masterbadge.attr('src','img/htmlgold.svg');
          $masterbadge.removeClass('badgeInactive');
        }

      })
      .fail(() => {
        Materialize.toast('Unable to retrieve badges', 3000);
      });

  })
  .fail(() => {
    Materialize.toast('Unable to retrieve user', 3000);
  });

});
