import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import Nav from "../../components/Nav";
import Catalogue from "../Catalogue";
import { Route } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail";
import SearchResult from "../SearchResult";
import CRUDProducts from "../CRUDProducts";
import CRUDCategory from "../CRUDCategory";
import EditProduct from "../../components/EditProduct";
import AddUser from "../../components/AddUser";
import Login from "../../components/Login";
import Admin from "../Admin";
import { useAuth } from "../../hooks/AuthProvider";
import Cart from "../Cart";
import OrderTable from "../OrderTable";
import Statistics from "../../components/Statistics";
import Checkout from "../../components/Checkout";
// import Loader from "../../components/Loader";
import CRUDUsers from "../CRUDUsers";
import Success from "../../components/Success";
import Cancel from "../../components/Cancel";
import CRUDStock from "../CRUDStock";
import CRUDProductReviews from "../CRUDProductReviews";
import PasswordReset from "../../components/PasswordReset";
import NewPassword from "../../components/NewPassword";
import Profile from "../../containers/Profile";
import AboutUs from "../../components/AboutUs";
import OrderHistory from "../../components/OrderHistory";
import Offer from "../../components/Offer";
import wishListTable from "../../components/wishlist";
import AdminNav from "../../components/AdminNav";

require("dotenv").config();

// interface ProductAttributes {
//   name: String;
//   description: String;
//   price: Number;
//   brandId: String;
//   CategoriesId: String[];
// }

function App() {
  const { isAdmin } = useAuth();
  return (
    <div className="App fondoDegradado">
      <Nav />
      <GlobalStyles />
      <Route path="/about" component={AboutUs} />
      <Route exact path="/" component={Catalogue} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/register" component={AddUser} />
      <Route path="/login" component={Login} />
      <Route exact path="/search" component={SearchResult} />
      <Route exact path="/checkout" component={Checkout} /> {/*testing only */}
      <Route exact path="/success" component={Success} />
      <Route exact path="/cancel" component={Cancel} />
      <Route exact path="/admin" component={isAdmin ? Admin : Login} />
      <Route path="/admin/:navs" component={AdminNav} />
      <Route
        path="/admin/products"
        component={isAdmin ? CRUDProducts : Login}
      />
      <Route
        path="/admin/category"
        component={isAdmin ? CRUDCategory : Login}
      />
      <Route
        path="/admin/editProduct/:productId"
        component={isAdmin ? EditProduct : Login}
      />
      <Route
        path="/admin/productReviews/:productId"
        component={isAdmin ? CRUDProductReviews : Login}
      />
      <Route path="/admin/discounts" component={isAdmin ? Offer : Login} />
      <Route path="/cart" component={Cart} />
      <Route path="/admin/stock" component={CRUDStock} />
      <Route
        exact
        path="/admin/orders"
        component={isAdmin ? OrderTable : Login}
      />
      <Route
        exact
        path="/admin/statistics"
        component={isAdmin ? Statistics : Login}
      />
      <Route exact path="/wishlist" component={wishListTable} />
      <Route path="/admin/users" component={isAdmin ? CRUDUsers : Login} />
      <Route path="/forgotpassword" component={PasswordReset} />
      <Route path="/resetpassword/:token" component={NewPassword} />
      <Route path="/profile" component={Profile} />
      <Route path="/history" component={OrderHistory} />
    </div>
  );
}

export default App;
