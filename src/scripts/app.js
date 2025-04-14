//#region Scroll Parallax
let listBg = document.querySelectorAll(".bg");
let titleBanner = document.querySelector(".motto");
let ticking = false;

window.addEventListener("scroll", () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            let top = window.scrollY;
            listBg.forEach((bg, index) => {
                if (index !== 0 && index !== 10) {
                    bg.style.transform = `translateY(${top * index / 2}px)`;
                } else if (index === 1) {
                    bg.style.transform = `translateY(${top / 3}px)`;
                }
            });
            titleBanner.style.transform = `translateY(${top * 3 / 2}px)`;
            ticking = false;
        });
        ticking = true;
    }
});
//#endregion

//#region Scroll Animation
const observer = new IntersectionObserver((entries) => { // Handles the visibility of elements in screen
    entries.forEach((entry) => {
        if (entry.isIntersecting) { // If element is visible in the viewport
            entry.target.classList.add("show");
        } 
        // else { // Remove this section if i want the page to only load once after scrolling
          //  entry.target.classList.remove("show");
        //}
    })
})

const hiddenElements = document.querySelectorAll(".hidden-element");
hiddenElements.forEach((el) => observer.observe(el)); // Observe all elements
//#endregion
