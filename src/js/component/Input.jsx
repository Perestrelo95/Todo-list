import React from "react";
import List from "./List.jsx";
import Title from "./Title.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Title />
			<List />
		</React.Fragment>
	);
};

export default Home;
