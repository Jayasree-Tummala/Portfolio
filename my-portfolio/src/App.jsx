import Education from "./components/Education";
import Home from "./components/Home";
import Interests from "./components/interests";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="parent bg-gray-950">
      <div className="header">
        <div className="title">JT.</div>
        <nav className="navbar">
          <a>Home</a>
          <a>Education</a>
          <a>Projects</a>
          <a>Other Interests</a>
        </nav>
      </div>
      <div>
        <Home />
        <Education></Education>
        <Projects></Projects>
        <Interests></Interests>
      </div>
    </div>
  );
}

export default App;
