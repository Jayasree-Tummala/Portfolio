import Education from "./components/Education";
import Header from "./components/Header";
import Home from "./components/Home";
import Interests from "./components/interests";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="main  bg-[#0F0F0F]">
      <div className="parent  text-white w-full max-w-full h-screen">
        <div className="w-full max-w-full h-screen">
          <Header />
          <Home />
          <Education></Education>
          <Projects></Projects>
          <Interests></Interests>
        </div>
      </div>
    </div>
  );
}

export default App;
