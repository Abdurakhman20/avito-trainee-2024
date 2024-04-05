import React from "react";
import s from "./PageWrapper.module.css";

type PageWrapperProps = {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className={s.wrapper}>
      {children}
    </div>
  );
}

export default PageWrapper