const deleteTileButton = document.getElementById("deleteButton");

// let isShaking = false;
var isShaking;
let currentState = "Delete Tile";

function toggleButtonState() {
  if (currentState === "Delete Tile") {
    // Change to "Done" state
    deleteTileButton.classList.remove("bg-red-500", "hover:bg-red-600");
    deleteTileButton.classList.add("bg-green-500", "hover:bg-green-600");
    deleteTileButton.innerHTML = "Done";
    currentState = "Done";
    isShaking = false;
  } else {
    // Change back to "Delete Tile" state
    deleteTileButton.classList.remove("bg-green-500", "hover:bg-green-600");
    deleteTileButton.classList.add("bg-red-500", "hover:bg-red-600");
    deleteTileButton.innerHTML = "Delete Tile";
    currentState = "Delete Tile";
    isShaking = true;
  }
}

deleteTileButton.addEventListener("click", function () {
  const tiles = document.querySelectorAll(".tiles-container");
  toggleButtonState();
//   if (currentState === "Done") {
    if (!isShaking) {
      tiles.forEach((tile) => {
        const tilesContainer = tile.querySelectorAll(".tile"); // Select all divs inside the tile
        const fixedTilesContainer = tile.querySelectorAll(".fixed-tile"); // Select all divs inside the tile
        fixedTilesContainer.forEach((div) => {
          div.addEventListener("click", function (event) {
            event.preventDefault();
            var x = document.getElementById("deleted");
            x.className = "show";
            setTimeout(function () {
              x.className = x.className.replace("show", "");
            }, 3000);
          });
        });

        tilesContainer.forEach((div) => {
          div.style.animation = "slowShake 1s infinite";
          div.addEventListener("click", function (event) {
            event.preventDefault();
            var url = div.querySelector("a").getAttribute("href");
            var title = div.querySelector("h3").innerHTML.trim();

            var key = localStorage.getItem("tile");
            var keyArray;
            if (key != null) {
              keyArray = JSON.parse(key);
            } else {
              keyArray = [];
            }
            keyArray.forEach((key) => {
              if (key.url == url) {

                keyArray.splice(keyArray.indexOf(key), 1);

                var newArray = JSON.stringify(keyArray);
                localStorage.setItem("tile", newArray);
              }
            });
            div.remove();
          });
        });
      });
      // setTimeout(() => {
      //     isShaking = false;
      // }, 500);
    }
    else{
        console.log("Not Shaking");

              tiles.forEach((tile) => {
        const tilesContainer = tile.querySelectorAll(".tile"); // Select all divs inside the tile
        const fixedTilesContainer = tile.querySelectorAll(".fixed-tile"); // Select all divs inside the tile
        fixedTilesContainer.forEach((div) => {
          div.addEventListener("click", function (event) {
            event.preventDefault();
            var x = document.getElementById("deleted");
            x.className = "show";
            setTimeout(function () {
              x.className = x.className.replace("show", "");
            }, 3000);
          });
        });

        tilesContainer.forEach((div) => {
          div.style.animation = "slowShake 1s infinite";
          div.addEventListener("click", function (event) {
            event.preventDefault();
            var url = div.querySelector("a").getAttribute("href");
            var title = div.querySelector("h3").innerHTML.trim();

            var key = localStorage.getItem("tile");
            var keyArray;
            if (key != null) {
              keyArray = JSON.parse(key);
            } else {
              keyArray = [];
            }
            keyArray.forEach((key) => {
              if (key.url == url) {

                keyArray.splice(keyArray.indexOf(key), 1);

                var newArray = JSON.stringify(keyArray);
                localStorage.setItem("tile", newArray);
              }
            });
            div.remove();
          });
        });
      });



    }
//   }
});
