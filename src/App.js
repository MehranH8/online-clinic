import Main from "./components/Main/Main";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Main />
      </Router>
    </div>
  );
}

export default App;


