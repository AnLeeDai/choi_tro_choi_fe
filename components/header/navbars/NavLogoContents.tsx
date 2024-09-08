import { NavbarContent, NavbarBrand } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site.config";

export default function NavLogoContents() {
  return (
    <NavbarContent>
      <NavbarBrand>
        <Link
          href={siteConfig.navItems.home.href}
          className="font-bold text-inherit"
        >
          Chơi Trò Chơi
        </Link>
      </NavbarBrand>
    </NavbarContent>
  );
}
