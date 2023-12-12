import '../css/style.css';
import NavBar from './NavBar';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const App2 = () => {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default App2;