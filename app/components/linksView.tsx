"use client";
import { useState, useEffect } from "react";
import LinkCard from "./linkCard";
import FolderCard from "./folderCard";
import pb from "../lib/pocketbase";

interface Bookmark {
	title: string;
	url: string;
	id: string;
	folder: string;
}

interface Folder {
	title: string;
	id: string;
}

interface LinksViewProps {
	linkUpdated: boolean;
	setLinkUpdated: (value: boolean) => void;
}

function LinksView(props: LinksViewProps) {
	const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
	const [folders, setFolders] = useState<Folder[]>([]);

	useEffect(() => {
		async function fetchBookmarks() {
			const bookmarks = await pb.collection("bookmarks").getFullList({
				filter: "user = '" + pb.authStore.model?.id + "' && folder = ''",
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

				setBookmarks(formattedBookmarks);
			}
		}

		async function fetchFolders() {
			const folders = await pb.collection("folders").getFullList({
				filter: "user = '" + pb.authStore.model?.id + "'",
			});

			if (folders) {
				const formattedFolders = folders.map((folder) => {
					return {
						title: folder.title,
						id: folder.id,
					};
				});

				setFolders(formattedFolders);
			}
		}

		fetchBookmarks();
		fetchFolders();
	}, [props.linkUpdated]);

	const folderSpace = folders.map((folder) => {
		return (
			<div key={folder.id}>
				<FolderCard
					title={folder.title}
					id={folder.id}
					onUpdate={() => props.setLinkUpdated(!props.linkUpdated)}
				/>
			</div>
		);
	});

	const linkSpace = bookmarks.map((bookmark) => {
		if (bookmark.folder === "") {
			return (
				<div key={bookmark.id}>
					<LinkCard
						title={bookmark.title}
						url={bookmark.url}
						id={bookmark.id}
						onUpdate={() =>
							props.setLinkUpdated(!props.linkUpdated)
						}
					/>
				</div>
			);
		}
	});

	return (
		<div className="flex-grow overflow-y-scroll">
			<div className="flex flex-wrap ms-5">
				{folderSpace}
				{linkSpace}
			</div>
		</div>
	);
}

export default LinksView;
