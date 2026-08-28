import { TextAlignJustify } from "lucide-react";
import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMenu, setisMenu] = useState<boolean>(false);
  const openMenu = () => {
    setisMenu(!isMenu);
  };

  return (
    <header>
      <div onClick={() => navigate("/")} className="app-logo">
        <img src="/aura-logo.png" alt="Aura Book" />
      </div>
      {Navbar(isMenu)}
      <button onClick={openMenu}>
        <TextAlignJustify />
      </button>
      {isMenu && <div onClick={openMenu} className="overly"></div>}
    </header>
  );
};

export default Header;
