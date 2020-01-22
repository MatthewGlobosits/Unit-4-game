$(document).ready(function(){

var winningNum = Math.floor(Math.random() * 120) ;


var img1 = Math.floor(Math.random() * 12);
var img2 = Math.floor(Math.random() * 12);
var img3 = Math.floor(Math.random() * 12);
var img4 = Math.floor(Math.random() * 12);


var totalScore = 0; 
var wins = 0;
var losses = 0;

$('.wins').text(wins);
$('.losses').text(losses);
$('.totalScore').text(totalScore);

function reset(){
    random = Math.floor(Math.random() * 120);
    console.log(random)
    $('.points-needed').text(random);
    
}

});