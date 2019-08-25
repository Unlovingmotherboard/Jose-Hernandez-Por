$(document).ready(function () {

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
  function gtag(){dataLayer.push(arguments);}
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
});