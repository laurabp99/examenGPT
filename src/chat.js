class Chat extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this.render()
    }
    render() {
        this.shadow.innerHTML =
            /*html*/`
            <style>
                .chatbox-user{
                    display:flex;
                    z-index: 1003;
                    position: absolute;
                }

                .user-name{
                    color: white
                }

                .user-prompt{
                    color: white
                }
            </style>
            
            <div class="chatbox-user">
                <div class="user-image"><img src="images/user-avatar.png" alt="avatar de usuario"></div>
                <div class="user-name">Tú</div>
                <div class="user-prompt">test</div>
            </div>
            <div class="chatbox-answer">
                <div class="chat-image"></div>
                <div class="chat-name"></div>
                <div class="chat-answer"></div>
            </div>
            `
    }

    newPrompt(event) {
        let chat = this.shadow.querySelector(".chat");
        let message = document.createElement("div");
        message.textContent = event.detail.prompt;
        chat.appendChild(message);
    }
    
}

customElements.define('chat-component', Chat);