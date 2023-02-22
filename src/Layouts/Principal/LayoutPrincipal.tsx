import { PropsWithChildren } from "react";
import Header from "./Header/Header";
import ThemeProvider from "@src/theme/ThemeProvider";
import Footer from "./Footer/Footer";

export default function LayoutPrincipal({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeProvider>

        <Header />
        <main>{children}</main>
        <Footer/>
      </ThemeProvider>
    </>
  )
}
