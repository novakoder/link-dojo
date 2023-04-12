'use client'
import { Button } from "react-bootstrap";

function Footer() {
	return (
		<footer className="position-absolute bottom-0 w-100 py-3 px-4">
			LinkDojo
			<Button variant="primary" className="float-end">auto</Button>
			<Button variant="primary" className="float-end me-2">6</Button>
			<Button variant="primary" className="float-end me-2">3</Button>
		</footer>
	);
}

export default Footer;
