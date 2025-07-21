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
      markdownContent = "**Dionis Totsila** is a **Doctoral Researcher** at **INRIA Nancy (LARSEN Team)** and the **University of Lorraine**, France, where he has been pursuing his Ph.D. since 2023 under the supervision of [Dr. Serena Ivaldi](https://members.loria.fr/SIvaldi/) and [Dr. Jean-Baptiste Mouret](https://members.loria.fr/JBMouret/). His current research focuses on enhancing robotic capabilities by integrating large language and vision-language models, as well as developing methods for learning bimanual robot skills with human guidance and natural language interaction. Prior to this, he gained industry experience as a **Robotics Engineer** at **Ragdoll Dynamics**, **London, UK** (2022–2023), where he contributed to improving animator workflows by applying robotic control and simulation techniques in Maya. Dionis also held a research role at the **AI Group** of the **Laboratory of Information Systems and Artificial Intelligence**, **University of Patras** (2021–2023), where he worked on advancing neural dynamic policies, reinforcement learning, learning from demonstration, and optimal control strategies. He is passionate about bridging the gap between artificial intelligence research and real-world applications, with interests in robot learning, human-robot interaction, and autonomous skill acquisition.";
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
    profileImage.src = 'assets/dt.jpg';  // Make sure to set your image path here.
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
