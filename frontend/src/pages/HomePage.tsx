import { Link } from 'react-router-dom';

const HomePage = () => {
  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    // Use the variable for the background color
    backgroundColor: 'var(--background-color)', 
  };

  const textStyles: React.CSSProperties = {
    // Use the variable for the text color
    color: 'var(--text-color)',
  };

  const getStartedButtonStyles: React.CSSProperties = {
    marginRight: '15px',
    padding: '10px 20px',
    // Use the variable for the primary button color
    background: 'var(--primary-color)',
    color: 'white', // White text usually works well on a solid primary color
    textDecoration: 'none',
    borderRadius: '5px',
    border: 'none',
  };

  const loginButtonStyles: React.CSSProperties = {
    padding: '10px 20px',
    background: 'transparent',
    // Use the variable for the border color
    border: '1px solid var(--border-color)',
    // Use the variable for the text color
    color: 'var(--text-color)',
    textDecoration: 'none',
    borderRadius: '5px',
  };


  return (
    <div style={containerStyles}>
      <h1 style={textStyles}>Welcome to ImageMagicks ✨</h1>
      <p style={textStyles}>Your intelligent photo library, powered by AI.</p>
      <nav style={{ marginTop: '20px' }}>
        <Link to="/signup" style={getStartedButtonStyles}>
          Get Started
        </Link>
        <Link to="/login" style={loginButtonStyles}>
          Login
        </Link>
      </nav>
    </div>
  );
};

export default HomePage;