var canvas;
var ctx;

var displayPose = 0;
var currentPoseArray = [];
var alreadyPlayedArray = [];
var randomCurrentPose;
var buttonClass = "btn";

var counter1 = 0;
var counter2 = 0;

//onclick draw canvas and hide the buttons , in the same div, toggle hide /show
$(document).ready(function() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  $(".level1").click(function() {
    //set attr("pose-name") = >buttonText
    update();
  });
  // §(".level2").click(function() {
  //   //set attribute -> sanskritText
  //   update();
  // });

  //if (displayPose !== 0) {
  $(".btn").click(function() {
    if ($(this).attr("pose-name") === displayPose.name) {
      console.log("pose-name");
      clearCanvas();
      positiveFeedbackScreen();
      countCorrect();
      countTotal();
      if (checkGameEnd()) return;
      delay();
    } else {
      //window.alert("you are wrong");
      clearCanvas();
      countTotal();
      negativeFeedbackScreen();
      if (checkGameEnd()) return;
      delay();
    }
  });
});

function clearCanvas() {
  ctx.clearRect(0, 0, 600, 400);
  console.log(" --- cleared the canvas --- ");
}

//selects a random element from an array
function sample(array) {
  var randomCurrentPose = Math.floor(Math.random() * array.length);
  return array[randomCurrentPose];
}

function drawRandomPose() {
  currentPoseArray = [];
  console.log(" --- drawRandomPose --- ");
  displayPose = sample(poses);

  if (alreadyPlayedArray.length === poses.length) return;

  while (alreadyPlayedArray.includes(displayPose) === true) {
    displayPose = sample(poses); //this is an object
  }
  alreadyPlayedArray.push(displayPose);
  currentPoseArray.push(displayPose);
  //invokes the function that draws the image on the canvas
  displayPose.image();
  selectExtraPoses();
  // }
}

//selects the extra poses to display as answer option and put it on the buttons
function selectExtraPoses() {
  var otherAnswersArray = extraPoses.filter(function(x) {
    return displayPose.name !== x.name;
  }); // create new copy of extraPoses array that does not have the pose that is already selected
  //console.log(otherAnswersArray);
  for (var i = 0; i < otherAnswersArray.length; i++) {
    if (currentPoseArray.length === 3) {
      break;
    } else {
      //pushes a random pose (button) from the other array into a new array
      var randomButton = sample(otherAnswersArray);
      currentPoseArray.push(randomButton);
      //randomCurrentPose is an object! thats why splice doesnt work without index of
      otherAnswersArray.splice(otherAnswersArray.indexOf(randomButton), 1);
    }
  }
  // }

  // console.log(otherAnswersArray);
  //console.log("currentPoseArray", currentPoseArray[0]);
  // function assignButtonText() {
  for (var i = 0; i < 3; i++) {
    //takes random element from that array and assigns the buttonText to the button
    var randomCurrentPose = sample(currentPoseArray);
    console.log("randomCurrentPose", randomCurrentPose);
    var idName = "btn" + (i + 1);
    document.getElementById(idName).innerText = randomCurrentPose.buttonText;
    $(document.getElementById(idName)).attr(
      "pose-name",
      randomCurrentPose.buttonText
    );
    //$(document.getElementById(idName)).attr("pose-name",randomCurrentPose.sanskritText);
    // removes the "used" name from the array so it doesnt get assigned twice

    currentPoseArray.splice(currentPoseArray.indexOf(randomCurrentPose), 1);
  }
}

// function setLevelOne() {
//   var buttonClass = "btn";
//   document.getElementsByClassName(buttonClass).innerText =
//     randomCurrentPose.buttonText;
//   $(document.getElementById(idName)).attr("pose-name", randomCurrentPose.name);
// }

function setlevelOne() {
  var idName = "btn" + (i + 1);

  document.getElementById(idName).innerText = randomCurrentPose.buttonText;
  $(document.getElementById(idName)).attr("pose-name", randomCurrentPose.name);
}

function positiveFeedbackScreen() {
  ctx.font = "25px serif";
  ctx.fillText("Well done", 250, 200, 100);
  //text, x, y, max with
}

function negativeFeedbackScreen() {
  ctx.font = "25px serif";
  ctx.fillText("Maybe next time...", 200, 200, 400);
}

function delay() {
  setTimeout(() => {
    update();
  }, 2000);
}
function update() {
  clearCanvas();
  drawRandomPose();
  //selectExtraPoses();
}

function countCorrect() {
  counter1++;
  if (counter1 == O) {
    document.getElementById("countCorrect").innerHTML = "Zero";
  } else {
    document.getElementById("countCorrect").innerHTML = counter1;

    // ctx.font = "16px serif red";
    // ctx.fillText("Score: " + counter, 190, 150);
  }
}

function countTotal() {
  counter2++;
  document.getElementById("countTotal").innerHTML = " / " + counter2;
}

function checkGameEnd() {
  if (counter1 === poses.length) {
    setHighscore();
    showResult();
    drawHighscore();
    return true;
  } else {
    return false;
  }
}

function showResult() {
  clearCanvas();
  ctx.font = "25px serif";
  ctx.fillText("Correct answers:" + count, 190, 150);
}

function setHighscore() {
  var highscoresArray = JSON.parse(localStorage.getItem("highscores"));
  if (!highscoresArray) {
    highscoresArray = [];
  }
  highscoresArray.push({ name: "yogi löw", score: count });
  localStorage.setItem("highscores", JSON.stringify(highscoresArray));
}

function drawHighscore() {
  var highscoresArray = JSON.parse(localStorage.getItem("highscores"));
  highscoresArray.forEach(function(el, index) {
    ctx.font = "25px serif red";
    ctx.fillText(el.name + " => " + el.score, 190, 180 + index * 30);
  });
}
