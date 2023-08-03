import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar title="Text App" homeText="Home" featureText="About" />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" Component={About}></Route>
          <Route exact path="/" Component={TextForm}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

