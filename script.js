// whenever a user starts a game by clicking START PLAYING button then this function is called
function start(){
	var styl=document.querySelector("#main");
	styl.style.display="block";
	var tl=gsap.timeline()
	tl.to(".popup , #main",{
		y:-770,
		duration:1,
	})
	hit();
    timer();
}



//timer function... 

var timerr=60;
function timer(){
	var time = setInterval(function(){
		          if(timerr>0){
			         timerr--;
			         document.querySelector("#time").textContent=timerr;
		          }
		          else{
			         clearInterval(time); //we are clearing or Closeing interval because after condition geting unsetisfied we have to 
			                         // stop the Interval, because in the given interval it will call the function again and again...
		          }
	            },1000)
}



// function that crate random hit number..

var ran_hit;
function hit(){
	ran_hit= Math.floor(Math.random()*10);
	document.querySelector("#hitval").textContent=ran_hit;
	bubble(ran_hit); //current random hit number is sended to bubble 
}



// function which is used to display multiple bubble with random no..

function bubble(ran_hit){
	var clutter="";
    for(var i=1;i<=96;i++){
	    var ran=Math.floor(Math.random()*10);
	    clutter+=`<div id="bubble" onclick="check(${ran},${ran_hit});">${ran}</div>`; //same to same current random hit number and clicked nunber is sended 
	    																// to check function for checking hit number and clicked number is matched or not.
    }
    document.querySelector("#p-bottom").innerHTML=clutter;
    // Math.trunc or Math.floor they work as same
}



// function that check the hit's number which is matched with bubble number or not within time or not.. 

function check(ran,ran_hit){
	if(ran==ran_hit && timerr>0){  //this will checks the hit's value and clicked value is matched or not with in time..
		hit(); //after condition gets true it will call hit and score function... 
		score();
	}
}



//function which calculate the score based on the hitted bubble

var points=0;
function score(){
	points+=10;
	document.querySelector("#score").textContent=points;
}

