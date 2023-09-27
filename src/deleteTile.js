const deleteTileButton = document.getElementById("deleteButton");
let isShaking = true;

deleteTileButton.addEventListener("click", toggleButtonState);

function toggleButtonState() {
  const tiles = document.querySelectorAll(".tiles-container");
  isShaking = !isShaking;
  const currentState = isShaking ? "Delete Tile" : "Done";

  deleteTileButton.innerHTML = currentState;
  deleteTileButton.classList.toggle("bg-red-500", isShaking);
  deleteTileButton.classList.toggle("bg-green-500", !isShaking);
  deleteTileButton.classList.toggle("hover:bg-red-600", isShaking);
  deleteTileButton.classList.toggle("hover:bg-green-600", !isShaking);

  tiles.forEach((tile) => {
    const tilesContainer = tile.querySelectorAll(".tile");
    const fixedTilesContainer = tile.querySelectorAll(".fixed-tile");

    tilesContainer.forEach((div) => {
      div.removeEventListener("click", deleteTile);
    });

    fixedTilesContainer.forEach((div) => {
      div.addEventListener("click", function (event) {
        if (!isShaking) {
          event.preventDefault();
          var x = document.getElementById("deleted");
          x.className = "show";
          setTimeout(function () {
            x.className = x.className.replace("show", "");
          }, 3000);
        }
      });
    });

    if (!isShaking) {
      tilesContainer.forEach((div) => {
        div.style.animation = isShaking ? "none" : "slowShake 1s infinite";
        div.addEventListener("click", deleteTile);
      });
    } else {
      tilesContainer.forEach((div) => {
        div.style.animation = "none";
      });
    }
  });
}

function deleteTile(event) {
  event.preventDefault();
  var url = this.querySelector("a").getAttribute("href");

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

  this.remove();
}
