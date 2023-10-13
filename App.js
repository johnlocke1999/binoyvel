import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
// import 'js/dist/js.bundle.min.js';
import * as $ from 'jquery';
import Navbar from './navbar';
import Footer from './footer';



function App() {
  const s = {
    width: "px",
    height: "30px",
    color: "white",
    backgroundColor: "tomato"
  }

  var hr = {
    color: "silver"
  }
  return (
   <>
   <Navbar/>

    <Footer/>
   </>
  );
}

export default App;
