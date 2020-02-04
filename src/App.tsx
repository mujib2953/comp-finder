import React from 'react';
import { Provider } from "react-redux";

import { store } from "./store/store";

// import Add from "./components/Add";
// import View from "./components/View";
import GameHolder from "./components/Container/GameHolder";

const App = () => {
	return (
		<Provider
			store={ store }
		>
			{/* <Add />
			<View /> */}
			<GameHolder />
		</Provider>
	);
}

export default App;
