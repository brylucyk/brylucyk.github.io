// --- PAGE-LOAD FUNCTIONS ---
  function startup() {
    // --- clock ---
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let timeDisplay = document.getElementById('time');

    if(hours < 10) {
      hours = "0" + hours;
    }

    if(minutes < 10) {
      timeDisplay.innerHTML = hours + ":" + "0" + minutes;
    }
    else {
      timeDisplay.innerHTML = hours + ":" + minutes;
    }

    let update = setTimeout(startup, 600);
  }

// --- SEARCH BAR ---

  // expand/close
   window.addEventListener("click", openCloseSearchBar);

   function openCloseSearchBar(e) {
      const search = document.getElementById("fake-search");

      if(e.target == search) {
          expandSearch();
      }
      else {
        if(searchClicked) {
          closeSearch();
        }
      }
    }

   var searchClicked = false;

    function expandSearch() {
      const searchBox = document.getElementById("fake-search");
      const searchOptions = document.getElementById("fake-search-expand");
      searchBox.style.backgroundColor = "#fff";
      searchBox.style.color = "RGB(34,34,34)";
      searchOptions.style.display = "block";
      searchClicked = true;
  }

  function closeSearch() {
    const searchBox = document.getElementById("fake-search");
    const searchOptions = document.getElementById("fake-search-expand");
    searchBox.style.backgroundColor = "RGB(34,34,34)";
    searchBox.style.color = "#fff";
    searchOptions.style.display = "none";
    searchClicked = false;
  }

  // search box lightens on mouseover
  function lighter() {
    if(!searchClicked) {
      document.getElementById("fake-search").style.backgroundColor = "RGB(54,54,54)";
    }
  }

  // search box darkens on mouseout
  function darker() {
    if(!searchClicked) {
      document.getElementById("fake-search").style.backgroundColor = "RGB(34,34,34)";
    }
  }

// --- SLEEP MODE ENABLED/DISABLED ---
  var sleeping = false;

  function sleep() {
    let divs = ["toolbar-container", "inner", "fake-search", "time"];
    const sleepDisplay = document.getElementById("sleepDisplay");

    // sleep
    if(!sleeping) {
      for(let i = 0; i < divs.length; i++) {
        document.getElementById(divs[i]).style.display = "none";
      }
      sleepDisplay.style.display = "flex";
      sleeping = true;
    }
    // wake
    else {
      if(window.innerWidth > 880) {
        for(let i = 0; i < divs.length; i++) {
          document.getElementById(divs[i]).style.display = "block";
        }
      }
      else {
        document.getElementById("toolbar-container").style.display = "block";
        document.getElementById("inner").style.display = "block";
        document.getElementById("time").style.display = "none";
        document.getElementById("fake-search").style.display = "none";
      }
      sleepDisplay.style.display = "none";
      sleeping = false;
    }
  }

  // to make sure elements are displayed properly upon resize
  function resizeDisplay() {
      if(window.innerWidth > 880 & !sleeping) {
        document.getElementById("time").style.display = "block";
        document.getElementById("fake-search").style.display = "block";
      }
      else {
        document.getElementById("time").style.display = "none";
        document.getElementById("fake-search").style.display = "none";
      }
  }

  window.addEventListener("resize", resizeDisplay);

// --- INCREASE/DECREASE CONTRAST ---
  var toggleContrast = localStorage["highContrast"];

  function alterContrast() {

    // if stylesheet is currently high contrast, switch
    if(toggleContrast === "true") {
      document.getElementById("pagestyle").setAttribute("href", "p_style.css");
      localStorage.setItem("highContrast", false);
      toggleContrast = "false"; 
    }
    else {
      document.getElementById("pagestyle").setAttribute("href", "p_style_hc.css");
      localStorage.setItem("highContrast", true);
      toggleContrast = "true"; 
    }
  }
