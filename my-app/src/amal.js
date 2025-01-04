
import React, { useState } from "react";

const Amal = () => {
  const [view, setView] = useState("login");

  const handleForgotPassword = () => {
    setView("forgotPassword");
  };

  const handleRegister = () => {
    setView("register");
  };

  const handleBackToLogin = () => {
    setView("login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f2f3f5",
        flexDirection: "column",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "35px",
          fontWeight: "800",
          color: "#3f51b5",
          marginBottom: "40px",
          textAlign: "center",
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginTop: "50px",
        }}
      >
        Al Amal Pharmacy
      </h1>

      <div
        style={{
          width: "400px",
          padding: "30px",
          backgroundColor: "#fff",
          borderRadius: "15px",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        {view === "login" && (
          <div>
            <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#3f51b5" }}>
              Login to Your Account
            </h2>
            <form>
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    color: "#555",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    fontSize: "16px",
                    backgroundColor: "#f9f9f9",
                    transition: "border-color 0.3s ease",
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="password"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    color: "#555",
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    fontSize: "16px",
                    backgroundColor: "#f9f9f9",
                    transition: "border-color 0.3s ease",
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "15px",
                  backgroundColor: "#3f51b5",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "18px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#283593")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#3f51b5")}
              >
                Login
              </button>
            </form>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                onClick={handleForgotPassword}
                style={{
                  color: "#3f51b5",
                  background: "none",
                  border: "none",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Forgot Password?
              </button>
              <br />
              <div
                style={{
                  marginTop: "15px",
                  textAlign: "center",
                }}
              >
                <span>Don't have an account yet?</span>
                <br />
                <button
                  onClick={handleRegister}
                  style={{
                    marginTop: "15px",
                    padding: "12px",
                    backgroundColor: "#3f51b5",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    cursor: "pointer",
                    width: "100%",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#283593")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#3f51b5")}
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        )}

        {view === "forgotPassword" && (
          <div>
            <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#3f51b5" }}>
              Reset Password
            </h2>
            <form>
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="email"
                  style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#555" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    fontSize: "16px",
                    backgroundColor: "#f9f9f9",
                    transition: "border-color 0.3s ease",
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "15px",
                  backgroundColor: "#3f51b5",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "18px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#283593")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#3f51b5")}
              >
                Reset Password
              </button>
            </form>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                onClick={handleBackToLogin}
                style={{
                  width: "100%",
                  padding: "15px",
                  backgroundColor: "#f2f3f5",
                  color: "#000",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Back to Login
              </button>
            </div>
          </div>
        )}

        {view === "register" && (
          <div>
            <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#3f51b5" }}>
              Create Account
            </h2>
            <form>
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="name"
                  style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#555" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    fontSize: "16px",
                    backgroundColor: "#f9f9f9",
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="lastName"
                  style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#555" }}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    fontSize: "16px",
                    backgroundColor: "#f9f9f9",
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="phone"
                  style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#555" }}
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your phone number"
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    fontSize: "16px",
                    backgroundColor: "#f9f9f9",
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="email"
                  style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#555" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    fontSize: "16px",
                    backgroundColor: "#f9f9f9",
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="password"
                  style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#555" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    fontSize: "16px",
                    backgroundColor: "#f9f9f9",
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "15px",
                  backgroundColor: "#3f51b5",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "18px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#283593")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#3f51b5")}
              >
                Create Account
              </button>
            </form>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                onClick={handleBackToLogin}
                style={{
                  width: "100%",
                  padding: "15px",
                  backgroundColor: "#f2f3f5",
                  color: "#000",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Back to Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Amal;