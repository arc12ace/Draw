var canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

var color="red"

var mouseEvent=""
var last_x, last_y, current_x, current_y

var width=3

canvas.addEventListener("mouseup", mu);
function mu(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave", ml);
function ml(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousedown", md);
function md(e){
    mouseEvent="mouseDown";
    color=document.getElementById("colorinput").value
    width=document.getElementById("widthinput").value
}
canvas.addEventListener("mousemove", mm);
function mm(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.lineWidth=width;
        ctx.strokeStyle=color;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}
function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}

