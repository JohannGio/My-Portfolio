"use strict";

// const text = document.querySelector(".sec-text");

// const textLoad = () => {
//     setTimeout(() => {
//         text.textContent = "Web-developer";
//     },0);
//     setTimeout(() => {
//         text.textContent = "Front-end";
//     },4050);
//     setTimeout(() => {
//         text.textContent = "Back-end";
//     },8050);
// }
// textLoad();
// setInterval(textLoad, 14000);

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web-developer";
        setTimeout(() => {
            text.textContent = "Front-end";
            setTimeout(() => {
                text.textContent = "Back-end";
                // Add more text changes here if needed
            }, 4000); // Delay after "Front-end"
        }, 4000); // Delay after "Web-developer"
    }, 0);
};

textLoad();
setInterval(textLoad, 14000);



let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex = n;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].style.display = 'block';
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

showSlide(slideIndex);

console.log("HEllo world");



// LINKS

// const allLinks = document.querySelectorAll('a:link');

// allLinks.forEach(function(link) {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();
//         const href = link.getAttribute("href");

//         //SCroll to top 
//         if(href=== "#") window.scrollTo({
//             top:0,
//             behavior: "smooth",
//         });
//         if(href !== "#" && href.startsWith("#")) {
//             const sectionEl = document.querySelector(href);
//             sectionEl.scrollIntoView({behavior: "smooth"});
//         }
//     });
// });


// STICK NAV 
const header = document.querySelector(".hero-main");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
obs.observe(header);