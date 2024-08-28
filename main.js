const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

fetch('Data_Home_Page.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('offer_title_1').textContent = data.offer_title_1;
    document.getElementById('offer_title_2').textContent = data.offer_title_2;
    document.getElementById('offer_1').textContent = data.offer_1;
    document.getElementById('offer_content_1').textContent = data.offer_content_1;
    document.getElementById('offer_2').textContent = data.offer_2;
    document.getElementById('offer_content_2').textContent = data.offer_content_2;
    document.getElementById('offer_3').textContent = data.offer_3;
    document.getElementById('offer_content_3').textContent = data.offer_content_3;
    document.getElementById('event_title_1').textContent = data.event_title_1;
    document.getElementById('event_title_2').textContent = data.event_title_2;
    document.getElementById('event_content').textContent = data.event_content;
    document.getElementById('about').textContent = data.about;
    document.getElementById('address').textContent = data.address;
    document.getElementById('gmail').textContent = data.gmail;
    document.getElementById('mobile_phone').textContent = data.mobile_phone;
  });


menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});











menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".skill__content .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".skill__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".skill__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".skill__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".skill__card", {
  duration: 1000,
  interval: 500,
  delay: 2000,
});

const portfolio = document.querySelector(".portfolio__image");

const portfolioContent = Array.from(portfolio.children);

portfolioContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  portfolio.appendChild(duplicateNode);
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
});
