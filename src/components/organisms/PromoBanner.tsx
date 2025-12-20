import React from "react";
import { Container } from "../atoms/Container";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { Link } from "react-router-dom";

export const PromoBanner: React.FC = () => {
	return (
		<section className="py-16 bg-secondary relative overflow-hidden">
			{/* Background patterns */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
				<div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full" />
				<div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full" />
				<div className="absolute top-1/2 left-1/2 w-60 h-60 border-4 border-white rounded-full" />
			</div>

			<Container className="relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="text-center lg:text-left flex flex-col items-center justify-center">
						<div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-bold mb-6">
							Termina en 08 Días 04:34:20
						</div>
						<Typography
							variant="h2"
							className="text-slate-900 mb-4"
						>
							Promoción Exclusiva
						</Typography>
						<Typography
							variant="h5"
							className="font-normal text-slate-800 mb-8"
						>
							Haz crecer tu negocio con nuestra oferta limitada
						</Typography>

						<div className="bg-white/90 backdrop-blur rounded-xl p-6 mb-8 max-w-lg mx-auto lg:mx-0 shadow-lg">
							<p className="text-lg text-center text-slate-800">
								¡Obtén un{" "}
								<span className="font-bold text-red-500">
									10% de descuento
								</span>{" "}
								en tu primer proyecto si contratas{" "}
								<span className="font-bold text-red-500">
									antes del 31 de Enero 2025!
								</span>
							</p>
						</div>

						<Link to="/contacto">
							<Button className="bg-primary text-white hover:bg-primary-dark w-full sm:w-auto shadow-xl">
								Aprovechar la oferta ahora
							</Button>
						</Link>
						<p className="mt-4 text-xs text-slate-700 opacity-80">
							No dejes pasar esta oportunidad
						</p>
					</div>

					<div className="hidden lg:block relative">
						<div className="absolute inset-0 bg-white/20 rounded-full blur-3xl transform scale-75" />
						{/* Image Placeholder */}
						<div className="relative z-10 flex justify-center">
							<div className=" flex items-center justify-center">
								<img src="./PromoPerson.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
