Button.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        console.log("Enter key is pressed")
        document.getElementById("addButton").click();
    }
});