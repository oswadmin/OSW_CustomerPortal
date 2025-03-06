
import { CardReviews } from "@/components/CardReviews"
import { CardServicesv4 } from "@/components/CardServices"
import { CardWhyUsLarge } from "@/components/CardWhyUsLarge"
import ModalOverlay from "@/components/MenuMobileBottom"
import { PageEstimateSection } from "@/components/PageSection-Estimate"
import PageFooter from "@/components/PageFooter"
import { PageSection } from "@/components/PageSection"
import { PageTitleSection } from "@/components/PageSection-Title"
import { servicesConfig, siteConfig } from "@/config"
import Image from "next/image"
import { map } from "zod"
import { useState, useEffect } from "react"
import GoogelReviews from "@/components/GoogleReview"
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"
import { ButtonMedia } from "@/components/ButtonMedia"
import { InstagramIcon } from "lucide-react"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"

const imgH = "600"
let mapCount = 0
let printDiv = true

function test(somdata: any) {
	const willSee = "ok"
}

export const metadata: Metadata = {
	title: "Orange Soft Wash",
	description: "Premier soft washing, pressure washing and power washing experts. We offer driveway, house, roof, deck, fence, patio, and waste bin washing. Currently serving thes Ohio cities: Westerville, Sunbury, New Albany, Lewis Center, Worthington and surrounding areas. Visit our website to see how our delightful orange-scented soft washing sets us apart and request a free estimate.",
	openGraph: {
		images: ['/OSW_Logo_3_Transparent.png'],
	},
};

