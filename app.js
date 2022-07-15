// this arr the content that will be displayed as each card to dyanimcally  create the cards
var memoryArr = [
  "A",
  "A",
  "B",
  "B",
  "C",
  "C",
  "D",
  "D",
  "E",
  "E",
  "F",
  "F",
  "O",
  "O",
  "Y",
  "Y",
  "I",
  "I",
  "X",
  "X",
  "K",
  "K",
  "L",
  "L",
];
var memoryVal = [];
var memoryTileIDs = [];
var tilesFlipped = 0;
Array.prototype.memory_tile_shuffle = function () {
  var i = this.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
};
function newBoard() {
  tilesFlipped = 0;
  var output = "";
  memoryArr.memory_tile_shuffle();
  for (var i = 0; i < memoryArr.length; i++) {
    output +=
      '<div id="tile_' +
      i +
      '" onclick="memoryFlipTile(this,\'' +
      memoryArr[i] +
      "')\"></div>";
  }
  document.getElementById("memory_board").innerHTML = output;
}
function memoryFlipTile(tile, val) {
  if (tile.innerHTML == "" && memoryVal.length < 2) {
    tile.style.background = "#FFF";
    tile.innerHTML = val;
    if (memoryVal.length == 0) {
      memoryVal.push(val);
      memoryTileIDs.push(tile.id);
    } else if (memoryVal.length == 1) {
      memoryVal.push(val);
      memoryTileIDs.push(tile.id);
      if (memoryVal[0] == memoryVal[1]) {
        tilesFlipped += 2;
        // Clear both arrays
        memoryVal = [];
        memoryTileIDs = [];
        // Check to see if the whole board is cleared
        if (tilesFlipped == memoryArr.length) {
          alert("Congratulations, Well Done!🎊 ");
          document.getElementById("memory_board").innerHTML = "";
          newBoard();
        }
      } else {
        function flip2Back() {
          // Flip the 2 tiles back over
          var tile_1 = document.getElementById(memoryTileIDs[0]);
          var tile_2 = document.getElementById(memoryTileIDs[1]);
          tile_1.style.background =
            "url(https://github.com/chanqoDev/MemoryFlipCardGame/blob/5bfde03108ab5af0772c0290eeb2c95e79c6510a/assets/dino-egg.png) no-repeat center";
          tile_1.innerHTML = "";
          tile_2.style.background =
            "url(https://github.com/chanqoDev/MemoryFlipCardGame/blob/5bfde03108ab5af0772c0290eeb2c95e79c6510a/assets/dino-egg.png) no-repeat center";
          tile_2.innerHTML = "";
          // Clear both arrays
          memoryVal = [];
          memoryTileIDs = [];
        }
        setTimeout(flip2Back, 500);
      }
    }
  }
}
