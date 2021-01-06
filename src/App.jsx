import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact to="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
