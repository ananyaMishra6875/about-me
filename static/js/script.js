function showContent(sectionId) {
    // content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // display chosen content section
    document.getElementById(sectionId).style.display = 'block';
}

// display home page as default section
showContent('home');