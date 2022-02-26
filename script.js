"use strict";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  mousewheel: true,
  speed: 1200,
  grabCursor: true,
  slidesPerView: "auto",

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const names = [
  "George",
  "Kyle",
  "Shane",
  "Isidore",
  "Lawrence",
  "Leslie",
  "Jose",
  "Wayne",
  "Jesse",
  "Bruce",
  "Reece",
  "Helge",
  "Duarte",
  "Desire",
  "Moishe",
];
const emails = names.map((name) => `${name}@gmail.com`);

const goToMenu = function () {
  window.location.href = "menu.html";
};

const goToHome = function () {
  window.location.href = "index.html";
};

const goToAbout = function () {
  window.location.href = "about.html";
};

const goToContact = function () {
  window.location.href = "contact.html";
};

const startF = function () {
  console.log(this);
  $(this).css({
    display: "flex",
  });
};

const hideComponents = function () {
  $(".main-images").removeClass("rotating");
  $(".main-images").hide("drop", {}, 2000);
  $(".container-bottom").hide("fade", {}, 2000);
  $(".desc-slide-texts").hide("fade", {}, 2000);
  $(".num-slide-texts").hide("fade", 2000);
  $("#homeBtn").hide("slide", { direction: "left" }, 2000);
  $("#menuBtn").hide("slide", { direction: "left" }, 2000);
  $("#aboutBtn").hide("slide", { direction: "left" }, 2000);
  $("#contactBtn").hide("slide", { direction: "left" }, 2000);
  $(".logoTitle").hide("slide", { direction: "up" }, 2000);
  $(".scrollDownIcon").hide("slide", { direction: "down" }, 2000);
};
const showComponents = function () {
  $(".desc-slide-texts").show("fade", {}, 2000);
  $(".num-slide-texts").show("fade", 2000);
  $("#homeBtn").show("fade", {}, 2000);
  $("#menuBtn").show("fade", {}, 2000);
  $("#aboutBtn").show("fade", {}, 2000);
  $("#contactBtn").show("fade", {}, 2000);
  $(".iconTitle").show("fade", {}, 2000);
  $(".iconImg").show("fade", {}, 2000);
  $(".container-bottom").show("fade", {}, 2000);
  $(".scrollDownIcon").show("slide", { direction: "down" }, 2000);
};

const loadHome = function () {
  $(".s1Img").show("drop", {}, 2000);
  $(".s2Img").show("drop", {}, 2000);
  $(".s3Img").show("drop", {}, 2000);
};

$("#menuText").on("click", function () {
  hideComponents();
  $(".main-images").hide("drop", {}, 2000, goToMenu, {
    easing: "easeOutElastic",
  });
});

$("#aboutText").click(function () {
  hideComponents();
  $(".main-images").hide("drop", {}, 2000, goToAbout, {
    easing: "easeOutElastic",
  });
});

$("#contactText").click(function () {
  hideComponents();
  $(".main-images").hide("drop", {}, 2000, goToContact, {
    easing: "easeOutElastic",
  });
});

$("document").ready(function () {
  loadHome();
  showComponents();
});

$("#fullName").autocomplete({
  source: names,
});

$("#email").autocomplete({
  source: emails,
});

//------------------ Buttons ------------------//
$("#homeBtn").click(function () {
  $(".main-images").show("drop", {}, 2000);
  hideComponents();
  setTimeout(function () {
    goToHome();
  }, 2000);
});

$("#menuBtn").click(function () {
  hideComponents();
  $(".main-images").hide("drop", {}, 2000, goToMenu, {
    easing: "easeOutElastic",
  });
});

$("#aboutBtn").click(function () {
  hideComponents();
  $(".main-images").hide("drop", {}, 2000, goToAbout, {
    easing: "easeOutElastic",
  });
});

$("#contactBtn").click(function () {
  hideComponents();
  $(".main-images").hide("drop", {}, 2000, goToContact, {
    easing: "easeOutElastic",
  });
});

$(".detailsBtn").click(function (e) {
  $(".perMenu__details").toggle("slide", { direction: "down" }, 2000);
  if (
    document.querySelector(".detailsBtn").textContent.replace(/\s/g, "") ==
    "Showdetails"
  ) {
    document.querySelector(".detailsBtn").textContent = "Hide Details";
  } else {
    document.querySelector(".detailsBtn").textContent = "Show details";
  }
});

//------------------ Draggable ------------------//
$(".perMenu").draggable();

$("#datepicker").datepicker();

//------------------ OnScroll ------------------//

const imgTargets = document.querySelectorAll(".aboutImages");
const txtTargets = document.querySelectorAll(".aboutTexts");
const titleTarget = document.querySelector(".bottom-container-title");

const imgObserver = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        console.log(entry.target.id);
        $(`#${entry.target.id}`).animate(
          {
            opacity: 100,
          },
          30000
        );
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0,
  }
);

imgTargets.forEach((img) => imgObserver.observe(img));
txtTargets.forEach((txt) => imgObserver.observe(txt));
imgObserver.observe(titleTarget);

$(".radios").checkboxradio();
$("#forms").validate();
