interface LogoutModalProps {
	onLogoutSuccess: () => void;
}

function LogoutModal(props: LogoutModalProps) {

	const handleLogout = () => {
		props.onLogoutSuccess();
	};

	return (
		<label className="modal modal-bottom sm:modal-middle" htmlFor="logout-modal">
			<label className="modal-box" htmlFor="">
				<h3 className="font-bold text-lg">Do you want to logout?</h3>
				<div className="modal-action">
					<label className="btn" htmlFor="logout-modal">
						Cancel
					</label>
					<label className="btn" onClick={handleLogout}>
						Confirm
					</label>
				</div>
			</label>
		</label>
	);
}

export default LogoutModal;
