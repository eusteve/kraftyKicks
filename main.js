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