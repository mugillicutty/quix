/**
 * Created by joshuawarnock on 9/16/15.
 */

var TheSearchInput = document.getElementById('searchinput');
var TheSearchButton = document.getElementById('thesearchbutton');
var SearchReturn = document.getElementById('mtsearchdiv');

function SubmitSearch() {
  console.log(SearchFormData());
  var SearchClicked = new XMLHttpRequest();
  SearchClicked.open('POST','/form',true);
  SearchClicked.setRequestHeader('Content-type','application/json');
  SearchClicked.send(SearchFormData());
  SearchClicked.addEventListener('load',function(){
    console.log(SearchClicked.responsiveText);
  });
}

var xhr = new XMLHttpRequest();
xhr.onload = function(){
  if (xhr..status === 200){
    responseObject = JSON.parse(xhr.responseText);
    var SearchResults =
  }
};
/*
function PostedResults(){
var SearchResults = new XMLHttpRequest();
  SearchResults.open('GET', '/api', true);
  SearchResults.setRequestHeader("Content-type", "application/json");
  SearchResults.send();
  SearchResults.addEventListener('onload', function(){
    console.log(SearchResults.responseText);
  });
}
*/
function SearchFormData(){
  var SearchFormData = new Object();
  SearchFormData.searchinput = document.forms[1].elements.searchinput.value;
  return JSON.stringify(SearchFormData);
}
function CheckSearchInput(TheSearchInput){
  if (TheSearchInput == 'search'){
    Message.textContent = 'You can do it!';
  } else {
    Message.textContent = 'Sorry';
  }
}
TheSearchInput.addEventListener('blur', function () {
  var UserSearchInput = document.getElementById('searchinput');
  CheckSearchInput(UserSearchInput.value);
},false);
TheSearchButton.addEventListener('click',function(e){
  e.preventDefault();
  var UserSearchClick = document.getElementById('thesearchbutton');
  SubmitSearch(TheSearchInput.value);
},false);









//
//// Sign In Form
//var emailInput = document.getElementById('emailinput');
//var passwordInput = document.getElementById('passwordinput');
//function checkEmail(usernameInput){
//  var mssG = document.getElementById('empty-username-div');
//  if (usernameInput == 'bond'){
//    mssG.textContent = "Username Ok";
//  } else {
//    mssG.textContent = "Username Bad";
//  }
//}
//function checkPassword(passwordInput){
//  var mssG = document.getElementById('empty-password-div');
//  if (passwordInput == 'secret'){
//    mssG.textContent = "Password Ok.";
//  } else {
//    mssG.textContent = "Password Bad";
//  }
//}
//function submitSigninform(event) {
//  event.preventDefault();
//  console.log(formData());
//  var whenClicked = new XMLHttpRequest();
//  whenClicked.open("POST", "/form", true);
//  whenClicked.setRequestHeader("Content-type", "application/json");
//  whenClicked.send(formData());
//  whenClicked.addEventListener('load', function(){
//    console.log(whenClicked.responseText);
//  });
//}
//function formData() {
//  var formData = new Object();
//  formData.emailInput = document.forms[0].elements.emailInput.value;
//  formData.passwordInput = document.forms[0].elements.passwordInput.value;
//  return JSON.stringify(formData);
//}
//emailInput.addEventListener('blur', function(){
//  var userEmail = document.getElementById('emailinput');
//  checkEmail(userEmail.value);
//}, false);
//passwordInput.addEventListener('blur', function(){
//  var userPassword = document.getElementById('passwordinput');
//  checkPassword(userPassword.value);
//}, false);
//
//thesigninbutton.addEventListener('click', function(e){
//  e.preventDefault();
//  var userClick = document.getElementById('thesigninbutton');
//  submitSigninform( emailInput.value, passwordInput.value);
//}, false);
//
//thesigninbutton.addEventListener('click', submitSigninform, false);
//
//
//
//
//(function() {
//  var cx = '011075513619769460761:ryuippg5eoy';
//  var gcse = document.createElement('script');
//  gcse.type = 'text/javascript';
//  gcse.async = true;
//  gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
//      '//cse.google.com/cse.js?cx=' + cx;
//  var s = document.getElementsByTagName('script')[0];
//  s.parentNode.insertBefore(gcse, s);
//})();



