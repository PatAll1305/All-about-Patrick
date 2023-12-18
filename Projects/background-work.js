document.addEventListener("DOMContentLoaded", function () {
  // Get references to the input and button elements using data-id
  var inputBar = document.querySelector('[data-id="input-bar"]');
  var searchButton = document.querySelector('[data-id="search-button"]');

  // Add a click event listener to the search button
  searchButton.addEventListener("click", function () {
    // Get the value from the input
    var inputValue = inputBar.value;

    performSearch(inputValue);
  });

  function performSearch(query) {
    console.log("Searching for:", query);
  }
});
