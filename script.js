const messageInput = document.querySelector(".message-input");
const chatBody = document.querySelector(".chat-body");

const createMessageElement = (content, classes) => {
    const div = document.createElement("div");
    div.classList.add("message", classes);
    div.innerHTML = content;
    return div;
}

const handleOutgoinMessage = (userMessage) => {
    const messageContent = `<div class="message-text">${userMessage}</div>`;
    const outgoinMessageDiv = createMessageElement(messageContent, "user-message");
    chatBody.appendChild(outgoinMessageDiv);
}

messageInput.addEventListener("keydown", (e) => {
    const userMessage = e.target.value.trim();
    if (e.key === "Enter" && userMessage) {
        handleOutgoinMessage(userMessage);
        e.target.value = "";
    }
});
