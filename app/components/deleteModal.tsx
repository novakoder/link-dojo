import pb from "../lib/pocketbase";

interface DeleteModalProps {
	onConfirm: () => void;
	id: string;
}

function DeleteModal(props: DeleteModalProps) {

	const handleDelete = async () => {
		try {
			await pb.collection('bookmarks').delete(props.id);
			props.onConfirm();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<label className="modal" htmlFor={"delete-" + props.id}>
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
	);
}

export default DeleteModal;
