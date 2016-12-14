'use strict';

$(document).ready(function() {

const $badgeTest = $('#badgeTest');
const $achievements = $('#achievements');
const $masterbadge = $('#masterbadge');

// Initialize collapsable menu
$(".button-collapse").sideNav();
// Initialize tooltips
$('.tooltipped').tooltip({delay: 50});

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
              `<img id="badge${userBadges[i].badgeId}" src= "${userBadges[i].badgeCompleteLocation}" class="badgeInactiveSmall tooltipped" data-position="top" data-delay="50" data-tooltip="${userBadges[i].badgeName}">`);
            $(`#badge${userBadges[i].badgeId}`).tooltip();
            completedBadges.push(userBadges[i].badgeId);
          } else {
            $badgeTest.append(
              `<img id="badge${userBadges[i].badgeId}" src= "${userBadges[i].badgeIncompleteLocation}" class="badgeInactiveSmall tooltipped" data-position="top" data-delay="50" data-tooltip="${userBadges[i].badgeName}">`);
            $(`#badge${userBadges[i].badgeId}`).tooltip();
          }
        }

        $.getJSON('achievements')
          .done((achievements) => {

            if (completedBadges.includes(2) && completedBadges.includes(4)) {
              $achievements.append(`<li><img id="achievement1" src="img/htmlgold.svg" class="achievementBadge tooltipped" data-position="bottom" data-delay="50" data-tooltip="${achievements[0].name}" ></img></li>`);
              $('#achievement1').tooltip();
            }

            if (completedBadges.includes(1) && completedBadges.includes(6)) {
              $achievements.append(`<li><img id="achievement2" src="img/htmlgold.svg" class="achievementBadge tooltipped" data-position="bottom" data-delay="50" data-tooltip="${achievements[1].name}" ></img></li>`);
              $('#achievement2').tooltip();
            }

            if (completedBadges.includes(9) && completedBadges.includes(5)) {
              $achievements.append(`<li><img id="achievement3" src="img/htmlgold.svg" class="achievementBadge tooltipped" data-position="bottom" data-delay="50" data-tooltip="${achievements[2].name}" ></img></li>`);
              $('#achievement3').tooltip();
            }

          })
          .fail(() => {
            Materialize.toast('Unable to retrieve achievements', 3000);
          });

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
