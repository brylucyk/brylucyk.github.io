$(function () {
    const theme = getCookie("BLTheme");

    setArrowContent(theme);
});

/**
 * Sets subtitle arrows to images if the Memphis theme is selected;
 * otherwise, sets the arrows to text. 
 * @param string theme The selected theme.
 */
function setArrowContent(theme) {
    let left = `<`;
    let right = `/ >`;

    if (theme === "memphis") {
        left = `<img src="./images/memphis/arrow-left.png" />`;
        right = `<img src="./images/memphis/arrow-right.png" />`;
    }

    $("#subtitle-left-arrow").html(left);
    $("#subtitle-right-arrow").html(right);
}


