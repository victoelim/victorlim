import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from "./component/Navbar";
import Homepage from "./pages/homepage";
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey:`${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTHDOMAIN}`,
  databaseURL: `${process.env.REACT_APP_FIREBASE_DATABASEURL}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECTID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APPID}`,
  measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENTID}`
};

firebase.initializeApp(firebaseConfig);

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
