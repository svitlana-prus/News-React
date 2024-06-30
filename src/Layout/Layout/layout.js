import { NavLink, Link, Outlet } from "react-router-dom";
import './style.css';

const Layout = () => {

  return (
    <>
      <div className="sticky-top">
        <header className="bg-light text-danger fs-2 fw-bold p-2 d-flex justify-content-between">
          НОВИНИ УКРАЇНИ ТА СВІТУ 
        </header>
        <nav className="navbar bg bg-danger d-flex">
          <NavLink to="/" className="nav-link fs-5 ps-4 link-dark link-underline link-underline-opacity-0" activeClassName="active"
          >Україна</NavLink>
          <NavLink to="/bbc" className="nav-link fs-5 ps-4 link-dark link-underline link-underline-opacity-0" activeClassName="active"
          >Світ BBC</NavLink>
          <NavLink to="/world" className="nav-link fs-5 ps-4 link-dark link-underline link-underline-opacity-0" activeClassName="active"
          >Наука та здоров'я </NavLink>
        </nav>

      </div>
      <main>
        <Outlet/>
      </main>
    </>
  );
};
export default Layout;