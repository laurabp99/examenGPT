class Aside extends HTMLElement {
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

                aside{
                    background-color: hsl(0, 0%, 0%);
                    max-width: 235px;
                    min-width: 235px;
                }
            </style>    
            <aside>
                <new-conversation-component></new-conversation-component>
                <history-component></history-component>
                <user-area-component></user-area-component>
            </aside>
            `
        let aside = this.shadow.querySelector("aside");
        let menuButton = this.shadow.querySelector(".menu-button")

        menuButton?.addEventListener("click", () => {
            aside.classList.toggle("active");
            menuButton.classList.toggle("active")
        });
            
        }
    
    }
    
    customElements.define('aside-component', Aside);