// counter code
var button = document.getElementById('counter');

button.onclick = function (){
    
    // create request to counter
    var request = new XMLHttpRequest();
    
    
    //capture the request and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
    span.innerHTML = counter.toString();
                
            }
        }
        
    };
    
    // make the request
    request.open('GET','http://vishwajeetkmr.imad.hasura-app.io/counter');
    request.send(null);

};