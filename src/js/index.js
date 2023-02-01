window.addEventListener("DOMContentLoaded", (event) => {
  const button = document.querySelector("#menu-btn");
  const overlay = document.querySelector(".overlay");
  const menu = document.querySelector(".mobile-main-menu");
  const counters = document.querySelectorAll(".counter");
  let scrollStarted = false;

  // Event handlers
  const navToggle = () => {
    button.classList.toggle("open");
    overlay.classList.toggle("overlay-show");
    document.body.classList.toggle("stop-scrolling");
    menu.classList.toggle("show-menu");
  };

  const scrollPage = () => {
    const scrollPos = window.scrollY;

    if (scrollPos > 100 && !scrollStarted) {
      countUp();
      scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
      reset();
      scrollStarted = false;
    }
  };

  const countUp = () => {
    counters.forEach((counter) => {
      counter.innerText = "0";

      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");

        const c = +counter.innerText;
        const increment = target / 100;

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 75);
        } else {
        }
      };
      updateCounter();
    });
  };

  const reset = () => {
    counters.forEach((counter) => (counter.innerHTML = "0"));
  };

  // Event listeners
  button.addEventListener("click", navToggle);
  document.addEventListener("scroll", scrollPage);
});
