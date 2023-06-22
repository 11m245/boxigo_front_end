import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import OutputIcon from "@mui/icons-material/Output";
import { NavMenu } from "./NavMenu";
import { useState } from "react";
function Navigations() {
  const [activeMenu, setActiveMenu] = useState("MY MOVES");
  const menus = [
    { icon: <LocalShippingIcon />, title: "MY MOVES", path: "my-moves" },
    { icon: <PermIdentityIcon />, title: "MY PROFILE", path: "my-profile" },
    { icon: <RequestPageIcon />, title: "GET QUOTE", path: "get-quote" },
    { icon: <OutputIcon />, title: "LOGOUT", path: "logout" },
  ];

  return (
    <>
      <div className="navigations">
        {menus.map((menu) => (
          <NavMenu
            key={menu.title}
            menu={menu}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        ))}
      </div>
    </>
  );
}

export { Navigations };
