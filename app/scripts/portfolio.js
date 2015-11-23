// Get a reference to our posts
var pItems = new Firebase("https://jkb-portfolio.firebaseio.com/portfolioItems");

// Retrieve new posts as they are added to our database
pItems.on("child_added", function(snapshot, prevChildKey) {
  var newItem = snapshot.val();
  console.log("Name: " + newItem.name);
  console.log("Url: " + newItem.url);
});