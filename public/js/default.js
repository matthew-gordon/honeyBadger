'use strict';

$(document).ready(function() {

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
