// storm effects on page load
function lightning() {
  var clouds = document.getElementById('storm');
  clouds.style="height: 400px; background-image: linear-gradient(RGBA(158,161,214,.4), transparent);";
  setTimeout(revertClouds, Math.floor(Math.random() * 200));
}

function revertClouds() {
  var clouds = document.getElementById('storm');
  clouds.style="height: 200px; background-image: linear-gradient(RGBA(41,6,56,.8), #101010, #000, #000, #000, #000);";
  setTimeout(lightning, Math.floor(Math.random() * 10000));
}

// retrowave names generator
function generate() {

  const verbs = ["empty", "code", "fast", "chaos", "bad", "space", "new", "neon", "midnight", "terror", "dark", "starlight", "magnum", "steel", "chrome", "cold", "night", "auto", "lazer", "electric", "hunting", "astral", "divided", "intersteller", "far", "nocturnal", "meteor", "parallel //", "vector", "solar", "soul", "carbon", "chasing", "warped", "endless", "ghostly", "haunting", "obsessive", "hostile", "dire", "doomed", "unnatural", "vhs", "last", "scarlet", "half", "still", "waking"];
  const nouns = ["trip", "omens", "destruction", "end", "danger", "in decay", "urgency", "glow", "crypt", "heatwave", "murder", "flight", "nebula", "route", "duality", "edge", "arcade", "memories", "fall", "sparks", "dreamland", "sapphire", "stranger", "city", "citylights", "drive", "underground", "nemesis", "zenith", "station", "bullet", "chain", "sounds", "hawk", "reverie", "affliction", "distance", "avenue", "twilight", "risk", "failure", "zone", "shift", "sunset", "fear", "circles", "premonitions", "dread", "hologram", "escape", "duality", "scape", "center", "desire", "regrets", "dust", "vacancy", "hours", "complex", "rewind", "revenge", "systems"];

  document.getElementById("output").innerHTML = verbs[Math.floor(Math.random() * verbs.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)];
}
