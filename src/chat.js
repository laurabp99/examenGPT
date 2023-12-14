class Chat extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        document.addEventListener('new-prompt', this.newPrompt.bind(this));
        document.addEventListener('start-chat', this.startChat.bind(this));
        document.addEventListener('new-chat', this.newChat.bind(this));
    }

    startChat() {
        let chat = this.shadow.querySelector(".chat");
        chat.classList.add("active");
    }

    newChat() {
        let chat = this.shadow.querySelector(".chat");
        chat.classList.remove("active");
        this.render();
    }

    connectedCallback() {
        this.render()
    }
    render() {
        this.shadow.innerHTML =
            /*html*/`
            <style>
                .chat{
                    position:fixed;
                    top:5%;
                    left:30%;
                    height:80%;
                    display:none;
                }

                .chat.active{
                    display:flex;
                    flex-direction: column;
                    gap:1rem;
                    color: white;
                    overflow-y: auto;
                    overflow-x: hidden;
                    scroll-behavior: smooth;
                    width: 50%
                }

                .user-message{
                    display:flex;
                    overflow-wrap: break-word;
                }

                .user-prompt{
                    color: white;
                    display: flex;
                    gap: 1rem;
                }

                .user-name{
                    display:flex;
                }

                .user-prompt-text{
                    gap: 0.3rem;
                    width:100%;
                }

                .user-image{
                    height: auto;
                }

                .user-image img{
                    width:40px;
                    height:40px;
                }

                .model-message{
                    display:flex;
                    flex-direction: column;
                }

                .model-prompt{
                    color: white;
                    display: flex;
                    gap: 1rem;
                }

                .model-name{
                    display:flex;
                }

                .model-prompt-text{
                    gap: 0.3rem;
                }

                .model-image{
                    height: auto;
                }

                .model-image img{
                    width:40px;
                    height:40px;
                }
            </style>
            
            <div class="chat">
            </div>
            `
    }

    newPrompt(event) {
        const textDetail = event.detail.prompt;

        const chat = this.shadow.querySelector(".chat");

//---------USER

        const userPrompt = document.createElement('div');
        userPrompt.classList.add('user-prompt');
        chat.appendChild(userPrompt);

        const userImage = document.createElement('div');
        userImage.classList.add('user-image');
        userImage.innerHTML = '<img src="images/user-avatar.png" alt="avatar de usuario">';
        userPrompt.appendChild(userImage);

        const userPromptText = document.createElement("div");
        userPromptText.classList.add('user-prompt-text');
        userPrompt.appendChild(userPromptText);

        const userName = document.createElement("div");
        userName.classList.add('user-name');
        userName.textContent = "Tú";
        userPromptText.appendChild(userName);

        const userMessage = document.createElement("p");
        userMessage.classList.add('user-message');
        userMessage.textContent = textDetail;
        userPromptText.appendChild(userMessage);

//--------MODELO


        const modelPrompt = document.createElement('div');
        modelPrompt.classList.add('model-prompt');
        chat.appendChild(modelPrompt);

        const modelImage = document.createElement('div');
        modelImage.classList.add('model-image');
        modelImage.innerHTML = '<img src="images/ChatGPT_logo.svg.png" alt="avatar de usuario">';
        modelPrompt.appendChild(modelImage);

        const modelPromptText = document.createElement("div");
        modelPromptText.classList.add('prompt-text');
        modelPrompt.appendChild(modelPromptText);

        const modelName = document.createElement("div");
        modelName.classList.add('model-name');
        modelName.textContent = "ChatGPT";
        modelPromptText.appendChild(modelName);

        const modelMessage = document.createElement("p");
        modelMessage.classList.add('model-message');
        modelMessage.textContent = "ola k ase";
        modelPromptText.appendChild(modelMessage);
    }

}

customElements.define('chat-component', Chat);