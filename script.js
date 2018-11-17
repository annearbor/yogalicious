console.log("hello");

$(document).ready(function() {
  $(".btn").click(function() {
    // if  button class is correct then window alert correct
    if ($(this).hasClass("correct")) {
      window.alert("you are correct");
    } else {
      window.alert("you are wrong");
    }
  });
});
