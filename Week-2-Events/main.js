var size = 16;
var baloon = document.getElementById('baloon');

window.onload = function()
    {
        window.addEventListener('keydown', event);
        
    }

//var event = (event) => {
    event = (bt) =>  {
        
    baloon.style.fontSize = size + 'px';
    if (bt.key == "ArrowUp") {
        bt.preventDefault();
        if(size > 50){
            baloon.innerHTML = "💥"
            window.removeEventListener("keydown", event);
        }
        else {size = size * 1.1;
            baloon.style.fontSize = size + 'px';
        }     
    }
    if (bt.key == "ArrowDown") {
        bt.preventDefault();
        size = size * 0.9;
        baloon.style.fontSize = size + 'px';
      }

  };

  //window.addEventListener("keydown", event);

  