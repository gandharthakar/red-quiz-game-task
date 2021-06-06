import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import GameStart from './components/GameStart';
import GameInstructions from './components/GameInstructions';
import PlayGround from './components/PlayGround';
import ScoreLeaderboard from './components/ScoreLeaderboard';
import CurrentLeaders from './components/CurrentLeaders';

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/start-game/:id" component={GameStart} />
					<Route path="/game-instructions/" component={GameInstructions} />
					<Route path="/play-ground/:id" component={PlayGround} />
					<Route path="/score-leaderboard/:id" component={ScoreLeaderboard} />
					<Route path="/current-leaders" component={CurrentLeaders} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
