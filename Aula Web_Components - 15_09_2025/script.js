class HelloWorld extends HTMLElement{
    constructor(){
        super()  //classe pai    
    }
    
    connectedCalback(){
        this.innerHTML = "<p>Hello World!</p>";
    }
}

customElements.define("hello-world", HelloWorld)