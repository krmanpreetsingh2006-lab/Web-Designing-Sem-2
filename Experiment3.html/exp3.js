let fontSize = 16;

function changeHeading()
{
let text = document.getElementById("textInput").value;

if(text!="")
{
document.getElementById("heading").innerText = text;
}
}

function changeBackground()
{
let colors = ["#e6f0f5","#ffe6e6","#e6ffe6","#fff5cc","#e6e6ff"];

let random = Math.floor(Math.random()*colors.length);

document.body.style.background = colors[random];
}

function increaseFont()
{
fontSize = fontSize + 2;

document.getElementById("para").style.fontSize = fontSize + "px";
}

function togglePara()
{
let para = document.getElementById("para");

if(para.style.display=="none")
para.style.display="block";
else
para.style.display="none";
}

function resetPage()
{
location.reload();
}