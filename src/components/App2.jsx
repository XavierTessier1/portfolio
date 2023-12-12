import '../css/style.css';
import NavBar from './NavBar';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer2 from './Footer2';

const App2 = () => {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer2/>
    </div>
  );
};

export default App2;