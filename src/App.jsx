import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import { createContext, useState } from "react";
import Login from "./pages/Login/Login.page";
import ViewCart from "./pages/ViewCart/ViewCart.page";
import ProductInfo from "./pages/ProductInfo/ProductInfo.page";
import NotFound from "./pages/NotFound/NotFound.page";
import Offer from "./pages/Offer/Offer.page";
import Signup from "./pages/Signup/Signup.page";
import CategoryItems from "./pages/CategoryItems/CategoryItems.page";
import SubCategoryItems from "./pages/SubCategoryItems/SubCategoryItems.page";
import ChildCategoryItems from "./pages/ChildCategoryItems/ChildCategoryItems.page";
import ProductCard from "./components/ProductCard/ProductCard.component";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [addToCart, setAddToCart] = useState([]);

  return (
    <UserContext.Provider
      value={{
        value: [loggedInUser, setLoggedInUser],
        value2: [addToCart, setAddToCart],
      }}
    >
      <div className="App">
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/category/:productName">
              <ProductInfo />
            </Route>

            <Route path="/products/category/:categoryName/:categoryId">
              <CategoryItems />
            </Route>

            <Route path="/products/sub-category/:subCategoryName/:subcategoryId">
              <SubCategoryItems />
            </Route>

            <Route path="/products/child-category/:childCategoryName/:childCategoryId">
              <ChildCategoryItems />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/Signup">
              <Signup />
            </Route>

            <Route path="/view-cart">
              <ViewCart />
            </Route>

            <Route path="/offer">
              <Offer />
            </Route>

            <Route path="/test">
              <ProductCard />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
