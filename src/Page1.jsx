import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css'

function Page1() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);



  const handleLogin = () => {
    if (username === "admin" && password === "password123") {
      setLoggedIn(true);
      navigate("/main");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <div>

      <pre style={{ textAlign: "center"}}>
        {`___________
/            \\
/              \\
/________________\\
|             |
|  __   ___   |
| |__|  |,|   |
|_______| |___|

`}
        </pre>

        <div style={{ background: "white", padding: "48px", width: "340px", borderRadius: "8px", boxShadow: "0 2px 12px rgba(0,0,0,0.1)" }}>
          <h2 style={{ textAlign: "center", marginBottom: "24px", color: "black" }}>Login</h2>
          <input type="text" placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value); setError(""); }} style={{ width: "92%", padding: "12px", marginBottom: "12px", borderRadius: "4px", border: "1px solid #ccc" }} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); setError(""); }} style={{ width: "92%", padding: "12px", marginBottom: "12px", borderRadius: "4px", border: "1px solid #ccc" }} />
          {error && <p style={{ color: "red", fontSize: "14px", margin: "0 0 12px 0" }}>{error}</p>}
          <button onClick={handleLogin} style={{ width: "100%", padding: "12px", backgroundColor: "black", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            Login
          </button>
        </div>

      </div>

    </>
  );
}

export default Page1;