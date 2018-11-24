var canvas;
var ctx;

var displayPose = 0;
var currentPoseArray = [];
var alreadyPlayedArray = [];
var randomCurrentPose;

var count = 0;

//onclick draw canvas and hide the buttons , in the same div, toggle hide /show
$(document).ready(function() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  $(".level1").click(function() {
    update();
  });
  //if (displayPose !== 0) {
  $(".btn").click(function() {
    // if  ...then window alert correct
    if ($(this).attr("pose-name") === displayPose.name) {
      //window.alert("you are correct");
      clearCanvas();
      positiveFeedbackScreen();
      counter();
      if (checkGameEnd()) return;
      delay();
    } else {
      //window.alert("you are wrong");
      clearCanvas();
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

  // console.log(otherAnswersArray);
  //console.log("currentPoseArray", currentPoseArray[0]);

  for (var i = 0; i < 3; i++) {
    //takes random element from that array and assigns the buttonText to the button
    var randomCurrentPose = sample(currentPoseArray);
    console.log("randomCurrentPose", randomCurrentPose);
    var idName = "btn" + (i + 1);
    // console.log("idname", idName);
    document.getElementById(idName).innerText = randomCurrentPose.sanskritText;
    $(document.getElementById(idName)).attr(
      "pose-name",
      randomCurrentPose.name
    );
    //removes the "used" name from the array so it doesnt get assigned twice

    currentPoseArray.splice(currentPoseArray.indexOf(randomCurrentPose), 1);
  }
}

function positiveFeedbackScreen() {
  ctx.font = "25px serif";
  ctx.fillText("Well done", 200, 200, 400);
}

function negativeFeedbackScreen() {
  ctx.font = "25px serif";
  ctx.fillText("Maybe next time...", 200, 200, 400);
}

function delay() {
  setTimeout(() => {
    update();
  }, 2500);
}
function update() {
  clearCanvas();
  drawRandomPose();
  //selectExtraPoses();
}

function counter() {
  count++;
  console.log(document.getElementById("counter"));
  document.getElementById("counter").innerHTML = count;
  //if u use a button then

  // ctx.font = "16px serif red";
  // ctx.fillText("Score: " + counter, 190, 150);
}

function checkGameEnd() {
  if (count === poses.length) {
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
  ctx.font = "25px serif red";
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
