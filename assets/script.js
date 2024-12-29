//JavaScript for hover animation
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    // Function to remove 'active' class from all nav items
    function resetActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove("active"); // Remove 'active' class
            link.style.color = ""; // Reset text color
            link.style.transform = "scale(1)"; // Reset scale size
        });
    }

    // Function to add 'active' class to the currently active link
    function setActiveClass(link) {
        link.classList.add("active"); // Add 'active' class
        link.style.color = "#343a40"; // Set text color for active link
        link.style.transform = "scale(1.1)"; // Slightly increase size for active link
    }

    navLinks.forEach(link => {
        link.addEventListener("mouseenter", function() {
            // Apply hover effect on mouse enter
            link.style.transition = "all 0.3s ease";
            link.style.color = "#343a40";
            link.style.transform = "scale(1.1)";
        });

        link.addEventListener("mouseleave", function() {
            // Reset hover effect on mouse leave
            if (!link.classList.contains("active")) {  // Only reset if it's not the active link
                link.style.color = "";
                link.style.transform = "scale(1)";
            }
        });
    });

    // Function to handle page scroll and set active link based on hash
    function updateActiveLink() {
        const currentHash = window.location.hash;

        resetActiveClass(); // Reset active class for all links
        const activeLink = document.querySelector(`.nav-link[href="${currentHash}"]`);

        if (activeLink) {
            setActiveClass(activeLink); // Set the active class to the correct link
        }
    }

    // Update active link when the page loads or the hash changes
    updateActiveLink();
    window.addEventListener("hashchange", updateActiveLink); // Update on hash change
});

// JavaScript for text Hero Typing
$(document).ready(function() {
    const textBeforeUnderline = "Hello, I'm Muhammad ";
    const underlineText = "Rivan"; // Text to be underlined
    const textAfterUnderline = " Fachri";

    let i = 0;
    let isUnderlined = false; // Flag to toggle between normal and underlined text
    let outputText = ""; // Holds the full text to be displayed

    function typeWriter() {
        if (i < textBeforeUnderline.length) {
            outputText += textBeforeUnderline.charAt(i);
            $('#typing-effect').html(outputText); // Update the content of #typing-effect
            i++;
            setTimeout(typeWriter, 100); // Adjust typing speed
        } else if (i < textBeforeUnderline.length + underlineText.length) {
            // Add underlined text "Rivan"
            if (!isUnderlined) {
                outputText += '<span class="text-decoration-underline">'; // Open underline span
                isUnderlined = true;
            }
            outputText += underlineText.charAt(i - textBeforeUnderline.length);
            $('#typing-effect').html(outputText); // Update the content of #typing-effect
            i++;
            setTimeout(typeWriter, 100); // Adjust typing speed
        } else if (i < textBeforeUnderline.length + underlineText.length + textAfterUnderline.length) {
            // Add remaining normal text "Fachri"
            if (isUnderlined) {
                outputText += '</span>'; // Close underline span after "Rivan"
                isUnderlined = false;
            }
            outputText += textAfterUnderline.charAt(i - textBeforeUnderline.length - underlineText.length);
            $('#typing-effect').html(outputText); // Update the content of #typing-effect
            i++;
            setTimeout(typeWriter, 100); // Adjust typing speed
        }
    }

    typeWriter();
});




