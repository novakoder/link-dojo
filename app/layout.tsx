import "./styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
	title: "LinkDojo",
	description: "Become a master of linkjutsu",
};

function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" data-theme="dark">
			<body className="h-screen flex flex-col">
				{children}
			</body>
		</html>
	);
}

export default RootLayout;
