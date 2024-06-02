import { ReactNode } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

type NavBarFooterLayoutProps = {
  children: ReactNode;
};

export default function NavBarFooterLayout({
  children,
}: NavBarFooterLayoutProps) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
