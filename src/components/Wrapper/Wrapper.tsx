import React from "react";
import s from "./Wrapper.module.css";

type WrapperProps = {
  children: React.ReactNode;
  styles?: string;
}

const Wrapper = ({ children, styles = "" }: WrapperProps) => {
  return (
    <div className={`${s.wrapper} ${styles}`}>
      {children}
    </div>
  );
}

export default Wrapper