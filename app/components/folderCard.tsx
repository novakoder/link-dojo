"use client";
import { BiTrash, BiEdit, BiFolder, BiFolderOpen } from "react-icons/bi";
import DeleteModal from "./deleteModal";
import EditModal from "./editModal";

interface Bookmark {
	title: string;
	url: string;
	id: string;
	folder: string;
}

interface FolderCardProps {
	title: string;
	id: string;
	links: Bookmark[];
	onUpdate: () => void;
}

function FolderCard(props: FolderCardProps) {
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

	function handleDeleteConfirm() {
		var element = document.querySelector("#delete-" + props.id);
		simulateMouseClick(element);
		props.onUpdate();
	}

	function handleEditConfirm() {
		var element = document.querySelector("#edit-" + props.id);
		simulateMouseClick(element);
		props.onUpdate();
	}

	return (
		<div className="card bg-base-100 shadow-xl mt-3 me-3 link-card border-gray-400 border">
			<label htmlFor={"edit-" + props.id}>
				<BiEdit className="link-edit cursor-pointer" />
			</label>
			<input
				type="checkbox"
				id={"edit-" + props.id}
				className="modal-toggle"
			/>
			<EditModal
				onConfirm={handleEditConfirm}
				id={props.id}
				title={props.title}
				url=""
				folder={true}
			/>

			<label htmlFor={"delete-" + props.id}>
				<BiTrash className="link-trash cursor-pointer" />
			</label>
			<input
				type="checkbox"
				id={"delete-" + props.id}
				className="modal-toggle"
			/>
			<DeleteModal
				onConfirm={handleDeleteConfirm}
				id={props.id}
				folder={true}
			/>

			<figure className="pt-5">
				<BiFolder className="-m-1" style={{ fontSize: "3.13rem" }} />
			</figure>
			<div className="card-body items-center text-center py-5 px-8">
				<h2 className="card-title text-lg">{props.title}</h2>
				<p className="text-base">
					{props.links.length} links
				</p>
			</div>
		</div>
	);
}

export default FolderCard;
