const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-list");

const menuLeft = menu.getBoundingClientRect().left;
openNav.addEventListener("click", () => {
  if (menuLeft < 0) {
    menu.classList.add("show");
  }
});

closeNav.addEventListener("click", () => {
  if (menuLeft < 0) {
    menu.classList.remove("show");
  }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  if (!link) return;
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

//product column responsive
$(".product_column3").slick({
  centerMode: true,
  centerPadding: "0",
  slidesToShow: 5,
  arrows: true,
  rows: 2,
  prevArrow:
    '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
  nextArrow:
    '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
  responsive: [
    {
      breakpoints: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoints: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoints: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoints: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
});

//for tooltip
$('[data-toggle="tooltip"]').tooltip();

//tooltip active
$(".action_links ul li a, .quick_button a").tooltip({
  animated: "fade",
  placement: "top",
  container: "body",
});

//product row activation responsive
$(".product_row1").slick({
  centerMode: true,
  centerPadding: "0",
  slidesToShow: 5,
  arrows: true,
  prevArrow:
    '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
  nextArrow:
    '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
  responsive: [
    {
      breakpoints: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoints: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoints: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoints: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
});
