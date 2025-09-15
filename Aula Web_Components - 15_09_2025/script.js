class olaMundo extends HTMLElement{
    constructor(){
        super();
    }
 
    connectedCallback(){
        this.innerHTML = "<p> Olá mundo </p>";
    }
}
customElements.define("ola-mundo",olaMundo)
 
 
 
 
 
 