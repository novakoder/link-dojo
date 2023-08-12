import { useState } from "react"
import pb from "../lib/pocketbase"

interface addModalProps {
	onAddSuccess: () => void
	folder: boolean
}

function AddModal(props: addModalProps) {
	const { folder } = props
	const [title, setTitle] = useState("")
	const [link, setLink] = useState("")

	const handleAdd = async () => {
		try {
			if (folder) {
				const data = {
					title: title,
					user: pb.authStore.model?.id
				}

				const record = await pb.collection("folders").create(data)
			} else {
				// This will prepend 'http://' to link if it can't find the :// indicating protocol.
				var linkFinal =
					link.indexOf("://") === -1 ? "http://" + link : link

				const data = {
					title: title,
					link: linkFinal,
					user: pb.authStore.model?.id
				}

				const record = await pb.collection("bookmarks").create(data)
			}

			setTitle("")
			setLink("")
			props.onAddSuccess()
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<label
			className="modal modal-bottom sm:modal-middle"
			htmlFor={folder ? "add-folder-modal" : "add-link-modal"}>
			<label className="modal-box" htmlFor="">
				<h3 className="font-bold text-lg">
					{folder ? "Add folder" : "Add link"}
				</h3>
				<div className="form-control">
					<label className="label">
						<span className="label-text">
							{folder ? "Folder name" : "Your title"}
						</span>
					</label>
					<input
						type="text"
						placeholder="Title"
						className="input input-bordered w-full max-w-xs"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				{!folder && (
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
				)}
				<div className="modal-action">
					<label
						className="btn"
						htmlFor={
							folder ? "add-folder-modal" : "add-link-modal"
						}>
						Close
					</label>
					<label className="btn" onClick={handleAdd}>
						Add
					</label>
				</div>
			</label>
		</label>
	)
}

export default AddModal
