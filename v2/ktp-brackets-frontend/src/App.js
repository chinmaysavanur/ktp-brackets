import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BracketsPage from './pages/BracketsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import PersonalPage from './pages/PersonalPage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home' component={HomePage}></Route>
        <Route path='/brackets' component={BracketsPage}></Route>
        <Route path='/leaderboard' component={LeaderboardPage}></Route>
        <Route path='/personal' component={PersonalPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
