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
                    height: 100%;
                    transition: 0.7s;
                }

                aside.active{
                    max-width: 0;
                    min-width: 0;
                    transition: 0.7s;
                }

                .hide-aside-button{
                    display: flex;
                    flex-direction: column;
                    position: fixed;
                    left: 13%;
                    bottom: 50%;
                    transition: 0.7s;
                }

                .hide-aside-button.active{
                    left: 2%;
                    transition: 0.7s;
                }

                span{
                    background-color: white;
                    border-radius: 5px;
                    width: 5px;
                    height: 20px;
                }

                .span-top{
                    transform-origin: bottom left;
                    transform: rotate(20deg) translateY(2px);
                }

                .span-bottom{
                    transform-origin: top right;
                    transform: rotate(-20deg) translateY(-2px);
                }

                .span-top.active{
                    transform: translateY(2px);
                }

                .span-bottom.active{
                    transform: translateY(-2px);
                }

            </style>    
            <aside>
                <slot name="content"></slot>
            </aside>
            <div class="hide-aside-button">
                <span class="span-top"></span>
                <span class="span-bottom"></span>
            </div>   
            `

        let aside = this.shadow.querySelector("aside");
        let hideAsideButton = this.shadow.querySelector(".hide-aside-button")
        let spans = this.shadow.querySelectorAll("span")

        hideAsideButton.addEventListener("click", () => {
            aside.classList.toggle("active");
            hideAsideButton.classList.toggle("active")

            spans.forEach(span => {
                span.classList.toggle('active');
            })
        });
    }
}

customElements.define('aside-component', Aside);