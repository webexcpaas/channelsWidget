$(document).ready(function () {
      imichatwidget.hide();
});

// Widget open action
$('#widgetHero').click(function() {
  $('#widgetMenu').toggle('fast');
  $('#widgetHeroClose').show();
  $('#widgetHero').hide();
  $('#contact').hide();
  $('#contactAlt').show();
});

// Widget close action
$('#widgetHeroClose').click(function() {
  $('#widgetHero').show();
  $('#widgetMenu').toggle('fast');
  $('#widgetHeroClose').hide();
  $('#contact').show();
  $('#contactAlt').hide();
});

// Show contact options
$('#chatOption').click(function() {
  $('#contactOptions').toggle();
});

// Contact button toggle toggle widget menu and hide web chat
$('#contact').click(function() {
  $('#widgetMenu').show('fast');
  $('#widgetHero').hide();
  $('#widgetHeroClose').show();
  imichatwidget.hide();
  $('#contact').hide();
  $('#contactAlt').show();
});

$('#contactAlt').click(function() {
  $('#widgetMenu').hide('fast');
  $('#widgetHero').show();
  $('#widgetHeroClose').hide();
  imichatwidget.hide();
  $('#contact').show();
  $('#contactAlt').hide();
});

document.getElementById("webChat").addEventListener("click", showChat)
function showChat(){
  imichatwidget.show();
  imichatwidget.maximizeWindow();
  $('#widgetMenu').hide();
  $('#widgetHero').hide();
  $('#widgetHeroClose').hide();
  $('#contact').show();
  $('#contactAlt').hide();
}

//$("#widgetHero").hide();