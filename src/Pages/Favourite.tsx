import {useSelector} from "react-redux";
import {favouriteNames} from "../Store/favourite";
import FavouriteType from "../Types/Favourite";
import "../Styles/Main.scss";
import "../Styles/Favourite.scss";

function Favourite() {

	const names: FavouriteType = useSelector(favouriteNames);
	console.log(names);
	return (
		<>
			<div className="Main Favourite">
				<h1>Favourite</h1>
				<main>
					<div>
						{names.map((name, index) => 
							<div key={`${name}-${index}`}>
								{name}
							</div>
						)}
					</div>
				</main>
			</div>
		</>
	);
}

export default Favourite;
