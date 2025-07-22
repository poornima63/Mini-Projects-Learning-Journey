const input = document.createElement('input')
let body = document.body

body.append("input")

input.setAttribute("type" , "text")
console.log(input)

let btn1 = document.querySelector("#btn1")

 btn1.onmousemove = ()=>{
    console.log("mouse move")
 }
 let btn2  = document.querySelector("#btn2")

 btn2.addEventListener('click', ()=>{
    console.log("hello")
 })
 window.addEventListener('load',()=>{
    console.log("load")
 })
 window.addEventListener('scroll',()=>{
    console.log("scroll")
 })