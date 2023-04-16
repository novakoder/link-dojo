"use client";

import Auth from "./components/auth";
import LinksView from "./components/linksView";
import { useState } from "react";

function Main() {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<div>
			<Auth loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
			{loggedIn ? (
				<LinksView loggedIn={loggedIn} />
			) : (
				<div className="d-flex">
					<p>Not logged in</p>
				</div>
			)}
		</div>
	);
}

export default Main;
