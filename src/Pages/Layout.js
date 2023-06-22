import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigations } from "../components/Navigations.js";

function Layout() {
  return (
    <>
      <ToastContainer autoClose={2500} />
      <div className="layout">
        <aside>
          <Navigations />
        </aside>
        <Outlet />
      </div>
    </>
  );
}

export { Layout };
