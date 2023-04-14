"use client";
import LinkCard from "./components/linkcard";
import AddLinkCard from "./components/addlinkcard";

const links = [
	{ title: "GitHub", url: "https://github.com/" },
	{ title: "Google Drive", url: "https://drive.google.com/" },
	{ title: "Stack Overflow", url: "https://stackoverflow.com/" },
	{ title: "Google", url: "https://www.google.com/" },
	{ title: "YouTube", url: "https://www.youtube.com/" },
	{ title: "Facebook", url: "https://www.facebook.com/" },
	{ title: "Twitter", url: "https://twitter.com/" },
	{ title: "Instagram", url: "https://www.instagram.com/" },
	{ title: "Reddit", url: "https://www.reddit.com/" },
	{ title: "USDJPY", url: "https://it.tradingview.com/symbols/USDJPY/" },
];

const cols = 8;

const linkSpace = links.map((link) => {
	return (
		<div className="col m-0 p-0">
			<LinkCard title={link.title} url={link.url} key={link.title} />
		</div>
	);
});

export default function Home() {
	return (
		<div className="d-flex">
			<div className="row m-0 row-cols-auto">
				{linkSpace}
				<AddLinkCard />
			</div>
		</div>
	);
}
