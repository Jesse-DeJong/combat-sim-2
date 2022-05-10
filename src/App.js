import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LayoutProvider } from './context/SpellLayoutProvider';

// import Nav from "./components/nav";
import Combat from "./pages/Combat";

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <LayoutProvider>
        <Routes>

          <Route exact path="/react-gh-pages" element={<Combat />} />

        </Routes>
      </LayoutProvider>
    </Router>
  );
}

export default App;
