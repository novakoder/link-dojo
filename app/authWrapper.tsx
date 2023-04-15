"use client";

import Auth from "./components/auth";
import Home from "./page";
import { useState } from "react";

function authWrapper() {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<div>
			<Auth loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
			<Home loggedIn={loggedIn} />
		</div>
	);
}

export default authWrapper;
