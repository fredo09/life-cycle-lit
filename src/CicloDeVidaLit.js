import { html, css, LitElement } from 'lit';

const showClickPosition = (e) => {
    console.log(`🚀 ~ has hecho click aqui ${e.clientX} X y en ${e.clientY} Y:`);
  }

export class CicloDeVidaLit extends LitElement {
  static styles = css`
  :host {
                display: block;
            }
            div {
                display: none;
                position: fixed;
                bottom: 1.5rem;
                right: 1.5rem;
                padding: 1rem;
                background-color: #ddd;
                border-radius: 0.3rem;
                
            }
            svg {
                width: 32px;
                height: 32px;
            }

            :host([visible]) div {
                display: block;
            }
  `;

  static properties = {
    visible: {
      type: Boolean,
      reflect: true
    }
  };

  constructor() {
    super();
    this.visible = false;
    this.changeVisibilityHandler = this.changeVisibility.bind(this);
    this.changeVisibility();
  }

  //! Cliclo de vida de los web componentes
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('scroll', this.changeVisibilityHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('scroll', this.changeVisibilityHandler);
  }

  changeVisibilityHandler() {
    console.log('Scroll es: ', document.documentElement.scrollTop);
        if(document.documentElement.scrollTop > 0) {
            this.visible = true;
        } else {
            this.visible = false;
        }
  }

  _scrollTop() {
    window.scroll( {top: 0, left: 0, behavior: 'smooth' });
  }

  render() {
    return html`
      <div @click=${this._scrollTop}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>
      </div>
    `;
  }
}
