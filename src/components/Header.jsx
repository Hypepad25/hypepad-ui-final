import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#111' }}>
      <div style={{ color: '#ff6600', fontWeight: 'bold' }}>HYPEPAD</div>
      <nav>
        <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
        <Link to="/meme-launch" style={{ color: 'white', marginRight: '1rem' }}>Meme Launch</Link>
        <Link to="/token-launch" style={{ color: 'white', marginRight: '1rem' }}>Token Launch</Link>
        <Link to="/dashboard" style={{ color: 'white' }}>Dashboard</Link>
      </nav>
      <button style={{ backgroundColor: '#ff6600', color: '#000', padding: '0.5rem 1rem', borderRadius: '8px' }}>
        Connect Wallet
      </button>
    </header>
  );
}

export default Header;