const display=document.getElementById("display");
function appendDisplay(input){
    display.value += input;
    }
function clear1(){
    display.value = "";
}


function culculate(){
    display.value = eval(display.value);
}
function back1(){
    display.value = display.value.substring(0,display.value.length-1);


}
