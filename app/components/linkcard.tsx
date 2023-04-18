"use client";
import { BiTrash, BiShowAlt, BiEdit } from "react-icons/bi";
import DeleteModal from "./deleteModal";

interface LinkCardProps {
	title: string;
	url: string;
	id: string;
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

	return (
		<div className="card w-44 bg-base-100 shadow-xl mt-5 me-3 link-card">
			<BiShowAlt className="link-show" />
			<BiEdit className="link-edit" />

			<label htmlFor={"delete-" + props.id}>
				<BiTrash className="link-trash cursor-pointer" />
			</label>
			<input
				type="checkbox"
				id={"delete-" + props.id}
				className="modal-toggle"
			/>
			<DeleteModal onConfirm={handleDeleteConfirm} id={props.id} />

			<a href={props.url} target="_blank">
				<figure className="pt-5">
					<img
						src={"https://" + cleanUrl + "/favicon.ico"}
						width={42}
						height={42}
						alt="Logo"
					/>
				</figure>
				<div className="card-body items-center text-center p-5 pt-5">
					<h2 className="card-title">{props.title}</h2>
					<p>{cleanUrl}</p>
				</div>
			</a>
		</div>
	);
}

export default LinkCard;
