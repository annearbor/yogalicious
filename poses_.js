// check if  jQuery is working

//console.log("DOM is Loaded");

var poses = [
  {
    name: "downdog",
    buttonText: "Downward-facing Dog",
    sanskritText: "Adho Mukha Svanasana",
    image: function() {
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 0, 0, 600, 400);
      };
      img.src = "./images/downdog.png";
    }
  },
  {
    name: "headstand",
    buttonText: "Headstand",
    sanskritText: "Niralamba Sirsasana",
    image: function() {
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 0, 0, 600, 400);
      };
      img.src = "./images/headstand.png";
    }
  },
  {
    name: "warrior2",
    buttonText: "Warrior II",
    sanskritText: "Virabhadrasana II",
    image: function() {
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 0, 0, 600, 400);
      };
      img.src = "./images/warrior2.png";
    }
  },
  {
    name: "triangle",
    buttonText: "Extended Triangle Pose",
    sanskritText: "Utthita Trikonasana",
    image: function() {
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 0, 0, 600, 400);
      };
      img.src = "./images/trikonasana.png";
    }
  },

  {
    name: "halfmoon",
    buttonText: "Halfmoon Pose",
    image: function() {
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 0, 0, 600, 400);
      };
      img.src = "./images/halfmoon.png";
    }
  },

  {
    name: "chatturanga",
    buttonText: "Four-limbed Staff Pose",
    sanskritText: "Chatturanga Dandasana",
    image: function() {
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 0, 0, 600, 400);
      };
      img.src = "./images/chatturanga.png";
    }
  },
  {
    name: "staff",
    buttonText: "Staff Pose",
    sanskritText: "Dandasana",
    image: function() {
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 0, 0, 600, 400);
      };
      img.src = "./images/staff_pose.png";
    }
  },
  {
    name: "wheel",
    buttonText: "Wheel Pose",
    sanskritText: "Urdhva Dhanurasana",
    image: function() {
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 0, 0, 600, 400);
      };
      img.src = "./images/wheel.png";
    }
  }
  // ,
  // {
  //   name: "shoulderstand",
  //   buttonText: "Supported Shoulderstand",
  //   sanskritText: "Salamba Sarvangasana",
  //   image: function() {
  //     var img = new Image();
  //     img.onload = function() {
  //       ctx.drawImage(img, 0, 0, 600, 400);
  //     };
  //     img.src = "./images/shoulderstand.png";
  //   }
  // },
  // {
  //   name: "plow",
  //   buttonText: "Plow Pose",
  //   sanskritText: "Halasana",
  //   image: function() {
  //     var img = new Image();
  //     img.onload = function() {
  //       ctx.drawImage(img, 0, 0, 600, 400);
  //     };
  //     img.src = "./images/halasana.png";
  //   }
  // },
  // {
  //   name: "updog",
  //   buttonText: "Upward-facing Dog",
  //   sanskritText: "Urdhva Mukha Svanasana",
  //   image: function() {
  //     var img = new Image();
  //     imgScale = 640 / 480;
  //     img.onload = function() {
  //       ctx.drawImage(img, 0, 0, 400 * imgScale, 400);
  //     };
  //     img.src = "./images/upwarddog.png";
  //   }
  // }
  //,
  // {
  //   name: "bow",
  //   buttonText: "Bow Pose",
  //   sanskritText: "Urdha Dhanurasana",
  //   image: function() {
  //     var img = new Image();
  //     imgScale = 640 / 480;
  //     img.onload = function() {
  //       ctx.drawImage(img, 0, 0, 400 * imgScale, 400);
  //     };
  //     img.src = "./images/bow.png";
  //   }
  // },
  // {
  //   name: "corpse",
  //   buttonText: "Corpse Pose",
  //   sanskritText: "Savasana",
  //   image: function() {
  //     var img = new Image();
  //     imgScale = 640 / 480;
  //     img.onload = function() {
  //       ctx.drawImage(img, 0, 0, 400 * imgScale, 400);
  //     };
  //     img.src = "./images/corpse.png";
  //   }
  // },
  // {
  //   name: "crow",
  //   buttonText: "Crow Pose",
  //   sanskritText: "Bakasana",
  //   image: function() {
  //     var img = new Image();
  //     imgScale = 640 / 480;
  //     img.onload = function() {
  //       ctx.drawImage(img, 0, 0, 400 * imgScale, 400);
  //     };
  //     img.src = "./images/crow.png";
  //   }
  // },
  // {
  //   name: "fish",
  //   buttonText: "Fish Pose",
  //   sanskritText: "Matsyasana",
  //   image: function() {
  //     var img = new Image();
  //     imgScale = 640 / 480;
  //     img.onload = function() {
  //       ctx.drawImage(img, 0, 0, 400 * imgScale, 400);
  //     };
  //     img.src = "./images/fish.png";
  //   }
  // },
  // {
  //   name: "standingsplit",
  //   buttonText: "Standing Split",
  //   sanskritText: "Urdhva Prasarita Eka Padasana",
  //   image: function() {
  //     var img = new Image();
  //     imgScale = 640 / 480;
  //     img.onload = function() {
  //       ctx.drawImage(img, 0, 0, 400 * imgScale, 400);
  //     };
  //     img.src = "./images/standingsplit.png";
  //   }
  // },

  // {
  //   name: "peacock",
  //   buttonText: "Peacock Pose",
  //   sanskritText: "Mayurasana",
  //   image: function() {
  //     var img = new Image();
  //     imgScale = 640 / 480;
  //     img.onload = function() {
  //       ctx.drawImage(img, 0, 0, 400 * imgScale, 400);
  //     };
  //     img.src = "./images/peacock.png";
  //   }
  // },
  // {
  //   name: "forearmstand",
  //   buttonText: "Feathered Peacock Stand",
  //   sanskritText: "Pincha Mayurasana",
  //   image: function() {
  //     var img = new Image();
  //     imgScale = 640 / 480;
  //     img.onload = function() {
  //       ctx.drawImage(img, 0, 0, 400 * imgScale, 400);
  //     };
  //     img.src = "./images/forearm.png";
  //   }
  // },
  // {
  //   name: "handstand",
  //   buttonText: "Handstand",
  //   sanskritText: "Adho Mukha Vrksasana",
  //   image: function() {
  //     var img = new Image();
  //     imgScale = 640 / 480;
  //     img.onload = function() {
  //       ctx.drawImage(img, 0, 0, 400 * imgScale, 400);
  //     };
  //     img.src = "./images/handstand.png";
  //   }
  // },
  // {
  //   name: "mountain",
  //   buttonText: "Mountain Pose",
  //   sanskritText: "Tadasana",
  //   image: function() {
  //     var img = new Image();
  //     imgScale = 640 / 480;
  //     img.onload = function() {
  //       ctx.drawImage(img, 0, 0, 400 * imgScale, 400);
  //     };
  //     img.src = "./images/mountain.png";
  //   }
  // },
  // {
  //   name: "tree",
  //   buttonText: "Tree Pose",
  //   sanskritText: "Vrksasana",
  //   image: function() {
  //     var img = new Image();
  //     imgScale = 640 / 480;
  //     img.onload = function() {
  //       ctx.drawImage(img, 0, 0, 400 * imgScale, 400);
  //     };
  //     img.src = "./images/tree.png";
  //   }
  // },
  // {
  //   name: "warrior1",
  //   buttonText: "Warrior I",
  //   sanskritText: "Virabhadrasana I",
  //   image: function() {
  //     var img = new Image();
  //     imgScale = 640 / 480;
  //     img.onload = function() {
  //       ctx.drawImage(img, 0, 0, 400 * imgScale, 400);
  //     };
  //     img.src = "./images/warriorI.png";
  //   }
  // },
  // {
  //   name: "warrior3", //
  //   buttonText: "Warrior III",
  //   sanskritText: "Virabhadrasana III",
  //   image: function() {
  //     var img = new Image();
  //     imgScale = 640 / 480;
  //     img.onload = function() {
  //       ctx.drawImage(img, 0, 0, 400 * imgScale, 400);
  //     };
  //     img.src = "./images/warriorIII.png";
  //   }
  // },
  // {
  //   name: "marichiIII",
  //   buttonText: "Pose Dedicated to the Sage Marichi III",
  //   sanskritText: "Marichyasana III",
  //   image: function() {
  //     var img = new Image();
  //     imgScale = 640 / 480;
  //     img.onload = function() {
  //       ctx.drawImage(img, 0, 0, 400 * imgScale, 400);
  //     };
  //     img.src = "./images/twist.png";
  //   }
  // },
  // {
  //   name: "shoulderpressing",
  //   buttonText: "Shoulder-Pressing Pose",
  //   sanskritText: "Bhujapidasana",
  //   image: function() {
  //     var img = new Image();
  //     imgScale = 640 / 480;
  //     img.onload = function() {
  //       ctx.drawImage(img, 0, 0, 400 * imgScale, 400);
  //     };
  //     img.src = "./images/shoulderpressing.png";
  //   }
  // }
];

