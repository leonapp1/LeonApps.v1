import React from "react";
import { Container } from "../atoms/Container";
import { Typography } from "../atoms/Typography";

const clients = [
	"LogoEETV.png",
	"LogoMMJ.png",
	"LogoTerralpa.png",
	"LogoPsicologos.svg",
	"LogoEETV.png",
	"LogoMMJ.png",
	"LogoTerralpa.png",
];

// Duplicate clients for seamless loop
const duplicatedClients = [...clients, ...clients, ...clients];

export const ClientsLogos = () => {
	return (
		<section className="py-20 bg-white overflow-hidden">
			<Container>
				<div className="text-center mb-12">
					<Typography variant="h3" className="text-slate-800">
						Algunos de nuestros clientes
					</Typography>
				</div>

				<div className="relative w-full overflow-hidden">
					<div className="flex w-max animate-scroll">
						{duplicatedClients.map((client, index) => (
							<div
								key={index}
								className="h-16 px-8 flex items-center justify-center min-w-[200px] opacity-70 grayscale hover:grayscale-0 transition-all duration-300"
							>
								<img
									src={`./Logoso/${client}`}
									alt={`Cliente ${index}`}
									className="h-12 w-auto object-contain"
								/>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};
