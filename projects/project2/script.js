const btn= document.querySelector("#me")
const div = document.querySelector("#bmi")
btn.addEventListener("click",()=>{
  
    const weight = parseFloat(document.querySelector("#wgt").value);
    const height = parseFloat(document.querySelector("#ht").value);
    const BMI = weight / ((height/100) ** 2);
const bmiText = document.createElement("h2");
bmiText.style.color = "brown";
bmiText.innerText = `Your BMI is ${BMI.toFixed(2)}`;
div.innerHTML = ''; // Clear previous result
div.appendChild(bmiText);
})