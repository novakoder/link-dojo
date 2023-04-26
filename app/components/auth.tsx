"use client";

import { useEffect } from "react";
import pb from "../lib/pocketbase";
import AuthModal from "./authModal";
import LogoutModal from "./logoutModal";
import { BiLogOut } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";

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
		pb.authStore.clear();
		var element = document.querySelector("#logout-modal");
		simulateMouseClick(element);
		setLoggedIn(false);
	};

	return (
		<>
			{loggedIn ? (
				<label
					htmlFor="logout-modal"
					className="btn text-lg">
					<div className="-ms-1">
						<BiLogOut />
					</div>
				</label>
			) : (
				<label htmlFor="auth-modal" className="btn text-lg">
					<div className="-ms-1">
						<BiLogIn />
					</div>
				</label>
			)}

			<input type="checkbox" id="auth-modal" className="modal-toggle" />
			<AuthModal onLoginSuccess={handleLoginSuccess} />

			<input type="checkbox" id="logout-modal" className="modal-toggle" />
			<LogoutModal onLogoutSuccess={handleLogoutSuccess} />
		</>
	);
}

export default Auth;
