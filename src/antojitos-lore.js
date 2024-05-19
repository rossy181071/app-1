import { LitElement, css, html } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class AntojitosLore extends LitElement {
  static get properties() {
    return {

      /**
       * Este es el titulo de mi pagina
       */
      title: { type: String },
      /**
       * Este es mi parrafo 1
       */
      paragraph1: { type: String },
      /**
       * Esta es la url de la imagen 1.
       */

      image1Url: { type: String },
      
      /**
       * Este es el elemento 1 de la lista 1
       */
      list1Element1: { type: String },
      /**
       * Este es el elemento 2 de la Lista 1
       */
      list1Element2: { type: String },
      /**
       * Este es el elemento 3 de la lista 1
       */
      list1Element3: { type: String },
      /**
       * Este el elemento 4 de la lista 1
       */
      list1Element4: { type: String },
      /**
       * Este el elemento 5 de la lista 1
      */
      list1Element5: { type: String },
      /**
       * Esta es la url de la imagen 2
       */
      image2Url: { type: String },

    }
  }

  constructor() {
    super()

    this.title = 'Antojitos Lore'
    this.paragraph1 = 'Ricos y Deliciosos'
    this.image1Url = 'https://cdn2.cocinadelirante.com/sites/default/files/images/2023/08/antojitos-mexicanos-15-septiembre.jpg'
    this.paragraph2 = 'Antojitos Lore Sabor y variedad'
    this.image2Url = 'https://media.istockphoto.com/id/1421385442/es/foto/comida-festiva-mexicana-para-el-d%C3%ADa-de-la-independencia-chiles-en-nogada-tacos-al-pastor.jpg?s=612x612&w=0&k=20&c=Ey76OXIOVc6wvvJwcK0TPzGpaeGC6-PZhtf0yprtTWg='
    this.paragraph3 = 'Les ofrecemos Ricas y Variadas'
    this.list1Element1 = 'Quesadillas'
    this.list1Element2 = 'Gordas'
    this.list1Element3 = 'Pambazos'
    this.list1Element4 = 'Flautas'
    this.list1Element5 = 'Tostadas'
    this.paragraph4 = 'TENEMOS QUESADILLAS DE :'
    this.image3Url = 'https://cdn0.recetasgratis.net/es/posts/1/0/6/masa_para_quesadillas_fritas_74601_orig.jpg'
    
    this.list2Element1 = 'Chicharron'
    this.list2Element2 = 'Flor de calabaza'
    this.list2Element3 = 'Sesos'
    this.list2Element4 = 'Queso'
    this.list2Element5 = 'Champinones'
    this.paragraph5 = 'TENEMOS GORDITAS DE :'
    this.image4Url = 'https://polacocina.com/wp-content/uploads/2020/10/Gorditas-de-chicharro%CC%81n-prensado.jpg'
    this.list3Element1 = 'Suadero'
    this.list3Element2 = 'Chicharron'
    this.paragraph6 = 'TENEMOS RICOS PAMBAZOS'
    this.image5Url  = 'https://img-global.cpcdn.com/recipes/b295632bf49d1c90/1200x630cq70/photo.jpg'
    this.list4Element1 = 'ELABORADOS CON PAPA CON CHORIZO, CREMA, LECHUGA Y QUESO'
    this.paragraph7  = 'DELICIOSAS FLAUTAS'
    this.image6Url = 'https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2019/09/flautas-de-carne.jpg'
    this.list5Element1 = 'Tenemos de Carne de Res'
    this.list5Element2 = 'Tenemos de Carne de pollo'
    this.paragraph8  = 'DELICIOSAS Y VARIADAS TOSTADAS'
    this.image7Url = 'https://i.ytimg.com/vi/AfaxvmoBs_A/maxresdefault.jpg'
    this.list6Element1 = 'Tostadas de tinga Carne de Res'
    this.list6Element2 = 'Tostadas de tinga de Carne de pollo'
    this.list6Element3 = 'Tostadas de Pata'
    this.list6Element4 = 'Tostadas de Picadillo'
  }

  render() {
    return html`
    <div id="Antojitos Lore">
    <h1>${this.title}</h1>
    <p>${this.paragraph1}</p>
    <img src="${this.image1Url}">
    <p>${this.paragraph2}</p>
    <img src="${this.image2Url}">
    <p>${this.paragraph3}</p>
    <ul>
      <li><i>${this.list1Element1}</i></li>
      <li><i>${this.list1Element2}</i></li>
      <li><i>${this.list1Element3}</i></li>
      <li><i>${this.list1Element4}</i></li>
      <li><i>${this.list1Element5}</i></li>
    </ul>
    <P>${this.paragraph4}</P>
    <img src="${this.image3Url}">
    <li><i>${this.list2Element1}</i></li>
    <li><i>${this.list2Element2}</i></li>
    <li><i>${this.list2Element3}</i></li>
    <li><i>${this.list2Element4}</i></li>
    <li><i>${this.list2Element5}</i></li>
    <p>${this.paragraph5}</p>
    <img src="${this.image4Url}">
    <li><i>${this.list3Element1}</i></li>
    <li><i>${this.list3Element2}</i></li>
    <p>${this.paragraph6}</P>
    <img src="${this.image5Url}">
    <li><i>${this.list4Element1}</i></li>
    <p>${this.paragraph7}</P>
    <img src="${this.image6Url}">
    <li><i>${this.list5Element1}</i></li>
    <li><i>${this.list5Element2}</i></li>
    <p>${this.paragraph8}</P>
    <img src="${this.image7Url}">

    <li><i>${this.list6Element1}</i></li>
    <li><i>${this.list6Element2}</i></li>
    <li><i>${this.list6Element3}</i></li>
    <li><i>${this.list6Element4}</i></li>

    
    

    
  </div>`

  }



  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
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
      #antojitos-lore {
        background-color: rgb(187, 109, 109);
      }
      #antojitos-lore {
      font-family: Times;
      }
      #antojitos-lore {
        color: blue;
      }
      
      div{
    padding: 15vw;
    }
    #ricos y deliciosos {
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


window.customElements.define('antojitos-lore', AntojitosLore)
