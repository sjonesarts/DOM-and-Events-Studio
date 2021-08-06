// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
  const takeOff = document.getElementById("takeoff");
  const flightStatus = document.getElementById("flightStatus");
  const shuttleHeight = document.getElementById("spaceShuttleHeight")
  const background = document.getElementById("shuttleBackground")
  const land = document.getElementById("landing")
  const abort = document.getElementById("missionAbort")
  const rocket = document.getElementById("rocket")
  const up = document.getElementById("up")
  const down = document.getElementById("down")
  const left = document.getElementById("left")
  const right = document.getElementById("right")
   
//Remeber parseInt()
window.addEventListener('load', (event) => {
  console.log('locked and loaded');
});

takeOff.addEventListener('click', (event) => {

  flightConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.") 

   if (flightConfirm = true) {
   flightStatus.innerHTML = "Shuttle in flight.";
   background.style.backgroundColor = "blue";
   shuttleHeight.innerHTML = "10,000";
    };

});

land.addEventListener('click', (event) => {

  window.alert("The shuttle is landing. Landing gear engaged.")

  flightStatus.innerHTML = "The shuttle has landed.";
  background.style.backgroundColor = "green";
  shuttleHeight.innerHTML = "0";
});

abort.addEventListener('click', (event) => {

  abortConfirm = window.confirm("Confirm that you want to abort the mission.")

  if (abortConfrim = true) {
  flightStatus.innerHTML = "Mission aborted.";
  background.style.backgroundColor = "green";
  shuttleHeight.innerHTML = "0";
  };

});

/*up.addEventListener('click', (event) => { 
 
});

down.addEventListener('click', (event) => {

});*/

left.addEventListener('click', (event) => {

});

/*right.addEventListener('click', (event) => {

});*/


};
/*

When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
  
  The rocket image should move 10 px in the direction of the button that was clicked.
  If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.



*/

window.addEventListener("load", init);