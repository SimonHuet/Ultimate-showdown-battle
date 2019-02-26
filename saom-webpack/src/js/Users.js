import createUser from './user.html'

class User extends HTMLElement {

  constructor(){
    super();
    this.attachShadow({
        mode: 'open'
       });
       this.shadowRoot.innerHTML = createUser;
       this.valider()
       

  }

   valider() {
    let button = this.shadowRoot.querySelector('#valider');
    button.addEventListener('onclick',alert('cyka blyat'));
    
  }
}

window.customElements.define('user-component', User);
