import React from "react";
import { Check, Rocket } from "lucide-react";
import { Typography } from "../atoms/Typography";
import { cn } from "../../utils/cn";

interface PricingCardProps {
	title: string;
	price: string;
	description: string;
	features: string[];
	isPopular?: boolean;
	colorType?: "web" | "design" | "marketing" | "software";
}

const colorMap = {
	web: {
		bg: "bg-blue-50",
		text: "text-service-web",
		ring: "ring-service-web",
		button: "bg-service-web hover:bg-blue-800",
		badge: "bg-service-web",
		icon: "text-service-web",
	},
	design: {
		bg: "bg-purple-50",
		text: "text-service-design",
		ring: "ring-service-design",
		button: "bg-service-design hover:bg-purple-800",
		badge: "bg-service-design",
		icon: "text-service-design",
	},
	marketing: {
		bg: "bg-amber-50",
		text: "text-service-marketing",
		ring: "ring-service-marketing",
		button: "bg-service-marketing hover:bg-amber-700",
		badge: "bg-service-marketing",
		icon: "text-service-marketing",
	},
	software: {
		bg: "bg-emerald-50",
		text: "text-service-software",
		ring: "ring-service-software",
		button: "bg-service-software hover:bg-emerald-700",
		badge: "bg-service-software",
		icon: "text-service-software",
	},
};

export const PricingCard: React.FC<PricingCardProps> = ({
	title,
	price,
	description,
	features,
	isPopular,
	colorType = "web",
}) => {
	const colors = colorMap[colorType];

	return (
		<div
			className={cn(
				"bg-white rounded-2xl shadow-soft overflow-hidden border border-slate-100 flex flex-col h-full transition-transform hover:-translate-y-2 relative",
				isPopular && `ring-2 ${colors.ring} shadow-xl`
			)}
		>
			{isPopular && (
				<div
					className={cn(
						"absolute top-0 right-0 text-white text-xs font-bold px-3 py-1 rounded-bl-lg",
						colors.badge
					)}
				>
					POPULAR
				</div>
			)}

			<div
				className={cn(
					"p-6 text-center border-b border-slate-50",
					colors.bg
				)}
			>
				<div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
					<Rocket className={colors.icon} />
				</div>
				<Typography variant="h4" className="mb-2">
					{title}
				</Typography>
			</div>

			<div className="p-8 grow flex flex-col">
				<div className="text-center mb-6">
					<span
						className={cn("text-4xl font-extrabold", colors.text)}
					>
						{price}
					</span>
					<span className="text-slate-500 font-medium ml-1">PEN</span>
				</div>
				<p className="text-sm text-slate-500 text-center mb-8 min-h-[40px]">
					{description}
				</p>

				<ul className="space-y-4 mb-8 grow">
					{features.map((feature, idx) => (
						<li
							key={idx}
							className="flex items-start gap-3 text-sm text-slate-600"
						>
							<Check
								size={16}
								className={cn(
									"mt-0.5 flex-shrink-0",
									colors.text
								)}
							/>
							<span>{feature}</span>
						</li>
					))}
				</ul>

				<button
					className={cn(
						"w-full py-3 rounded-lg font-bold text-white transition-colors shadow-sm",
						isPopular
							? colors.button
							: "bg-slate-800 hover:bg-slate-700"
					)}
				>
					Seleccionar plan
				</button>
			</div>
		</div>
	);
};
