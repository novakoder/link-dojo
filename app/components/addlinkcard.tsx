"use client";
import { Button } from "react-bootstrap";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";
import AddLinkModal from "./addLinkModal";

function AddLinkCard() {
	const [showAddLinkModal, setShowAddLinkModal] = useState(false);

	return (
		<div>
			<Button
				onClick={() => setShowAddLinkModal(true)}
				className="bg-primary add-card-btn position-absolute bottom-0 end-0 me-3">
				<BiPlus size={37} />
			</Button>

			{showAddLinkModal && (
				<AddLinkModal
					onAddSuccess={() => setShowAddLinkModal(false)}
					onClose={() => setShowAddLinkModal(false)}
				/>
			)}
		</div>
	);
}

export default AddLinkCard;
