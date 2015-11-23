'use strict';
// Get a reference to our posts
var tItems = new Firebase('https://jkb-portfolio.firebaseio.com/testimonials');
// Retrieve new posts as they are added to our database
tItems.on('child_added', function(snapshot) {
  var newTestimonial = snapshot.val();
  $('<img src="' + newTestimonial.pic + '">').appendTo('.testimonial-items');
  $('<p>' + newTestimonial.name + '</p>').appendTo('.testimonial-items');
  $('<p>' + newTestimonial.content + '</p>').appendTo('.testimonial-items');
});
