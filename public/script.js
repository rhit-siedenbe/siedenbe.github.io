window.addEventListener("load", (e) => {
let nav = document.createElement("nav");
let footer = document.createElement("footer");
nav.style.backgroundColor = "#800000";
nav.style.padding="10px 20px";

let ul = document.createElement("ul");
let links = [
    {name: "Home", href: "index.html"},
    {name: "Resume", href: "resume.html"},
    {name: "Portfolio", href: "portfolio.html"}
];

for (let link of links) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = link.name;
    a.href = link.href;
    a.className = "nav-link";

    li.append(a);
    ul.append(li);
}
nav.append(ul);

let toggleButton = document.createElement("button");
toggleButton.id = "theme-toggle";
toggleButton.textContent = "Toggle Dark Mode";
toggleButton.style.marginLeft = "20px";
nav.append(toggleButton);


document.body.prepend(nav);
document.body.style.paddingTop = "60px";

let handshakeLink = document.createElement("a");
handshakeLink.href = "https://app.joinhandshake.com/profiles/uqbm37";
handshakeLink.textContent = "Handshake Profile";
handshakeLink.style.color = "aqua";  
handshakeLink.className = "nav-link";
footer.append(handshakeLink);
document.body.append(footer);

toggleButton.addEventListener("click", (e) => {
    document.body.classList.toggle("dark-mode");
})

});