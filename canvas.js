// check if  jQuery is working
$(function() {
  console.log("DOM is Loaded");

  var poses = {
    downDog: {},
    headstand: {},
    warrior2: {},
    warrior3: {}
  };

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  poses.downDog.drawHead = function() {
    var radius = 25; // Arc radius
    var startAngle = 0; // Starting point on circle
    var endAngle = Math.PI * 2; // End point on circle
    var x = 420;
    var y = 280;
    ctx.moveTo(420, 280);
    ctx.arc(x, y, radius, startAngle, endAngle, true);
    ctx.stroke();
  };

  //DOWNDOG

  poses.downDog.drawFeet = function() {
    ctx.beginPath();
    ctx.moveTo(200, 300);
    ctx.lineTo(150, 300); //foot
    ctx.stroke();
  };

  poses.downDog.drawLegs = function() {
    ctx.beginPath();
    ctx.moveTo(150, 300);
    ctx.lineTo(300, 150); //legs
    ctx.stroke();
  };

  poses.downDog.drawBody = function() {
    ctx.beginPath();
    ctx.moveTo(300, 150);
    ctx.lineTo(450, 300); //body
    ctx.stroke();
  };

  poses.downDog.drawHands = function() {
    ctx.beginPath();
    ctx.moveTo(450, 300);
    ctx.lineTo(500, 300); // hands
    ctx.stroke;
  };

  // HEADSTAND
  poses.headstand.drawHead = function() {
    var radius = 20; // Arc radius
    var startAngle = 0; // Starting point on circle
    var endAngle = Math.PI * 2; // End point on circle
    var x = 300;
    var y = 300;
    ctx.arc(x, y, radius, startAngle, endAngle, true);
    ctx.stroke();
  };

  poses.headstand.drawHands = function() {
    ctx.beginPath();
    ctx.lineTo(500, 300); // hands
    ctx.stroke;
  };

  poses.headstand.drawHead = function() {
    var radius = 20; // Arc radius
    var startAngle = 0; // Starting point on circle
    var endAngle = Math.PI * 2; // End point on circle
    var x = 300;
    var y = 300;
    ctx.arc(x, y, radius, startAngle, endAngle, true);
    ctx.stroke();
  };

  poses.headstand.drawHands = function() {
    ctx.beginPath();
    ctx.moveTo(240, 320);
    ctx.lineTo(280, 340); // hands
    ctx.stroke;
  };

  poses.headstand.drawArms = function() {
    ctx.beginPath();
    ctx.moveTo(300, 250);
    ctx.lineTo(260, 260);
    ctx.lineTo(240, 320);
    ctx.stroke();
  };

  poses.headstand.drawLegs = function() {
    ctx.beginPath();

    ctx.moveTo(300, 100);
    ctx.lineTo(300, 280);
    ctx.stroke();
  };

  poses.headstand.drawLegs();
  poses.headstand.drawHands();
  poses.headstand.drawArms();
  poses.headstand.drawHead();
});
