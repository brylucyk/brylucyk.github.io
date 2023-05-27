let themeSelected = false;

$(function () {
    $('.hidden').fadeIn(3000);
});

/**
 * Sets the layout stylesheet to the selected theme.
 * 
 * @param string theme The name of the selected theme.
 */
function swapStyleSheet(theme) {
    if (!themeSelected) {
        $("#layout-stylesheet").attr("href", `styles/${theme}.css`);
    }
}

/**
 * Sets the selected stylesheet.
 * 
 * @param string theme The name of the selected theme.
 */

function selectStyleSheet(theme) {
    themeSelected = true;
    $("#layout-stylesheet").attr("href", `styles/${theme}.css`);
    document.cookie = `BLTheme=${theme};path=/;domain=${window.location.hostname};`;

    $(".hidden").fadeOut(1000).promise().done(() => {
        window.location = "home.html";
    });
}

/**
 * Reloads the page if the user has navigated backward.
 */
window.addEventListener("pageshow", function (event) {
    var historyTraversal = event.persisted ||
        (typeof window.performance != "undefined" &&
            window.performance.navigation.type === 2);
    if (historyTraversal) {
        themeSelected = false;
        this.location.reload();
    }
});


