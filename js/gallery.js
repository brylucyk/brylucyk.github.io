// Gallery image hover
$(".img-wrapper").hover(
    function () {
        $(this).find(".img-overlay").animate({ opacity: 1 }, 200);
    }, function () {
        $(this).find(".img-overlay").animate({ opacity: 0 }, 200);
    }
);

// Lightbox
const $overlay = $('<div id="overlay"></div>');
const $image = $("<img>");
const $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
const $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
const $exitButton = $('<div id="exitButton"><i class="fa-solid fa-circle-xmark"></i></div>');
let $thumbnailSrc = "";
let $parentGallery = "";

// Add overlay
$overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
$("#page").append($overlay);

$overlay.hide();

$(".img-overlay").click(function (event) {
    event.preventDefault();
    $parentGallery = $(this).parent().parent().parent().parent().attr("id");
    let imageLocation = $(this).prev().attr("href");
    $thumbnailSrc = $(this).prev().find("img").attr("src");
    // let imageL = $(this).prev().attr("data-id");
    $image.attr("src", imageLocation);
    $overlay.fadeIn("slow");
});

// When the overlay is clicked
$overlay.click(function () {
    // Fade out the overlay
    $(this).fadeOut("slow");
});

// When next button is clicked
$nextButton.click(function (event) {
    // Hide the current image
    $("#overlay img").hide();

    // Image with matching location of the overlay image
    let $currentImg = $('#' + $parentGallery + ' img[src="' + $thumbnailSrc + '"]');

    // Finds the next image
    let $nextImg = $($currentImg.closest(".img-col").next(".img-col").find("a"));

    // All of the images in the gallery
    let $images = $("#" + $parentGallery + " img");

    // If there is a next image
    if ($nextImg.length > 0) {
        // Fade in the next image
        $("#overlay img").attr("src", $nextImg.attr("href")).fadeIn(800);
        $thumbnailSrc = $nextImg.find('img').attr("src");
    } else {
        // Otherwise fade in the first image
        const $firstImage = $('#' + $parentGallery).find("a").first();
        $("#overlay img").attr("src", $firstImage.attr("href")).fadeIn(800);
        $thumbnailSrc = $($images[0]).attr("src");
    }
    // Prevents overlay from being hidden
    event.stopPropagation();
});

// When previous button is clicked
$prevButton.click(function (event) {
    // Hide the current image
    $("#overlay img").hide();

    let $currentImg = $('#' + $parentGallery + ' img[src="' + $thumbnailSrc + '"]');

    // Finds the prev image
    let $prevImg = $($currentImg.closest(".img-col").prev(".img-col").find("a"));

    // All of the images in the gallery
    let $images = $("#" + $parentGallery + " img");

    // If there is a prev image
    if ($prevImg.length > 0) {
        // Fade in the prev image
        $("#overlay img").attr("src", $prevImg.attr("href")).fadeIn(800);
        $thumbnailSrc = $prevImg.find('img').attr("src");

    } else {
        // Otherwise fade in the last image
        const $lastImage = $('#' + $parentGallery).find("a").last();
        $("#overlay img").attr("src", $lastImage.attr("href")).fadeIn(800);
        $thumbnailSrc = $($images[$images.length - 1]).attr("src");

    }
    event.stopPropagation();
});

// When the exit button is clicked
$exitButton.click(function () {
    // Fade out the overlay
    $("#overlay").fadeOut("slow");
});