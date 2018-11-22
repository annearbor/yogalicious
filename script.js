// console.log("hello");

$(document).ready(function() {
  $(".btn").click(function() {
    console.log(this.innerText);
    // if  then window alert correct
    if (this.innerText === displayPose.buttonText) {
      window.alert("you are correct");
    } else {
      window.alert("you are wrong");
    }
  });
});
