const projects = {
    "cho": {
        "title": "Community Homes for Opportunity",
        "description": "Website created for Lawson Health Research Institute for the Community Homes for Opportunity project. Built minimally to accommodate web host restrictions.",
        "architecture": "HTML, CSS, JavaScript",
        "web": 2,
        "mobile": 0,
        "ext": ".gif"
    },
    "h2i": {
        "title": "Health, Housing and Income",
        "description": "Website created for Lawson Health Research Institute for the Community Homes for Opportunity project. Built minimally to accommodate web host restrictions.",
        "architecture": "HTML, CSS, JavaScript",
        "web": 2,
        "mobile": 1,
        "ext": ".gif"
    },
    "kitchen_store": {
        "title": "The Kitchen Store",
        "description": "A mobile-first, responsive, e-commerce application.",
        "architecture": "ASP.NET Core with C#.NET, Vue.JS, PrimeVue, Azure SQL Server",
        "web": 0,
        "mobile": 4,
        "ext": ".gif"
    },
    "retrowave_name_generator": {
        "title": "Retrowave Name Generator",
        "description": "Experimenting with gradients and css animations.",
        "architecture": "HTML, CSS, JavaScript",
        "web": 1,
        "mobile": 1,
        "ext": ".gif"
    },
    "smarter_goals": {
        "title": "Smarter Goals",
        "description": "A goal-tracking app.",
        "architecture": "Angular Apollo & GraphQL, TypeScript, SCSS",
        "web": 3,
        "mobile": 0,
        "ext": ".gif"
    },
    "telepromy": {
        "title": "TELEPROM-Y",
        "description": "Website created for Lawson Health Research Institute as part of the knowledge translation program for the TELEPROM-Y project. Built minimally to accommodate web host restrictions.",
        "architecture": "HTML, CSS",
        "web": 1,
        "mobile": 0,
        "ext": ".gif"
    },
    "uachieve": {
        "title": "uAchieve",
        "description": "The uAchieve app is an intuitive way to make goal setting and completion both easy and fun. This cross-platform app uses gamification and social networking to motivate and reward users for reaching their short-term and long-term goals. This was built with a group of 5 other people over the course of 5 two-week sprints.",
        "architecture": "Mongo DB (Mongoose), Express, React, Node.js, Tailwind CSS",
        "web": 7,
        "mobile": 0,
        "ext": ".gif"
    },
    "pandemic_simulator": {
        "title": "Pandemic Simulator",
        "description": "A Java program that visualizes the spread of a disease in a given population over a three-week period. A final group project completed for INFO 3136: Mobile Development/Advanced Java. I was responsible for the UI layout, components and general styling; my team-mates added the functionality for input, simulation, and reporting components.",
        "architecture": "Java, JavaFX",
        "web": 2,
        "mobile": 0,
        "ext": ".png"
    },
    "pupdate": {
        "title": "Pupdate",
        "description": "A mobile app for scheduling, recording and tracking daily training sessions with your puppy.",
        "architecture": "Java, XML, Android Studio, Optimized for API 28: Android 9.0 (Pie)+.",
        "web": 0,
        "mobile": 4,
        "ext": ".png"
    },
    "birthday_tracker": {
        "title": "Birthday Tracker",
        "description": "A mobile app that creates a central place where you can keep track of birthdays and gift ideas, as well as set recurring reminders/notifications for birthday-related tasks (e.g., buy gift, get card ... )",
        "architecture": "Java, XML, Android Studio, Optimized for API 28: Android 9.0 (Pie)+",
        "web": 0,
        "mobile": 3,
        "ext": ".png"
    },
    "daily_intention": {
        "title": "Daily Intention",
        "description": "A habit tracking app where users can set a “daily intention”, mark whether this daily intention was kept, and view statistics related to how often they keep their daily intentions.        ",
        "architecture": "React Native (Expo), Redux, Firebase Realtime Database",
        "web": 0,
        "mobile": 9,
        "ext": ".png"
    },
    "garden_planner": {
        "title": "Garden Planner",
        "description": "I made this to learn Angular, Material Design & TypeScript. Also, I needed a little app to plan my garden.",
        "architecture": "Angular, Material Design, TypeScript, JSON server for local data storage",
        "web": 7,
        "mobile": 0,
        "ext": ".png"
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

    const imageLocation = $(this).prev().attr("href");
    populateOverlay(imageLocation);
    $("#page").append($overlay);

    $overlay.fadeIn("slow");
});

/**
 * Fills the overlay with the current project.
 * @param {string} imageLocation The src of the first image displayed in the overlay.
 */
function populateOverlay(imageLocation) {
    $thumbnailSrc = imageLocation;
    $main.empty().fadeIn(800);

    const urlParts = imageLocation.split("_recording");
    const project = urlParts[0].split("./images/screenshots/");

    const $blurb = $('<div id="blurb"></div>');
    $blurb.append(`<h1>${projects[project[1]]["title"]}</h1>`);
    $blurb.append(`<p>${projects[project[1]]["description"]}</p>`);
    $blurb.append(`<p><b>Built with:</b> ${projects[project[1]]["architecture"]}</p>`);
    $main.append($blurb);

    for (let i = 0; i < projects[project[1]]["web"]; i++) {
        const $image = $(`<img src="./images/screenshots/${project[1]}_recording_web_${i + 1}${projects[project[1]]["ext"]}" class="web-screenshot">`);
        $main.append($image);
    }

    const $mobileContainer = $('<div id="mobile-container"></div>');

    for (let i = 0; i < projects[project[1]]["mobile"]; i++) {
        const $image = $(`<img src="./images/screenshots/${project[1]}_recording_mobile_${i + 1}${projects[project[1]]["ext"]}" class="mobile-screenshot">`);
        $mobileContainer.append($image);
    }

    $main.append($mobileContainer);
}

// When next button is clicked
$nextButton.click(function (event) {
    // Hide the current image
    $("#overlay img").hide();

    // Image with matching location of the overlay image
    const $currentImg = $('#' + $parentGallery + ' img[src="' + $thumbnailSrc + '"]');
    const $nextImg = $($currentImg.closest(".img-col").next(".img-col").find("a"));
    // All of the images in the gallery
    const $images = $("#" + $parentGallery + " img");

    // If there is a next image
    if ($nextImg.length > 0) {
        const imageLocation = $nextImg.find('img').attr("src");
        populateOverlay(imageLocation);
    } else {
        const imageLocation = $($images[0]).attr("src");
        populateOverlay(imageLocation);
    }
    // Prevents overlay from being hidden
    event.stopPropagation();
});

// When previous button is clicked
$prevButton.click(function (event) {
    // Hide the current image
    $("#overlay img").hide();

    // Image with matching location of the overlay image
    const $currentImg = $('#' + $parentGallery + ' img[src="' + $thumbnailSrc + '"]');
    const $prevImg = $($currentImg.closest(".img-col").prev(".img-col").find("a"));
    // All of the images in the gallery
    const $images = $("#" + $parentGallery + " img");

    // If there is a prev image
    if ($prevImg.length > 0) {
        const imageLocation = $prevImg.find('img').attr("src");
        populateOverlay(imageLocation);

    } else {
        // Otherwise fade in the last image
        const imageLocation = $($images[$images.length - 1]).attr("src");
        populateOverlay(imageLocation);
    }
    event.stopPropagation();
});

// When the exit button is clicked
$exitButton.click(function () {
    // Fade out the overlay
    $("#overlay").fadeOut("slow");
});