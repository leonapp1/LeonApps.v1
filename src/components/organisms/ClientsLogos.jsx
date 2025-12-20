import React from "react";
import { Container } from "../atoms/Container";
import { Typography } from "../atoms/Typography";

const clients = [
	"LogoEETV.png",
	"LogoMMJ.png",
	"LogoTerralpa.png",
	"LogoEETV.png",
	"LogoMMJ.png",
	"LogoTerralpa.png",
];

export const ClientsLogos = () => {
	return (
		<section className="py-20 bg-white">
			<Container>
				<div className="text-center mb-12">
					<Typography variant="h3" className="text-slate-800">
						Algunos de nuestros clientes
					</Typography>
				</div>

				<div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
					{clients.map((client, index) => (
						<div
							key={index}
							className="h-16 rounded px-6 flex items-center "
						>
							<img src={`./Logoso/${client}`} alt="" className="h-12 w-auto" />
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};
