import Home from './Home'
import './App.css';

function App() {
  const Prolang=['Bharathi','Ansari','chinna','Dhanabal','Elango','Francies','Davit','Sakthi','Preeti','Kavitha','Vicky']
  return (
    <div className="App">
     <Home lang={Prolang}/>
    </div>
  );
}

export default App;
