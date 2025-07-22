
function bmiCalculator(){
 const button = document.querySelector("#btn")
 
  const  result = document.querySelector(".result")
 console.log(height,weight)

  button.addEventListener('click',()=>{
    let height = Number(document.querySelector("#height").value)/100
 let weight = Number(document.querySelector("#weight").value)
    const bmival = weight/(height**2)
   
    result.innerHTML = `Your BMI is ${bmival.toFixed(2)}`;
  })


}
bmiCalculator()