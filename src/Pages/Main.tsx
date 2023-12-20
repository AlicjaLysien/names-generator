import {Link} from "react-router-dom";
import "../Styles/Main.scss";

function Main() {
	return (
		<div className="Main">
			<h1>Names generator</h1>
			<h4>Choose name category to generate:</h4>
			<Link to="/generator/fantasy">
				<button>fantasy</button>
			</Link>
			<Link to="/generator/japanese">
				<button>japanese</button>
			</Link>
		</div>
	);
}

export default Main;
