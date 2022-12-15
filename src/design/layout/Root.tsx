import React from 'react'
import { Route } from 'react-router';
import Footer from './Footer';
import Header from './Header';

const Root = ({ children } : any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Root;
