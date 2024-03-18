/** Start Global Variables */



/** End Global Variables */

/* ========================================================================================== */
/*                                        Global Functions                                    */

/**
 * Handele Active function
 */
function handleActive(event) {
  // Remove the active class from all links and hide all sections
  event.target.parentElement
    .querySelectorAll(".active")
    .forEach((element) => element.classList.remove("active"));

  // Add the active class to the clicked element and show the related section
  event.target.classList.add("active");
}

/* ========================================================================================== */
/*                                          Setting Box                                       */

/**
 * Setting Box Toggle Main Classes
 */

// Toggle Spin Class on Icon
const userGear = document.querySelector(".toggle__setting .user-gear");
userGear.onclick = function () {
  // Toggle class 'fa-beat-fade' for fadding Icon
  this.classList.toggle("fa-beat-fade");

  // Toggle Class 'open' on Main Setting Box
  const settingBox = document.querySelector(".main__settings");
  settingBox.classList.toggle("open");

  // Toggle Class 'change-bgcolor' on Toggle Setting Container
  const toggleSetting = document.querySelector(
    ".main__settings .toggle__setting"
  );
  toggleSetting.classList.toggle("change-bgcolor");
};

/* ========================================================================================== */
/*                                          Setting Box                                       */
/**
 * Setting Box Change Colors Option
 */

// Switch Colors Option
const colorsList = document.querySelectorAll(".color__list li");
const imgElement = document.getElementById("about_img");

// Check if There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

// Check if There's Local Storage Image_path Option
let imagePath = localStorage.getItem("image_path");

// Check If color_option Local Storage Is not Empty
if (mainColors !== null) {
  /// Save The Clicked Color To Local Storage
  document.documentElement.style.setProperty("--main-color", mainColors);

  /// Remove Active Class From All 'colors__list' Item
  colorsList.forEach((element) => {
    element.classList.remove("active");

    /// Add Active Class on Element with Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {
      element.classList.add("active");
    }
  });
}

// Check If image_path Local Storage Is not Empty
if (imagePath != null) {
  imgElement.src = imagePath;
}

// loop On All List Items
colorsList.forEach((li) => {
  /// Add Event Listener to Each Color Item
  li.addEventListener("click", (e) => {
    let colorName = e.target.dataset.color;
    let imgSrc = e.target.dataset.src;

    /// Set Color On Root
    /// document.documentElement.style.setProperty(`--${colorName}-theme`, `var(--${colorName})`);
    document.documentElement.style.setProperty("--main-color", colorName);

    /// Set Color on Local Storage
    localStorage.setItem("color_option", colorName);

    /**
     * /// Remove Active Class From All 'colors__list' Item
     * colorsList.forEach(item => item.classList.remove('active'));
     * /// Add Active Class on Selected Color Item
     * e.target.classList.add('active');
     */

    handleActive(e);

    /// Change Image Source
    imgElement.setAttribute("src", imgSrc);

    /// Set Image Source on Local Storage
    localStorage.setItem("image_path", imgSrc);
  });
});
/* ========================================================================================== */
/*                                          Setting Box                                       */
/**
 * Setting Box Random Background Option
 */

// Switch Random Background Option
const randomBgEl = document.querySelectorAll(".bg__switch span");

// Check if There's Local Storage Random Background option
let bgLocalItem = localStorage.getItem("background_option");

// Random Background Option
let backgroundOption = true;

// Check If Random Background Option Local Storage Is not Empty
if (bgLocalItem !== null) {

  /// Remove Active Class From All 'bg__switch' Element
  randomBgEl.forEach((element) => element.classList.remove("active"));

  /// Add Active Class on Selected Element
  if (bgLocalItem === "true") {

    (backgroundOption = true);

    document.querySelector(".bg__switch .yes").classList.add("active");

  } else {

    (backgroundOption = false);

    document.querySelector(".bg__switch .no").classList.add("active");

  }

}

