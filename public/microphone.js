function microphone(sendText) {
    let mic = document.getElementById("mic");
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    const speech = new SpeechSynthesisUtterance();
    window.speechSynthesis.speak(speech);
    
    recognition.onresult = function (e) {
        let resultIndex = e.resultIndex;
        let transcript = e.results[resultIndex][0].transcript;
        
        sendText(transcript.toLowerCase());
        // console.log(transcript);
        
    }

    recognition.onend = function () {
        // mic.style.background = "#ff3b3b";
        mic.classList.remove("recording");

    }
    mic.addEventListener("click", function () {
        // mic.style.background = '#39c81f';
        mic.classList.add("recording");
        recognition.start();
        console.log("Activated");
    })
}

export default microphone;