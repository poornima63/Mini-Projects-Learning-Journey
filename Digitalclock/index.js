
const fetchdate = ()=>{
const currentDate = new Date()
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

 hours.innerHTML = currentDate.getHours()
let ampm = 'AM'
let hoursTime = currentDate.getHours()
if(hoursTime>=12){
    ampm = "PM"
}
if(hoursTime>12){
    hoursTime = hoursTime-12
}

hours.innerHTML = String(currentDate.getHours()).padStart(2,'0')
  minutes.innerHTML = String(currentDate.getMinutes()).padStart(2,'0')
  seconds.innerHTML = String(currentDate.getSeconds()).padStart(2,'0')


const ampmelem = document.querySelector(".ampm")
ampmelem.innerHTML = ampm;
}
setInterval(fetchdate , 1000)