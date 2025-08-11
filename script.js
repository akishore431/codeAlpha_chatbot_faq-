// Predefined FAQ dataset
const faqData = {
  "what is your name": "I am your FAQ Chatbot 🤖",
  "how are you": "I'm doing great! Thanks for asking 😊",
  "what is codealpha": "CodeAlpha is a software development company providing internship opportunities.",
  "how to contact codealpha": "You can contact CodeAlpha via email at services@codealpha.tech",
  "bye": "Goodbye! Have a great day! 👋"
};

// Function to handle user input
function sendMessage() {
  let inputField = document.getElementById("user-input");
  let userText = inputField.value.trim().toLowerCase();
  if (userText === "") return;

  // Display user message
  appendMessage("user", userText);

  // Check FAQ response
  let botResponse = "Sorry, I don't have an answer for that 😔";
  if (faqData[userText]) {
    botResponse = faqData[userText];
  }

  // Display bot response
  setTimeout(() => appendMessage("bot", botResponse), 500);

  inputField.value = "";
}

// Function to add messages to chat
function appendMessage(sender, text) {
  let chatBox = document.getElementById("chat-box");
  let message = document.createElement("div");
  message.className = `message ${sender}`;
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}
