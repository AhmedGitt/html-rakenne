const runko = document.getElementsByTagName("body")[0];
const osa = document.createElement("div");
runko.appendChild(osa);
osa.setAttribute("id", "div");

const peeyks = document.createElement("p");
osa.setAttribute("id", "p");
const text1 = document.createTextNode("Tämä on ekan kappelen teskti");
peeyks.appendChild(text1);
osa.appendChild(peeyks);

const peekaks = document.createElement("p2");
osa.setAttribute("id", "p2");
const text2 = document.createTextNode("Tämä on toka kappalen teksti");
peekaks.appendChild(text2);
osa.appendChild(peekaks);



