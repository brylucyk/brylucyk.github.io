/* based on a codepen by gleb:
 https://codepen.io/g1eb/pen/MbrRry */

 "use strict";

 var app = {
   chars: [
     "< section >",
     "function ()",
     "app.animate(element)",
     "< p >",
     "< / p >",
     "< h1 >",
     "width: 100%;",
     "color: rgba(255,255,255,.6)",
     "< div >",
     "< /span >",
     "< i >",
     "font-weight: 400;",
     "< ul >",
     "< / li> ",
     " right: ${offset}vw; ",
     "< body >",
     "padding: 0",
     "@media screen",
     "display: -webkit-flex;",
     "< button >",
     "< li data-animation='7' >",
     "this.$menu.removeClass( 'dl-subview' )",
     "window.Modernizr",
     "this._init( options );",
     "window.Modernizr=function(a,b,c)",
     "return false;",
     "switch( animation )",
     "++animcursor;",
     "element.parentNode", 
     "endCurrPage = false",
     "!app.running",
     "onBlur_",
     "margin: 0",
     "letter-spacing:-.02em",
     "line-height:40px"
   ],

   running: true,
 
   wordIndex: 0,
 
   init: function () {
    app.container = document.createElement("div");
    app.container.className = "animation-container";
    document.getElementById("code").appendChild(app.container);
    window.innerHeight > 800 ? window.setInterval(app.add, 50) : window.setInterval(app.add, 500);
   },
 
   add: function () {
     let element = document.createElement("span");
     app.container.appendChild(element);
     app.animate(element);
   },
 
   animate: function (element) {
    if(app.running) {
      let word = app.chars[app.wordIndex];
      
      if (app.wordIndex === app.chars.length - 1) {
        app.wordIndex = 0;
      } else {
        app.wordIndex++;
     }
     
     let duration = Math.floor(Math.random() * 15) + 8;
     let offset = Math.floor(Math.random() * ($( window ).width()));
     let size = 8 + (15 - duration);
     
     element.style.cssText =
     `bottom: 0vh;
     right: ${offset}vw; 
     font-size: ${size}px;
     animation-duration: ${duration}s`;
     element.classList.add("code-word");
     element.innerHTML = word;
     window.setTimeout(app.remove, duration * 1000, element);
    }
   
   },
 
   remove: function (element) {
     element.parentNode.removeChild(element);
   },

   pause: function() {
     app.running = !app.running;

     if(app.running === false) {
        document.querySelectorAll('.code-word').forEach(function(element) {
         element.style.animationDuration = "2s";
        });

        document.getElementById('motionToggler').innerHTML = "play_circle_outline";
        document.getElementById('smallMotionToggler').innerHTML = "play_circle_outline";
     }
     else {
       document.getElementById('motionToggler').innerHTML = "pause_circle_outline";
       document.getElementById('smallMotionToggler').innerHTML = "pause_circle_outline";
       app.init();
     }
   }
 };
 
 document.addEventListener("DOMContentLoaded", app.init);
 document.getElementById("motionToggler").addEventListener("click", app.pause);
 document.getElementById("smallMotionToggler").addEventListener("click", app.pause);