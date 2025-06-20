import React from "react";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "black";
	size?: "sm" | "md" | "lg";
	children: React.ReactNode;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	variant = "primary",
	size = "md",
	children,
	className = "",
	...props
}) => {
	const baseStyles =
		"relative rounded-full transition-all duration-200 font-normal inline-flex items-center justify-center";

	const variantStyles = {
		primary: "bg-accent-primary hover:bg-accent-hover text-primary",
		secondary: "bg-white/10 backdrop-blur-md hover:bg-white/20 text-white/80",
		black: "bg-black/85 hover:bg-black text-light",
	};

	const sizeStyles = {
		sm: "px-4 py-2 text-xs sm:text-sm",
		md: "px-6 py-2 text-sm sm:text-base",
		lg: "px-8 py-3 text-base sm:text-lg",
	};

	const combinedClassName =
		`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

	return (
		<button className={combinedClassName} {...props}>
			<span className="relative z-10">{children}</span>
		</button>
	);
};

export default Button;
