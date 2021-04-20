import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_DETAIL } from "../../graphql/queries";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/AuthProvider";
import SearchBar from "../SearchBar";
import { StyledNav } from "./StyledNav";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function Nav() {
  const history = useHistory();
  const { logout, isAdmin, userId } = useAuth();

  const { data } = useQuery(GET_USER_DETAIL, {
    variables: { id: userId },
  });

  const handleLogout = () => {
    const ele = document.getElementById("check") as HTMLInputElement;
    ele.checked = false;
    Swal.fire({
      title: "Are you sure?",
      text: "We are sad to see you go",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out.",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          timer: 1000,
          title: "Goodbye",
          text: "We hope to see you soon!",
          showConfirmButton: false,
        });
        logout(() => history.push("/"));
      }
    });
  };

  const handleCheck = (url) => {
    const ele = document.getElementById("check") as HTMLInputElement;
    ele.checked = false;
    history.push(url);
  };

  return (
    <StyledNav>
      <nav className="fullnav">
        <div>
          <ul className="lineup">
            <li className="logo">
              <NavLink to="">
                <i className="fas fa-home"></i>
              </NavLink>
            </li>
            <li className="searchbar">
              <SearchBar />
            </li>
            <li className="cart">
              <NavLink to="/cart" className="hover">
                <i className="fas fa-shopping-cart"></i>
              </NavLink>
            </li>
            <li className="user">
              {userId !== "0" ? (
                <NavLink to="/profile" className="hover">
                  <i className="fas fa-user-circle"></i>
                </NavLink>
              ) : (
                <NavLink to="/login" className="hover">
                  <i className="fas fa-user-circle"></i>
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <div className="navMobile">
          <li onClick={() => handleCheck("/")}>
            <NavLink to="">
              <i className="fas fa-home fasMobile"></i>
            </NavLink>
          </li>
          <li onClick={() => handleCheck("/cart")}>
            <NavLink to="/cart" className="hover">
              <i className="fas fa-shopping-cart fasMobile"></i>
            </NavLink>
          </li>
          <li onClick={() => handleCheck("/profile")}>
            <NavLink to="/profile" className="hover">
              <i className="fas fa-user-circle fasMobile"></i>
            </NavLink>
          </li>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <ul className="linedown">
            {isAdmin ? (
              <li className="admin" onClick={() => handleCheck("/admin")}>
                <NavLink to="/admin"activeClassName="selected">Admin</NavLink>
              </li>
            ) : null}
            <li onClick={() => handleCheck("/")} className="catalogue">
              <NavLink exact to="/" activeClassName="selected">Catalogue</NavLink>
            </li>
            {/* <li onClick={() => handleCheck("/")} className="offers">
              <NavLink to="">Offers</NavLink>
            </li> */}
            {userId && userId !== "0"? ( 
            <>
              <li onClick={() => handleCheck("/wishlist")} className="wishlist">
                <NavLink to="/wishlist" activeClassName="selected" >WishList</NavLink>
              </li>
              <li onClick={() => handleCheck("/about")} className="aboutus">
              <NavLink to="/about"activeClassName="selected" >About us</NavLink>
              </li>
            </>
            ) :
            <li onClick={() => handleCheck("/about")} className="wishlist">
              <NavLink to="/about" activeClassName="selected" >About us</NavLink>
            </li>
            }
            {userId && userId !== "0" ? (
              <>
                <li onClick={handleLogout} className="login">
                  <p className="hover">Logout</p>
                </li>
                <li onClick={() => handleCheck("/profile")} className="register">
                  <NavLink to="/profile" activeClassName="selected">Hi {data?.user?.firstName} !</NavLink>
                </li>
              </>
            ) : (
              <>
                <li onClick={() => handleCheck("/login")} className="login">
                  <NavLink to="/login" className="hover"activeClassName="selected" >
                    Login
                  </NavLink>
                </li>
                <li
                  onClick={() => handleCheck("/register")}
                  className="register"
                >
                  <NavLink to="/register" className="hover" activeClassName="selected">
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          
        </div>
      </nav>
    </StyledNav>
  );
}
