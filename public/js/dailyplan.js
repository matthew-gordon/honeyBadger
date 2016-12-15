'use strict';

const dailyPlan = $('#dailyPlan');
console.log(dailyPlan);

  var username = "matthew-gordon";
  var password = "blade005";
  var auth = username + ':' + password;
  $.ajax({
    url: "https://api.github.com/repos/matthew-gordon/assignments/contents/",
    beforeSend: function(xhr) {
    xhr.setRequestHeader("Authorization", "Basic " + btoa(auth));
  },
    type: "GET"
  }).done(function(res){
    console.log(res.length);
    var removeExt = ".html";
    var returnFileName;
    for ( var i = 0; i < res.length; i++ ) {
      returnFileName = res[i].name.replace(removeExt, "");
      $.ajax({
        url: 'https://api.github.com/repos/matthew-gordon/assignments/contents/' + returnFileName + '.html',
        beforeSend: function(xhr) {
          xhr.setRequestHeader("Authorization", "Basic " + btoa(auth));
        },
        type: 'GET'
      }).done(function(res) {
        console.log(res);
        var remove = ".html";
        var fileName;
        dailyPlan.append(
          '<li>' +
          '<div class="collapsible-header">' +
          '<i class="material-icons">filter_drama</i>' + res.name.replace(remove, "") + '</div>' +
          '<div class="collapsible-body">' + atob(res.content) + '</div>' +
          '</li>'
        );
      });
    }
  });
