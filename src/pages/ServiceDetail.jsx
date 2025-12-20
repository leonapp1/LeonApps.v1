import React, { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Container } from "../components/atoms/Container";
import { Typography } from "../components/atoms/Typography";
import { Button } from "../components/atoms/Button";
import { ContactSection } from "../components/organisms/ContactSection";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { Check, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectCard } from "../components/molecules/ProjectCard";
import { cn } from "../utils/cn";

const getColorTheme = (id) => {
	switch (id) {
		case "desarrollo-web":
			return {
				bg: "bg-blue-50",
				text: "text-service-web",
				iconBg: "bg-white",
				accent: "bg-service-web",
			};
		case "diseno-grafico":
			return {
				bg: "bg-purple-50",
				text: "text-service-design",
				iconBg: "bg-white",
				accent: "bg-service-design",
			};
		case "marketing-publicidad":
			return {
				bg: "bg-amber-50",
				text: "text-service-marketing",
				iconBg: "bg-white",
				accent: "bg-service-marketing",
			};
		case "software-cotizacion":
			return {
				bg: "bg-emerald-50",
				text: "text-service-software",
				iconBg: "bg-white",
				accent: "bg-service-software",
			};
		default:
			return {
				bg: "bg-blue-50",
				text: "text-primary",
				iconBg: "bg-white",
				accent: "bg-primary",
			};
	}
};

export const ServiceDetail = () => {
	const { id } = useParams();
	const service = services.find((s) => s.id === id);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

	if (!service) {
		return <Navigate to="/servicios" replace />;
	}

	const theme = getColorTheme(service.id);
	const Icon = service.icon;

	// Filter projects by service category
	const relatedProjects = projects.filter(
		(p) => p.category === service.title
	);

	return (
		<>
			<div
				className={cn(
					"pt-32 pb-20 transition-colors duration-300",
					theme.bg
				)}
			>
				<Container>
					<Link
						to="/servicios"
						className="inline-flex items-center text-slate-500 hover:text-slate-800 mb-8 transition-colors"
					>
						<ArrowLeft size={20} className="mr-2" />
						Volver a servicios
					</Link>

					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
						>
							<div
								className={cn(
									"w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-6",
									theme.iconBg,
									theme.text
								)}
							>
								<Icon size={32} />
							</div>
							<Typography variant="h1" className="mb-6">
								{service.title}
							</Typography>
							<Typography variant="body" className="mb-8 text-lg">
								{service.fullDescription}
							</Typography>
							<div className="flex gap-4">
								<Link to="/contacto">
									<Button size="lg">
										Solicitar cotización
									</Button>
								</Link>
								<Link to="/proyectos">
									<Button variant="outline" size="lg">
										Ver proyectos
									</Button>
								</Link>
							</div>
						</motion.div>
						<motion.div
							className="relative"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<div className="aspect-4/3 bg-white rounded-2xl shadow-xl flex items-center justify-center p-8 relative overflow-hidden group">
								<div
									className={cn(
										"absolute inset-0 opacity-5 bg-linear-to-br",
										theme.accent
									)}
								/>
								<Icon
									size={120}
									className={cn(
										"opacity-10 group-hover:scale-110 transition-transform duration-700",
										theme.text
									)}
								/>
								<span className="text-slate-400 font-medium relative z-10">
									Imagen Ilustrativa de {service.title}
								</span>
							</div>
							{/* Decorative elements */}
							<div
								className={cn(
									"absolute -bottom-6 -right-6 w-24 h-24 rounded-xl -z-10 opacity-20",
									theme.accent
								)}
							/>
							<div
								className={cn(
									"absolute -top-6 -left-6 w-24 h-24 rounded-full -z-10 opacity-20",
									theme.accent
								)}
							/>
						</motion.div>
					</div>
				</Container>
			</div>

			<section className="py-20 bg-white">
				<Container>
					<div className="grid md:grid-cols-2 gap-16">
						<div>
							<Typography variant="h3" className="mb-6">
								Características
							</Typography>
							<ul className="space-y-4">
								{service.features.map((feature, idx) => (
									<motion.li
										key={idx}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: idx * 0.1 }}
										className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
									>
										<div
											className={cn(
												"p-1 rounded-full mt-0.5",
												theme.bg,
												theme.text
											)}
										>
											<Check size={16} />
										</div>
										<span className="text-slate-700 font-medium">
											{feature}
										</span>
									</motion.li>
								))}
							</ul>
						</div>
						<div>
							<Typography variant="h3" className="mb-6">
								Beneficios para tu negocio
							</Typography>
							<div className="grid gap-6">
								{service.benefits.map((benefit, idx) => (
									<motion.div
										key={idx}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: idx * 0.1 }}
										className="flex items-center gap-4"
									>
										<div
											className={cn(
												"w-2 h-2 rounded-full",
												theme.accent
											)}
										/>
										<Typography
											variant="h5"
											className="text-base"
										>
											{benefit}
										</Typography>
									</motion.div>
								))}
							</div>

							<div className="mt-12 p-8 bg-slate-900 rounded-2xl text-white text-center">
								<h4 className="text-xl font-bold mb-4">
									¿Listo para empezar?
								</h4>
								<p className="text-slate-300 mb-6 text-sm">
									Contáctanos hoy mismo y recibe una asesoría
									gratuita.
								</p>
								<Link to="/contacto">
									<Button className="w-full bg-white text-slate-900 hover:bg-slate-100">
										Contactar ahora
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* Related Projects Section */}
			{relatedProjects.length > 0 && (
				<section className="py-20 bg-slate-50">
					<Container>
						<div className="text-center mb-12">
							<Typography variant="h2">
								Proyectos de {service.title}
							</Typography>
							<p className="text-slate-500 mt-2">
								Ejemplos reales de nuestro trabajo en esta área
							</p>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{relatedProjects.map((p) => (
								<ProjectCard
									key={p.id}
									title={p.title}
									description={p.shortDescription}
									image={p.heroImages[0]}
									tags={p.tags.slice(0, 2)}
									link={`/proyectos/${p.id}`}
								/>
							))}
						</div>
					</Container>
				</section>
			)}

			<ContactSection />
		</>
	);
};
