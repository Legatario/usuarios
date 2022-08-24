import './App.css';
import Create from './components/Create.js';
import Read from './components/Read.js'
import Update from './components/Update.js';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App">
        <div>
          <ul>
            <li>
              <Link to={"/create"}>Create</Link>
            </li>
            <li>
              <Link to={"/Read"}>Read</Link>
            </li>
          </ul>
          <Routes>
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
          </Routes>
        </div>
      </div>
    </Router> 
  );
}




export default App;
