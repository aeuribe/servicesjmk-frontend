import "./App.css"

function App() {
  return (
    <div className="background">
    <header className="header">
      <div className="logo">
        <img src="/servicesjmk.png"  alt="Services JMK Logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About Us</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
      <div className="linea-separadora"></div>
      <main className="main-content">
        <p>We're preparing for the next step</p>
        <h1>COMING SOON</h1>
          <div className="spacer"></div>
      </main>
      <footer>
        <p className="footer-text">&copy; 2024 <strong>Services JMK LLC</strong>. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App
