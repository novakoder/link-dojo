import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
	title: "LinkDojo",
	description: "Become a master of linkjutsu",
};

function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-dark text-white">
				{children}
			</body>
		</html>
	);
}

export default RootLayout;
