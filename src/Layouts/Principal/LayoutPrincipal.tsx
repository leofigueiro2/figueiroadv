import { PropsWithChildren } from "react";
import Header from "./Header/Header";
import ThemeProvider from "@src/theme/ThemeProvider";

export default function LayoutPrincipal({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeProvider>

        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}
