import { useNavigate } from "react-router-dom";
import './App.css'

function Page1() {

  const navigate = useNavigate();

  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
          <div style={{ background: "white", borderRadius: "8px", padding: "48px", width: "340px", boxShadow: "0 2px 12px rgba(0,0,0,0.1)" }}>
            <h2 style={{ marginBottom: "24px", fontSize: "24px", textAlign: "center" }}>Login</h2>

            <label style={{ fontSize: "13px", fontWeight: "600" }}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ display: "block", width: "100%", padding: "10px", marginBottom: "16px", marginTop: "4px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px" }}
            />

            <label style={{ fontSize: "13px", fontWeight: "600" }}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ display: "block", width: "100%", padding: "10px", marginBottom: "24px", marginTop: "4px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "14px" }}
            />

            <button
              onClick={handleSubmit}
              style={{ width: "100%", padding: "11px", backgroundColor: "#4f46e5", color: "white", border: "none", borderRadius: "4px", fontSize: "15px", cursor: "pointer" }}
            >
              Sign In
            </button>

            <p style={{ marginTop: "20px", fontSize: "13px", color: "gray", textAlign: "center" }}>
              Don't have an account? <a href="#" style={{ color: "#4f46e5" }}>Sign up</a>
            </p>
          </div>
        </div>

        <p style={{ fontSize: '54px' }}>
          Home page work here Eric
        </p>

        <button onClick={() => navigate("/main")} style={{ backgroundColor: 'blue', color: 'white' }}>
          Route me to main page(Sam and Alex work here)
        </button>

        <button onClick={() => navigate("/transaction")} style={{ backgroundColor: 'pink', color: 'black' }}>
          Route me to transaction page(Nathaniel work here)
        </button>


      </div>

    </>
  )
}

export default Page1;