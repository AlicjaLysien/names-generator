import {NavLink} from "react-router-dom";
import {genres} from "../Types/Genre";
import "../Styles/Menu.scss";

function Menu() {
	return (
		<div className="Menu">
			{genres.map((genre, index) =>
				<NavLink key={`${genre}-${index}`} to={`/generator/${genre}`}>
					{genre}
				</NavLink>)
			}
		</div>
	);
}

export default Menu;
