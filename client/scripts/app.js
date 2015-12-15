// YOUR CODE HERE:
// app.init()

  // Parse.initialize(this)
var app={
  server:'https://api.parse.com/1/classes/chatterbox'
  // this.init()
};
// app.server = 'https://api.parse.com/1/classes/chatterbox'
app.init = function(){
  app.fetch()
};

app.send = function(message){
  $.ajax({
  url: 'https://api.parse.com/1/classes/chatterbox',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
    success: function (data){
      console.log('chatterbox: Message sent');
    },
  error: function (data){
    console.error('chatterbox: Failed to send message');
  }
})};

//The fetched data only exists within the function
app.fetch = function(messages){
  $.ajax({
   url: 'https://api.parse.com/1/classes/chatterbox', 
  type: 'GET',
  data: {},
  // contentType: 'application/json',
    success: function (data){
      console.log(data);
      console.log('chatterbox: Message fetched');
      for (var i=0; i<data.results.length; i++ ){
        app.addMessage(data.results[i]);
      }
    },
  error: function (data){
    console.error('chatterbox: Failed to fetch message');
  }
})};

app.clearMessages = function (){
  $('#chats').empty();
};

//Passed in argument is an object
app.addMessage = function (message){
  $message = $('<p class="chat"></p>');
  $username = $('<div class= "username"></div>');
  $username.append(message.username);
  //Grab the 'text' key's value from the message object
  $message.append(message.text);
  $username.append($message)
  $("#chats").append($username);
};

//Passed in argument is a string
app.addRoom = function (roomName){
 $newRoom = $('<div></div>');
 
 //Since the roomName is a string itself, no need to grab it out of the key
 $newRoom.append(roomName);
 $("#roomSelect").append($newRoom);
};

app.addFriend = function(name){
 console.log(name)
}

app.handleSubmit = function(){

};

var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};

$(document).ready(function(){
// If things break, wrap this inside
// dom ready jquery function
$('.refresh').on('click', function(event){
  event.preventDefault();
  app.clearMessages();
  app.fetch();
});





// STILL NEED to capture the data from the input

$('body').on('click', '.submit', function(event){
  event.preventDefault();
//  console.log(this[0],'value')
  //console.log('hello')
  console.log($(this));
  // app.handleSubmit();
})

$('body').on('click', '.username', function(event){
  event.preventDefault();
//  console.log(this[0],'value')
  //console.log('hello')
  app.addFriend($(this)[0].childNodes[0].data);
})
// LEFT OFF HERE!!!!!
// app.fetch();
// returns and array of objects
// iterate the fetched results( which are objects) and invoke addMessage on each one


app.init()



})















