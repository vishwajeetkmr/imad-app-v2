alert('javascript loaded');

// counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function (){
    
    // make request to counter
    
    //capture the request and store it in a variable
    
    // render the variable in correct span

    counter = counter +1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};