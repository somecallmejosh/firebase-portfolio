'use strict';
// Get a reference to our posts
var rItems = new Firebase('https://jkb-portfolio.firebaseio.com/resume');
// Retrieve new posts as they are added to our database
rItems.on('child_added', function(snapshot) {
  var newResumeItem = snapshot.val();
  console.log('Name: ' + newResumeItem.name);
  console.log('Website: ' + newResumeItem.url);
  console.log('Job Title: ' + newResumeItem.jobTitle);
  console.log('From: ' + newResumeItem.yearStart);
  console.log('To: ' + newResumeItem.yearEnd);
});
