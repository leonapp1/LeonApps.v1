import React, { useState, useEffect } from "react";
import { Container } from "../atoms/Container";
import { Typography } from "../atoms/Typography";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
	{
		name: "Carlos Ríos",
		role: "CEO, Tienda Virtual Ríos",
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		content:
			"Gracias al equipo logramos modernizar nuestra tienda online. El diseño es atractivo, la navegación es intuitiva y hemos visto un aumento del 30% en nuestras ventas desde el lanzamiento.",
		rating: 5,
	},
	{
		name: "María López",
		role: "Directora, Agencia Creativa López",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		content:
			"Confié en ellos para el diseño de mi branding y los resultados superaron mis expectativas. La atención al detalle y la creatividad que aportaron fueron increíbles. ¡100% recomendados!",
		rating: 5,
	},
	{
		name: "Pedro García",
		role: "Gerente, Eventos García",
		image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		content:
			"La estrategia de marketing digital que desarrollaron para nuestra empresa fue un éxito. Alcanzamos más clientes en menos tiempo y nuestras redes sociales nunca habían estado tan activas.",
		rating: 5,
	},
	{
		name: "Ana Martínez",
		role: "Fundadora, TechSolutions",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		content:
			"Implementar el software de cotización transformó nuestro flujo de trabajo. Ahora cerramos tratos en la mitad de tiempo y nuestros clientes agradecen la rapidez y profesionalismo.",
		rating: 5,
	},
	{
		name: "Luis Torres",
		role: "Director de Marketing, Innova Corp",
		image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		content:
			"Excelente servicio y atención personalizada. Entendieron perfectamente nuestras necesidades y nos entregaron una solución web robusta y escalable. Seguiremos trabajando con ellos.",
		rating: 5,
	},
];

export const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			nextTestimonial();
		}, 5000);

		return () => clearInterval(timer);
	}, []);

	const nextTestimonial = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + testimonials.length) % testimonials.length
		);
	};

	const getCardStyle = (index) => {
		const len = testimonials.length;
		let offset = (index - currentIndex + len) % len;
		if (offset > len / 2) offset -= len;

		// offset is now: 0 (center), 1 (right), -1 (left), 2 (far right), -2 (far left)

		const styles = {
			0: {
				zIndex: 30,
				x: "0%",
				scale: 1,
				opacity: 1,
				display: "block",
			},
			1: {
				zIndex: 20,
				x: "60%",
				scale: 0.8,
				opacity: 0.6,
				display: "block",
			},
			"-1": {
				zIndex: 20,
				x: "-60%",
				scale: 0.8,
				opacity: 0.6,
				display: "block",
			},
			2: {
				zIndex: 10,
				x: "120%",
				scale: 0.6,
				opacity: 0,
				display: "block",
			},
			"-2": {
				zIndex: 10,
				x: "-120%",
				scale: 0.6,
				opacity: 0,
				display: "block",
			},
		};

		return styles[offset] || styles[0];
	};

	return (
		<section className="py-20 bg-white overflow-hidden">
			<Container>
				<div className="text-center max-w-2xl mx-auto mb-16">
					<Typography
						variant="small"
						className="font-bold text-primary uppercase tracking-wider mb-2 block"
					>
						Testimonios
					</Typography>
					<Typography variant="h2" className="mb-4">
						Lo que dicen nuestros clientes
					</Typography>
					<Typography variant="body" className="text-slate-600">
						La satisfacción de nuestros clientes es nuestra mejor
						carta de presentación.
					</Typography>
				</div>

				<div className="relative max-w-6xl mx-auto h-[500px] flex items-center justify-center">
					{/* Navigation Buttons */}
					<button
						onClick={prevTestimonial}
						className="absolute left-4 md:left-0 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white shadow-xl text-slate-600 hover:text-primary transition-colors border border-slate-100"
						aria-label="Previous testimonial"
					>
						<ChevronLeft size={24} />
					</button>
					<button
						onClick={nextTestimonial}
						className="absolute right-4 md:right-0 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white shadow-xl text-slate-600 hover:text-primary transition-colors border border-slate-100"
						aria-label="Next testimonial"
					>
						<ChevronRight size={24} />
					</button>

					<div className="relative w-full h-full flex items-center justify-center perspective-1000">
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={index}
								initial={false}
								animate={getCardStyle(index)}
								transition={{
									duration: 0.5,
									ease: "easeInOut",
								}}
								className="absolute w-full max-w-2xl px-4"
							>
								<div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-lg mx-auto text-center h-full flex flex-col justify-center">
									<div className="flex justify-center gap-1 text-yellow-400 mb-6">
										{[...Array(testimonial.rating)].map(
											(_, i) => (
												<Star
													key={i}
													size={20}
													fill="currentColor"
												/>
											)
										)}
									</div>
									<p className="text-slate-700 mb-8 text-lg md:text-xl italic leading-relaxed">
										"{testimonial.content}"
									</p>
									<div className="flex flex-col items-center gap-4">
										<img
											src={testimonial.image}
											alt={testimonial.name}
											className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
										/>
										<div>
											<h5 className="font-bold text-slate-900 text-lg">
												{testimonial.name}
											</h5>
											<p className="text-sm text-slate-500">
												{testimonial.role}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Indicators */}
				<div className="flex justify-center gap-2 mt-8">
					{testimonials.map((_, idx) => (
						<button
							key={idx}
							onClick={() => setCurrentIndex(idx)}
							className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
								idx === currentIndex
									? "bg-primary w-8"
									: "bg-slate-300 hover:bg-slate-400"
							}`}
							aria-label={`Go to testimonial ${idx + 1}`}
						/>
					))}
				</div>
			</Container>
		</section>
	);
};
