const createFooter = () => {
    const footerHTML = `
        &copy; 2025/2026 Computational Finance Club
    `;
    // Create a new footer element and insert the HTML
    const footerElement = document.createElement('footer');
    footerElement.innerHTML = footerHTML;    
    // Append the footer to the body
    document.body.appendChild(footerElement);
};

// Call the function to add the footer when the script loads
createFooter();
