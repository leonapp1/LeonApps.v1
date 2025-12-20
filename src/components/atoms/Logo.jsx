import React from "react";
import { cn } from "../../utils/cn";
import LogoLA from "../../assets/LogoLA.svg";

export const Logo = ({ className }) => {
	return (
		<div className={cn("", className)}>
			<img src={LogoLA} alt="Logo LeonApps" className="h-12" />
		</div>
	);
};
