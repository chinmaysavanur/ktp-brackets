import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import BracketsPage from './pages/BracketsPage';
import BracketDetail from './pages/BracketDetail';
import LeaderboardPage from './pages/LeaderboardPage';
import PersonalPage from './pages/PersonalPage';
import './App.css';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path='/'>
          <Redirect to='/home' />
        </Route> */}
        <Route exact path='/' component={LoginPage}></Route>
        <Route path='/home' component={HomePage}></Route>
        <Route exact path='/brackets' component={BracketsPage}></Route>
        <Route path='/brackets/:tid' component={BracketDetail}></Route>
        <Route path='/leaderboard' component={LeaderboardPage}></Route>
        <Route path='/personal' component={PersonalPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
