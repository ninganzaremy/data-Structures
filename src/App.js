import React from "react";
import NonConstructibleChange from "./arrays/NonConstructibleChange";
import SmallestDifference from "./arrays/SmallestDifference";
import SortedSquaredArray from "./arrays/SortedSquaredArray";
import ThreeNumberSum from "./arrays/ThreeNumberSum";
import TournamentWinner from "./arrays/TournamentWinner";

import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="arrays">
				<NonConstructibleChange />
				<SmallestDifference />
				<SortedSquaredArray />
				<ThreeNumberSum />
				<TournamentWinner />
			</div>
		</div>
	);
}

export default App;
