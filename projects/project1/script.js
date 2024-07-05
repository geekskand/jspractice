const body = document.querySelector('body');
const box = document.querySelectorAll('.box');

box.forEach(function (button) {
  button.addEventListener('click', (e) => {
    body.style.backgroundColor = e.target.style.backgroundColor;
  });
});

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  const inp = document.querySelector('.col').value;
  console.log(inp);
  document.body.style.backgroundColor = inp;
});
