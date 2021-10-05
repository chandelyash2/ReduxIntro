import './App.css';
import Profile from './components/Profile'
import Login  from './components/Login';
import ChangeColor  from './components/ChangeColor'
function App() {
  return (
    <div className="App">
  <Profile/>
  <Login/>
  <div style={{marginTop:'2rem'}}>
  <ChangeColor/>
  </div>


    </div>
  );
}

export default App;
