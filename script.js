(function () {
  "use strict";

  // Function to handle custom behavior on button click and navigation link click
  const handleCustomBehavior = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    const offsetTop = targetElement.offsetTop ;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  // Add click event listener to each navigation link
  document.querySelectorAll(".topmenu").forEach((link) => {
    link.addEventListener("click", handleCustomBehavior);
  });
  const recommendationButton = document.getElementById('recommend_btn');
  recommendationButton.addEventListener('click',addRecommendation);
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
        "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";

      // Add this element to the end of the list of recommendations
      document.getElementById("all_recommendations").appendChild(element);

      // Reset the value of the textarea
      recommendation.value = "";
    }
  }
  const PopUpButton = document.getElementById('popupBtn');
  PopUpButton.addEventListener('click', () => {
    showPopup(true); // Pass true to show the popup
  });
  
  function showPopup(bool) {
    const popupElement = document.getElementById("popup");
    if (bool) {
      popupElement.style.display = "block";
    } else {
      popupElement.style.display = "none";
    }
  }
  

// Get the icon button and add a click event listener
const iconButton = document.querySelector('.iconbutton a');
iconButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the target ID and element
  const targetId = e.target.getAttribute('href').slice(1);
  const targetElement = document.getElementById(targetId);

  // Scroll to the target element with a smooth behavior
  const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth',
  });
});

})();
