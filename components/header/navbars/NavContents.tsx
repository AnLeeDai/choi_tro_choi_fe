"use client";

import { IconChevronDown } from "@tabler/icons-react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { NavbarContent, NavbarItem } from "@nextui-org/navbar";

const navbarItems: NavbarItemType[] = [
  {
    label: "Trò chơi",
    href: "/games",
    children: [
      {
        label: "Game online",
        href: "/games/online",
      },
      {
        label: "Game offline",
        href: "/games/offline",
      },
    ],
  },

  {
    label: "Phim ảnh",
    href: "/movies",
    children: [
      {
        label: "Phim chiếu rạp",
        href: "/movies/theater",
      },
      {
        label: "Phim truyền hình",
        href: "/movies/tv",
      },
    ],
  },

  {
    label: "Phần mềm",
    href: "/software",
    children: [
      {
        label: "Thiết kế",
        href: "/software/design",
      },
      {
        label: "Lập trình",
        href: "/software/programming",
      },
    ],
  },

  {
    label: "Khác",
    href: "/others",
    children: [
      {
        label: "Trò chuyện",
        href: "/others/chat",
      },
      {
        label: "Secret",
        href: "/others/secrec",
      },
    ],
  },
];

export default function NavContents() {
  return (
    <NavbarContent className="hidden sm:flex gap-6" justify="center">
      {navbarItems.map((item, index) => (
        <NavbarItem key={`${item}-${index}`} isActive={false}>
          {item.children ? (
            <Dropdown>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={<IconChevronDown size={16} />}
                >
                  {item.label}
                </Button>
              </DropdownTrigger>

              <DropdownMenu>
                {item.children.map((child, index) => (
                  <DropdownItem key={`${child}-${index}`} href={child.href}>
                    {child.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Link href={item.href} color="foreground">
              {item.label}
            </Link>
          )}
        </NavbarItem>
      ))}
    </NavbarContent>
  );
}
