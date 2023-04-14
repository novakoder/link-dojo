"use client";
import { Button } from "react-bootstrap";
import { BiPlus } from "react-icons/bi";

function AddLinkCard() {
	return (
		<Button className="bg-primary add-card-btn">
			<BiPlus size={48} />
		</Button>
	);
}

export default AddLinkCard;
