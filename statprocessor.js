const form = document.getElementById("Stats");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    sendData();
});
async function sendData() {
let Rizz = document.getElementById("Rizz");
const responseId = "RizzStat";
let responseEl = document.getElementById(responseId);
if (responseEl) 
{  responseEl.remove();}

responseEl = document.createElement('p');
responseEl.setAttribute("id",responseId);
const outputText = document.createTextNode("Rizz:"+Rizz.value);
responseEl.appendChild(outputText);

Rizz.parentElement.append(responseEl);
Rizz.value = "";
}

