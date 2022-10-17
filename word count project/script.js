const textareaE1 = document.getElementById("textarea");
const totalCharacterE1 = document.getElementById("total-character");
const remainCharacterE1 = document.getElementById("remain-character");
textareaE1.addEventListener("keyup", ()=>
{
    updateCounter()
})
function updateCounter(){
    totalCharacterE1.innerText = textareaE1.value.length;
    remainCharacterE1.innerText = textareaE1.getAttribute("maxlength")-textareaE1.value.length;
}


