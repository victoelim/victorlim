import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from "./component/Navbar/Navbar";
import Homepage from "./pages/homepage";

function App() {
  return (
    <>
      <Navbar/>
      <Homepage/>
    </>
  );
}

export default App;
