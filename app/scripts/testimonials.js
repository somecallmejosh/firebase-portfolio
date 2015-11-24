'use strict';
// Get a reference to our testimonials
var tItems = new Firebase('https://jkb-portfolio.firebaseio.com/testimonials');

// Prep template
function displayResults(result, template){
  template.appendTo($('.testimonial-items'));
    var testimonialImage = result.pic,
        testimonialName = result.name,
        testimonialTitle = result.title,
        testimonialCompany = result.company,
        testimonialContent = result.content;
    template.find('.media-object').attr("src", testimonialImage);
    template.find('.media-heading').text(testimonialName);
    template.find('.testimonial-title').text(testimonialTitle);
    template.find('.testimonial-company').text(testimonialCompany);
    template.find('.media-description').text(testimonialContent);
}

// Retrieve new testimonial items as they are added to our database
tItems.on('child_added', function(snapshot) {
  var testimonialTemplate = $('.testimonial-template .testimonial-item').clone();
  var newTestimonialItem = snapshot.val();
  displayResults(newTestimonialItem, testimonialTemplate);
});