function navigate(destination) {
    // Find the breadcrumb element
    var breadcrumb = document.getElementById('breadcrumb');
    
    // Find the current active item (last child)
    var currentActiveItem = breadcrumb.lastElementChild;

    // Check if the clicked item is the last active item
    if (currentActiveItem.innerText !== destination) {
      // Create a new list item for the clicked destination
      var newListItem = document.createElement('li');
      newListItem.className = 'breadcrumb-item';
      newListItem.innerText = destination;
      newListItem.onclick = function() {
        navigate(destination);
      };

      // Add the new list item to the breadcrumb
      breadcrumb.appendChild(newListItem);
    }
  }

// newsletter js 
document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Add your subscription logic here
    alert("Thank you for subscribing!");
  });

  /*slideShow */
  // substitutes the carousel
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

  }

  // script for login page
  function toggleForm(formType) {
    const loginSection = document.getElementById('login-section');
    const signupSection = document.getElementById('signup-section');

    if (formType === 'signup') {
        loginSection.style.display = 'none';
        signupSection.style.display = 'block';
    } else {
        loginSection.style.display = 'block';
        signupSection.style.display = 'none';
    }
}

