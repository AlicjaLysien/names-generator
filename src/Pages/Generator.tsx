import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {generateNames, generatedNamesFantasy, generatedNamesJapanese, numberOfNames as number} from "../Store/generator";
import Genre from "../Types/Genre";
import {ArrayWithNames} from "../Types/Name";
import "../Styles/Fantasy.scss";
import "../Styles/Japanese.scss";

function Generator() {
	const params = useParams();
	const genre: string = params.genre as string;
	const className: string = genre.charAt(0).toUpperCase() + genre.slice(1) as string;

	const dispatch = useDispatch();

	const fantasyNames: ArrayWithNames | [] = useSelector(generatedNamesFantasy);
	const japaneseNames: ArrayWithNames | [] = useSelector(generatedNamesJapanese);
	const numberOfNames: number = useSelector(number);

	const imageUrl = {
		fantasy: "https://wallpaperaccess.com/world-of-warcraft#google_vignette",
		japanese: "https://www.sportskeeda.com/anime/my-happy-marriage-everything-know-miyo-saimori-dream-sight-ability"
	};


	const createDivs = (): JSX.Element[] => {
		const divs: JSX.Element[] = [];
		const usedNames: ArrayWithNames | [] = genre === "fantasy" ? fantasyNames : japaneseNames;
		for(let i = 0; i < numberOfNames; i++){
			divs.push(<div key={i}>{usedNames[i]}</div>);
		}
		return divs;
	};

	return (
		<div className={className}>
			<main>
				<h1>{className} generator</h1>
				<button onClick={() => dispatch(generateNames({genre: genre as Genre}))}>generate</button>

				<div>
					{createDivs()}
				</div>
			</main>
			<footer>
				<p>Image for background reused from: {genre === "fantasy" && imageUrl.fantasy}{genre === "japanese" && imageUrl.japanese}</p>
			</footer>
		</div>
	);
}

export default Generator;
