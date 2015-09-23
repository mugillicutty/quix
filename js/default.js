/**
 * Created by joshuawarnock on 9/15/15.
 */

// external js
// http://packery.metafizzy.co/packery.pkgd.js
// http://draggabilly.desandro.com/draggabilly.pkgd.js

// Packery setup------------------------------------------------------------------|
$( function() {
  var $container = $('.packery').packery({
    columnWidth: 20,
    rowHeight: 20
  });
  $container.find('.item').each( function( i, itemElem ) {
    // make element draggable with Draggabilly
    var draggie = new Draggabilly( itemElem );
    // bind Draggabilly events to Packery
    $container.packery( 'bindDraggabillyEvents', draggie );
  });
});
// Tile Expand Fit
$( function() {
  var $container = $('.packery').packery();
  $container.on( 'dblclick', '.item', function( event ) {
    var $target = $( event.target );
    var isGigante = $target.hasClass('gigante');
    $target.toggleClass('gigante');
    if ( isGigante ) {
      // if shrinking, just layout
      $container.packery();
    } else {
      $container.packery( 'fit', event.target );
    }
  });
});
// Packery setup------------------------------------------------------------------|
// Tile Hide/Show-------------------------------------------|
var grabbedList = document.getElementById('nav-list');
grabbedList.addEventListener('click', function(theEvent){
  var content = theEvent.target.getAttribute('data-content');
  checkTheclick(content);
},false);
function checkTheclick(contentId){
  var section = document.getElementById(contentId);
  var elStyle = window.getComputedStyle(section).getPropertyValue('display');
  console.log(elStyle);
  if (elStyle == 'block') {
    section.style.display = 'none';
  } else if (elStyle == 'none' || section.style.display == '') {
    section.style.display = 'block';
  }
}
// Tile Hide/Show-------------------------------------------|
// Account Hide/Show-----------------------------|
var AccountTile = document.getElementById('account-tile');
AccountTile.addEventListener('dblclick', function(theEvent){
  var content = theEvent.target.getAttribute('data-content');
  AccountShow(content);
},false);
function AccountShow(contentId){
  var section = document.getElementById(contentId);
  if (section.style.display == 'block') {
    section.style.display = 'none';
  } else if (section.style.display == 'none' || section.style.display == '') {
    section.style.display = 'block';
  }
}
// Account Hide/Show-----------------------------|
var ProfileButton = document.getElementById('profile-button');
var VehicleButton = document.getElementById('vehicle-button');
var ProjectsButton = document.getElementById('projects-button');
var FriendsButton = document.getElementById('friends-button');
var PhotosButton = document.getElementById('photos-button');

function ShowProfile(contentId){
  var section = document.getElementById(contentId);
  if (section.style.display == 'block') {
    section.style.display = 'none';
  } else if (section.style.display == 'none' || section.style.display == '') {
    section.style.display = 'block';
  }
}
function ShowVehicle(contentId){
  var section = document.getElementById(contentId);
  if (section.style.display == 'block') {
    section.style.display = 'none';
  } else if (section.style.display == 'none' || section.style.display == '') {
    section.style.display = 'block';
  }
}
function ShowProjects(contentId){
  var section = document.getElementById(contentId);
  if (section.style.display == 'block') {
    section.style.display = 'none';
  } else if (section.style.display == 'none' || section.style.display == '') {
    section.style.display = 'block';
  }
}
function ShowFriends(contentId){
  var section = document.getElementById(contentId);
  if (section.style.display == 'block') {
    section.style.display = 'none';
  } else if (section.style.display == 'none' || section.style.display == '') {
    section.style.display = 'block';
  }
}
function ShowPhotos(contentId){
  var section = document.getElementById(contentId);
  if (section.style.display == 'block') {
    section.style.display = 'none';
  } else if (section.style.display == 'none' || section.style.display == '') {
    section.style.display = 'block';
  }
}
ProfileButton.addEventListener('click', function(event){
  var content = event.target.getAttribute('data-content');
  ShowProfile(content);
},false);
VehicleButton.addEventListener('click', function(event){
  var content = event.target.getAttribute('data-content');
  ShowVehicle(content);
},false);
ProjectsButton.addEventListener('click', function(event){
  var content = event.target.getAttribute('data-content');
  ShowProjects(content);
},false);
FriendsButton.addEventListener('click', function(event){
  var content = event.target.getAttribute('data-content');
  ShowFriends(content);
},false);
PhotosButton.addEventListener('click', function(event){
  var content = event.target.getAttribute('data-content');
  ShowPhotos(content);
},false);

