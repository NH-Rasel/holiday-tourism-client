import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './Pages/NotFound/NotFound';
import Destinations from './Pages//Destinations/Destinations';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Login from './Pages/ConditionalRoute/Login/Login';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/destinations">
            <Destinations></Destinations>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
