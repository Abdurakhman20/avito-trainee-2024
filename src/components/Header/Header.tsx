import { Link } from "react-router-dom";

import Wrapper from "../Wrapper/Wrapper";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <Wrapper styles={s.header_wrapper}>
        <div className={s.logo}>
          <Link className={s.link} to="/">GOOD MOVIES</Link>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
