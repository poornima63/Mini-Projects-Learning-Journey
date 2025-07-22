
// METHOD 01
// const button = document.querySelector(".generateBtn")

// function generateRandomColor(){
//     const r =  Math.floor(Math.random()*256)
//     const g=  Math.floor(Math.random()*256)
//     const b =  Math.floor(Math.random()*256)

//     return `rgb(${r}, ${g}, ${b})`;


// }

// button.addEventListener('click', ()=>{
//     const box= document.querySelector('.colorBox') 
//     box.style.backgroundColor = generateRandomColor()
//     const ptag = document.querySelector('#rgbColor')
//     // console.log(ptag)
// ptag.innerHTML = generateRandomColor()
// }

    
// )
// window.addEventListener('load',()=>{
//     const box= document.querySelector('.colorBox') 
//     box.style.backgroundColor = generateRandomColor()
//     const ptag = document.querySelector('#rgbColor')
//     // console.log(ptag)
// ptag.innerHTML = generateRandomColor()
    
// })

//METHOD 02


function colorChanger() {
  const button = document.querySelector(".generateBtn");
  const box = document.querySelector(".colorBox");
  const ptag = document.querySelector("#rgbColor");

  button.addEventListener("click", () => {
    let str = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += str.charAt(Math.floor(Math.random() * 16));
    }

    box.style.backgroundColor = color;
    ptag.innerHTML = color;
  });
}

colorChanger();





