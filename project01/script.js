// const { text } = require("figlet");

// const navbar = document.querySelector(".navbar")

// navbar.style.display = 'flex';
// navbar.style.justifyContent = 'space-between';
// navbar.style.alignItems = 'center';
// navbar.style.backgroundColor = ' #06BBCC';
// navbar.style.padding = '10px 20px';
// // navbar.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.5)';
// navbar.style.height = "60px"
// navbar.style.marginTop = "0px"

// // logo
//  const logo = navbar.querySelector("h2");
//  logo.style.color = 'white';
// logo.style.margin = '0';
// logo.style.fontSize = '24px';
//   logo.style.fontFamily = "poppins"

// // nav-list

// const navList = document.querySelector(".nav-list");
// navList.style.display = "flex";
// navList.style.gap = "20px";
 
// // nav-items

// const navItems = document.querySelectorAll(".nav-item")
// navItems.forEach(item => {
//     item.style.color = 'black';
//     item.style.textDecoration = 'none';
//     item.style.fontSize = '18px';
   
//       item.style.fontFamily = "poppins"
      


// });
//  // arrow
//  const arrow = document.querySelector(".arrow")
//  arrow.style.width = "25px";
//  arrow.style.height = "20px";
 
// //  // backgound image
// //  const img = document.querySelector("image")
// //  img.style.opacity = "5"
// //  img.style.width = "100%"


//  // Wait until the page loads
// document.addEventListener("DOMContentLoaded", () => {
//   const hero = document.querySelector(".hero");
//   const heroSec = document.querySelector(".hero-sec");

//   // Style the hero section (background & layout)
//   hero.style.height = "calc(100vh - 70px)"; // adjust if your navbar height is ~70px
//   hero.style.background = "url('./images/hero-bg.jpg') center/cover no-repeat";
//   hero.style.display = "flex";
//   hero.style.justifyContent = "center";
//   hero.style.alignItems = "center";
//   hero.style.position = "relative";
//   hero.style.marginTop = "70px"; // if navbar is fixed
//   hero.style.padding = "0 20px";

//   // Center the content inside
//   heroSec.style.color = "white";
//   heroSec.style.maxWidth = "600px";
//   heroSec.style.textAlign = "center";
// });

const cardArray = [{
  icon:"fa-user-alt",
  title:"Boost Your Skills & Career",

},
{
  icon:"fa-globe",
  title:"Get Professional Jobs",

},
{
  icon:"fa-user-graduate",
  title:"Get Professional Jobs",

},
{
  icon:"fa-graduation-cap",
  title:"Home Projects",
  
},


]

let section = document.createElement("section")
  let body =document.body
  body.append(section)
section.style.width = "100%"
section.style.height = "360px"
// section.style.border = "2px solid black"
  section.style.display = "flex"
  section.style.justifyContent = "space-between"
  section.style.padding = "55px 55px"
  section.style.boxSizing = "border-box"
 section.style.gap = "20px"
section.style.flexWrap = "wrap"

cardArray.forEach((element)=>{
    let card = document.createElement("div")
section.append(card)
card.style.border = "2px solid black"
card.style.borderRadius = "5px"
card.style.boxSizing = "border-box"
card.style.display= "block"
card.style.padding = "30px 50px"
card.style.textAlign = "center"
card.style.position = "relative"
card.style.width = "250px"
card.style.height = "250px"
card.style.backgroundColor = "#1C335F"

let iconTag = document.createElement("i")
 iconTag.className = `fas ${element.icon}`
card.append(iconTag)

iconTag.style.fontSize = "61px"
iconTag.style.marginBottom = "15px"
iconTag.style.color="#ffce29"

 let h2Tag = document.createElement("h2")
 h2Tag.innerHTML = element.title
 h2Tag.style.color = "white"
 h2Tag.style.fontWeight = "700"
 h2Tag.style.lineHeight = "26px"
 h2Tag.style.fontSize = "22px"
 h2Tag.style.fontFamily="apple-system, BlinkM"
 card.append(h2Tag)

 console.log(element)
  })