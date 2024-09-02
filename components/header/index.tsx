import { Navbar } from "@nextui-org/navbar";

import NavContents from "./navbars/NavContents";
import NavUserContents from "./navbars/NavUserContents";
import NavLogoContents from "./navbars/NavLogoContents";

export default function Header() {
  return (
    <Navbar maxWidth="full" classNames={{}}>
      <NavLogoContents />

      <NavContents />

      <NavUserContents />
    </Navbar>
  );
}
