//this is not needed

var poses = {
  downDog: {},
  // {name: downDog drawing: function}
  headstand: {},
  warrior2: {}
  //warrior3: {}
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//DOWNDOG

// image: function() {
//     console.log("drawing " + this.name);
//     var radius = 20; // Arc radius
//     var startAngle = 0; // Starting point on circle
//     var endAngle = Math.PI * 2; // End point on circle
//     var x = 420;
//     var y = 270;
//     ctx.beginPath();
//     ctx.moveTo(420, 270);
//     ctx.arc(x, y, radius, startAngle, endAngle, true);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(200, 300);
//     ctx.lineTo(150, 300); //foot
//     ctx.moveTo(150, 300);
//     ctx.lineTo(300, 150); //legs
//     ctx.lineTo(450, 300); //body
//     ctx.lineTo(480, 300); // hands
//     ctx.stroke();
//   }
poses.downDog.drawHead = function(ctx) {
  var radius = 20; // Arc radius
  var startAngle = 0; // Starting point on circle
  var endAngle = Math.PI * 2; // End point on circle
  var x = 420;
  var y = 280;
  ctx.moveTo(420, 280);
  ctx.arc(x, y, radius, startAngle, endAngle, true);
  ctx.stroke();
};

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
{
    name: "headstand",
    buttonText: "Supported Headstand",
    sanskritText: "Salamba Sirsasana",
    image: function() {
      console.log("drawing " + this.name);
      var radius = 20; // Arc radius
      var startAngle = 0; // Starting point on circle
      var endAngle = Math.PI * 2; // End point on circle
      var x = 300;
      var y = 300;
      ctx.beginPath();
      ctx.arc(x, y, radius, startAngle, endAngle, true);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(300, 280);
      ctx.lineTo(300, 100);
      ctx.lineTo(280, 80);
      ctx.moveTo(300, 240);
      ctx.lineTo(260, 250);
      ctx.moveTo(260, 250);
      ctx.lineTo(240, 320);
      ctx.lineTo(260, 330); //hands
      ctx.stroke();
    }
  },
poses.headstand.drawHead = function() {
  var radius = 20; // Arc radius
  var startAngle = 0; // Starting point on circle
  var endAngle = Math.PI * 2; // End point on circle
  var x = 300;
  var y = 300;
  ctx.arc(x, y, radius, startAngle, endAngle, true);
  ctx.stroke();
};

poses.headstand.drawLegs = function() {
  ctx.beginPath();
  ctx.moveTo(300, 280);
  ctx.lineTo(300, 100);
  ctx.lineTo(280, 80);
  ctx.stroke();
};

poses.headstand.drawArms = function() {
  ctx.beginPath();
  ctx.moveTo(300, 240);
  ctx.lineTo(260, 250);
  ctx.moveTo(260, 250);
  ctx.lineTo(240, 330);
  ctx.stroke();
};

poses.headstand.drawHands = function() {
  ctx.beginPath();
  ctx.moveTo(240, 330);
  ctx.lineTo(260, 330);
  ctx.stroke();
};

// poses.headstand.drawHead();
// poses.headstand.drawLegs();
// poses.headstand.drawArms();

// Warrior 2
{
    name: "warrior2",
    buttonText: "Warrior II",
    sanskritText: "Virabhadrasana II",
    image: function() {
      console.log("drawing " + this.name);
      ctx.beginPath(); //body
      ctx.moveTo(300, 150);
      ctx.lineTo(300, 250);
      ctx.moveTo(230, 200); //arms
      ctx.lineTo(375, 200); //leg1
      ctx.moveTo(300, 250);
      ctx.lineTo(380, 250);
      ctx.lineTo(390, 280);
      ctx.lineTo(410, 278); //leg2
      ctx.moveTo(300, 250);
      ctx.lineTo(200, 300);
      ctx.lineTo(210, 310);
      ctx.stroke();
      ctx.beginPath();
      var radius = 20; // Arc radius
      var startAngle = 0; // Starting point on circle
      var endAngle = Math.PI * 2; // End point on circle
      var x = 300;
      var y = 150;
      ctx.moveTo(325, 160); // head
      ctx.arc(x, y, radius, startAngle, endAngle, true);
      ctx.stroke();
    }
  },

poses.warrior2.drawBody = function() {
  ctx.beginPath();
  ctx.moveTo(300, 150);
  ctx.lineTo(300, 250);
  ctx.stroke();
};

poses.warrior2.drawArms = function() {
  ctx.beginPath();
  ctx.moveTo(230, 200);
  ctx.lineTo(375, 200);
  ctx.stroke();
};

poses.warrior2.drawLeg1 = function() {
  ctx.beginPath();
  ctx.moveTo(300, 250);
  ctx.lineTo(380, 250);
  ctx.lineTo(390, 280);
  ctx.lineTo(410, 278);
  ctx.stroke();
};

poses.warrior2.drawLeg2 = function() {
  ctx.beginPath();
  ctx.moveTo(300, 250);
  ctx.lineTo(200, 300);
  ctx.lineTo(210, 310);
  ctx.stroke();
};

poses.warrior2.drawHead = function() {
  var radius = 20; // Arc radius
  var startAngle = 0; // Starting point on circle
  var endAngle = Math.PI * 2; // End point on circle
  var x = 300;
  var y = 150;
  ctx.moveTo(325, 160);
  ctx.arc(x, y, radius, startAngle, endAngle, true);
  ctx.stroke();
};

// poses.warrior2.drawBody();
// poses.warrior2.drawArms();
// poses.warrior2.drawLeg1();
// poses.warrior2.drawLeg2();
// poses.warrior2.drawHead(ctx);
// kann als parameter übergeben werden, wenn alle drawings in ein andere file kommen sollen
