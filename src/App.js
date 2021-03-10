import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from "./component/Navbar";
import Homepage from "./pages/homepage";
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/about'><About/></Route>
        <Route exact path='/'><Homepage/></Route>
      </Switch>
    </>
  );
}

export default App;
