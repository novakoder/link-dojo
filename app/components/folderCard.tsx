"use client";

import { simulateMouseClick } from "../lib/utils";
import { BiTrash, BiEdit, BiFolder, BiFolderOpen } from "react-icons/bi";
import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import DeleteModal from "./deleteModal";
import EditModal from "./editModal";
import LinkCard from "./linkCard";
import { LinkCardProps as Bookmark } from "./linkCard";

export interface FolderCardProps {
	title: string;
	id: string;
	bookmarks: Bookmark[];
	onUpdate: () => void;
}

function FolderCard(props: FolderCardProps) {
	const [isFolderOpen, setIsFolderOpen] = useState(false);
	const parent = useRef(null);

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

	function handleFolderClick() {
		setIsFolderOpen(!isFolderOpen);
	}

	useEffect(() => {
		parent.current && autoAnimate(parent.current);
	}, [parent]);

	const linkSpace = props.bookmarks.map((bookmark) => {
		return (
			<div key={bookmark.id} className="me-3 self-center">
				<LinkCard
					title={bookmark.title}
					url={bookmark.url}
					id={bookmark.id}
					folder={bookmark.folder}
					onUpdate={() => props.onUpdate()}
				/>
			</div>
		);
	});

	return (
		<div
			className="flex border border-gray-500 mt-3 me-3 rounded-2xl"
			ref={parent}>
			<div className="card bg-base-100 shadow-xl h-40 link-card">
				{!isFolderOpen && (
					<>
						<label htmlFor={"edit-" + props.id}>
							<BiEdit className="link-edit cursor-pointer" />
						</label>
						<label htmlFor={"delete-" + props.id}>
							<BiTrash className="link-trash cursor-pointer" />
						</label>
					</>
				)}

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

				<div onClick={handleFolderClick} className="cursor-pointer">
					<figure className="pt-5">
						{isFolderOpen ? (
							<BiFolderOpen
								className="-m-1"
								style={{ fontSize: "3.13rem" }}
							/>
						) : (
							<BiFolder
								className="-m-1"
								style={{ fontSize: "3.13rem" }}
							/>
						)}
					</figure>
					<div className="card-body items-center text-center py-5 px-8 select-none">
						<h2 className="card-title text-lg">{props.title}</h2>
						<p className="text-base truncate">
							{props.bookmarks.length} links
						</p>
					</div>
				</div>
			</div>

			{isFolderOpen && linkSpace}
		</div>
	);
}

export default FolderCard;
