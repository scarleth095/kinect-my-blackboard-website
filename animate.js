$(document).ready( function() {

  function downloadInnerHtml(filename, elId, mimeType) {
    var elHtml = document.getElementById(elId).textContent;
    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';

    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click(); 
  }

  var fileName =  'content.txt'; 

  $('#downloadLink').click(function(){
    
    downloadInnerHtml(fileName, 'main','text/html');
  });





   function clearme(elId) {
    var text = document.getElementById(elId);
    text.innerHTML=" ";
  }


  $('#clear').click(function(){
    clearme('main');

  });



function changeColor(colors){
  var myElement = document.querySelector(".chalkfont");
  myElement.style.color = colors;

}
$('#base').click(function(){
    changeColor("#FCFEE3");

});

$('#pink').click(function(){
    changeColor("#FFC3FF");

});

$('#blue').click(function(){
    changeColor("#82ACFF");

});
$('#green').click(function(){
    changeColor("#ADFFAD");

});
$('#gray').click(function(){
    changeColor("#E4E4E4");

});



});