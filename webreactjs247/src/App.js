import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
// import Player from './Players';
import Main from './components/Main';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      {/* <Player></Player> */}
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
