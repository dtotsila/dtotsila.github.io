function typeWriterWithMarkdown(element, markdownText, speed = 50) {
    let currentText = '';
    let i = 0;

    function type() {

        // split markdown text into words
        const all_words = markdownText.split(' ');


        if (i <= all_words.length) {
            currentText = all_words.slice(0, i).join(' ');
            // console.log(currentText)
            const words = currentText.split(' '); // Split the current text into words
            const renderedHtml = marked.parse(words.join(' ')); // Parse the current words and join them back with spaces
            // console.log(renderedHtml);
            element.innerHTML = renderedHtml; // Insert rendered HTML
            i++;
            setTimeout(type, speed); // Adjust the speed as needed
        }
    }
    type();
  }

  // Generate dynamic content for each page
  function generateDynamicResponse(pageId) {
    const responseElement = document.getElementById('dynamic-response');
    responseElement.innerHTML = ''; // Clear any previous content
    let markdownContent = "";

    if (pageId === 'home-content') {
      markdownContent = "**Dionis Totsila** is a Doctoral Researcher at INRIA Nancy (LARSEN Team), under the supervision of [Dr. Serena Ivaldi](https://members.loria.fr/SIvaldi/) and [Dr. Jean-Baptiste Mouret](https://members.loria.fr/JBMouret/). His work focuses on learning bimanual robot skills using human guidance and natural language. His research interests include continuous control using dynamical systems, Teleoperation, LLMs, VLMs, Multi-Modal Learning, and Whole-Body Control.";
    }
    else if (pageId === 'publications') {

    }


    // Use the typewriter function to type and render the content
    typeWriterWithMarkdown(responseElement, markdownContent);
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Call the function with the desired page ID
    generateDynamicResponse('home-content');
  });

// Load and show profile image function
function loadProfileImage() {
    const generatingMessage = document.getElementById('generating-image-message');
    const profileImage = document.getElementById('profile-image');

    // Make the image visible after the "generating" message
    profileImage.style.display = 'block';  // Show the image
    generatingMessage.style.display = 'none'; // Hide the "generating image" message

    // Set the image source (replace with your image path)
    profileImage.src = 'assets/dt.png';  // Make sure to set your image path here.
}

// Auto-resize textarea based on content input
const systemPromptBox = document.getElementById('system-prompt-box');
if (systemPromptBox) {
    systemPromptBox.addEventListener('input', function () {
        this.style.height = 'auto';  // Reset height
        this.style.height = (this.scrollHeight) + 'px'; // Set height based on scroll height
    });
}

// Example usage - Generate content for a specific page
document.addEventListener('DOMContentLoaded', () => {
    // Call the function with the desired page ID
    // Replace 'pageId' with the correct identifier for your page
    generateDynamicResponse('home-content');
});
