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

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  //make arequest to the server and send the name
  //capture a list of names and render it as a list
  var names = ['name1', 'name2', 'name3'];
  for(var i=0; i<name.length; i++){
      list+= '<li>' + names[i] + '</li>';
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
};






















