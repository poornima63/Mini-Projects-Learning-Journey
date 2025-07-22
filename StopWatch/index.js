const currentDate = new Date();

const h1date = document.querySelector(".date");
h1date.innerHTML =
  currentDate.getFullYear() +
  '-' +
  String(currentDate.getMonth() + 1).padStart(2, '0') +
  '-' +
  String(currentDate.getDate()).padStart(2, '0');

let hour = 0;
let min = 0;
let sec = 0;

const h1clock = document.querySelector(".clock");
h1clock.innerText = `${hour.toString().padStart(2, '0')}:${min
  .toString()
  .padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;

const startbtn = document.querySelector(".start");
const stopbtn = document.querySelector(".stop");
const resetbtn = document.querySelector(".reset");

let interval = null;


startbtn.addEventListener('click', () => {
   

  if (interval) return;

  interval = setInterval(() => {
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
    }
    if (min === 60) {
      min = 0;
      hour++;
    }

    h1clock.innerText = `${hour.toString().padStart(2, '0')}:${min
      .toString()
      .padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  }, 1000);
 
});

stopbtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = null; 
});


resetbtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = null; 
  hour = 0;
  min = 0;
  sec = 0;
  h1clock.innerText = `00:00:00`;
  
});


