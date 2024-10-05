import './styles/App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Deporte from './components/Deporte';
import Tecnologia from './components/Tecnologia';

function App() {
  return (
    <div>
      <Navbar />
      <div id="landing">
        <LandingPage />
      </div>
      <div id="deporte" className="section">
        <Deporte />
      </div>
      <div id="tecnologia" className="section">
        <Tecnologia />
      </div>
    </div>
  );
}

export default App;
