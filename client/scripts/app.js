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

