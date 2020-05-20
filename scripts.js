// Write your JavaScript code here.
// Remember to pay attention to page loading!

let altitude = Number(document.getElementById("spaceShuttleHeight"));
let imgObj = document.getElementById("rocket");

function windowLoad (){window.addEventListener("load", function(){
    console.log("Window is loaded")})
};
function buttonTakeOff(){
    let takeoffAlt = 10000;
let buttonTakeOff = document.getElementById("takeoff");

    buttonTakeOff.addEventListener("click", function(event){
    console.log("take off clicked");
    let takeOffConf = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (takeOffConf === true){
            document.getElementById("shuttleBackground").style.background='#0000ff';
            document.getElementById("flightStatus").innerHTML = "Shuttle in Flight";
            
            document.getElementById("spaceShuttleHeight").innerHTML = takeoffAlt;
            altitude = takeoffAlt
            console.log(altitude);
        }
        return altitude;
    })
}
function buttonLanding(){
let buttonLanding = document.getElementById("landing");

    buttonLanding.addEventListener("click", function(event){
    console.log("land clicked");
    window.alert("The shuttle is landing. Landing gear engaged.")
    document.getElementById("shuttleBackground").style.background='#00ff00';
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    document.getElementById("spaceShuttleHeight").innerHTML = "0";
        }
    )
}
function buttonAbort(){
    let buttonAbort = document.getElementById("missionAbort");
    
        buttonAbort.addEventListener("click", function(event){
        console.log("abort clicked");
        let abortConf = window.confirm("Confirm that you want to abort the mission.")
            if (abortConf === true){
                document.getElementById("shuttleBackground").style.background='#00ff00';
                document.getElementById("flightStatus").innerHTML = "Mission aborted";
                document.getElementById("spaceShuttleHeight").innerHTML = "0";
            }
        })
    }

function buttonUp(){
    
    let buttonUp = document.getElementById("up");
    let alt = Number(document.getElementById("spaceShuttleHeight"));
        buttonUp.addEventListener("click",function(event){
            console.log("Up");
            altitude += 10000;
            console.log(altitude)
            document.getElementById("spaceShuttleHeight").innerHTML = altitude;
            moveUp(imgObj);
        })
} 
function buttonDown(){
    
    let buttonDown = document.getElementById("down");
    let alt = Number(document.getElementById("spaceShuttleHeight"));
        buttonDown.addEventListener("click",function(event){
            console.log("Down");
            altitude -= 10000;
            console.log(altitude)
            document.getElementById("spaceShuttleHeight").innerHTML = altitude;
            moveDown(imgObj);

        })
}
function buttonLeft(){
    
    let buttonDown = document.getElementById("left");
    let alt = Number(document.getElementById("spaceShuttleHeight"));
        buttonDown.addEventListener("click",function(event){
            console.log("Left");
            moveLeft(imgObj);
        })
}  
function buttonRight(){
    
    let buttonDown = document.getElementById("right");
    let alt = Number(document.getElementById("spaceShuttleHeight"));
        buttonDown.addEventListener("click",function(event){
            console.log("Right");
            moveRight(imgObj);
        })
}         

function init() {
    imgObj = document.getElementById("rocket");
    imgObj.style.position= 'relative';
    imgObj.style.top = '0px';
    imgObj.style.bottom = '0px' 
    imgObj.style.left = '0px';
    imgObj.style.right = '0px' 
 }

 function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
 }
 function moveDown() {
    imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';
 }
 function moveUp() {
    imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px';
 }
 function moveLeft() {
    imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
 }








    // let buttonLand = document.getElementById("landing");
    // let buttonAbortMission = document.getElementById("missionAbort");




// When the "Take off" button is clicked, the following should happen:
// A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." 
    //If the shuttle is ready for liftoff, then add parts b-d.
// The flight status should change to "Shuttle in flight."
// The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
// The shuttle height should increase by 10,000 miles.