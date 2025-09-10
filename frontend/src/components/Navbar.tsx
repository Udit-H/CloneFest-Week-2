import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const navStyles: React.CSSProperties = {
    width: '240px',
    minHeight: '100vh', // Ensure it spans the full screen height
    background: 'var(--secondary-bg-color)',
    padding: '20px',
    borderRight: '1px solid var(--border-color)',
    display: 'flex', // This is crucial
    flexDirection: 'column', // This is crucial
  };

  const linkStyles: React.CSSProperties = {
    textDecoration: 'none',
    color: 'var(--text-color)', // Use theme variable
    marginBottom: '20px',
    fontSize: '1.1em',
    padding: '8px',
    borderRadius: '5px',
  };

  const logoutButtonStyles: React.CSSProperties = {
    width: '100%',
    padding: '10px',
    border: '1px solid var(--border-color)',
    borderRadius: '5px',
    cursor: 'pointer',
    background: 'transparent',
    color: 'var(--text-color)',
    textAlign: 'center',
    marginTop: 'auto', // This is the magic property
  };

  return (
    <nav style={navStyles}>
      <h3 style={{ marginBottom: '30px' }}>ImageMagicks</h3>
      <input 
        type="search" 
        placeholder="Vector search..." 
        style={{ width: '100%', padding: '8px', marginBottom: '30px' }}
      />
      <Link to="/dashboard" style={linkStyles}>Gallery</Link>
      <Link to="/albums" style={linkStyles}>Albums</Link>
      <Link to="/upload" style={linkStyles}>Upload</Link>

      {/* 👇 Here is the logout button with the correct style 👇 */}
      <button onClick={handleLogout} style={logoutButtonStyles}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;