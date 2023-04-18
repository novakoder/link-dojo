"use client";
import { useState, useEffect } from "react";
import LinkCard from "./linkCard";
import pb from "../lib/pocketbase";

interface Bookmark {
	title: string;
	url: string;
	id: string;
}

interface LinksViewProps {
	linkUpdated: boolean;
	setLinkUpdated: (value: boolean) => void;
}

function LinksView(props: LinksViewProps) {
	const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

	useEffect(() => {
		async function fetchBookmarks() {
			const bookmarks = await pb.collection("bookmarks").getFullList({
				filter: "user = '" + pb.authStore.model?.id + "'",
			});

			if (bookmarks) {
				const formattedBookmarks = bookmarks.map((bookmark) => ({
					title: bookmark.title,
					url: bookmark.link,
					id: bookmark.id,
				}));
				setBookmarks(formattedBookmarks);
			}
		}

		fetchBookmarks();
	}, [props.linkUpdated]);

	const linkSpace = bookmarks.map((bookmark) => {
		return (
			<div key={bookmark.title}>
				<LinkCard
					title={bookmark.title}
					url={bookmark.url}
					id={bookmark.id}
					onUpdate={() => props.setLinkUpdated(!props.linkUpdated)}
				/>
			</div>
		);
	});

	return (
		<div className="flex-grow">
			<div className="flex flex-wrap ms-5">{linkSpace}</div>
		</div>
	);
}

export default LinksView;
