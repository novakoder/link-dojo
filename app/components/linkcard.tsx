"use client";
import { Card } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";

function LinkCard({ title, url }: { title: string; url: string }) {
	let cleanUrl = url
		.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
		.split("/")[0];

	return (
		<Card className="shadow link-card bg-dark text-center pt-3 mt-3 ms-3">
			<BiTrash className="link-trash" />
			<BiShowAlt className="link-show" />
			<a
				href={url}
				target="_blank"
				className="text-decoration-none text-white">
				<Card.Img
					variant="top"
					src={"https://" + cleanUrl + "/favicon.ico"}
				/>
				<Card.Body>
					<Card.Title className="fs-5">{title}</Card.Title>
					<Card.Text className="fs-6 text-muted">
						{cleanUrl}
					</Card.Text>
				</Card.Body>
			</a>
		</Card>
	);
}

export default LinkCard;
