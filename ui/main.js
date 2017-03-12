//submit name
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    
   // create request object
   var request = new XMLHttpRequest();
   
   // capture the response and store it in a variable
   
   request.onreadystatechange = function () {
     if(request.readyState === XMLHttpRequest.DONE){
         // Take some action
         if(request.status === 200){
             alert('Logged in Successfully');
         }else if(request.status === 403){
             alert('Username/password is incorrect');
         }else if(request.status === 500){
             alert('Something went wrong on the server');
        }
        
     }
         
     
     };
     
     var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
     console.log(username);
     console.log(password);
     request.open('POST', 'http://vishwajeetkmr.imad.hasura-app.io/login', true);
     request.setRequestHeader('Content-Type', 'application/json');
     request.send(JSON.stringify({username: username, password: password}));
     
};





















