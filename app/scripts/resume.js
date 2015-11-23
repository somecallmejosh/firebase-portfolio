'use strict';
// Get a reference to our posts
var rItems = new Firebase('https://jkb-portfolio.firebaseio.com/resume');
// Retrieve new posts as they are added to our database

var displayResults = function(result, responseContainer){
  responseContainer.appendTo($('.resume'));
    var displayName = result.name;
    responseContainer.find('.lead').text(displayName);
}

rItems.on('child_added', function(snapshot) {
  var resTemplate = $('.resume-template').clone();
  var newResumeItem = snapshot.val();
  displayResults(newResumeItem, resTemplate);
  // $('<h3><a href="' + newResumeItem.url + '" target="_blank">' + newResumeItem.name + '</a></h3>').appendTo('.resume-items');
  // $('<p>' + newResumeItem.jobTitle + '</p>').appendTo('.resume-items');
  // $('<p>' + newResumeItem.yearStart + ' – ' + newResumeItem.yearEnd + '</p>').appendTo('.resume-items');
});
