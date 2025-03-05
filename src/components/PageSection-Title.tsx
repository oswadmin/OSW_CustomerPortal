import React from "react"
import { CardWhyUsSmall } from "./CardWhyUsSmall"
import Image from "next/image"
import { ButtonStandard } from "./ButtonStandard"
import { siteConfig, messageConfig } from "@/config"

interface PageTitleSectionProps {
	title?: string
	imgURL?: string
	imgAlt?: string
}

export function PageTitleSection({ title, imgURL = siteConfig.OSW_IMG.DECK1, imgAlt = "" }: PageTitleSectionProps) {
	return (
		<>
			<div className="container flex flex-col desktop:flex-row items-center p-2 gap-4 min-h-[425px]">
				<div className="flex-1 flex-col justify-center space-y-6 ">
					<h1 className="font-extrabold desktop:font-bold text-5xl desktop:text-7xl text-blue text-center desktop:text-left">
						{title}
					</h1>

					<p className="font-bold text-lg desktop:text-2xl text-blue text-center desktop:text-left">
						{messageConfig.OSW_MSG_TagLine}
					</p>

					<ButtonStandard
						strURL="/estimate"
						className="w-full h-[50px] bg-gradient-to-b from-orange_light to-orange hover:bg-orange text-xl desktop:text-2xl"
					>
						Request a free estimate
					</ButtonStandard>
				</div>

				<div className="mt-4 desktop:mt-0 desktop:flex-1 flex justify-end items-center bg-orange-400">
					<Image
						className="rounded-[12px] border-orange border-[1px] shadow-lg"
						src={imgURL}
						alt={imgAlt}
						width={400}
						height={300}
						priority
					/>

					{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ImygmNx-ALM?si=iN48u8VRVKUrwO1K&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe> */}
				</div>
			</div>

			<div className="container flex flex-col desktop:flex-row mt-4 desktop:mx-auto p-2 gap-2 justify-items-start desktop:justify-around desktop:items-center">
				<CardWhyUsSmall title="Quick & Easy">
					<Image
						src={siteConfig.OSW_IMG.IconLightning}
						alt="Quick & Easy"
						width={50}
						height={50}
						className=""
					/>
				</CardWhyUsSmall>
				<CardWhyUsSmall title="Eco-Friendly Options">
					<Image
						src={siteConfig.OSW_IMG.IconEco}
						alt="Eco-Friendly Options"
						width={50}
						height={50}
						className=""
					/>
				</CardWhyUsSmall>

				<CardWhyUsSmall title="Licensed & Insured">
					<Image
						src={siteConfig.OSW_IMG.IconShield}
						alt="Licensed & Insured"
						width={50}
						height={50}
						className=""
					/>
				</CardWhyUsSmall>
				<CardWhyUsSmall title="Satisfaction Guaranteed">
					<Image
						src={siteConfig.OSW_IMG.IconSatisfaction}
						alt="Satisfaction Guaranteed"
						width={50}
						height={50}
						className=""
					/>
				</CardWhyUsSmall>
			</div>
		</>
	)
}
