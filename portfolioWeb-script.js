document.addEventListener('DOMContentLoaded', function() {
    const certificates = [
        'Programming for Everybody (Getting Started with Python) – University of Michigan',
        'Python Data Structures – University of Michigan',
        'Introduction to Generative AI – Google Cloud',
        'Crash course on Python – Google',
        'Introduction to Web Development – UC Davis',
        'Calculus through data and modelling: Series and integration – Johns Hopkins University',
        'Calculus through data and modelling: Techniques of integration – Johns Hopkins University',
        'Calculus through data and modelling: Integration Applications – Johns Hopkins University',
        'Calculus through data and modelling: Vector Calculus – Johns Hopkins University',
        'Understanding Einstein: Special theory of relativity – Stanford University',
        'Introduction to complex analysis – Wesleyan University',
        'Understanding Basic SQL Syntax – Coursera Project Network',
        'C++ Basics: Selection and Iteration – Codec',
        'Building a Text-based Bank – Coursera Project Network',
        'Create a Supermarket app using Java OOP – Coursera Project Network',
        'Python 101: Develop Your First Python Program – Coursera Project Network',
        'LOR by Duc Ta - CSC215',
        'LOR by Maitra Shah - Internship Certificate'
    ];

    const certificatesList = document.getElementById('certificates-list');
    const searchInput = document.getElementById('search-input');

    function displayCertificates(filteredCertificates) {
        certificatesList.innerHTML = ''; // Clear the list
        filteredCertificates.forEach(function(cert) {
            const listItem = document.createElement('li');
            listItem.textContent = cert;
            certificatesList.appendChild(listItem);
        });
    }

    function filterCertificates(event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredCertificates = certificates.filter(cert =>
            cert.toLowerCase().includes(searchTerm)
        );
        displayCertificates(filteredCertificates);
    }

    searchInput.addEventListener('input', filterCertificates);

    // Initial display
    displayCertificates(certificates);
});

let currMode = "light";
let secs = document.querySelectorAll("section");
let btns = document.querySelectorAll("button");
let header1 = document.querySelector("header");
let header = document.querySelector("h1")
let secHeader = document.querySelectorAll("h2")
let listItems = document.querySelectorAll('nav ul li a');

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (currMode == "light") {
            secs.forEach(sec => {
                sec.style.background = "#403434";
                sec.style.color = "#FFFFFF";
            });
            header1.style.background = "#403434FF";

            let icon = document.querySelectorAll("i");

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
