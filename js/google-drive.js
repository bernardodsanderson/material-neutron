$(document).ready(function(){
  $('#split-button').on('click', function(){
    chrome.identity.getAuthToken({'interactive': true}, function(token){
      console.log(token, 'token');
    });
  });
});