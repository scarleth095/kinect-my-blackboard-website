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

  var on = false;
  var wasClicked = false;

  function dynamodiv(on){
     if (on){
      changeColor("#82ACFF");
      
    } 
    else {
      changeColor("#E4E4E4");
    }
    //run code on div right
    //run code on div left

  }



$('#start').click(function() {
        if (!wasClicked) {
            wasClicked = true;
            return;
        }
        if ($(this).attr("src") == 'pause.png') {
            $(this).attr("src", 'start.png');
        } else {
            $(this).attr("src", 'pause.png');
        }
        on=!on;
   
        dynamodiv(on);
    });




 
   








});