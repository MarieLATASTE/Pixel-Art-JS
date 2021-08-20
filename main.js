var penColour = '#39424e';

function setPenColour(pen)
{
  penColour = pen;
}

function setPixelColour(pixel)
{
  pixel.style.backgroundColor = penColour;
}

var childDivs = document.getElementById("canvas").getElementsByTagName("div");
function resetGrid() {

    for(i = 0; i < childDivs.length; i++) {
    childDivs[i].style.backgroundColor = "white";
  }
}