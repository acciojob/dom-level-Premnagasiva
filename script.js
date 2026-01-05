//your JS code here. If required.
const item = document.getElementById('level');
let level = 0;
let parent = item;

while(parent){
	level++
	parent = parent.parentElement
}
alert(`The level of the element is: ${level}`)