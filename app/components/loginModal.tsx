import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import pb from "../lib/pocketbase";

interface LoginModalProps {
	onLoginSuccess: () => void;
	onClose: () => void;
}

function LoginModal(props: LoginModalProps) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showModal, setShowModal] = useState(true);

	const handleLogin = async () => {
		try {
			const authData = await pb
				.collection("users")
				.authWithPassword(email, password);
			setShowModal(false);
			props.onLoginSuccess();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Modal show={showModal} onHide={props.onClose}>
			<Modal.Header className="bg-dark" closeButton>
				<Modal.Title>Login</Modal.Title>
			</Modal.Header>
			<Modal.Body className="bg-dark">
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer className="bg-dark">
				<Button variant="secondary" onClick={props.onClose}>
					Close
				</Button>
				<Button onClick={handleLogin}>
					Login
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default LoginModal;
