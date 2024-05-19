import { LitElement, css, html, nothing } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class SandaliasNike extends LitElement {
  static get properties() {
    return {
      /**
       * Este es el titulo de mi pagina
       */
      title: { type: String },
      /**
       * Este es mi parrafo 
       */
      paragraph: { type: String },
      /**
       * Este es el titulo 1 de mi pagina
       */
      title1: { type: String },
      /**
       * Este es el parrafo 1
       */
      paragraph1: { type: String },
      /**
       * Esta es la url de la imangen 1
       */
      image1Url: { type: String },
      /**
       * Este es el titulo 2 de mi pagina
       */
      title2: { type: String },
      /**
       * Este es el parrafo 1
       */
      paragraph2: { type: String },
      /**
       * Esta es la url de la imangen 2
       */
      image2Url: { type: String },
      /**
       * Este es el titulo 3 de mi pagina
       */
      title3: { type: String },
      /**
       * Este es el parrafo 3
       */
      paragraph3: { type: String },
      /**
       * Esta es la url de la imangen 3
       */
      image3Url: { type: String },
      /**
       * Este es el titulo 4 de mi pagina
       */
      title4: { type: String },
      /**
       * Este es el parrafo 4
       */
      paragraph4: { type: String },
      /**
       * Esta es la url de la imangen 4
       */
      image4Url: { type: String },
      /**
       * Este es el titulo 4 de mi pagina
       */
      title4: { type: String },
      /**
       * Este es el parrafo 4
       */
      paragraph4: { type: String },
      /**
       * Esta es la url de la imangen 4
       */
      image4Url: { type: String },
      /**
       * Este es el titulo 5 de mi pagina
       */
      title5: { type: String },
      /**
       * Este es el parrafo 5
       */
      paragraph5: { type: String },
      /**
       * Esta es la url de la imangen 5
       */
      image5Url: { type: String },
      /**
       * Este es el titulo 6 de mi pagina
       */
      title6: { type: String },
      /**
       * Este es el parrafo 6
       */
      paragraph6: { type: String },
      /**
       * Esta es la url de la imangen 5
       */
      image6Url: { type: String },
      
    }
  }

  constructor() {
    super()
  
    this.title = 'TENIS'
    this.paragraph = 'TENIS UNISEX DIFERENTES ACTIVIDADES'
    this.title1 = 'Bienvenidos Oulet de Tenis'
    this.paragraph1 = 'Tenis para descanso diferentes colores dama y caballero'
    this.image1Url = 'https://i.linio.com/p/4514a8bde801329a559c379b9fabae23-product.jpg'
    this.title2 = 'Tenis con brillitos diferentes colores para dama y ni&a'
    this.paragraph2 = 'Diferentes tama&os y formas todos con brillitos'
    this.image2Url = 'https://http2.mlstatic.com/D_NQ_NP_645779-MLM47684717413_092021-O.webp'
    this.title3 = 'Tenis para practicar Futbol Hombres, ni&os, damas y ni&as'
    this.paragraph3 = 'Diferentes colores y tallas unisex'
    this.image3Url = 'https://down-mx.img.susercontent.com/file/cn-11134207-7r98o-ln6null2ail9f9_tn'
    this.title4 = 'Tenis de moda para Dama y Caballero fosfo'
    this.paragraph4 = 'Diferentes tono en fosfo para dama y caballero' 
    this.image4Url = 'https://http2.mlstatic.com/D_NQ_NP_775117-MLM48897543077_012022-O.webp'
    this.title5 = 'Tenis exclusivo para dama regalo perfecto en una fecha especial'
    this.paragraph5 = 'Diferentes tallas'
    this.image5Url = 'https://dpjye2wk9gi5z.cloudfront.net/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/zoom/1024051-0011V1.jpg'
    this.title6 = 'Tenis para correr y caminar'
    this.paragraph6 = 'Tenis para dama y caballero colores unisex confortables'
    this.image6Url = 'https://media.gq.com.mx/photos/63ee6405f57c61d24bf50732/master/pass/nike-running-shoes-streakfly-invincible.jpg'
  }


  render() {
    return html`
      <div id="TENIS">
      <h1>${this.title}</h1>
      <p>${this.paragraph}</p>
      <h2>${this.title1}</h2>
      <p>${this.paragraph1}</p>
      <img src="${this.image1Url}">
      <h3>${this.title2}</h3>
      <p>${this.paragraph2}</p>
      <img src="${this.image2Url}">
      <h4>${this.title3}</h4>
      <p>${this.paragraph3}</p>
      <img src="${this.image3Url}">
      <h5>${this.title4}</h5>
      <p>${this.paragraph4}</p>
      <img src="${this.image4Url}">
      <h6>${this.title5}</h6>
      <p>${this.paragraph5}</p>
      <img src="${this.image5Url}">
      <h7>${this.title6}</h7>
      <p>${this.paragraph6}</p>
      <img src="${this.image6Url}">

    
      </div>`

  
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
   }
      body{
        background-color: plum;
      }
      #parrafo {
        background-color: chartreuse;
      }
      #parrafo {
        font-family: Georgia
      }
      #parrafo { 
        color: rgb(165, 42, 144);
      }
      #sandalias-nike {
        background-color: rgb(187, 109, 109);
      }
      #sandalias-nike {
      font-family: Times;
      }
      #sandalias-nike {
        color: blue;
      }
      
      div{
    padding: 15vw;
    }
    #sandalias-nike {
      background-color: cadetblue;
    }
      img {
    width:25vw;
      }
      p {
    font-size:10vh;
      }

    #titulo-1 {
      color: coral;
    }
    #titulo-2 {
      color: aqua;
    }
    #titulo-3 {
      color: chartreuse;
    }
    #titulo-4 {
      color: brown;
    }
    #titulo-5 {
      color: darkgreen;
    }
    #titulo-6 {
      color: darkorchid;
    }
    li{
    font-size: 7vw;
    }
    `
  }
}

  
   window.customElements.define('sandalias-nike', SandaliasNike)
