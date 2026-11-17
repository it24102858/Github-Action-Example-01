
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="app">
      <div className="auth-card">
        <div className="brand">
          <h1>AuthApp</h1>
          <p>Simple authentication application</p>
        </div>

        {isLogin ? (
          <Login onSwitch={() => setIsLogin(false)} />
        ) : (
          <Register onSwitch={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
}

export default App;
