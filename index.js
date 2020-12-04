//new window for linkedin and github.
var gits = document.querySelector(".msg")
gits.onclick = function () {
  alert("This action will Open GitHub")
}
var linkes = document.querySelector(".msg1")
linkes.onclick = function () {
  alert("This action will Open Linkedin")
}
//typewriter effect on name
var i =0;
var txt = "I am Jose Ciudad, a Fullstack developer";
var speed = 90;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("jcr").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload(typeWriter());
