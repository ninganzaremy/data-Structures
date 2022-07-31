import React from "react";
import NonConstructibleChange from "./Arrays/NonConstructibleChange";
import SmallestDifference from "./Arrays/SmallestDifference";
import SortedSquaredArray from "./Arrays/SortedSquaredArray";
import ThreeNumberSum from "./Arrays/ThreeNumberSum";
import TournamentWinner from "./Arrays/TournamentWinner";

import "./App.css";

function App() {
	return (
		<div className="App">
			<NonConstructibleChange />
			<SmallestDifference />
			<SortedSquaredArray />
			<ThreeNumberSum />
			<TournamentWinner />
		</div>
	);
}

export default App;
