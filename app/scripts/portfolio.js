'use strict';
// Get a reference to our posts
var pItems = new Firebase('https://jkb-portfolio.firebaseio.com/portfolioItems');

// Retrieve new posts as they are added to our database
pItems.on('child_added', function(snapshot) {
  var newItem = snapshot.val();
  $('<h1><a href="' + newItem.url + '" target="_blank">' + newItem.name + '</a></h1>').appendTo('.portfolio-items');
  $('<p>' + newItem.description + '</p>').appendTo('.portfolio-items');
  $('<p><a href="' + newItem.codeUrl + '" target="_blank">View Code</a></p>').appendTo('.portfolio-items');
});
