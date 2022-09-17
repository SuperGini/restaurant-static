const header = document.querySelector("header");
const navigation = document.querySelector(".yyy");
const menu = document.querySelector(".menu");
const trade = document.querySelector(".trade");

const sectionOneOptions = {
  rootMargin: "-100% 0% 0% 0%",
};

const sectionOneObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    console.log(entry.target);

    if (entry.isIntersecting) {
      navigation.classList.add("nav-scrolled");
      menu.classList.remove("menu1");
      trade.classList.remove("trade1");
    }

    if (!entry.isIntersecting) {
      navigation.classList.remove("nav-scrolled");
      menu.classList.add("menu1");
      trade.classList.add("trade1");
    }
  });
}, sectionOneOptions);

sectionOneObserver.observe(header);
