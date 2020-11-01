  window.addEventListener("mousemove", moved);
  var trails = [];

  var i = 0;

  function moved(event) {
    let trail = document.createElement("div");
    trail.className = "trail";
    trail.style.left = (event.pageX - 4) + "px";
    trail.style.top = (event.pageY + 4) + "px";
    trails = document.getElementsByClassName("trail");
    document.body.appendChild(trail);
    i++;
    if(trails[100] != null ){
        trails.shift;
        document.body.removeChild(trails[0]);
    }
    
    }
  

