"use client";

import { useState, useEffect } from "react";
import pb from "../lib/pocketbase";
import { Button } from "react-bootstrap";
import LoginModal from "./loginModal";

function Auth({
	loggedIn,
	setLoggedIn,
}: {
	loggedIn: boolean;
	setLoggedIn: any;
}) {
	const [showLoginModal, setShowLoginModal] = useState(false);

	useEffect(() => {
		setLoggedIn(pb.authStore.isValid);
	}, []);

	const handleLoginSuccess = () => {
		setShowLoginModal(false);
		setLoggedIn(true);
	};

	const handleLogoutSuccess = () => {
		setShowLoginModal(false);
		setLoggedIn(false);
	};

	return (
		<div>
			{loggedIn ? (
				<Button
					onClick={() => {
						pb.authStore.clear();
						handleLogoutSuccess();
					}}>
					Logout
				</Button>
			) : (
				<Button onClick={() => setShowLoginModal(true)}>Login</Button>
			)}
			{showLoginModal && (
				<LoginModal
					onLoginSuccess={handleLoginSuccess}
					onClose={() => setShowLoginModal(false)}
				/>
			)}
		</div>
	);
}

export default Auth;
