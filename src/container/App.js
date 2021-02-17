import './App.css';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { projects } from '../assets/projects-content';
import {  } from '../components/IconButton';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
}

export default App;
