import Main from "./components/Main";
import PageNotFound from "./components/PageNotFound";

import { BrowserRouter as Router, Routes, Route, Link, useRoutes, useNavigate } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
