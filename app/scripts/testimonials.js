'use strict';
// Get a reference to our posts
var tItems = new Firebase('https://jkb-portfolio.firebaseio.com/testimonials');
// Retrieve new posts as they are added to our database
tItems.on('child_added', function(snapshot) {
  var newTestimonial = snapshot.val();
  console.log('Name: ' + newTestimonial.name);
  console.log('Pic: ' + newTestimonial.pic);
  console.log('Content: ' + newTestimonial.content);
});
