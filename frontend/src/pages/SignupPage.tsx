import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle user creation here.
    // For now, we'll just navigate to the dashboard.
    console.log('Signing up...');
    navigate('/dashboard');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/">&larr; Back to Home</Link>
      <div style={{ maxWidth: '400px', margin: '50px auto' }}>
        <h2>Create your Account</h2>
        <form onSubmit={handleSignup}>
          {/* Add form fields like email, password, confirm password */}
          <button type="submit" style={{ width: '100%', padding: '10px', background: '#28a745', color: 'white', border: 'none' }}>
            Create Account
          </button>
        </form>
        <p style={{ marginTop: '20px', textAlign: 'center' }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;