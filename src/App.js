import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Pages/ConditionalRoute/Login/PrivateRoute/PrivateRoute'
import './App.css';
import NotFound from './Pages/NotFound/NotFound';
import Destinations from './Pages//Destinations/Destinations';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Login from './Pages/ConditionalRoute/Login/Login';
import Home from './Pages/Home/Home';
import AuthProvider from './Contexts/AuthProvider';
import Europe from './Pages/Packages/Europe/Europe';
import Asia from './Pages/Packages/Asia/Asia';
import America from './Pages/Packages/America/America';
import TransportDetail from './Pages/PrivateRoute/TransportDetail/TransportDetail';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute path="/packageDetails/:europe_id">
              <Europe></Europe>
            </PrivateRoute>
            <PrivateRoute path="/packageDetails/:asia_id">
              <Asia></Asia>
            </PrivateRoute>
            <PrivateRoute path="/packageDetails/:america_id">
              <America></America>
            </PrivateRoute>
            <PrivateRoute path="/transportDetails">
              <TransportDetail></TransportDetail>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
