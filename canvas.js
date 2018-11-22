// check if  jQuery is working

$(function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  console.log("DOM is Loaded");

  var poses = [
    {
      name: "downdog",
      buttonText: "Downward-facing Dog",
      image: function() {
        var radius = 20; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = Math.PI * 2; // End point on circle
        var x = 420;
        var y = 270;
        ctx.moveTo(420, 270);
        ctx.arc(x, y, radius, startAngle, endAngle, true);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(200, 300);
        ctx.lineTo(150, 300); //foot
        ctx.moveTo(150, 300);
        ctx.lineTo(300, 150); //legs
        ctx.lineTo(450, 300); //body
        ctx.lineTo(480, 300); // hands
        ctx.stroke();
      }
    },
    {
      name: "headstand",
      buttonText: "Supported Headstand",
      image: function() {
        var radius = 20; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = Math.PI * 2; // End point on circle
        var x = 300;
        var y = 300;
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
    {
      name: "warrior2",
      buttonText: "Warrior II",
      image: function() {
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
        var radius = 20; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = Math.PI * 2; // End point on circle
        var x = 300;
        var y = 150;
        ctx.moveTo(325, 160); // head
        ctx.arc(x, y, radius, startAngle, endAngle, true);
        ctx.stroke();
      }
    }
  ];

  var extraPoses = [
    {
      name: "downdog",
      buttonText: "Downward-facing Dog"
    },
    {
      name: "headstand",
      buttonText: "Supported Headstand"
    },
    {
      name: "warrior2",
      buttonText: "Warrior II"
    },
    {
      name: "warrior1",
      buttonText: "Warrior I"
    },
    {
      name: "warrior3", //5
      buttonText: "Warrior III"
    },
    {
      name: "shoulderstand",
      buttonText: "Supported Shoulderstand"
    },
    {
      name: "tree",
      buttonText: "Tree Pose"
    },
    {
      name: "halfmoon",
      buttonText: "Half-moonn Pose"
    },
    {
      name: "mountain",
      buttonText: "Mountain Pose"
    },
    {
      name: "death", //10
      buttonText: "Death Pose"
    },
    {
      name: "wheel",
      buttonText: "Wheel Pose"
    }
  ];

  var currentPoseArray = [];
  var randomCurrentPose = Math.floor(Math.random() * poses.length);
  var displayPose = poses[randomCurrentPose];
  currentPoseArray.push(displayPose);

  displayPose.image();

  var otherAnswersArray = extraPoses.filter(function(x) {
    return displayPose.name !== x.name;
  }); // create new copy of extraPoses array that does not have the pose that is already selected
  console.log(otherAnswersArray);
  for (var i = 0; i < otherAnswersArray.length; i++) {
    if (currentPoseArray.length === 3) {
      break;
    } else {
      var randomButton = Math.floor(Math.random() * otherAnswersArray.length);
      currentPoseArray.push(otherAnswersArray[randomButton]);
      otherAnswersArray.splice(randomButton, 1);
    }
  }
  // console.log(otherAnswersArray);
  //console.log(currentPoseArray);

  for (var i = 0; i < 3; i++) {
    //take one away each time
    //  if (i === 1) {
    var randomIndex = Math.floor(Math.random() * currentPoseArray.length);
    var randomButtonString = currentPoseArray[randomIndex];
    var idName = "btn" + (i + 1);
    document.getElementById(idName).innerText = randomButtonString.buttonText;
    // }

    // $("#btn1").(randomButtonString.buttonText);

    console.log(randomButtonString);
    currentPoseArray.splice(randomIndex, 1);
  }

  //splice(randomIndex, 1)
  // $(".answer-buttons").append(randomButtonString);
});

// $(function() {
//   // var gameStarted = false;
//   // var canvas;
//   // $('#start-game-button').click(function() {
//   //     canvas = new starsCanvas();
//   //     canvas.drawStars();
//   //     canvas.drawSchwertfisch();
//   //     console.log('--- drawn the board ---');

//   // zufällige Reihenfolge der buttons
//   // ausschließen dass die richtige antwort als auch falsche da ist
//   // verschiedene Bilder/Posen
//   var randomIndex = Math.floor(Math.random() * answerArray.length); // random position in array ( _.sample )
//   var buttonString = answerArray[randomIndex]; // <button......
//   $(".questionOne").append(buttonString);
//   var randomIndex = Math.floor(Math.random() * answerArray.length); // random position in array ( _.sample )
//   var buttonString = answerArray[randomIndex]; // <button......
//   $(".questionOne").append(buttonString);
//   $(".questionOne").append(answerObject.Schwertfisch);
//   $(".questionOne button").click(function() {
//     if ($(this).attr("data-stellar-constellation") === "Schwertfisch")
//       alert("Juhu!");
//   });
//   // hides the start button
//   $("#start-game-button").hide();
//   $(".questionOne").toggle();
//   gameStarted = true;
// });
