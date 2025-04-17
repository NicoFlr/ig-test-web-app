import { Routes, Route, Navigate } from 'react-router-dom';
import { Suggestions } from './pages/suggestions/Suggestions';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/suggestions" replace />} />
      <Route path="/suggestions" element={<Suggestions />} />
    </Routes>
  );
}

export default App;
