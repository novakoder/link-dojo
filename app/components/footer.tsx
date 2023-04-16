import Image from "next/image";
import AddLinkCard from "./addLinkCard";
import Auth from "./auth";

function Footer({
	loggedIn,
	setLoggedIn,
}: {
	loggedIn: boolean;
	setLoggedIn: any;
}) {
	return (
		<footer className="w-100 px-3 vh-footer d-flex align-items-center">
			<Image
				src={"logo.svg"}
				width={30}
				height={30}
				alt="Logo"
				className="me-1"
			/>
			<p className="m-0 flex-grow-1">
				LinkDojo{" "}
				<span className="text-muted">
					- become a master of linkjutsu
				</span>
			</p>
			<AddLinkCard />
			<Auth loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
		</footer>
	);
}

export default Footer;
