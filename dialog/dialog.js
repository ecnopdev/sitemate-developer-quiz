
const template = document.createElement('template');
template.innerHTML = `<style>
.glass-overlay {
    z-index:98;
    position: fixed;
    top:0px;
    bottom:0px;
    background-color:black;
    opacity:0.4;
}

#confirm-button {
    display:none;
    background-color:green;
}

#cancel-button {
    display:none;
    background-color:red;
}
</style>
<div>
<button id="triggerButton">Click Me</button>
<div class="glass-overlay"></div>
<button id="confirm-button">Yes</button>
<button id="cancel-button">No</button>
</div>`;

class ConfirmationDialog extends HTMLElement {

    constructor() {
        super();
        this.message = "Confirmation message is not set.";
    }

    connectedCallback() {
        this.message = this.attributes["message"].value;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const triggerButton = this.shadowRoot.querySelector("#triggerButton");
        triggerButton.addEventListener("click", this.openDialog);
    }

    disconnectedCallback() { }

    openDialog() {
        alert("show overlay");
    }

    confirm() { alert("confirmed"); }

    cancel() { alert("canceled"); }
}

customElements.define('confirmation-dialog', ConfirmationDialog);