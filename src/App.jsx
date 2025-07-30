import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MemeLaunch from './pages/MemeLaunch';
import TokenLaunch from './pages/TokenLaunch';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meme-launch" element={<MemeLaunch />} />
        <Route path="/token-launch" element={<TokenLaunch />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;