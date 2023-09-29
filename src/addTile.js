const inputFields = document.getElementById("inputFields");
const titleInput = document.getElementById("titleInput");
const urlInput = document.getElementById("urlInput");
var addTileButton = document.getElementById("addTileButton");
var cancelButton = document.getElementById("cancelButton");
var submitButton = document.getElementById("submitButton");

// Show Input Fields When Add Tile Button is Clicked
addTileButton.addEventListener("click", function () {
  inputFields.classList.remove("hidden");
});

// Hide Input Fields When Cancel Button is Clicked
cancelButton.addEventListener("click", function () {
  inputFields.classList.add("hidden");
  titleInput.value = "";
  urlInput.value = "";
});

document.addEventListener("DOMContentLoaded", function () {
  const tiles = localStorage.getItem("tile");
  let tileArray;
  if (tiles != null) {
    tileArray = JSON.parse(tiles);
  } else {
    tileArray = [];
  }
  tileArray.forEach((tile) => {
    createTile(tile.title, tile.url);
  });
});

function createTile(title, url) {
  const tileContainer = document.querySelector(".tiles-container"); // Add a container for the tiles
  const newTile = document.createElement("div");
  newTile.classList.add("w-1/2", "md:w-1/4", "lg:w-1/5", "p-4", "tile");

  // Determine the image source based on the starting character of the title
  let imgSrc;

  // Use a regular expression to match the first character (alphabet or number)
  const firstChar = title.match(/[A-Za-z0-9]/);

  if (firstChar) {
    // Convert the matched character to lowercase (if it's an alphabet)
    const lowerCaseChar = firstChar[0].toLowerCase();

    newTile.innerHTML = `
        <a href="${url}" target="_blank" class="w-1/4 p-2 sm:p-4">
            <div class="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105" style="width: 7vw;">
                <!-- Logo/Image -->
                <div class="p-1">
                    <img src="./images/${lowerCaseChar}.png" alt="Logo" class="w-9 h-9 mx-auto">
                    <!-- Line below the logo -->
                    <div class="bg-gray-200 h-0.5 mt-3"></div>
                </div>

                <!-- URL Name -->
                <div class="text-center p-1 pt-1">
                    <h3 class="font-normal text-sm text-gray-800 truncate">
                        ${title}
                    </h3>
                </div>
            </div>
        </a>
    `;
    tileContainer.appendChild(newTile);
  }
}

// Add Tile Button Click Event
submitButton.addEventListener("click", function () {
  const title = titleInput.value.trim();
  var url = urlInput.value;
  if (title && url) {
    url = url.trim();
    if (
      url.includes("https://") ||
      url.includes("http://") ||
      url.includes("www")
    ) {
      if (title.match(/[A-Za-z0-9]/)) {
        // createTile(title, url);
        // createTileLocal(title, url);
        // inputFields.classList.add("hidden");
        // titleInput.value = "";
        // urlInput.value = "";
        var key = localStorage.getItem("tile");
        var keyArray = [];
        let isDuplicate = false;

        if (key !== null) {
          keyArray = JSON.parse(key);

          // Check for duplicates outside the forEach loop
          for (const storedKey of keyArray) {
            if (storedKey.url == url) {
              var x = document.getElementById("duplicate");
              x.classList.add("show");
              setTimeout(function () {
                x.classList.remove("show");
              }, 3000);
              isDuplicate = true;
              break; // Exit the loop when a duplicate is found
            }
          }

          if (!isDuplicate) {
            createTile(title, url);
            createTileLocal(title, url);
            inputFields.classList.add("hidden");
            titleInput.value = "";
            urlInput.value = "";
          }
        } else {
          createTile(title, url);
          createTileLocal(title, url);
          inputFields.classList.add("hidden");
          titleInput.value = "";
          urlInput.value = "";
        }
      } else {
        var x = document.getElementById("validtitle");
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 3000);
      }
    } else {
      var x = document.getElementById("validurl");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    }
  } else {
    var x = document.getElementById("validinput");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }
});

// Load tiles from localStorage if available
const storedTilesHTML = localStorage.getItem("tileContainer");
if (storedTilesHTML) {
  tileContainer.innerHTML = storedTilesHTML;
}
