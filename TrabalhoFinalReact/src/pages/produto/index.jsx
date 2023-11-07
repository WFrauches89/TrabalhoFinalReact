import React from "react";
import { Main } from "./style";
 import Img from "../../img/Games.png"
 import { AiOutlineLike } from "react-icons/ai";
 import { AiOutlineDislike } from "react-icons/ai";
 import GlobalStyle from '../../global/globalStyle.js';
 import Navigation from "../../components/Navigation/Nav.jsx";
import { Footer } from "../../components/footer/index.jsx";
 


export default function Produto({ handleInputChange, query }) {
    return(
      <>
      
      <GlobalStyle />
      <Navigation query={query} handleInputChange={handleInputChange}/>
      
        <Main> 
        
           <img className="produto-img" src={Img} alt="" />
           
            <div className="produto-informacoes">
           
              <h2 className="produto-nome">Fifa</h2>
              <div className="like">
               <a type="submit" href="#"><AiOutlineLike size={25} /></a><p>100K</p>
               <a type="submit" className="deslike" href="#"><AiOutlineDislike size={25}/></a><p>100K</p>
                </div>
              <p className="produto-valos">R$ 300,00</p>
              <a className="mais-informacoes" href="#">Mais informações</a>
              <button className="produto-comprar">Comprar</button>
            </div>
        </Main>
        <Footer/>
        </>
    )
}

