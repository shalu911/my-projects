const btnE1 = document.querySelector(".btn");
btnE1.addEventListener("mouseover",(event)=>{
    const X = (event.pageX - btnE1.offsetLeft);
    const Y = event.pageY - btnE1.offsetTop;

    btnE1.style.setProperty =("--xPos", X +"px");
    btnE1.style.setProperty =("--yPos", Y +"px");
   
});
