import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";

export const metadata = {
	title: "LinkNinja",
	description: "Diventa anche tu un maestro del linkjiutsu",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="w-100 h-100 bg-dark text-white">
				{children}
				<Footer />
			</body>
		</html>
	);
}
