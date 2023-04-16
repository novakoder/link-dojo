import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import pb from "../lib/pocketbase";

interface addLinkModalProps {
	onAddSuccess: () => void;
	onClose: () => void;
}

function AddLinkModal(props: addLinkModalProps) {
	const [title, setTitle] = useState("");
	const [link, setLink] = useState("");
	const [showModal, setShowModal] = useState(true);

	const handleAdd = async () => {
		try {
			const data = {
				title: title,
				link: link,
				user: pb.authStore.model?.id,
			};

			const record = await pb.collection("bookmarks").create(data);
			setShowModal(false);
			props.onAddSuccess();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Modal show={showModal} onHide={props.onClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add link</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId="formBasicTitle">
						<Form.Label>Title</Form.Label>
						<Form.Control
							type="title"
							placeholder="Enter title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicLink">
						<Form.Label>Link</Form.Label>
						<Form.Control
							type="link"
							placeholder="link"
							value={link}
							onChange={(e) => setLink(e.target.value)}
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={props.onClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleAdd}>
					Add
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default AddLinkModal;
