import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

let container = document.querySelector('.container');

const text = container.querySelector('h1')

const walk = 300;//100px

const app = function() {
  // container.innerHTML = `<h1 class="text">Useless</h1>`
  
  // container.addEventListener('mousemove', shadow)
}

function shadow(e) {
	const width = container.offsetWidth;
	const height = container.offsetHeight;
	//let is used because I have to reassign the values of 
	//'x' and 'y' for the if statement
	let x = e.offsetX;
	let y = e.offsetY;

	if (this !== e.target) {
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}

	const xWalk = Math.round((x / width * walk) - (walk / 2));
	const yWalk = Math.round((y / height * walk) - (walk / 2));
	
	console.log(xWalk, yWalk);

text.style.textShadow = 
   `${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
	${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
	${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
	${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)`;

}

container.addEventListener('mousemove', shadow);






// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..