import React from "react";
import { NavLink } from "react-router-dom";
import { StNavBar, StNavBarItems, StNavBarLink } from "./styled";

const NavBar = () => (
  <StNavBar data-testid="nav-bar">
    <StNavBarItems>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <StNavBarLink>Converter</StNavBarLink>
      </NavLink>
      <NavLink to="/currency_list">
        <StNavBarLink>Currency List</StNavBarLink>
      </NavLink>
    </StNavBarItems>
  </StNavBar>
);

export default NavBar;
