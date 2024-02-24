import {useDispatch, useSelector} from "react-redux";
import {favouriteNames, removeName} from "../Store/favourite";
import FavouriteType from "../Types/Favourite";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Main.scss";
import "../Styles/Favourite.scss";

function Favourite() {

	const dispatch = useDispatch();

	const names: FavouriteType = useSelector(favouriteNames);
	console.log(names.length);
	return (
		<>
			<div className="Main Favourite">
				<h1>Favourite</h1>
				<main>
					<div>
						{names.length ? names.map((name, index) => 
							<div key={`${name}-${index}`}>
								{name}
								<button 
									className="icon"
									onClick={() => dispatch(removeName({name: name as string}))}>
									<FontAwesomeIcon 
										icon={faTrash}
									/>
								</button>
							</div>
						) : <span>Nothing to show</span>}
					</div>
				</main>
			</div>
		</>
	);
}

export default Favourite;
