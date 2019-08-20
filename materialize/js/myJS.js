$(document).ready(function () {

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = $(".aboutMePics");
  console.log(x);
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
    console.log("Reseting To First Pic")
  }    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
  console.log(myIndex);
}
});