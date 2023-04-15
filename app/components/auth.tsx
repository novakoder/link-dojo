"use client";

import { useState, useEffect } from "react";
import pb from "../lib/pocketbase";
import { Button } from "react-bootstrap";
import LoginModal from "./loginModal";

function Auth({ loggedIn, setLoggedIn }: { loggedIn: boolean; setLoggedIn: any}) {
	const [showLoginModal, setShowLoginModal] = useState(false);

	useEffect(() => {
		setLoggedIn(pb.authStore.isValid);
	}, []);

	const handleLoginSuccess = () => {
		setLoggedIn(true);
	};

	const handleLogoutSuccess = () => {
		setLoggedIn(false);
	};

	return (
		<div className="position-absolute top-0 end-0 m-3">
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
