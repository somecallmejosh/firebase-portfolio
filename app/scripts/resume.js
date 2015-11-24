'use strict';
// Get a reference to our resume Items
var rItems = new Firebase('https://jkb-portfolio.firebaseio.com/resume');

// Prep template
function displayResumeItems(result, template, hasUrl){
  template.appendTo($('.resume-items'));
    var displayName = result.name,
        jobTitle = result.jobTitle,
        link = result.url,
        yearStart = result.yearStart,
        snippet = result.snippet,
        yearEnd = result.yearEnd;
    template.find('.company-name').prepend(displayName);
    template.find('.job-title').text(jobTitle);
    template.find('.year-start').text(yearStart);
    template.find('.year-end').text(yearEnd);
    template.find('.snippet').text(snippet);
    template.find('.link').attr("href", link);
}

// Retrieve new resume items as they are added to our database
rItems.on('child_added', function(snapshot) {
  var resumeTemplate = $('.template .resume-template').clone();
  var newResumeItem = snapshot.val();
  var urlLength = snapshot.val().url.length;
  if(urlLength === 0){
    resumeTemplate.find(".link").hide();
  }
  displayResumeItems(newResumeItem, resumeTemplate, urlLength);
});
