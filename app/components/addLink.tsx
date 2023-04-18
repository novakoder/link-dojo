"use client";
import AddLinkModal from "./addLinkModal";

interface AddLinkCardProps {
	linkUpdated: boolean;
	setLinkUpdated: (value: boolean) => void;
}

function AddLinkCard(props: AddLinkCardProps) {
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

	const handleAddSuccess = () => {
		var element = document.querySelector("#add-link-modal");
		simulateMouseClick(element);
		props.setLinkUpdated(!props.linkUpdated);
	};

	return (
		<div>
			<label htmlFor="add-link-modal" className="btn">
				Add new
			</label>

			<input
				type="checkbox"
				id="add-link-modal"
				className="modal-toggle"
			/>
			<AddLinkModal onAddSuccess={() => handleAddSuccess()} />
		</div>
	);
}

export default AddLinkCard;
