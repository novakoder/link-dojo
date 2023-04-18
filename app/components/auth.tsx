"use client";

import { useEffect } from "react";
import pb from "../lib/pocketbase";
import AuthModal from "./authModal";

function Auth({
	loggedIn,
	setLoggedIn,
}: {
	loggedIn: boolean;
	setLoggedIn: any;
}) {
	useEffect(() => {
		setLoggedIn(pb.authStore.isValid);
	}, []);

	const mouseClickEvents = ["mousedown", "click", "mouseup"];
	function simulateMouseClick(element: any) {
		mouseClickEvents.forEach((mouseEventType) =>
			element.dispatchEvent(
				new MouseEvent(mouseEventType, {
					view: window,
					bubbles: true,
					cancelable: true,
					buttons: 1,
				})
			)
		);
	}

	const handleLoginSuccess = () => {
		var element = document.querySelector("#auth-modal");
		simulateMouseClick(element);
		setLoggedIn(true);
	};

	const handleLogoutSuccess = () => {
		setLoggedIn(false);
	};

	return (
		<div>
			{loggedIn ? (
				<button
					onClick={() => {
						pb.authStore.clear();
						handleLogoutSuccess();
					}}
					className="btn">
					Logout
				</button>
			) : (
				<label htmlFor="auth-modal" className="btn">
					Login
				</label>
			)}
			<input type="checkbox" id="auth-modal" className="modal-toggle" />
			<AuthModal onLoginSuccess={handleLoginSuccess} />
		</div>
	);
}

export default Auth;
