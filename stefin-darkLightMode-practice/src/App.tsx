import { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  const [isDark, setIsDark] = useState(false);

  function toggleDarkMode() {
    setIsDark(prevState => !prevState)
  }

  return (
    <div className="container">
      <Navbar darkMode={isDark} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={isDark} />
    </div>
  );
}

export default App;
