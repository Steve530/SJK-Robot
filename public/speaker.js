let speakersActive = true;

const speakerToggle = document.querySelector(".speaker-toggle");
speakerToggle.addEventListener("click", () => {
    speakersActive = !speakersActive;
    if (speakersActive) speakerToggle.classList.add("speaker-active");
    else speakerToggle.classList.remove("speaker-active");
});

function speaker(message) {
    if (speakersActive) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = message.text;
        window.speechSynthesis.speak(speech);
    }
}

export default speaker;