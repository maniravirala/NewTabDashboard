
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
  
    // Add an event listener for the search button click
    searchButton.addEventListener("click", function () {
      const query = searchInput.value.trim();
  
      if (query !== "") {
        const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(
          query
        )}`;
        // window.open(googleSearchURL, "_blank");
        window.location.href = googleSearchURL;
      }
    });
  
    // Optionally, you can also trigger the search on Enter key press
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        searchButton.click();
      }
    });
  });
  

  