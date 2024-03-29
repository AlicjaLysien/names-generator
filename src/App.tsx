import {HashRouter as Router, Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {generateNames} from "./Store/generator";
import Favourite from "./Pages/Favourite";
import Generator from "./Pages/Generator";
import Main from "./Pages/Main";
import NotFound from "./Pages/NotFound";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(generateNames({genre: "chinese"}));
		dispatch(generateNames({genre: "fantasy"}));
		dispatch(generateNames({genre: "japanese"}));
	}, []);
	
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/favourite" element={<Favourite />} />
				<Route path="/generator/:genre" element={<Generator />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
