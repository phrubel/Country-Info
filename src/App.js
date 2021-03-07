// Import React Router
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// Import Components
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import CountryDetails from './components/CountryDetails/CountryDetails';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home/>
          </Route>
          <Route path='/country/:countryName'>
          <CountryDetails/>
          </Route>
          <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
