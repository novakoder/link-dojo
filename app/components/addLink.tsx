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
		<>
			<div className="dropdown dropdown-top dropdown-end">
				<label tabIndex={0} className="btn">
					Add new
				</label>
				<ul
					tabIndex={0}
					className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mb-1 border border-gray-600">
					<li>
						<label htmlFor="add-link-modal">
							Create link
						</label>
					</li>
					<li>
						<label>Create folder</label>
					</li>
				</ul>
			</div>

			<input
				type="checkbox"
				id="add-link-modal"
				className="modal-toggle"
			/>
			<AddLinkModal onAddSuccess={() => handleAddSuccess()} />
		</>
	);
}

export default AddLinkCard;
