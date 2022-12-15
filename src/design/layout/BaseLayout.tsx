import React, { FunctionComponent } from "react";
import { Route } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Root from "./Root";

type BaseLayoutProps = {
  children: React.ReactNode;
};

const BaseLayout: FunctionComponent<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      {/* <Route element={<Root children={children} />} /> */}
      <Root children={children} />
    </>
  );
};

export default BaseLayout;
