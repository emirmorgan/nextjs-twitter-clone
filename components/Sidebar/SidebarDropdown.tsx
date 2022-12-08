import React, { useEffect, useRef } from "react";
import { Icons } from "../../assets/Icons";
import { userLogout } from "../../firebase";

interface MenuProps {
  menuVisible: boolean;
  setMenuVisible: (isVisible: boolean) => void;
}

const SidebarDropdown = ({ menuVisible, setMenuVisible }: MenuProps) => {
  const menuRef = useRef<HTMLInputElement | null>(null);

  const handleSignout = (e: any) => {
    e.preventDefault();
    userLogout();
  };

  useEffect(() => {
    const toggleMenu = (e: any) => {
      if (
        menuRef.current &&
        menuVisible &&
        !menuRef.current.contains(e.target)
      ) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", toggleMenu);
    return () => {
      document.removeEventListener("mousedown", toggleMenu);
    };
  }, [menuRef, menuVisible]);

  return (
    <div
      ref={menuRef}
      className={
        "absolute bottom-0 w-64 bg-white border rounded-xl shadow-xl divide-y divide-gray-100" +
        (menuVisible ? " block" : " hidden")
      }
    >
      <ul className="py-1 text-sm text-black">
        <li className="flex items-center px-4 cursor-pointer hover:bg-gray-100">
          <div className="min-w-[24px] max-w-[24px]">
            <Icons name="topics" />
          </div>
          <span className="block py-2 px-4 text-lg font-semibold ">
            Dashboard
          </span>
        </li>
        <li className="flex items-center px-4 cursor-pointer hover:bg-gray-100">
          <div className="min-w-[24px] max-w-[24px]">
            <Icons name="circle" />
          </div>
          <span className="block py-2 px-4 text-lg font-semibold ">
            Settings
          </span>
        </li>
      </ul>
      <div className="py-1" onClick={handleSignout}>
        <span className="block py-2 px-4 text-lg font-semibold text-black hover:bg-gray-100 cursor-pointer">
          Sign out
        </span>
      </div>
    </div>
  );
};

export default SidebarDropdown;
