import "./globals.css";

import { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
	title: {
		absolute: "Beranda — Diskresi",
		template: "%s — Diskresi",
	},
};

export default function RootLayout({
	children,
}: {
		children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
		>
			<body className="bg-slate-100 text-slate-950">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
