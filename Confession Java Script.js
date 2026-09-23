/* ==========================================
   ELEMENTS
   ========================================== */


   var loadingScreen = document.getElementById("loadingScreen");
var loadingProgress = document.getElementById("loadingProgress");
var loadingText = document.getElementById("loadingText");

var website = document.getElementById("website");
var contactScreen = document.getElementById("contactScreen");

var scene = document.getElementById("scene");

var mainButton = document.getElementById("mainButton");
var choiceButtons = document.getElementById("choiceButtons");

var yes = document.getElementById("yes");
var no = document.getElementById("no");


// ==============================
// START WITH LOADING SCREEN
// ==============================

website.style.display = "none";
contactScreen.style.display = "none";

var progress = 0;

var loadingInterval = setInterval(function () {

    progress += 2;

    loadingProgress.style.width = progress + "%";

    loadingText.innerHTML =
        "Preparing the content... " + progress + "%";

    if (progress >= 100) {

        clearInterval(loadingInterval);

        setTimeout(function () {

            loadingScreen.style.display = "none";
            website.style.display = "flex";

        }, 500);
    }

}, 50);


// ==============================
// CONFESSION VARIABLES
// ==============================

var stage = 1;
var noCount = 0;


// ==============================
// CHANGE IMAGE
// ==============================

function changeScene(image) {

    scene.style.opacity = "0";

    setTimeout(function () {

        scene.src = image;

        scene.style.opacity = "1";

    }, 200);
}


// ==============================
// FIRST BUTTON
// ==============================

mainButton.onclick = function () {

    if (stage === 1) {

        stage = 2;

        changeScene("photo/1.2.png");

        mainButton.innerHTML = "To say what?";

    }

    else if (stage === 2) {

        stage = 3;

        changeScene("photo/1.3.png");

        mainButton.style.display = "none";

        choiceButtons.style.display = "block";
    }
};


// ==============================
// YES BUTTON
// ==============================

yes.onclick = function () {

    showEnding();

};


// ==============================
// NO BUTTON
// ==============================

no.onclick = function () {

    noCount++;

    // --------------------------
    // NO #1
    // --------------------------

    if (noCount === 1) {

        changeScene("photo/1.4.png");

    }


    // --------------------------
    // NO #2
    // --------------------------

    else if (noCount === 2) {

        changeScene("photo/1.5.png");

    }


    // --------------------------
    // NO #3
    // --------------------------

    else if (noCount === 3) {

        changeScene("photo/1.6.png");

    }


    // --------------------------
    // NO #4
    // --------------------------

    else if (noCount === 4) {

        changeScene("photo/1.6.png");

    }


    // --------------------------
    // NO #5
    // --------------------------

    else if (noCount === 5) {

        changeScene("photo/1.6.png");

    }


    // --------------------------
    // NO #6
    // --------------------------

    else if (noCount === 6) {

        changeScene("photo/1.6.png");

        no.style.display = "none";

        yes.innerHTML = "Fine 💗";

        yes.style.transform = "scale(1.5)";
    }


    // ==========================
    // MAKE NO SMALLER
    // ==========================

    var noScale = 1 - (noCount * 0.15);

    if (noScale < 0.2) {

        noScale = 0.2;

    }

    no.style.transform = "scale(" + noScale + ")";


    // ==========================
    // MAKE YES BIGGER
    // ==========================

    var yesScale = 1 + (noCount * 0.15);

    yes.style.transform =
        "scale(" + yesScale + ")";

};


// ==============================
// HAPPY ENDING
// ==============================

function showEnding() {

    changeScene("photo/1.7.png");

    choiceButtons.style.display = "none";

    mainButton.style.display = "block";

    mainButton.innerHTML = "💗";

    mainButton.style.fontSize = "30px";

    mainButton.style.padding = "15px 80px";


    // ==========================
    // HEART BUTTON
    // ==========================

    mainButton.onclick = function () {

        showContactPage();

    };
}


// ==============================
// CONTACT PAGE
// ==============================

function showContactPage() {

    website.style.display = "none";

    contactScreen.style.display = "block";

    window.scrollTo(0, 0);

}