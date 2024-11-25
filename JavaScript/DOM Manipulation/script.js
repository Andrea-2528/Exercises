  ///////////////////////////////////////////////////////////////
 //////////////           Exercises              ///////////////
///////////////////////////////////////////////////////////////

//// Elements Manipulation ////

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

///////////////////////////////////////////////////////////////

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!"

container.appendChild(paragraph);

//////////////////////////////////////////////////////////////

const header = document.createElement("h3");
header.style.color = "blue";
header.textContent = "I'm a blue h3!";

container.appendChild(header);

//////////////////////////////////////////////////////////////

const div = document.createElement("div");
div.setAttribute("style", "border: 2px solid black; background-color: pink;");

const divHeader = document.createElement("h1");
divHeader.textContent = "I'm in a div";

const divParagraph = document.createElement("p");
divParagraph.textContent = "ME TOO!";

div.appendChild(divHeader);
div.appendChild(divParagraph);

container.appendChild(div);

//////////////////////////////////////////////////////////////

//// Events Manipulation ////

const btn1 = document.querySelector("#btn1");
btn1.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");                   //Preferred method
btn2.addEventListener("click", () => alert("Hello World"));

//For every instance of "() => ()" there could instead be a reference to a function previously defined 

//// Accessing Information ////

btn2.addEventListener("click", function (e) {
    console.log(e.target);
  });

btn2.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

//// Attaching listeners to group of nodes: ////

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
  