export default function HomePage() {
	return (
		<>
			<main>
				{/*****************************************************************/}
				{/* TITLE SECTION*/}
				{/*****************************************************************/}
				<PageTitleSection
					title="Soft Washing Central Ohio"
					imgURL="/OSW_Surface1.jpg"
					imgAlt="Pressure Washing Walkway"
				/>

				{/*****************************************************************/}
				{/* SERVICES SECTION*/}
				{/*****************************************************************/}
				<PageSection
					sectionID="Services"
					title="What we wash"
					subtitle="Click a service to dive deeper..."
					className="bg-gradient-to-b from-white via-sky-100 to-white"
				>
					<div className="flex flex-col desktop:flex-row desktop:flex-wrap justify-center gap-4 px-4 desktop:px-0">
						{servicesConfig.OSW_Services.map((obj, index) => {
							if (obj.activeService) {
								return (
									<CardServicesv4
										cardTitle={obj.name}
										cardURL={obj.url}
										key={`ServiceLing_${obj.name}`}
									>
										<Image
											src={obj.src}
											alt=""
											width={600}
											height={600}
											className={obj.className}
										/>
									</CardServicesv4>
								)
							}
							return null
						})}
					</div>
				</PageSection>

				{/*****************************************************************/}
				{/* FAQs */}
				{/*****************************************************************/}
				<PageSection
					sectionID="FAQs"
					title="What is Soft Washing?"
					subtitle="A safe  effective way to clean your home..."
					className="bg-white"
				>
					<div className="flex flex-col desktop:flex-row">
						<div className="flex flex-1 flex-col text-lg justify-center items-center px-6">
							Soft washing is a low-pressure approach which combines special cleaning solution, soaps, and
							a power washing system that uses about the same pressure as a garden hose. However, unlike a
							standard garden hose, our equipment provides increased flow rate allowing us to easily reach
							any part of your home from the ground. We promise to never use high-pressure on delicate
							surfaces!
						</div>
					</div>
				</PageSection>

				{/*****************************************************************/}
				{/* GALARY SECTION */}
				{/*****************************************************************/}
				<PageSection sectionID="Gallery" title="Before and After" subtitle="" className="bg-white ">
					<div className="flex flex-1 justify-center">
						<ReactCompareSlider
							className="rounded-2xl shadow-lg h-[349px] w-[545px]"
							position={95}
							itemOne={<ReactCompareSliderImage src="./OSW_Driveway_Before.png" alt="Image one" />}
							itemTwo={<ReactCompareSliderImage src="./OSW_Driveway_After.png" alt="Image two" />}
						/>
					</div>

					<div className="flex flex-1 justify-center text-lg align-middle items-center pt-2">
						<p className="mr-2">Watch our transformations on </p>
						<a
							href={siteConfig.OSW_Links.Instagram}
							aria-label="Instagram"
							target="_blank"
							rel="noopener noreferrer"
							className="text-wrap"
						>
							<Image
								src="/MediaIcon_Instagram.png"
								alt="Instagram"
								width={40}
								height={40}
								className="border-2 border-white w-[40px]"
							/>
						</a>
					</div>
				</PageSection>

				{/*****************************************************************/}
				{/* LOCATIONS SECTION */}
				{/*****************************************************************/}
				<PageSection
					sectionID="Locations"
					title="Our Locations"
					subtitle="We're expanding, now serving all North Columbus areas..."
					className="bg-gradient-to-b from-white via-sky-100 to-white"
				>
					<div className="flex flex-col desktop:flex-row">
						<div className="flex flex-1 flex-col justify-center items-center text-blue">
							<p className="text-2xl pb-2">North Columbus</p>
							<p className="text-2xl pb-2">Dublin</p>
							<p className="text-2xl pb-2">Worthington</p>
							<p className="text-2xl pb-2">Westerville</p>
							<p className="text-2xl pb-2">New Albany</p>
							<p className="text-2xl pb-2">Upper Arlington</p>

							<p className="text-2xl pb-2">Johnstown</p>
							<p className="text-2xl pb-2">Sunbury</p>
							<p className="text-2xl pb-2">Delaware</p>
							<p className="text-2xl pt-2 pb-2">+ Surrounding Areas</p>

						</div>

						<div className="flex-1">
							<Image
								src="/OSW_Locations.png"
								alt="Locations Map"
								width={800}
								height={588}
								className="rounded-[12px] border-orange border-[1px]  shadow-lg"
							/>
						</div>
					</div>
				</PageSection>

				{/*****************************************************************/}
				{/* REVIEWS SECTION */}
				{/*****************************************************************/}
				<PageSection
					sectionID="Reviews"
					title="Our Reviews"
					subtitle="What people are saying..."
					className="bg-gradient-to-b from-white via-sky-100 to-white"
				>
					<GoogelReviews placeId="ChIJQ7ge5FCdNKMRdhLJTP6maks" />
				</PageSection>

				{/*****************************************************************/}
				{/* ABOUT SECTION */}
				{/*****************************************************************/}
				<PageSection sectionID="About" title="About us" subtitle=" " className="bg-white">
					{/*****************************************************************/}
					{/* OWNERS MESSAGE */}
					{/*****************************************************************/}
					<div className="container flex gap-6 mb-4 flex-col desktop:flex-row ">
						<div className="flex flex-col w-full desktop:w-2/3 order-2 desktop:order-1">
							<span className="text-2xl desktop:text-3xl font-bold text-blue mb-4">
								A message from the owner
							</span>
							<span>{`Dylan here, owner and operator of Orange Softwash. I'd like to start off by saying thank you for considering us for your home washing needs. I have instilled in my team that excellence, commitment, passion, and top-notch services are table stakes, but they are only part of our measurement of success.  Above all else, its the people we serve, and the experiences we create, that truly set us apart.   I take great pride in my team, and I'm confident that you will not find a better exterior washing services anywhere else.`}</span>
						</div>

						<div className="flex order-1 md:order-2">
							<div className="w-[250px] h-[250px] rounded-full border-[1px] border-orange shadow-lg overflow-hidden">
								<Image
									src={siteConfig.OSW_IMG.PROFILE_DYLAN}
									alt=""
									width={600}
									height={600}
									className="relative scale-[1.4] left-[0px] bottom-[0px]"
								/>
							</div>
						</div>
					</div>

					{/*****************************************************************/}
					{/* VALUE MESSAGE */}
					{/*****************************************************************/}
					<div className="container flex flex-col desktop:flex-row justify-between gap-6 items-center ">
						<div className="flex lg:w-1/3 sm:flex-col">
							<div className="w-[250px] h-[250px] rounded-full border-[1px]] border-orange shadow-lg overflow-hidden">
								<Image
									src={siteConfig.OSW_IMG.Edger1}
									alt=""
									width={600}
									height={600}
									className="relative scale-[1.7] left-[0px] bottom-[-50px]"
								/>
							</div>
						</div>
						<div className="flex flex-col lg:w-2/3 ">
							<span className="text-2xl desktop:text-3xl font-bold text-blue mb-4">
								Our value is unmatched
							</span>
							<span>{`Orange Softwash goes above and beyond to provide results at prices that make sense for your budget. We don't just clean—we aim to protect your investment. Our expert team tailors each service to your property's specific needs. We bring the perfect balance of power and precision to every job, proving why homeowners and businesses throughout the area trust us as their go-to exterior cleaning specialists.`}</span>
						</div>
					</div>
				</PageSection>

				{/*****************************************************************/}
				{/* WHY SECTION */}
				{/*****************************************************************/}
				<PageSection sectionID="Why" title="Why Choose Us?" subtitle=" " className="bg-gradient-to-b from-white from-0% via-sky-100 via-50%  to-white to-99% ">
					<div className="container flex flex-wrap justify-center gap-4 ">
						<CardWhyUsLarge
							title="Quick & Easy"
							cardText="Customer experience is our #1 goal.  We make it a breaze to work with us"
						>
							<Image
								src={siteConfig.OSW_IMG.IconLightning}
								alt=""
								width={50}
								height={50}
								className="object-contain"
							/>
						</CardWhyUsLarge>

						<CardWhyUsLarge
							title="Eco-Friendly Options"
							cardText="We prioritize both the health of your property and the planet"
						>
							<Image src={siteConfig.OSW_IMG.IconEco} alt="" width={50} height={50} className="" />
						</CardWhyUsLarge>

						<CardWhyUsLarge title="Licensed & Insured" cardText="Trust and confidence in the team you call">
							<Image src={siteConfig.OSW_IMG.IconShield} alt="" width={50} height={50} className="" />
						</CardWhyUsLarge>

						<CardWhyUsLarge title="Satisfaction Guaranteed" cardText="We stand behind our services 100%">
							<Image
								src={siteConfig.OSW_IMG.IconSatisfaction}
								alt=""
								width={50}
								height={50}
								className=""
							/>
						</CardWhyUsLarge>
					</div>
				</PageSection>

				{/*****************************************************************/}
				{/* ESTIMATE SECTION */}
				{/*****************************************************************/}
				{/* <PageEstimateSection className="bg-gradient-to-b from-white to-orange_light" title="Orange ya ready for a new look?"/> */}

				<PageEstimateSection className="bg-white" title="Orange ya ready for a new look?" />
			</main>

			<PageFooter />
			<ModalOverlay />
		</>
	)
}
