'use strict';
// Get a reference to our posts
var pItems = new Firebase('https://jkb-portfolio.firebaseio.com/portfolioItems');

// Retrieve new posts as they are added to our database
pItems.on('child_added', function(snapshot) {
  var newItem = snapshot.val();
  $('<img src="' + newItem.pic + '" />').appendTo('.portfolio-items');
  $('<h3><a href="' + newItem.url + '" target="_blank">' + newItem.name + '</a></h3>').appendTo('.portfolio-items');
  $('<p>' + newItem.description + '</p>').appendTo('.portfolio-items');
  $('<p><a class="btn btn-default" href="' + newItem.codeUrl + '" target="_blank">View Code</a></p>').appendTo('.portfolio-items');
});
