import React from "react";
import AboutUs from "../components/aboutUs/AboutUs";
import Cours from "../components/course/Cours";

import HeroSection from "../components/hero/HeroSection";
import Instructor from "../components/meetInstructor/Instructor";

function Home() {
	return (
		<>
			<HeroSection />
			<Cours />
			<AboutUs />
			<Instructor />
		</>
	);
}

export default Home;