//$("#profile-button").click(function () {
//  $("profile-tab").show("slow");
//
//  $("vehicles-tab").hide("slow");
//  $("projects-tab").hide("slow");
//  $("friends-tab").hide("slow");
//  $("photos-tab").hide("slow");
//});
//$("#vehicles-button").click(function () {
//  $("vehicles-tab").show("slow");
//
//  $("profile-tab").hide("slow");
//  $("projects-tab").hide("slow");
//  $("friends-tab").hide("slow");
//  $("photos-tab").hide("slow");
//});
//$("#projects-button").click(function () {
//  $("projects-tab").show("slow");
//
//  $("profile-tab").hide("slow");
//  $("vehicles-tab").hide("slow");
//  $("friends-tab").hide("slow");
//  $("photos-tab").hide("slow");
//});
//$("#friends-button").click(function () {
//  $("friends-tab").show("slow");
//
//  $("profile-tab").hide("slow");
//  $("vehicles-tab").hide("slow");
//  $("projects-tab").hide("slow");
//  $("photos-tab").hide("slow");
//});
//$("#photos-button").click(function () {
//  $("photos-tab").show("slow");
//
//  $("profile-tab").hide("slow");
//  $("vehicles-tab").hide("slow");
//  $("projects-tab").hide("slow");
//  $("friends-tab").hide("slow");
//});
// Vehicle Selector Hide/Show-----------------------------|
var VehicleTile = document.getElementById('vehicle-tile');
VehicleTile.addEventListener('dblclick', function(theEvent){
  var content = theEvent.target.getAttribute('data-content');
  SelectorShow(content);
},false);
function SelectorShow(contentId){
  var section = document.getElementById(contentId);
  if (section.style.display == 'block') {
    section.style.display = 'none';
  } else if (section.style.display == 'none' || section.style.display == '') {
    section.style.display = 'block';
  }
}
// Vehicle Selector Hide/Show-----------------------------|
// Vehicle Selector Display Selection--------------------------------------|
var VehicleSubmitButton = document.getElementById('vehicle-submit-button');
var VehicleCancelButton = document.getElementById('vehicle-cancel-button');

function VehicleSelection(){
  var VehicleDisplay = document.getElementById('vehicle-selection');
  var VehicleYear = document.getElementById('year');
  var VehicleMake = document.getElementById('make');
  var VehicleModel = document.getElementById('model');
  var VehicleEdition = document.getElementById('edition');
  var VehicleEngine = document.getElementById('engine');
  VehicleDisplay.textContent = 'Current Vehicle: ' + VehicleYear.value + ' ' + VehicleMake.value + ' ' + VehicleModel.value + ' ' + VehicleEdition.value + ' ' + VehicleEngine.value;
}
//function VehicleSelectionCancel(){
//  var VehicleTile = document.getElementById('vehicle-tile');
//  VehicleTile.className = 'item w3 h3';
//}
VehicleSubmitButton.addEventListener('click', function(event){
  var content = event.target.getAttribute('data-content');
  event.preventDefault();
  VehicleSelection(content);
},false);
//VehicleCancelButton.addEventListener('click', function(event){
//  event.preventDefault();
//  VehicleSelectionCancel()
//},false);
// Vehicle Selector Display Selection--------------------------------------|




// Breadcrumb Selector ------------------------------------------|
// Year breadcrumb selector
$('#year').change( function(){
  var element = document.getElementById('year');
  var selectedYear = element.options[element.selectedIndex].text;
  var yearCrumb = document.getElementById('year-crumb');
  yearCrumb.text = selectedYear;
});

// Make breadcrumb selector
$('#make').change( function(){
  var element = document.getElementById('make');
  var selectedMake = element.options[element.selectedIndex].text;
  var makeCrumb = document.getElementById('make-crumb');
  makeCrumb.text = selectedMake;
});

// Model breadcrumb selector
$('#model').change( function(){
  var element = document.getElementById('model');
  var selectedModel = element.options[element.selectedIndex].text;
  var modelCrumb = document.getElementById('model-crumb');
  modelCrumb.text = selectedModel;
});

// Edition breadcrumb selector
$('#edition').change( function(){
  var element = document.getElementById('edition');
  var selectedEdition = element.options[element.selectedIndex].text;
  var editionCrumb = document.getElementById('edition-crumb');
  editionCrumb.text = selectedEdition;
});
// Engine breadcrumb selector
$('#engine').change( function(){
  var element = document.getElementById('engine');
  var selectedEdition = element.options[element.selectedIndex].text;
  var editionCrumb = document.getElementById('engine-crumb');
  editionCrumb.text = selectedEdition;
});
//// Model breadcrumb selector
//$('#front-elec').change( function(){
//  var element = document.getElementById('front-elec');
//  var selectedFront = element.options[element.selectedIndex].text;
//  var frontCrumb = document.getElementById('first-crumb');
//  frontCrumb.text = selectedFront;
//});

// Search Tile Expand and Listener-------------------------------|
var TheSearchButton = document.getElementById('thesearchbutton');
function ResultResize(){
  var ResultBox = document.getElementById('search-tile');
  ResultBox.style.height = '1500px';
  ResultBox.style.width = '100%';
}
TheSearchButton.addEventListener('click',function(e){
  e.preventDefault();
  var UserSearchClick = document.getElementById('return1title');
  ResultResize(TheSearchInput.value);
},false);
// Search Tile Expand and Listener-------------------------------|



//$(document).ready(function() {
//  $('#carousel-tile').carousel({
//    interval:   1000
//  });
//});

//// Carousel touch slider
//$(document).ready(function() {
//  $("#carousel-tile").swiperight(function() {
//    $(this).carousel('prev');
//  });
//  $("#carousel-tile").swipeleft(function() {
//    $(this).carousel('next');
//  });
//});


