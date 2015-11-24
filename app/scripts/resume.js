'use strict';
// Get a reference to our resume Items
var rItems = new Firebase('https://jkb-portfolio.firebaseio.com/resume');

// Prep template
function displayResults(result, template){
  template.appendTo($('.resume-items'));
    var displayName = result.name,
        jobTitle = result.jobTitle,
        link = result.url,
        yearStart = result.yearStart,
        snippet = result.snippet,
        yearEnd = result.yearEnd;
    template.find('.company-name').prepend(displayName);
    template.find('.job-title').text(jobTitle);
    template.find('.link').attr("href", link);
    template.find('.year-start').text(yearStart);
    template.find('.year-end').text(yearEnd);
    template.find('.snippet').text(snippet);
}

// Retrieve new resume items as they are added to our database
rItems.on('child_added', function(snapshot) {
  var resumeTemplate = $('.template .resume-template').clone();
  var newResumeItem = snapshot.val();
  console.log(snapshot.val().url.length);
  displayResults(newResumeItem, resumeTemplate);
});
