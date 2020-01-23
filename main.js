let doorImage = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById('start');
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let currentlyPlaying = true;
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if(choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }else if(choreDoor === 2){
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}

const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  }else if(isBot(door)){
    gameOver();
  }
}
const isBot = (door) => {
  if(door.src === botDoorPath){
    return true;
  }else{
    return false;
  }
}
const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

doorImage.onclick = () => {
  if(!isClicked(doorImage) && currentlyPlaying){
    doorImage.src = openDoor1;
    playDoor(doorImage);
  }
}

doorImage2.onclick = () => {
  if(!isClicked(doorImage2) && currentlyPlaying){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if(!isClicked(doorImage3) && currentlyPlaying){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}
startButton.onclick = () => {
  if(!currentlyPlaying){
    startRound();
  }
}
const startRound = () => {
  numClosedDoors = 3;
  doorImage.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}
const gameOver = (status) => {
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }else{
    startButton.innerHTML = 'Game Over! Play again?';
  }
  currentlyPlaying = false;
}
startRound();