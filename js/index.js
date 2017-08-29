var a = document.getElementsByClassName("nav__link");

function permalink(x) {
  var links = [".about", ".work", ".contact"];
  for (var i = 0; i < x.length; i++) {
    x[i].href = links[i];
  }
}

permalink(a);
