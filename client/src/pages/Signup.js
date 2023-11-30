import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(email, password);
    await signup(email, password, name, address, postalCode);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <label>Name:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <label>Address:</label>
      <input
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />

      <label>PostalCode:</label>
      <input
        type="text"
        onChange={(e) => setPostalCode(e.target.value)}
        value={postalCode}
      />

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
