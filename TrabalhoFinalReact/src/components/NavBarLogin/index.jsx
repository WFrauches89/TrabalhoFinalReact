
import {Container} from "./styled.js";
import LogoIcon from "../../img/ic_logo.png";

export const NavLogin = ({ handleInputChange, query }) => {
  return (
    
    <Container>
      
      <div className="nav-container">
      <a href="/home">
        <img src={LogoIcon} className="logo"></img>
        </a>
      </div>

      <div className="profile-container">
      <a className="home" href="/home">Home</a>
      <a className="home" href="/cadastro">Cadastro</a>
      </div>
    </Container>
  );
};

 