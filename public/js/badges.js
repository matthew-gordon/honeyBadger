'use strict';

$(document).ready(function() {

const $achievements = $('#achievements');

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

        let totalCompletedBadges = [];
        let htmlBadges = [];
        let jsBadges = [];
        let dbBadges = [];

        for (let j=0;j<userBadges.length;j++) {
          if (userBadges[j].badgeName.includes('HTML')) {
            htmlBadges.push(userBadges[j]);
          }

          if (userBadges[j].badgeName.includes('Javascript')) {
            jsBadges.push(userBadges[j]);
          }

          if (userBadges[j].badgeName.includes('Postgres')) {
            dbBadges.push(userBadges[j]);
          }
        }

        let trackArray = [htmlBadges, jsBadges, dbBadges];

        for (let k=0;k<trackArray.length;k++) {
          let completedBadges = [];
          let $track;
          let track;

          switch(k) {
            case(0):
            $track = $('#htmlTrack');
            track = 'html';
            break;
            case(1):
            $track = $('#jsTrack');
            track = 'js';
            break;
            case(2):
            $track = $('#dbTrack');
            track = 'db';
            break;
          }

          for (let i=0; i<trackArray[k].length;i++) {

            if (trackArray[k][i].badgeComplete === true) {
              if(trackArray[k][i].badgeTrackPosition < 3 && trackArray[k][i].badgeTrackPosition > 0) {

                $track.children('.goldLevel').append(`<img id="badge${trackArray[k][i].badgeId}" src= "${trackArray[k][i].badgeCompleteLocation}" class="badgeInactiveSmall tooltipped" data-position="top" data-delay="50" data-tooltip="${trackArray[k][i].badgeName}">`);

                $(`#badge${trackArray[k][i].badgeId}`).tooltip();

              } else if (trackArray[k][i].badgeTrackPosition < 6 && trackArray[k][i].badgeTrackPosition > 2) {

                $track.children('.silverLevel').append(`<img id="badge${trackArray[k][i].badgeId}" src= "${trackArray[k][i].badgeCompleteLocation}" class="badgeInactiveSmall tooltipped" data-position="top" data-delay="50" data-tooltip="${trackArray[k][i].badgeName}">`);

                $(`#badge${trackArray[k][i].badgeId}`).tooltip();

              } else {

                $track.children('.bronzeLevel').append(`<img id="badge${trackArray[k][i].badgeId}" src= "${trackArray[k][i].badgeCompleteLocation}" class="badgeInactiveSmall tooltipped" data-position="top" data-delay="50" data-tooltip="${trackArray[k][i].badgeName}">`);

                $(`#badge${trackArray[k][i].badgeId}`).tooltip();

              }

              completedBadges.push(trackArray[k][i].badgeId);
              totalCompletedBadges.push(trackArray[k][i].badgeId);

            } else {

              if(trackArray[k][i].badgeTrackPosition < 3 && trackArray[k][i].badgeTrackPosition > 0) {
                $track.children('.goldLevel').append(`<img id="badge${trackArray[k][i].badgeId}" src= "${trackArray[k][i].badgeIncompleteLocation}" class="badgeInactiveSmall tooltipped" data-position="top" data-delay="50" data-tooltip="${trackArray[k][i].badgeName}">`);

                $(`#badge${trackArray[k][i].badgeId}`).tooltip();

              } else if (trackArray[k][i].badgeTrackPosition < 6 && trackArray[k][i].badgeTrackPosition > 2) {

                $track.children('.silverLevel').append(`<img id="badge${trackArray[k][i].badgeId}" src= "${trackArray[k][i].badgeIncompleteLocation}" class="badgeInactiveSmall tooltipped" data-position="top" data-delay="50" data-tooltip="${trackArray[k][i].badgeName}">`);

                $(`#badge${trackArray[k][i].badgeId}`).tooltip();

              } else {

                $track.children('.bronzeLevel').append(`<img id="badge${trackArray[k][i].badgeId}" src= "${trackArray[k][i].badgeIncompleteLocation}" class="badgeInactiveSmall tooltipped" data-position="top" data-delay="50" data-tooltip="${trackArray[k][i].badgeName}">`);

                $(`#badge${trackArray[k][i].badgeId}`).tooltip();
              }

            }

        }

        if (completedBadges.length === 7) {
          $track.children().children('.masterbadge').attr('src',`img/${track}gold.svg`);
        }

      }
      $.getJSON('achievements')
      .done((achievements) => {

        if (totalCompletedBadges.includes(1) && totalCompletedBadges.includes(2)) {
          $achievements.append(`<li><img id="achievement1" src="${achievements[0].imageUrl}" class="achievementBadge tooltipped" data-position="bottom" data-delay="50" data-tooltip="${achievements[0].name}"></img></li>`);
          $('#achievement1').tooltip();
        }

        if (totalCompletedBadges.includes(6) && totalCompletedBadges.includes(7) && totalCompletedBadges.includes(5)) {
          $achievements.append(`<li><img id="achievement2" src="${achievements[1].imageUrl}" class="achievementBadge tooltipped" data-position="bottom" data-delay="50" data-tooltip="${achievements[1].name}"></img></li>`);
          $('#achievement2').tooltip();
        }

        if (totalCompletedBadges.includes(8) && totalCompletedBadges.includes(9)) {
          $achievements.append(`<li><img id="achievement3" src="${achievements[2].imageUrl}" class="achievementBadge tooltipped" data-position="bottom" data-delay="50" data-tooltip="${achievements[2].name}"></img></li>`);
          $('#achievement3').tooltip();
        }

        if (totalCompletedBadges.includes(13) && totalCompletedBadges.includes(14)) {
          $achievements.append(`<li><img id="achievement4" src="${achievements[3].imageUrl}" class="achievementBadge tooltipped" data-position="bottom" data-delay="50" data-tooltip="${achievements[3].name}"></img></li>`);
          $('#achievement4').tooltip();
        }

        if (totalCompletedBadges.includes(15) && totalCompletedBadges.includes(16) && totalCompletedBadges.includes(17)) {
          $achievements.append(`<li><img id="achievement5" src="${achievements[4].imageUrl}" class="achievementBadge tooltipped" data-position="bottom" data-delay="50" data-tooltip="${achievements[4].name}"></img></li>`);
          $('#achievement5').tooltip();
        }

        if (totalCompletedBadges.includes(20) && totalCompletedBadges.includes(21)) {
          $achievements.append(`<li><img id="achievement6" src="${achievements[5].imageUrl}" class="achievementBadge tooltipped" data-position="bottom" data-delay="50" data-tooltip="${achievements[5].name}"></img></li>`);
          $('#achievement6').tooltip();
        }

      })
      .fail(() => {
        Materialize.toast('Unable to retrieve achievements', 3000);
      });

      })
      .fail(() => {
        Materialize.toast('Unable to retrieve badges', 3000);
      });

  })
  .fail(() => {
    Materialize.toast('Unable to retrieve user', 3000);
  });
});
