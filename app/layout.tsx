import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";
import Footer from "./components/footer";
import AuthWrapper from "./authWrapper";

export const metadata = {
	title: "LinkDojo",
	description: "Become a master of linkjutsu",
};

function RootLayout() {
	return (
		<html lang="en">
			<body className="bg-dark text-white">
				<AuthWrapper />
				<Footer />
			</body>
		</html>
	);
}

export default RootLayout;