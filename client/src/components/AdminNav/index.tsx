import React from "react";
import { NavLink } from "react-router-dom";
import { StyledAdminNav } from "./StyledAdminNav";

export default function AdminNav() {
  return (
    <StyledAdminNav>
      <ul className="adminNav">
        <li className="products">
          <NavLink
            to="/admin/products"
            className="navlink"
            activeClassName="selected"
          >
            <i className="fas fa-shoe-prints"></i>
            <span>Products</span>
          </NavLink>
        </li>
        <li className="stock">
          <NavLink
            to="/admin/stock"
            className="navlink"
            activeClassName="selected"
          >
            <i className="fas fa-layer-group"></i>
            <span> Stock</span>
          </NavLink>
        </li>
        <li className="offers">
          <NavLink
            to="/admin/discounts"
            className="navlink"
            activeClassName="selected"
          >
            <i className="fas fa-tags"></i>
            <span>Discounts</span>
          </NavLink>
        </li>
        <li className="categories">
          <NavLink
            to="/admin/category"
            className="navlink"
            activeClassName="selected"
          >
            <i className="fas fa-list"></i>
            <span>Categories</span>
          </NavLink>
        </li>
        <li className="orders">
          <NavLink
            to="/admin/orders"
            className="navlink"
            activeClassName="selected"
          >
            <i className="fas fa-file-invoice-dollar"></i>
            <span> Orders</span>
          </NavLink>
        </li>
        <li className="statitics">
          <NavLink
            to="/admin/statistics"
            className="navlink"
            activeClassName="selected"
          >
            <i className="fas fa-chart-pie"></i>
            <span> Statistics</span>
          </NavLink>
        </li>
        <li className="users">
          <NavLink
            to="/admin/users"
            className="navlink"
            activeClassName="selected"
          >
            <i className="fas fa-users fasMobile"></i>
            <span> Users</span>
          </NavLink>
        </li>
      </ul>
      <ul className="adminNavMovile">
        <li className="">
          <NavLink
            to="/admin/products"
            className="navlink"
            activeClassName="selected"
          >
            <i className="fas fa-shoe-prints"></i>
          </NavLink>
        </li>
        <li className="stock">
          <NavLink
            to="/admin/stock"
            className="navlink"
            activeClassName="selected"
          >
            <i className="fas fa-layer-group"></i>
          </NavLink>
        </li>
        <li className="offers">
          <NavLink
            to="/admin/discounts"
            className="navlink"
            activeClassName="selected"
          >
            <i className="fas fa-tags"></i>
          </NavLink>
        </li>
        <li className="categories">
          <NavLink
            to="/admin/category"
            className="navlink"
            activeClassName="selected"
          >
            {" "}
            <i className="fas fa-list"></i>
          </NavLink>
        </li>
        <li className="orders">
          <NavLink
            to="/admin/orders"
            className="navlink"
            activeClassName="selected"
          >
            {" "}
            <i className="fas fa-file-invoice-dollar"></i>
          </NavLink>
        </li>
        <li className="statistics">
          <NavLink
            to="/admin/statistics"
            className="navlink"
            activeClassName="selected"
          >
            {" "}
            <i className="fas fa-chart-pie"></i>
          </NavLink>
        </li>
        <li className="users">
          <NavLink
            to="/admin/users"
            className="navlink"
            activeClassName="selected"
          >
            <i className="fas fa-users fasMobile"></i>
          </NavLink>
        </li>
      </ul>
    </StyledAdminNav>
  );
}
