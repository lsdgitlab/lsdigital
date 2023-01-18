

 // youtube video popup
 var videoButtons = document.getElementsByClassName("video-button");
 var popup = document.getElementById('popup-wrapper');
 for (var i = 0; i < videoButtons.length; i++) {
     videoButtons[i].addEventListener("click", function () {
         var videoId = this.getAttribute("data-video-id");
         var videoPopup = document.getElementById("video-popup");

         videoPopup.innerHTML = '<iframe width="100%" height="360" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
         popup.classList.add('show');


     });
 }
 var clsbtn = document.getElementById("close");
 clsbtn.onclick = function () {
     popup.classList.remove('show');
 }

 window.onclick = function (event) {
     if (event.target == popup) {
         popup.classList.remove('show');
     }
 }
 // youtube video popup end

 var player,
 card = document.querySelector('.card'),
 video = document.querySelector('.card-video');


// Shine effect
card.onmousemove = function (e) {

 const x = e.pageX - card.offsetLeft;
 const y = e.pageY - card.offsetTop;

 card.style.setProperty('--x', x + 'px');
 card.style.setProperty('--y', y + 'px');
}
// window.onload = function () {
//  var imgs = document.querySelectorAll(".card-video img");
//  var divs = document.querySelectorAll(".card");
//  for (var i = 0; i < imgs.length; i++) {
//     //  console.log(divs[i]);
//      divs[i].style.backgroundImage = "url(" + imgs[i].src + ")";
//  }

// }

