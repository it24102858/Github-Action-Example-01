
import { useState } from "react";

function Login({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

 
const handleLogin = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    setMessage("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    localStorage.setItem("token", data.token);

    setMessage(`Welcome back, ${data.user.name}!`);

  } catch (error) {
    setMessage(error.message || "Login failed.");
  }
};


  return (
    <div className="form-container">
      <h2>Welcome Back</h2>
      <p className="subtitle">Login to your account</p>

      <form onSubmit={handleLogin}>
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
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      {message && <p className="message">{message}</p>}

      <p className="switch-text">
        Don't have an account?{" "}
        <span onClick={onSwitch}>Register</span>
      </p>
    </div>
  );
}

export default Login;
