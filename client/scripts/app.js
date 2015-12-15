// YOUR CODE HERE:
// app.init()

  // Parse.initialize(this)
var app={
  server:'https://api.parse.com/1/classes/chatterbox'
  // this.init()
};
// app.server = 'https://api.parse.com/1/classes/chatterbox'
app.init = function(){
  // this.fetch()
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

app.fetch = function(messages){
  $.ajax({
   url: 'https://api.parse.com/1/classes/chatterbox', 
  type: 'GET',
  data: {},
  // contentType: 'application/json',
    success: function (data){
      console.log(data);
      console.log('chatterbox: Message fetched');
    },
  error: function (data){
    console.error('chatterbox: Failed to fetch message');
  }
})};

app.clearMessages = function (){
  // $.ajax({
  //  type: 'DELETE',
  //  contentType: 'application/json',
  //  success: function(){
  $('#chats').empty()

    //} 
  //})
};

//Passed in argument is an object
app.addMessage = function (message){
  $message = $('<div class="chat"></div>');

  //Grab the 'text' key's value from the message object
  $message.append(message.text);
  $("#chats").append($message)
};

//Passed in argument is a string
app.addRoom = function (roomName){
 $newRoom = $('<div></div>');
 
 //Since the roomName is a string itself, no need to grab it out of the key
 $newRoom.append(roomName);
 $("#roomSelect").append($newRoom);
};

app.addFriend = function(){

}

var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};


$('.refresh').on('click', function(){
  app.clearMessages()

});


// LEFT OFF HERE!!!!!
var objFetched = app.fetch();
// returns and array of objects
console.log(objFetched)
// iterate the fetched results( which are objects) and invoke addMessage on each one
for (var i=0; i<objFetched.results.length; i++ ){
  app.addMessage(objFetched.results[i]);
}





















