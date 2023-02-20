import React, {Component} from 'react';
import './App.css';
import Alface from './imagens/alface.png';
import Laranja from './imagens/laranja.png';
import Cereja from './imagens/cereja.png';
import Cenoura from './imagens/cenoura.png';
import Manga from './imagens/manga.png';
import Limao from './imagens/limao.png';
import Beterraba from './imagens/beterraba.png';
import Tomate from './imagens/tomate.png';


class App extends Component {
    state = {
        hortifruti: [
            {
                imagem: `${Alface}`, 
                titulo: "Alface"
            }, {
                imagem: `${Laranja}`, 
                titulo: "Laranja"
            }, {
                imagem: `${Cereja}`, 
                titulo: "Cereja"
            }, {
                imagem: `${Cenoura}`, 
                titulo: "Cenoura"
            }, {
                imagem: `${Manga}`, 
                titulo: "Manga"
            }, {
                imagem: `${Limao}`, 
                titulo: "Limão"
            }, {
                imagem: `${Beterraba}`, 
                titulo: "Beterraba"
            }, {
                imagem: `${Tomate}`, 
                titulo: "Tomate"
            }]
    }
    render() {
        return(
            <>
            <header>
<h1 className="tituloo" >HORTIFRUTI</h1>
<h2 className="subtitulo">VnW</h2>
<h2 className="inicioMain">Nossos Produtos</h2>
</header>
<main>
    
    <section className="map">
        {this.state.hortifruti.map((item) => (
            <div>
                <img className="imagens" src={item.imagem} alt="" />
            </div>
        ))}
    </section>
    <section className="compras">
        <div className="carrinho">
        <svg width="105" height="99" viewBox="0 0 105 99" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M75.4688 71.1562H28.6289L17.1855 11.8336C17.0517 11.1232 16.6586 10.4792 16.0744 10.0131C15.4902 9.54705 14.7516 9.28816 13.9863 9.28125H6.5625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.8125 86.625C37.343 86.625 41.0156 83.1622 41.0156 78.8906C41.0156 74.619 37.343 71.1562 32.8125 71.1562C28.282 71.1562 24.6094 74.619 24.6094 78.8906C24.6094 83.1622 28.282 86.625 32.8125 86.625Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M75.4688 86.625C79.9992 86.625 83.6719 83.1622 83.6719 78.8906C83.6719 74.619 79.9992 71.1562 75.4688 71.1562C70.9383 71.1562 67.2656 74.619 67.2656 78.8906C67.2656 83.1622 70.9383 86.625 75.4688 86.625Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.6348 55.6875H77.1504C78.6842 55.6919 80.1706 55.1864 81.3484 54.2599C82.5261 53.3334 83.3197 52.0451 83.5898 50.6215L88.5938 24.75H19.6875" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p className="textoCarrinho">Arraste seu produto aqui para colocar no carrinho</p>
        </div>
<div className="botoes">
<svg className="mais" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
<path d="M11 16H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 11V21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg className="menos" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
<path d="M11 16H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
    </section>
</main>
            </>
        )
    }

}
export default App