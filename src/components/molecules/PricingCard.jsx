import React from "react";
import { Rocket } from "lucide-react";
import { Typography } from "../atoms/Typography";
import { cn } from "../../utils/cn";

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

export const PricingCard = ({
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

        <ul className="space-y-4 mb-8 grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className={cn("mr-3 mt-1", colors.text)}>✓</span>
              <span className="text-slate-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={cn(
            "w-full py-3 rounded-lg text-white font-semibold transition-colors shadow-md",
            colors.button
          )}
        >
          Elegir Plan
        </button>
			</div>
		</div>
	);
};
