// START-UP
  const words = ["function(e)", "< / body >", "< / p >", "< br >", "< / div >", "< title >",  "< em >", "< head >", "< body >", "< html >", "< / head >", "< / script >", "container.appendChild(word);", "if(pos.x > inner)", "var movePos = 1;", "Math.floor(Math.random())"];

  function spawnWords() {
    changeContrast();

    // spawn words at random starting point
    for(let i = 0; i < words.length; ++i) {
      let wordStartX = Math.floor(Math.random() * screen.height);
      let wordStartY = Math.floor(Math.random() * screen.width);
      const word = document.createElement('div');

      word.innerHTML = words[i];
      word.className = "flowing";
      word.style.top = wordStartX + "px";
      word.style.left = wordStartY + "px";

      container.appendChild(word);
    }

    moveWords();
  }

// --- START/STOP MOTION OF WORDS ---
  var motionOn = true;

  function controlMotion() {
    const motionBtn = document.getElementById("motion");

    // user turned off motion
    if(motionOn) {
      motionOn = false;
      motionBtn.innerHTML = "<i class=\"material-icons\">play_arrow</i> MOTION";
    }
    // user turned on motion
    else {
      motionOn = true;
      motionBtn.innerHTML = "<i class=\"material-icons\">pause</i> MOTION";
    }
  }

// --- MOVE WORDS ACROSS PAGE ---
  function moveWords() {

    if(motionOn) {
      const movingWords = document.getElementsByClassName("flowing");

      for(let i = 0; i < movingWords.length; ++i) {

        // re-spawn words in new location if they have reached the end of the page
        if(movingWords[i].offsetLeft > window.innerWidth) {
          movingWords[i].style.left = -200 + "px";
          movingWords[i].style.top = Math.floor(Math.random() * screen.height) + "px";
        }
        else {
          let move = movingWords[i].offsetLeft + 1;
          movingWords[i].style.left = move + "px";
        }

        // change font style at halfway point 
        if(movingWords[i].offsetLeft > (screen.width / 2.22) && movingWords[i].offsetLeft < (screen.width / 2.19)) {
            movingWords[i].style.filter = "blur(3px)";
          }
        else {
          movingWords[i].style.filter = "blur(0px)";
        }

        if(movingWords[i].offsetLeft >= screen.width / 2.2) {
            movingWords[i].classList.remove("left-words");
            movingWords[i].classList.add("right-words");
        }
        else {
            movingWords[i].classList.remove("right-words");
            movingWords[i].classList.add("left-words");
        }
      }
    }

    setTimeout(moveWords, 15);
  }

// --- CURSOR TRAIL ---
  const cursWords = ["function(e)", "< / body >", "< / p >", "< br >", "< / div >", "< title >", "< b >", "< em >", "< head >", "< body >", "< div >", "< html >", "< / head >", "< / script >", "< / html >"];

    // flags required so that trail is not constantly switching with movement
      // both required so cursor trail is visible in starting div
    var inRightDiv = false;
    var inLeftDiv = false;

    onmousemove = function(e){
      const trail = document.getElementById("mouseTrail");

      trail.style.left = e.x + "px";
      trail.style.top = e.y + "px";

      // if cursor is in right div
      if(e.x > window.innerWidth / 2) {
        if(inRightDiv === false) {
          trail.innerHTML = "<i>" + cursWords[Math.floor(Math.random() * cursWords.length)] + "</i>";
          trail.className = "right-trail";
          inRightDiv = true;
          inLeftDiv = false;
        }
      }
      // if cursor is in left div
      else {
        if(inLeftDiv === false) {
          trail.className = "left-trail";
          trail.innerHTML = cursWords[Math.floor(Math.random() * cursWords.length)];
          inLeftDiv = true;
          inRightDiv = false;
        }
      }
    }

// --- TOGGLE STYLESHEETS (CONTRAST) ---
  var toggleContrast = localStorage["highContrast"];

  function changeContrast() {
    const contrastBtn = document.getElementById("contrast");

    // if stylesheet is currently high contrast, switch
    if(toggleContrast === "true") {
      contrastBtn.innerHTML = "<i class=\"material-icons\">remove</i> CONTRAST";
      document.getElementById("pagestyle").setAttribute("href", "high-contrast.css");
      toggleContrast = "false";
      localStorage.setItem("highContrast", true);
    }
    else {
      contrastBtn.innerHTML = "<i class=\"material-icons\">add</i> CONTRAST";
      document.getElementById("pagestyle").setAttribute("href", "normal.css");
      toggleContrast = "true";
      localStorage.setItem("highContrast", false);
    }
  }
