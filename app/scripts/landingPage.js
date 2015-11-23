'use strict';

var lpContent = new Firebase('https://jkb-portfolio.firebaseio.com/landingPageContent');
lpContent.on('value', function(snapshot) {
  $('.bio-pic').attr("src", snapshot.val().bioPic);
  $('.bio-content').text(snapshot.val().bio);
}, function(errorObject) {
  console.log('No dice on site constants: ' + errorObject.code);
});