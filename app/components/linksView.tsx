"use client";

import { useState, useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import LinkCard from "./linkCard";
import FolderCard from "./folderCard";
import pb from "../lib/pocketbase";
import { LinkCardProps as Bookmark } from "./linkCard";
import { FolderCardProps as Folder } from "./folderCard";

interface LinksViewProps {
	linkUpdated: boolean;
	setLinkUpdated: (value: boolean) => void;
}

function LinksView(props: LinksViewProps) {
	const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
	const [folders, setFolders] = useState<Folder[]>([]);
	const parent = useRef(null);

	useEffect(() => {
		async function fetchBookmarks() {
			const bookmarks = await pb.collection("bookmarks").getFullList({
				filter: "user = '" + pb.authStore.model?.id + "'",
			});

			if (bookmarks) {
				const formattedBookmarks = bookmarks.map((bookmark) => {
					return {
						title: bookmark.title,
						url: bookmark.link,
						id: bookmark.id,
						folder: bookmark.folder,
					};
				});

				return formattedBookmarks;
			}
		}

		async function fetchFolders(bookmarks: Bookmark[]) {
			const folders = await pb.collection("folders").getFullList({
				filter: "user = '" + pb.authStore.model?.id + "'",
			});

			if (folders) {
				const formattedFolders = folders.map((folder) => {
					const folderBookmarks = bookmarks.filter(
						(bookmark) => bookmark.folder === folder.id
					);

					return {
						title: folder.title,
						id: folder.id,
						bookmarks: folderBookmarks,
					};
				});

				return formattedFolders;
			}
		}

		async function fetchData() {
			const bookmarks = await fetchBookmarks();
			const formattedFolders = await fetchFolders(
				bookmarks as Bookmark[]
			);

			setBookmarks(bookmarks as Bookmark[]);
			setFolders(formattedFolders as Folder[]);
		}

		fetchData();
	}, [props.linkUpdated]);

	useEffect(() => {
		parent.current && autoAnimate(parent.current);
	}, [parent]);

	const folderSpace = folders.map((folder) => {
		return (
			<div key={folder.id}>
				<FolderCard
					title={folder.title}
					id={folder.id}
					bookmarks={folder.bookmarks}
					onUpdate={() => props.setLinkUpdated(!props.linkUpdated)}
				/>
			</div>
		);
	});

	const linkSpace = bookmarks.map((bookmark) => {
		if (bookmark.folder === "") {
			return (
				<div key={bookmark.id} className="mt-3 me-3">
					<LinkCard
						title={bookmark.title}
						url={bookmark.url}
						id={bookmark.id}
						folder={bookmark.folder}
						onUpdate={() =>
							props.setLinkUpdated(!props.linkUpdated)
						}
					/>
				</div>
			);
		}
	});

	return (
		<div className="flex-grow overflow-y-auto">
			<div className="flex flex-wrap ms-5" ref={parent}>
				{folderSpace}
				{linkSpace}
			</div>
		</div>
	);
}

export default LinksView;
