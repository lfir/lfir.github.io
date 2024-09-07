'use strict';

// Set Copyright year in the Footer
document.getElementById('yearSpan').textContent = new Date().getFullYear();

document.getElementById('userCpBtn')?.addEventListener('click', function () {
    const textToCopy = document.getElementById('cpTxtA').textContent;
    
    navigator.clipboard.writeText(textToCopy).then(function() {
        const tooltip = document.getElementById('cpttip');
        // Show the tooltip when the button is clicked
        tooltip.style.visibility = 'visible';
        // Hide the tooltip when not hovering the button
        document.getElementById('userCpBtn').addEventListener('mouseleave', function () {
            tooltip.style.visibility = 'hidden';
        });
    })
});