// loop On All Spans Element
randomBgEl.forEach((span) => {

  /// Add Event Listener to Each Span Element
  span.addEventListener("click", (e) => {
    /**
     *
     * /// Remove Active Class From All 'bg__switch' Element
     * randomBgEl.forEach(item => item.classList.remove('active'));
     * /// Add Active Class on Selected Span Element
     * e.target.classList.add('active');
     */

    handleActive(e);

    if (e.target.dataset.background === "yes") {

      backgroundOption = true;

      randomizeBg();

      localStorage.setItem("background_option", true);

    } else {

      backgroundOption = false;

      clearInterval(intervalIdBg);

      localStorage.setItem("background_option", false);

    }
  });
});
/* ========================================================================================== */
/*                                          Setting Box                                       */
/**
 * Navigation Bullets
 * Create Navigation Bullets Logic
 */

//  Get Nav Bullets from DOM and Assign to Variable (Select All Bullets)
const navBullets = document.querySelectorAll(".nav__bullets .bullets");

navBullets.forEach((bullet) => {

  bullet.addEventListener("click", (e) => {

    /// Data Attribute of Clicked Bullet
    let sectionData = e.target.dataset.section;

    // Smooth Scroll into View
    // document.querySelector(`.${sectionData}`).scrollIntoView({ behavior: "smooth" });
    document.querySelector(sectionData).scrollIntoView({

      behavior: "smooth",

    });

  });

});

// console.log(navBullets)
/* ========================================================================================== */
/*                                          Setting Box                                       */
/**
 * Show Bullets Local Storage
 */

let bulletsSpan = document.querySelectorAll(".bullet__switch span");
let bulletsContainer = document.querySelector(".nav__bullets");

// Check if There's Local Storage Show Bullets option
let bulletsLocalItem = localStorage.getItem("bullets_option");

// Check If Bullets Option Local Storage Is not Empty
if (bulletsLocalItem !== null) {

  bulletsSpan.forEach(span => {

    span.classList.remove('active');

  });

  if (bulletsLocalItem === 'block') {

    bulletsContainer.style.display = 'block';

    document.querySelector(".bullet__switch .yes").classList.add("active");

  } else {

    bulletsContainer.style.display = "none"

    document.querySelector(".bullet__switch .no").classList.add("active");

  }
}

bulletsSpan.forEach((span) => {

  span.addEventListener("click", (e) => {

    if (span.dataset.display === "show") {

      bulletsContainer.style.display = "block";

      localStorage.setItem("bullets_option", 'block');

    } else {

      bulletsContainer.style.display = "none";

      localStorage.setItem("bullets_option", "null");

    }

    handleActive(e);

  });
});
/* ========================================================================================== */
/*                                          Setting Box                                       */
/**
 * Reset Optional Logic
 */

// Reset Button
let resetButton = document.querySelector(".reset__options");

resetButton.addEventListener("click", () => {

  // Hide all Settings Boxes & Show the General One by Default
  // localStorage.clear();   // For All Data

  localStorage.removeItem("background_option");   // For Spcial Data
  localStorage.removeItem("color_option");
  localStorage.removeItem("bullets_option");
  localStorage.removeItem("image_path");

  // Relpad Window
  window.location.reload()

});
/* ========================================================================================== */
/*                                        Nav Bar as Active                                   */

const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section');

let toggleBtn = document.querySelector(".toggle-menu");
let menuNavbar = document.querySelector(".nav__list");

// Set sections as active

let currentSection = '';
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let SectionOffset = section.offsetTop - 100;
    if (SectionOffset <= top) {
      currentSection = section.id;
      // console.log(currentSection);
    }
  });

  navLinks.forEach(links => {
    let linkHref = links.href;
    let id = linkHref.split('#')[1];
    // console.log(`#${id}`);
  document
    .querySelector(`[href ="#${currentSection}"]`)
      .classList.add("active");
    links.classList.remove("active")
  })
});

// Toggle Menu

toggleBtn.addEventListener("click", (event) => {

  /// Stop Propagation
  event.stopPropagation();

  /// Toggle Class "open" on Links
  menuNavbar.classList.toggle("open");
});

