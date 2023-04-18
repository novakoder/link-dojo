import Image from "next/image";
import AddLink from "./addLink";
import Auth from "./auth";

interface FooterProps {
	loggedIn: boolean;
	setLoggedIn: any;
	linkUpdated: boolean;
	setLinkUpdated: (value: boolean) => void;
}

function Footer(props: FooterProps) {
	return (
		<footer className="footer items-center text-neutral-content self-end px-3 pb-3">
			<div className="items-center grid-flow-col h-8 mt-3">
				<Image src={"logo.svg"} width={32} height={32} alt="Logo" />
				<p className="text-base"><b>LinkDojo</b> - become a master of linkjutsu</p>
			</div>
			<div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
				{props.loggedIn && <AddLink linkUpdated={props.linkUpdated} setLinkUpdated={props.setLinkUpdated} />}
				<Auth loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
			</div>
		</footer>
	);
}

export default Footer;
