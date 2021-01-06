import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Header></Header>

      <Switch>
        <HomePage></HomePage>
      </Switch>
    </Router>
  );
}

export default App;
