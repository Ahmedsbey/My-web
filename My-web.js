// for upper scroll....
document.querySelector('.uprbtn').addEventListener('click', () => {
    window.scrollTo(0, 0)
})
// scroll bar....
window.onscroll = () => {
    var html = document.documentElement;
    let scrollTop = html.scrollTop;
    let height = html.scrollHeight - html.clientHeight;
    var unit = (scrollTop / height) * 100;
    document.querySelector('#scrollbar').style.width = `${unit}%`
    console.log(unit);
    // for upper scroll button
    if (unit <= 51.17876468274297) {
        uperbtn = document.querySelector('.uprbtn').style.opacity = 0;
    } else if (unit >= 51.17876468274297 && unit <= 99.99033585442847) {
        document.querySelector('.uprbtn').style.opacity = 1;
    } else if (unit >= 99.99033585442847) {
        document.querySelector('.uprbtn').style.opacity = 0;
    }
}
// ajax....
function loadwatch() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.container').innerHTML = this.responseText;
        }
    }
    xhttp.open('GET', "watch.html", true);
    xhttp.send();
}
function loadshoe() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.container').innerHTML = this.responseText;
        }
    }
    xhttp.open('GET', "shoe.html", true);
    xhttp.send();
}
document.querySelector(".Hamburger").addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('menuresp');
    document.querySelector('.Hamburger').classList.toggle('closebtn');
})
// Category toggle menu....
function categ() {
    document.querySelector('.Category').classList.toggle('Categ');
}
// Alert massage....
window.onload = conf()
function conf() {
    var alertMsg = "You want buy any product plz contact us";
    setTimeout(() => { confirm(alertMsg); }, 8000);
}

// Image-slider
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides,3000); // Change image every 2 seconds
}