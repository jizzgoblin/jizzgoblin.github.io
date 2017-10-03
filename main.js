var b = document.querySelectorAll(".b");

function r() {
	var r = Math.floor(Math.random() * 200)
  var g = Math.floor(Math.random() * 200)
	var b = Math.floor(Math.random() * 200)
  return "rgb("+r+", "+g+", "+b+")";
}

setInterval(function () {
  var color = r();
  b.forEach(function (e) {
    e.style.backgroundColor = color;
  })
}, 2000)
