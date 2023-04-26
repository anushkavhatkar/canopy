let colorArray = ['#00CF08', '#C9E518', '#EBEE6D', '#6AFBA4', '#5DD8B3', '#00CF08', '#315B51', '#4C7345', '#758C6A', '#8BB04E'];

let mainContainer = document.querySelector('#container');

window.addEventListener('load',function(){
	size();
});

function randomFromArray(arr){
  return arr[Math.floor(Math.random()*arr.length)]
}

function size(){
	var container = document.getElementById('container');
  container.innerHTML = '';
	var x = Math.floor(window.innerWidth/20);
  var y = Math.floor(window.innerHeight/20);
  for(var i = 0; i < x*y; i++){
  	var box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);
    
    box.style.padding = window.innerWidth/20 + "px";
    box.style.backgroundColor = randomFromArray(colorArray);
    // box.style.height = window.innerHeight/20 + "px";
    // box.style.width = window.innerHeight/20 + "px";
  }
}

window.addEventListener('resize',function(){
	size();
});