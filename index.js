var num1=Math.floor((Math.random()*6))+1;
var num2=Math.floor((Math.random()*6))+1;








if(num1>num2){
    document.querySelector("h1").textContent="🥇 Person 1 Win";
}
else if(num2>num1){
    document.querySelector("h1").textContent="Person 2 Win 🥇";
    
}
else if(num1===num2){
    
    document.querySelector("h1").textContent="🥇 Draw 🥇";
}








//for person1
if( num1 ===1){
    document.getElementById("person1").src="side1.png";
}

else if(num1===2){
    document.querySelector("#person1").src="side2.png"
    
    
}
else if(num1===3){
    document.querySelector("#person1").src="side3.png"
    
    
}
else if(num1===4){
    document.querySelector("#person1").src="side4.png"    
    
}

else if(num1===5){
    
    document.querySelector("#person1").src="side5.png"
}
else{
    document.querySelector("#person1").src="side6.png"

}


//for person2
if( num2 ===1){
    document.getElementById("person2").src="side1.png";
}

else if(num2===2){
    document.querySelector("#person2").src="side2.png"
    
    
}
else if(num2===3){
    document.querySelector("#person2").src="side3.png"
    
    
}
else if(num2===4){
    document.querySelector("#person2").src="side4.png"    
    
}

else if(num2===5){
    
    document.querySelector("#person2").src="side5.png"
}
else{
    document.querySelector("#person2").src="side6.png"

}
