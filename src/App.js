import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import AuthProvider from "./Contexts/AuthProvider";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Signup from "./pages/Signup";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Servicedetails from "./pages/Servicedetails";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NewsDetails from "./pages/NewsDetails";
import Doctors from "./pages/Doctors";
import Footer from "./Components/Footer";
import NotFound from "./pages/NotFound";
import Appointments from "./pages/Appointments";
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <PrivateRoute path="/service/:id">
              <Servicedetails />
            </PrivateRoute>
            <PrivateRoute path="/newsDetails/:id">
              <NewsDetails />
            </PrivateRoute>
            <Route path="/doctors">
              <Doctors />
            </Route>
            <PrivateRoute path="/appointment">
              <Appointments/>
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
