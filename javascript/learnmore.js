function leermas() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btn.innerHTML = "Read more";
      more.style.display = "none";
    } else {
      dots.style.display = "none";
      btn.innerHTML = "Read less";
      more.style.display = "inline";
    }
  }