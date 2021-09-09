import './App.css';
import Welcome from './components/welcome/Welcome';
import Introduction from './components/introduction/Introduction';
import Menu from "./components/menu/Menu"
import Button from './components/button/Button';
import BookingTable from './components/booking_table/BookingTable';
import Footer from './components/footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function App() {
  return (
    <Router>
      <div>
        {/* <hr /> */}
        <Switch>

          <Route exact path="/">
            <Home />
            <Link to="/booking_table"><Button /></Link>
            <Footer />
          </Route>

          <Route path="/booking_table">
            <BookingTablePage />
            <Footer />
            {/* <Link to="/">Home</Link> */}
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <Welcome />
      <Introduction />
      <Menu />
    </div>
  );
}

function BookingTablePage() {
  return (
    <div >
      <BookingTable />
    </div>

  );
}

// export default App;
