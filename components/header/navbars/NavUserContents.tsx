"use client";

import {
  IconSun,
  IconMoon,
  IconSettings,
  IconLogout,
  IconDatabase,
} from "@tabler/icons-react";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { NavbarContent } from "@nextui-org/navbar";
import { useTheme } from "next-themes";

export default function NavUserContents() {
  const { theme, setTheme } = useTheme();

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <NavbarContent as="div" justify="end">
      <Dropdown placement="bottom">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform select-none"
            color="primary"
            name="CTC"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>

        <DropdownMenu
          aria-label="Profile Actions"
          variant="faded"
          disabledKeys={["theme-switch", "data-management"]}
          onAction={(key) => {
            key === "theme-switch" && handleThemeSwitch();
          }}
        >
          <DropdownItem
            key="profile"
            textValue="Profile"
            className="h-14 gap-2"
          >
            <p className="font-semibold">
              Đăng nhập với tư cách:{" "}
              <span className="text-primary">Người dùng</span>
            </p>
            <p className="font-semibold text-center">choitrochoi@gmail.com</p>
          </DropdownItem>

          <DropdownItem
            key="theme-switch"
            textValue="Switch theme"
            className="flex items-center gap-2"
            endContent={
              theme === "dark" ? <IconSun size={20} /> : <IconMoon size={20} />
            }
          >
            {theme === "dark" ? "Chế độ sáng" : "Chế độ tối"}
          </DropdownItem>

          <DropdownItem
            key="settings"
            textValue="Settings"
            className="flex items-center gap-2"
            endContent={<IconSettings size={20} />}
          >
            Cài đặt
          </DropdownItem>

          <DropdownItem
            key="data-management"
            textValue="Data management"
            className="flex items-center gap-2"
            endContent={<IconDatabase size={20} />}
          >
            Quản lý dữ liệu
          </DropdownItem>

          <DropdownItem
            key="logout"
            color="danger"
            endContent={<IconLogout size={18} />}
            textValue="Logout"
          >
            Đăng xuất
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  );
}
