var siteConstants = new Firebase("https://jkb-portfolio.firebaseio.com/siteConstants");
siteConstants.on("value", function(snapshot) {
  $('.name').text(snapshot.val().name);
  $('.tagline').text(snapshot.val().jobTitle);
  $('.phone').attr("href", "tel:" + snapshot.val().phone);
  $('.phone').text(snapshot.val().phoneFormatted);
  $('.twitter').attr("href", snapshot.val().twitter);
  $('.github').attr("href", snapshot.val().gitHub);
  $('.linkedin').attr("href", snapshot.val().linkedIn);
  $('.email').attr("href", "mailto:" + snapshot.val().email);
}, function(errorObject) {
  console.log("No dice on site constants: "  + errorObject.code);
});