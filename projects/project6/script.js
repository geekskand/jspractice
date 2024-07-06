const div= document.querySelector("#box")

window.addEventListener("keypress",(e)=>{
div.innerHTML =`<table>
<tr>
  <th>Key</th>
  <th>Keycode</th>
  <th>Code</th>
</tr>
<tr>
  <td>${e.key === " " ? "space":e.key }</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
</tr>
</table>`
})