//import { Router } from 'react-router-dom';
import './App.css';
import Side_Nav from './side_nav/Side_Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Side_Nav/>
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
