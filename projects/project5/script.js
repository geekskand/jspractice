const body = document.querySelector("body");
const start = document.querySelector("#Start");
const stop = document.querySelector("#Stop");

let changer;

start.addEventListener("click", () => {
    if(!changer){changer = setInterval(() => {
        const randomnumber1 = Math.floor(Math.random() * 256);
        const randomnumber2 = Math.floor(Math.random() * 256);
        const randomnumber3 = Math.floor(Math.random() * 256);
        body.style.backgroundColor = `rgb(${randomnumber1},${randomnumber2},${randomnumber3})`;
    }, 2000);}
});

stop.addEventListener("click", () => {
    clearInterval(changer);
    changer= null;
});
