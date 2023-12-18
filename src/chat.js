class Chat extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        document.addEventListener('start-chat', this.handleStartChat.bind(this));
        document.addEventListener('new-chat', this.handleNewChat.bind(this));
        document.addEventListener('new-prompt', this.handleNewPrompt.bind(this));

    }

    handleStartChat() {
        let chat = this.shadow.querySelector(".chat");
        chat.classList.add("active");
    }

    handleNewChat() {
        let chat = this.shadow.querySelector(".chat");
        chat.classList.remove("active");
        this.render();
    }

    handleNewPrompt(event) {
        this.newUserMessage(event);
        this.newModelMessage(event);
    }

    newUserMessage(event) {
        const textDetail = event.detail.prompt;
        const chat = this.shadow.querySelector(".chat");

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
    }

    newModelMessage(event) {
        const chat = this.shadow.querySelector(".chat");

        const modelPrompt = document.createElement('div');
        modelPrompt.classList.add('model-prompt');
        chat.appendChild(modelPrompt);

        const modelImage = document.createElement('div');
        modelImage.classList.add('model-image');
        modelImage.innerHTML = '<img src="images/ChatGPT_logo.svg.png" alt="avatar de usuario">';
        modelPrompt.appendChild(modelImage);

        const modelPromptText = document.createElement("div");
        modelPromptText.classList.add('model-prompt-text');
        modelPrompt.appendChild(modelPromptText);

        const modelName = document.createElement("div");
        modelName.classList.add('model-name');
        modelName.textContent = "ChatGPT";
        modelPromptText.appendChild(modelName);

        const modelMessage = document.createElement("div");
        modelMessage.classList.add('model-message');
        modelPromptText.appendChild(modelMessage);

        chat.scrollTop = chat.scrollHeight;
    }


    connectedCallback() {
        this.render()
    }

    render() {
        this.shadow.innerHTML =
            /*html*/`
            <style>

                :host{
                    width: 100%;
                }

                .chat{
                    height:80vh;
                    display:none;
                }

                .chat.active{
                    display:flex;
                    flex-direction: column;
                    color: white;
                    height:90vh;
                    overflow-y: auto;
                    overflow-x: hidden;
                    scroll-behavior: smooth;
                    width: 100%;
                }

                .chat::-webkit-scrollbar{
                    background: transparent; 
                    width: 0;
                }
                
                .chat:hover::-webkit-scrollbar{
                    width: 5px; 
                }
                
                .chat:hover::-webkit-scrollbar-thumb{
                    background-color: hsl(0, 0%, 53%); 
                    border-radius: 1rem;
                    max-height: 15%;
                }
                
                .chat:hover::-webkit-scrollbar-thumb:hover{
                    background-color: hsl(0, 0%, 78%); 
                }

                .user-message{
                    display:flex;
                    overflow-wrap: break-word;
                }

                .user-prompt{
                    margin-top: 3rem;
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

                @keyframes scaleAnimation {
                    0% {
                        width: 8px;
                        height: 8px;
                        transform: scale(0.8);
                    }
                    50% {
                        width: 10px;
                        height: 10px;
                        transform: scale(1);
                    }
                    100% {
                        width: 8px;
                        height: 8px;
                        transform: scale(0.8);
                    }
                }

                .model-message{
                    border-radius: 50%;
                    background-color: white;
                    display:flex;
                    flex-direction: column;
                    width:10px;
                    height:10px;
                    animation: scaleAnimation 1.5s infinite;
                    transform-origin: center;
                }

                .model-prompt{
                    color: white;
                    display: flex;
                    gap: 1rem;
                }

                .model-name{
                    display:flex;
                    gap: 0.3rem;
                }
                
                .model-prompt-text{
                    display:grid;
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


}

customElements.define('chat-component', Chat);