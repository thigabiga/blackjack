var myContainer = document.getElementById("container");


// B L U E  B O X
var blueBox = document.createElement("nav");
var title = document.createElement("h1");
var nodeTitle = document.createTextNode("HighOnCoding");
var headerLink = document.createElement("a");
var homeLink = document.createTextNode("Home");

blueBox.style.backgroundColor = "skyBlue";
blueBox.style.padding = "10px 20px";
blueBox.style.fontFamily = "Helvetica, sans serif";
blueBox.style.color = "white";
blueBox.style.width = "100%";
blueBox.style.marginBottom = "20px";

title.appendChild(nodeTitle);
headerLink.appendChild(homeLink);

blueBox.appendChild(title);
blueBox.appendChild(headerLink);
myContainer.appendChild(blueBox);



// G R A Y  B O X
var box1 = document.createElement("div");
var head1 = document.createElement("h2");
var node1 = document.createTextNode("Curse of the Current Reviews");
var par1 = document.createElement("p");
var node = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

box1.style.backgroundColor = "lightGray";
box1.style.padding = "10px 20px";
box1.style.fontFamily = "Helvetica, sans serif";
box1.style.color = "gray";
box1.style.width = "80%";
par1.style.fontSize = "12px";
box1.style.margin = "auto";

head1.append(node1);
par1.appendChild(node);

box1.appendChild(head1);
box1.appendChild(par1);
myContainer.appendChild(box1);


// M O R E  B O X E S
var box2 = document.createElement("div");
var head2 = document.createElement("h3");
var node2 = document.createTextNode("Hello WatchKit");
var par2 = document.createElement("p");
var node3 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

box2.style.backgroundColor = "white";
box2.style.padding = "10px 20px";
box2.style.fontFamily = "Helvetica, sans serif";
head2.style.color = "blue";
box2.style.width = "80%";
par2.style.fontSize = "12px";
box2.style.margin = "auto";

head2.append(node2);
par2.appendChild(node3);

box2.appendChild(head2);
box2.appendChild(par2);
myContainer.appendChild(box2);



var box3 = document.createElement("div");
var div2 = document.createElement("div");
var node4 = document.createTextNode("12 Comments");
var div3 = document.createElement("div");
var node5 = document.createTextNode("124 Likes");

box3.style.backgroundColor = "orange";
box3.style.padding = "5px";
box3.style.fontFamily = "Helvetica, sans serif";
box3.style.color = "white";
box3.style.width = "80%";
box3.style.fontSize = "12px";
box3.style.margin = "auto";

div2.append(node4);
div3.appendChild(node5);

box3.appendChild(div2);
box3.appendChild(div3);
myContainer.appendChild(box3);