
import { useState } from "react";

function Register({ onSwitch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

 
const handleRegister = async (e) => {
  e.preventDefault();

  if (!name || !email || !password || !confirmPassword) {
    setMessage("Please fill in all fields.");
    return;
  }

  if (password.length < 6) {
    setMessage("Password must contain at least 6 characters.");
    return;
  }

  if (password !== confirmPassword) {
    setMessage("Passwords do not match.");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:5000/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    setMessage("Registration successful! You can now login.");

  } catch (error) {
    setMessage(error.message || "Registration failed.");
  }
};

  return (
    <div className="form-container">
      <h2>Create Account</h2>
      <p className="subtitle">Register a new account</p>

      <form onSubmit={handleRegister}>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>

      {message && <p className="message">{message}</p>}

      <p className="switch-text">
        Already have an account?{" "}
        <span onClick={onSwitch}>Login</span>
      </p>
    </div>
  );
}

export default Register;
