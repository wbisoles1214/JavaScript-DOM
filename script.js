const body = document.querySelector("body");

const containerDiv = document.createElement("div");
containerDiv.id = "container";

const contentDiv = document.createElement("div");
contentDiv.className = "content";
contentDiv.textContent = "This is the glorious text-content!";
containerDiv.appendChild(contentDiv);

const redTextP = document.createElement("p");
redTextP.style.color = "red";
redTextP.textContent = "Hey I'm red!";
containerDiv.appendChild(redTextP);

const blueTextH3 = document.createElement("h3");
blueTextH3.style.color = "blue";
blueTextH3.textContent = "I'm a blue h3!";
containerDiv.appendChild(blueTextH3);

const blackBorderPinkBgDiv = document.createElement("div");
blackBorderPinkBgDiv.style.border = "1px solid black";
blackBorderPinkBgDiv.style.backgroundColor = "pink";

const h1InDiv = document.createElement("h1");
h1InDiv.textContent = "I'm in a div";
blackBorderPinkBgDiv.appendChild(h1InDiv);

const pInDiv = document.createElement("p");
pInDiv.textContent = "ME TOO!";
blackBorderPinkBgDiv.appendChild(pInDiv);

containerDiv.appendChild(blackBorderPinkBgDiv);

document.body.appendChild(containerDiv);
