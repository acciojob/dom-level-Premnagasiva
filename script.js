//your JS code here. If required.
const item = document.getElementbyId('level')
let level = 1
let parent = item.parentElement()

while(parent){
	level++
	parent.parentElement()
}
alert(`The level of the element is: ${level}`)