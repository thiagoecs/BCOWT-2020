// Put code of task B here

originalArticle = document.getElementById("originalArticle"); 

var newArticle = document.createElement("article");
newArticle.innerHTML += originalArticle.innerHTML;

parent = document.getElementById("main"); 
parent.appendChild(newArticle);