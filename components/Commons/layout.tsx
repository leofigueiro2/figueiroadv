import { PropsWithChildren } from 'react';
import Header from './Header';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('./Footer'));

export default function Layout({children}: PropsWithChildren){
  
  return (
    <>
      <Header/>
      <main> {children}</main> 
      <Footer />
    </>
  );
}