"use client";

import Footer from "./components/footer";
import LinksView from "./components/linksView";
import { useState } from "react";

function Main() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [linkUpdated, setLinkUpdated] = useState(false);

	return (
		<>
			{loggedIn ? (
				<LinksView linkUpdated={linkUpdated} setLinkUpdated={setLinkUpdated} />
			) : (
				<div className="flex-grow">
					<h5 className="p-3">Not logged in</h5>
				</div>
			)}
			<Footer loggedIn={loggedIn} setLoggedIn={setLoggedIn} linkUpdated={linkUpdated} setLinkUpdated={setLinkUpdated} />
		</>
	);
}

export default Main;
