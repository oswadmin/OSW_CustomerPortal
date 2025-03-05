import React, { ReactNode } from "react"
import { Button } from "./ui/button"

interface ButtonMediaProps {
	strURL?: string
	aria_label?: string
	children: ReactNode
}

export function ButtonMedia({ strURL = "", aria_label = "", children }: ButtonMediaProps) {
	return (
		<>
			<Button
				className="hover:scale-105 rounded-full bg-blue_dark hover:bg-blue_dark w-10 h-10 mr-2 relative"
				asChild
			>
				<div className="relative  w-10 h-10 rounded-full bg-blue_dark">
					<a
						href={strURL}
						target="_blank"
						rel="noopener noreferrer"
						className="text-wrap"
						aria-label={aria_label}
					>
						{children}
					</a>
				</div>
			</Button>
		</>
	)
}
