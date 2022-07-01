/* based on a codepen by gleb:
 https://codepen.io/g1eb/pen/MbrRry */

"use strict";

var app = {
  chars: [
    "javascript",
    "java",
    "c#",
    "html5",
    "css",
    "bootstrap",
    "laravel",
    "livewire",
    "xml",
    "php",
    "jquery",
    "react.js",
    "node.js",
    "c",
    "express js",
    "vue.js",
    "asp.net core",
    "c++",
    "sql",
    "cobol",
  ],

  wordIndex: 0,

  init: function () {
    if ($(window).width() > 1000) {
      app.container = document.createElement("div");
      app.container.className = "animation-container";
      document.getElementById("skills").appendChild(app.container);
      window.setInterval(app.add, 500);
    }
  },

  add: function () {
    var element = document.createElement("span");
    app.container.appendChild(element);
    app.animate(element);
  },

  animate: function (element) {
    let word = app.chars[app.wordIndex];
    if (app.wordIndex === app.chars.length - 1) {
      app.wordIndex = 0;
    } else {
      app.wordIndex++;
    }
    let duration = Math.floor(Math.random() * 15) + 8;
    let offset = Math.floor(Math.random() * (50 - duration * 2)) + 3;
    let size = 10 + (15 - duration);
    element.style.cssText =
      "top: 300vh; " +
      "right:" +
      offset +
      "vw; font-size:" +
      size +
      "px;animation-duration:" +
      duration +
      "s";
    element.innerHTML = word;
    window.setTimeout(app.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element);
  },
};

document.addEventListener("DOMContentLoaded", app.init);
