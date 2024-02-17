import './App.css';
import NavBar from './components/bars/NavBar.jsx';
import PrincipalBar from './components/bars/PrincipalBar.jsx';
import Marketplace from './components/marketplace/Marketplace.jsx';

function App() {
  return <div className="App">
    <PrincipalBar />
    <NavBar />

    {/* <Marketplace/> */}
  </div>;
}

export default App;
