if (document.title.toLowerCase().indexOf("main") !== -1) {
  $$filterContentGridboxes = document.querySelectorAll(
    ".nav__item-filter .nav__item-content-gridbox"
  );
  $$filterContentGridboxes.forEach((v) => (v.style.display = "none"));
  document.querySelector(".nav__item-content-box.triple").style.height = "87px";
}
// $(".navTrigger").click(function () {
//   $(this).toggleClass("active");
//   console.log("clicked");
//   $(".nav__list-container").toggleClass("show_list");
//   $(".nav__list-container").fadeIn();
// });

// const $navListLis = document.querySelectorAll(".nav__list li");
// $(window).scroll(function () {
//   if ($(document).scrollTop() > 50) {
//     $(".nav").addClass("affix");
//   } else {
//     $(".nav").removeClass("affix");
//   }
// });

// function initNav() {
//   let tl = gsap.timeline({ delay: 1 });

//   tl.from(".logo", {
//     y: -40,
//     opacity: 0,
//     duration: 2,
//     ease: "power4",
//   });
// }
// initNav();
