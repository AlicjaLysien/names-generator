import Menu from "../Components/Menu";
import "../Styles/Main.scss";

function Main() {
	return (
		<>
			<div className="Main">
				<h1>Names generator</h1>
				<h4>Choose name category to generate:</h4>
				<Menu />
			</div>
		</>
	);
}

export default Main;
