import { Link } from "react-router-dom";
import { Button } from "antd";
import Wrapper from "../../components/Wrapper/Wrapper";

import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Wrapper styles={s.wrapper}>
      <span className={s.icon}>😕</span>
      <p className={s.desc}>This page has been deleted or never existed!</p>
      <Link to="/">
        <Button type="primary">На Главную</Button>
      </Link>
    </Wrapper>
  );
};

export default NotFound;
