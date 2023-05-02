"use client";
import { BiTrash, BiShowAlt, BiEdit } from "react-icons/bi";
import DeleteModal from "./deleteModal";
import EditModal from "./editModal";

interface LinkCardProps {
	title: string;
	url: string;
	id: string;
	folder: string;
	onUpdate: () => void;
}

function LinkCard(props: LinkCardProps) {
	let cleanUrl = props.url
		.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
		.split("/")[0];

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
		<div className="card bg-base-100 shadow-xl link-card border border-gray-500">
			<BiShowAlt className="link-show" />

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
				url={props.url}
				folder={false}
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
				folder={false}
			/>

			{props.folder === '' ? (
				<a href={props.url} target="_blank" className="h-40">
					<figure className="pt-5">
						<img
							src={"https://icon.horse/icon/" + cleanUrl}
							width={42}
							height={42}
							alt="Logo"
						/>
					</figure>
					<div className="card-body items-center text-center py-5 px-8">
						<h2 className="card-title text-lg">{props.title}</h2>
						<p className="text-base">{cleanUrl}</p>
					</div>
				</a>
			) : (
				<a href={props.url} target="_blank" className="h-36">
					<figure className="pt-4">
						<img
							src={"https://icon.horse/icon/" + cleanUrl}
							width={42}
							height={42}
							alt="Logo"
						/>
					</figure>
					<div className="card-body items-center text-center py-4 px-8">
						<h2 className="card-title text-lg">{props.title}</h2>
						<p className="text-base">{cleanUrl}</p>
					</div>
				</a>
			)}
		</div>
	);
}

export default LinkCard;
