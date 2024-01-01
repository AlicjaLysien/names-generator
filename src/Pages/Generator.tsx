import {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {generateNames, generatedNamesChinese, generatedNamesChinesePinyin, generatedNamesFantasy, generatedNamesJapanese, numberOfNames as number} from "../Store/generator";
import Genre, {isGenre} from "../Types/Genre";
import {ArrayWithNames} from "../Types/Name";
import "../Styles/Chinese.scss";
import "../Styles/Fantasy.scss";
import "../Styles/Japanese.scss";

function Generator() {
	const params = useParams();
	const genre: string = params.genre as string;
	const className: string = genre.charAt(0).toUpperCase() + genre.slice(1) as string;
	const navigate  = useNavigate();

	useEffect(() => {
		if(!isGenre(genre)) navigate("/");
	}, [genre]);

	const dispatch = useDispatch();

	const chineseNames: ArrayWithNames | [] = useSelector(generatedNamesChinese);
	const chineseNamesPinyin: ArrayWithNames | [] = useSelector(generatedNamesChinesePinyin);
	const fantasyNames: ArrayWithNames | [] = useSelector(generatedNamesFantasy);
	const japaneseNames: ArrayWithNames | [] = useSelector(generatedNamesJapanese);
	const numberOfNames: number = useSelector(number);

	const imageUrl = {
		chinese: "https://www.wallpaperflare.com/brown-sailboat-illustration-drawing-city-water-ship-chinese-architecture-wallpaper-uqp/download",
		fantasy: "https://wallpaperaccess.com/world-of-warcraft#google_vignette",
		japanese: "https://www.sportskeeda.com/anime/my-happy-marriage-everything-know-miyo-saimori-dream-sight-ability"
	};


	const createDivs = (): JSX.Element[] => {
		const divs: JSX.Element[] = [];
		const usedNames: ArrayWithNames | [] = (genre === "chinese" && chineseNames) ||
					(genre === "fantasy" && fantasyNames) || (japaneseNames);
		for(let i = 0; i < numberOfNames; i++){
			divs.push(
				<div key={i}>
					{usedNames[i]}
					{genre === "chinese" && <> - {chineseNamesPinyin[i]}</>}
				</div>
			);
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
				<p>Image for background reused from: 
					{genre === "chinese" && imageUrl.chinese}
					{genre === "fantasy" && imageUrl.fantasy}
					{genre === "japanese" && imageUrl.japanese}
				</p>
			</footer>
		</div>
	);
}

export default Generator;
