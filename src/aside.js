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

            
        }
    
    }
    
    customElements.define('aside-component', Aside);