"use client"

import { useState, useEffect, useRef } from "react"
import autoAnimate from "@formkit/auto-animate"
import LinkCard from "./linkCard"
import pb from "../lib/pocketbase"
import { LinkCardProps as Bookmark } from "./linkCard"

interface LinksViewProps {
	linkUpdated: boolean
	setLinkUpdated: (value: boolean) => void
}

function LinksView(props: LinksViewProps) {
	const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
	const parent = useRef(null)

	useEffect(() => {
		async function fetchBookmarks() {
			const bookmarks = await pb.collection("bookmarks").getFullList({
				filter: "user = '" + pb.authStore.model?.id + "'"
			})

			if (bookmarks) {
				const formattedBookmarks = bookmarks.map((bookmark) => {
					return {
						title: bookmark.title,
						url: bookmark.link,
						id: bookmark.id,
						folder: bookmark.folder
					}
				})

				return formattedBookmarks
			}
		}

		async function fetchData() {
			const bookmarks = await fetchBookmarks()

			setBookmarks(bookmarks as Bookmark[])
		}

		fetchData()
	}, [props.linkUpdated])

	useEffect(() => {
		parent.current && autoAnimate(parent.current)
	}, [parent])

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
			)
		}
	})

	return (
		<div className="flex-grow overflow-y-auto">
			<div className="basic-grid ms-3" ref={parent}>
				{linkSpace}
			</div>
		</div>
	)
}

export default LinksView
