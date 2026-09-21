function typeWriterWithMarkdown(element, markdownText, speed = 50) {
    let currentText = '';
    let i = 0;

    function type() {
        const all_words = markdownText.split(' ');

        if (i <= all_words.length) {
            currentText = all_words.slice(0, i).join(' ');
            const renderedHtml = marked.parse(currentText);
            element.innerHTML = renderedHtml;
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function generateDynamicResponse(pageId) {
    const responseElement = document.getElementById('dynamic-response');
    responseElement.innerHTML = '';
    let markdownContent = "";

    if (pageId === 'home-content') {
        markdownContent = "**Dionis Totsila** is a **Doctoral Researcher** at **Inria Nancy (Human Centered Robotics — HUCEBOT — Team)** and the **University of Lorraine**, France, where he has been pursuing his Ph.D. since 2023 under the supervision of [Dr. Serena Ivaldi](https://members.loria.fr/SIvaldi/) and [Dr. Jean-Baptiste Mouret](https://members.loria.fr/JBMouret/). His thesis, *Bidirectional Language-to-Action for Whole-Body Humanoid Control via Foundation Models*, explores how vision-language and large language models can drive teleoperation and whole-body control for humanoid robots, funded by the EU Horizon project **euROBIN**. Beyond the bench, he led the Inria team behind euROBIN's live demonstration at the **European Parliament**, organized the *Bridging Humanoid Robotics and Foundation Models* workshop at **IEEE-RAS Humanoids 2025** in Seoul, and taught Vision-Language Models for HRI at the **AIxHRI Summer School** in Nancy. Prior to his Ph.D., he was a **Robotics Engineer** at **Ragdoll Dynamics**, London (2022–2023), applying robotic control and simulation techniques to animator workflows in Maya, and a **Student Researcher** at the **AI Group, University of Patras** (2021–2023), developing Neural Dynamic Policies for learning from demonstration and reinforcement learning. He is passionate about bridging AI research and real robots, with interests in robot learning, human-robot interaction, and autonomous skill acquisition.";
    }

    typeWriterWithMarkdown(responseElement, markdownContent);
}

function loadProfileImage() {
    const generatingMessage = document.getElementById('generating-image-message');
    const profileImage = document.getElementById('profile-image');

    profileImage.style.display = 'block';
    generatingMessage.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    generateDynamicResponse('home-content');
    setTimeout(loadProfileImage, 1500);
});
