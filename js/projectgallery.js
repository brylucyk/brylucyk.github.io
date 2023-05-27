const projects = {
    "cho": {
        "title": "Community Homes for Opportunity",
        "description": "Website created for Lawson Health Research Institute for the Community Homes for Opportunity project. Built minimally to accommodate web host restrictions.",
        "architecture": "HTML, CSS, JavaScript",
        "web": 2,
        "mobile": 0
    },
    "h2i": {
        "title": "Health, Housing and Income",
        "description": "Website created for Lawson Health Research Institute for the Community Homes for Opportunity project. Built minimally to accommodate web host restrictions.",
        "architecture": "HTML, CSS, JavaScript",
        "web": 2,
        "mobile": 1
    },
    "kitchen_store": {
        "title": "The Kitchen Store",
        "description": "A mobile-first, responsive, e-commerce application.",
        "architecture": "ASP.NET Core with C#.NET, Vue.JS, PrimeVue, Azure SQL Server",
        "web": 0,
        "mobile": 4
    },
    "retrowave_name_generator": {
        "title": "Retrowave Name Generator",
        "description": "Experimenting with gradients and css animations.",
        "architecture": "HTML, CSS, JavaScript",
        "web": 1,
        "mobile": 1
    },
    "smarter_goals": {
        "title": "Smarter Goals",
        "description": "A goal-tracking app.",
        "architecture": "Angular Apollo & GraphQL, TypeScript, SCSS",
        "web": 3,
        "mobile": 0
    },
    "telepromy": {
        "title": "TELEPROM-Y",
        "description": "Website created for Lawson Health Research Institute as part of the knowledge translation program for the TELEPROM-Y project. Built minimally to accommodate web host restrictions.",
        "architecture": "HTML, CSS",
        "web": 1,
        "mobile": 0
    }
};


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
const $main = $('<div id="main"></div>');
const $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
const $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
const $exitButton = $('<div id="exitButton"><i class="fa-solid fa-circle-xmark"></i></div>');
let $thumbnailSrc = "";
let $parentGallery = "";

// Add overlay
$overlay.append($main).prepend($prevButton).append($nextButton).append($exitButton);


$overlay.hide();

$(".img-overlay").click(function (event) {
    event.preventDefault();
    $parentGallery = $(this).parent().parent().parent().parent().attr("id");

    let imageLocation = $(this).prev().attr("href");
    $thumbnailSrc = $(this).prev().find("img").attr("src");

    $main.empty();

    const urlParts = imageLocation.split("_recording");
    const project = urlParts[0].split("./images/screenshots/");

    const $blurb = $('<div id="blurb"></div>');
    $blurb.append(`<h1>${projects[project[1]]["title"]}</h1>`);
    $blurb.append(`<p>${projects[project[1]]["description"]}</p>`);
    $blurb.append(`<p><b>Built with:</b> ${projects[project[1]]["architecture"]}</p>`);
    $main.append($blurb);

    for (let i = 0; i < projects[project[1]]["web"]; i++) {
        const $image = $(`<img src="./images/screenshots/${project[1]}_recording_web_${i + 1}.gif" class="web-screenshot">`);
        $main.append($image);
    }

    for (let i = 0; i < projects[project[1]]["mobile"]; i++) {
        const $image = $(`<img src="./images/screenshots/${project[1]}_recording_mobile_${i + 1}.gif" class="mobile-screenshot">`);
        $main.append($image);
    }


    $("#page").append($overlay);


    $overlay.fadeIn("slow");
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