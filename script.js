var canvas;
var ctx;

var displayPose = 0;
var currentPoseArray = [];
var alreadyPlayedArray = [];
var randomCurrentPose;
var buttonClass = "btn";

var counter1 = 0;
var counter2 = 0;

var level;

//onclick draw canvas and hide the buttons , in the same div, toggle hide /show
$(document).ready(function() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  $(document.getElementById("game-container")).toggle(false);

  $(".level1").click(function() {
    $(document.getElementById("game-intro")).toggle(false);
    $(document.getElementById("game-container")).toggle(true);
    level = "level1";
    update();
    countTotal();
  });

  $(".level2").click(function() {
    $(document.getElementById("game-intro")).toggle(false);
    $(document.getElementById("game-container")).toggle(true);
    level = "level2";
    update();
    countTotal();
  });

  $(".reload").click(function() {
    location.reload();
  });

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
    if (level === "level1") {
      document.getElementById(idName).innerText = randomCurrentPose.buttonText;
      $(document.getElementById(idName)).attr(
        "pose-name",
        randomCurrentPose.name
      );
    } else {
      document.getElementById(idName).innerText =
        randomCurrentPose.sanskritText;
      $(document.getElementById(idName)).attr(
        "pose-name",
        randomCurrentPose.name
      );
    }
    // $(document.getElementById(idName)).attr(
    //   "pose-name",
    //   randomCurrentPose.name
    // );

    // removes the "used" name from the array so it doesnt get assigned twice

    currentPoseArray.splice(currentPoseArray.indexOf(randomCurrentPose), 1);
  }
}

function positiveFeedbackScreen() {
  ctx.font = "25px serif";
  ctx.fillText("Well done", 250, 200, 100);
  $(document.getElementsByClassName("btn")).addClass("blocked");
}
//text, x, y, max with

function negativeFeedbackScreen() {
  ctx.font = "25px serif";
  ctx.fillText("Maybe next time...", 200, 200, 400);
  $(document.getElementsByClassName("btn")).addClass("blocked");
}

function delay() {
  setTimeout(() => {
    update();
    $(document.getElementsByClassName("btn")).removeClass("blocked");
  }, 2000);
}
function update() {
  clearCanvas();
  drawRandomPose();
  //selectExtraPoses();
}

function countCorrect() {
  counter1++;
  if (counter1 == 0) {
    document.getElementById("countCorrect").innerText = "0";
  } else {
    document.getElementById("countCorrect").innerText = counter1;
  }
}

function countTotal() {
  counter2++;
  document.getElementById("countTotal").innerText = "/" + poses.length;
}

function checkGameEnd() {
  if (counter2 === poses.length) {
    setHighscore();
    showResult();
    drawHighscore();
    $(document.getElementsByClassName("btn")).toggle(false);
    $(document.getElementsByClassName("reload")).toggle(true);
    return true;
  } else {
    return false;
  }
}

function showResult() {
  clearCanvas();
  ctx.font = "25px serif";
  ctx.fillText("Correct answers:" + counter1, 190, 150);
}

function setHighscore() {
  var highscoresArray = JSON.parse(localStorage.getItem("highscores"));
  if (!highscoresArray) {
    highscoresArray = [];
  }
  highscoresArray.push({ name: $("#playerName").val(), score: counter1 });
  localStorage.setItem("highscores", JSON.stringify(highscoresArray));
  console.log(highscoresArray);
}

function drawHighscore() {
  var highscoresArray = JSON.parse(localStorage.getItem("highscores"));
  highscoresArray.sort(function(a, b) {
    if (a.score < b.score) {
      return 1;
    } else if (a.score > b.score) {
      return -1;
    } else {
      return 0;
    }
  });
  highscoresArray.forEach(function(el, index) {
    if (index <= 7) {
      ctx.font = "25px serif red";
      ctx.fillText(el.name + " >" + el.score, 190, 180 + index * 30);
    }
  });
}
