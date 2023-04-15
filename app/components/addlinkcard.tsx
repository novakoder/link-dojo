"use client";
import { Button } from "react-bootstrap";
import { BiPlus } from "react-icons/bi";

function AddLinkCard() {
	return (
		<Button className="bg-primary add-card-btn position-absolute bottom-0 end-0 me-3">
			<BiPlus size={37} />
		</Button>
	);
}

export default AddLinkCard;
