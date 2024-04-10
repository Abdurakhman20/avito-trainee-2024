import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import MyButton from "../../components/MyButton/MyButton";
import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Wrapper styles={s.wrapper}>
      <span className={s.icon}>😕</span>
      <p className={s.desc}>This page has been deleted or never existed!</p>
      <Link to="/">
        <MyButton text="Go back" />
      </Link>
    </Wrapper>
  );
};

export default NotFound;
