import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import iclogo from "../../img/iclogo.svg"

import "./Sidebar.css";

function Sidebar({handleChange}) {
  

  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
        <a href="http://localhost:5174/home">
          <img src={iclogo} alt="Logo Home" />
        </a>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
      </section>
    </>
  );
}

export default Sidebar;