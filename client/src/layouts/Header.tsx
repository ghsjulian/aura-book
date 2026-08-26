import { TextAlignJustify } from "lucide-react";
import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {
  const [isMenu, setisMenu] = useState<boolean>(false);
  const openMenu = () => {
    setisMenu(!isMenu);
  };

  return (
    <header>
      <div className="app-logo">
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
