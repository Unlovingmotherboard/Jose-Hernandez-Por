$(document).ready(function () {

  ScrollReveal().reveal('.projectTitle', { delay: 500 });
  ScrollReveal().reveal('#gitHubIcon', { delay: 800 });
  ScrollReveal().reveal('.projectDesc', { delay: 1200 });
  ScrollReveal().reveal('.imageDiv', { delay: 1500 });

  ScrollReveal().reveal('#aboutMeNameTitle', { delay: 500 });
  ScrollReveal().reveal('#aboutMeNameTitle', { delay: 800 });
  ScrollReveal().reveal('#aboutMeParagraph', { delay: 1000 });

  ScrollReveal().reveal('#linkdenIcon', { delay: 1000 });
  ScrollReveal().reveal('#githubIcon', { delay: 1200 });
  ScrollReveal().reveal('#emailIcon', { delay: 1300 });
  ScrollReveal().reveal('#resumeIcon', { delay: 1400 });


  var firebaseConfig = {
    apiKey: "AIzaSyCp4SRVYUy1bIhVReZFiQtPPMyuY-aejb0",
    authDomain: "myportfolio-analytics.firebaseapp.com",
    databaseURL: "https://myportfolio-analytics.firebaseio.com",
    projectId: "myportfolio-analytics",
    storageBucket: "",
    messagingSenderId: "1067841937772",
    appId: "1:1067841937772:web:e6ee9b6eae958f70"
  };

  firebase.initializeApp(firebaseConfig);


  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', 'UA-64399820-1');


  /*

  (function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  },
  i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  
  ga('create', 'UA-XXXXX-Y', 'auto', "TRACKING-ID");
  ga('send', 'pageview');

  $(".linkdenLink").on("click", function (event) {
    event.preventDefault();
    ga('send', 'event', {
      'hitCallback': function() {
        console.log("Hit Sent");
      }
    });
});

  
  ga(function() {
    // Logs the tracker created above to the console.
    var clientId = ga.getByName('TRACKING-ID').get('clientId');
    console.log(clientId);
  });
  
*/


  const fireBaseDatabase = firebase.database();
  var aboutMePicsIndex = 0;
  var LiriNodePicsIndex = 0;
  var AmazonIndex = 0;
  var aboutMePicsArray;
  var LiriPicsArray;
  var AmazonArray;
  aboutMePicsCarousel();
  liriNodePicsCarousel();
  AmazonPicsCarousel();

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
    aboutMePicsArray[aboutMePicsIndex - 1].style.display = "block";
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
    LiriPicsArray[LiriNodePicsIndex - 1].style.display = "block";
    setTimeout(liriNodePicsCarousel, 6000);
  }

  function AmazonPicsCarousel() {
    var r;
    AmazonArray = $(".Amazon-in-node");

    for (r = 0; r < AmazonArray.length; r++) {
      AmazonArray[r].style.display = "none";
    }

    AmazonIndex++;
    if (AmazonArray > AmazonArray.length) {
      AmazonArray = 1
    }
    AmazonArray[AmazonIndex - 1].style.display = "block";
    setTimeout(AmazonPicsCarousel, 6000);
  }

  $(document).on("click", "#theme1", function(){
    $('body').css("background-color", "rgb(255, 255, 255)");
    $('body').css("color", "rgb(110, 122, 147)");
    $("#titleScreen").css("background-image", 'url("images/whiteTheme/background2.gif")');
    $("#titleScreen").attr("id","titleScreen");
    $('#whatIveWorkedOn').css("border-top", "rgb(110, 122, 147)");
    $('#whatIveWorkedOn').css("border-bottom", "rgb(110, 122, 147)");
    $('#whatIveWorkedOn').css("background-color", "rgb(255, 255, 255)");
    $('.projects').css("background-color", "rgb(255, 255, 255)");
    $('#aboutmeInfo').css("background-color", "rgb(213, 213, 213)");
    $(".youTheReader").css("color", "rgb(252, 114, 51)");
    $("#resume").css("background-color", "rgb(150, 132, 141)");
    $("#email").css("background-color", "rgb(110, 122, 147)");
    $("#github").css("background-color", "rgb(213, 213, 213)");
    $("#linkden").css("background-color", "rgb(255, 255, 255)");
  });

  $(document).on("click", "#theme2", function(){
    $('body').css("background-color", "");
    $('body').css("color", "");
    $("#titleScreen").css("background-image", 'url("images/title-background3")');
    $('#whatIveWorkedOn').css("background-color", "");
    $('#whatIveWorkedOn').css("border-top", "");
    $('#whatIveWorkedOn').css("border-bottom", "");
    $('.projects').css("background-color", "");
    $('#aboutmeInfo').css("background-color", "");
    $(".youTheReader").css("color", "");
    $("#resume").css("background-color", "");
    $("#email").css("background-color", "");
    $("#github").css("background-color", "");
    $("#linkden").css("background-color", "");
  });

});