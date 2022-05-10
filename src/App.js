import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Nav from "./components/nav";
import Combat from "./pages/Combat";

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route exact path="/" element={<Combat />} />
      </Routes>
    </Router>
  );
}

export default App;
