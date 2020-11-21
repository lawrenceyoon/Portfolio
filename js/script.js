"use strict";

// Select all nav links (including my name), My Portfolio Link, My Portfolio Image
const getLinks = document.querySelectorAll("nav a, .scroll");

function handleClick(event) {
  event.preventDefault(); // stop default abrupt scroll
  // event.currentTarget targets what click handler was bound to (nav a, .scroll), whereas event.target would target the img, not the a tag
  const getHref = (event.currentTarget.getAttribute("href"));
  document.querySelector(getHref).scrollIntoView({
    behavior: "smooth"
  });
}

for (let i = 0; i < getLinks.length; i++) {
  getLinks[i].addEventListener("click", handleClick);
}