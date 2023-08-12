import pb from "../lib/pocketbase"
import { useState } from "react"

interface EditModalProps {
	onConfirm: () => void
	id: string
	title: string
	url: string
	folder: boolean
}

function EditModal(props: EditModalProps) {
	const [title, setTitle] = useState(props.title)
	const [link, setLink] = useState(props.url)

	const handleEdit = async () => {
		try {
			if (props.folder) {
				const data = {
					title: title
				}

				const record = await pb
					.collection("folders")
					.update(props.id, data)
			} else {
				const data = {
					title: title,
					link: link
				}

				const record = await pb
					.collection("bookmarks")
					.update(props.id, data)
			}
			props.onConfirm()
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<label
			className="modal modal-bottom sm:modal-middle"
			htmlFor={"edit-" + props.id}>
			<label className="modal-box" htmlFor="">
				<h3 className="font-bold text-lg">Edit</h3>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Edit title</span>
					</label>
					<input
						type="text"
						placeholder="Title"
						className="input input-bordered w-full max-w-xs"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				{!props.folder && (
					<div className="form-control">
						<label className="label">
							<span className="label-text">Edit link</span>
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
					<label className="btn" htmlFor={"edit-" + props.id}>
						Cancel
					</label>
					<label className="btn" onClick={handleEdit}>
						Confirm
					</label>
				</div>
			</label>
		</label>
	)
}

export default EditModal
