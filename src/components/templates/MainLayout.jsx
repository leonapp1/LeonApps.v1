import React from "react";
import { Navbar } from "../organisms/Navbar";
import { Footer } from "../organisms/Footer";

export const MainLayout = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="grow pt-20">{children}</main>
			<Footer />
		</div>
	);
};
