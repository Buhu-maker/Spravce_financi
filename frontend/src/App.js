import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransakcePage from './pages/TransakcePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TransakcePage />} />
      </Routes>
    </Router>
  );
}

export default App;
