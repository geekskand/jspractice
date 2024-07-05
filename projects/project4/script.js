let number = Math.floor(Math.random()*100)
let guessLeft=9
const submit = document.querySelector("#submit")
const guessSlot = document.querySelector('#guessSlot')
const lastGuess = document.querySelector("#last") 
const message = document.querySelector("#message") 
const body = document.querySelector("body")
const loss = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTQzdGlwNWFlb2ZodWQzaWwyenh3ejlkNzRtYTF3ZDI2ZGIxMXpqayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKr3nzbh5WgCFxe/giphy.gif"
const win = 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHJocXBsYjUwb2tscG95c2x1MDBoNm9pYzduYXR4eWhrcGxucXRkYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YIo7D00296YL6LyV2P/giphy.gif'

 function createDiv(message,color,html){
    const div = document.createElement("div")
    div.setAttribute("title","number guessing game")
    div.style.backgroundColor= color
    div.style.position= "absolute"
    div.style.top = "30vh"
    div.style.left="30vw"
    div.style.zIndex= 100
    div.appendChild(document.createTextNode(message))
    const sticker = document.createElement("img")
    sticker.src=html
    sticker.height= "400px"
    sticker.width="400px"
    div.appendChild(sticker)
    body.appendChild(div)
}

submit.addEventListener("click",()=>{
    const guess = parseInt(document.querySelector("#guess").value)
    guessSlot.innerHTML=guessLeft
    if (guessLeft>0){
    if (guess > number) {
        console.log("Your guess is too high.");
        message.innerHTML="Your guess is too high."
        guessLeft -=1
      } else if (guess < number) {
        guessLeft -=1
        message.innerHTML="Your guess is too low."
        console.log("Your guess is too low.");
      } else {
        message.innerHTML="Congratulations! You guessed the number."
        setTimeout(() => {
            // …
          }, 2000)
          createDiv("Congratulations! You guessed the number.","lightgreen",win)
        console.log("Congratulations! You guessed the number.");

      }   }
      else{
        message.innerHTML="You lost it"
        setTimeout(() => {
            // …
          }, 2000)
          createDiv("You lost it","orange",loss)
        console.log("You lost it");
      }
    lastGuess.innerHTML=guess 


})