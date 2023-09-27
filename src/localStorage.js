function createTileLocal(title, url) {
  // Retrieve the existing tiles from localStorage
  var tiles = localStorage.getItem('tile');
  var tileArray;

  if (tiles != null) {
    // Parse the JSON string into an array
    tileArray = JSON.parse(tiles);
  } else {
    // If no tiles exist in localStorage, create an empty array
    tileArray = [];
  }

  // Create a new tile object
  var newTile = {
    title: title,
    url: url
  };

  // Add the newTile to the tileArray
  tileArray.push(newTile);

  // Convert the updated tileArray back to a JSON string
  var newArray = JSON.stringify(tileArray);

  // Store the updated array back in localStorage
  localStorage.setItem("tile", newArray);
}
