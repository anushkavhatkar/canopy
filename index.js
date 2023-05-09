// let colorArray = ['#00CF08', '#C9E518', '#EBEE6D', '#6AFBA4', '#5DD8B3', '#00CF08', '#315B51', '#4C7345', '#758C6A', '#8BB04E'];


// #region --------------------------------  TREE COLOR ARRAYS  ------------------------------------


let nonNativeColorsArray = [ "#2ADB31", "#B3ED39", "#D5F21F", "#ACEB44", "#02E34F", "#00CE78", "#0AFA5C", "#0CF090", "#DBFF00", "#80FF00", "#00FFA3", "#6AFBA4", "#5DD8B3", "#00CF08", "#C9E518", "#EBEE6D","#01AF5A", "#00FF19", "#20E0A6", "#20E084", "#6BEE90", "#B3ECB2", "#76DAA4", "#5CE05A", "#00FF75","#91FF8E", "#B0FF62", "#93FF26","#76EC00","#D8FAA0","#CDFF7A","#14B87D", "#00C766" ]

let nativeColorsArray = ["#2C4A43", "#005E2B", "#143514", "#428400", "#52762F", "#1D6249", "#415C1E", "#3D4A08", "#145033", "#293A18", "#70903C", "#4C7345", "#327B10", "#325F1E", "#004006", "#697A02", "#3F4420", "#707649", "#758C6A", "#394026", "#21590D", "#2B4D32" ]

let treeColorsArray = [ "#2ADB31", "#B3ED39", "#D5F21F", "#ACEB44", "#02E34F", "#00CE78", "#0AFA5C", "#0CF090", "#DBFF00", "#80FF00", "#00FFA3", "#6AFBA4", "#5DD8B3", "#00CF08", "#C9E518", "#EBEE6D","#01AF5A", "#00FF19", "#20E0A6", "#20E084", "#6BEE90", "#B3ECB2", "#76DAA4", "#5CE05A", "#00FF75","#91FF8E", "#B0FF62", "#93FF26","#76EC00","#D8FAA0","#CDFF7A","#14B87D", "#00C766", "#2C4A43", "#005E2B", "#143514", "#428400", "#52762F", "#1D6249", "#415C1E", "#3D4A08", "#145033", "#293A18", "#70903C", "#4C7345", "#327B10", "#325F1E", "#004006", "#697A02", "#3F4420", "#707649", "#758C6A", "#394026", "#21590D", "#2B4D32"]





// #endregion



// #region -------------------------------- CANOPY RANDOMIZER --------------------------------

let mainContainer = document.querySelector('#container');
let hoverText = document.querySelector('#hover-native');

window.addEventListener('load',function(){
	size();
});

function randomColor(arr){
  return arr[Math.floor(Math.random()*arr.length)]
}

function size(){
    var container = document.getElementById('container');
  container.innerHTML = '';
    var x = Math.floor(window.innerWidth/20);
  var y = Math.floor(window.innerHeight/20);
  for(var i = 0; i < x*y; i++) {
    var box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);
    
    box.style.padding = window.innerWidth/50 + "px";
    const randColor = randomColor(treeColorsArray);
    box.style.backgroundColor = randColor;
    // box.style.height = window.innerHeight/20 + "px";
    // box.style.width = window.innerHeight/20 + "px";
    
    // let hoverText = document.querySelector('#hover-native');
    let squareDivs = document.querySelectorAll('.box');
  console.log(typeof(squareDivs));
  console.log(squareDivs);

  hoverText.innerHTML = "Native";
    

    box.addEventListener("mouseover", () => {
        if (nativeColorsArray.includes(randColor)) {
            console.log("test: true");
            hoverText.innerHTML = " ";
            hoverText.innerHTML = "Native";
        } else if (nonNativeColorsArray.includes(randColor)) {
            hoverText.innerHTML = "";
            hoverText.innerHTML = "Non-Native";
        }
    });
    
    window.addEventListener("mousemove", function(e){
      let mouseX = e.pageX;
      let mouseY = e.pageY;
    
      hoverText.style.top = mouseX + "px";
      hoverText.style.left = mouseY + "px";
      
    });
    
    
  }
};

// document.addEventListener("mousemove", function(e){
//   let mouseX = e.clientX;
//   let mouseY = e.clientY;

//   hoverText.style.top = e.clientX + "px";
//   hoverText.style.left = e.clientY + "px";
  
// });

window.addEventListener('resize',function(){
	size();
});
