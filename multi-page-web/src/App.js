import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";

function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to my React app! This is the home page.</p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About Page</h1>
      <p>This app was made using React and React Router.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1>Contact Page</h1>
      <p>You can reach me at student@email.com</p>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">MyApp</span>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;