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
import TransportDetail from './Pages/PrivateRoute/TransportDetail/TransportDetail';
import AdminLogin from './Pages/ConditionalRoute/Login/AdminLogin';
import MyBooking from './Pages/PrivateRoute/MyBooking/MyBooking';
import AddPackage from './Pages/Admin/AddPackage/AddPackage';
import ManageBooking from './Pages/Admin/ManageBooking/ManageBooking';
import AddBlog from './Pages/Admin/AddBlog/AddBlog';
import PackageDetail from './Pages/PrivateRoute/PackageDetail/PackageDetail';
import BookingInfo from './Pages/PrivateRoute/BookingInfo/BookingInfo';

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
            <PrivateRoute path="/packageDetails/:packageId">
              <PackageDetail></PackageDetail>
            </PrivateRoute>
            <PrivateRoute path="/bookingInfo">
              <BookingInfo></BookingInfo>
            </PrivateRoute>
            <PrivateRoute path="/transportDetails">
              <TransportDetail></TransportDetail>
            </PrivateRoute>
            <PrivateRoute path="/myBooking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path="/myBooking/:userId">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path="/addPackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path="/manageBooking">
              <ManageBooking></ManageBooking>
            </PrivateRoute>
            <PrivateRoute path="/addBlog">
              <AddBlog></AddBlog>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/adminLogin">
              <AdminLogin></AdminLogin>
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
