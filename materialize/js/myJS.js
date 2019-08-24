$(document).ready(function () {

var aboutMePicsIndex = 0;
var LiriNodePicsIndex = 0;
var aboutMePicsArray;
var LiriPicsArray;
aboutMePicsCarousel();
liriNodePicsCarousel();

function aboutMePicsCarousel() {
  var i;
  aboutMePicsArray = $(".aboutMePics");
  
  for (i = 0; i < aboutMePicsArray.length; i++) {
    aboutMePicsArray[i].style.display = "none";  
  }

  aboutMePicsIndex++;
  if (aboutMePicsIndex > aboutMePicsArray.length) {
    aboutMePicsIndex = 1
  }    
  aboutMePicsArray[aboutMePicsIndex-1].style.display = "block";  
  setTimeout(aboutMePicsCarousel, 4000);    
}

function liriNodePicsCarousel() {
  var j;
  LiriPicsArray = $(".liriNodePics");
  
  for (j = 0; j < LiriPicsArray.length; j++) {
    LiriPicsArray[j].style.display = "none";  
  }

  LiriNodePicsIndex++;
  if (LiriNodePicsIndex > LiriPicsArray.length) {
    LiriNodePicsIndex = 1
  }    
  LiriPicsArray[LiriNodePicsIndex-1].style.display = "block";  
  setTimeout(liriNodePicsCarousel, 6000);    
}
});