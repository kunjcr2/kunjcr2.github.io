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
        'Python 101: Develop Your First Python Program – Coursera Project Network'
    ];

    const certificatesList = document.getElementById('certificates-list');

    certificates.forEach(function(cert) {
        const listItem = document.createElement('li');
        listItem.textContent = cert;
        certificatesList.appendChild(listItem);
    });
});
