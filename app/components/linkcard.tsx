"use client";
import { Card } from "react-bootstrap";

function LinkCard({
	title,
	url,
}: {
	title: string;
	url: string;
}) {
	return (
		<Card
			className="bg-dark shadow m-3 link-card">
			<a
				href={url}
				target="_blank"
				className="text-decoration-none text-white">
				<Card.Img variant="top" src={url + "favicon.ico"} className="p-5" />
				<Card.Body>
					<Card.Title className="text-center">{title}</Card.Title>
					<Card.Text className="text-center">{url}</Card.Text>
				</Card.Body>
			</a>
		</Card>
	);
}

export default LinkCard;
