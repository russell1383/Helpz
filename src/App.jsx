import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";
import { createContext, lazy, Suspense, useEffect, useState } from "react";
import Login from "./pages/Login/Login.page";
import ViewCart from "./pages/ViewCart/ViewCart.page";
import ProductInfo from "./pages/ProductInfo/ProductInfo.page";
import NotFound from "./pages/NotFound/NotFound.page";
import Offer from "./pages/Offer/Offer.page";
import Signup from "./pages/Signup/Signup.page";
import CategoryItems from "./pages/CategoryItems/CategoryItems.page";
import SubCategoryItems from "./pages/SubCategoryItems/SubCategoryItems.page";
import ChildCategoryItems from "./pages/ChildCategoryItems/ChildCategoryItems.page";
import Invoice from "./pages/Invoice/Invoice";
import { LoaderGif } from "./components/CategoryItemsBanner/CategoryItemsBanner.style";
import loading from "./assets/gifs/loader.gif";
import SingleProductInfoBannner from "./components/SingleProductInfoBanner/SingleProductInfoBannner.component";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.component";

const Home = lazy(() => import("./pages/Home/Home.page"));

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [addToCart, setAddToCart] = useState([]);

  useEffect(() => {
    if ("user" in localStorage) {
      var user_data = JSON.parse(localStorage["user"]);
      setLoggedInUser(user_data);
    }
  }, []);
  console.log(loggedInUser);
  return (
    <UserContext.Provider
      value={{
        value: [loggedInUser, setLoggedInUser],
        value2: [addToCart, setAddToCart],
      }}
    >
      <div className="App">
        <ReactNotification />
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/product-info/:productId">
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

            <PrivateRoute path="/offer">
              <Offer />
            </PrivateRoute>

            <Route path="/test">
              <SingleProductInfoBannner />
            </Route>

            <Route path="/invoice">
              <Invoice />
            </Route>

            <Route exact path="/">
              <Suspense fallback={<LoaderGif src={loading} />}>
                <Home />
              </Suspense>
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
