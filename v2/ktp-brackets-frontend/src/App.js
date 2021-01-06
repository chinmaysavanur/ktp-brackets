import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Header></Header>

      <Switch>
        <Route exact path='/' component={HomePage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
