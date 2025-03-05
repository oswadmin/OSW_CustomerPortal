import { ButtonStandard } from "./ButtonStandard"

interface PageSectionProps {
	title?: string
	className?: string
}

export function PageEstimateSection({ title, className = "" }: PageSectionProps) {
	return (
		<>
			<section id="Estimate" className={`pt-10 desktop:pt-14 pb-14 bg-orange ${className}`}>
				<div className="container mx-auto px-1">
					<div className="text-center mb-1">
						{title && (
							<h2 className="text-2xl desktop:text-5xl font-extrabold desktop:font-bold mb-2 text-blue">
								{title}
							</h2>
						)}
					</div>
					<div className="content flex justify-center">
						<ButtonStandard
							strURL="/estimate"
							className="m-4 bg-gradient-to-b from-orange_light to-orange hover:bg-orange w-full desktop:w-96 h-[50px] text-2xl"
						>
							Request a free estimate
						</ButtonStandard>
					</div>
				</div>
			</section>
		</>
	)
}
