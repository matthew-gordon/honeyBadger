'use strict';

const dailyPlan = $('#dailyPlan');
console.log(dailyPlan);

$('#button1').click(function() {
  var username = "jkgold";
  var password = "u$@089513";
  var auth = username + ':' + password;
  $.ajax({
    url: "https://api.github.com/repos/jkgold/dailyPlanHoneyBadger/contents/",
    beforeSend: function(xhr) {
    xhr.setRequestHeader("Authorization", "Basic " + btoa(auth));
  },
    type: "GET"
  }).done(function(res){
    console.log(res.length);
    var removeExt = ".md";
    var returnFileName;
    for ( var i = 0; i < res.length; i++ ) {
      returnFileName = res[i].name.replace(removeExt, "");
      dailyPlan.append(
        '<div class="col s12 m6">' +
         '<div class="card">' +
           '<div class="card-content">' +
             '<span class="card-title">' + returnFileName + '</span>' +
           '</div>' +
         '</div>' +
       '</div>'
      );
    }
  });
});
