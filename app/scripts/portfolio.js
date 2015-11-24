'use strict';
// Get a reference to our portfolio items
var pItems = new Firebase('https://jkb-portfolio.firebaseio.com/portfolioItems');

// Prep template
function displayPortfolioItems(result, template){
  template.appendTo($('.portfolio-items'));
    var projectImage = result.pic,
        projectSiteLink = result.url,
        projectCodeLink = result.codeUrl,
        projectDescription = result.description,
        projectName = result.name;
    template.find('.portfolio-image').attr("src", projectImage);
    template.find('.project-name').text(projectName);
    template.find('.description').text(projectDescription);
    template.find('.project-link').attr("href", projectSiteLink);
    template.find('.code-link').attr("href", projectCodeLink);
}

// Retrieve new portfolio items as they are added to our database
pItems.on('child_added', function(snapshot) {
  var portfolioTemplate = $('.portfolio-template .portfolio-item').clone();
  var newPortfolioItem = snapshot.val();
  displayPortfolioItems(newPortfolioItem, portfolioTemplate);
});