import React from "react";
import { motion } from "framer-motion";
import { Container } from "../atoms/Container";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
	return (
		<section className="relative overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-28 bg-linear-to-br from-blue-50 to-white">
			<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
			<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

			<Container className="relative">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Typography
							variant="small"
							className="font-bold text-primary mb-4 block uppercase tracking-wider"
						>
							Soluciones Digitales
						</Typography>
						<Typography variant="h1" className="mb-6 leading-tight">
							Impulsa tu negocio con{" "}
							<span className="text-primary">
								soluciones creativas
							</span>{" "}
							y efectivas
						</Typography>
						<Typography
							variant="body"
							className="mb-8 text-slate-600"
						>
							Te ayudamos a destacar con páginas web modernas,
							marketing estratégico y tecnología a tu medida.
							Transformamos ideas en éxito digital.
						</Typography>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link to="/servicios">
								<Button size="lg" className="w-full sm:w-auto">
									Ver Servicios{" "}
									<ArrowRight className="ml-2 w-5 h-5" />
								</Button>
							</Link>
							<Link to="/contacto">
								<Button
									variant="outline"
									size="lg"
									className="w-full sm:w-auto"
								>
									Contáctanos
								</Button>
							</Link>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="relative"
            >
            {/* Placeholder for Hero Image */}
						<div className="relative z-10 rounded-2xl overflow-hidden flex items-center justify-center group">
              <img src="./HeroPerson.png" alt="" />
						</div>
						{/* Decorative elements */}
						<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-xl -z-10 opacity-50" />
						<div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full -z-10 opacity-50" />
					</motion.div>
				</div>
			</Container>
		</section>
	);
};
