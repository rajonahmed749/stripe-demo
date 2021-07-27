import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>        
      </Switch>
    </Router>


  );
}

export default App;
