"use client";

import AddModal from "./addModal";
import { simulateMouseClick } from "../lib/utils";

interface AddLinkCardProps {
	linkUpdated: boolean;
	setLinkUpdated: (value: boolean) => void;
}

function AddLinkCard(props: AddLinkCardProps) {
	const handleLinkAddSuccess = () => {
		var element = document.querySelector("#add-link-modal");
		simulateMouseClick(element);
		props.setLinkUpdated(!props.linkUpdated);
	};

	const handleFolderAddSuccess = () => {
		var element = document.querySelector("#add-folder-modal");
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
						<label htmlFor="add-link-modal">Create link</label>
					</li>
					<li>
						<label htmlFor="add-folder-modal">Create folder</label>
					</li>
				</ul>
			</div>

			<input
				type="checkbox"
				id="add-link-modal"
				className="modal-toggle"
			/>
			<AddModal
				folder={false}
				onAddSuccess={() => handleLinkAddSuccess()}
			/>

			<input
				type="checkbox"
				id="add-folder-modal"
				className="modal-toggle"
			/>
			<AddModal
				folder={true}
				onAddSuccess={() => handleFolderAddSuccess()}
			/>
		</>
	);
}

export default AddLinkCard;