//  Close Menu When Clicked Outside Menu and Toggle Button
document.body.addEventListener('click', (event) => {

  let isToggle = menuNavbar.classList.contains('open'); // Check if Menu is Open or Not
  let isNavbar = menuNavbar.contains(event.target);

  // if (event.target !== toggleBtn && event.target !== menuNavbar)
  if (isToggle && !isNavbar) {    // If it's open and they click outside, close it.

    menuNavbar.classList.toggle('open');
  }

});

/* ========================================================================================== */
/*                                      Landing Page Section                                  */

/**
 * Randomly Change background with JS
 */

// Select landing Page Element
let landingPage = document.querySelector(".landing__page");



// variable To Control The Inerval
let intervalIdBg;

// Get Array Of Images
let imgsArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
];

// Function To Change Background
function randomizeBg() {
  // Check If BG Is Enabled Or Not
  if (backgroundOption) {
    intervalIdBg = setInterval(() => {
      ///  Select Random Image From Array
      // let imgSrc = './img/' + imgsArray[Math.floor(Math.random() * imgsArray.length)];
      // let imgSrc = `./img/${imgsArray[Math.floor(Math.random() * imgsArray.length)]

      /// Get Random Index
      let randomIndex = Math.floor(Math.random() * imgsArray.length);

      /// Change Background Image URL
      landingPage.style.backgroundImage = `url(Images/${imgsArray[randomIndex]})`;
    }, 30000);
  }
}

randomizeBg();

/* ========================================================================================== */
/*                                      The Skills Section                                    */

/**
 * Animate Width On Scrolling
 */

//  Skills Global Variables
let skillsSection = document.querySelector(".skills");
let skillsItems = document.querySelectorAll(".skill_prog span");

window.addEventListener("scroll", () => {
  //Check Scroll Position And Show Skills On Screen
  // Window Scroll Y Position
  let scrollYPosition = window.scrollY;
  // Check If The Skills Section Is Visible In Viewport
  if (scrollYPosition >= skillsSection.offsetTop - 100) {
    // Checking For Each Item In The List
    skillsItems.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
});
/* ========================================================================================== */
/*                                       Gallery Section                                      */

/**
 * Create The Popup Box
 */

// Create The Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (event) => {
    // event.preventDefault();

    /// Create Overlay Element
    let overLay = document.createElement("div");

    /// Add Class To Overlay
    // overLay.classList.add('popup-overlay');
    overLay.className = "popup-overlay";

    // Append Overlay To Body
    document.body.appendChild(overLay);

    /// Create The Popup Box
    let popupBox = document.createElement("div");

    /// Add Class To The Popup Box
    popupBox.className = "popup-box";

    /// Create The Image
    let popupImage = document.createElement("img");

    /// Set Image Source
    popupImage.src = img.src;

    /// Add Image To Popup Box
    popupBox.appendChild(popupImage);

    /// Append The popup Box To The Box
    document.body.appendChild(popupBox);

    /// Create The Close Span
    let closeButton = document.createElement("span");

    /// Create The Close Button Text
    closeButton.textContent = "x";

    /// Add Class To Close Button
    closeButton.className = "close-button";

    /// Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);

    if (img.alt !== null) {
      /// Create Heading
      let imgHeading = document.createElement("h3");

      /// Create Text For Heading
      let headingText = document.createTextNode(img.alt);

      /// Append The Text To The Heading
      imgHeading.appendChild(headingText);

      /// Append The Heading To The Popup Box
      popupBox.insertBefore(imgHeading, popupImage);
    }
  });
});

// Close Popup Box
document.addEventListener("click", (e) => {
  // if (e.target.className == 'close-button')
  if (e.target.classList.contains("close-button")) {
    /// Remove  The Current Popup Box
    // document.body.removeChild(e.target.parentElement);
    e.target.parentNode.remove();

    /// Remove Overlay
    document.querySelector(".popup-overlay").remove();
  }
});
/* ========================================================================================== */
