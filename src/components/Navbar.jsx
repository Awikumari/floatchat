import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="fc-box">FC</span>
        <span>FloatChat</span>
      </div>
      <div className="login">Login</div>
    </nav>
  );
}
