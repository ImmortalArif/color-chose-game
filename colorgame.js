
var numsquares=6;
var colors= generatecolor(numsquares);
var pickedcolor=pickcolor();
var squares=document.querySelectorAll(".square")
var instruction=document.querySelector("#instruct")
var h=document.querySelector("h1");
for(var i=0; i < squares.length;i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		if(this.style.backgroundColor==pickedcolor){
			instruct.textContent="Correct";
			changecolor();
			h.style.backgroundColor=pickedcolor;
			button1.textContent="Play Again???"
		}
		else{
			this.style.backgroundColor="#232323";
			instruction.textContent="Try Again!!!";
		}
	})
}
var colordis=document.getElementById("colordisplay")
colordis.textContent=pickedcolor;
function changecolor(){
	for(i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=pickedcolor;
	}
}
function pickcolor(){
	var colorpic=Math.floor(Math.random() * colors.length);
	return(colors[colorpic]);
}
function generatecolor(num){
var arr=[];
for(var i=0;i<num;i++){
	arr.push(randomcolor());
	
}
return(arr);
}
function randomcolor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return("rgb("+r+", "+g+", "+b+")");
}
var button1=document.getElementById("button1");
button1.addEventListener("click",function(){
	colors=generatecolor(numsquares);
	pickedcolor=pickcolor();
	for(var i=0; i < squares.length;i++){
	squares[i].style.backgroundColor = colors[i];}
	colordis.textContent=pickedcolor;
	button1.textContent="New Colors";
	h.style.backgroundColor="steelblue";
	instruction.textContent="";

})
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");
easy.addEventListener("click",function(){
	instruction.textContent="";
	h.style.backgroundColor="steelblue";
easy.classList.add("selected");
hard.classList.remove("selected");
numsquares=3;
colors=generatecolor(numsquares);
pickedcolor=pickcolor();
	for(var i=0; i < squares.length;i++){
	if(colors[i]){
	squares[i].style.backgroundColor = colors[i];
}
else{
	squares[i].style.display="none";
}
}
	colordis.textContent=pickedcolor;
	vanish();
})
hard.addEventListener("click",function(){
	instruction.textContent="";
	h.style.backgroundColor="steelblue";
hard.classList.add("selected");	
easy.classList.remove("selected");
numsquares=6;
colors=generatecolor(numsquares);
pickedcolor=pickcolor();
	for(var i=0; i < squares.length;i++){
	
	squares[i].style.backgroundColor = colors[i];

	squares[i].style.display="block";
}

}

)
