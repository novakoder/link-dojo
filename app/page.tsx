"use client";

import Footer from "./components/footer";
import LinksView from "./components/linksView";
import { useState } from "react";

function Main() {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<div>
			{loggedIn ? (
				<LinksView />
			) : (
				<div className="vh-main">
					<h5 className="p-3">Not logged in</h5>
				</div>
			)}
			<Footer loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
		</div>
	);
}

export default Main;
