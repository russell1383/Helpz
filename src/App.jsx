import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import { createContext, useState } from "react";

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
            <Route exact to="/">
              <Home />
            </Route>
            <Route to="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
