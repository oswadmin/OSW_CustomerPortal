"use client"

import { CardServices, CardServicesv2, CardServicesv3, CardServicesv4 } from "@/components/CardServices"
import ModalOverlay from "@/components/MenuMobileBottom"
import { PageEstimateSection } from "@/components/PageSection-Estimate"
import PageFooter from "@/components/PageFooter"
import { PageSection } from "@/components/PageSection"
import { PageTitleSection } from "@/components/PageSection-Title"
import { servicesConfig } from "@/config/servicesConfig"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function ServicePage() {
	const serviceData = servicesConfig.OSW_Services

	//return <div>Service not found</div>
	if (!serviceData) {
		return <div>ServiceData Not Found</div>
	}

	return (
		<>
			{/*****************************************************************/}
			{/* TITLE SECTION*/}
			{/*****************************************************************/}
			<PageTitleSection title="Our Services" imgURL="/OSW_Surface1.jpg" />

			{serviceData.map((obj, index) => {
				if (obj.activeService) {
					return (
						<>
							{/*****************************************************************/}
							{/* PRESSURE WASHING SERVICES SECTION*/}
							{/*****************************************************************/}
							<PageSection
								sectionID={obj.name}
								title={obj.service.titleMsg}
								subtitle={obj.service.subTitleMsg}
								className="bg-white"
							>
								<div className="flex flex-wrap justify-center desktop:space-x-4">
									{obj.service.details.map((detail, index) => (
										<>
											<CardServicesv4
												cardTitle={detail.detailSummary}
												cardDesc={detail.detailDescription}
											>
												<Image
													src={detail.detailImageURL}
													alt=""
													width={600}
													height={600}
													className={detail.detailImageClass}
												/>
											</CardServicesv4>
										</>
									))}
								</div>
							</PageSection>

							{/*****************************************************************/}
							{/* ESTIMATE SECTION */}
							{/*****************************************************************/}
							<PageEstimateSection title={obj.service.estimateMsg} className="bg-white" />
						</>
					)
				}
			})}
		</>
	)
}

function BuildSection() {}

export default function ServicesPage() {
	return (
		<>
			<main>
				<Suspense fallback={<div>Loading Content...</div>}>
					<ServicePage />
				</Suspense>
			</main>

			<PageFooter />
			<ModalOverlay />
		</>
	)
}
