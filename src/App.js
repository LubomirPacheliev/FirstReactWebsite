import Market from "./components/Market";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sell from "./components/Sell";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Market />
            </Route>
            <Route exact path="/sell">
              <Sell />
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/register">
              <Register/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
