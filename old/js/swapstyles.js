function swapStyle(sheetName) {
    let sheet = document.getElementById("themeStyle").href = `css/${sheetName}.css`;
}

function toggleStyle(toggleIcon) {
    let sheet = document.getElementById("themeStyle");
    sheet.href.includes("light.css") ? sheet.href = "css/dark.css" : sheet.href = "css/light.css";
    sheet.href.includes("light.css") ? toggleIcon.innerHTML = "dark_mode" : toggleIcon.innerHTML = "light_mode";
}