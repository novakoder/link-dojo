"use client";
import { useState, useEffect } from "react";
import LinkCard from "./linkCard";
import AddLinkCard from "./addLinkCard";
import pb from "../lib/pocketbase";

interface Bookmark {
	title: string;
	url: string;
}

function LinksView({ loggedIn }: { loggedIn: boolean }) {
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
				}));
				setBookmarks(formattedBookmarks);
			}
		}

		fetchBookmarks();
	}, []);

	const linkSpace = bookmarks.map((bookmark) => {
		return (
			<div className="col m-0 p-0" key={bookmark.title}>
				<LinkCard title={bookmark.title} url={bookmark.url} />
			</div>
		);
	});

	return (
		<div className="d-flex">
			<div className="row m-0 row-cols-auto">
				{linkSpace}
				<AddLinkCard />
			</div>
		</div>
	);
}

export default LinksView;
