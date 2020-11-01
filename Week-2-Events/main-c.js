function asTabs(node) {
    // Your code here.
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var tab_panel = document.querySelector("tab-panel");

    var div1 = document.querySelector("div[data-tabname='one']");
    button1.innerHTML = div1.getAttribute("data-tabname");
    tab_panel.appendChild(button1);
    
    var div2 = document.querySelector("div[data-tabname='two']");
    button2.innerHTML = div2.getAttribute("data-tabname");
    tab_panel.appendChild(button2);

    var div3 = document.querySelector("div[data-tabname='three']");
    button3.innerHTML = div3.getAttribute("data-tabname");
    tab_panel.appendChild(button3);

    button1.style = "background-color: purple";
    button2.style = "background-color: grey";
    button3.style = "background-color: grey";
    div1.style = "display: block";
    div2.style = "display: none";
    div3.style = "display: none";

    function b1(){
      button1.style = "background-color: purple";
      button2.style = "background-color: grey";
      button3.style = "background-color: grey";
      div1.style = "display: block";
      div2.style = "display: none";
      div3.style = "display: none";
    }

    function b2(){
      button2.style = "background-color: purple";
      button1.style = "background-color: grey";
      button3.style = "background-color: grey";
      div1.style = "display: none";
      div2.style = "display: block";
      div3.style = "display: none";
    }

    function b3(){
      button3.style = "background-color: purple";
      button2.style = "background-color: grey";
      button1.style = "background-color: grey";
      div1.style = "display: none";
      div2.style = "display: none";
      div3.style = "display: block";
    }

    button1.addEventListener("click", b1);
    button2.addEventListener("click", b2);
    button3.addEventListener("click", b3);
  }
  asTabs(document.querySelector("tab-panel"));