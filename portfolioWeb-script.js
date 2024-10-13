document.addEventListener('DOMContentLoaded', function() {
    const certificates = [
        'Data Science Certificate',
        'Full-Stack Web Development Certificate',
        'Machine Learning Certificate',
        'Python Programming Certificate'
    ];

    const certificatesList = document.getElementById('certificates-list');

    certificates.forEach(certificate => {
        let li = document.createElement('li');
        li.textContent = certificate;
        certificatesList.appendChild(li);
    });
});
