'use strict';
// Get a reference to our posts
var rItems = new Firebase('https://jkb-portfolio.firebaseio.com/resume');
// Retrieve new posts as they are added to our database
rItems.on('child_added', function(snapshot) {
  var newResumeItem = snapshot.val();
  $('<h1><a href="' + newResumeItem.url + '" target="_blank">' + newResumeItem.name + '</a></h1>').appendTo('.resume-items');
  $('<p>' + newResumeItem.jobTitle + '</p>').appendTo('.resume-items');
  $('<p>' + newResumeItem.yearStart + ' – ' + newResumeItem.yearEnd + '</p>').appendTo('.resume-items');
});
