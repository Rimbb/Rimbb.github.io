const imghey = document.querySelector(".hey");
const imgwall = document.querySelector(".wall");
const content = document.querySelector(".content");
const svg = document.querySelector(".svg-wrapper");
const arrow = document.querySelector("#arrow");
const arrowup = document.querySelector("#arrowup");
const text = document.querySelector(".text");
const hello = document.querySelector("#hello");
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const contact = document.querySelector("#contact");

svg.style.animation = "svg_Reveal 2s 0.5s forwards";

arrowup.style.display = "none";

svg.addEventListener("click", () => {
  document.querySelector(".wrapper_Welcome").style.display = "none";
  document.querySelector(".wrapper_Home").style.display = "flex";
  setTimeout(() => {
    imghey.style.left = "8.5%";
    imghey.style.opacity = "1";
  }, 1000);
});

imghey.onmouseout = function() {
  imghey.src = "./assets/avatar/avatarheybefore.png";
};

imghey.onmouseover = function() {
  imghey.src = "./assets/avatar/avatarheyafter.png";
};

arrow.addEventListener("click", () => {
  about.scrollIntoView({ behavior: "smooth" });
});

content.addEventListener("scroll", () => {
  // Hello div is targeted
  const observer1 = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting === true) {
        arrowup.style.display = "none";
        arrow.addEventListener("click", () => {
          about.scrollIntoView({ behavior: "smooth" });
        });
      }
    },
    { threshold: [0.5] }
  );
  observer1.observe(hello);
  // About div is targeted
  const observer2 = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting === true) {
        imghey.style.left = "8.5%";
        imghey.style.opacity = "1";
        imgwall.style.left = "6%";
        imgwall.style.opacity = "0";
        arrow.addEventListener("click", () => {
          skills.scrollIntoView({ behavior: "smooth" });
        });
        arrowup.style.display = "block";
        arrowup.addEventListener("click", () => {
          hello.scrollIntoView({ behavior: "smooth" });
        });
        imghey.onmouseout = function() {
          imghey.src = "./assets/avatar/avatarheybefore.png";
        };

        imghey.onmouseover = function() {
          imghey.src = "./assets/avatar/avatarheyafter.png";
        };

        setTimeout(() => {
          imghey.src = "./assets/avatar/avatarheyafter.png";
        }, 2000);
        setTimeout(() => {
          imghey.src = "./assets/avatar/avatarheybefore.png";
        }, 2500);
        setTimeout(() => {
          imghey.src = "./assets/avatar/avatarheyafter.png";
        }, 3000);
        setTimeout(() => {
          imghey.src = "./assets/avatar/avatarheybefore.png";
        }, 3500);
      }
    },
    { threshold: [0.5] }
  );
  observer2.observe(about);

  // Skills div is targeted
  const observer3 = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting === true) {
        imghey.style.left = "6%";
        imghey.style.opacity = "0";
        imgwall.style.left = "8.5%";
        imgwall.style.opacity = "1";
        arrow.style.display = "block";
        arrowup.style.display = "block";
        arrow.addEventListener("click", () => {
          contact.scrollIntoView({ behavior: "smooth" });
        });
        arrowup.addEventListener("click", () => {
          about.scrollIntoView({ behavior: "smooth" });
        });
      }
    },
    { threshold: [0.5] }
  );
  observer3.observe(skills);

  // Contact div is targeted
  const observer4 = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting === true) {
        arrow.style.display = "none";
        arrowup.style.display = "block";
        arrowup.addEventListener("click", () => {
          skills.scrollIntoView({ behavior: "smooth" });
        });
        setTimeout(() => {
          imgwall.src = "./assets/avatar/avatarwallafter.png";
        }, 2000);
        setTimeout(() => {
          imgwall.src = "./assets/avatar/avatarwallbefore.png";
        }, 2500);
      }
    },
    { threshold: [0.5] }
  );
  observer4.observe(contact);
});
