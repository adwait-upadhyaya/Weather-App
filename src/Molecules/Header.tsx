// Atomic components
import Image from "../Atomic/Image";

// images
import logo from "../../public/images/logo.png";
import Searchbar from "./Searchbar";

// css
import "../sass/_header.scss";
import { IHeader } from "../interface/IHeader";

const Header = (props: IHeader) => {
  const { handleOnChange, value, handleOnKeyDown, search } = props;
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Image src={logo} height={47} width={90} alt="logo" />
      </div>
      <div className="navbar__right">
        <Searchbar
          value={value}
          className="navbar__right--searchbar"
          handleOnChange={handleOnChange}
          handleOnKeyDown={handleOnKeyDown}
          search={search}
        />
      </div>
    </div>
  );
};

export default Header;
