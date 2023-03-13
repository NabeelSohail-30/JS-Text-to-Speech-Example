function speak() {
    const text = document.getElementById('text-to-speech').value;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}