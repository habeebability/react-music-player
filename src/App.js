import './App.css';
import MainBody from './components/MainBody';
import SideNav from './components/SideNav';
import songs from './components/songs';

function App() {
  return (
    <div className="app">
      <SideNav/>
      <MainBody/>
      
    </div>
  );
}

export default App;
