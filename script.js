// querySelector css seçicisine uyan ilk öğeyi seçer(class,id,element). eşleşen öğe yoksa null döner.
const messageInput = document.querySelector(".message-input");
const chatBody = document.querySelector(".chat-body");
const sendMessageButton = document.querySelector("#send-message");


const userData = {
    message: null
}

// mesaj elemanı oluşturmak için
const createMessageElement = (content, classes) => {
    const div = document.createElement("div");// yeni bir div oluşturuyor
    div.classList.add("message", classes);//dive 2 tane sınıf ekliyor(user-message)
    div.innerHTML = content;// divin içine html içeriği olarak mesaj yerleştiriliyor
    return div;
}

const handleOutgoinMessage = (e) => {
    e.preventDefault();
    userData.message = messageInput.value.trim();
    const messageContent = `<div class="message-text">${userData.message}</div>`;
    const outgoinMessageDiv = createMessageElement(messageContent, "user-message");
    chatBody.appendChild(outgoinMessageDiv);
    //appendChild üst öğenin altına yeni bir öğe eklemek için kullanılır.
}

messageInput.addEventListener("keydown", (e) => {
    const userMessage = e.target.value.trim();
    if (e.key === "Enter" && userMessage) {
        handleOutgoinMessage(e);
        e.target.value = "";
    }
});


sendMessageButton.addEventListener("click", (e) => handleOutgoinMessage(e))


//28.dk 