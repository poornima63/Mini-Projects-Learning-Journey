let section = document.createElement('section')
section.style.border="2px solid black"
section.style.display = "flex"
section.style.flexDirection = "column"
section.style.justifyContent= "center"
section.style.alignItems = "center"
section.style.height="309px"
section.style.width = "100%"
section.style.lineHeight = "3px"
// section.style.backgroundColor = "#06BBCC"
let body = document.body;
body.append(section)
let h1Tag = document.createElement('h1')
h1Tag.innerHTML = "Contact Us to Get Our Best Service"
h1Tag.style.color = "white"
h1Tag.style.fontSize = "36px"
let pTag = document.createElement('p')
pTag.innerHTML = "India's Best IT Services & Training Programming "
pTag.style.color = "white"
pTag.style.fontSize = "20px"
console.log(section)
section.appendChild(h1Tag)
section.appendChild(pTag)
section.style.backgroundImage = "url(https://www.hanumanttechnology.com/images/module-bg2.jpg)"

let divTag = document.createElement('div')
section.append(divTag)
section.style.lineHeight = "5px"



let btn1 = document.createElement('button')
divTag.append(btn1)
btn1.innerHTML = "IT services"
let btn2 = document.createElement('button')
divTag.append(btn2)
btn2.innerHTML = "Internship training"

let btn3 = document.createElement('button')
divTag.append(btn3)
btn3.innerHTML = "Professional jobs"

divTag.style.display = "flex"
divTag.style.justifyContent = "space-between"
// divTag.style.flexDirection = "row"\
divTag.style.gap = '30px'
divTag.style.marginTop = "10px"


    // background: transparent;
    // color: #21a7d0;
    // border: 1px solid #21a7d0;
    // margin-right: 20px;

    btn1.style.background = "transparent"
    btn1.style.color = "#21a7d0"
    btn1.style.border = "1px solid #21a7d0"
    btn1.style.marginRight = "20px"
    btn1.style.borderRadius = "3px"
btn1.style.fontSize = "18px"
btn1.style.background = "transparent"
btn1.style.padding="12px 40px"
btn1.style.marginRight = "20px"
btn1.style.fontWeight = "500"


// btn2
 btn2.style.background = "transparent"
    btn2.style.color = "#21a7d0"
    btn2.style.border = "1px solid #21a7d0"
    btn2.style.marginRight = "20px"
    btn2.style.borderRadius = "3px"
btn2.style.fontSize = "18px"
btn2.style.background = "transparent"
btn2.style.padding="12px 40px"
btn2.style.marginRight = "20px"
btn2.style.fontWeight = "500"

// btn3
 btn3.style.background = "transparent"
    btn3.style.color = "#21a7d0"
    btn3.style.border = "1px solid #21a7d0"
    btn3.style.marginRight = "20px"
    btn3.style.borderRadius = "3px"
btn3.style.fontSize = "18px"
btn3.style.background = "transparent"
btn3.style.padding="12px 40px"
btn3.style.marginRight = "20px"
btn3.style.fontWeight = "500"
