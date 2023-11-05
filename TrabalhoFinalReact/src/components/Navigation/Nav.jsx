import { FiHeart } from "react-icons/fi";
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="O que você procura?"
        />
      </div>
      <div className="profile-container">
      Olá, faça o seu login.<a href="http://localhost:5174/login">
          <AiOutlineUser className="nav-icons"  /> 
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        {/* <a href="http://localhost:5174/cadastro">
          <AiOutlineUserAdd className="nav-icons"  />
        </a> */}

      </div>
    </nav>
  );
};

export default Nav;