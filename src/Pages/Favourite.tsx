import {useSelector} from "react-redux";
import {favouriteNames} from "../Store/favourite";
import "../Styles/Main.scss";
import FavouriteType from "../Types/Favourite";

function Favourite() {

	const names: FavouriteType = useSelector(favouriteNames);
	console.log(names);
	return (
		<>
			<div className="Main">
				<h1>Favourite</h1>
				{names.map((name, index) => 
					<span key={`${name}-${index}`}>
						{name}
					</span>
					
				)}
			</div>
		</>
	);
}

export default Favourite;
