(function () {
  "use strict";
  // Wait for the DOM to be ready
  document.addEventListener("DOMContentLoaded", function () {
    // Select all links with hashes
    const links = document.querySelectorAll('a[href*="#"]');

    // Loop through each link and add smooth scroll
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
    const recommendationButton = document.getElementById("recommend_btn");
    recommendationButton.addEventListener("click", addRecommendation);
    // Function to add a new recommendation
    function addRecommendation() {
      // Get the message of the new recommendation
      let recommendation = document.getElementById("new_recommendation");

      // If the user has left a recommendation, display a pop-up
      if (recommendation.value != null && recommendation.value.trim() != "") {
        console.log("New recommendation added");
        // Call showPopup here
        showPopup(true);

        // Create a new 'recommendation' element and set its value to the user's message
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");
        element.innerHTML =
          "<span>&#8220;</span>" +
          recommendation.value +
          "<span>&#8221;</span>";

        // Add this element to the end of the list of recommendations
        document.getElementById("all_recommendations").appendChild(element);

        // Reset the value of the textarea
        recommendation.value = "";
      }
    }
    const PopUpButton = document.getElementById("popupBtn");
    PopUpButton.addEventListener("click", () => {
      showPopup(false);
    });
    // Function to show or hide the popup
    function showPopup(bool) {
      if (bool) {
        document.getElementById("popup").style.visibility = "visible";
      } else {
        document.getElementById("popup").style.visibility = "hidden";
      }
    }

    // Personal-Logo handling
    const Instagram = document.getElementById("Instagram");
    const Linkdin = document.getElementById("Linkdin");
    const FaceBook = document.getElementById("FaceBook");
    const WhatsApp = document.getElementById("WhatsApp");

    Instagram.addEventListener("click", function () {
      window.location.href = "https://www.instagram.com/pandistic._.zain/";
    });

    Linkdin.addEventListener("click", function () {
      window.location.href =
        "https://www.linkedin.com/in/zain-ul-abideen-b9215a283/";
    });
    FaceBook.addEventListener("click", function () {
      window.location.href =
        "https://web.facebook.com/people/Zain-Ul-Abideen/pfbid0FJxkLMyyVtNkMdvpek9fNgMdk9KeZKaiAZzSmQAhtnB6Ykytov1ojv5Psqay9AcMl/";
    });

    WhatsApp.addEventListener("click", function () {
      window.location.href = "https://wa.me/+923245995192";
    });
  });
})();
