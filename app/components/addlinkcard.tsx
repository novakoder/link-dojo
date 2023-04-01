"use client";
import { Card } from "react-bootstrap";
import { BiPlus } from "react-icons/bi";

function AddLinkCard() {
	return (
		<Card
			className="bg-dark shadow m-3 border-link"
			style={{ width: "18rem" }}>
			<Card.Body>
				<div className="w-100 h-100 d-flex">
					<BiPlus size={150} color="#828282" className="m-auto" />
				</div>
			</Card.Body>
		</Card>
	);
}

export default AddLinkCard;
