//rainbow_superheroes.js

function hide(activeNav)
{
    //first hide all the articles
    $("article").show();

    //then show the one we want to see
    //$("#main article").show()
    $("#" + activeNav +"article").hide();
}

function toggle(activeNav) 
{
        $("#").show();
        $("#" + activeNav).toggle();// body...
}

$(function () {
  $('[data-toggle="popover"]').popover()
})

$('body').scrollspy({ target: '#navbar-example' })

$('#redbody').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('#redbody[href="#redbody"]').tab('show')

$('#orangebody').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('#orangebody[href="#orangebody"]').tab('show')
$('#yellowbody[href="#yellowbody"]').tab('show')
$('#greenbody[href="#greenbody"]').tab('show')
$('#bluebody[href="#bluebody"]').tab('show')
$('#violetbody[href="#violetbody"]').tab('show')
$('#whitebody[href="#whitebody"]').tab('show')


$( document ).ready(function() {
    $('#red a[href="#red"]').tab('show') // Select tab by name
    $('#orange a[href="#orange"]').tab('show')
});