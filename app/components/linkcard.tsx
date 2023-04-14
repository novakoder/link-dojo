"use client";
import { Card } from "react-bootstrap";

function LinkCard({
	title,
	url,
}: {
	title: string;
	url: string;
}) {
	let cleanUrl = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];

	return (
		<Card
			className="bg-dark shadow link-card text-center pt-3 mt-3 ms-3">
			<a
				href={url}
				target="_blank"
				className="text-decoration-none text-white">
				<Card.Img variant="top" src={"https://" + cleanUrl + "/favicon.ico"} />
				<Card.Body>
					<Card.Title className="fs-5">{title}</Card.Title>
					<Card.Text className="fs-6 text-muted">{cleanUrl}</Card.Text>
				</Card.Body>
			</a>
		</Card>
	);
}

export default LinkCard;
