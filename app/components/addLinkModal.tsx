import { useState } from "react";
import pb from "../lib/pocketbase";

interface addLinkModalProps {
	onAddSuccess: () => void;
}

function AddLinkModal(props: addLinkModalProps) {
	const [title, setTitle] = useState("");
	const [link, setLink] = useState("");

	const handleAdd = async () => {
		try {
			const data = {
				title: title,
				link: link,
				user: pb.authStore.model?.id,
			};

			const record = await pb.collection("bookmarks").create(data);
			setTitle("");
			setLink("");
			props.onAddSuccess();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<label className="modal" htmlFor="add-link-modal">
			<label className="modal-box" htmlFor="">
				<h3 className="font-bold text-lg">Add link</h3>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Your title</span>
					</label>
					<input
						type="text"
						placeholder="Title"
						className="input input-bordered w-full max-w-xs"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Your link</span>
					</label>
					<input
						type="text"
						placeholder="Url"
						className="input input-bordered w-full max-w-xs"
						value={link}
						onChange={(e) => setLink(e.target.value)}
					/>
				</div>
				<div className="modal-action">
					<label className="btn" htmlFor="add-link-modal">
						Close
					</label>
					<label className="btn" onClick={handleAdd}>
						Add
					</label>
				</div>
			</label>
		</label>
	);
}

export default AddLinkModal;
