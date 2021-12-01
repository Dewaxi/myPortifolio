// selection from the DOM
const toggle = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".links-container");
const links = document.querySelector(".links")
const navInfo = document.querySelector(".nav-information");



// close links
toggle.addEventListener("click", getToggle = () => {
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height + navInfo.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linkContainer.style.height =  `${linksHeight}px` 
    } else {
        linkContainer.style.height = 0;
    }
});

// set date
const date = document.getElementById("date");
date.textContent = `${new Date().getUTCFullYear()}.`;


// fixed Nav
const nav = document.getElementById("nav");
const topLink = document.querySelector(".top-link")

window.addEventListener("scroll", getScroll = () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove("fixed-nav");
    }

    if (scrollHeight > navHeight) {
        topLink.classList.add("show-links")
    } else {
        topLink.classList.remove("show-links")
    }
})


// smooth scroll 
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(getScrollKinks = (scroll) =>{
    scroll.addEventListener("click", getEvent = (event) => {
        event.preventDefault();
        // navigate to exact spot
        const id = event.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // calculate height
        const navHeight = nav.getBoundingClientRect().height;
        const containerHeight = linkContainer.getBoundingClientRect().height;
        const fixedNav = nav.classList.contains("fixed-nav")
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }

        if (navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0, top: position,
        });
        linkContainer.style.height = 0;
    })
})

 $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });