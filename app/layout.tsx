import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";
import Footer from "./components/footer";

export const metadata = {
	title: "LinkDojo",
	description: "Become a master of linkjutsu",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-dark text-white">
				{children}
				<Footer />
			</body>
		</html>
	);
}
