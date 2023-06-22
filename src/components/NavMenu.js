import { useNavigate } from "react-router-dom";
function NavMenu({ menu, activeMenu, setActiveMenu }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={
          activeMenu === menu.title
            ? "nav-menu-wrapper active-menu"
            : "nav-menu-wrapper"
        }
        onClick={() => {
          setActiveMenu(menu.title);
          navigate(menu.path);
        }}
      >
        {menu.icon}
        {menu.title}
      </div>
    </>
  );
}

export { NavMenu };
