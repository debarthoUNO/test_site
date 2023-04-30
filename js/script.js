//function called when button from index.html is clicked
// changes style inside button from "none"->"block"
function revealMessage(){
    if(
        document.getElementById("hiddenMessage").style.display=="none"
    ){
        document.getElementById("hiddenMessage").style.display="block";
    }
    else{
        document.getElementById("hiddenMessage").style.display="none";
    }
    
}

function changeText(){
    document.getElementById("ms").style.display="block";
}