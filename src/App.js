import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Player from './Players';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Player></Player>
      <Footer></Footer>
    </div>
  );
}

export default App;
