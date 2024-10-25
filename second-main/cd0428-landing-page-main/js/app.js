/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/







/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/


//make a varible 
let ul=document.getElementById("navbar__list")
//make array 
const items = [
  { text: "Section 1", href: "#section1" },
  { text: "Section 2", href: "#section2" },
  { text: "Section 3", href: "#section3" },
  { text: "Section 4", href: "#section4" }
];
//loop for item
items.forEach(item => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = item.text;
    a.href = item.href; 
    a.className=("menu__link")
    //append child li
    li.appendChild(a);
    ul.appendChild(li); 
});



/**
 * End Global Variables
 * Start Helper Functions
 *
*/
//scrol into view smoothly

function myFunc() {
  const section = document.querySelectorAll("section");
  section.forEach(section => {
      section.scrollIntoView({ behavior: "smooth" });
  });
}

//resize screen
function resize() {
  array.forEach(section=> {
    
  });
  
}




const sections =document.querySelectorAll('section');
const options={
  root:null,
  threshold:0.5,
  rootMargin:"0px"

};
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("inverse");
    } else {
      entry.target.classList.remove("inverse");
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});








// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


