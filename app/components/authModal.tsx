import { useState } from "react";
import pb from "../lib/pocketbase";

interface AuthModalProps {
	onLoginSuccess: () => void;
}

function AuthModal(props: AuthModalProps) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async () => {
		try {
			const authData = await pb
				.collection("users")
				.authWithPassword(email, password);
			props.onLoginSuccess();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<label className="modal modal-bottom sm:modal-middle" htmlFor="auth-modal">
			<label className="modal-box" htmlFor="">
				<h3 className="font-bold text-lg">Login</h3>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Your Email</span>
					</label>
					<input
						type="text"
						placeholder="info@site.com"
						className="input input-bordered w-full max-w-xs"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Your password</span>
					</label>
					<input
						type="password"
						placeholder="Password"
						className="input input-bordered w-full max-w-xs"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="modal-action">
					<label className="btn" htmlFor="auth-modal">
						Close
					</label>
					<label className="btn" onClick={handleLogin}>
						Login
					</label>
				</div>
			</label>
		</label>
	);
}

export default AuthModal;
