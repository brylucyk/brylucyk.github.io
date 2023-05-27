$(document).ready(function () {
    $('.hidden').fadeIn(1000);

    const theme = getCookie("BLTheme");
    $("#layout-stylesheet").attr("href", `styles/${theme}.css`);

    if (theme === "minimal") {
        fadeBetweenBackgrounds();
    }
});

/**
 * Retrieves the value of a cookie.
 * 
 * @param string cName The name of the cookie. 
 * @returns The stored value of the cookie. 
 */
function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })

    if (res === undefined) {
        res = "futuristic";
    }

    return res;
}

/**
 * Switches between background images in the minimal theme.
 */
function fadeBetweenBackgrounds() {
    let newBgNum = 2;
    let oldNum = 1;
    setInterval(function () {

        $('#minimal-bg').fadeOut(1000, function () {
            $('#minimal-bg').removeClass(`background-${oldNum}`)
            $('#minimal-bg').addClass(`background-${newBgNum}`);
            $('#minimal-bg').fadeIn(1000);
            oldNum = newBgNum;
            (newBgNum === 3) ? newBgNum = 1 : ++newBgNum;
        });


    }, 10000);

}

/**
 * Toggles theme between Futuristic and Minimal.
 */
function changeTheme() {
    const theme = getCookie("BLTheme");
    let newTheme = "minimal";
    if (theme === "minimal") {
        newTheme = "futuristic";
    }

    $("#layout-stylesheet").attr("href", `styles/${newTheme}.css`);
    document.cookie = `BLTheme=${newTheme};path=/;domain=${window.location.hostname};`;
}

/**
 * Show MIT license
 */
$(".license-link").click(function (event) {
    $("#license").fadeIn("slow");
});

$("#exit-button").click(function () {
    $("#license").fadeOut("slow");
});