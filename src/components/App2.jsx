import '../css/style.css';
import NavBar from './NavBar';
import Intro from './Intro';
import Skills from './Skills';
import Works from './works';

const App2 = () => {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Works/>
    </div>
  );
};

export default App2;