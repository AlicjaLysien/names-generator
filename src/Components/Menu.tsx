import {NavLink} from "react-router-dom";
import "../Styles/Menu.scss";

function Menu() {
	return (
		<div className="Menu">
			<NavLink to="/generator/fantasy">
				fantasy
			</NavLink>
			<NavLink to="/generator/japanese">
				japanese
			</NavLink>
			<NavLink to="/generator/chinese">
				chinese
			</NavLink>
		</div>
	);
}

export default Menu;