var extraPoses = [
  {
    name: "downdog",
    buttonText: "Downward-facing Dog",
    sanskritText: "Adho Mukha Svanasana"
  },
  {
    name: "headstand",
    buttonText: "Headstand",
    sanskritText: "Niralamba Sirsasana"
  },
  {
    name: "warrior2",
    buttonText: "Warrior II",
    sanskritText: "Virabhadrasana II"
  },
  {
    name: "warrior1",
    buttonText: "Warrior I",
    sanskritText: "Virabhadrasana I"
  },
  {
    name: "warrior3", //
    buttonText: "Warrior III",
    sanskritText: "Virabhadrasana III"
  },
  {
    name: "shoulderstand",
    buttonText: "Supported Shoulderstand",
    sanskritText: "Salamba Sarvangasana"
  },
  {
    name: "tree",
    buttonText: "Tree Pose",
    sanskritText: "Vrksasana"
  },
  {
    name: "halfmoon",
    buttonText: "Half-moon Pose",
    sanskritText: "Ardha Chandrasana"
  },
  {
    name: "mountain",
    buttonText: "Mountain Pose",
    sanskritText: "Tadasana"
  },
  {
    name: "corpse", //10
    buttonText: "Corpse Pose",
    sanskritText: "Savasana"
  },
  {
    name: "wheel",
    buttonText: "Wheel Pose",
    sanskritText: "Urdhva Dhanurasana"
  },
  {
    name: "updog",
    buttonText: "Upward-facing Dog",
    sanskritText: "Urdhva Mukha Svanasana"
  },
  {
    name: "triangle",
    buttonText: "Extended Triangle Pose",
    sanskritText: "Utthita Trikonasana"
  },
  {
    name: "chatturanga",
    buttonText: "Four-limbed Staff Pose",
    sanskritText: "Chatturanga Dandasana"
  },
  {
    name: "plow",
    buttonText: "Plow Pose",
    sanskritText: "Halasana"
  },
  {
    name: "fish",
    buttonText: "Fish Pose",
    sanskritText: "Matsyasana"
  },
  {
    name: "uttanasana",
    buttonText: "Standing Forward Bend",
    sanskritText: "Uttanasana"
  },
  {
    name: "standingsplit",
    buttonText: "Standing Split",
    sanskritText: "Urdhva Prasarita Eka Padasana"
  },
  {
    name: "staff",
    buttonText: "Staff Pose",
    sanskritText: "Dandasana"
  },
  {
    name: "crow",
    buttonText: "Crow Pose",
    sanskritText: "Bakasana"
  },
  {
    name: "forwardbend",
    buttonText: "Seated Forward Bend",
    sanskritText: "Pashimottanasana"
  },
  {
    name: "bow",
    buttonText: "Bow Pose",
    sanskritText: "Urdha Dhanurasana"
  },
  {
    name: "wildthing",
    buttonText: "Wild Thing",
    sanskritText: "Camatkarasana"
  },
  {
    name: "reclininghero",
    buttonText: "Reclining Hero Pose",
    sanskritText: "Supta Virasana"
  },
  {
    name: "marichiI",
    buttonText: "Pose Dedicated to the Sage Marichi I",
    sanskritText: "Marichyasana I"
  },
  {
    name: "marichiIII",
    buttonText: "Pose Dedicated to the Sage Marichi III",
    sanskritText: "Marichyasana III"
  },
  {
    name: "peacock",
    buttonText: "Peacock Pose",
    sanskritText: "Mayurasana"
  },
  {
    name: "forearmstand",
    buttonText: "Feathered Peacock Stand",
    sanskritText: "Pincha Mayurasana"
  },
  {
    name: "handstand",
    buttonText: "Handstand",
    sanskritText: "Adho Mukha Vrksasana"
  },

  {
    name: "shoulderpressing",
    buttonText: "Shoulder-Pressing Pose",
    sanskritText: "Bhujapidasana"
  }
];
