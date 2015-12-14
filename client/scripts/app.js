// YOUR CODE HERE:

app={};
app.init = function(){};

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

app.fetch = function(message){
  $.ajax({
   // url: 'https://api.parse.com/1/classes/chatterbox', 
  type: 'GET',
  data: JSON.stringify(message),
  contentType: 'application/json',
    success: function (data){
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
  $('#chats').append($('<div>testing</div>'))
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

$('.refresh').on('Click', function(){
  
}


