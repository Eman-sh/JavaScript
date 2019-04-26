const color = document.getElementById("colorPicker");
const width = document.getElementById("inputWidth");
const height=document.getElementById("inputHeight");
const canvas =document.getElementById("pixelCanvas");

// user chooses the color, height and width to bild the grid


function makeGrid() {
//building the grid after the user enters the width and height sizes
  const table = document.createDocumentFragment();
  for (let h = 0; h < height.value; h++) {
 // creating the new element = table
    const tr = document.createElement('tr');

    for (let w = 0; w < width.value; w++) {
      const td = document.createElement('td');
 // adding the elements
      tr.appendChild(td);
 // reclicking submit clear the grid
      canvas.innerHTML = '';
   
    }
// clicking a box fills it with the chosen color
  function Box(fill) {
  fill.target.style.backgroundColor = color.value;
}
    tr.addEventListener('click', Box);
    table.appendChild(tr);
  }

  canvas.appendChild(table);
};


//calling the makeGrid function
document.querySelector('form').addEventListener('submit', function(fill){
  fill.preventDefault();
  makeGrid();

});
