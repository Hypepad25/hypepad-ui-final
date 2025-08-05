import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routeConfig } from './routes/index.js';
import { Navbar } from './components/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routeConfig.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
