$(document).ready(function () {

var myIndex = 0;
aboutMePicsCarousel();
liriNodePicsCarousel();

function aboutMePicsCarousel() {
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
  setTimeout(aboutMePicsCarousel, 4000);    
}

function liriNodePicsCarousel() {
  var i;
  var x = $(".liriNodePics");
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
  setTimeout(liriNodePicsCarousel, 6000);    
}
});