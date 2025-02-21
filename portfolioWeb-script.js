let currMode = "light";
let secs = document.querySelectorAll("section");
let btns = document.querySelectorAll("button");
let header1 = document.querySelector("header");
let header = document.querySelector("h1")
let secHeader = document.querySelectorAll("h2")
let listItems = document.querySelectorAll('nav ul li a');
let skillsItems = document.querySelectorAll('#skills ul li')
let certiItems = document.querySelectorAll('#certificates ul li')

// Get references to the mode toggle button and body
const modeButton = document.getElementById('mode');
const body = document.body;

// Check if the user has a previously saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

// Toggle dark mode when the button is clicked
modeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save the theme preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});


btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (currMode == "light") {
            secs.forEach(sec => {
                sec.style.background = "#403434";
                sec.style.color = "#FFFFFF";
            });
            header1.style.background = "#403434FF";

            let icon = document.querySelectorAll("i");

            skillsItems.forEach(skills=>{
                skills.style.color = "white";
            })

            certiItems.forEach(cert=>{
                cert.style.color = "white";
            })

            for (i of icon){
                i.style.color = "#FFFFFF";
            }

            header.style.color = "#dad1d1";
            for (heads of secHeader){
                heads.style.color = "#dad1d1";
            }

            listItems.forEach(item => {
                item.style.color = '#dad1d1';
            });

            currMode = "dark";
        } else {
            secs.forEach(sec => {
                sec.style.background = "white";
                sec.style.color = "black";
            });

            header1.style.background = "#dad1d1";

            let icon = document.querySelectorAll("i");

            skillsItems.forEach(skills => {
                skills.style.color = "black";
            })  

            certiItems.forEach(cert => {
                cert.style.color = "black";
            })

            for (i of icon){
                i.style.color = "black";
            }

            header.style.color = "#403434FF"
            for (heads of secHeader){
                heads.style.color = "#403434FF";
            }

            listItems.forEach(item => {
                item.style.color = '#403434FF';
            });

            currMode = "light";
        }
    });
});
