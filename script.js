function scrollToSection(event) {
    event.preventDefault(); // prevent default link behavior
    const targetId = event.target.getAttribute("href"); // get target element id
    const targetElement = document.querySelector(targetId); // get target element
    targetElement.scrollIntoView({ behavior: "smooth" }); // scroll to target element with smooth animation
  }
  

  