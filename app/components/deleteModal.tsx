import pb from "../lib/pocketbase"

interface DeleteModalProps {
	onConfirm: () => void
	id: string
	folder: boolean
}

function DeleteModal(props: DeleteModalProps) {
	const handleDelete = async () => {
		try {
			if (props.folder) {
				const bookmarks = await pb.collection("bookmarks").getFullList({
					filter:
						"user = '" +
						pb.authStore.model?.id +
						"' && folder = '" +
						props.id +
						"'"
				})

				if (bookmarks) {
					bookmarks.forEach(async (bookmark) => {
						await pb.collection("bookmarks").delete(bookmark.id)
					})
				}

				await pb.collection("folders").delete(props.id)
			} else {
				await pb.collection("bookmarks").delete(props.id)
			}
			props.onConfirm()
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<label
			className="modal modal-bottom sm:modal-middle"
			htmlFor={"delete-" + props.id}>
			<label className="modal-box" htmlFor="">
				<h3 className="font-bold text-lg">Delete</h3>
				<div className="modal-action">
					<label className="btn" htmlFor={"delete-" + props.id}>
						Cancel
					</label>
					<label className="btn" onClick={handleDelete}>
						Confirm
					</label>
				</div>
			</label>
		</label>
	)
}

export default DeleteModal
