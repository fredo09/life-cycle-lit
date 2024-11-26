import { html, css, LitElement } from 'lit';

const showClickPosition = (e) => {
    console.log(`🚀 ~ has hecho click aqui ${e.clientX} X y en ${e.clientY} Y:`);
  }

export class CicloDeVidaLit extends LitElement {
  static styles = css`
    :host {
      display: block;
      color: var(--ciclo-de-vida-lit-text-color, #000);
      background-color: beige ;
      width: 100%;
      height: 100vh;
      display: grid;
      place-content: center;
    }

    div {
      font-size: 2rem;
      font-weight: 700;
      font-style: normal;
      color: cadetblue;
    }
  `;

  static properties = {
    data: {
      type: String,
    }
  };

  constructor() {
    super();
    this.data = '';
  }

  //! Cliclo de vida de los web componentes
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', showClickPosition);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', showClickPosition);
    console.log("🚀 ~ hemos borrado el componente del DOM!:");
  }

  render() {
    return html`
      <div>
        Has click en donde quieras!!
      </div>
    `;
  }
}
