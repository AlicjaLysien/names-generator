import {NavLink} from "react-router-dom";
import "../Styles/Menu.scss";

function Menu() {
	return (
		<div className="Menu">
			<NavLink to="/generator/fantasy">
				<button>fantasy</button>
			</NavLink>
			<NavLink to="/generator/japanese">
				<button>japanese</button>
			</NavLink>
			<NavLink to="/generator/chinese">
				<button>chinese</button>
			</NavLink>
		</div>
	);
}

export default Menu;
