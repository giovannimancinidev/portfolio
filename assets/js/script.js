'use strict';

//disable things
function ShowAndHideCinder() {
  var a = document.getElementById('Portfolio');
  var b = document.getElementById('CinderCity');
  if (a.style.display == 'block') {
    a.style.display = 'none';
    b.style.display = 'block';
  } else {
    a.style.display = 'block';
    b.style.display = 'none';
  }
}

function ShowAndHideKyle() {
  var a = document.getElementById('Portfolio');
  var c = document.getElementById('GreatKyleEscape');
  if (a.style.display == 'block') {
    a.style.display = 'none';
    c.style.display = 'block';
  } else {
    a.style.display = 'block';
    c.style.display = 'none';
  }
}

function ShowAndHideRino() {
  var a = document.getElementById('Portfolio');
  var d = document.getElementById('RinosDinerCrime');
  if (a.style.display == 'block') {
    a.style.display = 'none';
    d.style.display = 'block';
  } else {
    a.style.display = 'block';
    d.style.display = 'none';
  }
}

function ShowAndHideBomb() {
  var a = document.getElementById('Portfolio');
  var e = document.getElementById('BombKids');
  if (a.style.display == 'block') {
    a.style.display = 'none';
    e.style.display = 'block';
  } else {
    a.style.display = 'block';
    e.style.display = 'none';
  }
}

function ShowAndHideOnlyWay() {
  var a = document.getElementById('Portfolio');
  var f = document.getElementById('TheOnlyWayIsUs');
  if (a.style.display == 'block') {
    a.style.display = 'none';
    f.style.display = 'block';
  } else {
    a.style.display = 'block';
    f.style.display = 'none';
  }
}

function ShowAndHideDogsQuest() {
  var a = document.getElementById('Portfolio');
  var g = document.getElementById('DogsQuest');
  if (a.style.display == 'block') {
    a.style.display = 'none';
    g.style.display = 'block';
  } else {
    a.style.display = 'block';
    g.style.display = 'none';
  }
}

function ShowAndHideUhane() {
  var a = document.getElementById('Portfolio');
  var h = document.getElementById('Uhane');
  if (a.style.display == 'block') {
    a.style.display = 'none';
    h.style.display = 'block';
  } else {
    a.style.display = 'block';
    h.style.display = 'none';
  }
}

function ShowAndHideUnknown() {
  var a = document.getElementById('Portfolio');
  var i = document.getElementById('TheUnknownProject');
  if (a.style.display == 'block') {
    a.style.display = 'none';
    i.style.display = 'block';
  } else {
    a.style.display = 'block';
    i.style.display = 'none';
  }
}

function Reset() {
  var a = document.getElementById('Portfolio');
  var b = document.getElementById('CinderCity');
  var c = document.getElementById('GreatKyleEscape');
  var d = document.getElementById('RinosDinerCrime');
  var e = document.getElementById('BombKids');
  var f = document.getElementById('TheOnlyWayIsUs');
  var g = document.getElementById('DogsQuest');
  var h = document.getElementById('Uhane');
  var i = document.getElementById('TheUnknownProject');
  var video1 = document.getElementById('CinderCityVideo');
  var video2 = document.getElementById('RinosDinerCrimeVideo');
  var video3 = document.getElementById('GreatKyleEscapeVideo');
  var video4 = document.getElementById('BombKidsVideo');
  var video5 = document.getElementById('TheOnlyWayIsUsVideo');
  var video6 = document.getElementById('DogsQuestVideo');
  var video7 = document.getElementById('UhaneVideo');
  var video8 = document.getElementById('TheUnknownProjectVideo');

  a.style.display = 'block';
  b.style.display = 'none';
  c.style.display = 'none';
  d.style.display = 'none';
  e.style.display = 'none';
  f.style.display = 'none';
  g.style.display = 'none';
  h.style.display = 'none';
  i.style.display = 'none';
  video1.src = video1.src;
  video2.src = video2.src;
  video3.src = video3.src;
  video4.src = video4.src;
  video5.src = video5.src;
  video6.src = video6.src;
  video7.src = video7.src;
  video8.src = video8.src;
}


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  // Replace spaces in selectedValue with dashes if spaces are used in the HTML attribute to denote separate words in a single category
  const formattedSelectedValue = selectedValue.replace(/\s+/g, '-').toLowerCase();

  for (let i = 0; i < filterItems.length; i++) {
    // Use a different delimiter like '|' to separate categories
    const categories = filterItems[i].dataset.category.split('|').map(category => category.trim().replace(/\s+/g, '-').toLowerCase());

    if (formattedSelectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (categories.includes(formattedSelectedValue)) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}